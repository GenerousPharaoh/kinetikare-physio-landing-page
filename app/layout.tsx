import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import WebVitals from '@/components/WebVitals';
import ErrorBoundary from '@/components/ErrorBoundary';
import { PerformanceProvider } from '@/context/PerformanceContext';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: 'cover'
};

export const metadata = {
  title: 'KinetiKare Physiotherapy | Kareem Hassanein | Burlington, Waterdown & Oakville',
  description: 'KinetiKare Physiotherapy - Manual therapy, dry needling, and sports rehabilitation in Burlington, Waterdown, and Oakville, Ontario. Led by Kareem Hassanein, Registered Physiotherapist serving Burlington, Waterdown, Oakville & Hamilton.',
  keywords: ['KinetiKare', 'Kinetikare', 'KinetiKare Physiotherapy', 'Kinetikare physio', 'Kareem Hassanein', 'Burlington physiotherapy', 'Waterdown physiotherapy', 'Oakville physiotherapy', 'manual therapy Burlington', 'manual therapy Waterdown', 'manual therapy Oakville', 'dry needling Burlington', 'dry needling Waterdown', 'dry needling Oakville', 'sports rehab Burlington', 'sports rehab Waterdown', 'sports rehab Oakville', 'physiotherapist Burlington Ontario', 'physiotherapist Waterdown Ontario', 'physiotherapist Oakville Ontario'],
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com/about' }],
  creator: 'Kareem Hassanein',
  publisher: 'KinetiKare Physiotherapy',
  applicationName: 'KinetiKare Physiotherapy',
  openGraph: {
    title: 'KinetiKare Physiotherapy | Kareem Hassanein | Burlington, Waterdown & Oakville',
    description: 'KinetiKare Physiotherapy - Manual therapy, dry needling, and sports rehabilitation in Burlington, Waterdown, and Oakville, Ontario.',
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
    'geo.placename': 'Burlington, Waterdown, Oakville',
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
  "alternateName": ["KinetiKare Physio", "Kinetikare Physio", "KinetiKare", "Kareem Hassanein Physiotherapy"],
  "brand": {
    "@type": "Brand",
    "name": "KinetiKare",
    "alternateName": ["KinetiKare Physiotherapy", "KinetiKare Physio", "Kinetikare Physio"]
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
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Thursday"], "opens": "13:30", "closes": "20:00" }
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
  "alternateName": ["KinetiKare Physio", "Kinetikare Physio", "KinetiKare Physiotherapy", "Kinetikare Physiotherapy"],
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.png",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio"
  ],
  "description": "KinetiKare Physio (KinetiKare Physiotherapy) is a physiotherapy practice offering manual therapy, dry needling, and rehabilitation services in Burlington, Waterdown, and Oakville, Ontario."
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
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load fonts with font-display: swap */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
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
        
        {/* Performance optimization provider */}
        <PerformanceProvider>
          {/* Global site header */}
          <Header />
          {/* Page content wrapped in ErrorBoundary */}
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          {/* Global site footer */}
          <Footer />
        </PerformanceProvider>
      </body>
    </html>
  );
}
