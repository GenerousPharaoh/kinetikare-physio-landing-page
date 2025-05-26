"use client";

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import ConditionsSection from '@/components/sections/ConditionsSection';
import ContactSection from '@/components/sections/ContactSection';

// Comprehensive site structure: Hero → About → Care Journey → Services → Conditions → Contact
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CareJourneySection />
      <ServicesSection />
      <ConditionsSection />
      <ContactSection />
    </main>
  );
} 