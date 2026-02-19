import React from 'react';
import { Metadata } from 'next';
import ConditionsPageClient from '@/components/ConditionsPageClient';
import { conditionCategories, additionalServices } from '@/lib/conditions-data';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Conditions Treated in Burlington | Kareem Hassanein Physiotherapy',
  description: 'Condition guides for back, neck, shoulder, hip, knee, foot, and ankle pain. Care in Burlington with Kareem Hassanein, Registered Physiotherapist.',
  openGraph: {
    title: 'Conditions Treated | Kareem Hassanein Physiotherapy',
    description: 'Browse condition guides and treatment information for common musculoskeletal conditions in Burlington.',
    url: 'https://www.kinetikarephysio.com/conditions',
    type: 'website',
    siteName: 'Kareem Hassanein Physiotherapy',
    images: [{
      url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Conditions Treated - Kareem Hassanein Physiotherapy'
    }]
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/conditions'
  },
};

export default function ConditionsPage() {
  // Transform the condition categories to include formatted condition strings
  const formattedCategories = conditionCategories.map(category => ({
    title: category.title,
    subtitle: category.subtitle,
    accent: category.accent,
    gradient: category.gradient,
    textGradient: category.textGradient,
    conditions: category.conditions.map(condition => {
      // Combine name and description in the format expected by ConditionsPageClient
      if (condition.description) {
        return `${condition.name} (${condition.description})`;
      }
      return condition.name;
    }),
    // Also pass the raw conditions data for proper slug generation
    conditionsData: category.conditions
  }));

  const allConditionEntries = formattedCategories.flatMap((category) => category.conditionsData);
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Physiotherapy Conditions Treated in Burlington',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: allConditionEntries.length,
    itemListElement: allConditionEntries.map((condition, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: condition.name,
      url: `https://www.kinetikarephysio.com/conditions/${condition.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kinetikarephysio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conditions',
        item: 'https://www.kinetikarephysio.com/conditions',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ConditionsPageClient
        conditionCategories={formattedCategories}
        additionalServices={additionalServices}
      />
    </>
  );
}
