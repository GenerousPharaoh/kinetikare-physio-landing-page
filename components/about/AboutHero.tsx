import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import styles from './About.module.css';

const PORTRAIT = '/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png';

/**
 * The About page's opening, set like a condition page: the name, title and
 * the three facts on the white sheet, and beside them (laptops) a dark panel
 * pinned to the left with his portrait and the booking at its foot. On
 * phones the panel follows the opening as a dark block holding the portrait
 * only. Returns two grid children of the page shell, opening first, so the
 * reading order is the same at every width.
 */
export default function AboutHero() {
  return (
    <>
      <header className={styles.opening}>
        <div className={styles.openInner}>
          <p className={`${styles.kicker} ${styles.mono}`}>
            <i aria-hidden="true" />
            Meet Kareem Hassanein
          </p>
          <h1 className={styles.h1}>Registered Physiotherapist</h1>
          <p className={styles.summary}>
            One-on-one physiotherapy in Burlington for sports injuries, joint and tendon pain, and recovery after surgery
          </p>
          <ul className={styles.facts} role="list">
            <li>
              <i aria-hidden="true" />
              MSc Physiotherapy
            </li>
            <li>
              <i aria-hidden="true" />
              Manual Therapy Training
            </li>
            <li>
              <i aria-hidden="true" />
              5+ Years Experience
            </li>
          </ul>
        </div>
      </header>

      <aside className={styles.panel} aria-label="Kareem Hassanein">
        <div className={styles.viewer}>
          <Image
            src={PORTRAIT}
            alt="Kareem Hassanein, Registered Physiotherapist"
            fill
            priority
            quality={82}
            sizes="(min-width: 1360px) 376px, (min-width: 1024px) 316px, (min-width: 640px) 436px, calc(100vw - 64px)"
          />
        </div>
        <div className={styles.panelFoot}>
          <h2 className={styles.panelTitle}>Take the Next Step</h2>
          <a href={JANE_BOOKING_URL} data-booking-source="about_page" target="_blank" rel="noopener noreferrer" className={styles.goLight}>
            Book Appointment
            <ArrowRightIcon aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}
