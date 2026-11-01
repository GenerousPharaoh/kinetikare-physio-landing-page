import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import styles from './LegalPageLayout.module.css';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

/**
 * Privacy, terms and accessibility: the title, who the policy belongs to
 * and when it took effect, then the policy text in one reading column.
 * A server component; the pages pass their own sections as children.
 */
export default function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  return (
    <main className={styles.legal}>
      <div className={styles.frame}>
        <header className={styles.opening}>
          <Link href="/" className={styles.back}>
            <ArrowLeftIcon aria-hidden="true" />
            Back to Home
          </Link>

          <h1 className={styles.h1}>{title}</h1>

          <div className={styles.meta}>
            <div>
              <p>
                <span className={styles.label}>Effective Date:</span>{' '}
                <span className={styles.metaValue}>{effectiveDate}</span>
              </p>
            </div>
            <div>
              <p className={styles.whoName}>Kareem Hassanein, Registered Physiotherapist</p>
              <p className={styles.whoLine}>Endorphins Health and Wellness Centre</p>
              <p className={styles.whoLine}>4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
            </div>
          </div>
        </header>

        <div className={styles.body}>{children}</div>
      </div>

      {/* The other legal pages */}
      <nav aria-label="Legal pages" className={styles.foot}>
        <div className={styles.footLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/" className={styles.home}>
            Return to Homepage
          </Link>
        </div>
      </nav>
    </main>
  );
}
