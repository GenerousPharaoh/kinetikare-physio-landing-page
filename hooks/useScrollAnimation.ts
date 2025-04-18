"use client";

import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface ScrollAnimationOptions {
  /**
   * Number between 0 and 1 indicating the percentage of the element that needs to be visible
   * before triggering the animation (default: 0.1 or 10%)
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
}

/**
 * Custom hook that detects when an element enters the viewport to trigger animations
 * Uses the Intersection Observer API for performance
 * 
 * @param options - Configuration options for the scroll animation
 * @returns Object containing ref to attach to the element and whether it's visible
 */
export function useScrollAnimation({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
  disabled = false,
}: ScrollAnimationOptions = {}): {
  ref: MutableRefObject<HTMLElement | null>;
  isVisible: boolean;
  hasBeenVisible: boolean;
} {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    // Skip setup if disabled or during SSR
    if (disabled || typeof window === 'undefined') return;
    
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // Update visibility state based on intersection
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          
          // Unobserve if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold,
      }
    );
    
    // Start observing the element
    observer.observe(currentRef);
    
    // Cleanup observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin, disabled]);
  
  return { ref, isVisible, hasBeenVisible };
}

// Helper hook specifically for sections
export function useSectionAnimation(options?: Omit<ScrollAnimationOptions, 'rootMargin'>) {
  return useScrollAnimation({
    rootMargin: '0px 0px -100px 0px', // Trigger a bit earlier for sections
    ...options,
  });
} 