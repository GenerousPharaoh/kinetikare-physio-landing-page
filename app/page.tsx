import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSectionModern';
import AboutSection from '@/components/sections/AboutSection';
import HealingEnvironmentSection from '@/components/sections/HealingEnvironmentSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import GoogleReviews from '@/components/GoogleReviews';
import ContactSection from '@/components/sections/ContactSection';
import ParallaxSection from '@/components/ParallaxSection';
import ParallaxBackground from '@/components/ParallaxBackground';
import SectionDivider from '@/components/SectionDivider';

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy Burlington | Near Waterdown',
  description: 'Physiotherapy in Burlington ON for back, neck, shoulder and sports injuries. Direct billing. Book with Kareem Hassanein, Registered Physiotherapist.',
  keywords: [
    'Kareem Hassanein',
    'Registered Physiotherapist',
    'Physiotherapy Burlington',
    'Physiotherapist Burlington',
    'Back pain',
    'Neck pain',
    'Shoulder pain',
    'Knee pain',
    'Ankle sprain',
    'Sciatica',
    'Manual therapy',
    'Dry needling',
    'Exercise rehab',
    'Exercise therapy',
    'Rehabilitation',
    'Direct billing'
  ],
  openGraph: {
    title: 'Kareem Hassanein Physiotherapy | Burlington',
    description: 'Registered Physiotherapist offering manual therapy, dry needling, cupping, and exercise rehabilitation for chronic pain, post-surgical recovery, and movement restoration.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burlington Physiotherapy | Kareem Hassanein, PT',
    description: 'Kareem Hassanein - Registered Physiotherapist in Burlington. Back pain, sports injuries, direct billing.',
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
  "description": "CAMPT-certified physiotherapist providing manual therapy, sports rehabilitation, and evidence-based treatment in Burlington, Waterdown, Hamilton, and Oakville.",
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
    "name": "Kareem Hassanein Physiotherapy",
    "alternateName": ["Kareem Hassanein Physio", "KinetiKare", "Kareem Physio Burlington"]
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
      "name": "Advanced Integrated Musculoskeletal (AIM) Physiotherapy Program Level 2 Upper and Lower",
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
  ],
  "sameAs": [
    "https://endorphinshealth.com/team/kareem-hassanein/",
    "https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4",
    "https://www.linkedin.com/in/kareem-hassanein-physiotherapy"
  ]
};

// Streamlined site structure: Hero → About → Care Journey → Services → Healing Environment → Contact
export default function Home() {
  return (
    <>
      {/* Person Schema for Kareem Hassanein */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    <main className="min-h-screen" style={{ margin: '0px', padding: '0px' }}>
      <HeroSection />
      {/* SEO-optimized hidden heading for brand search */}
      <h1 className="sr-only">Kareem Hassanein Registered Physiotherapist Burlington | Physiotherapy near Waterdown and Oakville</h1>

      {/* Subtle transition element */}
      <div className="relative h-0 overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/20 to-transparent" />
      </div>

      {/* Content sections with parallax - wrapped in relative container with background */}
      <div className="relative">
        {/* Subtle animated background layers - only for content sections */}
        <ParallaxBackground />

      {/* Each section moves at slightly different speed for depth */}
      <ParallaxSection speed={0.9}>
        <AboutSection />
      </ParallaxSection>

      <SectionDivider variant="dots" />

      <ParallaxSection speed={1.1}>
        <CareJourneySection />
      </ParallaxSection>

      <SectionDivider variant="gradient" />

      <ParallaxSection speed={0.85}>
        <ServicesSection />
      </ParallaxSection>

      <SectionDivider variant="dots" />

      <ParallaxSection speed={1.05}>
        <GoogleReviews />
      </ParallaxSection>

      <SectionDivider variant="gradient" />

      <ParallaxSection speed={0.95}>
        <HealingEnvironmentSection />
      </ParallaxSection>

      <SectionDivider variant="dots" />

      <ParallaxSection speed={1}>
        <ContactSection />
      </ParallaxSection>
      </div>
    </main>
    </>
  );
} 