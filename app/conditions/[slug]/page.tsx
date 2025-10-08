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

// Helper function to generate dynamic meta descriptions based on condition category
function generateDynamicMetaDescription(condition: any): string {
  const conditionNameLower = condition.name.toLowerCase();

  // Category-specific templates for more targeted SEO
  const categoryTemplates: Record<string, string[]> = {
    'spinal-health': [
      `${condition.name} treatment in Burlington. Manual therapy and targeted exercises for spine rehabilitation. Direct billing available.`,
      `Evidence-based ${conditionNameLower} physiotherapy with Kareem Hassanein. Comprehensive spinal assessment and personalized treatment plans.`,
      `Get relief from ${conditionNameLower} with proven manual therapy techniques. Burlington physiotherapy clinic with evening hours.`
    ],
    'shoulder': [
      `${condition.name} physiotherapy in Burlington. Restore shoulder function with manual therapy and progressive exercises.`,
      `Comprehensive ${conditionNameLower} treatment with Kareem Hassanein. Effective shoulder rehabilitation for lasting recovery.`,
      `Professional ${conditionNameLower} assessment and treatment. Evidence-based shoulder therapy in Burlington with direct billing.`
    ],
    'knee': [
      `Effective ${conditionNameLower} treatment in Burlington. Comprehensive knee rehabilitation with manual therapy and exercise prescription.`,
      `Get back to activity with ${conditionNameLower} physiotherapy. Thorough knee assessment and personalized treatment.`,
      `Professional ${conditionNameLower} rehabilitation with Kareem Hassanein. Evidence-based knee therapy for optimal recovery.`
    ],
    'hip-pelvis': [
      `${condition.name} physiotherapy in Burlington. Comprehensive hip and pelvic rehabilitation for improved mobility.`,
      `Comprehensive ${conditionNameLower} treatment with manual therapy. Professional hip assessment and targeted exercises.`,
      `Evidence-based ${conditionNameLower} rehabilitation with Kareem Hassanein. Restore hip function with personalized treatment.`
    ],
    'foot-ankle': [
      `${condition.name} treatment in Burlington. Comprehensive foot and ankle rehabilitation for optimal recovery.`,
      `Professional ${conditionNameLower} physiotherapy with Kareem Hassanein. Thorough ankle assessment and manual therapy.`,
      `Get relief from ${conditionNameLower} with evidence-based treatment. Burlington clinic with direct billing and evening hours.`
    ],
    'elbow-wrist-hand': [
      `${condition.name} treatment in Burlington. Comprehensive upper extremity rehabilitation with manual therapy.`,
      `Comprehensive ${conditionNameLower} physiotherapy with Kareem Hassanein. Restore hand and wrist function effectively.`,
      `Professional ${conditionNameLower} assessment and treatment. Evidence-based therapy for elbow, wrist, and hand conditions.`
    ]
  };

  // Get templates for this category or use default
  const templates = categoryTemplates[condition.category] || [
    `${condition.name} treatment in Burlington with Kareem Hassanein. Evidence-based physiotherapy using manual therapy for lasting relief.`
  ];

  // Select template based on condition name hash (for consistency)
  const templateIndex = condition.name.length % templates.length;
  return templates[templateIndex];
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
  const locations = ['Burlington', 'Waterdown', 'Hamilton', 'Oakville', 'Carlisle'];
  const keywords = [
    `${condition.name} treatment`,
    `${condition.name} physiotherapy`,
    `${condition.name} therapy`,
    `${condition.name} rehabilitation`,
    ...locations.map(loc => `${condition.name} treatment ${loc}`),
    ...locations.map(loc => `${condition.name} physiotherapy ${loc}`),
    'Kareem Hassanein',
    'manual therapy',
    'dry needling',
    'exercise therapy',
    ...(condition.keywords || [])
  ];

  const title = `${condition.name} Treatment Burlington | Kareem Hassanein Physiotherapy`;

  // Use dynamic meta description based on category if no custom one exists
  const description = condition.metaDescription || generateDynamicMetaDescription(condition);

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
          "reviewCount": "9"
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

  // Generate FAQ schema based on condition type - common questions patients ask
  const generateFAQSchema = () => {
    const faqs = [];

    // Add condition-specific FAQs
    faqs.push({
      "@type": "Question",
      "name": `What causes ${condition.name.toLowerCase()}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": condition.causes ? `Common causes include ${condition.causes.slice(0, 3).join(', ')}. A thorough assessment can identify your specific contributing factors.` : `${condition.name} can have various causes. A physiotherapy assessment will help identify the specific factors contributing to your condition.`
      }
    });

    faqs.push({
      "@type": "Question",
      "name": `How long does ${condition.name.toLowerCase()} treatment take?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Recovery time varies based on severity and individual factors. Most patients see improvement within 4-6 weeks of consistent physiotherapy treatment, though complete recovery may take longer.`
      }
    });

    faqs.push({
      "@type": "Question",
      "name": `Can physiotherapy help with ${condition.name.toLowerCase()}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Yes, physiotherapy is highly effective for ${condition.name.toLowerCase()}. Treatment includes manual therapy, targeted exercises, and education to address both symptoms and underlying causes.`
      }
    });

    // Add category-specific FAQs
    if (condition.category === 'spinal-health') {
      faqs.push({
        "@type": "Question",
        "name": "Do I need imaging (X-ray, MRI) before physiotherapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most spinal conditions can be effectively assessed and treated without imaging. Your physiotherapist will determine if imaging is necessary based on your clinical presentation."
        }
      });
    } else if (condition.category === 'knee' || condition.category === 'shoulder') {
      faqs.push({
        "@type": "Question",
        "name": "Can I avoid surgery with physiotherapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many patients successfully manage their condition with physiotherapy alone. Conservative treatment is often the first recommended approach, with surgery considered only if conservative measures don't provide adequate relief."
        }
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs
    };
  };

  const faqSchema = generateFAQSchema();

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ConditionPageClient
        condition={condition}
        relatedConditions={relatedConditions}
        conditionSlug={params.slug}
      />
    </>
  );
}