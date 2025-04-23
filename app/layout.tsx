import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';

// Import client components
import ClientLayout from '@/components/ClientLayout';

// Keep Inter as defined for --font-inter (matches tailwind config)
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

// Keep Playfair_Display as defined for --font-playfair (matches tailwind config)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add 700 weight if needed for bolder headings
  variable: '--font-playfair',
  display: 'swap',
  preload: true
});

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  "name": "Kareem Hassanein Physiotherapy",
  "image": "https://physiotherapy-next.vercel.app/images/kareem-profile.png",
  "url": "https://physiotherapy-next.vercel.app",
  "telephone": "+19056346000",
  "email": "kareem.hassanein@gmail.com",
  "hasMap": "https://www.google.com/maps/place/Endorphins+Health+and+Wellness+Centre/@43.4079928,-79.8288817,17z/data=!3m1!4b1!4m6!3m5!1s0x882b61568c54cbff:0x433767b454bd4446!8m2!3d43.4079889!4d-79.8263068!16s%2Fg%2F11bzs6k2vj?entry=ttu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4631 Palladium Way, Unit 6",
    "addressLocality": "Burlington",
    "addressRegion": "ON",
    "postalCode": "L7M 0W9",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.4079889,
    "longitude": -79.8263068
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "09:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "description": "Afternoons available upon request", "opens": "00:00", "closes": "00:00" },
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* Ensure proper viewport settings for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        
        {/* PWA support - manifest and meta tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Physio" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://endorphinshealth.janeapp.com" />
        
        {/* Preload critical images to improve LCP */}
        <link rel="preload" as="image" href="/images/kareem-profile.png" />
      </head>
      <body className="antialiased pb-16 md:pb-0 overflow-x-hidden">
        {/* Wrap everything in ClientLayout which handles client-side functionality */}
        <ClientLayout>
              {children}
        </ClientLayout>
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Service Worker Registration for PWA - loaded after page */}
        <Script id="register-service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
} 