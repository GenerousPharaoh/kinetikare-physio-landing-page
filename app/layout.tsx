import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';
import ClientWrapper from './ClientWrapper';

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
  preload: true,
  variable: '--font-montserrat'
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy',
  description: 'Professional physiotherapy services in Burlington, Ontario.',
  icons: {
    icon: [
      { url: '/favicon.svg' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

// Simple schema data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  "name": "Kareem Hassanein Physiotherapy"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* Inline critical CSS to hide skip link initially */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .sr-only {
                position: absolute !important;
                width: 1px !important;
                height: 1px !important;
                padding: 0 !important;
                margin: -1px !important;
                overflow: hidden !important;
                clip: rect(0, 0, 0, 0) !important;
                white-space: nowrap !important;
                border-width: 0 !important;
              }
              .sr-only-focusable:focus,
              .sr-only-focusable:focus-within {
                position: static !important;
                width: auto !important;
                height: auto !important;
                padding: 0 !important;
                margin: 0 !important;
                overflow: visible !important;
                clip: auto !important;
                white-space: normal !important;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased pb-16 md:pb-0 overflow-x-hidden">
        {/* Removed bg-white to allow gradient from CSS */}
        {/* The ClientWrapper component handles all client-side rendering */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
} 