'use client';

import React from 'react';

interface ScrollHandlerWrapperProps {
  children: React.ReactNode;
}

// Define the shape of props that will be passed to child components
interface ScrollHandlerChildProps {
  onBookLinkClick?: (targetId: string) => void;
  onNavLinkClick?: (targetId: string) => void;
}

/**
 * ScrollHandlerWrapper
 * 
 * This component handles smooth scrolling to target elements on the page.
 * It isolates client-side scroll handling logic to enable better server component usage.
 */
const ScrollHandlerWrapper: React.FC<ScrollHandlerWrapperProps> = ({ children }) => {
  const handleScroll = (targetId: string) => {
    // Safety check for browser environment
    if (typeof window === 'undefined') return;
    
    // Make sure targetId is valid
    if (!targetId) return;
    
    // Safely extract ID from anchor href if needed
    const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 70; // Default offset for header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Set focus to the target element for accessibility
      setTimeout(() => {
        targetElement.focus();
        // If the element isn't focusable, add and remove tabindex
        if (document.activeElement !== targetElement) {
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
          // Use requestAnimationFrame for better timing
          requestAnimationFrame(() => {
            setTimeout(() => {
              // Only remove if it still has our added attribute
              if (targetElement.getAttribute('tabindex') === '-1') {
                targetElement.removeAttribute('tabindex');
              }
            }, 1000);
          });
        }
      }, 800);
    }
  };

  // Clone the child element to pass the event handler
  // This allows us to pass the scroll handler to any component
  return React.cloneElement(children as React.ReactElement<ScrollHandlerChildProps>, { 
    onBookLinkClick: handleScroll,
    onNavLinkClick: handleScroll
  });
};

export default ScrollHandlerWrapper; 