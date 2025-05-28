"use client";

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

// Streamlined site structure: Hero → About → Care Journey → Services → Testimonials → Contact
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CareJourneySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
} 