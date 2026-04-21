import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ConditionPageClient from '@/components/ConditionPageClient';
import {
  getAllConditions,
  getConditionBySlug,
  getRelatedConditions,
  type Condition
} from '@/lib/conditions-data';
import { getDetailedCondition } from '@/lib/detailed-conditions-content';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import {
  KNEE_CLUSTER,
  type PatternMatcherCluster,
} from '@/lib/pattern-matchers/knee-cluster';
import { LOW_BACK_CLUSTER } from '@/lib/pattern-matchers/low-back-cluster';
import { SHOULDER_CLUSTER } from '@/lib/pattern-matchers/shoulder-cluster';
import { HIP_CLUSTER } from '@/lib/pattern-matchers/hip-cluster';
import { ELBOW_CLUSTER } from '@/lib/pattern-matchers/elbow-cluster';
import { FOOT_ANKLE_CLUSTER } from '@/lib/pattern-matchers/foot-ankle-cluster';

// Registry of all pattern-matcher clusters. Keyed by the cluster key string
// used in each condition's patternMatcher.clusterKey field. Adding a new
// cluster is a one-line change here plus the cluster file itself.
const PATTERN_CLUSTERS: Record<string, PatternMatcherCluster> = {
  [KNEE_CLUSTER.key]: KNEE_CLUSTER,
  [LOW_BACK_CLUSTER.key]: LOW_BACK_CLUSTER,
  [SHOULDER_CLUSTER.key]: SHOULDER_CLUSTER,
  [HIP_CLUSTER.key]: HIP_CLUSTER,
  [ELBOW_CLUSTER.key]: ELBOW_CLUSTER,
  [FOOT_ANKLE_CLUSTER.key]: FOOT_ANKLE_CLUSTER,
};

function getCluster(key: string): PatternMatcherCluster | undefined {
  return PATTERN_CLUSTERS[key];
}

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
function generateDynamicMetaDescription(condition: Condition): string {
  const categoryFocus: Record<string, string> = {
    'spinal-health': 'back and neck symptoms',
    shoulder: 'shoulder pain and stiffness',
    knee: 'knee pain and movement limitations',
    'hip-pelvis': 'hip and pelvic pain',
    'foot-ankle': 'foot and ankle pain',
    'elbow-wrist-hand': 'elbow, wrist, and hand symptoms',
  };
  const focus = categoryFocus[condition.category] || 'musculoskeletal pain and injury';

  const baseDescription = condition.titleIntent === 'informational'
    ? `${condition.name}: symptoms, causes, and evidence-based treatment explained by Kareem Hassanein, Registered Physiotherapist in Burlington, Ontario.`
    : `${condition.name} treatment in Burlington for ${focus}. Physiotherapy care with Kareem Hassanein, Registered Physiotherapist. Direct billing available.`;

  const maxLength = 158;

  if (baseDescription.length <= maxLength) {
    return baseDescription;
  }

  const trimmed = baseDescription.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  const safeCutoff = lastSpace > 120 ? lastSpace : maxLength;
  return `${trimmed.slice(0, safeCutoff).trimEnd()}...`;
}

// Pick title format based on search intent. Default is local (Burlington-anchored).
function generateConditionTitle(condition: Condition): string {
  if (condition.titleIntent === 'informational') {
    return `${condition.name}: Symptoms, Causes & Treatment | Kareem Hassanein, RPT`;
  }
  return `${condition.name} Treatment in Burlington | Kareem Hassanein Physiotherapy`;
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

  const title = generateConditionTitle(condition);

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

  // Build a pattern-matcher cluster payload if this condition participates in one.
  // We resolve every slug in the cluster to its detailed record so the client
  // component has access to name + patternMatcher markers without pulling the
  // large detailed-content module into the client bundle.
  let patternCluster: PatternMatcherCluster | undefined;
  let patternConditions:
    | Record<string, { slug: string; name: string; patternMatcher?: typeof condition.patternMatcher }>
    | undefined;

  if (condition.patternMatcher?.clusterKey) {
    const cluster = getCluster(condition.patternMatcher.clusterKey);
    if (cluster && cluster.conditionSlugs.includes(params.slug)) {
      patternCluster = cluster;
      patternConditions = {};
      for (const slug of cluster.conditionSlugs) {
        const base = getConditionBySlug(slug);
        if (!base) continue;
        const detailed = getDetailedCondition(slug, base);
        patternConditions[slug] = {
          slug: detailed.slug,
          name: detailed.name,
          patternMatcher: detailed.patternMatcher,
        };
      }
    }
  }

  const title = `${condition.name} Treatment in Burlington | Kareem Hassanein Physiotherapy`;
  const description = condition.metaDescription || generateDynamicMetaDescription(condition);

  // Build HowTo entry for exercise progression phases when present
  const exerciseProgression = condition.exerciseProgression;
  const howToSchema = exerciseProgression
    ? {
        "@type": "HowTo",
        "@id": `https://www.kinetikarephysio.com/conditions/${params.slug}#rehab-progression`,
        "name": `Rehabilitation Phases for ${condition.name}`,
        "description": `Evidence-based progressive rehabilitation phases for ${condition.name}, authored and supervised by Kareem Hassanein, Registered Physiotherapist.`,
        "author": { "@id": SEO_PERSON_ID },
        "about": { "@id": "#condition" },
        "step": [exerciseProgression.phase1, exerciseProgression.phase2, exerciseProgression.phase3].map((phase) => ({
          "@type": "HowToSection",
          "name": phase.title,
          "itemListElement": [
            {
              "@type": "HowToStep",
              "name": phase.title,
              "text": phase.focus,
              "itemListElement": (phase.examples || []).map((ex) => ({
                "@type": "HowToDirection",
                "text": ex,
              })),
            },
          ],
        })),
      }
    : null;

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
          "reviewCount": "24"
        }
      },
      ...(howToSchema ? [howToSchema] : []),
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
        patternCluster={patternCluster}
        patternConditions={patternConditions}
      />
      <div className="print-only print-byline" aria-hidden="true">
        Kareem Hassanein, Registered Physiotherapist · CPO #20079 · kinetikarephysio.com
      </div>
    </>
  );
}
