'use client';

/**
 * Performance optimization utilities for the website
 * These utilities help with reducing animation lag and improving scrolling performance
 */

// Check if reduced motion is preferred by the user
export const prefersReducedMotion = (): boolean => {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if the device is a mobile device
export const isMobileDevice = (): boolean => {
  return typeof window !== 'undefined' && 
    (window.innerWidth < 768 || 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
};

// Check if the device is a low-powered device
export const isLowPoweredDevice = (): boolean => {
  // Basic heuristic for low-powered devices
  return isMobileDevice() || 
    (typeof navigator !== 'undefined' && 
    navigator.hardwareConcurrency !== undefined && 
    navigator.hardwareConcurrency <= 4);
};

// Get appropriate animation duration based on device capabilities
export const getAnimationDuration = (
  defaultDuration: number = 500, 
  mobileReduction: number = 0.6, 
  reducedMotionReduction: number = 0.3
): number => {
  if (prefersReducedMotion()) {
    return defaultDuration * reducedMotionReduction;
  }
  
  if (isMobileDevice()) {
    return defaultDuration * mobileReduction;
  }
  
  return defaultDuration;
};

// Debounce function for scroll event handlers
export const debounce = <F extends (...args: any[]) => any>(
  func: F, 
  wait: number = 20
): ((...args: Parameters<F>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<F>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

// Throttle function for scroll event handlers
export const throttle = <F extends (...args: any[]) => any>(
  func: F, 
  limit: number = 100
): ((...args: Parameters<F>) => void) => {
  let inThrottle: boolean = false;
  
  return function(...args: Parameters<F>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Enable hardware acceleration for an element
export const enableHardwareAcceleration = (element: HTMLElement): void => {
  if (!element) return;
  
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
  element.style.willChange = 'transform, opacity';
};

// Optimize images on the page
export const optimizeImages = (): void => {
  if (typeof window === 'undefined') return;
  
  // Find images that are offscreen and lower their priority
  const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
  
  images.forEach(img => {
    if (!isElementInViewport(img)) {
      img.loading = 'lazy';
      
      // If it has a high priority attribute, remove it for offscreen images
      if (img.getAttribute('fetchpriority') === 'high') {
        img.removeAttribute('fetchpriority');
      }
    }
  });
};

// Check if element is in viewport
export function isElementInViewport(el: Element): boolean {
  if (!el || typeof window === 'undefined') return false;
  
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom >= 0 &&
    rect.right >= 0
  );
}

// Optimize scroll performance - call this during app initialization
export const optimizeScrollPerformance = (): void => {
  if (typeof window === 'undefined') return;
  
  // Add CSS will-change hint to elements with parallax or sticky behavior
  const parallaxElements = document.querySelectorAll('.parallax, .sticky, [data-scroll]');
  parallaxElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.willChange = 'transform';
    }
  });
  
  // Throttle scroll events
  const handleScroll = throttle(() => {
    // Optimize images on scroll
    optimizeImages();
  }, 200);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial optimization
  optimizeImages();
};

// Optimizes performance by limiting animations and effects on scroll
// to reduce jank and improve perceived performance
export function optimizeScroll() {
  if (typeof window === 'undefined') return;

  let scrolling = false;
  let scrollTimeout: NodeJS.Timeout;
  let lastScrollY = window.scrollY;
  
  // Detect if we're scrolling and throttle scroll-related operations
  const handleScroll = () => {
    if (!scrolling) {
      scrolling = true;
      document.body.classList.add('is-scrolling');
      
      // Disable heavy animations while scrolling
      window.requestAnimationFrame(() => {
        // Check if scroll distance is significant
        const scrollDelta = Math.abs(window.scrollY - lastScrollY);
        
        // Only update for significant scrolls
        if (scrollDelta > 50) {
          document.body.classList.add('fast-scrolling');
        }
        
        lastScrollY = window.scrollY;
        scrolling = false;
      });
    }
    
    // Clear the timeout
    clearTimeout(scrollTimeout);
    
    // Reset classes after scrolling stops
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
      document.body.classList.remove('fast-scrolling');
    }, 100);
  };
  
  // Check for Intersection Observer support
  if ('IntersectionObserver' in window) {
    // Only animate elements when they're visible in viewport
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Optionally remove the visible class to save resources
          if (entry.boundingClientRect.y > 0) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all animatable elements
    setTimeout(() => {
      const animatableElements = document.querySelectorAll('.motion-item, .animated');
      animatableElements.forEach(el => visibilityObserver.observe(el));
    }, 100);
  }
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Debounced resize handler
  let resizeTimeout: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    document.body.classList.add('is-resizing');
    
    resizeTimeout = setTimeout(() => {
      document.body.classList.remove('is-resizing');
    }, 200);
  };
  
  window.addEventListener('resize', handleResize, { passive: true });
}

/**
 * Automatically adjusts Framer Motion animation settings based on device capability
 */
export function getOptimizedMotionProps(isReducedMotion: boolean) {
  if (isReducedMotion) {
    return {
      // For reduced motion, remove animations that move content
      translateY: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.1 }
    };
  }
  
  // Mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      // Reduced but still visible animations for mobile
      transition: { 
        duration: 0.3,
        ease: "linear" 
      }
    };
  }
  
  // Default for desktops
  return {};
}

// Assign the object to a variable before exporting
const performanceUtils = {
  prefersReducedMotion,
  isMobileDevice,
  isLowPoweredDevice,
  getAnimationDuration,
  debounce,
  throttle,
  enableHardwareAcceleration,
  optimizeImages,
  isElementInViewport,
  optimizeScrollPerformance,
  optimizeScroll,
  getOptimizedMotionProps,
}; 

export default performanceUtils; 