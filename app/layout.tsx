import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: 'cover'
};

export const metadata = {
  title: 'KinetiKare Physiotherapy | Kareem Hassanein | Burlington Ontario',
  description: 'KinetiKare Physiotherapy - Manual therapy, dry needling, and sports rehabilitation in Burlington, Ontario. Kareem Hassanein, Registered Physiotherapist serving Burlington, Waterdown, Hamilton & Oakville.',
  keywords: ['KinetiKare', 'KinetiKare Physiotherapy', 'Kareem Hassanein', 'Burlington physiotherapy', 'Waterdown physiotherapy', 'manual therapy Burlington', 'dry needling Burlington', 'sports rehab Burlington', 'physiotherapist Burlington Ontario'],
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com/about' }],
  creator: 'Kareem Hassanein',
  publisher: 'KinetiKare Physiotherapy',
  applicationName: 'KinetiKare Physiotherapy',
  openGraph: {
    title: 'KinetiKare Physiotherapy | Kareem Hassanein | Burlington Ontario',
    description: 'KinetiKare Physiotherapy - Manual therapy, dry needling, and sports rehabilitation in Burlington, Ontario.',
    url: 'https://www.kinetikarephysio.com',
    siteName: 'KinetiKare Physiotherapy',
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
    'googlebot': 'index, follow',
    'google': 'notranslate',
    'author': 'Kareem Hassanein',
    'copyright': 'KinetiKare Physiotherapy',
    'application-name': 'KinetiKare',
    'theme-color': '#B08D57',
    'msapplication-TileColor': '#B08D57',
    'apple-mobile-web-app-title': 'KinetiKare',
    'geo.region': 'CA-ON',
    'geo.placename': 'Burlington',
    'geo.position': '43.430782;-79.838055',
    'ICBM': '43.430782, -79.838055'
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["PhysicalTherapy", "LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.kinetikarephysio.com/#organization",
  "name": "KinetiKare Physiotherapy",
  "legalName": "KinetiKare Physiotherapy - Kareem Hassanein",
  "alternateName": ["Kareem Hassanein Physiotherapy", "KinetiKare Physio", "KH Physiotherapy"],
  "brand": {
    "@type": "Brand",
    "name": "KinetiKare",
    "alternateName": "KinetiKare Physiotherapy"
  },
  "image": "https://www.kinetikarephysio.com/images/kareem-profile.png",
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.png",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio",
    "https://www.linkedin.com/in/kareem-hassanein-physiotherapy"
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
      "name": "Hamilton", 
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Oakville",
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
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "14:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "00:00", "closes": "00:00", "description": "Available upon request" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "00:00" }
  ],
  "priceRange": "Contact for details",
  "founder": {
    "@type": "Person",
    "@id": "https://www.kinetikarephysio.com/#person",
    "name": "Kareem Hassanein",
    "jobTitle": "Registered Physiotherapist"
  },
  "medicalSpecialty": [
    "Physical Therapy",
    "Manual Therapy", 
    "Dry Needling",
    "Sports Medicine",
    "Orthopedic Rehabilitation"
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
  "name": "KinetiKare",
  "alternateName": ["KinetiKare Physiotherapy", "KinetiKare Physio"],
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.png",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio"
  ],
  "description": "KinetiKare is a specialized physiotherapy practice offering expert manual therapy, dry needling, and rehabilitation services in Burlington, Ontario."
};

// Website Schema for improved search presence
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kinetikarephysio.com/#website", 
  "name": "KinetiKare Physiotherapy",
  "alternateName": "Kareem Hassanein Physiotherapy",
  "url": "https://www.kinetikarephysio.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.kinetikarephysio.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@id": "https://www.kinetikarephysio.com/#organization"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <GoogleAnalytics />
        
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
        
        {/* Global site header */}
        <Header />
        {/* Page content wrapped in ErrorBoundary */}
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        {/* Global site footer */}
        <Footer />
      </body>
    </html>
  );
}
