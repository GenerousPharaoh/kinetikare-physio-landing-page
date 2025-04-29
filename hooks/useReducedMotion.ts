'use client';

import { useState, useEffect } from 'react';

// Hook to detect if we should reduce animations based on user preference or device
export function useReducedMotion() {
  // Default to false initially to prevent hydration mismatch
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Check for low-end device (using rough heuristics)
    const isLowEndDevice = () => {
      // Get rough estimate of device capability
      const memory = (navigator as any).deviceMemory || 4; // defaults to 4 if not available
      const cores = navigator.hardwareConcurrency || 4; // defaults to 4 if not available
      
      // Consider it a low-end device if it has less than 4GB RAM or less than 4 cores
      return memory < 4 || cores < 4;
    };
    
    // Set state based on user preference or device capability
    const updateMotionPreference = () => {
      setShouldReduceMotion(mediaQuery.matches || isLowEndDevice());
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

  return shouldReduceMotion;
} 