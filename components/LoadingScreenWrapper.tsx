'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from './LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showMainContent, setShowMainContent] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(0);
  
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
    let contentFadeInId: NodeJS.Timeout;
    
    // Check for reduced motion preference and device capabilities
    const reducedMotion = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;
    const isLowPoweredDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
    
    // Set page transition timing
    const fadeOutTime = reducedMotion || isLowPoweredDevice ? 800 : 1500;
    const contentTransitionDelay = reducedMotion || isLowPoweredDevice ? 400 : 800;
    
    // Enhanced function to ensure a smooth transition from loading screen to content
    const prepareForTransition = () => {
      // First, start fade out transition of the loading screen
      setIsFadingOut(true);
      
      // Start rendering the content behind the loading screen
      setShowMainContent(true);
      
      // Begin fading in the main content while the loading screen is still visible but fading
      setTimeout(() => {
        setContentOpacity(1);
      }, contentTransitionDelay / 2);
      
      // After the loading screen completes its transition, remove it
      fadeTimeoutId = setTimeout(() => {
        // Remove loading component completely
        setIsLoading(false);
        
        // Cleanup classes
        document.documentElement.classList.remove('loading-init');
        
        // Re-enable scrolling after a brief delay to ensure smooth transition
        contentFadeInId = setTimeout(() => {
          document.body.style.overflow = '';
        }, 300);
      }, fadeOutTime);
    };
    
    // Set a maximum wait time regardless of page load status
    const maxWaitTime = reducedMotion || isLowPoweredDevice ? 3000 : 4000;
    
    // Maximum time to wait before transitioning
    maxWaitTimeoutId = setTimeout(() => {
      prepareForTransition();
    }, maxWaitTime);
    
    // Add load event handler
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
      clearTimeout(contentFadeInId);
      window.removeEventListener('load', handleLoad);
      document.documentElement.classList.remove('loading-init');
      document.body.style.overflow = '';
    };
  }, []); // Run only once on mount

  // Enhanced wrapper with animated content transition
  return (
    <>
      {/* Animated main content container - conditionally render and animate */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: contentOpacity,
          filter: showMainContent ? 'none' : 'blur(10px)',
          scale: showMainContent ? 1 : 0.98
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="transition-all duration-1000 ease-in-out"
        style={{ willChange: 'opacity, filter, transform' }}
      >
        {children}
      </motion.div>
      
      {/* Loading screen with improved transition */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            isFadingOut={isFadingOut} 
            shouldRevealContent={showMainContent}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreenWrapper; 