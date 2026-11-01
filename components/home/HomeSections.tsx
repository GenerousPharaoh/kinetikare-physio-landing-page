import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JANE_ASSESSMENT_URL, JANE_BOOKING_URL } from '@/lib/booking';
import { getConditionBySlug } from '@/lib/conditions-data';
import { WEEKLY_HOURS, dayKey, type ClinicSite } from '@/lib/hours';
import { CalendarDaysIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
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

/*
 * Four steps on one gold line (across on laptops, down the side on phones),
 * on the night between the two light sections. Its four drawings came out in
 * round 19 (the page had too many pictures below the hero).
 */
export function HomeJourney() {
  return (
    <section className={`${styles.sec} ${styles.journey} ${styles.onDark}`} aria-labelledby="care-journey-heading">
      <Reveal className={styles.journeyHead}>
        <div>
          <p className={styles.eyebrow}>How care works</p>
          <h2 id="care-journey-heading" className={styles.h2}>
            Your Care Journey
          </h2>
        </div>
        <p className={styles.bodyText}>Four steps, from the first assessment to staying well, with goals you and I track together.</p>
      </Reveal>

      <ol className={styles.journeySteps}>
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} className={styles.journeyStep} delay={i * 110}>
            <h3 className={styles.journeyTitle}>
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className={styles.bodyText}>{step.description}</p>
            <Link
              href={step.link}
              className={styles.textLink}
              {...(step.external ? { target: '_blank', rel: 'noopener noreferrer', 'data-booking-source': 'home_care_journey' } : {})}
            >
              {step.linkText}
              <Arrow />
            </Link>
          </Reveal>
        ))}
      </ol>
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

/** Each clinic gets one colour, used on its timetable blocks and its legend entry. */
const CLINIC: Record<ClinicSite, { name: string; short: string; street: string; tone: string }> = {
  endorphins: { name: 'Endorphins Health & Wellness Centre', short: 'Endorphins', street: '4631 Palladium Way, Unit 6', tone: 'gold' },
  headon: { name: 'Headon Physio', short: 'Headon Physio', street: '1387 Walkers Line', tone: 'cream' },
  physiomax: { name: 'PhysioMax Wellness', short: 'PhysioMax', street: '1035 Brant Street', tone: 'blue' },
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
const AXIS_START = 10;
const AXIS_END = 20;
const hours = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h + m / 60;
};

/**
 * The close. Three ways in, each its own tile (booking is the one gold tile),
 * then the week drawn as a timetable from 10 AM to 8 PM with each clinic in its
 * own colour, so where he is on a given day reads at a glance. The Book tile
 * goes to the Endorphins Jane only (see lib/hours.ts); /contact links each
 * clinic's own booking page.
 */
export function HomeVisit() {
  const clinicsInWeek = (Object.keys(CLINIC) as ClinicSite[]).map((site) => ({
    site,
    ...CLINIC[site],
    days: WEEKLY_HOURS.filter((d) => d.site === site),
  }));

  return (
    <section id="contact" className={`${styles.sec} ${styles.visit} ${styles.onDark}`} aria-labelledby="visit-title" data-booking-source="home_contact">
      <Reveal className={styles.visitHead}>
        <h2 id="visit-title" className={styles.visitTitle}>
          Get in Touch
        </h2>
        <p className={styles.visitLede}>Book online, call reception at Endorphins, or email me with a question first.</p>
      </Reveal>

      <div className={styles.tiles}>
        <Reveal className={styles.tileWrap}>
          <a href={JANE_BOOKING_URL} data-booking-source="home" target="_blank" rel="noopener noreferrer" className={`${styles.tile} ${styles.tileBook}`}>
            <CalendarDaysIcon className={styles.tileIcon} aria-hidden="true" />
            <span className={styles.tileLabel}>Book online</span>
            <span className={styles.tileValue}>
              Book Appointment <Arrow />
            </span>
            <span className={styles.tileNote}>Book an initial assessment online with Kareem at Endorphins in Burlington.</span>
          </a>
        </Reveal>
        <Reveal className={styles.tileWrap} delay={80}>
          <a href="tel:+19056346000" className={styles.tile}>
            <PhoneIcon className={styles.tileIcon} aria-hidden="true" />
            <span className={styles.tileLabel}>Call</span>
            <span className={styles.tileValue}>(905) 634-6000</span>
            <span className={styles.tileNote}>Call reception at Endorphins.</span>
          </a>
        </Reveal>
        <Reveal className={styles.tileWrap} delay={160}>
          <a href="mailto:kareem.hassanein@gmail.com" className={styles.tile}>
            <EnvelopeIcon className={styles.tileIcon} aria-hidden="true" />
            <span className={styles.tileLabel}>Email</span>
            <span className={`${styles.tileValue} ${styles.tileEmail}`}>kareem.hassanein@gmail.com</span>
            <span className={styles.tileNote}>Email me with a question first.</span>
          </a>
        </Reveal>
      </div>

      <Reveal className={styles.schedule}>
        <div className={styles.scheduleHead}>
          <h3 className={styles.scheduleTitle}>Hours</h3>
          <ul className={styles.legend}>
            {clinicsInWeek.map((c) => (
              <li key={c.site} data-tone={c.tone}>
                <span className={styles.swatch} aria-hidden="true" />
                <span>
                  <strong>{c.name}</strong>
                  <span className={styles.legendStreet}>{c.street}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ol className={styles.weekList} aria-label="Hours by day">
          {DAYS.map((day) => (
            <li key={day}>
              <span className={styles.weekDay}>{day.slice(0, 3)}</span>
              <span className={styles.weekSlots}>
                {WEEKLY_HOURS.filter((d) => d.day === day).map((d) => (
                  <span key={dayKey(d)} className={styles.weekSlot} data-tone={CLINIC[d.site].tone}>
                    <strong>{d.label}</strong>
                    <span>{CLINIC[d.site].short}</span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ol>

        <div className={styles.timetable}>
          <ol className={styles.axis} aria-hidden="true">
            {[10, 12, 14, 16, 18, 20].map((h) => (
              <li key={h} style={{ '--at': (h - AXIS_START) / (AXIS_END - AXIS_START) } as CSSProperties}>
                {h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`}
              </li>
            ))}
          </ol>
          <ol className={styles.days}>
            {DAYS.map((day) => (
              <li key={day} className={styles.day}>
                <span className={styles.dayName}>
                  <span className={styles.dayShort} aria-hidden="true">
                    {day.slice(0, 3)}
                  </span>
                  <span className="sr-only">{day}</span>
                </span>
                <ul className={styles.dayTrack}>
                  {WEEKLY_HOURS.filter((d) => d.day === day).map((d) => (
                    <li
                      key={dayKey(d)}
                      className={styles.slot}
                      data-tone={CLINIC[d.site].tone}
                      style={
                        {
                          '--from': (hours(d.opens) - AXIS_START) / (AXIS_END - AXIS_START),
                          '--to': (hours(d.closes) - AXIS_START) / (AXIS_END - AXIS_START),
                        } as CSSProperties
                      }
                    >
                      <span className={styles.slotClinic}>{CLINIC[d.site].short}</span>
                      {/* Keep "3:00 PM" together when a narrow block wraps. */}
                      <span className={styles.slotTime}>{d.label.replace(/ (AM|PM)/g, ' $1')}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.weekFoot}>
          <p className={styles.areas}>Based in Burlington, welcoming patients from nearby communities: {SERVICE_AREAS.join(', ')}.</p>
          <Link href="/contact" className={styles.textLink}>
            Contact and booking at each clinic
            <Arrow />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
