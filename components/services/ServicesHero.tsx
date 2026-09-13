import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import styles from './Services.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-heading">
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Burlington Physiotherapy</p>
          <h1 id="services-heading">Physiotherapy<br /><span>Services in Burlington</span></h1>
          <p className={styles.heroIntro}>Sports injury rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based care tailored to your goals</p>
          <div className={styles.heroActions}>
            <a href={JANE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${styles.primary} button-gold`}>
              <span>Book Your Assessment</span>
            </a>
            <a href="#services-grid" className={styles.textLink}>Explore services <ArrowDownIcon aria-hidden="true" /></a>
          </div>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy-v2.jpg" alt="Hands-on knee mobilization and stretching during physiotherapy treatment" fill sizes="(min-width: 1200px) 500px, (min-width: 768px) 40vw, 100vw" priority />
          <figcaption>Individualized care</figcaption>
        </figure>
      </div>
    </section>
  );
}
