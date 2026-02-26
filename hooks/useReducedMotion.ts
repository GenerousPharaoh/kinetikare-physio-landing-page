'use client';

import { useRef } from 'react';

/**
 * Hook to detect if we should reduce animations based on user preference or device.
 * Reads synchronously — no useEffect, no re-render flicker.
 */
export function useReducedMotion(): boolean {
  const result = useRef<boolean | null>(null);

  if (result.current === null) {
    if (typeof window === 'undefined') {
      result.current = false;
    } else {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const memory = (navigator as any).deviceMemory || 4;
      const cores = navigator.hardwareConcurrency || 4;
      const isLowEndDevice = memory < 4 || cores < 4;
      result.current = prefersReduced || isLowEndDevice;
    }
  }

  return result.current;
}
