'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';
import styles from './Footer.module.css';

import { SITE_FOOTNOTES, WEEKLY_HOURS, dayKey, dayLabel } from '@/lib/hours';
const mapHref = 'https://maps.app.goo.gl/syZN4FUBgACrtqgK9';
const businessHours = WEEKLY_HOURS.map((d) => ({ key: dayKey(d), day: dayLabel(d), hours: d.label }));

function FooterMap() {
  const [showMap, setShowMap] = useState(false);
  return (
    <details className={styles.map} onToggle={event => setShowMap(event.currentTarget.open)}>
      <summary>View location map <ChevronDownIcon aria-hidden="true" /></summary>
      {showMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.519514705003!2d-79.82862318760941!3d43.40797126813572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61c9d9d9c40f%3A0xadd452d206e4b1b3!2sKareem%20Hassanein%20-%20Registered%20Physiotherapist!5e0!3m2!1sen!2sus!4v1780331305119!5m2!1sen!2sus"
          width="100%" height="220" loading="lazy" allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
          title="Kareem Hassanein, Registered Physiotherapist location"
        />
      )}
    </details>
  );
}

export default function Footer() {
  const isIntakePage = usePathname() === BOOKING_PAGE_PATH;
  return (
    <footer className={`site-footer ${styles.footer}`} data-compact={isIntakePage || undefined}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.identity}>
            <Link href="/" className={`text-white ${styles.brand}`} aria-label="KinetiKare Physiotherapy home">
              <Image src="/images/kinetikare-logo-without-text.webp" alt="" width={56} height={70} className={styles.logo} />
              <p className={styles.wordmark}>Kineti<span>K</span>are<small>Physiotherapy</small></p>
            </Link>
            <p className={styles.practitioner}>Kareem Hassanein<span>Registered Physiotherapist</span></p>
            {!isIntakePage && <>
              <a href={JANE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`button-gold ${styles.booking}`}><span>Book Online</span></a>
              <a href="https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4" target="_blank" rel="noopener noreferrer" className={`text-white ${styles.registration}`}><ShieldCheckIcon aria-hidden="true" /><span>CPO Verified Registration</span></a>
            </>}
          </div>

          {!isIntakePage && <div className={styles.details}>
            <div className={styles.contactRow}>
              <a href="tel:+19056346000" className={`text-white ${styles.phone}`}>(905) 634-6000</a>
              <a href="mailto:kareem.hassanein@gmail.com" className={`text-white ${styles.email}`}>kareem.hassanein@gmail.com</a>
            </div>
            <div className={styles.visitGrid}>
              <div className={styles.location}>
                <h2>Visit the clinic</h2>
                <address>
                  <p>Endorphins Health &amp; Wellness Centre</p>
                  <a href={mapHref} target="_blank" rel="noopener noreferrer" className="text-white">4631 Palladium Way, Unit 6<br />Burlington, ON L7M 0W9</a>
                </address>
                <FooterMap />
              </div>
              <div className={styles.hours}>
                <h2>Hours</h2>
                <dl>{businessHours.map(schedule => <div key={schedule.key}><dt>{schedule.day}</dt><dd>{schedule.hours}</dd></div>)}</dl>
                <p className={styles.hoursNote}>{SITE_FOOTNOTES.map((f) => `${f.mark} ${f.text}`).join('  ')}<br />Direct billing only at Endorphins</p>
              </div>
            </div>
          </div>}
        </div>

        {!isIntakePage && <div className={styles.navigationRow}>
          <nav aria-label="Footer navigation">
            <ul>{[{href:'/services',label:'Services'},{href:'/conditions',label:'Conditions'},{href:'/about',label:'About'},{href:'/faq',label:'FAQ'},{href:'/contact',label:'Contact'}].map(link => <li key={link.href}><Link href={link.href} prefetch={false} className="text-white">{link.label}</Link></li>)}</ul>
          </nav>
          <a href="https://www.linkedin.com/in/kareemhassanein" target="_blank" rel="noopener noreferrer" className={`text-white ${styles.social}`}>LinkedIn</a>
        </div>}

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} KinetiKare Physiotherapy. All rights reserved.</p>
          <nav aria-label="Legal information" className={styles.legal}>
            <Link href="/privacy" prefetch={false} className="text-white">Privacy Policy</Link>
            <Link href="/terms" prefetch={false} className="text-white">Terms of Service</Link>
            <Link href="/accessibility" prefetch={false} className="text-white">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
