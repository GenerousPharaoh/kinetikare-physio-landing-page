import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

// Lazy load all sections except Hero for faster initial load
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="h-96" />,
  ssr: true
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="h-96" />,
  ssr: true
});

const CareJourneySection = dynamic(() => import('@/components/sections/CareJourneySection'), {
  loading: () => <div className="h-96" />,
  ssr: true
});

const HealingEnvironmentSection = dynamic(() => import('@/components/sections/HealingEnvironmentSection'), {
  loading: () => <div className="h-96" />,
  ssr: true
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="h-96" />,
  ssr: true
});

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy | Burlington & Waterdown',
  description: 'Kareem Hassanein, Registered Physiotherapist in Burlington, Waterdown, Hamilton & Oakville. One-on-one, dedicated care with personalized treatment for manual therapy, sports rehabilitation, and dry needling to keep you moving forward.',
  keywords: [
    'Kareem Hassanein',
    'Kareem Hassanein physiotherapy',
    'Kareem physiotherapist',
    'Kareem Hassanein Burlington',
    'physiotherapy Burlington',
    'physiotherapy Waterdown', 
    'physiotherapy Hamilton',
    'physiotherapy Oakville',
    'physiotherapist Burlington Ontario',
    'physiotherapist Waterdown',
    'physiotherapist Hamilton',
    'physiotherapist Oakville',
    'manual therapy Burlington',
    'manual therapy Waterdown',
    'manual therapy Hamilton',
    'manual therapy Oakville',
    'sports rehabilitation Burlington',
    'sports rehabilitation Waterdown',
    'dry needling Burlington',
    'dry needling Waterdown',
    'dry needling Oakville',
    'dry needling Hamilton',
    'trigger point release Burlington',
    'trigger point release Waterdown',
    'cupping therapy Burlington',
    'cupping therapy Waterdown',
    'IASTM Burlington',
    'IASTM Waterdown',
    'active release therapy Burlington',
    'Graston Technique Burlington',
    'back pain treatment Burlington',
    'back pain treatment Waterdown',
    'neck pain treatment Burlington',
    'sports injury Burlington',
    'sports injury Waterdown',
    'CAMPT certified physiotherapist',
    'CAMPT physiotherapist Burlington',
    'registered physiotherapist Burlington',
    'registered physiotherapist Waterdown'
  ],
  openGraph: {
    title: 'KinetiKare | KH Physiotherapy Services | Burlington & Waterdown',
    description: 'Kareem Hassanein, Registered Physiotherapist. One-on-one, dedicated care with personalized solutions to keep you moving forward.',
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
    title: 'KinetiKare | KH Physiotherapy Services | Burlington & Waterdown',
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
  "description": "CAMPT-certified physiotherapist specializing in manual therapy, sports rehabilitation, and evidence-based treatment in Burlington, Waterdown, Hamilton, and Oakville.",
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

// Streamlined site structure: Hero → About → Services → Care Journey → Healing Environment → Contact
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
      <ServicesSection />
      <CareJourneySection />
      <HealingEnvironmentSection />
      <ContactSection />
    </main>
    </>
  );
} 