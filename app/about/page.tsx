import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { CPO_REGISTER_URL } from '@/lib/registration';
import { serializeJsonLd } from '@/lib/structured-data';
import { HALO } from '@/components/home/halo';
import { playfairItalic } from '@/components/home/fonts';
import Reveal from '@/components/home/Reveal';
import Arrow from '@/components/home/Arrow';
import styles from '@/components/about/About.module.css';

// SEO Metadata
export const metadata: Metadata = {
  title: 'About Kareem Hassanein | Burlington Physiotherapist',
  description: 'Meet Kareem Hassanein, Registered Physiotherapist, MSc PT, BSc Kin in Burlington. Manual therapy, sports rehabilitation, and evidence-based treatment.',
  metadataBase: new URL('https://www.kinetikarephysio.com'),
  openGraph: {
    siteName: 'Kinetikare',
    title: 'About Kareem Hassanein | Physiotherapist | Burlington & Waterdown',
    description: 'Learn about Kareem Hassanein, Registered Physiotherapist, MSc PT, BSc Kin. Dedicated to providing personalized physiotherapy and manual therapy in Burlington. Serving patients from Waterdown, Hamilton, Oakville and beyond.',
    url: 'https://www.kinetikarephysio.com/about',
    type: 'website',
    images: [{
      url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Kareem Hassanein - Registered Physiotherapist Burlington'
    }]
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/about'
  },
};

const PORTRAIT = '/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png';

