'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from './LoadingScreen';

// Custom hook for device and preference checks
const useDevicePreferences = () => {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    isLowPoweredDevice: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const isLowPoweredDevice = isMobile || 
      (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
    
    setPreferences({ reducedMotion, isLowPoweredDevice });
  }, []);

  return preferences;
};

interface LoadingScreenWrapperProps {
  children?: ReactNode;
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({ children }) => {
  // Single state object for loading states
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isFadingOut: false,
    contentVisible: false
  });
  
  const { reducedMotion, isLowPoweredDevice } = useDevicePreferences();
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Immediately display content in development mode for faster reloads
    if (process.env.NODE_ENV === 'development') {
      // Skip loading animation in development
      setLoadingState({ isLoading: false, isFadingOut: false, contentVisible: true });
      document.documentElement.classList.remove('loading-init');
      document.documentElement.classList.add('content-visible');
      document.body.style.overflow = '';
      document.documentElement.style.backgroundColor = '';
      return;
    }

    // Add loading classes once
    document.documentElement.classList.add('loading-init');
    document.body.style.overflow = 'hidden';
    // Use a background closer to the site's final background to reduce contrast
    document.documentElement.style.backgroundColor = '#F9F8F6'; // Light background similar to final state
    
    // Store timeouts for cleanup
    const timeouts: NodeJS.Timeout[] = [];
    
    // Define transition function
    const startTransition = () => {
      // First start fading out the loading screen
      setLoadingState(prev => ({ ...prev, isFadingOut: true }));
      
      // Only after loading screen starts to fade out, begin transitioning the background
      // and showing content
      const transitionTime = reducedMotion || isLowPoweredDevice ? 600 : 1000;
      
      const completeDelay = setTimeout(() => {
        // Set background transition before making content visible
        document.documentElement.style.transition = 'background-color 1s ease-out';
        document.documentElement.style.backgroundColor = '';
        
        // Make content visible AFTER loading screen starts fading
        setLoadingState(prev => ({ ...prev, contentVisible: true }));
        
        // Then after loading screen is mostly faded, completely remove it
        const finalDelay = setTimeout(() => {
          setLoadingState({ isLoading: false, isFadingOut: false, contentVisible: true });
          document.documentElement.classList.remove('loading-init');
          document.documentElement.classList.add('content-visible');
          document.body.style.overflow = '';
        }, transitionTime / 2); // Use half the transition time to remove loading screen
        
        timeouts.push(finalDelay);
      }, transitionTime / 4); // Start showing content at 1/4 of the transition
      
      timeouts.push(completeDelay);
    };
    
    // Determine maximum wait time - shorter for better UX
    const maxWaitTime = reducedMotion || isLowPoweredDevice ? 2000 : 3000;
    
    // Set maximum wait time failsafe
    const maxWaitTimeoutId = setTimeout(startTransition, maxWaitTime);
    timeouts.push(maxWaitTimeoutId);
    
    // Handle load event if document isn't already loaded
    const handleLoad = () => {
      clearTimeout(maxWaitTimeoutId);
      const loadDelay = setTimeout(startTransition, 
        reducedMotion || isLowPoweredDevice ? 500 : 800);
      timeouts.push(loadDelay);
    };
    
    if (document.readyState === 'complete') {
      const initialDelay = setTimeout(handleLoad, reducedMotion ? 400 : 600);
      timeouts.push(initialDelay);
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Super aggressive failsafe - always show content after 5 seconds no matter what
    const emergencyFailsafe = setTimeout(() => {
      console.log('Emergency failsafe triggered - forcing content to display');
      setLoadingState({ isLoading: false, isFadingOut: false, contentVisible: true });
      document.documentElement.classList.remove('loading-init');
      document.documentElement.classList.add('content-visible');
      document.body.style.overflow = '';
      document.documentElement.style.backgroundColor = '';
    }, 5000);
    timeouts.push(emergencyFailsafe);

    // Cleanup function
    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('load', handleLoad);
      document.documentElement.classList.remove('loading-init');
      document.documentElement.classList.remove('content-visible');
      document.body.style.overflow = '';
    };
  }, [reducedMotion, isLowPoweredDevice]);

  const { isLoading, isFadingOut, contentVisible } = loadingState;

  return (
    <>
      {/* Main content - completely invisible until ready to show */}
      <div 
        className="transition-opacity"
        style={{ 
          opacity: contentVisible ? 1 : 0, // Change from 0.01 to 0 for complete invisibility
          transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          visibility: contentVisible ? 'visible' : 'hidden' // Add visibility to prevent interaction
        }}
      >
        {children}
      </div>
      
      {/* Loading screen - only show if explicitly in loading state */}
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
    </>
  );
};

export default LoadingScreenWrapper; 