import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WeekSchedule from '@/components/contact/WeekSchedule';
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
 * Kareem himself go to his email, the one line that reaches him directly.
 * Online booking on this site stays Endorphins-only: each clinic runs its own
 * Jane and a visitor should not book into the wrong one from here. Hours come
 * from lib/hours.ts, the single source.
 */
interface Clinic {
  site: ClinicSite;
  name: string;
  short: string;
  logo: { src: string; width: number; height: number; className: string };
  lines: string[];
  phone: string;
  tel: string;
  directions: string;
  booking: 'online' | 'phone';
}

const CLINICS: Clinic[] = [
  {
    site: 'endorphins',
    name: 'Endorphins Health & Wellness Centre',
    short: 'Endorphins',
    logo: { src: '/images/endorphins-health-and-wellness-centre-logo.png', width: 300, height: 62, className: 'h-8 w-auto' },
    lines: ['4631 Palladium Way, Unit 6', 'Burlington, ON L7M 0W9'],
    phone: '(905) 634-6000',
    tel: '+19056346000',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9',
    booking: 'online',
  },
  {
    site: 'physiomax',
    name: 'PhysioMax Wellness',
    short: 'PhysioMax',
    logo: { src: '/images/physiomax-wellness-logo.png', width: 512, height: 147, className: 'h-9 w-auto' },
    lines: ['1035 Brant Street, Unit 10A', 'Burlington, ON L7R 4X6'],
    phone: '(905) 315-9955',
    tel: '+19053159955',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1035+Brant+Street+Unit+10A,+Burlington,+ON+L7R+4X6',
    booking: 'phone',
  },
  {
    site: 'headon',
    name: 'Headon Physio',
    short: 'Headon Physio',
    logo: { src: '/images/headon-physio-logo-affiliations.png', width: 298, height: 101, className: 'h-10 w-auto' },
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

const primaryButton =
  'inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

export default function ContactPage() {
  return (
    // data-contact-page lets globals.css drop the floating-pill offset; the
    // pills are not rendered here (see FloatingButtons).
    <div data-booking-source="contact_page" data-contact-page="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactSchema) }} />

      {/* Opening: intro and the week on the left, one contact-and-booking
          panel on the right. On phones the panel comes straight after the
          intro so the actions sit above the schedule. */}
      <section className="!bg-[#020617] !bg-none text-white pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Contact</span>
          </nav>

          <div className="grid gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
            <div className="lg:col-span-7 lg:row-start-1">
              <h1 className="font-playfair !text-white text-4xl md:text-5xl tracking-tight leading-[1.05]">Contact</h1>
              <p className="mt-5 max-w-md text-lg text-slate-300 leading-relaxed">
                Email me directly with any enquiry. For bookings, rescheduling or billing, each clinic&rsquo;s reception
                desk can help.
              </p>
            </div>

            <aside
              aria-label="Contact and booking"
              className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <div>
                <h2 className="text-sm font-medium text-slate-400 mb-2">Email me directly</h2>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-playfair text-xl sm:text-2xl lg:text-[1.65rem] leading-tight text-white hover:text-[#D4AF37] transition-colors break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 rounded"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="mt-7 pt-7 border-t border-white/10">
                <h2 className="text-sm font-medium text-slate-400 mb-1">Book online</h2>
                <p className="text-slate-300 text-[15px] mb-4">
                  Endorphins Health &amp; Wellness Centre. Direct billing is available there.
                </p>
                <Link
                  href={JANE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${primaryButton} bg-[#D4AF37] text-slate-950 hover:bg-[#E6C66A] focus-visible:ring-white/70 focus-visible:ring-offset-[#020617]`}
                >
                  Book an appointment
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-7 pt-7 border-t border-white/10">
                <h2 className="text-sm font-medium text-slate-400 mb-1">Call a reception desk</h2>
                <ul className="divide-y divide-white/10">
                  {CLINICS.map((c) => (
                    <li key={c.site}>
                      <a
                        href={`tel:${c.tel}`}
                        className="group flex items-baseline justify-between gap-4 py-3 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 rounded"
                      >
                        <span className="text-slate-300 group-hover:text-white transition-colors">{c.short}</span>
                        <span className="text-white font-medium tabular-nums whitespace-nowrap group-hover:text-[#D4AF37] transition-colors">
                          {c.phone}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-7 lg:row-start-2 lg:self-end">
              <h2 className="font-playfair text-2xl text-white">Where I am each day</h2>
              <p className="mt-1 mb-4 text-sm text-slate-400">Regular clinic days. Tuesday is split between two clinics.</p>
              <WeekSchedule />
            </div>
          </div>
        </div>
      </section>

      {/* Clinics: three full-width rows, each with its own action. */}
      <section className="!bg-[#FAF8F5] !bg-none py-16 md:py-20" aria-labelledby="clinics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <h2 id="clinics-heading" className="font-playfair text-3xl md:text-4xl text-slate-900 tracking-tight">
              The three clinics
            </h2>
            <p className="text-slate-600 md:max-w-md md:text-right">
              Online booking is at Endorphins. PhysioMax and Headon book by phone through their reception desks.
            </p>
          </div>

          <div className="border-t border-slate-300">
            {CLINICS.map((clinic) => {
              const days = WEEKLY_HOURS.filter((d) => d.site === clinic.site);
              const online = clinic.booking === 'online';
              return (
                <article
                  key={clinic.site}
                  aria-labelledby={`clinic-${clinic.site}`}
                  className="grid gap-x-8 gap-y-6 py-8 md:py-10 border-b border-slate-300 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <Image
                      src={clinic.logo.src}
                      alt=""
                      width={clinic.logo.width}
                      height={clinic.logo.height}
                      className={`${clinic.logo.className} object-contain object-left mb-4 mix-blend-multiply`}
                    />
                    <h3 id={`clinic-${clinic.site}`} className="font-playfair text-2xl text-slate-900 tracking-tight">
                      {clinic.name}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {clinic.lines[0]}
                      <br />
                      {clinic.lines[1]}
                    </p>
                    <a
                      href={clinic.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#8A6F0A] hover:text-[#B08D57] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/40 focus-visible:ring-offset-2 rounded"
                    >
                      Directions
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="lg:col-span-3">
                    <h4 className="text-sm font-medium text-slate-500 mb-2">My hours here</h4>
                    <ul className="divide-y divide-slate-200 border-y border-slate-200">
                      {days.map((d) => (
                        <li key={`${d.day}-${d.site}`} className="flex justify-between gap-4 py-2 text-[15px]">
                          <span className="text-slate-700">{d.day}</span>
                          <span className="text-slate-900 tabular-nums whitespace-nowrap">{d.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:text-right">
                    {online ? (
                      <>
                        <Link
                          href={JANE_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${primaryButton} bg-[#D4AF37] text-slate-950 hover:bg-[#C9A227] focus-visible:ring-[#B08D57]/50`}
                        >
                          Book online
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        <p className="mt-3 text-[15px] text-slate-600">
                          Or call reception,{' '}
                          <a href={`tel:${clinic.tel}`} className="text-slate-900 font-medium tabular-nums hover:text-[#8A6F0A] transition-colors">
                            {clinic.phone}
                          </a>
                          . Direct billing available.
                        </p>
                      </>
                    ) : (
                      <>
                        <a
                          href={`tel:${clinic.tel}`}
                          className={`${primaryButton} bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-900/40 tabular-nums`}
                        >
                          <PhoneIcon className="w-4 h-4" aria-hidden="true" />
                          Call {clinic.phone}
                        </a>
                        <p className="mt-3 text-[15px] text-slate-600">Booking by phone through reception.</p>
                      </>
                    )}
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
