'use client';

import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import LoadingScreenWrapper from '@/components/LoadingScreenWrapper';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingCTA from '@/components/FloatingCTA';
import Script from 'next/script';
import { PageTransition } from '@/components/PageTransition';
import React, { useEffect } from 'react';
import MobileBottomNav from '@/components/MobileBottomNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { optimizeScrollPerformance } from '@/lib/performance';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import AccessibilityChecker from '@/components/AccessibilityChecker';

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

// Performance optimization script
function PerformanceOptimization() {
  useEffect(() => {
    // Run performance optimizations after initial render
    optimizeScrollPerformance();

    // Apply low-level browser optimizations
    if (typeof window !== 'undefined') {
      // Use passive event listeners for better scrolling performance
      window.addEventListener('touchstart', () => {}, { passive: true });
      
      // Hint to the browser which animations will happen for better planning
      document.querySelectorAll('.will-change-transform, .animate-fade-in, .animate-slide-in')
        .forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.willChange = 'transform, opacity';
          }
        });
      
      // Apply transforms for hardware acceleration on key elements
      const acceleratedElements = document.querySelectorAll('.sticky, .fixed, header, .floating-button');
      acceleratedElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.transform = 'translateZ(0)';
        }
      });
    }
  }, []);

  return null;
}

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
        
        {/* Critical loading and transition styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Override body background */
          body {
            background-color: var(--background-color, #F9F8F6);
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
          }
          
          /* Loading state styles */
          html.loading-init body {
            overflow: hidden !important;
            background-color: var(--background-color, #F9F8F6); /* Use site background for smoother transition */
          }
          
          /* Hide main content during loading */
          html.loading-init #__next,
          html.loading-init main,
          html.loading-init header,
          html.loading-init footer {
            opacity: 0 !important;
            visibility: hidden !important;
          }
          
          /* Only show content when fully loaded */
          html:not(.loading-init) #__next,
          html:not(.loading-init) main,
          html:not(.loading-init) header,
          html:not(.loading-init) footer {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.2s ease-in-out;
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
        
        {/* Preload critical images to improve load time */}
        <link rel="preload" as="image" href="/images/kareem-profile.png" />
      </head>
      <body className="antialiased pb-16 md:pb-0 overflow-x-hidden">
        {/* Performance optimization component */}
        <PerformanceOptimization />
        
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        <LoadingScreenWrapper>
          {/* Header */}
          <Header />
          
          {/* Main content with transition wrapper */}
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
          
          {/* Performance optimizer */}
          <PerformanceOptimizer />
          
          {/* Accessibility Checker - only active in development */}
          <AccessibilityChecker />
        </LoadingScreenWrapper>
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Deferred script for additional performance optimizations */}
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