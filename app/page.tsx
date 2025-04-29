"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import SectionWithBackground from '@/components/SectionWithBackground';

// --- Critical Sections (Load Immediately) ---
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

// --- Less Critical Sections (Load Dynamically) ---
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { 
  ssr: false, // Keep ssr: false if preferred, or add loading state
  // loading: () => <p>Loading About...</p> // Optional loading state
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { 
  ssr: false, // Keep ssr: false if preferred, or add loading state
  // loading: () => <p>Loading Testimonials...</p> // Optional loading state
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { 
  ssr: false, // Keep ssr: false if preferred, or add loading state
  // loading: () => <p>Loading Contact...</p> // Optional loading state
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="relative overflow-x-hidden z-[1]">
        {/* Load all sections immediately - no animations */}
        <HeroSection />
        
        <SectionWithBackground bgVariant="primary" id="services">
          <ServicesSection />
        </SectionWithBackground>

        <SectionWithBackground bgVariant="subtle" id="about">
          <AboutSection />
        </SectionWithBackground>

        <SectionWithBackground bgVariant="accent" id="testimonials">
          <TestimonialsSection />
        </SectionWithBackground>

        <SectionWithBackground bgVariant="light" id="contact">
          <ContactSection />
        </SectionWithBackground>
      </main>
    </div>
  );
} 