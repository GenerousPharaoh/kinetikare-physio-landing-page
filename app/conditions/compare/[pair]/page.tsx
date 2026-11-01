import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  contentDateFor,
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
import { redFlagUrgency } from '@/lib/red-flags';
import { inlineName } from '@/lib/text';
import SourceLinks from '@/components/conditions/SourceLinks';
import {
  AccessClosing,
  Crumbs,
  cs,
  Faqs,
  g,
  GuideMain,
  Head,
  RelatedTreatments,
} from '@/components/guides/GuideKit';

const SITE_URL = 'https://www.kinetikarephysio.com';

// Keep the <title> within about 60 characters: add the name only when it fits.
const withBrand = (title: string) => {
  const branded = `${title} | Kareem Hassanein`;
  return branded.length <= 60 ? branded : title;
};

export async function generateStaticParams() {
  return CONDITION_COMPARISONS.map((comparison) => ({
    pair: comparison.pair,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const comparison = getComparisonByPair(pair);

  if (!comparison) {
    return {
      title: 'Condition Comparison Not Found | Kareem Hassanein',
    };
  }

  const pageUrl = `${SITE_URL}/conditions/compare/${comparison.pair}`;
  const title = withBrand(comparison.title);

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
      siteName: 'Kinetikare',
      authors: [SEO_AUTHOR.name],
      ...(contentDateFor(pageUrl)
        ? { modifiedTime: contentDateFor(pageUrl) }
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

export default async function ConditionComparisonPage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const comparison = getComparisonByPair(pair);

  if (!comparison) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/conditions/compare/${comparison.pair}`;
  const pageTitle = withBrand(comparison.title);

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
    ...(contentDateFor(pageUrl)
      ? { dateModified: contentDateFor(pageUrl) }
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


  // The most urgent instruction among the warnings colours the panel's edge.
  const flagTop = (['emergency', 'today', 'doctor'] as const).find((u) =>
    (comparison.redFlags ?? []).some((flag) => redFlagUrgency(flag) === u)
  );

  const sides = [
    { label: 'Condition A', ref: comparison.conditionA, data: conditionA, fits: comparison.whenItIsA },
    { label: 'Condition B', ref: comparison.conditionB, data: conditionB, fits: comparison.whenItIsB },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <GuideMain>
        <div className={g.frame}>
          <header className={`${g.opening} ${g.openGrid}`}>
            <div>
              <Crumbs
                items={[
                  { href: '/', label: 'Home' },
                  { href: '/conditions', label: 'Conditions' },
                  { href: '/conditions/compare', label: 'Compare' },
                  {
                    label: (
                      <>
                        {comparison.conditionA.shortName} vs. {comparison.conditionB.shortName}
                      </>
                    ),
                  },
                ]}
              />

              <h1 className={cs.h1}>{comparison.h1}</h1>

              <p className={cs.summary}>{comparison.atAGlance}</p>

              <p className={g.local}>
                Written by Kareem Hassanein, Registered Physiotherapist. Burlington,
                Ontario. This is a guide, not a diagnosis. A brief in-person exam sorts
                these out reliably.
              </p>

              <div className={`${cs.actions} ${g.acts}`}>
                <Link
                  href={JANE_ASSESSMENT_URL} data-booking-source="compare_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cs.btnInk}
                >
                  Book Assessment
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
                <Link href="tel:+19056346000" className={cs.btnLine}>
                  <PhoneIcon aria-hidden="true" />
                  Call Clinic
                </Link>
              </div>
              <Link href="/conditions/compare" className={g.more}>
                Other Comparisons
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </div>

            {/* The two plates side by side, in the order the page names them. */}
            <div className={g.diptych} aria-hidden="true">
              {sides.map((side) => (
                <span key={side.ref.slug} className={g.railImg}>
                  <Image
                    src={`/images/conditions/${side.ref.slug}.webp`}
                    width={600}
                    height={600}
                    alt=""
                    sizes="(min-width: 1024px) 210px, 50vw"
                    priority
                    quality={82}
                  />
                </span>
              ))}
            </div>
          </header>

          {/* The two conditions */}
          <section className={g.sec}>
            <div className={g.pairGrid}>
              {sides.map((side) => (
                <Link key={side.ref.slug} href={`/conditions/${side.ref.slug}`} className={g.tile}>
                  <span className={`${g.label} ${g.sideLabel} ${cs.mono}`}>{side.label}</span>
                  <h2 className={g.pairName}>{side.ref.name}</h2>
                  {side.data?.description && <span className={g.tileText}>{side.data.description}</span>}
                  <span className={g.tileMore}>
                    Read the full {inlineName(side.ref.shortName)} page
                    <ArrowRightIcon aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Side by side */}
          <section className={g.sec}>
            <Head
              title="Side by side"
              stand={
                <>
                  The patterns that separate {inlineName(comparison.conditionA.shortName)}{' '}
                  from {inlineName(comparison.conditionB.shortName)} in clinic. Read
                  across each row and compare.
                </>
              }
            />

            {/* Laptops: one row per aspect, a column per condition. */}
            <table className={g.vsTable}>
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">{comparison.conditionA.shortName}</th>
                  <th scope="col">{comparison.conditionB.shortName}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.distinguishing.map((row) => (
                  <tr key={row.aspect}>
                    <td>{row.aspect}</td>
                    <td>{row.aForA}</td>
                    <td>{row.aForB}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Phones: each aspect with both conditions under it. */}
            <dl className={g.vsList}>
              {comparison.distinguishing.map((row) => (
                <div key={row.aspect}>
                  <dt>{row.aspect}</dt>
                  <dd>
                    <span className={cs.mono}>{comparison.conditionA.shortName}</span>
                    <p>{row.aForA}</p>
                  </dd>
                  <dd>
                    <span className={cs.mono}>{comparison.conditionB.shortName}</span>
                    <p>{row.aForB}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Specific clinical tests */}
          {comparison.specificTests && comparison.specificTests.length > 0 && (
            <section className={g.sec}>
              <Head
                title="What I check in person to separate them"
                stand={
                  <>
                    These are the clinical tests I actually run in the first visit. You
                    cannot do them all on yourself reliably, but understanding what they
                    look for helps explain why an in-person exam sorts these so quickly.
                  </>
                }
              />
              <ul className={g.rows} data-cols="2">
                {comparison.specificTests.map((test) => (
                  <li key={test.test}>
                    <h3 className={g.rowName}>{test.test}</h3>
                    <p className={g.rowText}>{test.whatItShows}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Routing: which pattern fits */}
          <section className={g.sec}>
            <Head
              title="Which pattern fits you better?"
              stand={
                <>
                  Plain-language routing. This is not a diagnosis, and real patients often
                  sit between the two, but the language below is a reasonable starting
                  point.
                </>
              }
            />

            <div className={g.fitGrid}>
              {sides.map((side) => (
                <div key={side.ref.slug} className={g.tile}>
                  <div className={g.fitHead}>
                    <span className={`${g.likely} ${cs.mono}`}>More likely</span>
                    <h3 className={g.fitName}>{side.ref.shortName}</h3>
                  </div>
                  <p className={g.noteText}>{side.fits}</p>
                  <Link href={`/conditions/${side.ref.slug}`} className={g.more}>
                    Read the {inlineName(side.ref.shortName)} page
                    <ArrowRightIcon aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>

            <div className={g.noteGrid}>
              {/* When uncertain */}
              <div className={g.note}>
                <h3 className={g.noteName}>If you still cannot tell</h3>
                <p className={g.noteText}>{comparison.whenUncertain}</p>
              </div>

              {/* Overlap note */}
              <div className={g.note} data-line="true">
                <h3 className={g.noteName}>When both are going on</h3>
                <p className={g.noteText}>{comparison.overlap}</p>
              </div>
            </div>

            {/* Red flags */}
            {comparison.redFlags && comparison.redFlags.length > 0 && (
              <div className={`${g.warn} ${g.warnNote}`} data-top={flagTop}>
                <h3 className={g.noteName}>When to see a doctor first</h3>
                <ul className={g.flagRows}>
                  {comparison.redFlags.map((flag) => (
                    <li key={flag.sign}>
                      <span className={g.sign}>{flag.sign}.</span>{' '}
                      {flag.action}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* FAQ */}
          <section className={g.sec}>
            <Head title="Questions patients ask about telling these apart" />
            <Faqs faqs={comparison.faqs} />
          </section>

          {/* Evidence */}
          {comparison.evidenceNotes && comparison.evidenceNotes.length > 0 && (
            <section className={g.sec}>
              <Head
                title="Evidence this page draws on"
                stand="Sources I lean on when separating these two conditions in clinic."
              />
              <div className={g.tileGrid}>
                {comparison.evidenceNotes.map((note, index) => (
                  <article key={index} className={g.tile}>
                    <p className={g.claim}>{note.claim}</p>
                    <p className={g.tileSource}>{note.source}</p>
                    <SourceLinks refs={note.refs} title={note.source} className={g.refs} />
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Related treatments */}
          {treatments.length > 0 && (
            <section className={g.sec}>
              <Head
                title="Treatments that commonly sit inside either plan"
                stand={
                  <>
                    The specific mix depends on the assessment and your goals. These are
                    the pieces I draw from most often for both conditions.
                  </>
                }
              />
              <RelatedTreatments treatments={treatments} />
            </section>
          )}
        </div>

        <AccessClosing
          title="Book an assessment"
          text={
            <>
              If this page has helped you narrow things down, or if it has left
              you wanting a proper exam, I see patients at Endorphins Health &
              Wellness Centre in Burlington. Direct insurance billing is
              available, and a physician referral is not required.
            </>
          }
          phoneNote="Direct billing. No referral needed."
          book={
            <Link
              href={JANE_ASSESSMENT_URL} data-booking-source="compare_page"
              target="_blank"
              rel="noopener noreferrer"
              className={cs.btnLight}
            >
              Book an Initial Assessment
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          }
        />
      </GuideMain>
    </>
  );
}
