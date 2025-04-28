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
    let ticking = false;
    
    // Debounced scroll handler for better performance
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      // Use requestAnimationFrame to limit computations
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only add is-scrolling class to optimize animation rendering
          document.body.classList.add('is-scrolling');
          
          // Clear any existing timeout
          clearTimeout(scrollTimeout);
          
          // Set a timeout to remove class when scrolling stops
          scrollTimeout = setTimeout(() => {
            document.body.classList.remove('is-scrolling');
          }, 50); // Very short timeout to improve perceived performance
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return <ClientComponentsWrapper>{children}</ClientComponentsWrapper>;
} 