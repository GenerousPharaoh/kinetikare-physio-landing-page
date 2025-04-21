'use client';

import { useEffect } from 'react';

/**
 * PerformanceOptimizer Component
 * 
 * This component implements various browser-level optimizations to improve overall site performance.
 * It handles:
 * 1. Resource hints for better loading
 * 2. Core Web Vitals optimizations
 * 3. Idle time optimization
 * 4. Main thread unblocking
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Implement requestIdleCallback for browsers that support it
    const requestIdleCallback = 
      window.requestIdleCallback || 
      ((cb) => setTimeout(cb, 1));

    // Prefetch visible links when browser is idle
    const prefetchVisibleLinks = () => {
      requestIdleCallback(() => {
        const links = document.querySelectorAll(
          'a[href^="/"]:not([prefetch-processed])'
        );
        
        if (links.length === 0) return;

        // Check which links are in the viewport
        const isInViewport = (el: Element) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        };

        // Prefetch visible links
        const linksToProcess = Array.from(links).slice(0, 5); // Process 5 at a time
        linksToProcess.forEach((link) => {
          if (!isInViewport(link)) return;
          
          const element = link as HTMLAnchorElement;
          element.setAttribute('prefetch-processed', 'true');
          
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = element.href;
          document.head.appendChild(prefetchLink);
        });

        // If there are more links, schedule another run
        if (links.length > 5) {
          setTimeout(() => prefetchVisibleLinks(), 300);
        }
      });
    };

    // Optimize animations by reducing them during scrolling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      document.body.classList.add('is-scrolling');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 200);
    };

    // Optimize images by setting loading priorities
    const optimizeImageLoading = () => {
      requestIdleCallback(() => {
        const imgElements = document.querySelectorAll('img:not([loading])');
        
        // Process a batch of images
        Array.from(imgElements).slice(0, 10).forEach((img) => {
          const imgElement = img as HTMLImageElement;
          
          // For images below the fold, use lazy loading
          if (!isInViewport(imgElement)) {
            imgElement.setAttribute('loading', 'lazy');
          } else {
            imgElement.setAttribute('loading', 'eager');
          }
          
          // Add decoding attribute for better performance
          imgElement.setAttribute('decoding', 'async');
        });
      });
    };

    const isInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Add CSS optimization to reduce repaint/reflow
    const injectPerformanceStyles = () => {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .is-scrolling .animate-on-scroll {
          animation-play-state: paused !important;
          transition: none !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        @supports (content-visibility: auto) {
          .use-content-visibility {
            content-visibility: auto;
            contain-intrinsic-size: 0 500px;
          }
        }
        
        @supports (will-change: transform) {
          .will-change-transform {
            will-change: transform;
          }
          
          .will-change-opacity {
            will-change: opacity;
          }
        }
      `;
      
      document.head.appendChild(styleElement);
    };

    // Apply browser optimizations
    const applyBrowserOptimizations = () => {
      // Set default font display to swap for better CLS
      if ('fonts' in document) {
        // @ts-ignore
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('fonts-loaded');
        });
      }
      
      // Add hint to browser that page navigation is expected
      if ('connection' in navigator) {
        // @ts-ignore
        if (navigator.connection.saveData === false) {
          document.documentElement.classList.add('no-save-data');
          
          // Warm connections to critical origins
          const preconnectOrigins = [
            window.location.origin,
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
          ];
          
          preconnectOrigins.forEach(origin => {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = origin;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          });
        }
      }
    };

    // Initial execution
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', optimizeImageLoading, { passive: true });
    
    injectPerformanceStyles();
    applyBrowserOptimizations();
    
    // Wait for page to be fully loaded before optimizing
    if (document.readyState === 'complete') {
      prefetchVisibleLinks();
      optimizeImageLoading();
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          prefetchVisibleLinks();
          optimizeImageLoading();
        }, 300); // Small delay after load
      });
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', optimizeImageLoading);
      clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array means this runs once on mount

  // This component doesn't render anything
  return null;
} 