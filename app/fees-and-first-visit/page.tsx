import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { ENDORPHINS_HOURS } from '@/lib/hours';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID, SEO_PERSON_ID } from '@/lib/seo-metadata';

const PAGE_URL = 'https://www.kinetikarephysio.com/fees-and-first-visit';
const PAGE_TITLE = 'Fees and First Visit | Kareem Hassanein, Registered Physiotherapist';
const PAGE_DESCRIPTION =
  'What physiotherapy with Kareem Hassanein costs in Burlington, how direct billing works at Endorphins, what the first visit involves, what to bring, and where to come.';

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
  { name: 'Initial assessment', detail: 'Conversation, assessment and, in most cases, the start of treatment', price: '$130' },
  { name: 'Follow-up, 30 minutes', detail: 'Treatment and progression', price: '$90' },
  { name: 'Follow-up, 60 minutes', detail: 'A longer session when the plan calls for it', price: '$145' },
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

const h2 = 'font-playfair text-2xl md:text-3xl text-slate-900 tracking-tight';
const link = 'text-slate-900 font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-[text-decoration-color]';

export default function FeesAndFirstVisitPage() {
  return (
    <div data-booking-source="fees_page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />

      <section className="!bg-[#020617] !bg-none text-white pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Fees &amp; first visit</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-16 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="font-playfair !text-white text-4xl md:text-5xl tracking-tight leading-[1.05]">Fees &amp; first visit</h1>
              <p className="mt-5 max-w-md text-lg text-slate-300 leading-relaxed">
                What an appointment costs, how direct billing works, what the first visit involves, and where to come.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col sm:flex-row sm:items-center gap-4 lg:justify-end">
              <Link
                href={JANE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D4AF37] text-slate-950 text-[15px] font-medium whitespace-nowrap hover:bg-[#E6C66A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
              >
                Book an appointment
                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
              <span className="text-sm text-slate-400 sm:max-w-[14rem]">At Endorphins, Burlington. No referral needed.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="!bg-[#FAF8F5] !bg-none py-14 md:py-20" aria-labelledby="fees-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <h2 id="fees-heading" className={h2}>Appointment types</h2>
            <p className="mt-3 text-slate-600">
              Every appointment is one-on-one with me. No assistants or aides.
            </p>
          </div>
          <div className="lg:col-span-8">
            <table className="w-full border-collapse text-[15px]">
              <caption className="sr-only">Appointment types and fees</caption>
              <thead>
                <tr className="border-b border-slate-300 text-left text-sm text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-medium">Appointment</th>
                  <th scope="col" className="py-2 pr-4 font-medium hidden sm:table-cell">What it covers</th>
                  <th scope="col" className="py-2 text-right font-medium">Fee</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((f) => (
                  <tr key={f.name} className="border-b border-slate-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-slate-900">
                      {f.name}
                      <span className="block sm:hidden mt-1 text-sm font-normal text-slate-600">{f.detail}</span>
                    </th>
                    <td className="py-4 pr-4 text-slate-600 hidden sm:table-cell">{f.detail}</td>
                    <td className="py-4 text-right text-slate-900 font-medium tabular-nums whitespace-nowrap">{f.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-slate-500">Fees are in Canadian dollars and are the same whether or not you use insurance.</p>
          </div>
        </div>
      </section>

      <section className="!bg-white !bg-none py-14 md:py-20 border-t border-slate-200" aria-labelledby="billing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <h2 id="billing-heading" className={h2}>Direct billing</h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl space-y-4 text-slate-700 leading-relaxed">
            <p>
              Direct billing is offered at Endorphins for most major extended health insurance providers. Bring your insurance card or your policy and group numbers to your first appointment, and the claim can usually be processed for you at the clinic.
            </p>
            <p>
              Coverage depends on your plan. Some plans require a doctor&rsquo;s referral for reimbursement even though no referral is needed to book, so check your plan details before your first visit. If you are unsure, ask when you book.
            </p>
          </div>
        </div>
      </section>

      <section className="!bg-[#FAF8F5] !bg-none py-14 md:py-20 border-t border-slate-200" aria-labelledby="visit-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <h2 id="visit-heading" className={h2}>Your first visit</h2>
            <p className="mt-3 text-slate-600">The first visit is for understanding you and your situation, then starting to act on it.</p>
          </div>
          <ol className="lg:col-span-8 max-w-2xl divide-y divide-slate-200 border-y border-slate-200">
            {[
              ['Conversation', 'Your current symptoms, your goals, your daily activities and your relevant health history, including past injuries, surgeries and any medications. This full picture is what keeps the plan safe and specific to you.'],
              ['Assessment', 'I propose an assessment approach, explain what it involves, and then evaluate your movement, strength, joint mobility and muscle control relevant to your concern.'],
              ['Treatment', 'In most cases the first session includes the start of treatment, always with your consent for each part. If your situation is complex, understanding the core issues comes first.'],
              ['Plan', 'You and I agree on what to work towards and what happens next: how often to come, what to do between sessions, and how progress will be measured.'],
            ].map(([title, body], i) => (
              <li key={title} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                <span className="font-playfair text-2xl text-[#8A6F0A] tabular-nums leading-none pt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">{title}</h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="!bg-white !bg-none py-14 md:py-20 border-t border-slate-200" aria-labelledby="prep-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <h2 id="prep-heading" className={h2}>Before you come</h2>
          </div>
          <dl className="lg:col-span-8 max-w-2xl divide-y divide-slate-200 border-y border-slate-200">
            {[
              ['What to wear', 'Comfortable, athletic-style clothing that lets you move freely and gives access to the area being assessed: shorts for a knee, a tank top for a shoulder. If you prefer certain areas to stay covered, the assessment adapts.'],
              ['What to bring', 'Your insurance card or policy and group numbers, a list of any medications, and any relevant reports or imaging results if you have them.'],
              ['Bringing someone', 'A partner, friend, family member or caregiver is welcome to join you. Mention it when you book.'],
              ['Cancelling or rescheduling', 'Please give at least 24 hours notice so the time can be offered to someone else. If an emergency or illness means you have to cancel at short notice, let me know as soon as you can.'],
            ].map(([term, def]) => (
              <div key={term} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6 py-5">
                <dt className="font-medium text-slate-900">{term}</dt>
                <dd className="text-slate-700 leading-relaxed">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="!bg-[#FAF8F5] !bg-none py-14 md:py-20 border-t border-slate-200" aria-labelledby="where-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <h2 id="where-heading" className={h2}>Where to come</h2>
            <p className="mt-3 text-slate-600">Appointments booked on this site are at Endorphins. Parking is on site.</p>
          </div>
          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 max-w-2xl">
            <div>
              <h3 className="text-lg font-medium text-slate-900">Endorphins Health &amp; Wellness Centre</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">4631 Palladium Way, Unit 6<br />Burlington, ON L7M 0W9</p>
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                <a href="https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9" target="_blank" rel="noopener noreferrer" className={link}>Directions</a>
                <a href="tel:+19056346000" className={`${link} tabular-nums`}>(905) 634-6000</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900">My hours there</h3>
              <ul className="mt-2 divide-y divide-slate-200 border-y border-slate-200">
                {ENDORPHINS_HOURS.map((d) => (
                  <li key={d.day} className="flex justify-between gap-4 py-2 text-[15px]">
                    <span className="text-slate-700">{d.day}</span>
                    <span className="text-slate-900 tabular-nums whitespace-nowrap">{d.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                I also practise at PhysioMax Wellness and Headon Physio; those appointments are booked through each clinic. See <Link href="/contact" className={link}>Contact</Link>.
              </p>
            </div>
            <div className="sm:col-span-2 pt-2">
              <Link
                href={JANE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D4AF37] text-slate-950 text-[15px] font-medium hover:bg-[#E6C66A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/50 focus-visible:ring-offset-2"
              >
                Book an appointment
                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
