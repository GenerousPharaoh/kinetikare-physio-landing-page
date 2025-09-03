'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    
    if (hasLoadedBefore) {
      setIsInitialLoad(false);
    } else {
      sessionStorage.setItem('hasLoadedBefore', 'true');
      // Show loading screen for initial visit
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isInitialLoad && <LoadingScreen />}
      <div className={isInitialLoad ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}