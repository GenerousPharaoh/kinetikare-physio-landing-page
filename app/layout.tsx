import { serializeJsonLd } from '@/lib/structured-data';
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

import { ENDORPHINS_OPENING_HOURS_SCHEMA } from '@/lib/hours';
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
  viewportFit: 'cover',
  themeColor: '#B08D57',
  colorScheme: 'light' as const,
};

export const metadata = {
  metadataBase: new URL('https://www.kinetikarephysio.com'),
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
    'msapplication-TileColor': '#B08D57',
    'apple-mobile-web-app-title': 'Kareem Physio',
    'geo.region': 'CA-ON',
    'geo.placename': 'Burlington, Waterdown, Oakville, Flamborough, Carlisle',
    'geo.position': '43.4078162;-79.8262185',
    'ICBM': '43.4078162, -79.8262185'
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Physiotherapy", "MedicalBusiness"],
  "@id": "https://www.kinetikarephysio.com/#organization",
  "name": "Kareem Hassanein Physiotherapy",
  "legalName": "Kareem Hassanein Registered Physiotherapy Professional Corporation",
  "alternateName": ["Kareem Hassanein - Registered Physiotherapist", "Kareem Hassanein Physio", "Kareem Hassanein PT", "KinetiKare Physiotherapy", "Kareem Hassanein Sports Physio", "Kareem Hassanein Burlington Physiotherapist"],
  "brand": {
    "@type": "Brand",
    "name": "Kareem Hassanein Physiotherapy",
    "alternateName": ["KinetiKare", "Kareem Hassanein PT", "Kareem Physio"]
  },
  "image": "https://www.kinetikarephysio.com/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png",
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.webp",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio",
    "https://www.linkedin.com/in/kareemhassanein",
    "https://maps.google.com/maps?cid=12525727525636452787"
  ],
  "telephone": "+19056346000",
  "email": "kareem.hassanein@gmail.com",
  "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJD8TZ2clhK4gRs7HkBtJS1K0",
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
    "latitude": 43.4078162,
    "longitude": -79.8262185
  },
  "openingHoursSpecification": ENDORPHINS_OPENING_HOURS_SCHEMA,
  "priceRange": "$$",
  "founder": { "@id": "https://www.kinetikarephysio.com/#person" },
  "employee": { "@id": "https://www.kinetikarephysio.com/#person" },
  "location": { "@id": "https://endorphinshealth.com/#clinic" },
  "containedInPlace": { "@id": "https://endorphinshealth.com/#clinic" },
  "isAcceptingNewPatients": true,
  "medicalSpecialty": "https://schema.org/Physiotherapy",
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Physiotherapy assessment and treatment", "url": "https://www.kinetikarephysio.com/services" },
    { "@type": "MedicalTherapy", "name": "Sports rehabilitation and return to sport", "url": "https://www.kinetikarephysio.com/treatments/sports-rehab-return-to-sport" },
    { "@type": "MedicalTherapy", "name": "Dry needling", "url": "https://www.kinetikarephysio.com/treatments/dry-needling" },
    { "@type": "MedicalTherapy", "name": "Joint mobilization", "url": "https://www.kinetikarephysio.com/treatments/joint-mobilization" },
    { "@type": "MedicalTherapy", "name": "Cupping therapy", "url": "https://www.kinetikarephysio.com/treatments/cupping-therapy" },
    { "@type": "MedicalTherapy", "name": "Exercise therapy", "url": "https://www.kinetikarephysio.com/treatments/exercise-therapy" }
  ],
  "paymentAccepted": [
    "Cash",
    "Credit Card", 
    "Debit Card",
    "Insurance Direct Billing"
  ],
  "currenciesAccepted": "CAD",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.4078162,
      "longitude": -79.8262185
    },
    "geoRadius": 25000
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "name": "Book an initial assessment with Kareem Hassanein",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://endorphinshealth.janeapp.com/#/staff_member/42/treatment/133",
      "inLanguage": "en-CA",
      "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
    },
    "result": { "@type": "Reservation", "name": "Physiotherapy initial assessment" }
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
  "@id": "https://www.kinetikarephysio.com/#person",
  "name": "Kareem Hassanein",
  "alternateName": ["Kareem Hassanein PT", "Kareem Hassanein Physiotherapist", "Kareem Hassanein MSc PT"],
  "jobTitle": "Registered Physiotherapist",
  "description": "Kareem Hassanein, Registered Physiotherapist, MSc PT, BSc Kin. Provides manual therapy, dry needling, exercise rehabilitation and pain management for musculoskeletal conditions in Burlington, Ontario.",
  "image": "https://www.kinetikarephysio.com/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png",
  "url": "https://www.kinetikarephysio.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/kareemhassanein",
    "https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4",
    "https://endorphinshealth.com/team/kareem-hassanein/",
    "https://physiomaxwellness.ca/team/kareem-hassanein/",
    "https://maps.google.com/maps?cid=12525727525636452787"
  ],
  "worksFor": [
    { "@id": "https://endorphinshealth.com/#clinic" },
    { "@id": "https://physiomaxwellness.ca/#clinic" },
    { "@type": "MedicalClinic", "name": "Headon Physio", "address": { "@type": "PostalAddress", "streetAddress": "1387 Walkers Line, Unit B", "addressLocality": "Burlington", "addressRegion": "ON", "addressCountry": "CA" } }
  ],
  "workLocation": [
    { "@id": "https://endorphinshealth.com/#clinic" },
    { "@id": "https://physiomaxwellness.ca/#clinic" },
    { "@type": "MedicalClinic", "name": "Headon Physio", "address": { "@type": "PostalAddress", "streetAddress": "1387 Walkers Line, Unit B", "addressLocality": "Burlington", "addressRegion": "ON", "addressCountry": "CA" } }
  ],
  "affiliation": { "@id": "https://www.kinetikarephysio.com/#organization" },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "College of Physiotherapists of Ontario registration",
    "value": "20079"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "name": "Book an initial assessment with Kareem Hassanein",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://endorphinshealth.janeapp.com/#/staff_member/42/treatment/133",
      "inLanguage": "en-CA",
      "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
    },
    "result": { "@type": "Reservation", "name": "Physiotherapy initial assessment" }
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
    "Knee pain", "Patellar tendinopathy", "Patellofemoral pain", "ACL rehabilitation", "Meniscus injuries", "IT band syndrome",
    "Hip pain", "Gluteal tendinopathy", "Hip labral tears", "Proximal hamstring tendinopathy", "Hip osteoarthritis",
    "Plantar fasciitis", "Achilles tendinopathy", "Ankle sprains", "Shin splints",
    "Sports injury rehabilitation", "Return to sport", "Post-surgical rehabilitation",
    "Dry needling", "Manual therapy", "Cupping therapy", "Exercise prescription"
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
      <head>
        {/* Speed up first analytics + tag manager call. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-slate-950 focus:rounded focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        {/* Google Analytics */}
        <GoogleAnalytics />
        {/* Web Vitals tracking */}
        <WebVitals />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
        />

        {/* Performance optimization provider */}
        <PerformanceProvider>
          {/* Global site header */}
          <Header />
          {/* Page content wrapped in ErrorBoundary */}
          <ErrorBoundary>
            <div id="main-content" tabIndex={-1}>{children}</div>
          </ErrorBoundary>
          {/* Global site footer */}
          <Footer />
          <FloatingButtons />
        </PerformanceProvider>
{/* MobileBottomNav removed — redundant with hamburger menu */}
        <CookieBanner />
        <BookingTracker />
      </body>
    </html>
  );
}
