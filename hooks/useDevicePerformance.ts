'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  connectionSpeed: string;
  deviceMemory: number;
  hardwareConcurrency: number;
  isLowEnd: boolean;
}

/**
 * Hook to detect device performance and adjust animations accordingly
 */
export function useDevicePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    connectionSpeed: 'unknown',
    deviceMemory: 8,
    hardwareConcurrency: 4,
    isLowEnd: false,
  });

  useEffect(() => {
    // Check device memory (in GB)
    const deviceMemory = (navigator as any).deviceMemory || 8;
    
    // Check CPU cores
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    
    // Check connection speed
    const connection = (navigator as any).connection;
    const connectionSpeed = connection?.effectiveType || 'unknown';
    
    // Measure FPS
    let fps = 60;
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (frameCount < 60) {
        requestAnimationFrame(measureFPS);
      }
    };
    
    requestAnimationFrame(measureFPS);
    
    // Determine if device is low-end
    const isLowEnd = 
      deviceMemory <= 4 || // 4GB RAM or less
      hardwareConcurrency <= 2 || // 2 CPU cores or less
      connectionSpeed === '2g' || // Slow connection
      connectionSpeed === 'slow-2g' ||
      (typeof window !== 'undefined' && window.innerWidth <= 768 && deviceMemory <= 6); // Mobile with <= 6GB RAM
    
    // Set metrics after a short delay to get accurate FPS
    setTimeout(() => {
      setMetrics({
        fps,
        connectionSpeed,
        deviceMemory,
        hardwareConcurrency,
        isLowEnd,
      });
    }, 1000);
  }, []);

  return metrics;
}

/**
 * Hook to get animation settings based on device performance
 */
export function useAdaptiveAnimations() {
  const { isLowEnd } = useDevicePerformance();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Return animation settings
  const shouldReduceAnimations = isLowEnd || prefersReducedMotion;

  return {
    shouldReduceAnimations,
    animationDuration: shouldReduceAnimations ? 0.2 : 0.6,
    animationDelay: shouldReduceAnimations ? 0 : 0.1,
    animationDistance: shouldReduceAnimations ? 10 : 20,
    enableParallax: !shouldReduceAnimations,
    enableBlur: !shouldReduceAnimations,
    enableComplexAnimations: !shouldReduceAnimations,
  };
}