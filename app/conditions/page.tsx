import { serializeJsonLd } from '@/lib/structured-data';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ConditionsPageClient from '@/components/ConditionsPageClient';
import { conditionCategories, additionalServices } from '@/lib/conditions-data';
import {
  getAllComparisonPairs,
  getComparisonByPair,
} from '@/lib/condition-comparisons';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Conditions Treated in Burlington | Kareem Hassanein',
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

// Topic hubs surfaced on the conditions index. Copy drawn from the hub pages
// so the cards match the spirit of each hub without duplicating its H1 verbatim.
const topicHubs = [
  {
    href: '/conditions/hip-pain',
    title: 'Hip Pain Guide',
    blurb:
      'Understand lateral, groin, and deep hip pain with evidence-based routing to the right condition page.',
    region: 'Hip',
  },
  {
    href: '/conditions/knee-pain',
    title: 'Knee Pain Guide',
    blurb:
      'Front, medial, lateral, and posterior knee pain sorted by location so you can find the pattern that fits.',
    region: 'Knee',
  },
  {
    href: '/conditions/shoulder-pain',
    title: 'Shoulder Pain Guide',
    blurb:
      'Rotator cuff, frozen shoulder, AC joint, and biceps pain sorted by location so you can find the pattern that fits.',
    region: 'Shoulder',
  },
  {
    href: '/conditions/elbow-pain',
    title: 'Elbow Pain Guide',
    blurb:
      'Tennis elbow, golfers elbow, and forearm nerve symptoms mapped by location with routing to the right condition page.',
    region: 'Elbow',
  },
];

// Pain-location / symptom guides. Titles and blurbs mirror what the guides
// themselves carry so the index reads as a consistent entry point.
const painGuides = [
  {
    href: '/conditions/pain-guides/pain-below-kneecap',
    title: 'Pain Right Below the Kneecap',
    blurb:
      'A tender spot below the kneecap that flares with jumping, stairs, or deep squats.',
    region: 'Knee',
  },
  {
    href: '/conditions/pain-guides/fluid-on-the-knee',
    title: 'Fluid on the Knee',
    blurb:
      'Swelling inside the knee joint, what the onset pattern tells you, and what to do first.',
    region: 'Knee',
  },
];

export default function ConditionsPage() {
  // Transform the condition categories to include formatted condition strings
  const formattedCategories = conditionCategories.map(category => ({
    slug: category.slug,
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

  // Dynamically enumerate comparison pages so the index never drifts from
  // `lib/condition-comparisons.ts`.
  const comparisons = getAllComparisonPairs()
    .map((pair) => {
      const c = getComparisonByPair(pair);
      if (!c) return null;
      return {
        pair,
        href: `/conditions/compare/${pair}`,
        label: `${c.conditionA.shortName} vs. ${c.conditionB.shortName}`,
      };
    })
    .filter((c): c is { pair: string; href: string; label: string } => c !== null);

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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <ConditionsPageClient
        conditionCategories={formattedCategories}
        additionalServices={additionalServices}
        topicHubs={topicHubs}
        painGuides={painGuides}
        comparisons={comparisons}
      />
      {/* Every condition page, guide and comparison as plain links, rendered
          on the server so each one is reachable without the tabs. */}
      <section aria-labelledby="all-conditions-heading" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="all-conditions-heading" className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            All conditions
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {formattedCategories.map((category) => (
              <div key={category.slug}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{category.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {category.conditionsData.map((condition) => (
                    <li key={condition.slug}>
                      <Link
                        href={`/conditions/${condition.slug}`}
                        className="text-[15px] leading-snug text-slate-700 transition-colors hover:text-[#B08D57]"
                      >
                        {condition.description ? `${condition.name} (${condition.description})` : condition.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Guides</h3>
              <ul className="mt-3 space-y-1.5">
                {[...topicHubs, ...painGuides].map((guide) => (
                  <li key={guide.href}>
                    <Link href={guide.href} className="text-[15px] leading-snug text-slate-700 transition-colors hover:text-[#B08D57]">
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Comparisons</h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <Link href="/conditions/compare" className="text-[15px] leading-snug text-slate-700 transition-colors hover:text-[#B08D57]">
                    All comparisons
                  </Link>
                </li>
                {comparisons.map((c) => (
                  <li key={c.pair}>
                    <Link href={c.href} className="text-[15px] leading-snug text-slate-700 transition-colors hover:text-[#B08D57]">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
