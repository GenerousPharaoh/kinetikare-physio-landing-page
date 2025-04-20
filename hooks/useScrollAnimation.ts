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
   * Animation duration in milliseconds (reduced for better performance)
   */
  duration?: number;
  
  /**
   * Optional ARIA attributes to add for accessibility
   */
  ariaLive?: 'off' | 'polite' | 'assertive';
  
  /**
   * Optional class to add when element is visible
   */
  visibleClass?: string;
}

// Check if reduced motion is preferred by the user with safety check
const prefersReducedMotion = () => {
  try {
    return typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (error) {
    // Fallback if matchMedia fails
    console.warn('Error checking motion preferences:', error);
    return false;
  }
};

// Share a single IntersectionObserver for all elements to improve performance
const observerMap = new Map<string, IntersectionObserver>();
// Keep track of active elements for cleanup
const activeElementsMap = new Map<string, Set<HTMLElement>>();

/**
 * Custom hook that detects when an element enters the viewport to trigger animations
 * Uses the Intersection Observer API for performance
 * 
 * @param options - Configuration options for the scroll animation
 * @returns Object containing ref to attach to the element and whether it's visible
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0, // Zero threshold for earlier detection and better performance
  triggerOnce = true,
  rootMargin = '50px 0px 0px 0px', // Positive rootMargin to preload earlier
  disabled = false,
  duration = 200, // Further reduced animation duration
  ariaLive,
  visibleClass,
}: ScrollAnimationOptions = {}): {
  ref: RefObject<T>;
  isVisible: boolean;
  hasBeenVisible: boolean;
  duration: number;
} {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<T>(null);
  
  // Check if user prefers reduced motion or if on a low-end device
  const shouldDisable = disabled || prefersReducedMotion();
  // Use a faster duration for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveDuration = isMobile ? Math.min(duration, 150) : duration;
  
  useEffect(() => {
    // Skip for SSR or when animations are disabled
    if (typeof window === 'undefined') return;
    
    // Set immediately visible if animations should be disabled
    if (shouldDisable) {
      setIsVisible(true);
      setHasBeenVisible(true);
      
      // Apply visible class if provided even when disabled
      if (visibleClass && ref.current) {
        try {
          ref.current.classList.add(visibleClass);
        } catch (error) {
          console.warn('Error adding visible class:', error);
        }
      }
      return;
    }
    
    const currentRef = ref.current;
    if (!currentRef) return;
    
    // Add ARIA attributes for accessibility if specified
    if (ariaLive) {
      currentRef.setAttribute('aria-live', ariaLive);
    }
    
    // Create a unique key for this observer configuration
    const observerKey = `${threshold}-${rootMargin}-${triggerOnce}`;
    
    // Keep track of this element for each observer
    if (!activeElementsMap.has(observerKey)) {
      activeElementsMap.set(observerKey, new Set());
    }
    activeElementsMap.get(observerKey)?.add(currentRef);
    
    // Create or reuse an existing observer
    if (!observerMap.has(observerKey)) {
      try {
        // For performance, use simpler options on mobile
        const observerOptions = {
          root: null,
          rootMargin: isMobile ? '0px' : rootMargin,
          threshold: 0, // Always use 0 threshold for best performance
        };
        
        observerMap.set(
          observerKey,
          new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              try {
                // Get the element reference
                const target = entry.target as HTMLElement;
                // Get the corresponding callback from the element's data attribute
                const elementId = target.dataset.scrollId;
                
                if (elementId && entry.isIntersecting) {
                  // Find all hooks interested in this element
                  document.querySelectorAll(`[data-scroll-id="${elementId}"]`).forEach(el => {
                    // Apply visible class if provided
                    if (visibleClass) {
                      el.classList.add(visibleClass);
                    }
                    
                    // Dispatch a custom event that the hook will listen for
                    try {
                      const showEvent = new CustomEvent('scrollAnimationShow', {
                        detail: { id: elementId }
                      });
                      el.dispatchEvent(showEvent);
                    } catch (error) {
                      console.warn('Error dispatching scroll show event:', error);
                    }
                    
                    // If triggerOnce, remove the data attribute
                    if (triggerOnce) {
                      el.removeAttribute('data-scroll-id');
                    }
                  });
                  
                  // If triggerOnce, stop observing
                  if (triggerOnce) {
                    observerMap.get(observerKey)?.unobserve(target);
                    const activeElements = activeElementsMap.get(observerKey);
                    if (activeElements) {
                      activeElements.delete(target);
                    }
                  }
                } else if (!triggerOnce && elementId && !entry.isIntersecting) {
                  // Remove visible class if element is no longer visible
                  if (visibleClass) {
                    target.classList.remove(visibleClass);
                  }
                  
                  // Dispatch hide event
                  try {
                    const hideEvent = new CustomEvent('scrollAnimationHide', {
                      detail: { id: elementId }
                    });
                    target.dispatchEvent(hideEvent);
                  } catch (error) {
                    console.warn('Error dispatching scroll hide event:', error);
                  }
                }
              } catch (error) {
                console.warn('Error processing intersection entry:', error);
              }
            });
          }, observerOptions)
        );
      } catch (error) {
        console.warn('Error creating IntersectionObserver:', error);
        // Fallback: mark as visible immediately
        setIsVisible(true);
        setHasBeenVisible(true);
        return;
      }
    }
    
    // Generate a unique ID for this hook instance
    const id = Math.random().toString(36).substring(2, 9);
    currentRef.dataset.scrollId = id;
    
    // Add event listeners for this element
    const handleShow = (event: Event) => {
      try {
        if (event instanceof CustomEvent && event.detail?.id === id) {
          setIsVisible(true);
          setHasBeenVisible(true);
        }
      } catch (error) {
        console.warn('Error handling scroll show event:', error);
      }
    };
    
    const handleHide = (event: Event) => {
      try {
        if (event instanceof CustomEvent && event.detail?.id === id) {
          setIsVisible(false);
        }
      } catch (error) {
        console.warn('Error handling scroll hide event:', error);
      }
    };
    
    currentRef.addEventListener('scrollAnimationShow', handleShow);
    currentRef.addEventListener('scrollAnimationHide', handleHide);
    
    // Add element to the observer
    try {
      const observer = observerMap.get(observerKey);
      observer?.observe(currentRef);
    } catch (error) {
      console.warn('Error observing element:', error);
      // Fallback: mark as visible immediately
      setIsVisible(true);
      setHasBeenVisible(true);
    }
    
    // Cleanup function
    return () => {
      try {
        if (currentRef) {
          // Remove from observer
          const observer = observerMap.get(observerKey);
          if (observer) {
            observer.unobserve(currentRef);
          }
          
          // Remove from active elements
          const activeElements = activeElementsMap.get(observerKey);
          if (activeElements) {
            activeElements.delete(currentRef);
            // If this was the last element, disconnect the observer
            if (activeElements.size === 0 && observer) {
              observer.disconnect();
              observerMap.delete(observerKey);
              activeElementsMap.delete(observerKey);
            }
          }
          
          // Remove event listeners
          currentRef.removeEventListener('scrollAnimationShow', handleShow);
          currentRef.removeEventListener('scrollAnimationHide', handleHide);
          
          // Remove aria attributes if added
          if (ariaLive) {
            currentRef.removeAttribute('aria-live');
          }
        }
      } catch (error) {
        console.warn('Error cleaning up scroll animation:', error);
      }
    };
  }, [rootMargin, threshold, triggerOnce, shouldDisable, isMobile, ariaLive, visibleClass]);
  
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
    rootMargin: '150px 0px 0px 0px', // More positive rootMargin to preload sections well in advance
    threshold: 0,
    duration: 200, // Even faster animations for sections
    ariaLive: 'polite', // Make section changes announced by screen readers
    ...options,
  });
} 