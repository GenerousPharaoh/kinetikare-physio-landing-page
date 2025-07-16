import { Metadata } from 'next';

// Generate metadata using a function for more flexibility
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kinetikarephysio.com'),
  title: {
    default: 'KinetiKare Physiotherapy Burlington, Waterdown & Oakville | Kareem Hassanein',
    template: '%s | KinetiKare - Kareem Hassanein Physiotherapy',
  },
  description: 'KinetiKare offers personalized physiotherapy services in Burlington, Waterdown, and Oakville. Led by Kareem Hassanein, KinetiKare physiotherapy specializes in pain relief, injury recovery, and performance optimization.',
  keywords: [
    'KinetiKare',
    'KinetiKare Physiotherapy',
    'KinetiKare Burlington',
    'KinetiKare Waterdown',
    'KinetiKare Oakville',
    'Kinetikare',
    'Kinetikare physiotherapy',
    'Kinetikare physio',
    'KinetiKare Kareem Hassanein',
    'Kareem Hassanein KinetiKare',
    'physiotherapy Burlington',
    'physiotherapy Waterdown',
    'physiotherapy Oakville',
    'Burlington physiotherapy',
    'Waterdown physiotherapy',
    'Oakville physiotherapy',
    'physiotherapy Burlington Ontario',
    'physiotherapy Waterdown Ontario',
    'physiotherapy Oakville Ontario',
    'manual therapy Burlington Waterdown Oakville',
    'dry needling Burlington Waterdown Oakville',
    'sports injuries Burlington Waterdown Oakville',
    'back pain treatment Burlington Waterdown Oakville',
    'Kareem Hassanein',
    'Burlington',
    'Waterdown',
    'Oakville',
    'Hamilton'
  ],
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com' }],
  creator: 'Kareem Hassanein',
  publisher: 'KinetiKare - Kareem Hassanein Physiotherapy',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: 'index, follow',
  applicationName: 'KinetiKare Physiotherapy',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.kinetikarephysio.com',
    title: 'KinetiKare - Kareem Hassanein Physiotherapy | Burlington, Waterdown & Oakville',
    description: 'KinetiKare Physiotherapy provides manual therapy, dry needling, and evidence-based rehabilitation in Burlington, Waterdown, and Oakville, Ontario. Led by Kareem Hassanein.',
    siteName: 'KinetiKare Physiotherapy',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KinetiKare - Kareem Hassanein Physiotherapy Burlington Waterdown Oakville',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KinetiKare Physiotherapy | Kareem Hassanein',
    description: 'KinetiKare - Physiotherapy care in Burlington, Waterdown & Oakville, Ontario by Kareem Hassanein.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  other: {
    'theme-color': '#4A87A0',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}; 