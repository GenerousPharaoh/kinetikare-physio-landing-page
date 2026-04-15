import type { Metadata } from 'next';
import IntakeLandingPage from '@/components/intake/IntakeLandingPage';

export const metadata: Metadata = {
  title: 'Physiotherapy in Burlington | Physio Near You | Kareem Hassanein',
  description:
    '1-on-1 physiotherapy in Burlington for back, knee, and sports injuries. Direct billing to 17+ insurers. Convenient afternoon and evening appointments, no referral needed. Book your assessment at KinetiKare Physio.',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/intake',
  },
  openGraph: {
    title: 'Physiotherapy in Burlington | Endorphins Health and Wellness Centre',
    description:
      '1-on-1 physiotherapy in Burlington. 5.0 stars on Google, direct billing, afternoon and evening appointments, no referral.',
  },
  robots: 'index, follow',
};

export default function IntakePage() {
  return <IntakeLandingPage />;
}
