'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for ClientComponentsWrapper
const ClientComponentsWrapper = dynamic(() => import('@/components/ClientComponentsWrapper'), {
  ssr: false
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    
    // Function to handle scroll events and add/remove the is-scrolling class
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Only apply the is-scrolling class if we're actually scrolling a significant amount
      // This prevents animations from pausing during minor scroll adjustments
      if (Math.abs(scrollY - lastScrollY) > 10) {
        document.body.classList.add('is-scrolling');
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Set a new timeout - this helps ensure smooth transitions
        scrollTimeout = setTimeout(() => {
          document.body.classList.remove('is-scrolling');
        }, 100); // Short timeout for smoother feel
      }
      
      lastScrollY = scrollY;
    };
    
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return <ClientComponentsWrapper>{children}</ClientComponentsWrapper>;
} 