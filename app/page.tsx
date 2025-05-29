import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HealingEnvironmentSection from '@/components/sections/HealingEnvironmentSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Kareem Hassanein | Expert Physiotherapist in Burlington & Waterdown',
  description: 'Kareem Hassanein, Registered Physiotherapist in Burlington, Waterdown, Hamilton & Oakville. One-on-one, dedicated care with personalized solutions to keep you moving forward. CAMPT certified, specializing in manual therapy, sports rehabilitation, and dry needling.',
  keywords: [
    'Kareem Hassanein',
    'Kareem Hassanein physiotherapy',
    'Kareem physiotherapist',
    'Kareem Hassanein Burlington',
    'physiotherapy Burlington',
    'physiotherapy Waterdown', 
    'physiotherapist Burlington Ontario',
    'manual therapy Burlington',
    'sports rehabilitation',
    'dry needling Burlington',
    'back pain treatment',
    'CAMPT certified physiotherapist',
    'physiotherapy Hamilton',
    'physiotherapy Oakville'
  ],
  openGraph: {
    title: 'Kareem Hassanein | Expert Physiotherapist in Burlington & Waterdown',
    description: 'Kareem Hassanein, Registered Physiotherapist. One-on-one, dedicated care with personalized solutions to keep you moving forward.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein - Expert Physiotherapist in Burlington & Waterdown',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kareem Hassanein | Expert Physiotherapist in Burlington & Waterdown',
    description: 'Kareem Hassanein, Registered Physiotherapist. One-on-one, dedicated care with personalized solutions to keep you moving forward.',
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

// Person Schema for Kareem Hassanein - helps with branded searches
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kareem Hassanein",
  "jobTitle": "Registered Physiotherapist",
  "description": "Expert physiotherapist specializing in manual therapy, sports rehabilitation, and evidence-based treatment in Burlington, Waterdown, Hamilton, and Oakville.",
  "url": "https://www.kinetikarephysio.com",
  "image": "https://www.kinetikarephysio.com/images/kareem-profile.png",
  "telephone": "+19056346000",
  "email": "kareem.hassanein@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4631 Palladium Way, Unit 6",
    "addressLocality": "Burlington",
    "addressRegion": "ON",
    "postalCode": "L7M 0W9",
    "addressCountry": "CA"
  },
  "worksFor": {
    "@type": "Organization",
    "@id": "https://www.kinetikarephysio.com/#organization",
    "name": "KinetiKare Physiotherapy"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master of Science in Physiotherapy",
      "credentialCategory": "degree",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Robert Gordon University"
      }
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "CAMPT Level 2 Certification",
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Canadian Academy of Manipulative Physiotherapy"
      }
    }
  ],
  "knowsAbout": [
    "Manual Therapy",
    "Sports Rehabilitation", 
    "Dry Needling",
    "Exercise Therapy",
    "Pain Management",
    "Movement Assessment"
  ],
  "areaServed": [
    "Burlington, ON",
    "Waterdown, ON", 
    "Hamilton, ON",
    "Oakville, ON"
  ]
};

// Streamlined site structure: Hero → About → Healing Environment → Care Journey → Services → Contact
export default function Home() {
  return (
    <>
      {/* Person Schema for Kareem Hassanein */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <HealingEnvironmentSection />
        <CareJourneySection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
} 