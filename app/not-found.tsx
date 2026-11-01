import { JANE_BOOKING_URL } from '@/lib/booking';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found | Kareem Hassanein Physiotherapy',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.nf}>
      <div className={styles.box}>
        <span className={styles.bar} aria-hidden="true" />

        {/* 404 indicator */}
        <p className={styles.code}>
          404
        </p>

        <h1 className={styles.h1}>
          Page not found
        </h1>

        <p className={styles.text}>
          This page may have been moved or no longer exists.
        </p>

        {/* Navigation options */}
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            Back to Home
            <ArrowRightIcon aria-hidden="true" />
          </Link>
          <Link href="/conditions">
            View Conditions
          </Link>
          <a
            href={JANE_BOOKING_URL} data-booking-source="not_found"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Appointment
          </a>
        </div>

        <p className={styles.call}>
          Call{' '}
          <a href="tel:+19056346000">
            (905) 634-6000
          </a>
          {' '}if you need help finding what you&apos;re looking for.
        </p>
      </div>
    </main>
  );
}
