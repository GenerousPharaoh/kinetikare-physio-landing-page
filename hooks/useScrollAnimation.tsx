import { useState, useEffect, useRef } from 'react';

// Debounce helper to improve scroll performance
function debounce(fn: Function, ms = 100) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

export function useScrollAnimation(threshold = 0.1, rootMargin = '0px 0px -10% 0px') {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Return early if component is already visible or running on server
    if (isVisible || typeof window === 'undefined') return;
    
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
        threshold, // Lower threshold for earlier triggering
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
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
} 