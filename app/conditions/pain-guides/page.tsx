import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  contentDateFor,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { PAIN_GUIDE_GROUPS } from '@/lib/pain-guides';
import { REPORT_GUIDES } from '@/lib/report-guides';
import { Crumbs, cs, g, GuideMain, Head } from '@/components/guides/GuideKit';

// The plate shown on each guide's tile: the scan-report guides' own plates,
// and for the two hand-built knee guides the plate they show on their page.
const GUIDE_PLATES: Record<string, string> = {
  '/conditions/pain-guides/pain-below-kneecap': '/images/conditions/patellar-tendinopathy.webp',
  '/conditions/pain-guides/fluid-on-the-knee': '/images/conditions/knee-osteoarthritis.webp',
  ...Object.fromEntries(
    REPORT_GUIDES.filter((guide) => guide.plate).map((guide) => [`/conditions/pain-guides/${guide.slug}`, guide.plate!.src]),
  ),
};

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

      <GuideMain>
        <div className={`${g.frame} ${g.narrow}`}>
          <header className={g.opening}>
            <Crumbs
              items={[
                { href: '/', label: 'Home' },
                { href: '/conditions', label: 'Conditions' },
                { label: 'Pain Guides' },
              ]}
            />

            <h1 className={cs.h1}>
              Symptom and Pain Guides
            </h1>

            <p className={cs.summary}>
              Plain-language guides that start from what you notice: where it hurts, or a
              phrase on your X-ray, ultrasound or MRI report. Each one walks through common
              causes, what the pattern or wording usually means, and links on to the
              deeper condition pages for the next step.
            </p>

            <p className={g.local}>
              Based in Burlington. Convenient for Waterdown, Oakville, Hamilton,
              Flamborough, and Carlisle residents.
            </p>

            <div className={`${cs.actions} ${g.acts}`}>
              <Link
                href={JANE_ASSESSMENT_URL} data-booking-source="guides_index"
                target="_blank"
                rel="noopener noreferrer"
                className={cs.btnInk}
              >
                Book Initial Assessment
                <ArrowRightIcon aria-hidden="true" />
              </Link>
              <Link href="tel:+19056346000" className={cs.btnLine}>
                <PhoneIcon aria-hidden="true" />
                Call Clinic
              </Link>
            </div>
            <Link href="/conditions" className={g.more}>
              View All Conditions
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </header>

          {PAIN_GUIDE_GROUPS.map((group) => (
            <section key={group.heading} className={g.sec}>
              <Head title={group.heading} stand={group.intro} />

              <div className={g.tileGrid}>
                {group.guides.map((guide) => (
                  <Link key={guide.href} href={guide.href} className={g.tile}>
                    <div className={g.tileTop}>
                      {GUIDE_PLATES[guide.href] && (
                        <span className={`${g.thumb} ${g.thumbLarge}`} aria-hidden="true">
                          <Image src={GUIDE_PLATES[guide.href]} alt="" fill sizes="64px" />
                        </span>
                      )}
                      <span className={`${g.label} ${g.sideLabel} ${cs.mono}`}>
                        {guide.region}
                      </span>
                    </div>
                    <h3 className={g.tileName}>
                      {guide.title}
                    </h3>
                    <span className={g.tileText}>
                      {guide.blurb}
                    </span>
                    <span className={g.tileMore}>
                      Read the guide
                      <ArrowRightIcon aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className={g.sec}>
            <Head title="How these guides are meant to be used" />
            <div className={`${cs.prose} ${g.prose}`}>
              <p>
                These are educational, not diagnostic. They describe the patterns I see most
                often in clinic for a given symptom, with links to the underlying condition
                pages so you can take the next step. If your picture overlaps a few of them,
                that is normal and worth a proper assessment.
              </p>
              <p>
                If your symptoms include any of the red flags listed on each guide, such as a
                hot and systemically unwell joint, sudden inability to bear weight after
                trauma, a locked knee after a twist, or calf pain and swelling after a
                period of immobility, please seek medical care first rather than starting
                with physiotherapy.
              </p>
            </div>
          </section>
        </div>
      </GuideMain>
    </>
  );
}
