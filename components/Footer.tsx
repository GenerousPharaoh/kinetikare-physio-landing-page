'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CPO_REGISTER_URL } from '@/lib/registration';
import { ChevronDownIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';
import { HOURS_BY_CLINIC } from '@/lib/hours';
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

function FooterMap() {
  const [showMap, setShowMap] = useState(false);
  return (
    <details className={styles.map} onToggle={(event) => setShowMap(event.currentTarget.open)}>
      <summary>
        View location map <ChevronDownIcon aria-hidden="true" />
      </summary>
      {showMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.519514705003!2d-79.82862318760941!3d43.40797126813572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61c9d9d9c40f%3A0xadd452d206e4b1b3!2sKareem%20Hassanein%20-%20Registered%20Physiotherapist!5e0!3m2!1sen!2sus!4v1780331305119!5m2!1sen!2sus"
          width="100%"
          height="220"
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
          title="Kareem Hassanein, Registered Physiotherapist location"
        />
      )}
    </details>
  );
}

/**
 * The site footer. Identity and booking on the left, the site in three short
 * columns, then (except where the page already shows them) the address, map
 * and hours, and his name set very large as the sign-off.
 *
 * /intake (the ads landing page) and /contact get the concise version; the
 * home page carries a full contact section right above, so its footer skips
 * the address, map and hours.
 */
export default function Footer() {
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;
  const concise = isIntakePage || pathname === '/contact';
  const hideDetails = concise || pathname === '/';

  return (
    <footer className={`site-footer ${styles.footer}`} data-compact={hideDetails || undefined}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <Link href="/" className={`text-white ${styles.brand}`} aria-label="Kinetikare Physiotherapy home">
              <Image src="/images/kinetikare-logo-without-text.webp" alt="" width={56} height={70} className={styles.logo} />
              <span className={styles.wordmark}>
                Kinetikare <small>Physiotherapy</small>
              </span>
            </Link>
            <p className={styles.practitioner}>
              Kareem Hassanein
              <span>Registered Physiotherapist</span>
            </p>
            <p className={styles.slogan}>
              The Science of Recovery. <em>The Art of Care.</em>
            </p>
            {!concise && (
              <div className={styles.actions}>
                <a href={JANE_BOOKING_URL} data-booking-source="footer" target="_blank" rel="noopener noreferrer" className={`button-gold ${styles.booking}`}>
                  <span>Book Online</span>
                </a>
                <a href={CPO_REGISTER_URL} target="_blank" rel="noopener noreferrer" className={`text-white ${styles.registration}`}>
                  <ShieldCheckIcon aria-hidden="true" />
                  <span>CPO Verified Registration</span>
                </a>
              </div>
            )}
          </div>

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
                </ul>
              </div>
            </nav>
          )}
        </div>

        {!hideDetails && (
          <div className={styles.details}>
            <div className={styles.location}>
              <h2>Visit the clinic</h2>
              <address>
                <p>Endorphins Health &amp; Wellness Centre</p>
                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="text-white">
                  4631 Palladium Way, Unit 6
                  <br />
                  Burlington, ON L7M 0W9
                </a>
              </address>
              <FooterMap />
            </div>
            <div className={styles.hours}>
              <h2>Hours</h2>
              <div className={styles.hoursGrid}>
                {HOURS_BY_CLINIC.map((group) => (
                  <div key={group.name} className={styles.hoursGroup}>
                    <h3>
                      {group.name}
                      <span>{group.street}</span>
                    </h3>
                    <dl>
                      {group.days.map((d) => (
                        <div key={d.day}>
                          <dt>{d.day}</dt>
                          <dd>{d.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              <p className={styles.hoursNote}>Direct billing only at Endorphins</p>
            </div>
          </div>
        )}

        <p className={styles.signoff} aria-hidden="true">
          Kareem Hassanein
        </p>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Kinetikare Physiotherapy. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
