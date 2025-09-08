import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ConditionPageClient from '@/components/ConditionPageClient';
import { 
  getAllConditions, 
  getConditionBySlug, 
  getRelatedConditions 
} from '@/lib/conditions-data';
import { getDetailedCondition } from '@/lib/detailed-conditions-content';

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

// Generate metadata for each condition page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const baseCondition = getConditionBySlug(params.slug);
  
  if (!baseCondition) {
    return {
      title: 'Condition Not Found | KinetiKare Physiotherapy',
      description: 'The requested condition page could not be found.',
    };
  }

  const condition = getDetailedCondition(params.slug, baseCondition);
  
  // Generate location-specific keywords
  const locations = ['Burlington', 'Waterdown', 'Hamilton', 'Oakville'];
  const keywords = [
    `${condition.name} treatment`,
    `${condition.name} physiotherapy`,
    `${condition.name} therapy`,
    `${condition.name} rehabilitation`,
    ...locations.map(loc => `${condition.name} treatment ${loc}`),
    ...locations.map(loc => `${condition.name} physiotherapy ${loc}`),
    'Kareem Hassanein',
    'advanced manual therapy',
    'manual therapy',
    'dry needling',
    ...(condition.keywords || [])
  ];

  const title = `${condition.name} Treatment Burlington | Kareem Hassanein Physiotherapy`;
  const description = condition.metaDescription || 
    `Expert ${condition.name.toLowerCase()} treatment in Burlington with Kareem Hassanein. Advanced manual therapy physiotherapy using evidence-based techniques for lasting relief. Direct billing available.`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.kinetikarephysio.com/conditions/${params.slug}`,
      type: 'article',
      siteName: 'KinetiKare Physiotherapy',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

  // Generate MedicalCondition schema for SEO
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.name,
    "description": condition.description,
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": condition.affectedArea || condition.category
    },
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Physiotherapy",
        "description": "Evidence-based physiotherapy treatment including manual therapy, exercise prescription, and education"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Manual Therapy",
        "description": "Hands-on techniques to improve mobility and reduce pain"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Exercise Therapy",
        "description": "Targeted exercises to strengthen and rehabilitate"
      }
    ],
    "signOrSymptom": condition.symptoms?.map(symptom => ({
      "@type": "MedicalSymptom",
      "name": symptom
    })) || [],
    "riskFactor": condition.causes?.map(cause => ({
      "@type": "MedicalRiskFactor",
      "name": cause
    })) || [],
    "typicalTest": [
      {
        "@type": "MedicalTest",
        "name": "Physical Examination",
        "description": "Comprehensive assessment of movement, strength, and function"
      },
      {
        "@type": "MedicalTest",
        "name": "Functional Movement Assessment",
        "description": "Analysis of movement patterns and biomechanics"
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ConditionPageClient 
        condition={condition} 
        relatedConditions={relatedConditions}
      />
    </>
  );
}