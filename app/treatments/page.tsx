import { Metadata } from 'next';
import TreatmentsHero from '@/components/treatments/TreatmentsHero';
import TreatmentsList from '@/components/treatments/TreatmentsList';
import TreatmentsCTA from '@/components/treatments/TreatmentsCTA';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { geist } from '@/components/conditions/case/fonts';
import sheet from '@/components/sheet/Sheet.module.css';

export const metadata: Metadata = {
  title: 'Physiotherapy Treatments in Burlington | Kareem Hassanein',
  description: 'Physiotherapy treatments in Burlington with Kareem Hassanein, Registered Physiotherapist: strengthening exercises, joint mobilization, dry needling and more.',
  openGraph: {
    title: 'Physiotherapy Treatments | Kareem Hassanein Physiotherapy',
    description: 'Browse treatment approaches used for musculoskeletal care in Burlington.',
    type: 'website',
    url: 'https://www.kinetikarephysio.com/treatments',
    siteName: 'Kinetikare',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy Treatments',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/treatments',
  },
};

export default function TreatmentsPage() {
  return (
    <main className={`${sheet.root} ${geist.variable}`}>
      <TreatmentsList intro={<TreatmentsHero />} note={<MedicalDisclaimer />} />
      <TreatmentsCTA />
    </main>
  );
}
