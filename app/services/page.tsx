import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import { SEO_ORGANIZATION_ID } from '@/lib/seo-metadata';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Reveal from '@/components/home/Reveal';
import { geist } from '@/components/conditions/case/fonts';
import styles from '@/components/services/Services.module.css';

// Force static generation for better SEO
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Burlington Physiotherapy Services | Sports Rehab, Dry Needling',
  description: 'Burlington physiotherapy for sports injuries, knee and hip pain, dry needling, cupping, exercise rehab, and post-surgical recovery. Direct billing.',
  metadataBase: new URL('https://www.kinetikarephysio.com'),
  openGraph: {
    siteName: 'Kinetikare',
    title: 'Burlington Physiotherapy Services | Sports Rehab, Dry Needling & Cupping',
    description: 'Sports rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based physiotherapy in Burlington.',
    type: 'website',
    url: 'https://www.kinetikarephysio.com/services',
    images: [{
      url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Kareem Hassanein Physiotherapy Services'
    }]
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/services'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const services = [
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    description: (
      <>
        Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted soft tissue techniques.{' '}
        <Link href="/treatments/joint-mobilization" className={styles.link}>
          Learn about joint mobilization
        </Link>
        {' '}or{' '}
        <Link href="/treatments/soft-tissue-myofascial-release" className={styles.link}>
          myofascial release techniques
        </Link>
        .
      </>
    ),
    features: [
      'Joint mobilization',
      'Soft tissue release techniques',
      'Trigger point therapy',
      'Myofascial release'
    ],
  },
  {
    id: 'sports-rehab',
    title: 'Sports Rehabilitation',
    description: (
      <>
        Rehabilitation for active people recovering from injury, with a planned, tested return to their sport.{' '}
        <Link href="/treatments/sports-rehab-return-to-sport" className={styles.link}>
          Read about my sports rehabilitation approach
        </Link>
        .
      </>
    ),
    features: [
      'Sport-specific movement analysis',
      'Progressive strength training',
      'Functional movement restoration',
      'Return-to-sport testing and programming',
    ],
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    description: (
      <>
        Thin filiform needles placed in tight or tender muscle; it can help ease muscular pain and tension alongside exercise.{' '}
        <Link href="/treatments/dry-needling" className={styles.link}>
          Learn about dry needling
        </Link>
        {' '}or{' '}
        <Link href="/faq" className={styles.link}>
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Trigger point release',
      'Muscle tension',
      'Pain management',
      'Range of motion'
    ],
  },
  {
    id: 'exercise-therapy',
    title: 'Exercise Therapy',
    description: (
      <>
        Customized exercise programs designed to restore function, build strength, and prevent injury recurrence.{' '}
        <Link href="/treatments/exercise-therapy" className={styles.link}>
          Explore exercise therapy
        </Link>
        {' '}or{' '}
        <Link href="/faq" className={styles.link}>
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Strengthening exercises',
      'Functional movement training',
      'Core stabilization',
      'Flexibility and mobility work'
    ],
  },
  {
    id: 'postural-assessment',
    title: 'Posture & Ergonomic Assessment',
    description: (
      <>
        A look at how you sit, stand, move and work, with changes that can ease pain and lower the load on sore areas.{' '}
        <Link href="/treatments/postural-assessment" className={styles.link}>
          Learn about postural assessment
        </Link>
        {' '}or{' '}
        <Link href="/faq" className={styles.link}>
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Movement pattern analysis',
      'Postural correction strategies',
      'Ergonomic recommendations',
      'Preventive care planning'
    ],
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: (
      <>
        Pain education, exercise, and hands-on options such as cupping and IASTM, which can help with short-term pain relief.{' '}
        <Link href="/treatments/cupping-therapy" className={styles.link}>
          Learn about cupping
        </Link>
        ,{' '}
        <Link href="/treatments/iastm" className={styles.link}>
          IASTM
        </Link>
        , or{' '}
        <Link href="/treatments/pain-education" className={styles.link}>
          pain education
        </Link>
        .
      </>
    ),
    features: [
      'Acute and chronic pain treatment',
      'Instrument-assisted soft tissue mobilization (IASTM)',
      'Cupping',
      'Pain education and self-management'
    ],
  },
];

