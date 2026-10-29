import { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { HomeAtlasSection, HomeApproach, HomeJourney, HomeServices, HomeVisit } from '@/components/home/HomeSections';
import HomeGetBack from '@/components/home/HomeGetBack';
import HomeReviews from '@/components/home/HomeReviews';
import styles from '@/components/home/Home.module.css';

// The slogan's "The Art of Care." is set in true Playfair italic, which the
// site-wide font setup does not load. Loaded here so only the home page pays for it.
const playfairItalic = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-playfair-italic',
});

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Burlington Physiotherapy | Sports Rehab, Dry Needling, Cupping',
  description: 'One-on-one physiotherapy in Burlington for sports injuries, knee and hip pain, dry needling, and cupping. Direct billing and evening appointments.',
  openGraph: {
    siteName: 'Kinetikare',
    title: 'Burlington Physiotherapy | Sports Rehab, Dry Needling & Cupping',
    description: 'Registered Physiotherapist in Burlington offering sports rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based rehab.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physiotherapy in Burlington | Kareem Hassanein, PT',
    description: 'Sports injury rehabilitation, knee and hip pain treatment, dry needling, cupping, and direct billing in Burlington.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Opening and atlas, about, care journey, the prints, services, reviews, visit.
// Person schema is provided site-wide via app/layout.tsx.
export default function Home() {
  return (
    <main className={`${styles.home} ${playfairItalic.variable}`}>
      <HomeAtlasSection />
      <HomeApproach />
      <HomeJourney />
      <HomeGetBack />
      <HomeServices />
      <HomeReviews />
      <HomeVisit />
    </main>
  );
}
