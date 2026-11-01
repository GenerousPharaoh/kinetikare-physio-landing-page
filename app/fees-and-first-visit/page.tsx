import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { ENDORPHINS_HOURS } from '@/lib/hours';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID, SEO_PERSON_ID } from '@/lib/seo-metadata';
import { geist } from '@/components/conditions/case/fonts';
import Reveal from '@/components/home/Reveal';
import SectionHead from '@/components/sheet/SectionHead';
import s from '@/components/sheet/Sheet.module.css';

const PAGE_URL = 'https://www.kinetikarephysio.com/fees-and-first-visit';
const PAGE_TITLE = 'Physiotherapy Fees and First Visit in Burlington';
const PAGE_DESCRIPTION =
  'Initial assessment $110 (45 min). Follow-ups $90 (30 min), $100 (40 min) or $135 (60 min). Direct billing at Endorphins in Burlington, no referral needed.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    siteName: 'Kinetikare',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [{ url: 'https://www.kinetikarephysio.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Kareem Hassanein Physiotherapy, Burlington' }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: ['https://www.kinetikarephysio.com/images/og-image.jpg'] },
};

/**
 * The practical page: every price, billing, first-visit and arrival fact in
 * one place. Until 2026-09-15 these lived on Services (prices), the FAQ (what
 * the visit involves, clothing, insurance, cancellation) and Contact (where to
 * come). The wording below is lifted from those published answers; the prices
 * are the ones on Services. Direct billing is Endorphins only.
 */
const FEES = [
  { name: 'Initial assessment, 45 minutes', detail: 'Conversation, assessment and, in most cases, the start of treatment', price: '$110' },
  { name: 'Follow-up, 30 minutes', detail: 'Treatment and progression', price: '$90' },
  { name: 'Follow-up, 40 minutes', detail: 'More time for treatment and exercise', price: '$100' },
  { name: 'Follow-up, 60 minutes', detail: 'A longer session when the plan calls for it', price: '$135' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': 'https://www.kinetikarephysio.com/#website' },
      about: { '@id': SEO_ORGANIZATION_ID },
      author: { '@id': SEO_PERSON_ID },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kinetikarephysio.com' },
        { '@type': 'ListItem', position: 2, name: 'Fees and first visit', item: PAGE_URL },
      ],
    },
  ],
};

/** The four steps of a first visit, in order. */
const FIRST_VISIT = [
  ['Conversation', 'Your current symptoms, your goals, your daily activities and your relevant health history, including past injuries, surgeries and any medications. This full picture is what keeps the plan safe and specific to you.'],
  ['Assessment', 'I propose an assessment approach, explain what it involves, and then evaluate your movement, strength, joint mobility and muscle control relevant to your concern.'],
  ['Treatment', 'In most cases the first session includes the start of treatment, always with your consent for each part. If your situation is complex, understanding the core issues comes first.'],
  ['Plan', 'You and I agree on what to work towards and what happens next: how often to come, what to do between sessions, and how progress will be measured.'],
];

const BEFORE_YOU_COME = [
  ['What to wear', 'Comfortable, athletic-style clothing that lets you move freely and gives access to the area being assessed: shorts for a knee, a tank top for a shoulder. If you prefer certain areas to stay covered, the assessment adapts.'],
  ['What to bring', 'Your insurance card or policy and group numbers, a list of any medications, and any relevant reports or imaging results if you have them.'],
  ['Bringing someone', 'A partner, friend, family member or caregiver is welcome to join you. Mention it when you book.'],
  ['Cancelling or rescheduling', 'Please give at least 24 hours’ notice so the time can be offered to someone else. A missed appointment or one cancelled with less notice may be charged the full fee. If an emergency or illness means you have to cancel at short notice, let me know as soon as you can.'],
];

