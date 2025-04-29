import React from 'react';
import dynamic from 'next/dynamic';
import SectionWithBackground from '@/components/SectionWithBackground';

// --- Critical Sections (Load Immediately) ---
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

// --- Less Critical Sections (Load Dynamically with SSR) ---
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { 
  ssr: true,
  loading: () => <div className="min-h-[300px] bg-secondary-50/50 animate-pulse"></div>
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { 
  ssr: true,
  loading: () => <div className="min-h-[300px] bg-accent-50/50 animate-pulse"></div>
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { 
  ssr: true,
  loading: () => <div className="min-h-[300px] bg-neutral-50/50 animate-pulse"></div>
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="relative overflow-x-hidden z-[1]" id="main-content">
        {/* Load all sections immediately - no animations */}
        <HeroSection />
        
        <SectionWithBackground variant="primary" id="services">
          <ServicesSection />
        </SectionWithBackground>

        <SectionWithBackground variant="secondary" id="about">
          <AboutSection />
        </SectionWithBackground>

        <SectionWithBackground variant="accent" id="testimonials">
          <TestimonialsSection />
        </SectionWithBackground>

        <SectionWithBackground variant="minimal" id="contact">
          <ContactSection />
        </SectionWithBackground>
      </main>
    </div>
  );
} 