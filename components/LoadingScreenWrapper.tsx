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
    
    // Check for reduced motion preference and device capabilities
    const reducedMotion = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;
    const isLowPoweredDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
    
    // Function to ensure the main content is ready before fading out loader
    const prepareForTransition = () => {
      // First make the content visible but with opacity 0
      setContentVisible(true);
      
      // Delayed start of the fade-out transition (give content a moment to render)
      setTimeout(() => {
        // Start fade out transition
        setIsFadingOut(true);
        
        // After fade out is complete, remove loader completely
        fadeTimeoutId = setTimeout(() => {
          // Set state to remove loading component
          setIsLoading(false);
          
          // Add a class to trigger main content fade-in
          document.documentElement.classList.add('content-visible');
          
          // Cleanup classes and allow scrolling again - delayed slightly
          contentFadeInTimeoutId = setTimeout(() => {
            document.documentElement.classList.remove('loading-init');
            document.body.style.overflow = '';
          }, 300); // Short delay after loader removal
        }, reducedMotion || isLowPoweredDevice ? 600 : 1000); // Increased fade-out time for smoother transition
      }, 100);
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
      window.removeEventListener('load', handleLoad);
      document.documentElement.classList.remove('loading-init');
      document.documentElement.classList.remove('content-visible');
      document.body.style.overflow = '';
    };
  }, []); // Run only once on mount

  return (
    <>
      {/* Main content with fade-in animation controlled by CSS */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out
          ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          opacity: contentVisible ? 1 : 0,
          transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
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