export default function FeesAndFirstVisitPage() {
  return (
    <main data-booking-source="fees_page" className={`${s.root} ${geist.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />

      <header className={`${s.column} ${s.opening}`}>
        <nav aria-label="Breadcrumb" className={`${s.crumbs} ${s.label}`}>
          <Link href="/">Home</Link>
          <ChevronRightIcon aria-hidden="true" />
          <span aria-current="page">Fees &amp; first visit</span>
        </nav>
        <h1 className={s.h1}>Fees &amp; first visit</h1>
        <p className={s.summary}>
          What an appointment costs, how direct billing works, what the first visit involves, and where to come.
        </p>
        <div className={s.actions}>
          <Link
            href={JANE_BOOKING_URL} data-booking-source="fees_page"
            target="_blank"
            rel="noopener noreferrer"
            className={s.ink}
          >
            Book an appointment
            <ArrowTopRightOnSquareIcon aria-hidden="true" />
          </Link>
          <span className={s.aside}>At Endorphins, Burlington. No referral needed.</span>
        </div>
      </header>

      <div className={`${s.column} ${s.body}`}>
        <section className={s.sec} aria-labelledby="fees-heading">
          <SectionHead id="fees-heading" title="Appointment types" stand="Every appointment is one-on-one with me. No assistants or aides." />
          <Reveal as="div">
            <table className={s.fees}>
              <caption className="sr-only">Appointment types and fees</caption>
              <thead>
                <tr>
                  <th scope="col">Appointment</th>
                  <th scope="col" className={s.what}>What it covers</th>
                  <th scope="col">Fee</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((f) => (
                  <tr key={f.name}>
                    <th scope="row">
                      {f.name}
                      <span className={s.feeNote}>{f.detail}</span>
                    </th>
                    <td className={`${s.what} ${s.feeWhat}`}>{f.detail}</td>
                    <td className={s.price}>{f.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className={s.after}>Fees are in Canadian dollars and are the same whether or not you use insurance.</p>
        </section>

        <section className={s.sec} aria-labelledby="billing-heading">
          <SectionHead id="billing-heading" title="Direct billing" />
          <div className={s.prose}>
            <p>
              Direct billing is offered at Endorphins for most major extended health insurance providers. Bring your insurance card or your policy and group numbers to your first appointment, and the claim can usually be processed for you at the clinic.
            </p>
            <p>
              Coverage depends on your plan. Some plans require a doctor&rsquo;s referral for reimbursement even though no referral is needed to book, so check your plan details before your first visit. If you are unsure, ask when you book.
            </p>
          </div>
        </section>

        <section className={s.sec} aria-labelledby="visit-heading">
          <SectionHead id="visit-heading" title="Your first visit" stand="The first visit is for understanding you and your situation, then starting to act on it." />
          <ol className={s.steps}>
            {FIRST_VISIT.map(([title, body], i) => (
              <Reveal as="li" key={title} delay={i * 70}>
                <h3 className={s.stepTitle}>{title}</h3>
                <p className={s.stepBody}>{body}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className={s.sec} aria-labelledby="prep-heading">
          <SectionHead id="prep-heading" title="Before you come" />
          <dl className={s.defs}>
            {BEFORE_YOU_COME.map(([term, def]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{def}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={s.sec} aria-labelledby="where-heading">
          <SectionHead id="where-heading" title="Where to come" stand="Appointments booked on this site are at Endorphins. Parking is on site." />
          <div className={s.pair}>
            <Reveal as="div" className={s.box}>
              <h3 className={s.h3}>Endorphins Health &amp; Wellness Centre</h3>
              <p className={s.addr}>4631 Palladium Way, Unit 6<br />Burlington, ON L7M 0W9</p>
              <p className={s.links}>
                <a href="https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9" target="_blank" rel="noopener noreferrer">
                  Directions
                  <ArrowTopRightOnSquareIcon aria-hidden="true" />
                </a>
                <a href="tel:+19056346000">(905) 634-6000</a>
              </p>
            </Reveal>
            <Reveal as="div" className={s.box} delay={70}>
              <h3 className={s.h3}>My hours there</h3>
              <ul className={s.hours}>
                {ENDORPHINS_HOURS.map((d) => (
                  <li key={d.day}>
                    <span>{d.day}</span>
                    <span>{d.label}</span>
                  </li>
                ))}
              </ul>
              <p className={`${s.aside} ${s.boxNote}`}>
                I also practise at PhysioMax Wellness and Headon Physio; those appointments are booked through each clinic. See <Link href="/contact" className={s.link}>Contact</Link>.
              </p>
            </Reveal>
          </div>
          <div className={s.actions}>
            <Link
              href={JANE_BOOKING_URL} data-booking-source="fees_page"
              target="_blank"
              rel="noopener noreferrer"
              className={s.ink}
            >
              Book an appointment
              <ArrowTopRightOnSquareIcon aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
