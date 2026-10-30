'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CPO_REGISTER_URL } from '@/lib/registration';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';
import { WEEKLY_HOURS, dayKey, type ClinicSite } from '@/lib/hours';
import styles from './Footer.module.css';

const mapHref = 'https://maps.app.goo.gl/syZN4FUBgACrtqgK9';

const EXPLORE = [
  { href: '/services', label: 'Services' },
  { href: '/conditions', label: 'Conditions' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/fees-and-first-visit', label: 'Fees & first visit' },
  { href: '/contact', label: 'Contact' },
];

const TREATMENT_AREAS = [
  { href: '/conditions/knee-pain', label: 'Knee pain' },
  { href: '/conditions/hip-pain', label: 'Hip pain' },
  { href: '/conditions/foot-ankle-pain', label: 'Foot & ankle pain' },
  { href: '/conditions/shoulder-pain', label: 'Shoulder pain' },
  { href: '/conditions/pain-guides', label: 'Pain guides' },
];

/** Short names and colours shared with the home page's timetable. */
const CLINIC: Record<ClinicSite, { short: string; tone: string }> = {
  endorphins: { short: 'Endorphins', tone: 'gold' },
  headon: { short: 'Headon Physio', tone: 'cream' },
  physiomax: { short: 'PhysioMax', tone: 'blue' },
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

/**
 * The usual hours for today's weekday in Burlington, worded as the weekday
 * ("Thursdays") rather than as a live status, so a holiday never makes it
 * wrong. Filled in after mount: the server cannot know the visitor's day.
 */
function TodayLine() {
  const [line, setLine] = useState<{ day: string; text: string } | null>(null);
  useEffect(() => {
    const day = new Intl.DateTimeFormat('en-CA', { weekday: 'long', timeZone: 'America/Toronto' }).format(new Date());
    const slots = WEEKLY_HOURS.filter((d) => d.day === day);
    setLine({
      day: `${day}s`,
      text: slots.length ? slots.map((d) => `${CLINIC[d.site].short}, ${d.label}`).join(' · ') : 'No regular hours',
    });
  }, []);
  if (!line) return <p className={styles.today} aria-hidden="true" />;
  return (
    <p className={styles.today}>
      <span className={styles.todayDot} aria-hidden="true" />
      <span className={styles.todayDay}>{line.day}</span>
      <span>{line.text}</span>
    </p>
  );
}

/**
 * The site footer, set as a closing cover: the slogan large with a booking
 * badge that turns as you scroll, the usual hours for today's weekday, the
 * week (where a page does not already show it), four columns and the legal
 * line. (A large sign-off of his name was removed at his request.)
 *
 * /intake (the ads landing page) and /contact get the concise version (no
 * booking badge); the home page carries the full timetable right above, so
 * its footer skips the week.
 */
export default function Footer() {
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;
  const concise = isIntakePage || pathname === '/contact';
  const hideWeek = concise || pathname === '/';

  const footerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ['start end', 'end end'] });
  // Contents start a little higher and settle as the footer scrolls in, so the
  // page reads as lifting off it; the badge turns half a revolution meanwhile.
  const lift = useTransform(scrollYProgress, [0, 1], [reduce ? '0%' : '-18%', '0%']);
  const turn = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);

  return (
    // data-site-chrome: scripts/content-dates.mjs leaves the footer out of each
    // page's fingerprint, so a footer change does not re-date every page.
    <footer ref={footerRef} className={`site-footer ${styles.footer}`} data-site-chrome="">
      <div className={styles.glow} aria-hidden="true" />
      <motion.div className={styles.inner} style={{ y: lift }}>
        <div className={styles.topBar}>
          <Link href="/" className={`text-white ${styles.brand}`} aria-label="Kinetikare Physiotherapy home">
            <Image src="/images/kinetikare-logo-without-text.webp" alt="" width={56} height={70} className={styles.logo} />
            <span className={styles.wordmark}>
              Kinetikare <small>Physiotherapy</small>
            </span>
          </Link>
          <TodayLine />
        </div>

        <div className={styles.statementRow}>
          <p className={styles.statement}>
            The Science of Recovery.
            <em>The Art of Care.</em>
          </p>
          {!concise && (
            <a
              href={JANE_BOOKING_URL}
              data-booking-source="footer"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white ${styles.badge}`}
              aria-label="Book an assessment"
            >
              <motion.svg className={styles.badgeRing} viewBox="0 0 200 200" style={{ rotate: turn }} aria-hidden="true">
                <defs>
                  <path id="footer-badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href="#footer-badge-circle" textLength="488">
                    Book an assessment · Book an assessment ·
                  </textPath>
                </text>
              </motion.svg>
              <span className={styles.badgeCore} aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          )}
        </div>

        {!hideWeek && (
          <ol className={styles.week} aria-label="Hours">
            {DAYS.map((day) => (
              <li key={day}>
                <span className={styles.weekDay}>{day.slice(0, 3)}</span>
                <span className="sr-only">{day}</span>
                {WEEKLY_HOURS.filter((d) => d.day === day).map((d) => (
                  <span key={dayKey(d)} className={styles.weekSlot} data-tone={CLINIC[d.site].tone}>
                    <span className={styles.weekTime}>{d.label}</span>
                    <span className={styles.weekClinic}>{CLINIC[d.site].short}</span>
                  </span>
                ))}
              </li>
            ))}
            <li className={styles.weekNote}>Direct billing only at Endorphins</li>
          </ol>
        )}

        {!isIntakePage && (
          <nav className={styles.columns} aria-label="Footer navigation">
            <div>
              <h2>Explore</h2>
              <ul>
                {EXPLORE.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} prefetch={false} className="text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Treatment Areas</h2>
              <ul>
                {TREATMENT_AREAS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} prefetch={false} className="text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Visit</h2>
              <address className={styles.address}>
                Endorphins Health &amp; Wellness Centre
                <br />
                4631 Palladium Way, Unit 6
                <br />
                Burlington, ON L7M 0W9
              </address>
              <ul>
                <li>
                  <a href={mapHref} target="_blank" rel="noopener noreferrer" className="text-white">
                    Directions
                  </a>
                </li>
                <li>
                  <Link href="/contact" prefetch={false} className="text-white">
                    Contact and booking at each clinic
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Connect</h2>
              <ul>
                <li>
                  <a href="tel:+19056346000" className="text-white">
                    (905) 634-6000
                  </a>
                </li>
                <li>
                  <a href="mailto:kareem.hassanein@gmail.com" className={`text-white ${styles.email}`}>
                    kareem.hassanein@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kareemhassanein" target="_blank" rel="noopener noreferrer" className="text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={CPO_REGISTER_URL} target="_blank" rel="noopener noreferrer" className={`text-white ${styles.registration}`}>
                    <ShieldCheckIcon aria-hidden="true" />
                    CPO Verified Registration
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Kinetikare Physiotherapy. Kareem Hassanein, Registered Physiotherapist.</p>
          <nav aria-label="Legal information" className={styles.legal}>
            <Link href="/privacy" prefetch={false} className="text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" prefetch={false} className="text-white">
              Terms of Service
            </Link>
            <Link href="/accessibility" prefetch={false} className="text-white">
              Accessibility
            </Link>
          </nav>
        </div>
      </motion.div>
    </footer>
  );
}
