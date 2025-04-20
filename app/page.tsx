"use client"; // Ensure client component for hooks

import React, { useRef, useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import HeroSection from '@/components/sections/HeroSection';
import { motion } from 'framer-motion';

// Dynamically import sections below the fold with loading priority
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { 
  ssr: true,
  loading: () => (
    <div className="min-h-[40vh] px-4 flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-6xl animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="h-64 bg-white shadow rounded-lg p-6">
              <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { 
  ssr: true,
  loading: () => (
    <div className="min-h-[40vh] px-4 flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl animate-pulse">
        <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-8"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div>
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
});
// Use regular imports for less critical sections below the fold
const PhilosophySection = dynamic(() => import('@/components/sections/PhilosophySection'), {
  loading: () => <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>
});
const ConditionsSection = dynamic(() => import('@/components/sections/ConditionsSection'), {
  loading: () => <div className="min-h-[40vh] bg-white animate-pulse"></div>
});
const ServiceAreasSection = dynamic(() => import('@/components/sections/ServiceAreasSection'), {
  loading: () => <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>
});
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <div className="min-h-[40vh] bg-white animate-pulse"></div>
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>
});
const BookingSection = dynamic(() => import('@/components/sections/BookingSection'), {
  loading: () => <div className="min-h-[40vh] bg-white animate-pulse"></div>
});

export default function Home() {
  // Keep headerRef for scroll functionality
  const headerRef = useRef<HTMLElement>(null);
  // State to track preloading status
  const [sectionsPreloaded, setSectionsPreloaded] = useState({
    critical: false,
    secondary: false
  });

  // Define smooth scroll handler here
  const handleScroll = useCallback((targetId: string) => {
    // Safety check for browser environment
    if (typeof window === 'undefined') return;
    
    // Make sure targetId is valid
    if (!targetId) return;
    
    // Safely extract ID from anchor href if needed
    const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = headerRef.current?.offsetHeight || 70; // Default offset
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
  }, []);

  // Preload all sections when the page loads
  useEffect(() => {
    // Prevent running twice in development strict mode
    if (sectionsPreloaded.critical) return;
    
    // Safety check for SSR
    if (typeof window === 'undefined') return;
    
    // Preload critical sections first with error handling
    const preloadCriticalSections = async () => {
      try {
        await Promise.all([
          import('@/components/sections/ServicesSection'),
          import('@/components/sections/AboutSection')
        ]);
        setSectionsPreloaded(prev => ({ ...prev, critical: true }));
      } catch (error) {
        console.error('Error preloading critical sections:', error);
        // Still mark as preloaded so we don't keep retrying on failure
        setSectionsPreloaded(prev => ({ ...prev, critical: true }));
      }
    };
    
    // Then preload the rest with lower priority
    const preloadOtherSections = async () => {
      try {
        // Split into smaller batches to avoid overwhelming the browser
        // First batch
        await Promise.all([
          import('@/components/sections/PhilosophySection'),
          import('@/components/sections/ConditionsSection')
        ]);
        
        // Second batch after a short delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await Promise.all([
          import('@/components/sections/ServiceAreasSection'),
          import('@/components/sections/TestimonialsSection'),
          import('@/components/sections/ContactSection'),
          import('@/components/sections/BookingSection')
        ]);
        
        setSectionsPreloaded(prev => ({ ...prev, secondary: true }));
      } catch (error) {
        console.error('Error preloading secondary sections:', error);
        // Still mark as complete to avoid retrying
        setSectionsPreloaded(prev => ({ ...prev, secondary: true }));
      }
    };
    
    // Start preloading critical sections immediately
    preloadCriticalSections();
    
    // Use requestIdleCallback for less critical sections if available
    if ('requestIdleCallback' in window) {
      // Store the callback id so we can cancel it if needed
      const idleCallbackId = window.requestIdleCallback(() => {
        preloadOtherSections();
      }, { timeout: 5000 }); // 5 second timeout maximum
      
      // Clean up the idle callback if component unmounts before it fires
      return () => {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallbackId);
        }
      };
    } else {
      // Fallback with a small delay
      const timeoutId = setTimeout(preloadOtherSections, 2000);
      
      // Clean up the timeout if component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [sectionsPreloaded.critical]);

  return (
    <div className="flex flex-col min-h-screen bg-white-styled">
      <main className="relative overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-0"
        >
          <HeroSection />
          <ServicesSection onBookLinkClick={handleScroll} />
          <AboutSection />
          <PhilosophySection />
          <ConditionsSection />
          <ServiceAreasSection />
          <TestimonialsSection />
          <BookingSection />
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
} 