const processSteps = [
  {
    title: "Patient-Led Discovery",
    description: "You lead the way by sharing your experience, concerns, and goals in an open, judgment-free environment.",
  },
  {
    title: "Assessment",
    description: "A thorough evaluation of your condition, medical history, and goals to create a personalized treatment plan.",
  },
  {
    title: "Treatment",
    description: "Manual therapy, exercise and education, chosen from current evidence and your assessment findings.",
  },
  {
    title: "Adaptive Progress",
    description: "Your program changes as you respond to it, and you and I agree on each change.",
  },
];

export default function ServicesPage() {
  // Adds the service catalog to the one business node declared in
  // app/layout.tsx. It must keep that @id: a node without one mints a second
  // business entity for search engines.
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@id": SEO_ORGANIZATION_ID,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Physiotherapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Manual Therapy",
            "description": "Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted soft tissue techniques."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Sports Rehabilitation",
            "description": "Rehabilitation for active people recovering from injury, with a planned, tested return to their sport."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy", 
            "name": "Dry Needling",
            "description": "Thin filiform needles placed in tight or tender muscle; it can help ease muscular pain and tension alongside exercise."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Exercise Therapy",
            "description": "Customized exercise programs designed to restore function, build strength, and prevent injury recurrence."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Posture and Ergonomic Assessment",
            "description": "A look at how you sit, stand, move and work, with changes that can ease pain and lower the load on sore areas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Pain Management",
            "description": "Pain education, exercise, and hands-on options such as cupping and instrument-assisted soft tissue mobilization (IASTM), which can help with short-term pain relief."
          }
        }
      ]
    }
  };

  // Add MedicalProcedure schema for each specific treatment
  const medicalProceduresSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Joint Mobilization",
        "description": "Skilled manual therapy technique to restore joint movement and reduce pain",
        "bodyLocation": "Joints",
        "followup": "Exercise prescription and movement re-education",
        "preparation": "Physical assessment and movement analysis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dry Needling",
        "description": "Therapeutic technique using thin needles to release trigger points and reduce muscle tension",
        "bodyLocation": "Trigger points in muscles",
        "followup": "Stretching and strengthening exercises",
        "preparation": "Identification of trigger points through palpation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Cupping Therapy",
        "description": "Suction cups placed on the skin over muscle; can help with short-term pain and muscle tension",
        "bodyLocation": "Soft tissues",
        "followup": "Movement exercises and self-care instructions",
        "preparation": "Skin assessment and treatment area preparation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "IASTM (Instrument Assisted Soft Tissue Mobilization)",
            "description": "Hand-held instruments used over muscles and tendons; can help with short-term pain and mobility alongside exercise",
        "bodyLocation": "Fascia and soft tissues",
        "followup": "Therapeutic exercises and movement patterns",
        "preparation": "Tissue assessment and movement screening"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Trigger Point Release",
        "description": "Manual pressure technique to deactivate painful trigger points",
        "bodyLocation": "Trigger points in muscles",
        "followup": "Stretching and postural exercises",
        "preparation": "Trigger point mapping and assessment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Movement Analysis",
        "description": "Comprehensive assessment of movement patterns and biomechanics",
        "bodyLocation": "Full body kinetic chain",
        "followup": "Personalized exercise program based on findings",
        "preparation": "Patient history and symptom review"
      }
    ]
  };

  // Breadcrumb schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kinetikarephysio.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.kinetikarephysio.com/services"
      }
    ]
  };

  return (
    <main className={`${styles.page} ${geist.variable}`}>
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(servicesStructuredData),
        }}
      />

      {/* Medical Procedures Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(medicalProceduresSchema),
        }}
      />

      {/* Hero Section */}
      <ServicesHero />

      <section id="services-grid" className={styles.directory} aria-label="Physiotherapy services">
        <div className={styles.wrap}>
          <nav aria-label="Explore services">
            <Reveal as="span" variant="rule" className={styles.accentBar} />
            <p className={`${styles.navLabel} ${styles.mono}`}>Explore services</p>
            <ul className={styles.chips}>
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>
                    {service.title}
                    <ArrowDownIcon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.services}>
            {services.map((service, index) => (
              <Reveal as="div" key={service.id} delay={(index % 2) * 80}>
                <article id={service.id} className={styles.service} tabIndex={-1} aria-labelledby={`${service.id}-heading`}>
                  <h2 id={`${service.id}-heading`} className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceBody}>{service.description}</p>
                  <div className={styles.includes}>
                    <div className={styles.includesInner}>
                      <h3 className={`${styles.includesLabel} ${styles.mono}`}>Includes</h3>
                      <ul className={styles.features}>{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The treatment process */}
      <section data-treatment-process className={styles.process} aria-labelledby="process-heading">
        <div className={styles.wrap}>
          <Reveal as="div" className={styles.secHead}>
            <Reveal as="span" variant="rule" className={styles.accentBar} />
            <span className={`${styles.secLabel} ${styles.mono}`}>Treatment Journey</span>
            <h2 id="process-heading" className={styles.h2}>The Treatment Process</h2>
            <p className={styles.stand}>What to expect when you see me</p>
          </Reveal>
          <ol className={styles.track}>
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 90}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.insurance} aria-labelledby="insurance-heading">
        <div className={styles.wrap}>
          <Reveal as="div" className={styles.secHead}>
            <Reveal as="span" variant="rule" className={styles.accentBar} />
            <p className={`${styles.secLabel} ${styles.mono}`}>Insurance &amp; Billing</p>
            <h2 id="insurance-heading" className={styles.h2}>Insurance Coverage</h2>
            <p className={styles.stand}>Physiotherapy services are covered by most extended health insurance plans</p>
          </Reveal>
          <div className={styles.billing}>
            <div>
              <h3 className={styles.h3}>Direct Billing Available</h3>
              <p className={styles.billingIntro}>Direct billing available with major insurance providers:</p>
              <ul className={styles.providers}>
                {['Canada Life', 'Sun Life', 'Manulife', 'Green Shield Canada', 'Blue Cross', 'Desjardins', 'TELUS Health'].map(provider => <li key={provider}>{provider}</li>)}
              </ul>
              <p className={styles.providerNote}>and many more providers</p>
              <p className={`${styles.feesLabel} ${styles.mono}`}>Session Fees</p>
              <dl className={styles.fees}>
                <div><dt>Initial Assessment (45 min)</dt><dd>$110</dd></div>
                <div><dt>Follow-up (30 min)</dt><dd>$90</dd></div>
                <div><dt>Follow-up (40 min)</dt><dd>$100</dd></div>
                <div><dt>Follow-up (60 min)</dt><dd>$135</dd></div>
              </dl>
            </div>
            <aside className={styles.coverage} aria-labelledby="coverage-help-heading">
              <h3 id="coverage-help-heading" className={styles.h3}>Need Coverage Help?</h3>
              <p>If you&apos;re unsure whether direct billing is available for your plan, reception at Endorphins can check what your plan covers.</p>
              <ul className={styles.rows}>
                <li>Coverage questions answered by reception</li><li>Direct billing at Endorphins and PhysioMax when your plan allows it</li>
              </ul>
              <a href="tel:+19056346000" className={styles.goLine}>
                <PhoneIcon aria-hidden="true" />
                Call reception, (905) 634-6000
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="services-booking-heading">
        <div className={styles.wrap}>
          <div className={styles.closingGrid}>
            <div>
              <p className={`${styles.closingLabel} ${styles.mono}`}>Next Steps</p>
              <h2 id="services-booking-heading" className={styles.closingTitle}>Book an Assessment</h2>
              <p className={styles.closingText}>Book an initial assessment online. No referral is needed, and direct billing is available at Endorphins and PhysioMax.</p>
            </div>
            <div>
              <a href={JANE_ASSESSMENT_URL} data-booking-source="services_page" target="_blank" rel="noopener noreferrer" className={styles.goLight}>
                Book Your Assessment
                <ArrowRightIcon aria-hidden="true" />
              </a>
            </div>
          </div>
          <ul className={styles.trust}>
            {['Direct Insurance Billing', 'Evidence-Informed Treatment', 'Personalized Care'].map(item => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </section>

    </main>
  );
} 
