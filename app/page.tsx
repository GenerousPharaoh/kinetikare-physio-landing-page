"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import SectionWithBackground from '@/components/SectionWithBackground';

// --- Critical Sections (Load Immediately) ---
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

// --- Less Critical Sections (Load Dynamically) ---
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { 
  ssr: false
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { 
  ssr: false
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { 
  ssr: false
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="relative overflow-x-hidden z-[1]">
        {/* Hero Section - full width */}
        <HeroSection />
        
        {/* Services Section - primary background with pattern */}
        <SectionWithBackground 
          bgVariant="primary" 
          id="services" 
          patternOverlay={true}
          glowEffect={true}
          border={true}
        >
          <ServicesSection />
        </SectionWithBackground>

        {/* About Section - subtle background */}
        <SectionWithBackground 
          bgVariant="subtle" 
          id="about"
          glowEffect={true}
        >
          <AboutSection />
        </SectionWithBackground>

        {/* Testimonials Section - accent background with pattern */}
        <SectionWithBackground 
          bgVariant="accent" 
          id="testimonials"
          patternOverlay={true}
          glowEffect={true}
          border={true}
        >
          <TestimonialsSection />
        </SectionWithBackground>

        {/* Contact Section - light background */}
        <SectionWithBackground 
          bgVariant="light" 
          id="contact"
          glowEffect={true}
        >
          <ContactSection />
        </SectionWithBackground>
      </main>
    </div>
  );
} 