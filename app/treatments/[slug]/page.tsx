import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTreatmentById, getAllTreatments } from '@/lib/treatments-data';
import TreatmentHero from '@/components/treatments/TreatmentHero';
import TreatmentContent from '@/components/treatments/TreatmentContent';
import TreatmentProcess from '@/components/treatments/TreatmentProcess';
import TreatmentFAQ from '@/components/treatments/TreatmentFAQ';
import TreatmentCTA from '@/components/treatments/TreatmentCTA';

export async function generateStaticParams() {
  const treatments = getAllTreatments();
  return treatments.map((treatment) => ({
    slug: treatment.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const treatment = getTreatmentById(params.slug);
  
  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${treatment.name} | Physiotherapy Treatment in Burlington | KinetiKare`,
    description: treatment.metaDescription,
    keywords: treatment.keywords.join(', '),
    openGraph: {
      title: `${treatment.name} - Physiotherapy Treatment in Burlington`,
      description: treatment.metaDescription,
      type: 'article',
      url: `https://www.kinetikarephysio.com/treatments/${treatment.id}`,
      siteName: 'KinetiKare Physiotherapy',
      images: [
        {
          url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${treatment.name} Treatment at KinetiKare`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.name} | KinetiKare Physiotherapy`,
      description: treatment.metaDescription,
      images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.kinetikarephysio.com/treatments/${treatment.id}`,
    },
  };
}

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = getTreatmentById(params.slug);

  if (!treatment) {
    notFound();
  }

  // Generate MedicalProcedure schema
  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.name,
    description: treatment.description,
    procedureType: 'PhysicalTherapy',
    preparation: treatment.expectations,
    followup: 'Regular follow-up appointments to monitor progress and adjust treatment approach as needed.',
    howPerformed: treatment.process.map(step => step.description).join(' '),
    bodyLocation: treatment.conditions,

    // Add provider information
    provider: {
      '@type': 'MedicalBusiness',
      name: 'KinetiKare Physiotherapy',
      url: 'https://www.kinetikarephysio.com',
      telephone: '+19056346000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4631 Palladium Way, Unit 6',
        addressLocality: 'Burlington',
        addressRegion: 'ON',
        postalCode: 'L7M 0W9',
        addressCountry: 'CA',
      },
      medicalSpecialty: 'Physiotherapy',
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <TreatmentHero treatment={treatment} />
      <TreatmentContent treatment={treatment} />
      <TreatmentProcess treatment={treatment} />
      <TreatmentFAQ treatment={treatment} />
      <TreatmentCTA treatmentName={treatment.name} />
    </main>
  );
}
