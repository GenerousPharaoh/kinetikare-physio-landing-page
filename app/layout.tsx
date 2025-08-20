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
  title: 'Kareem Hassanein Physiotherapist Burlington | Sports Physio | Back Pain Treatment',
  description: 'Kareem Hassanein, Registered Physiotherapist in Burlington. Expert treatment for back pain, sports injuries, knee pain, neck pain, sciatica. Serving North Burlington, Alton Village, Palladium Way. Direct billing, evening appointments.',
  keywords: ['Kareem Hassanein', 'Kareem Hassanein physiotherapist', 'Kareem Hassanein physio', 'Kareem Hassanein Burlington', 'physiotherapist Burlington', 'physiotherapy Burlington', 'physio Burlington', 'Burlington physiotherapist', 'North Burlington physiotherapy', 'Alton Village physiotherapy', 'Alton Village physio', 'physiotherapy Palladium Way', 'physiotherapist Palladium Way', 'sports physiotherapist Burlington', 'sports physio Burlington', 'sports injury clinic Burlington', 'back pain Burlington', 'back pain treatment Burlington', 'lower back pain physio', 'chronic back pain Burlington', 'acute back pain Burlington', 'neck pain Burlington', 'neck pain treatment', 'whiplash Burlington', 'whiplash treatment Burlington', 'knee pain Burlington', 'knee injury physiotherapy', 'arthritis Burlington', 'knee arthritis Burlington', 'shoulder pain Burlington', 'rotator cuff injury', 'frozen shoulder Burlington', 'shoulder impingement Burlington', 'sciatica Burlington', 'sciatica treatment', 'herniated disc Burlington', 'disc bulge Burlington', 'pinched nerve Burlington', 'nerve pain Burlington', 'plantar fasciitis Burlington', 'heel pain Burlington', 'tennis elbow Burlington', 'golfers elbow Burlington', 'hip pain Burlington', 'hip arthritis Burlington', 'hip bursitis Burlington', 'ankle sprain Burlington', 'ankle injury Burlington', 'achilles tendonitis Burlington', 'achilles pain Burlington', 'running injuries Burlington', 'marathon training injuries Burlington', 'ACL rehabilitation Burlington', 'ACL tear Burlington', 'MCL injury Burlington', 'meniscus tear Burlington', 'post surgery physio Burlington', 'post surgical rehabilitation Burlington', 'MVA physiotherapy Burlington', 'car accident physio Burlington', 'chronic pain Burlington', 'started running knee pain Burlington', 'couch to 5k injury Burlington', 'new runner pain Burlington', 'first time runner injury Burlington', 'started gym hurt back Burlington', 'crossfit injury Burlington', 'workout injury Burlington', 'hurt at gym Burlington', 'deadlift back pain Burlington', 'squat knee pain Burlington', 'bench press shoulder pain Burlington', 'weekend warrior injury Burlington', 'golf back pain Burlington', 'golf elbow Burlington', 'hockey injury Burlington', 'hockey groin Burlington', 'soccer injury Burlington', 'soccer ankle Burlington', 'basketball knee injury Burlington', 'volleyball shoulder Burlington', 'tennis shoulder Burlington', 'pickleball injury Burlington', 'cycling knee pain Burlington', 'bike seat pain Burlington', 'spin class injury Burlington', 'yoga injury Burlington', 'pulled muscle at gym Burlington', 'first workout injury Burlington', 'orange theory injury Burlington', 'F45 injury Burlington', 'bootcamp injury Burlington', 'hurt shoveling snow Burlington', 'gardening back pain Burlington', 'painting shoulder pain Burlington', 'moving injury Burlington', 'lifting boxes hurt back Burlington', 'sitting too long back pain Burlington', 'desk job neck pain Burlington', 'work from home pain Burlington', 'computer neck Burlington', 'text neck Burlington', 'mom carrying baby pain Burlington', 'pregnancy back pain Burlington', 'postpartum pain Burlington', 'manual therapy Burlington', 'dry needling Burlington', 'IMS Burlington', 'CAMPT physiotherapist', 'MSc physiotherapy', 'registered physiotherapist Burlington', 'best physiotherapist Burlington', 'physiotherapist near me', 'physio near me', 'evening physiotherapy Burlington', 'weekend physio Burlington', 'direct billing physiotherapy', 'insurance physiotherapy Burlington'],
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com/about' }],
  creator: 'Kareem Hassanein',
  publisher: 'Kareem Hassanein Physiotherapy',
  applicationName: 'Kareem Hassanein Physiotherapy',
  openGraph: {
    title: 'Kareem Hassanein Physiotherapist | Burlington Sports Physio | Back Pain Expert',
    description: 'Kareem Hassanein - Burlington\'s trusted physiotherapist for back pain, sports injuries, knee pain. North Burlington, Alton Village, Palladium Way. Book online.',
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
    'googlebot': 'index, follow',
    'google': 'notranslate',
    'author': 'Kareem Hassanein',
    'copyright': 'Kareem Hassanein Physiotherapy',
    'application-name': 'Kareem Hassanein Physio',
    'theme-color': '#B08D57',
    'msapplication-TileColor': '#B08D57',
    'apple-mobile-web-app-title': 'Kareem Physio',
    'geo.region': 'CA-ON',
    'geo.placename': 'Burlington, North Burlington, Alton Village, Palladium Way, Waterdown, Oakville',
    'geo.position': '43.430782;-79.838055',
    'ICBM': '43.430782, -79.838055'
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["PhysicalTherapy", "LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.kinetikarephysio.com/#organization",
  "name": "KinetiKare Physiotherapy",
  "legalName": "Kareem Hassanein Registered Physiotherapy Professional Corporation",
  "alternateName": ["KinetiKare", "KinetiKare Physio", "KinetiKare Burlington", "KinetiKare Ontario", "Kareem Hassanein Physiotherapy", "Kareem Hassanein PT"],
  "brand": {
    "@type": "Brand",
    "name": "KinetiKare",
    "alternateName": ["KinetiKare Physiotherapy", "KinetiKare Burlington", "KinetiKare Physio Ontario"]
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
      "@type": "Place",
      "name": "North Burlington",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "Place",
      "name": "Alton Village",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "City",
      "name": "Burlington",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    {
      "@type": "Place",
      "name": "Palladium Way",
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
    "jobTitle": "Registered Physiotherapist",
    "description": "Burlington's leading physiotherapist specializing in back pain, sports injuries, and manual therapy",
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
    "Motor Vehicle Accident Rehabilitation",
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
      "description": "Expert treatment for lower back pain, upper back pain, and chronic back conditions"
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
      "name": "Dry Needling / IMS",
      "description": "Intramuscular stimulation for trigger points and muscle tension"
    }
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
  "name": "Kareem Hassanein Physiotherapy",
  "alternateName": ["Kareem Hassanein Physio", "KinetiKare", "Kareem Physio Burlington", "Kareem Hassanein PT"],
  "logo": "https://www.kinetikarephysio.com/images/kinetikare-logo.png",
  "url": "https://www.kinetikarephysio.com",
  "sameAs": [
    "https://www.facebook.com/kinetikarephysio",
    "https://www.instagram.com/kinetikarephysio"
  ],
  "description": "Kareem Hassanein Physiotherapy - Expert treatment for back pain, sports injuries, knee pain in Burlington. Serving North Burlington, Alton Village, Palladium Way. MSc PT, CAMPT certified."
};

// Website Schema for improved search presence
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kinetikarephysio.com/#website", 
  "name": "Kareem Hassanein Physiotherapy",
  "alternateName": "KinetiKare Physiotherapy",
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

// Person Schema for Kareem Hassanein
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.kinetikarephysio.com/#kareem-hassanein",
  "name": "Kareem Hassanein",
  "alternateName": ["Kareem Hassanein PT", "Kareem Hassanein Physiotherapist", "Kareem Hassanein MSc PT"],
  "jobTitle": "Registered Physiotherapist",
  "description": "Kareem Hassanein is a registered physiotherapist in Burlington, Ontario specializing in back pain treatment, sports injury rehabilitation, and manual therapy. MSc PT, BSc Kin, CAMPT certified.",
  "image": "https://www.kinetikarephysio.com/images/kareem-profile.png",
  "url": "https://www.kinetikarephysio.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/kareem-hassanein-physiotherapy",
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
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Master of Science in Physiotherapy (Distinction)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Bachelor of Science in Kinesiology"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "CAMPT Certified"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Dry Needling Certified"
    }
  ],
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
    "MVA Rehabilitation",
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
            {children}
          </ErrorBoundary>
          {/* Global site footer */}
          <Footer />
        </PerformanceProvider>
      </body>
    </html>
  );
}
