'use client';

import React, { useEffect, ReactNode } from 'react';
import LoadingScreenWrapper from '@/components/LoadingScreenWrapper';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingCTA from '@/components/FloatingCTA';
import MobileBottomNav from '@/components/MobileBottomNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { optimizeScrollPerformance } from '@/lib/performance';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import AccessibilityChecker from '@/components/AccessibilityChecker';
import Script from 'next/script';

interface ClientLayoutProps {
  children: ReactNode;
}

/**
 * ClientLayout
 * 
 * This component wraps the application in client-side functionality
 * It handles loading states, performance optimizations, and layout elements
 * that require client-side JavaScript
 */
export default function ClientLayout({ children }: ClientLayoutProps) {
  // Performance optimization effect
  useEffect(() => {
    // Run performance optimizations after initial render
    optimizeScrollPerformance();

    // Apply low-level browser optimizations
    if (typeof window !== 'undefined') {
      // Use passive event listeners for better scrolling performance
      window.addEventListener('touchstart', () => {}, { passive: true });
      
      // Handle responsive images
      const updateResponsiveImages = () => {
        const screenWidth = window.innerWidth;
        document.querySelectorAll('img[data-mobile-src][data-desktop-src]').forEach(img => {
          if (img instanceof HTMLImageElement) {
            const src = screenWidth < 640 ? img.getAttribute('data-mobile-src') : img.getAttribute('data-desktop-src');
            if (src && img.src !== src) {
              img.src = src;
            }
          }
        });
      };
      
      // Run on load and add resize listener
      updateResponsiveImages();
      window.addEventListener('resize', updateResponsiveImages, { passive: true });
      
      // Clean up on unmount
      return () => {
        window.removeEventListener('resize', updateResponsiveImages);
      };
    }
  }, []);

  return (
    <>
      {/* Accessibility skip link */}
      <a 
        href="#main-content" 
        className="sr-only sr-only-focusable 
                   absolute top-0 left-0 m-3 p-3 bg-white text-primary 
                   rounded-md shadow-md z-[999999] transition-all duration-200 
                   focus:left-3 focus:top-3"
      >
        Skip to main content
      </a>
      
      <LoadingScreenWrapper>
        {/* Header */}
        <Header />
        
        {/* Main content with transition wrapper */}
        <div className="main-content-wrapper">
          <main id="main-content" className="min-h-screen flex flex-col overflow-x-hidden pt-16 xs:pt-20">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* UI Components */}
        <FloatingCTA />
        <FloatingButtons />
        <MobileBottomNav />
        
        {/* Performance optimizer - Temporarily disabled for testing */}
        {/* <PerformanceOptimizer /> */}
        
        {/* Accessibility Checker - only active in development */}
        <AccessibilityChecker />
      </LoadingScreenWrapper>
    </>
  );
} 