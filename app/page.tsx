import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSectionModern';
import AboutSection from '@/components/sections/AboutSection';
import HealingEnvironmentSection from '@/components/sections/HealingEnvironmentSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Burlington Physiotherapy | Kareem Hassanein, PT',
  description: 'Kareem Hassanein - Burlington\'s expert physiotherapist specializing in back pain, sports injuries, knee pain, neck pain. Serving North Burlington, Alton Village, Palladium Way. Direct billing, evening appointments. MSc PT, CAMPT certified.',
  keywords: [
    'Kareem Hassanein',
    'Kareem Hassanein physiotherapist',
    'Kareem Hassanein physio',
    'Kareem Hassanein Burlington',
    'Kareem Hassanein MSc PT',
    'physiotherapist Burlington',
    'physiotherapy Burlington',
    'physio Burlington',
    'Burlington physiotherapist',
    'North Burlington physiotherapy',
    'Alton Village physiotherapy',
    'Alton Village physio',
    'physiotherapy Palladium Way',
    'physiotherapist Palladium Way',
    'back pain Burlington',
    'back pain treatment Burlington',
    'lower back pain Burlington',
    'chronic back pain Burlington',
    'neck pain Burlington',
    'neck pain treatment Burlington',
    'knee pain Burlington',
    'knee injury Burlington',
    'ACL rehabilitation Burlington',
    'meniscus injury Burlington',
    'shoulder pain Burlington',
    'rotator cuff Burlington',
    'frozen shoulder Burlington',
    'sports injury Burlington',
    'sports physiotherapist Burlington',
    'sports physio Burlington',
    'running injury Burlington',
    'tennis elbow Burlington',
    'golfers elbow Burlington',
    'plantar fasciitis Burlington',
    'sciatica Burlington',
    'sciatica treatment Burlington',
    'hip pain Burlington',
    'ankle sprain Burlington',
    'post surgery rehab Burlington',
    'manual therapy Burlington',
    'dry needling Burlington',
    'IMS Burlington',
    'CAMPT physiotherapist',
    'registered physiotherapist Burlington',
    'best physiotherapist Burlington',
    'physiotherapist near me',
    'evening physio Burlington',
    'direct billing physiotherapy',
    'hurt at gym Burlington',
    'started running knee hurts Burlington',
    'crossfit injury physio Burlington',
    'weekend warrior physio Burlington',
    'couch to 5k injury Burlington',
    'new to gym injury Burlington',
    'first marathon training injury Burlington',
    'golf season back pain Burlington',
    'hockey groin injury Burlington',
    'pickleball injury Burlington',
    'desk job neck pain Burlington',
    'work from home back pain Burlington',
    'shoveling snow injury Burlington',
    'cant walk physio Burlington',
    'emergency physio Burlington',
    'same day physio Burlington',
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
    title: 'Burlington Physiotherapy | Kareem Hassanein, PT',
    description: 'Kareem Hassanein - Burlington\'s trusted physiotherapist for back pain, sports injuries, knee pain. North Burlington, Alton Village, Palladium Way. Book online.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapist Burlington - Back Pain Sports Injury Treatment',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burlington Physiotherapy | Kareem Hassanein, PT',
    description: 'Kareem Hassanein - Expert physiotherapist in Burlington. Back pain, sports injuries, direct billing.',
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
      <h1 className="sr-only">Kareem Hassanein Physiotherapist Burlington - Back Pain Treatment, Sports Injury Rehabilitation, Knee Pain, North Burlington, Alton Village, Palladium Way</h1>
      <AboutSection />
      <CareJourneySection />
      <ServicesSection />
      <HealingEnvironmentSection />
      <ContactSection />
    </main>
    </>
  );
} 