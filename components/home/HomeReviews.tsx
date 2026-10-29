'use client';

import { useState } from 'react';
import { GOOGLE_REVIEW_TOTAL, GOOGLE_REVIEWS_URL, reviews } from '@/lib/reviews';
import styles from './Home.module.css';

/**
 * One review at a time, set large. Long reviews are clamped with a "Read the
 * full review" control. Position shows as a line rather than "3 / 26", as on
 * the previous carousel: a running count turns the reviews into a list to get
 * through.
 */
export default function HomeReviews() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const review = reviews[index];
  const long = review.text.length > 360;

  const go = (step: number) => {
    setOpen(false);
    setIndex((i) => (i + step + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className={`${styles.sec} ${styles.reviews}`} aria-labelledby="reviews-title">
      <div className={styles.reviewsHead}>
        <p className={styles.eyebrow}>Patient reviews</p>
        <h2 id="reviews-title" className="sr-only">
          Google Reviews
        </h2>
        <div className={styles.rating}>
          <span className={styles.ratingValue}>5.0</span>
          <span className={styles.stars} aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
              </svg>
            ))}
          </span>
        </div>
        <p className={styles.ratingMeta}>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            {GOOGLE_REVIEW_TOTAL} reviews on Google
          </a>
        </p>
      </div>

      <div className={styles.reviewsBody}>
        <div className={styles.quoteWrap} aria-live="polite">
          <figure key={index} className={styles.quote} data-open={open}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              <p>{review.text}</p>
            </blockquote>
            {long && (
              <button type="button" className={styles.moreBtn} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                {open ? 'Show less' : 'Read the full review'}
              </button>
            )}
            <figcaption className={styles.reviewer}>{review.name}</figcaption>
          </figure>
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M15 8H2M7 3L2 8l5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <span className={styles.progress} aria-hidden="true">
            <span style={{ width: `${((index + 1) / reviews.length) * 100}%` }} />
          </span>
        </div>
      </div>
    </section>
  );
}