// Person schema for Kareem Hassanein
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.kinetikarephysio.com/#person",
  "mainEntityOfPage": "https://www.kinetikarephysio.com/about",
  "name": "Kareem Hassanein",
  "honorificSuffix": "Registered Physiotherapist, MSc PT, BSc Kin",
  "jobTitle": "Registered Physiotherapist",
  "worksFor": { "@id": "https://endorphinshealth.com/#clinic" },
  "affiliation": { "@id": "https://www.kinetikarephysio.com/#organization" },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Robert Gordon University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aberdeen",
        "addressCountry": "Scotland"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "McMaster University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hamilton",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    }
  ],
  "knowsAbout": [
    "Physiotherapy",
    "Manual Therapy",
    "Sports Rehabilitation",
    "Dry Needling",
    "Back Pain Treatment",
    "Sports Injuries",
    "Post-Surgical Rehabilitation"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "College of Physiotherapists of Ontario",
      "identifier": "20079"
    }
  ],
  "image": `https://www.kinetikarephysio.com${PORTRAIT}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4631 Palladium Way, Unit 6",
    "addressLocality": "Burlington",
    "addressRegion": "ON",
    "postalCode": "L7M 0W9",
    "addressCountry": "CA"
  },
  "telephone": "+19056346000",
  "email": "kareem.hassanein@gmail.com",
  "url": "https://www.kinetikarephysio.com/about"
};

const HIGHLIGHTS = ['MSc Physiotherapy', 'Manual Therapy Training', '5+ Years Experience'];

const PHILOSOPHY = [
  { title: 'Root Cause Resolution', text: "I don't just treat symptoms; I investigate underlying movement patterns to address what's truly driving your pain." },
  { title: 'Collaborative Partnership', text: 'Your input is key. I listen, explain clearly, and involve you in every treatment decision.' },
  { title: 'Personalized Progression', text: "Recovery isn't linear. Your treatment evolves with you, adapting to optimize your unique healing journey." },
];

const DRIVES = [
  {
    title: 'Lived Experience',
    text: 'My practice is grounded in firsthand experience, both as a clinician and as someone who has personally worked through recovery. That perspective gives me a deep understanding of what meaningful care requires: attentiveness, respect, and a commitment to walking beside you every step of the way.',
  },
  {
    title: 'Thoughtful, Individualized Care',
    text: 'Every treatment plan is shaped by close observation, clinical insight, and a deep appreciation for your unique needs. I combine manual therapy and movement science with precision and care, ensuring your progress is always intentional, responsive, and clearly guided.',
  },
  {
    title: 'Your Healthcare Advocate',
    text: "I approach care with the same rigour I would expect for myself or my loved ones. Whether it's explaining options, coordinating next steps, or thinking beyond the treatment table, I work to ensure you feel supported, informed, and genuinely cared for at every stage of the process.",
  },
];

const EDUCATION = [
  {
    year: '2020',
    title: 'Master of Science in Physiotherapy',
    place: 'Robert Gordon University, Aberdeen, Scotland',
    href: 'https://www.rgu.ac.uk/study/courses/pgcert-pgdip-msc-physiotherapy-pre-registration',
  },
  {
    year: '2016',
    title: 'Bachelor of Science in Kinesiology',
    note: 'Honours',
    place: 'McMaster University, Hamilton, Ontario',
    href: 'https://kinesiology.mcmaster.ca/',
  },
];

const GROUPS = [
  {
    title: 'Certifications',
    items: [
      { title: 'Manual Therapy', sub: 'Certified', text: 'Certification in orthopaedic manual therapy techniques' },
      { title: 'Certified Dry Needling', sub: 'Practitioner', text: 'Certification in dry needling for trigger point release and pain management' },
      { title: 'Continuing Education', sub: 'Ongoing Professional Development', text: 'Regular courses to keep treatment in line with current evidence' },
    ],
  },
  {
    title: 'Clinical Experience',
    items: [
      { title: '5+ Years Clinical Practice', sub: 'Physiotherapy', text: 'One-on-one care for sports injuries, joint and tendon pain, and recovery after surgery' },
      { title: 'Personal Training', sub: 'Fitness & Conditioning', text: 'Coaching movement and exercise as a personal trainer' },
      { title: 'Assistant Fitness Manager (GoodLife Fitness)', sub: 'Leadership & Operations', text: 'Team management and facility operations in fitness environment' },
    ],
  },
  {
    title: 'Athletic Background',
    items: [
      { title: 'Semi-Professional Soccer', sub: 'Cove Rangers, Scotland', text: 'Competitive experience at high-level football in Scottish leagues' },
      { title: 'Canadian Soccer League', sub: 'Brantford Galaxy', text: 'Semi-professional league experience in Canadian competitive soccer' },
      { title: 'Injury & Recovery Experience', sub: 'Personal Journey', text: 'Firsthand understanding of athletic injury, rehabilitation, and return to sport' },
    ],
  },
];

const COMMITMENTS = [
  { title: 'Thorough Assessment', text: 'A comprehensive evaluation in a comfortable, judgment-free environment' },
  { title: 'Dedicated Attention', text: 'One-on-one, unhurried focus during every treatment session' },
  { title: 'Evidence-Based Care', text: 'Proven interventions combining manual therapy, movement retraining, and self-management' },
];

// The College is named in text, not by its logo (the CPO logo needs the
// College's written consent).
const CLINICS = [
  { name: 'Endorphins Health & Wellness Centre', href: 'https://endorphinshealth.com/', logo: '/images/endorphins-health-and-wellness-centre-logo.png', width: 300, height: 62 },
  { name: 'Headon Physio', href: 'https://headonphysio.ca/', logo: '/images/headon-physio-logo-affiliations.png', width: 298, height: 101 },
  { name: 'PhysioMax Wellness', href: 'https://physiomaxwellness.ca/', logo: '/images/physiomax-wellness-logo.png', width: 512, height: 147 },
];

/*
 * About (October 2026 redesign, in the home page's language: night and
 * ivory in turn, Playfair with a gold italic accent, gold hairlines, no icon
 * cards). His portrait stands on the night in front of the low-poly halo
 * from the home hero. The wording is the previous About page's, arranged
 * anew; nothing was added.
 */
export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }} />

      <main className={`${styles.about} ${playfairItalic.variable}`}>
        <section className={`${styles.sec} ${styles.opening} ${styles.onDark}`} aria-labelledby="about-title">
          <div className={styles.openingText}>
            <p className={styles.eyebrow}>Meet Kareem Hassanein</p>
            <h1 id="about-title" className={styles.title}>
              Registered <em>Physiotherapist</em>
            </h1>
            <p className={styles.lede}>
              One-on-one physiotherapy in Burlington for sports injuries, joint and tendon pain, and recovery after surgery
            </p>
            <ul className={styles.highlights}>
              {HIGHLIGHTS.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className={styles.ctaRow}>
              <a
                href={JANE_BOOKING_URL}
                data-booking-source="about_page"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnLight}`}
              >
                Book an Appointment
                <Arrow />
              </a>
              <Link href="/services" className={styles.textLink}>
                Explore Services
              </Link>
            </div>
          </div>

          <div className={styles.portrait}>
            <div className={styles.halo} aria-hidden="true">
              {HALO.map((band, k) => (
                <svg key={k} className={styles.haloBand} viewBox={band.viewBox} style={{ width: band.size, '--k': k } as CSSProperties}>
                  {band.polys.map((f, i) => (
                    <polygon key={i} points={f.points} fill={f.fill} fillOpacity={f.a} />
                  ))}
                </svg>
              ))}
            </div>
            <Image
              src={PORTRAIT}
              alt="Kareem Hassanein, Registered Physiotherapist"
              width={826}
              height={1169}
              priority
              quality={82}
              sizes="(min-width: 1024px) 34vw, 82vw"
              className={styles.portraitImg}
            />
          </div>
        </section>

        <section className={`${styles.sec} ${styles.story}`} aria-labelledby="story-title">
          {/* The heading holds beside the story on laptops; the quote follows
              below, outside its reach. */}
          <div className={styles.storyMain}>
            <Reveal className={styles.storyHead}>
              <p className={styles.eyebrow}>From Patient to Practitioner</p>
              <h2 id="story-title" className={styles.h2}>
                The Path That Shaped My <em>Practice</em>
              </h2>
            </Reveal>
            <Reveal className={styles.storyBody} delay={100}>
              <p>
                My path to physiotherapy began through personal experience. While playing competitive soccer and studying Kinesiology at{' '}
                <strong>McMaster University</strong>, I suffered significant injuries including disc herniations that required extensive rehabilitation. That challenging recovery journey gave me firsthand insight into what patients go through: the frustration, the setbacks, and the progress. Now serving <strong>Burlington, Waterdown, and surrounding areas</strong>, I combine professional expertise with genuine empathy born from my own recovery experience.
              </p>
              <p>
                This experience shaped my approach when I pursued my <strong>Master&apos;s in Physiotherapy at Robert Gordon University</strong>. Having been through the recovery process myself, I understand the importance of clear communication, realistic expectations, and steady support through every stage of recovery.
              </p>
            </Reveal>
          </div>
          <Reveal as="figure" className={styles.quote}>
            <blockquote>
              <p>
                <span className={styles.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                Having sat on both sides of the treatment table, I recognize the profound difference between being processed through a system and being truly understood.
              </p>
            </blockquote>
            <figcaption>K.H.</figcaption>
          </Reveal>
        </section>

        <section className={`${styles.sec} ${styles.philosophy} ${styles.onDark}`} aria-labelledby="philosophy-title">
          <Reveal>
            <h2 id="philosophy-title" className={styles.h2}>
              Philosophy of Practice
            </h2>
          </Reveal>
          <ul className={styles.principles}>
            {PHILOSOPHY.map((p, i) => (
              <Reveal as="li" key={p.title} className={styles.principle} delay={i * 110}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className={`${styles.sec} ${styles.drives}`} aria-labelledby="drives-title">
          <Reveal>
            <h2 id="drives-title" className={styles.h2}>
              What Drives My <em>Practice</em>
            </h2>
          </Reveal>
          <ul className={styles.driveList}>
            {DRIVES.map((d) => (
              <Reveal as="li" key={d.title} className={styles.drive}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className={`${styles.sec} ${styles.foundation} ${styles.onDark}`} aria-labelledby="foundation-title">
          <Reveal className={styles.foundationHead}>
            <h2 id="foundation-title" className={styles.h2}>
              Professional Foundation
            </h2>
            <p className={styles.bodyText}>Education, certifications, and the work that came before physiotherapy</p>
          </Reveal>
          <div className={styles.record}>
            <Reveal className={styles.recordGroup}>
              <h3 className={styles.recordLabel}>Education</h3>
              <ul>
                {EDUCATION.map((e) => (
                  <li key={e.title} className={styles.recordItem}>
                    <span className={styles.recordYear}>{e.year}</span>
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className={styles.recordTitle}>
                      {e.title}
                    </a>
                    {e.note && <span className={styles.recordSub}>{e.note}</span>}
                    <span className={styles.recordText}>{e.place}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            {GROUPS.map((g, gi) => (
              <Reveal key={g.title} className={styles.recordGroup} delay={((gi + 1) % 2) * 100}>
                <h3 className={styles.recordLabel}>{g.title}</h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item.title} className={styles.recordItem}>
                      <span className={styles.recordTitle}>{item.title}</span>
                      <span className={styles.recordSub}>{item.sub}</span>
                      <span className={styles.recordText}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`${styles.sec} ${styles.commit}`} aria-labelledby="commit-title">
          <Reveal className={styles.commitHead}>
            <p className={styles.eyebrow}>How I Work</p>
            <h2 id="commit-title" className={styles.h2}>
              My Commitment to You
            </h2>
            <p className={styles.bodyText}>What you can expect at every appointment</p>
          </Reveal>
          <ul className={styles.commitList}>
            {COMMITMENTS.map((c, i) => (
              <Reveal as="li" key={c.title} className={styles.commitItem} delay={i * 110}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className={styles.affiliations}>
            <h2 className={styles.affLabel}>Professional Affiliations</h2>
            <ul className={styles.affList}>
              <li className={styles.college}>
                <a href="https://collegept.org/" target="_blank" rel="noopener noreferrer" className={styles.collegeName}>
                  College of Physiotherapists of Ontario
                </a>
                <a href={CPO_REGISTER_URL} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                  Verify Professional Registration
                  <Arrow />
                </a>
              </li>
              {CLINICS.map((c) => (
                <li key={c.name}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={styles.clinicLogo}>
                    <Image src={c.logo} alt={c.name} width={c.width} height={c.height} sizes="200px" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.next}>
            <h2 className={styles.h2}>Take the Next Step</h2>
            <p className={styles.bodyText}>Book your appointment today or contact me with any questions.</p>
            <div className={styles.ctaRow}>
              <a href={JANE_BOOKING_URL} data-booking-source="about_page" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Book an Appointment
                <Arrow />
              </a>
              <Link href="/services" className={styles.textLink}>
                Explore Services
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
