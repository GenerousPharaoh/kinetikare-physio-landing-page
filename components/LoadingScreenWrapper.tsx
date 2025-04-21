'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from './LoadingScreen';

// Check if reduced motion is preferred by the user
const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

interface LoadingScreenWrapperProps {
  children?: ReactNode;
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  
  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined') return;

    // Add loading class to html element immediately
    document.documentElement.classList.add('loading-init');
    
    // Make sure body can't scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Create timeoutIds for proper cleanup
    let fadeTimeoutId: NodeJS.Timeout;
    let loadTimeoutId: NodeJS.Timeout;
    let maxWaitTimeoutId: NodeJS.Timeout;
    let contentFadeInTimeoutId: NodeJS.Timeout;
    let contentReadyTimeoutId: NodeJS.Timeout;
    
    // Check for reduced motion preference and device capabilities
    const reducedMotion = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;
    const isLowPoweredDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
    
    // Function to ensure the main content is ready before fading out loader
    const prepareForTransition = () => {
      // First preload critical resources and make content ready but invisible
      const preloadResources = async () => {
        // Begin preparing content in the background while loader is still visible
        setContentReady(true);
        
        // Make sure all important images and resources are loaded
        const criticalImages = document.querySelectorAll('img[data-critical="true"]');
        
        // Wait for all critical images to load or max 500ms
        if (criticalImages.length > 0) {
          const promises = Array.from(criticalImages).map(img => {
            if (img instanceof HTMLImageElement && !img.complete) {
              return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve; // Resolve anyway to avoid blocking
              });
            }
            return Promise.resolve();
          });
          
          try {
            await Promise.race([
              Promise.all(promises),
              new Promise(resolve => setTimeout(resolve, 500))
            ]);
          } catch (e) {
            console.log('Image preloading had errors, continuing anyway');
          }
        }
        
        // Set content ready first but still invisible
        contentReadyTimeoutId = setTimeout(() => {
          // Make content ready in the DOM first, but still with opacity 0
          setContentVisible(true);
          
          // Give the browser a moment to paint the content (still invisible)
          setTimeout(() => {
            // Now start fading out the loading screen
            setIsFadingOut(true);
            
            // After loading screen starts fading out, remove it completely 
            // and make content visible in a coordinated way
            fadeTimeoutId = setTimeout(() => {
              // Now remove the loading component once it's faded away
              setIsLoading(false);
              
              // At this point, add the class that makes content fully visible
              document.documentElement.classList.add('content-visible');
              
              // Wait for content transition before allowing scrolling
              contentFadeInTimeoutId = setTimeout(() => {
                document.documentElement.classList.remove('loading-init');
                document.body.style.overflow = '';
              }, 300);
            }, reducedMotion || isLowPoweredDevice ? 600 : 900);
          }, 100);
        }, 100);
      };
      
      // Start the preload and transition process
      preloadResources();
    };
    
    // Set a maximum wait time regardless of page load status
    const maxWaitTime = reducedMotion || isLowPoweredDevice ? 3000 : 4000;
    
    // Maximum time to wait before transitioning, regardless of document ready state
    maxWaitTimeoutId = setTimeout(() => {
      prepareForTransition();
    }, maxWaitTime);
    
    // Add load event handler as a safety to catch normal page load events
    const handleLoad = () => {
      // Clear the max wait timeout since the page has loaded
      clearTimeout(maxWaitTimeoutId);
      
      // Wait a short time after load to allow the browser to settle
      loadTimeoutId = setTimeout(() => {
        prepareForTransition();
      }, reducedMotion || isLowPoweredDevice ? 1000 : 1500);
    };
    
    // Check document.readyState and set up appropriate handlers
    if (document.readyState === 'complete') {
      // If already complete, schedule transition soon
      loadTimeoutId = setTimeout(() => {
        prepareForTransition();
      }, reducedMotion ? 800 : 1200);
    } else {
      // Listen for load event if not already complete
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Ensure cleanup of all timeouts and event listeners
    return () => {
      clearTimeout(fadeTimeoutId);
      clearTimeout(loadTimeoutId);
      clearTimeout(maxWaitTimeoutId);
      clearTimeout(contentFadeInTimeoutId);
      clearTimeout(contentReadyTimeoutId);
      window.removeEventListener('load', handleLoad);
      document.documentElement.classList.remove('loading-init');
      document.documentElement.classList.remove('content-visible');
      document.body.style.overflow = '';
    };
  }, []); // Run only once on mount

  return (
    <>
      {/* Render children in the DOM but keep them hidden until needed */}
      <div 
        className={`main-content-wrapper ${contentReady ? 'ready' : ''} ${contentVisible ? 'visible' : ''}`}
        style={{ 
          opacity: contentVisible ? 1 : 0,
          visibility: contentReady ? 'visible' : 'hidden',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0s',
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      >
        {children}
      </div>
      
      {/* Loading screen - removed from DOM when loading complete */}
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
    </>
  );
};

export default LoadingScreenWrapper; 