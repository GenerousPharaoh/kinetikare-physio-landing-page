'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface PerformanceContextType {
  isLowEndDevice: boolean;
  reducedMotion: boolean;
  performanceMode: 'high' | 'balanced' | 'low';
}

const PerformanceContext = createContext<PerformanceContextType>({
  isLowEndDevice: false,
  reducedMotion: false,
  performanceMode: 'high',
});

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const { isLowEnd } = useDevicePerformance();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Add performance CSS classes to body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      
      if (isLowEnd || reducedMotion) {
        body.classList.add('reduce-animations');
        body.classList.add('performance-mode');
      } else {
        body.classList.remove('reduce-animations');
        body.classList.remove('performance-mode');
      }
    }
  }, [isLowEnd, reducedMotion]);

  const performanceMode = isLowEnd || reducedMotion ? 'low' : 'high';

  return (
    <PerformanceContext.Provider
      value={{
        isLowEndDevice: isLowEnd,
        reducedMotion,
        performanceMode,
      }}
    >
      {/* Every component imports `m as motion`, so only the domAnimation
          feature set ships (animations, variants, exit, tap/hover/focus).
          ConditionsPageClient keeps the full `motion` import for its
          layoutId tab indicator; that loads its own features on /conditions
          only. Not `strict`: a stray `motion` component degrades to the
          full bundle rather than throwing. */}
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </PerformanceContext.Provider>
  );
}

export const usePerformance = () => useContext(PerformanceContext);