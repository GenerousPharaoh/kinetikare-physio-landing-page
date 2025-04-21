'use client';

import React, { useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

interface LoadingScreenWrapperProps {
  children: React.ReactNode;
  className?: string;
  minLoadingTime?: number; // Minimum time in ms to show loading screen
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({
  children,
  className = "",
  minLoadingTime = 1500
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [loadStartTime] = useState(() => Date.now());
  
  // Calculate how much time is left to meet minimum loading time
  const calculateRemainingLoadTime = useCallback(() => {
    const elapsedTime = Date.now() - loadStartTime;
    return Math.max(0, minLoadingTime - elapsedTime);
  }, [loadStartTime, minLoadingTime]);

  // Add loading classes to HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.add('loading-init');
    
    return () => {
      htmlElement.classList.remove('loading-init');
    };
  }, []);

  // Handle loading state changes
  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Start preloading critical images
    const preloadCriticalImages = () => {
      const imagesToPreload = document.querySelectorAll('img[data-critical="true"]');
      let loadedCount = 0;
      
      if (imagesToPreload.length === 0) {
        // If no critical images, continue with loading
        return true;
      }
      
      imagesToPreload.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.complete) {
          loadedCount++;
        } else {
          imgElement.onload = () => {
            loadedCount++;
            if (loadedCount === imagesToPreload.length) {
              return true;
            }
          };
          imgElement.onerror = () => {
            loadedCount++;
            if (loadedCount === imagesToPreload.length) {
              return true;
            }
          };
        }
      });
      
      return loadedCount === imagesToPreload.length;
    };

    // Wait for both minimum loading time and critical images to load
    const remainingTime = calculateRemainingLoadTime();
    const imagesPreloaded = preloadCriticalImages();
    
    timer = setTimeout(() => {
      setIsLoading(false);
      
      // Add transition class to body
      document.body.classList.add('transition-active');
      
      // Use requestAnimationFrame to ensure smooth transition
      requestAnimationFrame(() => {
        // Add a small delay before showing content to prevent flashing
        setTimeout(() => {
          setContentReady(true);
          document.documentElement.classList.add('content-visible');
          document.body.classList.remove('transition-active');
        }, prefersReducedMotion ? 50 : 200);
      });
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [calculateRemainingLoadTime, prefersReducedMotion]);

  // Update body class for scroll locking
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('loading');
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.classList.remove('loading');
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      
      <div 
        className={`main-content-wrapper ${contentReady ? 'content-ready' : ''} ${className}`}
        style={{
          opacity: contentReady ? 1 : 0,
          visibility: contentReady ? 'visible' : 'hidden',
          transition: `opacity ${prefersReducedMotion ? '0.3s' : '0.7s'} ease-out, visibility ${prefersReducedMotion ? '0.3s' : '0.7s'} ease-out`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingScreenWrapper; 