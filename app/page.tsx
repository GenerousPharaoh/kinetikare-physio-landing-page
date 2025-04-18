"use client"; // Ensure client component for hooks

import React, { useRef, useCallback, useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import ConditionsSection from '@/components/sections/ConditionsSection';
import ServiceAreasSection from '@/components/sections/ServiceAreasSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import BookingSection from '@/components/sections/BookingSection';
import Footer from '@/components/Footer';

// Force static generation for better performance
export const dynamic = 'force-static';

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Set page as loaded after mount
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Define smooth scroll handler here
  const handleScroll = useCallback((targetId: string) => {
    // Safety check for browser environment
    if (typeof window === 'undefined') return;
    
    const targetElement = document.getElementById(targetId.substring(1)); // Remove #
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
          setTimeout(() => targetElement.removeAttribute('tabindex'), 1000);
        }
      }, 800);
    }
  }, []); // Empty dependency array as headerRef doesn't change

  // Conditionally render to avoid hydration issues
  if (!isPageLoaded) {
    return null; // or a minimal loading indicator
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass handleScroll and a way to set the ref to Header */}
      <Header ref={headerRef} onNavLinkClick={handleScroll} /> 
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection onBookLinkClick={handleScroll} />
        <AboutSection />
        <PhilosophySection />
        <ConditionsSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <ContactSection />
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
} 