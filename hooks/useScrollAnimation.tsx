import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1, rootMargin = '0px 0px -10% 0px') {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when intersection changes
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element is visible, no need to observe anymore
          if (ref.current) observer.unobserve(ref.current);
        }
      },
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
  }, [threshold, rootMargin]);

  return { ref, isVisible };
} 