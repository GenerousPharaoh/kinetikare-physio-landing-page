"use client";

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import CommitmentSection from '@/components/sections/CommitmentSection';

// Final working site with the key sections
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CommitmentSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
} 