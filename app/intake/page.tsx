import type { Metadata } from 'next';
import IntakeLandingPage from '@/components/intake/IntakeLandingPage';

export const metadata: Metadata = {
  title: 'Book Your Assessment | Kareem Hassanein Physiotherapy Burlington',
  description:
    'Book your physiotherapy assessment with Kareem Hassanein, Registered Physiotherapist in Burlington. One-on-one care, direct insurance billing, evening appointments, no referral needed.',
  openGraph: {
    title: 'Book Your Assessment | Kareem Hassanein Physiotherapy',
    description:
      'Book physiotherapy in Burlington. 5.0 stars on Google, direct insurance billing, evening appointments, no referral needed.',
  },
  robots: 'index, follow',
};

export default function IntakePage() {
  return <IntakeLandingPage />;
}
