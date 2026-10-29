import Image from 'next/image';
import Link from 'next/link';
import { JANE_ASSESSMENT_URL, JANE_BOOKING_URL } from '@/lib/booking';
import { getConditionBySlug } from '@/lib/conditions-data';
import { HOURS_BY_CLINIC, dayKey } from '@/lib/hours';
import Print from '@/components/Print';
import { CARE_JOURNEY, ILLUSTRATIONS } from '@/lib/illustrations';
import HomeAtlas, { type AtlasRegion } from './HomeAtlas';
import Reveal from './Reveal';
import Arrow from './Arrow';
import styles from './Home.module.css';

/*
 * The home page's server-rendered sections. Wording is carried over from the
 * previous home page; only arrangement and styling changed.
 */

const REGIONS: (Omit<AtlasRegion, 'conditions'> & { slugs: string[] })[] = [
  {
    key: 'knee',
    title: 'Knee',
    label: 'Knee Pain',
    hub: '/conditions/knee-pain',
    blurb: 'Front, inside, outside, or back-of-knee pain, mapped to the most likely causes.',
    plate: '/images/regions/plate-knee-1024.webp',
    joint: [0.499, 0.508],
    slugs: ['knee-pain-patellofemoral', 'patellar-tendinopathy', 'knee-osteoarthritis', 'meniscus-tears'],
  },
  {
    key: 'hip',
    title: 'Hip',
    label: 'Hip Pain',
    hub: '/conditions/hip-pain',
    blurb: 'Lateral hip, groin, deep buttock pain, and what the pattern usually points to.',
    plate: '/images/regions/plate-hip-1024.webp',
    joint: [0.719, 0.508],
    slugs: ['greater-trochanteric-pain-syndrome', 'hip-osteoarthritis', 'proximal-hamstring-tendinopathy', 'piriformis-syndrome'],
  },
  {
    key: 'foot',
    title: 'Foot & ankle',
    label: 'Foot & Ankle Pain',
    hub: '/conditions/foot-ankle-pain',
    blurb: 'Heel, Achilles, ankle, and forefoot pain, mapped to the most likely causes.',
    plate: '/images/regions/plate-foot-1024.webp',
    joint: [0.25, 0.502],
    slugs: ['plantar-fasciitis', 'achilles-tendinopathy', 'ankle-sprains', 'peroneal-tendinopathy'],
  },
  {
    key: 'shoulder',
    title: 'Shoulder',
    label: 'Shoulder Pain',
    hub: '/conditions/shoulder-pain',
    blurb: 'Rotator cuff, stiffness, impingement, and instability sorted by symptom pattern.',
    plate: '/images/regions/plate-shoulder-1024.webp',
    joint: [0.5, 0.5],
    slugs: ['rotator-cuff-injuries', 'frozen-shoulder', 'shoulder-impingement'],
  },
];

export function HomeAtlasSection() {
  const regions: AtlasRegion[] = REGIONS.map(({ slugs, ...region }) => ({
    ...region,
    conditions: slugs.flatMap((slug) => {
      const condition = getConditionBySlug(slug);
      return condition ? [{ href: `/conditions/${slug}`, name: condition.name }] : [];
    }),
  }));
  return <HomeAtlas regions={regions} />;
}

export function HomeApproach() {
  return (
    <section className={`${styles.sec} ${styles.approach}`} aria-labelledby="approach-title">
      <Reveal className={styles.roomPhoto} variant="clip">
        <Image
          src="/images/endorphins-treatment-room.webp"
          alt="Kareem's treatment room at Endorphins Health and Wellness Centre, Burlington"
          fill
          sizes="(min-width: 1024px) 52vw, 100vw"
          quality={82}
        />
      </Reveal>
      <Reveal className={styles.approachText} delay={120}>
        <p className={styles.eyebrow}>Meet Kareem Hassanein</p>
        <h2 id="approach-title" className={styles.h2}>
          A Physiotherapist Who Has Been There
        </h2>
        <p className={`${styles.bodyText} ${styles.approachLede}`}>
          One-on-one physiotherapy in Burlington, built around finding the root cause of your pain and getting back to feeling your best.
        </p>
        <p className={styles.bodyText}>
          Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was shaped by personal experience, from competitive soccer to navigating my own significant injuries.
        </p>
        <p className={styles.bodyText}>
          I don&apos;t subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs, grounded in targeted manual therapy and evidence-based practice.
        </p>
        <Link href="/about" className={styles.textLink}>
          Learn more about Kareem
          <Arrow />
        </Link>
      </Reveal>
    </section>
  );
}

