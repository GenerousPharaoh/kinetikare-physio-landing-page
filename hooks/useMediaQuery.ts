'use client';

import { useState, useEffect } from 'react';

export function useIsLowPowered() {
  // Default to false initially to prevent hydration mismatch
  const [isLowPowered, setIsLowPowered] = useState(false);

  useEffect(() => {
    // Check for low-end device (using rough heuristics)
    const checkLowPoweredDevice = () => {
      // Get rough estimate of device capability
      const memory = (navigator as any).deviceMemory || 4; // defaults to 4 if not available
      const cores = navigator.hardwareConcurrency || 4; // defaults to 4 if not available
      
      // Consider it a low-end device if it has less than 4GB RAM or less than 4 cores
      return memory < 4 || cores < 4;
    };
    
    setIsLowPowered(checkLowPoweredDevice());
  }, []);

  return isLowPowered;
}

export function usePrefersReducedMotion() {
  // Default to false initially to prevent hydration mismatch
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set state based on user preference
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    // Initial check
    updateMotionPreference();
    
    // Listen for changes in preference
    mediaQuery.addEventListener('change', updateMotionPreference);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  return prefersReducedMotion;
} 