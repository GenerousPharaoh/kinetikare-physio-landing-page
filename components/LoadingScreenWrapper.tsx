'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

// Check if reduced motion is preferred by the user
const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const LoadingScreenWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
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
    
    // Check for reduced motion preference and device capabilities
    const reducedMotion = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;
    const isLowPoweredDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
    
    // Function to ensure the main content is ready before fading out loader
    const prepareForTransition = () => {
      // Start fade out transition
      setIsFadingOut(true);
      
      // After fade out is complete, remove loader completely
      fadeTimeoutId = setTimeout(() => {
        // Set state to remove loading component
        setIsLoading(false);
        
        // Cleanup classes and allow scrolling again
        document.documentElement.classList.remove('loading-init');
        document.body.style.overflow = '';
      }, reducedMotion || isLowPoweredDevice ? 200 : 400); // Even faster fade-out for better performance
    };
    
    // Set a maximum wait time regardless of page load status
    const maxWaitTime = reducedMotion || isLowPoweredDevice ? 1200 : 2000;
    
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
      }, reducedMotion || isLowPoweredDevice ? 100 : 300);
    };
    
    // Check document.readyState and set up appropriate handlers
    if (document.readyState === 'complete') {
      // If already complete, schedule transition soon
      loadTimeoutId = setTimeout(() => {
        prepareForTransition();
      }, reducedMotion ? 300 : 600);
    } else {
      // Listen for load event if not already complete
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Ensure cleanup of all timeouts and event listeners
    return () => {
      clearTimeout(fadeTimeoutId);
      clearTimeout(loadTimeoutId);
      clearTimeout(maxWaitTimeoutId);
      window.removeEventListener('load', handleLoad);
      document.documentElement.classList.remove('loading-init');
      document.body.style.overflow = '';
    };
  }, []); // Run only once on mount

  // Return null when not loading to completely remove from DOM
  if (!isLoading) return null;

  // Return loading screen with fade state
  return <LoadingScreen isFadingOut={isFadingOut} />;
};

export default LoadingScreenWrapper; 