import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import WebVitals from '@/components/WebVitals';
import ErrorBoundary from '@/components/ErrorBoundary';
import CookieBanner from '@/components/CookieBanner';
import BookingTracker from '@/components/BookingTracker';
import FloatingButtons from '@/components/FloatingButtons';
// MobileBottomNav removed — redundant with hamburger menu
import { PerformanceProvider } from '@/context/PerformanceContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: 'cover'
};

export const metadata = {
  title: 'Kareem Hassanein Physiotherapy Burlington | Registered Physiotherapist',
  description: 'Kareem Hassanein, Registered Physiotherapist in Burlington. Physiotherapy care for back pain, sports injuries, knee pain, neck pain, and sciatica with direct billing and evening appointments.',
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com/about' }],
  creator: 'Kareem Hassanein',
  publisher: 'Kareem Hassanein Physiotherapy',
  applicationName: 'Kareem Hassanein Physiotherapy',
  openGraph: {
    title: 'Kareem Hassanein Physiotherapy | Burlington',
    description: 'Registered Physiotherapist offering manual therapy, dry needling, cupping, and exercise rehabilitation for chronic pain, post-surgical recovery, and movement restoration.',
    url: 'https://www.kinetikarephysio.com',
    siteName: 'Kareem Hassanein Physiotherapy',
    type: 'website',
    locale: 'en_CA',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/images/kinetikare-logo-without-text.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  other: {
    'google': 'notranslate',
    'copyright': 'Kareem Hassanein Physiotherapy',
    'theme-color': '#B08D57',
    'msapplication-TileColor': '#B08D57',
    'apple-mobile-web-app-title': 'Kareem Physio',
    'geo.region': 'CA-ON',
    'geo.placename': 'Burlington, Waterdown, Oakville, Flamborough, Carlisle',
    'geo.position': '43.430782;-79.838055',
    'ICBM': '43.430782, -79.838055'
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.kinetikarephysio.com/#organization",
  "name": "Kareem Hassanein Physiotherapy",
  "legalName": "Kareem Hassanein Registered Physiotherapy Professional Corporation",
  "alternateName": ["Kareem Hassanein Physio", "Kareem Hassanein PT", "KinetiKare Physiotherapy", "Kareem Hassanein Sports Physio", "Kareem Hassanein Burlington Physiotherapist"],
  "brand": {
    "@type": "Brand",
    "name": "Kareem Hassanein Physiotherapy",
    "alternateName": ["KinetiKare", "Kareem Hassanein PT", "Kareem Physio"]
  },
  "image": "https://www.kinetikarephysio.com/images/kareem-profile.webp",
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.webp",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio",
    "https://www.linkedin.com/in/kareemhassanein"
  ],
  "telephone": "+19056346000",
  "email": "kareem.hassanein@gmail.com",
  "hasMap": "https://maps.app.goo.gl/JC7uKnd9zW4AJPP49",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4631 Palladium Way, Unit 6",
    "addressLocality": "Burlington",
    "addressRegion": "ON",
    "postalCode": "L7M 0W9",
    "addressCountry": "CA"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Burlington",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Waterdown",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Oakville",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Flamborough",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Carlisle",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.430782,
    "longitude": -79.838055
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Thursday"], "opens": "13:30", "closes": "19:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday"], "opens": "15:30", "closes": "19:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday", "Friday"], "opens": "14:00", "closes": "19:30" }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "19"
  },
  "founder": {
    "@type": "Person",
    "@id": "https://www.kinetikarephysio.com/#person",
    "name": "Kareem Hassanein",
    "jobTitle": "Registered Physiotherapist",
    "description": "Registered Physiotherapist providing manual therapy, dry needling, and exercise rehabilitation for musculoskeletal conditions in Burlington",
    "worksFor": {
      "@id": "https://www.kinetikarephysio.com/#organization"
    }
  },
  "medicalSpecialty": [
    "Physical Therapy",
    "Sports Physiotherapy",
    "Manual Therapy", 
    "Dry Needling",
    "Back Pain Treatment",
    "Neck Pain Treatment",
    "Knee Injury Rehabilitation",
    "Shoulder Pain Treatment",
    "Sports Injury Rehabilitation",
    "Post-Surgical Rehabilitation",
    "Running Injury Treatment",
    "Sciatica Treatment",
    "Tennis Elbow Treatment",
    "Plantar Fasciitis Treatment",
    "Rotator Cuff Rehabilitation",
    "ACL Rehabilitation",
    "Orthopedic Rehabilitation",
    "Whiplash Treatment",
    "Arthritis Management",
    "Chronic Pain Management",
    "Herniated Disc Treatment",
    "Pinched Nerve Treatment",
    "Frozen Shoulder Treatment",
    "Hip Pain Management",
    "Achilles Tendonitis Treatment",
    "Ankle Injury Rehabilitation",
    "Meniscus Injury Treatment",
    "MCL/LCL Injury Treatment",
    "IT Band Syndrome Treatment",
    "Patellofemoral Pain Treatment"
  ],
  "treatmentOffered": [
    {
      "@type": "MedicalTherapy",
      "name": "Back Pain Physiotherapy",
      "description": "Treatment for lower back pain, upper back pain, and chronic back conditions"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Sports Injury Physiotherapy",
      "description": "Rehabilitation for athletes and active individuals with sports-related injuries"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Knee Pain Treatment",
      "description": "Comprehensive knee injury rehabilitation including ACL, meniscus, and patellofemoral pain"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Manual Therapy",
      "description": "Hands-on treatment techniques for joint and soft tissue dysfunction"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Dry Needling",
      "description": "Intramuscular stimulation for trigger points and muscle tension"
    }
  ],
  "paymentAccepted": [
    "Cash",
    "Credit Card", 
    "Debit Card",
    "Insurance Direct Billing"
  ],
  "acceptsInsurance": true,
  "healthPlanAccepted": [
    {"@type": "HealthInsurancePlan", "name": "Canada Life"},
    {"@type": "HealthInsurancePlan", "name": "Sun Life"},
    {"@type": "HealthInsurancePlan", "name": "Manulife"},
    {"@type": "HealthInsurancePlan", "name": "Green Shield Canada"},
    {"@type": "HealthInsurancePlan", "name": "Blue Cross"},
    {"@type": "HealthInsurancePlan", "name": "WSIB"},
    {"@type": "HealthInsurancePlan", "name": "Desjardins Insurance"},
    {"@type": "HealthInsurancePlan", "name": "Empire Life"},
    {"@type": "HealthInsurancePlan", "name": "Equitable Life"},
    {"@type": "HealthInsurancePlan", "name": "Industrial Alliance"},
    {"@type": "HealthInsurancePlan", "name": "Cowan Insurance"},
    {"@type": "HealthInsurancePlan", "name": "ClaimSecure"},
    {"@type": "HealthInsurancePlan", "name": "GroupHEALTH"},
    {"@type": "HealthInsurancePlan", "name": "Johnston Group"},
    {"@type": "HealthInsurancePlan", "name": "Maximum Benefit"},
    {"@type": "HealthInsurancePlan", "name": "People Corporation"},
    {"@type": "HealthInsurancePlan", "name": "RWAM Insurance"},
    {"@type": "HealthInsurancePlan", "name": "TELUS Health"}
  ],
  "currenciesAccepted": "CAD",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.430782,
      "longitude": -79.838055
    },
    "geoRadius": "25000"
  }
};

