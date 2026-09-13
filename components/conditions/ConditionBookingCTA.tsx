import Link from 'next/link';
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import styles from './ConditionBookingCTA.module.css';

export default function ConditionBookingCTA() {
  return (
    <section aria-labelledby="condition-booking-heading" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 id="condition-booking-heading">Ready to Move Forward?</h2>
            <p>If this page matches what you are dealing with and you want a clear plan, book an assessment or send a question first.</p>
          </div>
          <div className={styles.actions}>
            <a href={JANE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`button-gold ${styles.booking}`}>
              <CalendarDaysIcon aria-hidden="true" />
              <span>Book Your Assessment</span>
            </a>
            <Link href="/#contact" className={styles.contact}>
              <span>Get in Touch First</span>
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
