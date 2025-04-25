import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';

// Client components need to be imported with dynamic to avoid server/client mismatch
import dynamic from 'next/dynamic';

// Dynamic imports for client components
const FloatingButtons = dynamic(() => import('@/components/FloatingButtons'), { ssr: true });
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: true });
const MobileBottomNav = dynamic(() => import('@/components/MobileBottomNav'), { ssr: true });
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const BackgroundTextureClient = dynamic(() => import('@/components/BackgroundTextureClient'), { ssr: true });

// These components will be loaded only on the client side
const ClientOnly = dynamic(() => import('@/components/ClientOnly'), { ssr: true });

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
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy',
  description: 'Professional physiotherapy services in Burlington, Ontario.',
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.430782,
    "longitude": -79.838055
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "08:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" },
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} content-visible`}>
      <head>
        {/* Ensure proper viewport settings for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        
        {/* PWA support - manifest and meta tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Physio" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        
        {/* Critical loading and transition styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Override body background */
          body {
            background-color: var(--background-color, #F9F8F6);
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
          }
          
          /* Performance optimization styles */
          .layout-wrapper, header, footer, .sticky, .fixed, .animated, .motion-item {
            transform: translateZ(0);
            will-change: transform;
            backface-visibility: hidden;
          }
          
          /* Reduce motion animation if user prefers reduced motion */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
            
            .animated, .motion-item {
              transition: none !important;
              animation: none !important;
            }
          }
          
          /* Safe area insets for notched devices */
          @supports(padding: max(0px)) {
            body {
              padding-left: env(safe-area-inset-left, 0px);
              padding-right: env(safe-area-inset-right, 0px);
            }
            
            /* Bottom nav padding for notched devices */
            .fixed-bottom-nav {
              padding-bottom: env(safe-area-inset-bottom, 0px);
            }
          }
          
          /* Fix for iOS 100vh issue */
          @supports (-webkit-touch-callout: none) {
            .min-h-screen {
              min-height: -webkit-fill-available;
            }
          }
          
          /* Prevent horizontal overflow on mobile */
          html, body {
            overflow-x: hidden;
            width: 100%;
          }
          
          /* Better tap targets for mobile */
          @media (max-width: 640px) {
            button, a {
              min-height: 44px;
              min-width: 44px;
            }
          }
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://endorphinshealth.janeapp.com" />
      </head>
      <body className="antialiased pb-16 md:pb-0 overflow-x-hidden">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        {/* Background Texture */}
        <BackgroundTextureClient opacity={0.035} />
        
        {/* Header */}
        <Header />
        
        {/* Main content without transitions that cause flash */}
        <div className="main-content-wrapper">
          <main id="main-content" className="min-h-screen flex flex-col overflow-x-hidden pt-16 xs:pt-20">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* UI Components */}
        <FloatingCTA />
        <FloatingButtons />
        <MobileBottomNav />
        
        {/* ClientOnly components */}
        <ClientOnly>
          {process.env.NODE_ENV === 'production' && <div id="performance-optimizer"></div>}
          {process.env.NODE_ENV === 'development' && <div id="accessibility-checker"></div>}
        </ClientOnly>
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Defer non-critical scripts */}
        <Script id="performance-optimizations" strategy="afterInteractive">
          {`
            // Optimize initial load performance
            document.addEventListener('DOMContentLoaded', function() {
              // Add intersection observer for lazy-loaded content
              if ('IntersectionObserver' in window) {
                const lazyLoadObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const element = entry.target;
                      if (element.dataset.src) {
                        element.src = element.dataset.src;
                        delete element.dataset.src;
                      }
                      lazyLoadObserver.unobserve(element);
                    }
                  });
                });
                
                // Observe all elements with data-src attribute
                document.querySelectorAll('[data-src]').forEach(el => {
                  lazyLoadObserver.observe(el);
                });
              }
              
              // Responsive image handling
              function updateImagesForScreenSize() {
                const screenWidth = window.innerWidth;
                document.querySelectorAll('img[data-mobile-src][data-desktop-src]').forEach(img => {
                  if (img instanceof HTMLImageElement) {
                    const src = screenWidth < 640 ? img.getAttribute('data-mobile-src') : img.getAttribute('data-desktop-src');
                    if (src && img.src !== src) {
                      img.src = src;
                    }
                  }
                });
              }
              
              // Run on load and resize
              updateImagesForScreenSize();
              window.addEventListener('resize', updateImagesForScreenSize);
            });
          `}
        </Script>
        
        {/* Service Worker Registration for PWA */}
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