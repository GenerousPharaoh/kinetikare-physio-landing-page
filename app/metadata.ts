import { Metadata } from 'next';

// Generate metadata using a function for more flexibility
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kinetikarephysio.com'),
  title: {
    default: 'Kareem Hassanein Physiotherapist Burlington | Back Pain & Sports Injury Treatment',
    template: '%s | Kareem Hassanein Physiotherapy Burlington',
  },
  description: 'Kareem Hassanein, expert physiotherapist in Burlington treating back pain, neck pain, sports injuries, knee pain. Serving North Burlington, Alton Village, Palladium Way. MSc PT, direct billing, evening appointments available.',
  keywords: [
    'Kareem Hassanein',
    'Kareem Hassanein physiotherapist',
    'Kareem Hassanein Burlington',
    'physiotherapist Burlington',
    'physiotherapy Burlington',
    'Burlington physiotherapist',
    'North Burlington physiotherapy',
    'Alton Village physiotherapy',
    'physiotherapy Palladium Way',
    'back pain Burlington',
    'neck pain Burlington',
    'knee pain Burlington',
    'shoulder pain Burlington',
    'sciatica Burlington',
    'sports injury Burlington',
    'running injury Burlington',
    'tennis elbow Burlington',
    'plantar fasciitis Burlington',
    'rotator cuff Burlington',
    'ACL rehabilitation Burlington',
    'post surgery physio Burlington',
    'manual therapy Burlington',
    'dry needling Burlington',
    'IMS Burlington',
    'sports physiotherapist Burlington',
    'sports physio Burlington',
    'physiotherapist near me',
    'best physiotherapist Burlington',
    'registered physiotherapist Burlington',
    'MSc physiotherapy Burlington',
    'CAMPT physiotherapist Burlington',
    'evening physio Burlington',
    'direct billing physiotherapy Burlington',
    'Waterdown',
    'Oakville',
    'Hamilton'
  ],
  authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com' }],
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
    canonical: 'https://www.kinetikarephysio.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.kinetikarephysio.com',
    title: 'Kareem Hassanein Physiotherapist | Burlington Back Pain & Sports Injury Expert',
    description: 'Kareem Hassanein - Burlington\'s trusted physiotherapist. Expert treatment for back pain, sports injuries, knee pain. North Burlington, Alton Village. Book online.',
    siteName: 'Kareem Hassanein Physiotherapy',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapist Burlington - Back Pain Sports Injury Treatment',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kareem Hassanein Physiotherapist Burlington | Pain & Injury Treatment',
    description: 'Kareem Hassanein - Expert physiotherapist in Burlington. Back pain, sports injuries, direct billing.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  other: {
    'theme-color': '#4A87A0',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}; 