import type { Metadata } from 'next';
// import { Inter, Montserrat, Playfair_Display, Nunito_Sans } from 'next/font/google';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingCTA from '@/components/FloatingCTA';
import Script from 'next/script';
import { PageTransition } from '@/components/PageTransition';
import React from 'react';
import MobileBottomNav from '@/components/MobileBottomNav';

// Keep Inter as defined for --font-inter (matches tailwind config)
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

// Remove Montserrat loading
// const montserrat = Montserrat({ ... });

// Keep Playfair_Display as defined for --font-playfair (matches tailwind config)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add 700 weight if needed for bolder headings
  variable: '--font-playfair',
  display: 'swap',
  preload: true
});

// Remove Nunito_Sans loading
// const nunitoSans = Nunito_Sans({ ... });

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Generate metadata using a function for more flexibility
export function generateMetadata(): Metadata {
  // Base URL should be updated for production
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://physiotherapy-next.vercel.app';
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Expert Physiotherapy in Burlington & Waterdown | Kareem Hassanein',
      template: '%s | Kareem Hassanein Physiotherapy',
    },
    description: 'Personalized physiotherapy services in Burlington and Waterdown by Kareem Hassanein. Specializing in pain relief, injury recovery, and performance optimization. Book your appointment today!',
    keywords: [
      'physiotherapy', 
      'Burlington', 
      'Waterdown', 
      'manual therapy', 
      'dry needling', 
      'sports injuries', 
      'rehabilitation',
      'physical therapy',
      'Kareem Hassanein'
    ],
    authors: [{ name: 'Kareem Hassanein', url: baseUrl }],
    creator: 'Kareem Hassanein',
    publisher: 'Kareem Hassanein Physiotherapy',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    robots: 'index, follow',
    applicationName: 'Kareem Hassanein Physiotherapy',
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url: baseUrl,
      title: 'Kareem Hassanein Physiotherapy - Burlington, Ontario',
      description: 'Expert physiotherapy care with manual therapy, dry needling, and evidence-based rehabilitation in Burlington, Ontario.',
      siteName: 'Kareem Hassanein Physiotherapy',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Kareem Hassanein Physiotherapy',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kareem Hassanein Physiotherapy',
      description: 'Expert physiotherapy care in Burlington, Ontario.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    other: {
      'theme-color': '#5E1F20',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply only the required font variables
    // Tailwind will pick these up for font-sans and font-heading
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://endorphinshealth.janeapp.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/images/kareem-profile.png" />
        <link rel="preload" href="/videos/clinic-room.MOV" as="video" type="video/mp4" />
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="antialiased pb-16 md:pb-0">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        <LoadingScreen />
        <PageTransition>
          <main id="main-content" className="min-h-screen flex flex-col">{children}</main>
        </PageTransition>
        <FloatingButtons />
        <FloatingCTA />
        <MobileBottomNav />
        
        {/* Structured data for SEO */}
        <Script id="structured-data" type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
        
        {/* Analytics script (Add your analytics code here) */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // Your analytics code here
              `
            }}
          />
        )}
      </body>
    </html>
  );
} 