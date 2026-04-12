import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTreatmentById, getAllTreatments } from '@/lib/treatments-data';
import TreatmentHero from '@/components/treatments/TreatmentHero';
import TreatmentContent from '@/components/treatments/TreatmentContent';
import TreatmentProcess from '@/components/treatments/TreatmentProcess';
import TreatmentFAQ from '@/components/treatments/TreatmentFAQ';
import TreatmentCTA from '@/components/treatments/TreatmentCTA';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';

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
      title: 'Treatment Not Found | Kareem Hassanein Physiotherapy',
    };
  }

  const fallbackDescription = `${treatment.name} physiotherapy treatment in Burlington with Kareem Hassanein, Registered Physiotherapist.`;

  return {
    title: `${treatment.name} Burlington | Kareem Hassanein Physiotherapy`,
    description: treatment.metaDescription || fallbackDescription,
    authors: [SEO_AUTHOR],
    creator: SEO_AUTHOR.name,
    publisher: SEO_PUBLISHER,
    openGraph: {
      title: `${treatment.name} | Physiotherapy Treatment in Burlington`,
      description: treatment.metaDescription || fallbackDescription,
      type: 'article',
      url: `https://www.kinetikarephysio.com/treatments/${treatment.id}`,
      siteName: 'Kareem Hassanein Physiotherapy',
      authors: [SEO_AUTHOR.name],
      ...(CONTENT_LAST_MODIFIED_ISO.treatments
        ? { modifiedTime: CONTENT_LAST_MODIFIED_ISO.treatments }
        : {}),
      images: [
        {
          url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${treatment.name} treatment with Kareem Hassanein Physiotherapy`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${treatment.name} | Kareem Hassanein Physiotherapy`,
      description: treatment.metaDescription || fallbackDescription,
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

  const title = `${treatment.name} Burlington | Kareem Hassanein Physiotherapy`;

  // Generate MedicalProcedure schema
  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `https://www.kinetikarephysio.com/treatments/${treatment.id}#procedure`,
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
      name: 'Kareem Hassanein Physiotherapy',
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

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `https://www.kinetikarephysio.com/treatments/${treatment.id}#webpage`,
    url: `https://www.kinetikarephysio.com/treatments/${treatment.id}`,
    name: title,
    description: treatment.metaDescription,
    author: {
      '@id': SEO_PERSON_ID,
    },
    publisher: {
      '@id': SEO_ORGANIZATION_ID,
    },
    mainEntity: {
      '@id': `https://www.kinetikarephysio.com/treatments/${treatment.id}#procedure`,
    },
    ...(CONTENT_LAST_MODIFIED_ISO.treatments
      ? { dateModified: CONTENT_LAST_MODIFIED_ISO.treatments }
      : {}),
    inLanguage: 'en-CA',
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <TreatmentHero treatment={treatment} />
      <TreatmentContent treatment={treatment} />
      <TreatmentProcess treatment={treatment} />
      <TreatmentFAQ treatment={treatment} />
      <TreatmentCTA treatmentName={treatment.name} />
    </main>
  );
}
