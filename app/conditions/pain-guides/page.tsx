import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ChevronRightIcon,
  ArrowRightIcon,
  MapPinIcon,
  CalendarIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import {
  contentDateFor,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { PAIN_GUIDE_GROUPS } from '@/lib/pain-guides';

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/pain-guides';
const PAGE_TITLE = 'Symptom & Pain Guides | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Plain-language pain and symptom guides from a Burlington Registered Physiotherapist. Explore possible explanations and find relevant condition pages.';

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
    ...(contentDateFor('/conditions/pain-guides')
      ? { modifiedTime: contentDateFor('/conditions/pain-guides') }
      : {}),
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pain guides - Kareem Hassanein Physiotherapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function PainGuidesIndexPage() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pain Guides',
        item: PAGE_URL,
      },
    ],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: {
      '@id': SEO_PERSON_ID,
    },
    publisher: {
      '@id': SEO_ORGANIZATION_ID,
    },
    inLanguage: 'en-CA',
    ...(contentDateFor('/conditions/pain-guides')
      ? { dateModified: contentDateFor('/conditions/pain-guides') }
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageSchema) }}
      />

      <main className="min-h-screen">
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 mb-4">
                <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200">
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors duration-200">
                  Conditions
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Pain Guides</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Symptom and Pain Guides
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Plain-language guides that start from what you notice: where it hurts, or a
                phrase on your X-ray, ultrasound or MRI report. Each one walks through common
                causes, what the pattern or wording usually means, and links on to the
                deeper condition pages for the next step.
              </p>

              <p className="text-xs text-slate-600 mt-3">
                Based in Burlington. Convenient for Waterdown, Oakville, Hamilton,
                Flamborough, and Carlisle residents.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={JANE_BOOKING_URL} data-booking-source="guides_index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gold inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Initial Assessment
                </Link>
                <Link
                  href="tel:+19056346000"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Clinic
                </Link>
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  View All Conditions
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
              {PAIN_GUIDE_GROUPS.map((group) => (
                <div key={group.heading}>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">
                    {group.heading}
                  </h2>
                  <p className="text-slate-600 max-w-3xl mb-6">{group.intro}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {group.guides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#B08D57] hover:shadow-md transition-all flex flex-col"
                      >
                        <span className="text-xs uppercase tracking-wider text-[#8A6F0A] font-semibold mb-2">
                          {guide.region}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                          {guide.blurb}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#8A6F0A]">
                          Read the guide
                          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-slate-700 leading-relaxed">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How these guides are meant to be used
                </h2>
              </div>
              <p>
                These are educational, not diagnostic. They describe the patterns I see most
                often in clinic for a given symptom, with links to the underlying condition
                pages so you can take the next step. If your picture overlaps a few of them,
                that is normal and worth a proper assessment.
              </p>
              <p className="mt-4">
                If your symptoms include any of the red flags listed on each guide, such as a
                hot and systemically unwell joint, sudden inability to bear weight after
                trauma, a locked knee after a twist, or calf pain and swelling after a
                period of immobility, please seek medical care first rather than starting
                with physiotherapy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
