import { JANE_BOOKING_URL } from '@/lib/booking';
import { CPO_REGISTER_URL } from '@/lib/registration';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';
import { ArrowRightIcon, ArrowUpRightIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import AboutHero from '@/components/about/AboutHero';
import Reveal from '@/components/home/Reveal';
import { geist } from '@/components/conditions/case/fonts';
import styles from '@/components/about/About.module.css';

const PORTRAIT = '/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png';

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

/** A section title: the short cobalt bar, an optional label, the heading. */
function Head({ title, label, stand }: { title: string; label?: string; stand?: string }) {
  return (
    <Reveal as="div" className={styles.secHead}>
      <Reveal as="span" variant="rule" className={styles.accentBar} />
      {label && <span className={`${styles.secLabel} ${styles.mono}`}>{label}</span>}
      <h2 className={styles.h2}>{title}</h2>
      {stand && <p className={styles.stand}>{stand}</p>}
    </Reveal>
  );
}

const philosophy = [
  {
    title: 'Root Cause Resolution',
    body: "I don't just treat symptoms; I investigate underlying movement patterns to address what's truly driving your pain.",
  },
  {
    title: 'Collaborative Partnership',
    body: 'Your input is key. I listen, explain clearly, and involve you in every treatment decision.',
  },
  {
    title: 'Personalized Progression',
    body: "Recovery isn't linear. Your treatment evolves with you, adapting to optimize your unique healing journey.",
  },
];

const drives = [
  {
    title: 'Lived Experience',
    body: 'My practice is grounded in firsthand experience, both as a clinician and as someone who has personally worked through recovery. That perspective gives me a deep understanding of what meaningful care requires: attentiveness, respect, and a commitment to walking beside you every step of the way.',
  },
  {
    title: 'Thoughtful, Individualized Care',
    body: 'Every treatment plan is shaped by close observation, clinical insight, and a deep appreciation for your unique needs. I combine manual therapy and movement science with precision and care, ensuring your progress is always intentional, responsive, and clearly guided.',
  },
  {
    title: 'Your Healthcare Advocate',
    body: "I approach care with the same rigour I would expect for myself or my loved ones. Whether it's explaining options, coordinating next steps, or thinking beyond the treatment table, I work to ensure you feel supported, informed, and genuinely cared for at every stage of the process.",
  },
];

const affiliations = [
  { key: 'cpo', href: 'https://collegept.org/', src: '/images/college-of-physiotherapists-of-ontario-logo.webp', alt: 'College of Physiotherapists of Ontario', w: 140, h: 70 },
  { key: 'endorphins', href: 'https://endorphinshealth.com/', src: '/images/endorphins-health-and-wellness-centre-logo.png', alt: 'Endorphins Health & Wellness Centre', w: 140, h: 70 },
  { key: 'headon', href: 'https://headonphysio.ca/', src: '/images/headon-physio-logo-affiliations.png', alt: 'Headon Physio', w: 140, h: 70 },
  { key: 'physiomax', href: 'https://physiomaxwellness.ca/', src: '/images/physiomax-wellness-logo.png', alt: 'PhysioMax Wellness', w: 140, h: 40 },
];

const schools = [
  {
    href: 'https://www.rgu.ac.uk/study/courses/pgcert-pgdip-msc-physiotherapy-pre-registration',
    logo: '/images/robert-gordon-university-logo-png_seeklogo-341455.png',
    logoAlt: 'Robert Gordon University',
    name: 'Master of Science in Physiotherapy',
    place: 'Robert Gordon University, Aberdeen, Scotland',
    year: '2020',
    honours: false,
  },
  {
    href: 'https://kinesiology.mcmaster.ca/',
    logo: '/images/mcmaster-university-logo-png_seeklogo-90018.png',
    logoAlt: 'McMaster University',
    name: 'Bachelor of Science in Kinesiology',
    place: 'McMaster University, Hamilton, Ontario',
    year: '2016',
    honours: true,
  },
];

const foundation = [
  {
    title: 'Certifications',
    entries: [
      { title: 'Manual Therapy', sub: 'Certified', body: 'Certification in orthopaedic manual therapy techniques' },
      { title: 'Certified Dry Needling', sub: 'Practitioner', body: 'Certification in dry needling for trigger point release and pain management' },
      { title: 'Continuing Education', sub: 'Ongoing Professional Development', body: 'Regular courses to keep treatment in line with current evidence' },
    ],
  },
  {
    title: 'Clinical Experience',
    entries: [
      { title: '5+ Years Clinical Practice', sub: 'Physiotherapy', body: 'One-on-one care for sports injuries, joint and tendon pain, and recovery after surgery' },
      { title: 'Personal Training', sub: 'Fitness & Conditioning', body: 'Coaching movement and exercise as a personal trainer' },
      { title: 'Assistant Fitness Manager (GoodLife Fitness)', sub: 'Leadership & Operations', body: 'Team management and facility operations in fitness environment' },
    ],
  },
  {
    title: 'Athletic Background',
    entries: [
      { title: 'Semi-Professional Soccer', sub: 'Cove Rangers, Scotland', body: 'Competitive experience at high-level football in Scottish leagues' },
      { title: 'Canadian Soccer League', sub: 'Brantford Galaxy', body: 'Semi-professional league experience in Canadian competitive soccer' },
      { title: 'Injury & Recovery Experience', sub: 'Personal Journey', body: 'Firsthand understanding of athletic injury, rehabilitation, and return to sport' },
    ],
  },
];

export default function About() {
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
    "image": "https://www.kinetikarephysio.com/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png",
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

  const commitmentItems = [
    {
      id: 'assessment',
      title: 'Thorough Assessment',
      description: 'A comprehensive evaluation in a comfortable, judgment-free environment',
    },
    {
      id: 'attention',
      title: 'Dedicated Attention',
      description: 'One-on-one, unhurried focus during every treatment session',
    },
    {
      id: 'evidence',
      title: 'Evidence-Based Care',
      description: 'Proven interventions combining manual therapy, movement retraining, and self-management',
    }
  ];

  return (
    <>
      {/* Person Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
      />

      <main className={`${styles.page} ${geist.variable}`}>
        <div className={styles.shell}>
          {/* The opening and the portrait panel */}
          <AboutHero />

          <div className={styles.sheet}>
            <div className={styles.column}>
              {/* The story */}
              <section>
                <Head title="The Path That Shaped My Practice" />
                <div className={styles.prose}>
                  <p>
                    My path to physiotherapy began through personal experience. While playing competitive soccer and studying Kinesiology at{' '}
                    <strong>McMaster University</strong>, I suffered significant injuries including disc herniations that required extensive rehabilitation. That challenging recovery journey gave me firsthand insight into what patients go through: the frustration, the setbacks, and the progress. Now serving <strong>Burlington, Waterdown, and surrounding areas</strong>, I combine professional expertise with genuine empathy born from my own recovery experience.
                  </p>
                  <p>
                    This experience shaped my approach when I pursued my{' '}
                    <strong>Master&apos;s in Physiotherapy at Robert Gordon University</strong>. Having been through the recovery process myself, I understand the importance of clear communication, realistic expectations, and steady support through every stage of recovery.
                  </p>
                </div>

                <Reveal as="figure" className={styles.insight}>
                  <span className={`${styles.insightLabel} ${styles.mono}`}>Personal Insight</span>
                  <p className={styles.insightTitle}>From Patient to Practitioner</p>
                  <blockquote>
                    &quot;Having sat on both sides of the treatment table, I recognize the profound difference between being processed through a system and being truly understood.&quot;
                  </blockquote>
                  <figcaption>
                    <i aria-hidden="true" />
                    <cite>K.H.</cite>
                  </figcaption>
                </Reveal>
              </section>

              {/* Philosophy of Practice */}
              <section>
                <Head title="Philosophy of Practice" />
                <ul className={styles.points} role="list">
                  {philosophy.map((item, i) => (
                    <Reveal as="li" key={item.title} delay={i * 70}>
                      <h3 className={styles.pointTitle}>
                        <i aria-hidden="true" />
                        {item.title}
                      </h3>
                      <p className={styles.pointBody}>{item.body}</p>
                    </Reveal>
                  ))}
                </ul>
              </section>

              {/* What Drives My Practice */}
              <section>
                <Head title="What Drives My Practice" />
                <div className={styles.prose}>
                  {drives.map((item) => (
                    <Reveal as="div" key={item.title} className={styles.opener}>
                      <h3 className={`${styles.lead} ${styles.mono}`}>{item.title}</h3>
                      <p>{item.body}</p>
                    </Reveal>
                  ))}
                </div>
              </section>

              {/* Professional Affiliations */}
              <section>
                <Head title="Professional Affiliations" />
                <div className={styles.logos}>
                  {affiliations.map((c) => (
                    <Link key={c.alt} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.logo} data-logo={c.key}>
                      <Image src={c.src} alt={c.alt} width={c.w} height={c.h} />
                    </Link>
                  ))}
                </div>
                <div className={styles.verify}>
                  <span className={styles.verified}>
                    <CheckBadgeIcon aria-hidden="true" />
                    Registration Verified
                  </span>
                  <Link href={CPO_REGISTER_URL} target="_blank" rel="noopener noreferrer" className={styles.goLine}>
                    Verify <span className={styles.wideOnly}>Professional </span>Registration
                    <ArrowUpRightIcon aria-hidden="true" />
                  </Link>
                </div>
              </section>

              {/* Professional Foundation */}
              <section>
                <Head title="Professional Foundation" stand="Education, certifications, and the work that came before physiotherapy" />

                <div className={styles.group}>
                  <h3 className={`${styles.groupLabel} ${styles.mono}`}>Education</h3>
                  <div className={styles.schools}>
                    {schools.map((school, i) => (
                      <Reveal as="div" key={school.name} delay={i * 70}>
                        <Link href={school.href} target="_blank" rel="noopener noreferrer" className={styles.school}>
                          <span className={styles.schoolLogo}>
                            <Image src={school.logo} alt={school.logoAlt} width={96} height={96} />
                          </span>
                          <div>
                            <h4 className={styles.schoolName}>{school.name}</h4>
                            <span className={styles.schoolPlace}>{school.place}</span>
                            <span className={styles.schoolMeta}>
                              <span className={styles.mono}>{school.year}</span>
                              {school.honours && <span className={`${styles.honours} ${styles.mono}`}>Honours</span>}
                            </span>
                          </div>
                          <ArrowUpRightIcon aria-hidden="true" />
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {foundation.map((group) => (
                  <div key={group.title} className={styles.group}>
                    <h3 className={`${styles.groupLabel} ${styles.mono}`}>{group.title}</h3>
                    <dl className={styles.entries}>
                      {group.entries.map((entry) => (
                        <div key={entry.title}>
                          <dt>
                            {entry.title}
                            <span className={styles.entrySub}>{entry.sub}</span>
                          </dt>
                          <dd>{entry.body}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </section>

              {/* My Commitment to You */}
              <section>
                <Head title="My Commitment to You" label="How I Work" stand="What you can expect at every appointment" />
                <ul className={styles.promises} role="list">
                  {commitmentItems.map(({ id, title, description }, i) => (
                    <Reveal as="li" key={id} delay={i * 80}>
                      <h3 className={styles.promiseTitle}>{title}</h3>
                      <p className={styles.promiseBody}>{description}</p>
                    </Reveal>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        {/* Closing */}
        <section className={styles.closing}>
          <div className={styles.closingInner}>
            <div>
              <div className={styles.avatar} aria-hidden="true">
                <Image src={PORTRAIT} alt="" fill sizes="64px" />
              </div>
              <h2 className={styles.closingTitle}>Take the Next Step</h2>
              <p className={styles.closingText}>Book your appointment today or contact me with any questions.</p>
            </div>
            <div className={styles.closingActions}>
              <Link
                href={JANE_BOOKING_URL} data-booking-source="about_page"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.goLight}
              >
                Book an Appointment
                <ArrowRightIcon aria-hidden="true" />
              </Link>
              <Link href="/services" className={styles.goDark}>
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
