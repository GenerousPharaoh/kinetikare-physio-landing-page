import React, { type CSSProperties } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import WeekSchedule from '@/components/contact/WeekSchedule';
import CallbackForm from '@/components/CallbackForm';
import { HEADON_BOOKING_URL, JANE_BOOKING_URL, PHYSIOMAX_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID, SEO_PERSON_ID } from '@/lib/seo-metadata';
import { WEEKLY_HOURS, type ClinicSite } from '@/lib/hours';
import { geist } from '@/components/conditions/case/fonts';
import Reveal from '@/components/home/Reveal';
import SectionHead from '@/components/sheet/SectionHead';
import s from '@/components/sheet/Sheet.module.css';

const PAGE_URL = 'https://www.kinetikarephysio.com/contact';
const PAGE_TITLE = 'Contact Kareem Hassanein | Physiotherapy in Burlington';
const PAGE_DESCRIPTION =
  'Reach Kareem Hassanein, Registered Physiotherapist in Burlington, by email, or book with reception at Endorphins, PhysioMax or Headon Physio.';

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
    siteName: 'Kinetikare',
    images: [{ url: 'https://www.kinetikarephysio.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Kareem Hassanein Physiotherapy, Burlington' }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: ['https://www.kinetikarephysio.com/images/og-image.jpg'] },
};

/**
 * The three clinics Kareem practises at. Reception numbers are each clinic's
 * own desk: they book, reschedule and answer billing questions. Questions for
 * Kareem himself go to his email, the one line that reaches him directly.
 * Each clinic runs its own Jane, so this page links all three booking pages
 * and says so; it is the one page on the site that does (Kareem's decision,
 * 2026-09-14). Hours come from lib/hours.ts, the single source.
 */
interface Clinic {
  site: ClinicSite;
  name: string;
  short: string;
  logo: { src: string; width: number; height: number; maxHeight: number };
  lines: string[];
  phone: string;
  tel: string;
  directions: string;
  bookingUrl: string;
  /** GA4 event_label for this clinic's booking link (BookingTracker reads it). */
  bookingSource: string;
  note?: string;
  /**
   * Each clinic's own colour, sampled from its logo, so the three booking
   * buttons read as three different destinations rather than one action
   * repeated. Text colour is fixed per button for contrast; hover only
   * shifts the background, to a lighter tint.
   */
  brand: { color: string; hover: string; ink: string; dot: string };
}

