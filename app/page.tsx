import { Metadata } from 'next';
import { HomeAtlasSection, HomeApproach, HomeJourney, HomeServices, HomeVisit } from '@/components/home/HomeSections';
import HomeHero from '@/components/home/HomeHero';
import { archivo, playfairItalic } from '@/components/home/fonts';
import { geist } from '@/components/conditions/case/fonts';
import HomeReviews from '@/components/home/HomeReviews';
import styles from '@/components/home/Home.module.css';
import { reviews } from '@/lib/reviews';

// Initials of the four most recent reviewers (the list runs oldest to
// newest), for the rating badge in the hero. Worked out here so the review
// texts stay out of the hero's JavaScript.
const recentReviewers = reviews
  .slice(-4)
  .reverse()
  .map((r) =>
    r.name
      .replace(/^Dr\.\s+/, '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join(''),
  );

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

// Hero with the atlas rising over it, about, care journey, services, reviews, visit.
// Person schema is provided site-wide via app/layout.tsx.
export default function Home() {
  return (
    <main className={`${styles.home} ${playfairItalic.variable} ${archivo.variable} ${geist.variable}`}>
      <div className={styles.opening}>
        <HomeHero reviewers={recentReviewers} />
        <HomeAtlasSection />
      </div>
      <HomeApproach />
      <HomeJourney />
      <HomeServices />
      <HomeReviews />
      <HomeVisit />
    </main>
  );
}
