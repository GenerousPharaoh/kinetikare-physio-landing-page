import Image from 'next/image';
import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import cs from '@/components/conditions/case/Case.module.css';
import { geist } from '@/components/conditions/case/fonts';
import Reveal from '@/components/home/Reveal';
import SourceLinks from '@/components/conditions/SourceLinks';
import { RED_FLAGS_ID } from '@/components/conditions/RedFlagsBox';
import { groupRedFlags, type RedFlag } from '@/lib/red-flags';
import { HOURS_BY_CLINIC, dayKey } from '@/lib/hours';
import { CONDITION_PLATES } from '@/lib/condition-plates';
import { inlineName } from '@/lib/text';
import type { SourceRef } from '@/lib/source-refs';
import g from './Guide.module.css';

/*
 * The building blocks of the pain guides, the scan-report guides and the
 * comparison pages (server components). Each page keeps its own words and
 * data; these only set them in the condition pages' language.
 */

export { cs, g };

export function GuideMain({ children }: { children: ReactNode }) {
  return <main className={`${cs.case} ${g.guide} ${geist.variable}`}>{children}</main>;
}

export interface Crumb {
  href?: string;
  label: ReactNode;
}

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={`${cs.crumbs} ${cs.mono}`}>
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <ChevronRightIcon aria-hidden="true" />}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

/** The section title: a short accent bar over the heading, as on the condition pages. */
export function Head({ title, stand, id }: { title: ReactNode; stand?: ReactNode; id?: string }) {
  return (
    <Reveal as="div" className={g.head}>
      <Reveal as="span" variant="rule" className={cs.accentBar} />
      <h2 id={id} className={cs.h2}>
        {title}
      </h2>
      {stand && <p className={g.stand}>{stand}</p>}
    </Reveal>
  );
}

export function FlagsLink() {
  return (
    <a href={`#${RED_FLAGS_ID}`} className={g.flagLink}>
      <ExclamationTriangleIcon aria-hidden="true" />
      When to see a doctor first
    </a>
  );
}

/** The engraved plate on its dark mount (beside the text on laptops). */
export function PlateFigure({
  src,
  caption,
  priority = false,
  className = g.rail,
  sizes = '(min-width: 1024px) 300px, (min-width: 640px) 420px, 100vw',
}: {
  src: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className={g.railImg} aria-hidden="true">
        <Image src={src} width={600} height={600} alt="" sizes={sizes} priority={priority} quality={82} />
      </div>
      {caption && <figcaption className={`${g.railCap} ${cs.mono}`}>{caption}</figcaption>}
    </figure>
  );
}

/** Small plate thumbnail for a condition, when it has a commissioned plate. */
export function Thumb({ slug, size = 48 }: { slug: string; size?: number }) {
  if (!CONDITION_PLATES[slug]) return null;
  return (
    <span className={g.thumb} aria-hidden="true">
      <Image src={`/images/conditions/${slug}.webp`} alt="" fill sizes={`${size}px`} />
    </span>
  );
}

