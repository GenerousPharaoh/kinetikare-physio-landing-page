import { useState, useEffect, useRef } from 'react';

// Debounce helper to improve scroll performance
function debounce(fn: Function, ms = 100) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// Helper to validate threshold value
const validateThreshold = (threshold: number | undefined): number => {
  if (threshold === undefined) return 0;
  
  // Ensure threshold is a finite number between 0 and 1
  const validatedThreshold = Number(threshold);
  if (!Number.isFinite(validatedThreshold)) return 0;
  
  return Math.min(Math.max(validatedThreshold, 0), 1);
};

export function useScrollAnimation(threshold = 0, rootMargin = '100px 0px 0px 0px') {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Return early if component is already visible or running on server
    if (isVisible || typeof window === 'undefined') return;
    
    // Validate threshold value to prevent IntersectionObserver errors
    const safeThreshold = validateThreshold(threshold);
    
    try {
      // Using intersection observer with better performance options
      const observer = new IntersectionObserver(
        // Use debounce for callback to reduce performance impact
        debounce(([entry]) => {
          // Update visibility state when intersection changes
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once element is visible, no need to observe anymore
            if (ref.current) observer.unobserve(ref.current);
          }
        }, 50),
        {
          threshold: safeThreshold, // Use validated threshold for safety
          rootMargin  // Show elements before they fully enter viewport
        }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    } catch (error) {
      console.warn('Error with IntersectionObserver:', error);
      // Fallback: Just mark as visible
      setIsVisible(true);
      return () => {};
    }
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
} 