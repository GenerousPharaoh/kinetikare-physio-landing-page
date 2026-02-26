'use client';

import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  connectionSpeed: string;
  deviceMemory: number;
  hardwareConcurrency: number;
  isLowEnd: boolean;
}

/**
 * Synchronously detect low-end device on first render (no useEffect delay).
 * This prevents hydration flicker from state changing after mount.
 */
function detectIsLowEnd(): boolean {
  if (typeof window === 'undefined') return false;
  const deviceMemory = (navigator as any).deviceMemory || 8;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const connection = (navigator as any).connection;
  const connectionSpeed = connection?.effectiveType || 'unknown';
  return (
    deviceMemory <= 4 ||
    hardwareConcurrency <= 2 ||
    connectionSpeed === '2g' ||
    connectionSpeed === 'slow-2g' ||
    (window.innerWidth <= 768 && deviceMemory <= 6)
  );
}

/**
 * Hook to detect device performance and adjust animations accordingly.
 * Computes synchronously on first client render — no delayed state updates.
 */
export function useDevicePerformance() {
  const [metrics] = useState<PerformanceMetrics>(() => {
    if (typeof window === 'undefined') {
      return { fps: 60, connectionSpeed: 'unknown', deviceMemory: 8, hardwareConcurrency: 4, isLowEnd: false };
    }
    const deviceMemory = (navigator as any).deviceMemory || 8;
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const connection = (navigator as any).connection;
    const connectionSpeed = connection?.effectiveType || 'unknown';
    return {
      fps: 60,
      connectionSpeed,
      deviceMemory,
      hardwareConcurrency,
      isLowEnd: detectIsLowEnd(),
    };
  });

  return metrics;
}

/**
 * Hook to get animation settings based on device performance.
 * Resolves synchronously — no delayed re-renders that cause flicker.
 */
export function useAdaptiveAnimations() {
  const { isLowEnd } = useDevicePerformance();
  const prefersReducedMotion = useRef(false);

  // Read media query synchronously during first render
  if (typeof window !== 'undefined' && prefersReducedMotion.current === false) {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  const shouldReduceAnimations = isLowEnd || prefersReducedMotion.current;

  return {
    shouldReduceAnimations,
    animationDuration: shouldReduceAnimations ? 0.2 : 0.5,
    animationDelay: shouldReduceAnimations ? 0 : 0.05,
    animationDistance: shouldReduceAnimations ? 8 : 16,
    enableParallax: !shouldReduceAnimations,
    enableBlur: !shouldReduceAnimations,
    enableComplexAnimations: !shouldReduceAnimations,
  };
}