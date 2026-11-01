import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { FIGURES, figureMask } from '@/lib/figures';
import styles from './Services.module.css';

const FIGURE = FIGURES.sitToStand;

/**
 * The Services opening: dark, the title, the line and the booking beside
 * one of Kareem's illustrations of himself, which rises in as the page
 * loads.
 */
export default function ServicesHero() {
  return (
    <section className={styles.opening} aria-labelledby="services-heading">
      <div className={`${styles.wrap} ${styles.openGrid}`}>
        <div className={styles.openText}>
          <p className={`${styles.kicker} ${styles.mono}`}>
            <i aria-hidden="true" />
            Burlington Physiotherapy
          </p>
          <h1 id="services-heading" className={styles.h1}>
            Physiotherapy<br />Services in Burlington
          </h1>
          <p className={styles.summary}>
            Sports injury rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based care tailored to your goals
          </p>
          <div className={styles.actions}>
            <a href={JANE_ASSESSMENT_URL} data-booking-source="services_page" target="_blank" rel="noopener noreferrer" className={styles.goLight}>
              Book Your Assessment
              <ArrowRightIcon aria-hidden="true" />
            </a>
            <a href="#services-grid" className={styles.goGhost}>
              Explore services
              <ArrowDownIcon aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className={styles.openArt}>
          <div className={`${styles.fig} ${styles.openFig}`} style={{ '--ar': FIGURE.aspect } as CSSProperties}>
            <Image
              src={FIGURE.src}
              alt={FIGURE.label}
              fill
              sizes="(min-width: 1360px) 540px, (min-width: 900px) 44vw, 100vw"
              quality={82}
              priority
              style={figureMask(FIGURE.fade)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
