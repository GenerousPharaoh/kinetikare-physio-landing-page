import { Metadata } from 'next';
import TreatmentsHero from '@/components/treatments/TreatmentsHero';
import TreatmentsList from '@/components/treatments/TreatmentsList';
import TreatmentsCTA from '@/components/treatments/TreatmentsCTA';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

export const metadata: Metadata = {
  title: 'Physiotherapy Treatments | Evidence-Based Therapy | KinetiKare',
  description: 'Comprehensive range of physiotherapy treatments in Burlington. From manual therapy to rehabilitation, evidence-based solutions for your recovery.',
  keywords: 'physiotherapy treatments, manual therapy, dry needling, exercise therapy, sports rehabilitation, Burlington physiotherapy',
  openGraph: {
    title: 'Physiotherapy Treatments - KinetiKare',
    description: 'Comprehensive physiotherapy treatments in Burlington. Expert care with proven techniques for lasting recovery.',
    type: 'website',
    url: 'https://www.kinetikarephysio.com/treatments',
    siteName: 'KinetiKare Physiotherapy',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KinetiKare Physiotherapy Treatments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physiotherapy Treatments | KinetiKare',
    description: 'Evidence-based physiotherapy treatments in Burlington.',
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
