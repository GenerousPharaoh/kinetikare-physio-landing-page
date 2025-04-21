"use client"; // This marks the entire page as a client component

import React from 'react';
import dynamic from 'next/dynamic';

// Import all sections with client-side only rendering
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: false });
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: false });
const PhilosophySection = dynamic(() => import('@/components/sections/PhilosophySection'), { ssr: false });
const ConditionsSection = dynamic(() => import('@/components/sections/ConditionsSection'), { ssr: false });
const ServiceAreasSection = dynamic(() => import('@/components/sections/ServiceAreasSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: false });
const BookingSection = dynamic(() => import('@/components/sections/BookingSection'), { ssr: false });

// Import motion separately to avoid SSR issues
const MotionDiv = dynamic(() => 
  import('framer-motion').then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
);

// Client component for the homepage content
export default function Home() {
  // Define loading placeholders for each section
  const loadingPlaceholders = {
    services: (
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
    ),
    about: (
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
    ),
    philosophy: <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>,
    conditions: <div className="min-h-[40vh] bg-white animate-pulse"></div>,
    serviceAreas: <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>,
    testimonials: <div className="min-h-[40vh] bg-white animate-pulse"></div>,
    contact: <div className="min-h-[40vh] bg-neutral-50 animate-pulse"></div>,
    booking: <div className="min-h-[40vh] bg-white animate-pulse"></div>
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-white-styled">
      <main className="relative overflow-x-hidden">
        <div className="relative z-0">
          <HeroSection />
          <ServicesSection onBookLinkClick={handleScroll} />
          <AboutSection />
          <PhilosophySection />
          <ConditionsSection />
          <ServiceAreasSection />
          <TestimonialsSection />
          <BookingSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
} 