const STEPS = [
  {
    title: 'Initial Assessment',
    description: 'Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.',
    link: JANE_ASSESSMENT_URL,
    linkText: 'Book an assessment',
    external: true,
  },
  {
    title: 'Treatment Planning',
    description: 'Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.',
    link: '/services',
    linkText: 'View services',
  },
  {
    title: 'Active Treatment',
    description: 'Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.',
    link: '/treatments',
    linkText: 'Treatment methods',
  },
  {
    title: 'Recovery + Prevention',
    description: 'Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.',
    link: '/faq',
    linkText: 'Common questions',
  },
];

export function HomeJourney() {
  return (
    <section className={`${styles.sec} ${styles.journey}`} aria-labelledby="care-journey-heading">
      <Reveal className={styles.journeyHead}>
        <div>
          <p className={styles.eyebrow}>How care works</p>
          <h2 id="care-journey-heading" className={styles.h2}>
            Your Care Journey
          </h2>
        </div>
        <p className={styles.bodyText}>Four steps, from the first assessment to staying well, with goals you and I track together.</p>
      </Reveal>

      <div className={styles.steps}>
        <Reveal className={styles.path} variant="rule" />
        <ol className={styles.stepList}>
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} className={styles.step} delay={180 + i * 140}>
            <Print {...ILLUSTRATIONS[CARE_JOURNEY[i]]} sizes="(min-width: 1024px) 22vw, (min-width: 768px) 180px, 104px" />
            <div className={styles.stepBody}>
              <span className={styles.stepNum} aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className={styles.stepTitle}>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className={styles.stepText}>{step.description}</p>
              <Link
                href={step.link}
                className={styles.textLink}
                {...(step.external ? { target: '_blank', rel: 'noopener noreferrer', 'data-booking-source': 'home_care_journey' } : {})}
              >
                {step.linkText}
                <Arrow />
              </Link>
            </div>
          </Reveal>
        ))}
        </ol>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: 'Manual Therapy',
    description: 'Hands-on techniques including joint mobilization, soft tissue work, and personalized treatment methods.',
    features: ['Joint Mobilization', 'Soft Tissue Techniques', 'Myofascial Release'],
    href: '/treatments/joint-mobilization',
    cta: 'Explore manual therapy',
  },
  {
    title: 'Sports Injury Rehab',
    description: 'Progressive rehabilitation for active people returning from knee, ankle, shoulder, and tendon injuries.',
    features: ['Return-to-Sport Planning', 'Strength Progressions', 'Performance Rehab'],
    href: '/treatments/sports-rehab-return-to-sport',
    cta: 'See sports rehab',
  },
  {
    title: 'Dry Needling',
    description: 'Fine needles placed in tight or tender muscle to help ease pain and stiffness, alongside exercise.',
    features: ['Trigger Point Release', 'Pain Management', 'Muscle Tension'],
    href: '/treatments/dry-needling',
    cta: 'See dry needling',
  },
];

const ADDITIONAL_SERVICES = [
  'Cupping Therapy',
  'Exercise Therapy',
  'Post-Surgical Rehabilitation',
  'Sports Injury Recovery',
  'Movement Assessment',
  'Return-to-Sport Protocols',
];

const INSURERS = ['Canada Life', 'Sun Life', 'Manulife', 'Green Shield', 'Blue Cross', 'Desjardins', 'TELUS Health'];

