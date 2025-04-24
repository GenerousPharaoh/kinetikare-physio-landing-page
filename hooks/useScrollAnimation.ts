"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  /**
   * Number between 0 and 1 indicating the percentage of the element that needs to be visible
   * before triggering the animation (default: 0.05 or 5%)
   */
  threshold?: number;
  
  /**
   * Whether the animation should only trigger once when the element enters the viewport
   * and not again if it leaves and re-enters (default: true)
   */
  triggerOnce?: boolean;
  
  /**
   * Optional margin around the root element when calculating intersections
   * Format similar to CSS margin: "10px 20px 30px 40px" (top, right, bottom, left)
   */
  rootMargin?: string;
  
  /**
   * Disable the hook completely for SSR or when animations should be conditionally disabled
   */
  disabled?: boolean;
  
  /**
   * Animation duration in milliseconds
   */
  duration?: number;
}

// Check if reduced motion is preferred by the user with safety check
const prefersReducedMotion = () => {
  try {
    return typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (error) {
    return false;
  }
};

// Use a single IntersectionObserver for better performance
const observerMap = new Map<string, IntersectionObserver>();

/**
 * Simplified and optimized scroll animation hook
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0, // Zero threshold for earlier detection and better performance
  triggerOnce = true,
  rootMargin = '0px', // More conservative rootMargin
  disabled = false,
  duration = 150, // Faster animations by default
}: ScrollAnimationOptions = {}): {
  ref: RefObject<T>;
  isVisible: boolean;
  hasBeenVisible: boolean;
  duration: number;
} {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<T>(null);
  
  // Check if animations should be disabled
  const shouldDisable = disabled || prefersReducedMotion();
  // Use a faster duration for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveDuration = isMobile ? Math.min(duration, 100) : duration;
  
  useEffect(() => {
    // Skip for SSR or when animations are disabled
    if (typeof window === 'undefined') return;
    
    // Set immediately visible if animations should be disabled
    if (shouldDisable) {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }
    
    const currentRef = ref.current;
    if (!currentRef) return;
    
    // Create a unique key for this observer configuration
    const observerKey = `${threshold}-${rootMargin}-${triggerOnce}`;
    
    // Create or reuse an existing observer
    if (!observerMap.has(observerKey)) {
      try {
        const observerOptions = {
          root: null,
          rootMargin: isMobile ? '0px' : rootMargin,
          threshold: 0, // Always use 0 threshold for best performance
        };
        
        observerMap.set(
          observerKey,
          new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                setHasBeenVisible(true);
                
                // If triggerOnce, stop observing
                if (triggerOnce) {
                  observerMap.get(observerKey)?.unobserve(entry.target);
                }
              } else if (!triggerOnce) {
                setIsVisible(false);
              }
            });
          }, observerOptions)
        );
      } catch (error) {
        // Fallback: mark as visible immediately
        console.warn('Error creating IntersectionObserver:', error);
        setIsVisible(true);
        setHasBeenVisible(true);
        return;
      }
    }
    
    // Start observing the element
    const observer = observerMap.get(observerKey);
    observer?.observe(currentRef);
    
    // Cleanup function
    return () => {
      if (currentRef) {
        const observer = observerMap.get(observerKey);
        if (observer) {
          observer.unobserve(currentRef);
        }
      }
    };
  }, [rootMargin, threshold, triggerOnce, shouldDisable, isMobile]);
  
  return { 
    ref: ref as RefObject<T>, 
    isVisible, 
    hasBeenVisible,
    duration: effectiveDuration
  };
}

// Helper hook specifically for sections
export function useSectionAnimation(options?: Omit<ScrollAnimationOptions, 'rootMargin'>) {
  return useScrollAnimation({
    rootMargin: '0px', // More conservative rootMargin to avoid too early animations
    threshold: 0,
    duration: 100, // Even faster animations for sections
    ...options,
  });
} 