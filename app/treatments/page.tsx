import { Metadata } from 'next';
import TreatmentsHero from '@/components/treatments/TreatmentsHero';
import TreatmentsList from '@/components/treatments/TreatmentsList';
import TreatmentsCTA from '@/components/treatments/TreatmentsCTA';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

export const metadata: Metadata = {
  title: 'Physiotherapy Treatments | Kareem Hassanein Physiotherapy Burlington',
  description: 'Physiotherapy treatments in Burlington with Kareem Hassanein, Registered Physiotherapist. Joint mobilization, dry needling, strengthening exercises, and rehab plans.',
  keywords: [
    'physiotherapy treatments Burlington',
    'Kareem Hassanein treatments',
    'joint mobilization Burlington',
    'dry needling Burlington',
    'strengthening exercises physiotherapy',
    'sports rehabilitation Burlington',
    'Registered Physiotherapist Burlington',
  ],
  openGraph: {
    title: 'Physiotherapy Treatments | Kareem Hassanein Physiotherapy',
    description: 'Browse treatment approaches used for musculoskeletal care in Burlington.',
    type: 'website',
    url: 'https://www.kinetikarephysio.com/treatments',
    siteName: 'Kareem Hassanein Physiotherapy',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy Treatments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physiotherapy Treatments | Kareem Hassanein Physiotherapy',
    description: 'Physiotherapy treatment options in Burlington.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/treatments',
  },
};

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TreatmentsHero />
      <MedicalDisclaimer />
      <TreatmentsList />
      <TreatmentsCTA />
    </main>
  );
}
