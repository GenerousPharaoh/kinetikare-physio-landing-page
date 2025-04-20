import { Metadata } from 'next';

// Generate metadata using a function for more flexibility
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://physiotherapy-next.vercel.app'),
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
  authors: [{ name: 'Kareem Hassanein', url: 'https://physiotherapy-next.vercel.app' }],
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
    canonical: 'https://physiotherapy-next.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://physiotherapy-next.vercel.app',
    title: 'Kareem Hassanein Physiotherapy - Burlington, Ontario',
    description: 'Expert physiotherapy care with manual therapy, dry needling, and evidence-based rehabilitation in Burlington, Ontario.',
    siteName: 'Kareem Hassanein Physiotherapy',
    images: [
      {
        url: 'https://physiotherapy-next.vercel.app/images/og-image.jpg',
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
    images: ['https://physiotherapy-next.vercel.app/images/og-image.jpg'],
  },
  other: {
    'theme-color': '#4A87A0',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}; 