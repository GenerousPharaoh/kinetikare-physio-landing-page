import Image from 'next/image';
import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BeakerIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import {
  contentDateFor,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import { reportGuideUrl, type GuideBlock, type GuideIcon, type ReportGuide } from '@/lib/report-guides';
import ConsentNote from '@/components/conditions/ConsentNote';
import HoursList from '@/components/HoursList';
import { inlineName } from '@/lib/text';
import RedFlagsBox, { RedFlagsLink } from '@/components/conditions/RedFlagsBox';
import SourceLinks from '@/components/conditions/SourceLinks';

// Same visual language as the hand-built pain guides
// (app/conditions/pain-guides/fluid-on-the-knee): hero, badge-headed sections
// on alternating grounds, FAQ accordion, evidence cards, related grids, hours.

const ICONS: Record<GuideIcon, typeof InformationCircleIcon> = {
  clipboard: ClipboardDocumentListIcon,
  info: InformationCircleIcon,
  scale: ScaleIcon,
  shield: ShieldCheckIcon,
  warning: ExclamationTriangleIcon,
  academic: AcademicCapIcon,
};

/** Renders [text](/path) as internal links; everything else is plain text. */
function withLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]} className="text-[#8A6F0A] underline underline-offset-2 hover:text-[#B08D57]">
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
      <strong className="text-slate-900">{lead}</strong>{' '}
    </>
  );
}

