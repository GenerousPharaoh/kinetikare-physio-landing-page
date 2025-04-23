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
    // Utility functions to batch DOM read/write operations
    // This prevents layout thrashing (https://web.dev/avoid-large-complex-layouts-and-layout-thrashing/)
    const domReadOperations: Array<() => void> = [];
    const domWriteOperations: Array<() => void> = [];

    const batchDomReads = (fn: () => void) => {
      domReadOperations.push(fn);
      scheduleRender();
    };

    const batchDomWrites = (fn: () => void) => {
      domWriteOperations.push(fn);
      scheduleRender();
    };

    let renderScheduled = false;

    // Use requestAnimationFrame for smoother performance
    const scheduleRender = () => {
      if (renderScheduled) return;
      renderScheduled = true;
      
      requestAnimationFrame(() => {
        // First do all reads
        domReadOperations.forEach(read => read());
        domReadOperations.length = 0;
        
        // Then do all writes
        domWriteOperations.forEach(write => write());
        domWriteOperations.length = 0;
        
        renderScheduled = false;
      });
    };

    // Use better requestIdleCallback implementation
    const requestIdleCallback = 
      window.requestIdleCallback || 
      ((cb) => setTimeout(() => cb({
        didTimeout: false,
        timeRemaining: () => 50
      }), 50)); // Use 50ms timeout instead of 1ms for better performance

    // Prefetch visible links with a proper priority system
    const prefetchVisibleLinks = () => {
      requestIdleCallback((deadline) => {
        const links = document.querySelectorAll(
          'a[href^="/"]:not([prefetch-processed]):not([href$=".jpg"]):not([href$=".png"]):not([href$=".svg"])'
        );
        
        if (links.length === 0) return;

        // Create one array of all links upfront to avoid repetitive DOM reads
        const allVisibleLinks: HTMLAnchorElement[] = [];
        
        // Read DOM once
        batchDomReads(() => {
        // Check which links are in the viewport
          links.forEach(link => {
            if (isInViewport(link)) {
              allVisibleLinks.push(link as HTMLAnchorElement);
            }
          });
        });

        // Process links in batches with a remaining time constraint
        const processLinksInBatches = (visibleLinks: HTMLAnchorElement[], batchSize: number) => {
          // Early exit if no more links or time remaining
          if (visibleLinks.length === 0 || deadline.timeRemaining() < 5) return;

          // Process a batch
          const batch = visibleLinks.splice(0, batchSize);
          
          // Write DOM changes
          batchDomWrites(() => {
            batch.forEach(element => {
          element.setAttribute('prefetch-processed', 'true');
          
              // Use link rel=prefetch for important navigation links
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = element.href;
              prefetchLink.as = 'document';
          document.head.appendChild(prefetchLink);
        });
          });

          // If there are more links, schedule another batch
          if (visibleLinks.length > 0 && deadline.timeRemaining() > 10) {
            processLinksInBatches(visibleLinks, batchSize);
          } else if (visibleLinks.length > 0) {
            // Schedule another idle callback if we have more links but ran out of time
            requestIdleCallback(idle => {
              if (idle.timeRemaining() > 10) {
                processLinksInBatches(visibleLinks, batchSize);
              }
            });
          }
        };
        
        // Start processing with a reasonable batch size
        processLinksInBatches(allVisibleLinks, 3);
      });
    };

    // Optimize animations by reducing them during scrolling
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        batchDomWrites(() => {
      document.body.classList.add('is-scrolling');
          isScrolling = true;
        });
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        batchDomWrites(() => {
        document.body.classList.remove('is-scrolling');
          isScrolling = false;
        });
      }, 200);
    };

    // Optimize images using Intersection Observer
    const setupImageLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
          
              // Set loading strategy based on position
              if (entry.intersectionRatio >= 0.5) {
                img.loading = 'eager';
          } else {
                img.loading = 'lazy';
              }
              
              // Add decoding hint
              img.decoding = 'async';
              
              // Stop observing after setting attributes
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '200px 0px', // Start loading 200px before they come into view
          threshold: [0, 0.5, 1.0]
        });
        
        // Observe images
        document.querySelectorAll('img:not([loading])').forEach(img => {
          imageObserver.observe(img);
        });
      } else {
        // Fallback for browsers without IntersectionObserver
        requestIdleCallback(() => {
          document.querySelectorAll('img:not([loading])').forEach(img => {
            const imgElement = img as HTMLImageElement;
            imgElement.loading = 'lazy';
            imgElement.decoding = 'async';
        });
      });
      }
    };

    // Check if element is in viewport
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
      // Only create the style element once
      if (document.getElementById('performance-styles')) return;
      
      const styleElement = document.createElement('style');
      styleElement.id = 'performance-styles';
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
        
        /* Only apply will-change to elements that need it */
        .header-fixed, .floating-button, .motion-active {
            will-change: transform;
          }
          
        /* Better paint containment for performance */
        header, footer, section, .card {
          contain: layout paint;
        }
      `;
      
      document.head.appendChild(styleElement);
    };

    // Apply browser optimizations
    const applyBrowserOptimizations = () => {
      // Set default font display to swap for better CLS
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('fonts-loaded');
        });
      }
      
      // Preconnect to important origins
          const preconnectOrigins = [
            window.location.origin,
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com'
          ];
          
      // Add preconnect without causing layout shifts
      batchDomWrites(() => {
          preconnectOrigins.forEach(origin => {
          // Check if we already have this preconnect
          if (!document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = origin;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          }
          });
      });
    };

    // Apply passive event listeners to improve scroll performance
    const setupPassiveEventListeners = () => {
    window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('touchstart', () => {}, { passive: true });
      window.addEventListener('touchmove', () => {}, { passive: true });
    };

    // Optimization for content loaded events
    const setupLoadedListeners = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          prefetchVisibleLinks();
          setupImageLazyLoading();
        }, 300);
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            prefetchVisibleLinks();
            setupImageLazyLoading();
          }, 300);
        }, { once: true });
      }
    };

    // Initial execution in order of importance
    injectPerformanceStyles();
    setupPassiveEventListeners();
    applyBrowserOptimizations();
    setupLoadedListeners();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array means this runs once on mount

  // This component doesn't render anything
  return null;
} 