export function HomeServices() {
  return (
    <section id="services" className={`${styles.sec} ${styles.services}`} aria-labelledby="services-title">
      <div className={styles.servicesMedia}>
        <Reveal className={styles.servicesHead}>
          <p className={styles.eyebrow}>Services</p>
          <h2 id="services-title" className={styles.h2}>
            Physiotherapy Services in Burlington
          </h2>
          <p className={styles.bodyText}>
            Sports rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based care tailored to your recovery goals.
          </p>
        </Reveal>
        <Reveal className={styles.servicePhoto} variant="clip" delay={100}>
          <Image
            src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy-v2.jpg"
            alt="Manual therapy treatment - knee mobilization and stretching technique"
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            quality={82}
          />
        </Reveal>
      </div>

      <div className={styles.servicesBody}>
        <ul className={styles.serviceList}>
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} className={styles.service} delay={i * 90}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.bodyText}>{service.description}</p>
              <p className={styles.features}>{service.features.join('  ·  ')}</p>
              <Link href={service.href} className={styles.textLink}>
                {service.cta}
                <Arrow />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.others}>
          <h3 className={styles.othersTitle}>Other care that can be part of your plan</h3>
          <ul>
            {ADDITIONAL_SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.billing}>
          <p className={styles.billingLine}>Direct billing to most major insurance providers.</p>
          <p className={styles.bodyText}>No referral needed.</p>
          <p className={styles.insurers}>{INSURERS.join('  ·  ')} and more</p>
          <p className={styles.prices}>
            <span>
              <strong>$110</strong> initial assessment
            </span>
            <span>
              <strong>$90</strong> follow-up (30 min)
            </span>
          </p>
          <div className={styles.ctaRow}>
            <a href={JANE_ASSESSMENT_URL} data-booking-source="home" target="_blank" rel="noopener noreferrer" className={styles.btn}>
              Book your assessment
              <Arrow />
            </a>
            <Link href="/fees-and-first-visit" className={styles.textLink}>
              Fees and first visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICE_AREAS = ['Waterdown', 'Oakville', 'Hamilton', 'Flamborough', 'Carlisle'];

export function HomeVisit() {
  return (
    <section id="contact" className={`${styles.sec} ${styles.visit} ${styles.onDark}`} aria-labelledby="visit-title" data-booking-source="home_contact">
      <Reveal className={styles.visitMain}>
        <p className={styles.eyebrow}>Burlington</p>
        <h2 id="visit-title" className={styles.visitTitle}>
          Get in Touch
        </h2>
        <p className={styles.visitLede}>Book online, call reception at Endorphins, or email me with a question first.</p>
        <div className={styles.ctaRow}>
          <a href={JANE_BOOKING_URL} data-booking-source="home" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnLight}`}>
            Book Appointment
            <Arrow />
          </a>
        </div>
        <div className={styles.contactLines}>
          <a href="tel:+19056346000">(905) 634-6000</a>
          <a href="mailto:kareem.hassanein@gmail.com">kareem.hassanein@gmail.com</a>
        </div>
        <p className={styles.address}>
          <strong>Endorphins Health and Wellness Centre</strong>
          4631 Palladium Way, Unit 6
          <br />
          Burlington, ON L7M 0W9
        </p>
        <p className={styles.areas}>Based in Burlington, welcoming patients from nearby communities: {SERVICE_AREAS.join(', ')}.</p>
      </Reveal>

      <Reveal className={styles.visitSide} delay={120}>
        <div className={styles.hours}>
          {HOURS_BY_CLINIC.map((clinic) => (
            <div key={clinic.name} className={styles.clinic}>
              <p className={styles.clinicName}>{clinic.name}</p>
              <p className={styles.clinicStreet}>{clinic.street}</p>
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
        <Link href="/contact" className={styles.textLink}>
          Contact and booking at each clinic
          <Arrow />
        </Link>
      </Reveal>
    </section>
  );
}
