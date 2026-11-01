import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  contentDateFor,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { CONDITION_COMPARISONS } from '@/lib/condition-comparisons';
import { Crumbs, cs, g, GuideMain, Head } from '@/components/guides/GuideKit';

// Hip, knee and buttock comparisons first; the elbow pair last (not promoted).
const DISPLAY_ORDER = [
  'hip-osteoarthritis-vs-greater-trochanteric-pain-syndrome',
  'proximal-hamstring-tendinopathy-vs-piriformis-syndrome',
  'patellar-tendinopathy-vs-patellofemoral',
  'acl-injuries-vs-meniscus-tears',
  'sciatica-vs-piriformis-syndrome',
  'rotator-cuff-vs-frozen-shoulder',
  'tennis-elbow-vs-golfers-elbow',
];
const rank = (pair: string) => {
  const i = DISPLAY_ORDER.indexOf(pair);
  return i === -1 ? DISPLAY_ORDER.length : i;
};
const ORDERED_COMPARISONS = [...CONDITION_COMPARISONS].sort((a, b) => rank(a.pair) - rank(b.pair));

const SITE_URL = 'https://www.kinetikarephysio.com';
const PAGE_URL = `${SITE_URL}/conditions/compare`;
const PAGE_TITLE = 'Condition Comparisons: How to Tell Similar Injuries Apart';
const PAGE_DESCRIPTION =
  'Side-by-side comparisons of commonly confused conditions: hip arthritis vs. lateral hip pain, ACL vs. meniscus, and more. Burlington Registered Physiotherapist.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [SEO_AUTHOR],
  creator: SEO_AUTHOR.name,
  publisher: SEO_PUBLISHER,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    siteName: 'Kinetikare',
    authors: [SEO_AUTHOR.name],
    ...(contentDateFor('/conditions/compare')
      ? { modifiedTime: contentDateFor('/conditions/compare') }
      : {}),
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Condition Comparisons - Kareem Hassanein Physiotherapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function ComparisonIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conditions',
        item: `${SITE_URL}/conditions`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Compare',
        item: PAGE_URL,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: { '@id': SEO_PERSON_ID },
    publisher: { '@id': SEO_ORGANIZATION_ID },
    inLanguage: 'en-CA',
    ...(contentDateFor('/conditions/compare')
      ? { dateModified: contentDateFor('/conditions/compare') }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />

      <GuideMain>
        <div className={`${g.frame} ${g.narrow}`}>
          <header className={g.opening}>
            <Crumbs
              items={[
                { href: '/', label: 'Home' },
                { href: '/conditions', label: 'Conditions' },
                { label: 'Compare' },
              ]}
            />

            <h1 className={cs.h1}>
              Conditions that get confused, compared
            </h1>

            <p className={cs.summary}>
              Some conditions sit close enough together that people (and sometimes
              clinicians) get them mixed up. These pages lay the patterns side by
              side: where the pain sits, what triggers it, which tests help tell them
              apart, and what I check in clinic. Symptoms alone do not settle a diagnosis,
              and the two can also occur together.
            </p>

            <div className={`${cs.actions} ${g.acts}`}>
              <Link
                href={JANE_ASSESSMENT_URL} data-booking-source="compare_page"
                target="_blank"
                rel="noopener noreferrer"
                className={cs.btnInk}
              >
                Book an Assessment
                <ArrowRightIcon aria-hidden="true" />
              </Link>
              <Link href="/conditions" className={cs.btnLine}>
                All Conditions
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </div>
          </header>

          {/* Comparison list */}
          <section className={g.sec}>
            <Head title="Comparisons available" />

            <ul className={g.pairs}>
              {ORDERED_COMPARISONS.map((comparison) => (
                <li key={comparison.pair}>
                  <Link href={`/conditions/compare/${comparison.pair}`} className={g.pairRow}>
                    <span className={g.duo} aria-hidden="true">
                      {[comparison.conditionA.slug, comparison.conditionB.slug].map((slug) => (
                        <span key={slug} className={g.thumb}>
                          <Image src={`/images/conditions/${slug}.webp`} alt="" fill sizes="60px" />
                        </span>
                      ))}
                    </span>
                    <div>
                      <h3 className={g.pairTitle}>
                        <span>
                          {comparison.conditionA.shortName}{' '}
                          <span className={g.vs}>vs.</span>{' '}
                          {comparison.conditionB.shortName}
                        </span>
                        <ArrowRightIcon aria-hidden="true" />
                      </h3>
                      <p className={g.pairText}>
                        {comparison.atAGlance}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </GuideMain>
    </>
  );
}