const CLINICS: Clinic[] = [
  {
    site: 'endorphins',
    name: 'Endorphins Health & Wellness Centre',
    short: 'Endorphins',
    logo: { src: '/images/endorphins-health-and-wellness-centre-logo.png', width: 300, height: 62, maxHeight: 40 },
    lines: ['4631 Palladium Way, Unit 6', 'Burlington, ON L7M 0W9'],
    phone: '(905) 634-6000',
    tel: '+19056346000',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=4631+Palladium+Way+Unit+6,+Burlington,+ON+L7M+0W9',
    bookingUrl: JANE_BOOKING_URL,
    bookingSource: 'contact_endorphins',
    note: 'Direct billing available.',
    brand: { color: '#7FB83F', hover: '#93C95A', ink: '#020617', dot: '#98C55C' },
  },
  {
    site: 'physiomax',
    name: 'PhysioMax Wellness',
    short: 'PhysioMax',
    logo: { src: '/images/physiomax-wellness-logo.png', width: 512, height: 147, maxHeight: 48 },
    lines: ['1035 Brant Street, Unit 10A', 'Burlington, ON L7R 4X6'],
    phone: '(905) 315-9955',
    tel: '+19053159955',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1035+Brant+Street+Unit+10A,+Burlington,+ON+L7R+4X6',
    bookingUrl: PHYSIOMAX_BOOKING_URL,
    bookingSource: 'contact_physiomax',
    brand: { color: '#F26522', hover: '#FF7A3D', ink: '#020617', dot: '#FF6622' },
  },
  {
    site: 'headon',
    name: 'Headon Physio',
    short: 'Headon Physio',
    logo: { src: '/images/headon-physio-logo-affiliations.png', width: 298, height: 101, maxHeight: 48 },
    lines: ['1387 Walkers Line, Unit B', 'Burlington, ON L7M 0Z1'],
    phone: '(905) 332-7758',
    tel: '+19053327758',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=1387+Walkers+Line+Unit+B,+Burlington,+ON+L7M+0Z1',
    bookingUrl: HEADON_BOOKING_URL,
    bookingSource: 'contact_headon',
    brand: { color: '#003377', hover: '#0A4A96', ink: '#ffffff', dot: '#4F8BE0' },
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
    // data-contact-page lets globals.css drop the floating-pill offset; the
    // pills are not rendered here (see FloatingButtons).
    <main data-booking-source="contact_page" data-contact-page="" className={`${s.root} ${geist.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactSchema) }} />

      {/* Opening: intro and the week on the left, one dark contact-and-booking
          panel on the right. On phones the panel comes straight after the
          intro so the actions sit above the schedule. */}
      <div className={`${s.wrap} ${s.opening}`}>
        <div className={s.contactGrid}>
          <div className={s.contactIntro}>
            <nav aria-label="Breadcrumb" className={`${s.crumbs} ${s.label}`}>
              <Link href="/">Home</Link>
              <ChevronRightIcon aria-hidden="true" />
              <span aria-current="page">Contact</span>
            </nav>
            <h1 className={s.h1}>Contact</h1>
            <p className={s.summary}>
              Email me directly with any enquiry. For bookings, rescheduling or billing, each clinic&rsquo;s reception
              desk can help.
            </p>
          </div>

          <aside aria-label="Contact and booking" className={`${s.contactPanel} ${s.dark}`}>
            <div className={s.block}>
              <h2 className={s.label}>Email me directly</h2>
              <a href={`mailto:${EMAIL}`} className={s.mail}>
                {EMAIL}
              </a>
            </div>

            <div className={s.block}>
              <h2 className={s.label}>Book online</h2>
              <p className={s.lede}>Each clinic has its own Jane booking page. Choose the one you want to be seen at.</p>
              <ul className={s.panelRows}>
                {CLINICS.map((c) => (
                  <li key={c.site}>
                    <Link
                      href={c.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-booking-source={c.bookingSource}
                    >
                      <span className={s.who}>
                        <span aria-hidden="true" className={s.dot} style={{ background: c.brand.dot }} />
                        {c.short}
                      </span>
                      <span className={s.go}>
                        Book online
                        <ArrowTopRightOnSquareIcon aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.block}>
              <h2 className={s.label}>Call a reception desk</h2>
              <ul className={s.panelRows}>
                {CLINICS.map((c) => (
                  <li key={c.site}>
                    <a href={`tel:${c.tel}`}>
                      <span className={s.muted}>{c.short}</span>
                      <span className={s.num}>{c.phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={`${s.contactWeek} ${s.weekBox}`}>
            <h2 className={s.h3}>Where I am each day</h2>
            <p className={s.stand}>Regular clinic days. Tuesday is split between two clinics.</p>
            <WeekSchedule className={s.week} />
          </div>
        </div>
      </div>

      {/* Call back: for people who would rather not open a Jane account or ring a desk. */}
      <section className={`${s.wrap} ${s.callWrap}`} aria-label="Request a call back">
        <Reveal as="div">
          <CallbackForm source="contact_callback" variant="sheet" />
        </Reveal>
      </section>

      {/* Clinics: three tiles, each with its own booking page, reception and hours. */}
      <section className={`${s.wrap} ${s.sec} ${s.body}`} aria-labelledby="clinics-heading">
        <div className={s.clinicsHead}>
          <SectionHead id="clinics-heading" title="The three clinics" />
          <p className={s.stand}>
            Each clinic has its own online booking page and reception desk. Book with the one you want to be seen at.
          </p>
        </div>

        <div className={s.clinics}>
          {CLINICS.map((clinic, index) => {
            const days = WEEKLY_HOURS.filter((d) => d.site === clinic.site);
            return (
              <Reveal as="div" key={clinic.site} delay={index * 70}>
                <article aria-labelledby={`clinic-${clinic.site}`} className={s.clinic}>
                <span className={s.logo}>
                  <Image
                    src={clinic.logo.src}
                    alt={clinic.name}
                    width={clinic.logo.width}
                    height={clinic.logo.height}
                    style={{ maxHeight: clinic.logo.maxHeight }}
                  />
                </span>
                {/* The logo carries the identity; the name stays for assistive tech and as the tile label. */}
                <h3 id={`clinic-${clinic.site}`} className="sr-only">
                  {clinic.name}
                </h3>
                <p className={s.addr}>
                  {clinic.lines[0]}
                  <br />
                  {clinic.lines[1]}
                </p>
                <p className={s.links}>
                  <a href={clinic.directions} target="_blank" rel="noopener noreferrer">
                    Directions
                    <ArrowTopRightOnSquareIcon aria-hidden="true" />
                  </a>
                </p>

                <h4 className={s.label}>My hours here</h4>
                <ul className={s.hours}>
                  {days.map((d) => (
                    <li key={`${d.day}-${d.site}`}>
                      <span>{d.day}</span>
                      <span>{d.label}</span>
                    </li>
                  ))}
                </ul>

                <div className={s.foot}>
                  <Link
                    href={clinic.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-booking-source={clinic.bookingSource}
                    className={s.brand}
                    style={{ '--brand': clinic.brand.color, '--brand-hover': clinic.brand.hover, '--brand-ink': clinic.brand.ink } as CSSProperties}
                  >
                    Book online
                    <ArrowTopRightOnSquareIcon aria-hidden="true" />
                  </Link>
                  <p className={s.reception}>
                    Or call reception,{' '}
                    <a href={`tel:${clinic.tel}`}>{clinic.phone}</a>
                    .{clinic.note ? ` ${clinic.note}` : ''}
                  </p>
                </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
