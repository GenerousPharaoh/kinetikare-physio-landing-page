import Link from 'next/link';
import { Metadata } from 'next';
import {
  ChevronRightIcon,
  ArrowsRightLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { CONDITION_COMPARISONS } from '@/lib/condition-comparisons';

const SITE_URL = 'https://www.kinetikarephysio.com';
const PAGE_URL = `${SITE_URL}/conditions/compare`;
const PAGE_TITLE =
  'Condition Comparisons: How to Tell Similar Injuries Apart | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Side-by-side comparisons of commonly confused conditions. Tennis vs. golfer\'s elbow, rotator cuff vs. frozen shoulder, and more. Burlington Registered Physiotherapist.';

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
    siteName: 'Kareem Hassanein Physiotherapy',
    authors: [SEO_AUTHOR.name],
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { modifiedTime: CONTENT_LAST_MODIFIED_ISO.conditions }
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
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { dateModified: CONTENT_LAST_MODIFIED_ISO.conditions }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center space-x-2 text-sm text-slate-600 mb-4"
              >
                <Link
                  href="/"
                  className="hover:text-[#B08D57] transition-colors duration-200"
                >
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link
                  href="/conditions"
                  className="hover:text-[#B08D57] transition-colors duration-200"
                >
                  Conditions
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Compare</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Conditions that get confused, compared
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Some conditions sit close enough together that people (and sometimes
                clinicians) get them mixed up. These pages lay the patterns side by
                side. Where the pain points, what triggers it, which clinical tests
                separate them, and what I check in clinic when I am not sure yet.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book an Assessment
                </Link>
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  All Conditions
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison list */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ArrowsRightLeftIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Comparisons available
                </h2>
              </div>

              <div className="grid gap-5">
                {CONDITION_COMPARISONS.map((comparison) => (
                  <Link
                    key={comparison.pair}
                    href={`/conditions/compare/${comparison.pair}`}
                    className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-[#B08D57] hover:shadow-md transition-all block"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                          {comparison.conditionA.shortName}{' '}
                          <span className="text-slate-400 font-normal">vs.</span>{' '}
                          {comparison.conditionB.shortName}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {comparison.atAGlance}
                        </p>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-[#B08D57] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
