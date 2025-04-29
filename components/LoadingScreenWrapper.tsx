'use client';

import React, { useEffect, useState } from 'react';
import { useIsLowPowered, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface LoadingScreenWrapperProps {
  children: React.ReactNode;
}

export default function LoadingScreenWrapper({ children }: LoadingScreenWrapperProps) {
  const [showContent, setShowContent] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const isLowPoweredDevice = useIsLowPowered();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Use effect to track when children are actually ready/mounted
  useEffect(() => {
    // Once this effect runs, the children have attempted to mount
    // We can consider the initial 'loading' phase done.
    setShowContent(true);

    // Set a timeout to fade out the loading screen
    // This gives a brief moment for content to paint
    const fadeTimeout = setTimeout(() => {
      setShowLoadingScreen(false);
    }, prefersReducedMotion || isLowPoweredDevice ? 50 : 300); // Shorter delay, even shorter if reduced motion

    return () => clearTimeout(fadeTimeout);
  }, [prefersReducedMotion, isLowPoweredDevice]);

  return (
    <>
      {/* Loading Screen - fades out */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background 
                   transition-opacity duration-300 ease-in-out ${showLoadingScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!showLoadingScreen}
      >
        {/* Optional: Keep spinner or add a simple logo/element */}
        <div className="w-16 h-16 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
      
      {/* Content - becomes visible once ready */}
      <div className={showContent ? 'visible' : 'invisible'}>
        {children}
      </div>
    </>
  );
} 