// Brand Schema for stronger brand recognition
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://www.kinetikarephysio.com/#brand",
  "name": "Kareem Hassanein Physiotherapy",
  "alternateName": ["Kareem Hassanein Physio", "KinetiKare", "Kareem Physio Burlington", "Kareem Hassanein PT"],
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.webp",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio"
  ],
  "description": "Kareem Hassanein Physiotherapy - Registered Physiotherapist, MSc PT, BSc Kin providing manual therapy, dry needling, and exercise rehabilitation for musculoskeletal conditions in Burlington and Waterdown."
};

// Website Schema for improved search presence
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kinetikarephysio.com/#website", 
  "name": "Kareem Hassanein Physiotherapy",
  "alternateName": "KinetiKare Physiotherapy",
  "url": "https://www.kinetikarephysio.com",
  "publisher": {
    "@id": "https://www.kinetikarephysio.com/#organization"
  }
};

// Person Schema for Kareem Hassanein
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.kinetikarephysio.com/#kareem-hassanein",
  "name": "Kareem Hassanein",
  "alternateName": ["Kareem Hassanein PT", "Kareem Hassanein Physiotherapist", "Kareem Hassanein MSc PT"],
  "jobTitle": "Registered Physiotherapist",
  "description": "Kareem Hassanein, Registered Physiotherapist, MSc PT, BSc Kin. Provides manual therapy, dry needling, exercise rehabilitation and pain management for musculoskeletal conditions in Burlington, Ontario.",
  "image": "https://www.kinetikarephysio.com/images/kareem-profile.webp",
  "url": "https://www.kinetikarephysio.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/kareemhassanein",
    "https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4"
  ],
  "worksFor": {
    "@id": "https://www.kinetikarephysio.com/#organization"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Robert Gordon University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aberdeen",
        "addressCountry": "UK"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "McMaster University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hamilton",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Master of Science in Physiotherapy"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Bachelor of Science in Kinesiology"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Manual Therapy Training"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Dry Needling Certified"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "@id": "https://collegept.org/",
      "name": "College of Physiotherapists of Ontario",
      "identifier": "20079"
    }
  ],
  "honorificSuffix": "Registered Physiotherapist, MSc PT, BSc Kin",
  "knowsAbout": [
    "Back Pain Treatment",
    "Sports Injury Rehabilitation",
    "Manual Therapy",
    "Dry Needling",
    "Knee Pain Treatment",
    "Shoulder Pain Rehabilitation",
    "Post-Surgical Rehabilitation",
    "Running Injuries",
    "Tennis Elbow",
    "Sciatica Treatment",
    "Whiplash Treatment",
    "Arthritis Management",
    "Chronic Pain Management",
    "Herniated Disc Treatment",
    "Frozen Shoulder Treatment",
    "Plantar Fasciitis",
    "Hip Pain Treatment",
    "Ankle Rehabilitation",
    "Achilles Tendonitis",
    "ACL Rehabilitation",
    "Meniscus Tear Treatment",
    "New Runner Injuries",
    "Gym Injury Treatment",
    "CrossFit Rehabilitation",
    "Weekend Warrior Recovery",
    "Golf Injury Treatment",
    "Hockey Injury Rehabilitation",
    "Soccer Injury Treatment",
    "Basketball Injury Recovery",
    "Cycling Pain Treatment",
    "Desk Job Pain Relief",
    "Work From Home Ergonomics",
    "Pregnancy Related Pain",
    "Postpartum Recovery"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4631 Palladium Way, Unit 6",
    "addressLocality": "Burlington",
    "addressRegion": "ON",
    "postalCode": "L7M 0W9",
    "addressCountry": "CA"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-white focus:rounded focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        {/* Google Analytics */}
        <GoogleAnalytics />
        {/* Web Vitals tracking */}
        <WebVitals />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Performance optimization provider */}
        <PerformanceProvider>
          {/* Global site header */}
          <Header />
          {/* Page content wrapped in ErrorBoundary */}
          <ErrorBoundary>
            <div id="main-content">{children}</div>
          </ErrorBoundary>
          {/* Global site footer */}
          <Footer />
        </PerformanceProvider>
        <FloatingButtons />
{/* MobileBottomNav removed — redundant with hamburger menu */}
        <CookieBanner />
        <BookingTracker />
      </body>
    </html>
  );
}
