import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingPlaceholders from '@/components/LoadingPlaceholders';

// Import all sections with proper loading and error handling
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <LoadingPlaceholders.Hero />
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <LoadingPlaceholders.Services />
});

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <LoadingPlaceholders.About />
});

const PhilosophySection = dynamic(() => import('@/components/sections/PhilosophySection'), {
  loading: () => <LoadingPlaceholders.Philosophy />
});

const ConditionsSection = dynamic(() => import('@/components/sections/ConditionsSection'), {
  loading: () => <LoadingPlaceholders.Conditions />
});

const ServiceAreasSection = dynamic(() => import('@/components/sections/ServiceAreasSection'), {
  loading: () => <LoadingPlaceholders.ServiceAreas />
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <LoadingPlaceholders.Testimonials />
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <LoadingPlaceholders.Contact />
});

const BookingSection = dynamic(() => import('@/components/sections/BookingSection'), {
  loading: () => <LoadingPlaceholders.Booking />
});

// Dynamic import of client component wrapper for ScrollHandler
const ClientScrollWrapper = dynamic(() => import('@/components/ClientScrollWrapper'), {
  loading: () => <div className="min-h-16"></div>
});

// Server component for the homepage content
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="relative overflow-x-hidden">
        <div className="relative z-0">
          <HeroSection />
          
          <ClientScrollWrapper>
            <ServicesSection />
          </ClientScrollWrapper>
          
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