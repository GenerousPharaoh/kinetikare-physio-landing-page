import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HealingEnvironmentSection from '@/components/sections/HealingEnvironmentSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy | Burlington & Waterdown',
  description: 'Professional physiotherapy services in Burlington and Waterdown by Kareem Hassanein, MSc PT. Specializing in manual therapy, sports rehabilitation, dry needling, and evidence-based treatment. Book your appointment today!',
  keywords: [
    'physiotherapy Burlington',
    'physiotherapy Waterdown', 
    'physiotherapist Burlington Ontario',
    'manual therapy Burlington',
    'sports rehabilitation',
    'dry needling Burlington',
    'back pain treatment',
    'Kareem Hassanein physiotherapy',
    'CAMPT certified physiotherapist',
    'physiotherapy Hamilton',
    'physiotherapy Oakville'
  ],
  openGraph: {
    title: 'Expert Physiotherapy in Burlington & Waterdown | Kareem Hassanein',
    description: 'Professional physiotherapy services by Kareem Hassanein, MSc PT. Specializing in manual therapy, sports rehabilitation, and evidence-based treatment in Burlington and Waterdown.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy - Burlington & Waterdown',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Physiotherapy in Burlington & Waterdown',
    description: 'Professional physiotherapy services by Kareem Hassanein, MSc PT. Manual therapy, sports rehabilitation, and evidence-based treatment.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Streamlined site structure: Hero → About → Healing Environment → Care Journey → Services → Contact
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HealingEnvironmentSection />
      <CareJourneySection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
} 