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
    'CAMPT physiotherapy',
    'manual therapy',
    'dry needling',
    ...(condition.keywords || [])
  ];

  const title = `${condition.name} Treatment Burlington | Kareem Hassanein Physiotherapy`;
  const description = condition.metaDescription || 
    `Expert ${condition.name.toLowerCase()} treatment in Burlington with Kareem Hassanein. CAMPT-certified physiotherapy using evidence-based techniques for lasting relief. Direct billing available.`;

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

  return (
    <ConditionPageClient 
      condition={condition} 
      relatedConditions={relatedConditions}
    />
  );
}