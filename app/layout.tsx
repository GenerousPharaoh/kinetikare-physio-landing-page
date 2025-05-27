import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KinetiKare - Kareem Hassanein Physiotherapy',
  description: 'Professional physiotherapy services in Burlington, Ontario. Expert care for sports injuries, manual therapy, dry needling, and rehabilitation.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/images/kinetikare-logo-without-text.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  "name": "Kareem Hassanein Physiotherapy",
  "image": "https://physiotherapy-next.vercel.app/images/kareem-profile.png",
  "url": "https://physiotherapy-next.vercel.app",
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
    "name": "Kareem Hassanein",
    "jobTitle": "Registered Physiotherapist"
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
        {/* Ensure proper viewport settings for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        
        {/* Additional SEO meta tags for better indexing */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://www.kinetikarephysio.com" />
      </head>
      <body className={inter.className}>
        {/* Global site header */}
        {/* Using a client component here is fine – Next.js will automatically create a client boundary */}
        {/* The header contains navigation links that scroll to the various sections rendered in the home page */}
        <Header />
        {/* Page content */}
        {children}
        {/* Global site footer */}
        <Footer />
      </body>
    </html>
  );
}
