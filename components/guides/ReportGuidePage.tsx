import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import {
  contentDateFor,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import { reportGuideUrl, type GuideBlock, type ReportGuide } from '@/lib/report-guides';
import {
  AccessClosing,
  Consent,
  Crumbs,
  cs,
  Evidence,
  Faqs,
  FlagsLink,
  g,
  GuideMain,
  Head,
  PlateFigure,
  RelatedConditions,
  RelatedTreatments,
  WarningPanel,
} from './GuideKit';

// The scan-report guides, set like the condition pages: the opening with the
// plate beside it on laptops, sections under a short accent bar, the
// report-wording table as hairline rows, the warnings banded by urgency,
// questions as hairline disclosures, evidence and related pages as tiles,
// and access and hours on the dark closing band.

/** Renders [text](/path) as internal links; everything else is plain text. */
function withLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]}>
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Lead({ lead }: { lead?: string }) {
  if (!lead) return null;
  return (
    <>
      <strong>{lead}</strong>{' '}
    </>
  );
}

function Block({ block }: { block: GuideBlock }) {
  if (block.type === 'p') {
    return (
      <p>
        <Lead lead={block.lead} />
        {withLinks(block.text)}
      </p>
    );
  }

  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item, i) => (
          <li key={i}>
            <Lead lead={item.lead} />
            {withLinks(item.text)}
          </li>
        ))}
      </ul>
    );
  }

  // Report wording: a hairline table on laptops, stacked rows on phones.
  return (
    <div className={g.wording}>
      <table className={g.wordTable}>
        <thead>
          <tr>
            <th scope="col">{block.columns[0]}</th>
            <th scope="col">{block.columns[1]}</th>
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.term}>
              <td>{row.term}</td>
              <td>{withLinks(row.meaning)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dl className={g.wordList}>
        {block.rows.map((row) => (
          <div key={row.term}>
            <dt>{row.term}</dt>
            <dd>{withLinks(row.meaning)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ReportGuidePage({ guide }: { guide: ReportGuide }) {
  const url = reportGuideUrl(guide.slug);

  const relatedConditions = guide.relatedConditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter((c): c is NonNullable<ReturnType<typeof getConditionBySlug>> => Boolean(c));
  const relatedTreatments = guide.relatedTreatmentIds
    .map((id) => getTreatmentById(id))
    .filter((t): t is NonNullable<ReturnType<typeof getTreatmentById>> => Boolean(t));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kinetikarephysio.com' },
      { '@type': 'ListItem', position: 2, name: 'Conditions', item: 'https://www.kinetikarephysio.com/conditions' },
      { '@type': 'ListItem', position: 3, name: 'Pain Guides', item: 'https://www.kinetikarephysio.com/conditions/pain-guides' },
      { '@type': 'ListItem', position: 4, name: guide.breadcrumbLabel, item: url },
    ],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#webpage`,
    url,
    name: guide.title,
    description: guide.description,
    author: { '@id': SEO_PERSON_ID },
    publisher: { '@id': SEO_ORGANIZATION_ID },
    about: { '@type': 'MedicalCondition', name: guide.about.name, alternateName: guide.about.alternateName },
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: { '@type': 'AdministrativeArea', name: 'Burlington, Ontario' },
    },
    inLanguage: 'en-CA',
    ...(contentDateFor(`/conditions/pain-guides/${guide.slug}`) ? { dateModified: contentDateFor(`/conditions/pain-guides/${guide.slug}`) } : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />

      <GuideMain>
        <div className={g.frame}>
          <div className={g.layout} data-rail={guide.plate ? 'true' : 'false'}>
            <header className={g.opening}>
              <Crumbs
                items={[
                  { href: '/', label: 'Home' },
                  { href: '/conditions', label: 'Conditions' },
                  { href: guide.hub.href, label: guide.hub.label },
                  { label: guide.breadcrumbLabel },
                ]}
              />

              <h1 className={cs.h1}>{guide.h1}</h1>

              <p className={cs.summary}>{guide.lede}</p>

              <p className={g.local}>
                Assessing and treating {guide.region} pain at the Burlington clinic. Convenient for Waterdown, Oakville,
                Hamilton, Flamborough, and Carlisle residents.
              </p>

              <FlagsLink />

              <div className={`${cs.actions} ${g.acts}`}>
                <Link
                  href={JANE_ASSESSMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-booking-source="guide_intro"
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
              <Link href={guide.hub.href} className={g.more}>
                Broader {guide.hub.label} Guide
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </header>

            {guide.plate && <PlateFigure src={guide.plate.src} caption={guide.plate.caption} priority />}

            {guide.sections.map((section, index) => (
              <Fragment key={section.id}>
                <section id={section.id} className={`${g.sec} ${g.clear}`}>
                  <Head title={section.heading} />
                  {section.plate && (
                    <PlateFigure
                      src={section.plate.src}
                      caption={section.plate.caption}
                      className={g.figure}
                      sizes="(min-width: 700px) 260px, 320px"
                    />
                  )}
                  <div className={`${cs.prose} ${g.prose}`}>
                    {section.intro && <p>{withLinks(section.intro)}</p>}
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                  {section.consentNote && <Consent />}
                </section>
                {/* The warnings sit open after the first section. */}
                {index === 0 && <WarningPanel flags={guide.redFlags} />}
              </Fragment>
            ))}

            <section className={g.sec}>
              <Head title={guide.faqHeading} />
              <Faqs faqs={guide.faqs} />
            </section>

            <section className={g.sec}>
              <Head
                title="Evidence this page is built on"
                stand="The main sources behind this guide. Other studies are named in the text where they are used."
              />
              <Evidence items={guide.research} />
            </section>

            {relatedConditions.length > 0 && (
              <section className={g.sec}>
                <Head title={guide.relatedHeading} stand={guide.relatedIntro} />
                <RelatedConditions conditions={relatedConditions} />
              </section>
            )}

            {relatedTreatments.length > 0 && (
              <section className={g.sec}>
                <Head title={guide.treatmentsHeading} stand={guide.treatmentsIntro} />
                <RelatedTreatments treatments={relatedTreatments} />
              </section>
            )}
          </div>
        </div>

        <AccessClosing
          title="Access, hours, and how to book"
          text={
            <>
              I see patients for {guide.region} pain at Endorphins Health & Wellness Centre in Burlington. The clinic
              serves people coming in from Burlington, Waterdown, Oakville, Hamilton, Flamborough, and Carlisle,
              with free parking on site and a ground-floor entrance.
            </>
          }
          phoneNote="Direct insurance billing available. No physician referral needed."
          book={
            <Link
              href={JANE_ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-booking-source="guide_footer"
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