/** "When to see a doctor first": the warnings in one panel, banded by urgency. */
export function WarningPanel({ flags }: { flags: ReadonlyArray<RedFlag> }) {
  if (!flags.length) return null;
  const bands = groupRedFlags(flags);
  return (
    <section id={RED_FLAGS_ID} className={g.sec}>
      <Head title="When to see a doctor first" />
      <div className={g.warn} data-top={bands[0]?.urgency}>
        {bands.map((band) => (
          <div key={band.urgency} className={g.band}>
            <h3 className={`${g.urg} ${cs.mono}`} data-u={band.urgency}>
              <i aria-hidden="true" />
              {band.heading}
            </h3>
            <ul className={g.bandList}>
              {band.flags.map((flag) => (
                <li key={flag.sign}>
                  <p className={g.sign}>{flag.sign}</p>
                  {flag.action && <p className={g.action}>{flag.action}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faqs({ faqs }: { faqs: ReadonlyArray<{ question: string; answer: string }> }) {
  return (
    <div className={g.faq}>
      {faqs.map((faq) => (
        <details key={faq.question} className={g.disc}>
          <summary className={g.discSum}>
            <h3 className={g.discQ}>{faq.question}</h3>
            <PlusIcon aria-hidden="true" />
          </summary>
          <div className={g.discBody}>
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export interface EvidenceItem {
  title: string;
  source: string;
  year: number;
  summary: string;
  refs?: SourceRef[];
}

export function Evidence({ items }: { items: ReadonlyArray<EvidenceItem> }) {
  return (
    <div className={g.tileGrid}>
      {items.map((item) => (
        <article key={item.title} className={g.tile}>
          <p className={g.tileMeta}>
            <span className={cs.mono}>{item.year}</span> <span className={g.tileSource}>{item.source}</span>
          </p>
          <h3 className={g.tileName}>{item.title}</h3>
          <p className={g.tileText}>{item.summary}</p>
          <SourceLinks refs={item.refs} title={item.title} className={g.refs} />
        </article>
      ))}
    </div>
  );
}

export interface RelatedCondition {
  slug: string;
  name: string;
  description?: string;
}

export function RelatedConditions({ conditions }: { conditions: ReadonlyArray<RelatedCondition> }) {
  return (
    <div className={g.tileGrid} data-cols="3">
      {conditions.map((condition) => (
        <Link key={condition.slug} href={`/conditions/${condition.slug}`} className={g.tile}>
          <span className={g.tileTop}>
            <Thumb slug={condition.slug} />
            <span className={g.tileName}>{condition.name}</span>
          </span>
          {condition.description && <span className={g.tileText}>{condition.description}</span>}
          <span className={g.tileMore}>
            Read the {inlineName(condition.name)} guide
            <ArrowRightIcon aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export interface RelatedTreatment {
  id: string;
  name: string;
  shortDescription: string;
}

export function RelatedTreatments({ treatments }: { treatments: ReadonlyArray<RelatedTreatment> }) {
  return (
    <div className={g.tileGrid} data-cols="3">
      {treatments.map((treatment) => (
        <Link key={treatment.id} href={`/treatments/${treatment.id}`} className={g.tile}>
          <span className={g.tileName}>{treatment.name}</span>
          <span className={g.tileText}>{treatment.shortDescription}</span>
          <span className={g.tileMore}>
            Explore {treatment.name}
            <ArrowRightIcon aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Consent() {
  return (
    <aside className={g.consent} aria-label="About hands-on assessment">
      <ShieldCheckIcon aria-hidden="true" />
      <p>
        Every part of an assessment runs on informed consent. I explain what I am checking for
        and why before I do it, and I can offer an alternative approach if a test or technique
        does not suit your comfort level or needs.
      </p>
    </aside>
  );
}

/** The clinic's three schedules, each under its own name and street. */
export function Hours() {
  return (
    <div className={g.hours}>
      {HOURS_BY_CLINIC.map((clinic) => (
        <div key={clinic.name}>
          <div className={g.clinicName}>{clinic.name}</div>
          <div className={g.clinicStreet}>{clinic.street}</div>
          <dl>
            {clinic.days.map((d) => (
              <div key={dayKey(d)}>
                <dt>{d.day}</dt>
                <dd>{d.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

/** The closing band: how to get here, the hours, and booking. */
export function AccessClosing({
  title,
  text,
  phoneNote,
  book,
}: {
  title: string;
  text: ReactNode;
  phoneNote: string;
  book: ReactNode;
}) {
  return (
    <section className={`${cs.closing} ${g.access}`} aria-labelledby="access-title">
      <div className={g.accessGrid}>
        <div>
          <h2 id="access-title" className={cs.closingTitle}>
            {title}
          </h2>
          <p className={`${cs.closingText} ${g.accessText}`}>{text}</p>
          <ul className={g.contact}>
            <li>
              <MapPinIcon aria-hidden="true" />
              <div>
                <b>4631 Palladium Way, Unit 6</b>
                <span>Burlington, ON L7M 0W9</span>
              </div>
            </li>
            <li>
              <PhoneIcon aria-hidden="true" />
              <div>
                <a href="tel:+19056346000">(905) 634-6000</a>
                <span>{phoneNote}</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p className={`${g.hoursHead} ${cs.mono}`}>
            <ClockIcon aria-hidden="true" />
            Burlington hours
          </p>
          <Hours />
          <div className={g.accessBook}>{book}</div>
        </div>
      </div>
    </section>
  );
}
