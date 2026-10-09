import type { Metadata } from 'next';
import IntakeLandingPage from '@/components/intake/IntakeLandingPage';

export const metadata: Metadata = {
  title: 'Physiotherapy in Burlington | Kareem Hassanein',
  description:
    'One-on-one physiotherapy in Burlington for knee, hip, back and sports injuries. Direct billing, afternoon and evening appointments, no referral needed.',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/intake',
  },
  openGraph: {
    siteName: 'Kinetikare',
    title: 'Physiotherapy in Burlington | Endorphins Health and Wellness Centre',
    description:
      '1-on-1 physiotherapy in Burlington. 5.0 stars on Google, direct billing, afternoon and evening appointments, no referral.',
  },
  robots: 'noindex, follow',
};

export default function IntakePage() {
  return <IntakeLandingPage />;
}
