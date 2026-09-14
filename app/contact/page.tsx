import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ContactSection from '@/components/sections/ContactSection';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID, SEO_PERSON_ID } from '@/lib/seo-metadata';
import { WEEKLY_HOURS, type ClinicSite } from '@/lib/hours';

const PAGE_URL = 'https://www.kinetikarephysio.com/contact';
const PAGE_TITLE = 'Contact Kareem Hassanein | Physiotherapy in Burlington';
const PAGE_DESCRIPTION =
  'Phone, email, online booking and clinic hours for Kareem Hassanein, Registered Physiotherapist in Burlington. Call (905) 634-6000 or book online at Endorphins Health & Wellness Centre.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'Kareem Hassanein Physiotherapy',
    images: [{ url: 'https://www.kinetikarephysio.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Kareem Hassanein Physiotherapy, Burlington' }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: ['https://www.kinetikarephysio.com/images/og-image.jpg'] },
};

/**
 * Where Kareem practises. The addresses are stated plainly so nobody who found
 * him through another clinic's site is confused about where he is on a given
 * day. Booking on this site still goes to Endorphins only; each clinic runs its
 * own Jane and Kareem does not want a visitor booking into the wrong one from
 * here. Hours come from lib/hours.ts, the single source.
 */
const CLINICS: Array<{
  site: ClinicSite;
  name: string;
  lines: string[];
  directions: string;
  note?: string;
}> = [
  {
    site: 'endorphins',
    name: 'Endorphins Health & Wellness Centre',
    lines: ['4631 Palladium Way, Unit 6', 'Burlington, ON L7M 0W9'],
    directions: 'https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9',
    note: 'Main clinic. Online booking and direct billing are here.',
  },
  {
    site: 'physiomax',
    name: 'PhysioMax Wellness',
    lines: ['1035 Brant Street, Unit 10A', 'Burlington, ON L7R 4X6'],
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1035+Brant+Street+Unit+10A,+Burlington,+ON+L7R+4X6',
    note: 'Book by phone.',
  },
  {
    site: 'headon',
    name: 'Headon Physio',
    lines: ['1387 Walkers Line, Unit B', 'Burlington, ON'],
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1387+Walkers+Line+Unit+B,+Burlington,+ON',
    note: 'Book by phone.',
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': 'https://www.kinetikarephysio.com/#website' },
      about: { '@id': SEO_ORGANIZATION_ID },
      mainEntity: { '@id': SEO_PERSON_ID },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kinetikarephysio.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: PAGE_URL },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactSchema) }} />

      <section className="pt-28 md:pt-36 pb-4 md:pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/" className="hover:text-[#8A6F0A] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-800" aria-current="page">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-slate-900 tracking-tight leading-[1.1] mb-5">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Phone is the fastest way to reach me with a question. Booking is online, at Endorphins.
            The three clinics I practise at, and which days I am at each, are listed below.
          </p>
        </div>
      </section>

      {/* Same block as the home page, so the phone, email, hours and booking panel match everywhere.
          The wrapper labels its booking clicks for GA4 (BookingTracker reads the nearest ancestor). */}
      <div data-booking-source="contact_page">
        <ContactSection hideHeading />
      </div>

      <section className="pb-20 md:pb-28 bg-white" aria-labelledby="clinics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="clinics-heading" className="text-2xl sm:text-3xl font-light text-slate-900 mb-3 tracking-[-0.02em]">
            Where I practise
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8">
            Online booking on this site is for Endorphins. To see me at PhysioMax or Headon, call and I will find you a time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLINICS.map((clinic) => {
              const days = WEEKLY_HOURS.filter((d) => d.site === clinic.site);
              return (
                <div key={clinic.site} className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-neutral-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-normal text-slate-900">{clinic.name}</h3>
                      {clinic.lines.map((line) => (
                        <span key={line} className="block text-slate-600 text-sm">{line}</span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4 border-t border-slate-100 pt-4">
                    {days.map((d) => (
                      <li key={`${d.day}-${d.site}`} className="flex justify-between text-sm">
                        <span className="text-slate-700">{d.day}</span>
                        <span className="text-slate-900 font-medium tabular-nums">{d.label}</span>
                      </li>
                    ))}
                  </ul>
                  {clinic.note && <p className="text-xs text-slate-500 mb-4">{clinic.note}</p>}
                  <a
                    href={clinic.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8A6F0A] hover:text-[#B08D57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/40 focus-visible:ring-offset-2 rounded"
                  >
                    Get directions
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
