import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ConditionPageClient from '@/components/ConditionPageClient';
import {
  getAllConditions,
  getConditionBySlug,
  getRelatedConditions
} from '@/lib/conditions-data';
import { getDetailedCondition } from '@/lib/detailed-conditions-content';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all conditions
export async function generateStaticParams() {
  const conditions = getAllConditions();
  
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

// Helper function to generate dynamic meta descriptions based on condition category
function generateDynamicMetaDescription(condition: any): string {
  const categoryFocus: Record<string, string> = {
    'spinal-health': 'back and neck symptoms',
    shoulder: 'shoulder pain and stiffness',
    knee: 'knee pain and movement limitations',
    'hip-pelvis': 'hip and pelvic pain',
    'foot-ankle': 'foot and ankle pain',
    'elbow-wrist-hand': 'elbow, wrist, and hand symptoms',
  };
  const focus = categoryFocus[condition.category] || 'musculoskeletal pain and injury';
  const baseDescription = `${condition.name} physiotherapy in Burlington for ${focus}. Care with Kareem Hassanein, Registered Physiotherapist. Direct billing available.`;
  const maxLength = 158;

  if (baseDescription.length <= maxLength) {
    return baseDescription;
  }

  const trimmed = baseDescription.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  const safeCutoff = lastSpace > 120 ? lastSpace : maxLength;
  return `${trimmed.slice(0, safeCutoff).trimEnd()}...`;
}

// Generate metadata for each condition page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const baseCondition = getConditionBySlug(params.slug);

  if (!baseCondition) {
    return {
      title: 'Condition Not Found | Kareem Hassanein Physiotherapy',
      description: 'The requested condition page could not be found.',
    };
  }

  const condition = getDetailedCondition(params.slug, baseCondition);

  const title = `${condition.name} Physiotherapy in Burlington | Kareem Hassanein`;

  // Use dynamic meta description based on category if no custom one exists
  const description = condition.metaDescription || generateDynamicMetaDescription(condition);

  return {
    title,
    description,
    authors: [SEO_AUTHOR],
    creator: SEO_AUTHOR.name,
    publisher: SEO_PUBLISHER,
    openGraph: {
      title,
      description,
      url: `https://www.kinetikarephysio.com/conditions/${params.slug}`,
      type: 'article',
      siteName: 'Kareem Hassanein Physiotherapy',
      authors: [SEO_AUTHOR.name],
      ...(CONTENT_LAST_MODIFIED_ISO.conditions
        ? { modifiedTime: CONTENT_LAST_MODIFIED_ISO.conditions }
        : {}),
      images: [
        {
          url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${condition.name} Physiotherapy - Kareem Hassanein`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.kinetikarephysio.com/conditions/${params.slug}`,
    },
  };
}

export default function ConditionPage({ params }: PageProps) {
  const baseCondition = getConditionBySlug(params.slug);
  
  if (!baseCondition) {
    notFound();
  }

  const condition = getDetailedCondition(params.slug, baseCondition);
  const relatedConditions = getRelatedConditions(
    params.slug, 
    baseCondition.category, 
    3
  );
  const title = `${condition.name} Physiotherapy in Burlington | Kareem Hassanein`;
  const description = condition.metaDescription || generateDynamicMetaDescription(condition);

  // Enhanced schema with LocalBusiness and Person for SEO
  const enhancedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        "@id": "#condition",
        "name": condition.name,
        "description": condition.description,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": condition.affectedArea || condition.category
        },
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Physiotherapy Treatment",
          "description": "Evidence-based physiotherapy treatment including manual therapy, exercise prescription, and education",
          "provider": {
            "@type": "Person",
            "@id": "#kareem",
            "name": "Kareem Hassanein",
            "jobTitle": "Registered Physiotherapist",
            "alumniOf": ["Robert Gordon University", "McMaster University"],
            "memberOf": {
              "@type": "Organization",
              "name": "College of Physiotherapists of Ontario",
              "identifier": "20079"
            }
          }
        },
        "signOrSymptom": condition.symptoms?.map(symptom => ({
          "@type": "MedicalSymptom",
          "name": symptom
        })) || [],
        "riskFactor": condition.causes?.map(cause => ({
          "@type": "MedicalRiskFactor",
          "name": cause
        })) || []
      },
      {
        "@type": "LocalBusiness",
        "@id": "#clinic",
        "name": "Kareem Hassanein Physiotherapy",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4631 Palladium Way, Unit 6",
          "addressLocality": "Burlington",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "areaServed": [
          {"@type": "City", "name": "Burlington"},
          {"@type": "City", "name": "Waterdown"},
          {"@type": "City", "name": "Oakville"},
          {"@type": "City", "name": "Flamborough"},
          {"@type": "City", "name": "Carlisle"}
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "17"
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kinetikarephysio.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Conditions",
        "item": "https://www.kinetikarephysio.com/conditions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": condition.name,
        "item": `https://www.kinetikarephysio.com/conditions/${params.slug}`
      }
    ]
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `https://www.kinetikarephysio.com/conditions/${params.slug}#webpage`,
    url: `https://www.kinetikarephysio.com/conditions/${params.slug}`,
    name: title,
    description,
    author: {
      '@id': SEO_PERSON_ID,
    },
    publisher: {
      '@id': SEO_ORGANIZATION_ID,
    },
    about: {
      '@id': '#condition',
    },
    mainEntity: {
      '@id': '#condition',
    },
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { dateModified: CONTENT_LAST_MODIFIED_ISO.conditions }
      : {}),
    inLanguage: 'en-CA',
  };

  const faqEntities = (condition.faqs || [])
    .filter((faq) => faq.question && faq.answer)
    .map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }));

  const faqSchema = faqEntities.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ConditionPageClient
        condition={condition}
        relatedConditions={relatedConditions}
        conditionSlug={params.slug}
      />
    </>
  );
}
