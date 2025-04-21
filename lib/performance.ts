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
}; 

export default performanceUtils; 