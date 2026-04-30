import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  MapPinIcon,
  AcademicCapIcon,
  BeakerIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  CalendarIcon,
  PhoneIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import {
  CONDITION_COMPARISONS,
  getComparisonByPair,
} from '@/lib/condition-comparisons';

const SITE_URL = 'https://www.kinetikarephysio.com';

export async function generateStaticParams() {
  return CONDITION_COMPARISONS.map((comparison) => ({
    pair: comparison.pair,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { pair: string };
}): Promise<Metadata> {
  const comparison = getComparisonByPair(params.pair);

  if (!comparison) {
    return {
      title: 'Condition Comparison Not Found | Kareem Hassanein Physiotherapy',
    };
  }

  const pageUrl = `${SITE_URL}/conditions/compare/${comparison.pair}`;
  const title = `${comparison.title} | Kareem Hassanein Physiotherapy`;

  return {
    title,
    description: comparison.description,
    authors: [SEO_AUTHOR],
    creator: SEO_AUTHOR.name,
    publisher: SEO_PUBLISHER,
    openGraph: {
      title,
      description: comparison.description,
      url: pageUrl,
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
          alt: `${comparison.conditionA.name} vs. ${comparison.conditionB.name} - Kareem Hassanein Physiotherapy`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: comparison.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function ConditionComparisonPage({
  params,
}: {
  params: { pair: string };
}) {
  const comparison = getComparisonByPair(params.pair);

  if (!comparison) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/conditions/compare/${comparison.pair}`;
  const pageTitle = `${comparison.title} | Kareem Hassanein Physiotherapy`;

  const conditionA = getConditionBySlug(comparison.conditionA.slug);
  const conditionB = getConditionBySlug(comparison.conditionB.slug);

  const treatments = comparison.relatedTreatmentIds
    .map((id) => getTreatmentById(id))
    .filter((treatment): treatment is NonNullable<ReturnType<typeof getTreatmentById>> =>
      Boolean(treatment)
    );

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
        item: `${SITE_URL}/conditions/compare`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${comparison.conditionA.shortName} vs. ${comparison.conditionB.shortName}`,
        item: pageUrl,
      },
    ],
  };

  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: comparison.description,
    author: { '@id': SEO_PERSON_ID },
    publisher: { '@id': SEO_ORGANIZATION_ID },
    inLanguage: 'en-CA',
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Burlington, Ontario',
      },
    },
    mainEntity: [
      {
        '@type': 'WebPage',
        name: comparison.conditionA.name,
        url: `${SITE_URL}/conditions/${comparison.conditionA.slug}`,
      },
      {
        '@type': 'WebPage',
        name: comparison.conditionB.name,
        url: `${SITE_URL}/conditions/${comparison.conditionB.slug}`,
      },
    ],
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { dateModified: CONTENT_LAST_MODIFIED_ISO.conditions }
      : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comparison.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center space-x-2 text-sm text-slate-600 mb-4 flex-wrap"
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
                <Link
                  href="/conditions/compare"
                  className="hover:text-[#B08D57] transition-colors duration-200"
                >
                  Compare
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">
                  {comparison.conditionA.shortName} vs. {comparison.conditionB.shortName}
                </span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                {comparison.h1}
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                {comparison.atAGlance}
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Written by Kareem Hassanein, Registered Physiotherapist. Burlington,
                Ontario. This is a guide, not a diagnosis. A brief in-person exam sorts
                these out reliably.
              </p>

              {/* Primary actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Assessment
                </Link>
                <Link
                  href="tel:+19056346000"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Clinic
                </Link>
                <Link
                  href="/conditions/compare"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  Other Comparisons
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Condition quick-links */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href={`/conditions/${comparison.conditionA.slug}`}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-[#B08D57] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08D57] mb-2">
                    <span>Condition A</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                    {comparison.conditionA.name}
                  </h2>
                  {conditionA?.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {conditionA.description}
                    </p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57]">
                    Read the full {comparison.conditionA.shortName.toLowerCase()} page
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

                <Link
                  href={`/conditions/${comparison.conditionB.slug}`}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-[#B08D57] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B08D57] mb-2">
                    <span>Condition B</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                    {comparison.conditionB.name}
                  </h2>
                  {conditionB?.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {conditionB.description}
                    </p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57]">
                    Read the full {comparison.conditionB.shortName.toLowerCase()} page
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-side comparison table */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ArrowsRightLeftIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Side by side
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                The patterns that separate {comparison.conditionA.shortName.toLowerCase()}{' '}
                from {comparison.conditionB.shortName.toLowerCase()} in clinic. Read
                across each row and compare.
              </p>

              {/* Desktop table */}
              <div className="hidden md:block overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-300 w-1/4">
                        Aspect
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white">
                        {comparison.conditionA.shortName}
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white">
                        {comparison.conditionB.shortName}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.distinguishing.map((row, index) => (
                      <tr
                        key={row.aspect}
                        className={
                          index % 2 === 0
                            ? 'bg-white border-t border-slate-100'
                            : 'bg-slate-50/50 border-t border-slate-100'
                        }
                      >
                        <td className="px-6 py-5 align-top text-sm font-semibold text-slate-900">
                          {row.aspect}
                        </td>
                        <td className="px-6 py-5 align-top text-sm text-slate-700 leading-relaxed">
                          {row.aForA}
                        </td>
                        <td className="px-6 py-5 align-top text-sm text-slate-700 leading-relaxed">
                          {row.aForB}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked */}
              <div className="md:hidden space-y-4">
                {comparison.distinguishing.map((row) => (
                  <div
                    key={row.aspect}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3">
                      <p className="text-sm font-semibold text-white">{row.aspect}</p>
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57] mb-1">
                          {comparison.conditionA.shortName}
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {row.aForA}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57] mb-1">
                          {comparison.conditionB.shortName}
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {row.aForB}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specific clinical tests */}
        {comparison.specificTests && comparison.specificTests.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-slate-900 rounded-xl">
                    <ClipboardDocumentCheckIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                    What I check in person to separate them
                  </h2>
                </div>
                <p className="text-slate-600 max-w-3xl mb-8">
                  These are the clinical tests I actually run in the first visit. You
                  cannot do them all on yourself reliably, but understanding what they
                  look for helps explain why an in-person exam sorts these so quickly.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {comparison.specificTests.map((test, index) => (
                    <div
                      key={test.test}
                      className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#B08D57]/10 flex items-center justify-center text-[#B08D57] text-xs font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                            {test.test}
                          </h3>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {test.whatItShows}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Routing: which pattern fits */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ScaleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Which pattern fits you better?
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Plain-language routing. This is not a diagnosis, and real patients often
                sit between the two, but the language below is a reasonable starting
                point.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#B08D57] text-xs font-semibold uppercase tracking-wider">
                      More likely
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {comparison.conditionA.shortName}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {comparison.whenItIsA}
                  </p>
                  <Link
                    href={`/conditions/${comparison.conditionA.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57] hover:text-[#997A4B]"
                  >
                    Read the {comparison.conditionA.shortName.toLowerCase()} page
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#B08D57] text-xs font-semibold uppercase tracking-wider">
                      More likely
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {comparison.conditionB.shortName}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {comparison.whenItIsB}
                  </p>
                  <Link
                    href={`/conditions/${comparison.conditionB.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57] hover:text-[#997A4B]"
                  >
                    Read the {comparison.conditionB.shortName.toLowerCase()} page
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* When uncertain */}
              <div className="mt-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-[#B08D57] rounded-lg">
                    <InformationCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      If you still cannot tell
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {comparison.whenUncertain}
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlap note */}
              <div className="mt-4 bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-slate-900 rounded-lg">
                    <ArrowsRightLeftIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      When both are going on
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {comparison.overlap}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Questions patients ask about telling these apart
                </h2>
              </div>

              <div className="space-y-3">
                {comparison.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                      <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evidence */}
        {comparison.evidenceNotes && comparison.evidenceNotes.length > 0 && (
          <section className="py-12 bg-slate-50/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 rounded-xl">
                    <BeakerIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                    Evidence this page draws on
                  </h2>
                </div>
                <p className="text-slate-600 max-w-3xl mb-8">
                  Sources I lean on when separating these two conditions in clinic.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {comparison.evidenceNotes.map((note, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-slate-200"
                    >
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        {note.claim}
                      </p>
                      <p className="text-xs text-slate-500 italic">{note.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related treatments */}
        {treatments.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 rounded-xl">
                    <ShieldCheckIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                    Treatments that commonly sit inside either plan
                  </h2>
                </div>
                <p className="text-slate-600 max-w-3xl mb-8">
                  The specific mix depends on the assessment and your goals. These are
                  the pieces I draw from most often for both conditions.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {treatments.map((treatment) => (
                    <Link
                      key={treatment.id}
                      href={`/treatments/${treatment.id}`}
                      className="group bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 border border-amber-100 hover:border-[#B08D57] hover:shadow-lg transition-all flex flex-col"
                    >
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                        {treatment.shortDescription}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57]">
                        Explore {treatment.name}
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Access and hours */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#B08D57] rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Book an assessment
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    If this page has helped you narrow things down, or if it has left
                    you wanting a proper exam, I see patients at Endorphins Health &
                    Wellness Centre in Burlington. Direct insurance billing is
                    available, and a physician referral is not required.
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">
                          4631 Palladium Way, Unit 6
                        </p>
                        <p className="text-slate-600">Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <a
                          href="tel:+19056346000"
                          className="font-medium text-slate-900 hover:text-[#B08D57] transition-colors"
                        >
                          (905) 634-6000
                        </a>
                        <p className="text-slate-500 text-xs">
                          Direct billing. No referral needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#8A6F0A] font-semibold uppercase tracking-wider">
                    <ClockIcon className="h-4 w-4" />
                    Burlington hours
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Monday</span>
                      <span className="text-slate-900 font-medium">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Tuesday</span>
                      <span className="text-slate-900 font-medium">3:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Wednesday</span>
                      <span className="text-slate-900 font-medium">2:00 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Thursday</span>
                      <span className="text-slate-900 font-medium">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-600">Friday</span>
                      <span className="text-slate-900 font-medium">2:00 PM - 7:30 PM</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book an Initial Assessment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
