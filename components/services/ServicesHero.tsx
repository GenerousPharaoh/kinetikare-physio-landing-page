import Image from 'next/image';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import styles from './Services.module.css';

/** The Services opening: title, intro and booking, the photo in a dark frame. */
export default function ServicesHero() {
  return (
    <section className={styles.opening} aria-labelledby="services-heading">
      <div className={`${styles.wrap} ${styles.openGrid}`}>
        <div>
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
            <a href={JANE_ASSESSMENT_URL} data-booking-source="services_page" target="_blank" rel="noopener noreferrer" className={styles.goInk}>
              Book Your Assessment
              <ArrowRightIcon aria-hidden="true" />
            </a>
            <a href="#services-grid" className={styles.goLine}>
              Explore services
              <ArrowDownIcon aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className={styles.photo}>
          <div className={styles.photoImg}>
            <Image
              src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy-v2.jpg"
              alt="Hands-on knee mobilization and stretching during physiotherapy treatment"
              fill
              sizes="(min-width: 1280px) 500px, (min-width: 900px) 40vw, 100vw"
              priority
            />
          </div>
          <figcaption className={styles.mono}>Individualized care</figcaption>
        </figure>
      </div>
    </section>
  );
}
