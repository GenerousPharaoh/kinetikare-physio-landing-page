'use client';

import { useEffect, useRef, useState } from 'react';
import { GOOGLE_REVIEW_TOTAL, GOOGLE_REVIEWS_URL, reviews } from '@/lib/reviews';
import styles from './Home.module.css';

/** The review's own opening sentences, about two hundred characters' worth.
 *  It always ends on a whole sentence, so no ellipsis is added. */
function excerpt(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text];
  let out = '';
  for (const sentence of sentences) {
    if (out && (out + sentence).length > 240) break;
    out += sentence;
  }
  out = out.trim();
  return { text: out, cut: out.length < text.trim().length };
}

/** "Dr. Fel Rocci" -> "FR", "Mustafa" -> "M". */
function initials(name: string) {
  const parts = name.replace(/^Dr\.\s+/, '').split(/\s+/).filter(Boolean);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

const Stars = () => (
  <span className={styles.stars} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
      </svg>
    ))}
  </span>
);

/**
 * The rating, then the row of every review on the site, to swipe or step
 * through, each opening to the full text. (Until round 19 a scroll-pinned
 * spotlight of four pull quotes came first; Kareem kept the row.)
 */
export default function HomeReviews() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setProgress(max > 0 ? track.scrollLeft / max : 0);
    };
    update();
    track.addEventListener('scroll', update, { passive: true });
    return () => track.removeEventListener('scroll', update);
  }, []);

  const step = (dir: number) => {
    const track = trackRef.current;
    const card = track?.querySelector('li');
    if (!track || !card) return;
    track.scrollBy({ left: dir * (card.getBoundingClientRect().width + 40), behavior: 'smooth' });
  };

  return (
    <section id="reviews" className={`${styles.sec} ${styles.reviews} ${styles.onDark}`} aria-labelledby="reviews-title">
      <div className={styles.reviewsHead}>
        <div className={styles.spotHead}>
          <p className={styles.eyebrow}>Patient reviews</p>
          <h2 id="reviews-title" className={styles.spotRating}>
            <span className={styles.ratingValue}>5.0</span>
            <Stars />
            <span className="sr-only"> out of 5 on Google</span>
          </h2>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
            {GOOGLE_REVIEW_TOTAL} reviews on Google
          </a>
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous reviews">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M15 8H2M7 3L2 8l5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next reviews">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </div>

      <ul ref={trackRef} className={styles.reviewTrack} aria-label="Reviews from Google">
        {reviews.map((review, i) => {
          const short = excerpt(review.text);
          const isOpen = open === i;
          return (
            <li key={review.name} className={styles.reviewCard}>
              <figure>
                <figcaption className={styles.reviewBy}>
                  <span className={styles.monogram} aria-hidden="true">
                    {initials(review.name)}
                  </span>
                  <span>
                    <span className={styles.byName}>{review.name}</span>
                    <span className={styles.bySource}>Google review</span>
                  </span>
                  <Stars />
                </figcaption>
                <blockquote>
                  <p>{isOpen || !short.cut ? review.text : short.text}</p>
                </blockquote>
              </figure>
              {short.cut && (
                <button type="button" className={styles.moreBtn} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  {isOpen ? 'Show less' : 'Read the full review'}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <span className={styles.progress} aria-hidden="true">
        <span style={{ width: `${Math.max(8, progress * 100)}%` }} />
      </span>
    </section>
  );
}