function Block({ block }: { block: GuideBlock }) {
  if (block.type === 'p') {
    return (
      <p className="text-slate-700 leading-relaxed">
        <Lead lead={block.lead} />
        {withLinks(block.text)}
      </p>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-5 space-y-2.5 mb-5 text-slate-700 leading-relaxed">
        {block.items.map((item, i) => (
          <li key={i}>
            <Lead lead={item.lead} />
            {withLinks(item.text)}
          </li>
        ))}
      </ul>
    );
  }

  // Wording table: navy header on desktop, stacked cards on phones (the
  // compare pages' "Side by side" pattern).
  return (
    <div className="my-6 clear-both">
      <div className="hidden md:block overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-300 w-1/3">
                {block.columns[0]}
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white">
                {block.columns[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, index) => (
              <tr
                key={row.term}
                className={
                  index % 2 === 0
                    ? 'bg-white border-t border-slate-100'
                    : 'bg-slate-50/50 border-t border-slate-100'
                }
              >
                <td className="px-6 py-4 align-top text-sm font-semibold text-slate-900">{row.term}</td>
                <td className="px-6 py-4 align-top text-base text-slate-700 leading-relaxed">
                  {withLinks(row.meaning)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {block.rows.map((row) => (
          <div key={row.term} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-2.5">
              <p className="text-sm font-semibold text-white m-0">{row.term}</p>
            </div>
            <p className="px-4 py-3 text-base text-slate-700 leading-relaxed m-0">{withLinks(row.meaning)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Plate({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div aria-hidden="true" className="relative isolate w-[200px] sm:w-[230px] xl:w-[264px] aspect-square select-none">
        <div className="absolute inset-0 rounded-full overflow-hidden bg-[#F2EADC] shadow-[0_16px_44px_-20px_rgba(15,23,42,0.28)]">
          <Image
            src={src}
            width={600}
            height={600}
            alt=""
            sizes="(min-width: 1280px) 264px, (min-width: 640px) 230px, 200px"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full ring-1 ring-[#B08D57]/35 pointer-events-none" />
        <div className="absolute inset-[7px] rounded-full ring-1 ring-[#B08D57]/15 pointer-events-none" />
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_2px_16px_rgba(15,23,42,0.08)]" />
      </div>
      <figcaption className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function SectionHeading({ icon, children }: { icon: GuideIcon; children: ReactNode }) {
  const Icon = ICONS[icon];
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 bg-slate-900 rounded-xl flex-shrink-0">
        <Icon className="h-5 w-5 text-[#B08D57]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">{children}</h2>
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

      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 mb-4">
                <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200">Home</Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors duration-200">Conditions</Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href={guide.hub.href} className="hover:text-[#B08D57] transition-colors duration-200">{guide.hub.label}</Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">{guide.breadcrumbLabel}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">{guide.h1}</h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">{guide.lede}</p>

              <p className="text-xs text-slate-600 mt-3">
                Assessing and treating {guide.region} pain at the Burlington clinic. Convenient for Waterdown, Oakville,
                Hamilton, Flamborough, and Carlisle residents.
              </p>

              <RedFlagsLink className="mt-3" />

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={JANE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-booking-source="guide_intro"
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
                  href={guide.hub.href}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  Broader {guide.hub.label} Guide
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections, alternating white and slate */}
        {guide.sections.map((section, index) => (
          <Fragment key={section.id}>
          <section id={section.id} className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto flow-root">
                {section.showPlate && guide.plate && (
                  <div className="mb-8 flex justify-center lg:mb-6 lg:ml-8 lg:mt-1 lg:block lg:float-right">
                    <Plate src={guide.plate.src} caption={guide.plate.caption} />
                  </div>
                )}
                <SectionHeading icon={section.icon}>{section.heading}</SectionHeading>
                {section.intro && <p className="text-slate-700 leading-relaxed">{withLinks(section.intro)}</p>}
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
                {section.consentNote && <ConsentNote />}
              </div>
            </div>
          </section>
          {/* The warnings sit open after the first section (they used to be a closed 12px panel in the hero). */}
          {index === 0 && <RedFlagsBox flags={guide.redFlags} />}
          </Fragment>
        ))}

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">{guide.faqHeading}</h2>
              </div>
              <div className="space-y-3">
                {guide.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-base text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evidence */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <BeakerIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Evidence this page is built on</h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                The main sources behind this guide. Other studies are named in the text where they are used.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {guide.research.map((item) => (
                  <div key={item.title} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#80650A] text-xs font-semibold uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-500">{item.source}</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">{item.title}</h3>
                    <p className="text-base text-slate-700 leading-relaxed">{item.summary}</p>
                    <SourceLinks refs={item.refs} title={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related conditions */}
        {relatedConditions.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 rounded-xl">
                    <HeartIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">{guide.relatedHeading}</h2>
                </div>
                <p className="text-slate-600 max-w-3xl mb-8">{guide.relatedIntro}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedConditions.map((condition) => (
                    <Link
                      key={condition.slug}
                      href={`/conditions/${condition.slug}`}
                      className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-[#B08D57] hover:shadow-md transition-all flex flex-col"
                    >
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-1">
                        {condition.name}
                      </h3>
                      {condition.description && (
                        <p className="text-xs text-slate-600 leading-relaxed flex-grow">{condition.description}</p>
                      )}
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8A6F0A]">
                        Read the {inlineName(condition.name)} guide
                        <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related treatments */}
        {relatedTreatments.length > 0 && (
          <section className="py-12 bg-slate-50/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 rounded-xl">
                    <ShieldCheckIcon className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">{guide.treatmentsHeading}</h2>
                </div>
                <p className="text-slate-600 max-w-3xl mb-8">{guide.treatmentsIntro}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedTreatments.map((treatment) => (
                    <Link
                      key={treatment.id}
                      href={`/treatments/${treatment.id}`}
                      className="group bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 border border-amber-100 hover:border-[#B08D57] hover:shadow-lg transition-all flex flex-col"
                    >
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed flex-grow">{treatment.shortDescription}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#8A6F0A]">
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
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#B08D57] rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Access, hours, and how to book</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    I see patients for {guide.region} pain at Endorphins Health &amp; Wellness Centre in Burlington. The clinic
                    serves people coming in from Burlington, Waterdown, Oakville, Hamilton, Flamborough, and Carlisle,
                    with free parking on site and a ground-floor entrance.
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">4631 Palladium Way, Unit 6</p>
                        <p className="text-slate-600">Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="tel:+19056346000" className="font-medium text-slate-900 hover:text-[#B08D57] transition-colors">
                          (905) 634-6000
                        </a>
                        <p className="text-slate-500 text-xs">Direct insurance billing available. No physician referral needed.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#8A6F0A] font-semibold uppercase tracking-wider">
                    <ClockIcon className="h-4 w-4" />
                    Burlington hours
                  </div>
                  <HoursList />
                  <div className="mt-6">
                    <Link
                      href={JANE_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-booking-source="guide_footer"
                      className="button-gold inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
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
      </main>
    </>
  );
}
