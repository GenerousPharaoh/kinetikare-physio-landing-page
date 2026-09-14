import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WeekRail from '@/components/contact/WeekRail';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID, SEO_PERSON_ID } from '@/lib/seo-metadata';
import { WEEKLY_HOURS, type ClinicSite } from '@/lib/hours';

const PAGE_URL = 'https://www.kinetikarephysio.com/contact';
const PAGE_TITLE = 'Contact Kareem Hassanein | Physiotherapy in Burlington';
const PAGE_DESCRIPTION =
  'Reach Kareem Hassanein, Registered Physiotherapist in Burlington, by email, or book through reception at Endorphins, PhysioMax or Headon Physio. Hours and directions for each.';

const EMAIL = 'kareem.hassanein@gmail.com';

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
 * The three clinics Kareem practises at. Reception numbers are each clinic's
 * own desk: they book, reschedule and answer billing questions. Questions for
 * Kareem himself go to his email, which is the one line that reaches him
 * directly. Online booking on this site stays Endorphins-only: each clinic
 * runs its own Jane and a visitor should not book into the wrong one from
 * here. Hours come from lib/hours.ts, the single source.
 */
const CLINICS: Array<{
  site: ClinicSite;
  name: string;
  logo: { src: string; width: number; height: number; className: string };
  lines: string[];
  phone: string;
  tel: string;
  directions: string;
  booking: 'online' | 'phone';
}> = [
  {
    site: 'endorphins',
    name: 'Endorphins Health & Wellness Centre',
    logo: { src: '/images/endorphins-health-and-wellness-centre-logo.png', width: 300, height: 62, className: 'h-7 w-auto' },
    lines: ['4631 Palladium Way, Unit 6', 'Burlington, ON L7M 0W9'],
    phone: '(905) 634-6000',
    tel: '+19056346000',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9',
    booking: 'online',
  },
  {
    site: 'physiomax',
    name: 'PhysioMax Wellness',
    logo: { src: '/images/physiomax-wellness-logo.png', width: 512, height: 147, className: 'h-8 w-auto' },
    lines: ['1035 Brant Street, Unit 10A', 'Burlington, ON L7R 4X6'],
    phone: '(905) 315-9955',
    tel: '+19053159955',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1035+Brant+Street+Unit+10A,+Burlington,+ON+L7R+4X6',
    booking: 'phone',
  },
  {
    site: 'headon',
    name: 'Headon Physio',
    logo: { src: '/images/headon-physio-logo-affiliations.png', width: 298, height: 101, className: 'h-9 w-auto' },
    lines: ['1387 Walkers Line, Unit B', 'Burlington, ON L7M 0Z1'],
    phone: '(905) 332-7758',
    tel: '+19053327758',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1387+Walkers+Line+Unit+B,+Burlington,+ON+L7M+0Z1',
    booking: 'phone',
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
    <div data-booking-source="contact_page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactSchema) }} />

      {/* Opening band: same navy register as the home hero. No photo; the
          email address is the picture. */}
      <section className="relative overflow-hidden bg-[#020617] text-white pt-32 md:pt-40 pb-40 md:pb-48">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617]" />
          <div className="absolute -top-40 right-[-10%] w-[52rem] h-[52rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.16),transparent)]" />
          <div className="absolute bottom-[-30%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(30,41,59,0.9),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Contact</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-playfair !text-white text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-12 md:mb-14">
              Email me directly with any enquiry. For bookings, rescheduling or billing, each clinic&rsquo;s reception
              desk can help. Online booking on this site is for Endorphins.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] mb-3">Direct email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-block font-playfair text-[clamp(1.5rem,5.4vw,3.25rem)] leading-[1.15] tracking-tight text-white break-all sm:break-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617] rounded"
            >
              <span className="bg-[linear-gradient(#D4AF37,#D4AF37)] bg-no-repeat bg-[length:100%_2px] bg-[position:0_100%] pb-1 group-hover:bg-[length:100%_3px] transition-[background-size] duration-300">
                {EMAIL}
              </span>
            </a>

            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link
                href={JANE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] text-slate-950 font-medium hover:bg-[#E6C66A] transition-colors shadow-[0_10px_30px_rgba(212,175,55,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
              >
                Book online at Endorphins
                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+19056346000"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>Endorphins reception <span className="tabular-nums">(905) 634-6000</span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Week rail, pulled up over the band. */}
      <section className="relative bg-[#FAF8F5] pb-16 md:pb-20" aria-labelledby="week-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 md:-mt-32 relative">
          <div className="rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(2,6,23,0.35)] border border-slate-200/70 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6 md:mb-8">
              <h2 id="week-heading" className="font-playfair text-3xl md:text-4xl text-slate-900 tracking-tight">
                Where I am each day
              </h2>
              <p className="text-sm text-slate-600 md:max-w-sm md:text-right">
                Monday to Saturday. Tuesday is split between PhysioMax in the morning and Endorphins in the evening.
              </p>
            </div>
            <WeekRail />
          </div>
        </div>
      </section>

      {/* Three clinics: one panel, three columns, reception desk in each. */}
      <section className="bg-[#FAF8F5] pb-20 md:pb-28" aria-labelledby="clinics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 md:mb-10">
            <h2 id="clinics-heading" className="font-playfair text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
              The three clinics
            </h2>
            <p className="text-slate-600">
              Each clinic keeps its own schedule and reception desk. Call the one you want to be seen at.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden border border-slate-200/80 bg-white divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
            {CLINICS.map((clinic) => {
              const days = WEEKLY_HOURS.filter((d) => d.site === clinic.site);
              const isMain = clinic.booking === 'online';
              return (
                <article key={clinic.site} className={`relative p-6 sm:p-8 flex flex-col gap-6 ${isMain ? 'bg-[#FDF8E1]/40' : ''}`}>
                  {isMain && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37]" />}

                  <div className="h-10 flex items-center">
                    <Image src={clinic.logo.src} alt="" width={clinic.logo.width} height={clinic.logo.height} className={`${clinic.logo.className} object-contain`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-1">{clinic.name}</h3>
                    {clinic.lines.map((line) => (
                      <span key={line} className="block text-slate-600 text-sm">{line}</span>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-1.5">Reception</p>
                    <a href={`tel:${clinic.tel}`} className="font-playfair text-2xl text-slate-900 tabular-nums hover:text-[#8A6F0A] transition-colors">
                      {clinic.phone}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">
                      {isMain ? 'Book by phone or online. Direct billing is set up here.' : 'Book by phone.'}
                    </p>
                  </div>

                  <ul className="border-t border-slate-200/80 pt-5 space-y-2">
                    {days.map((d) => (
                      <li key={`${d.day}-${d.site}`} className="flex justify-between gap-4 text-sm">
                        <span className="text-slate-600">{d.day}</span>
                        <span className="text-slate-900 font-medium tabular-nums">{d.label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
                    {isMain && (
                      <Link
                        href={JANE_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-[#B08D57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/50 focus-visible:ring-offset-2"
                      >
                        Book online
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    )}
                    <a
                      href={clinic.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8A6F0A] hover:text-[#B08D57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/40 focus-visible:ring-offset-2 rounded"
                    >
                      Directions
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
