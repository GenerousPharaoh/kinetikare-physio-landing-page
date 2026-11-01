'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties, type TouchEvent } from 'react';
import { GOOGLE_REVIEW_TOTAL, GOOGLE_REVIEWS_URL, reviews } from '@/lib/reviews';
import styles from './Home.module.css';

/** How long each review holds before the next one comes forward. */
const HOLD_MS = 4800;

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
 * The rating, then the reviews as a carousel: the current one whole in the
 * centre, the ones either side showing faded at the edges. It moves on by
 * itself every few seconds (the gold line under it fills while it waits),
 * and rests while the pointer or focus is on it, while a review is opened
 * to its full text, while the tab is hidden, when paused with the button,
 * or when the reader prefers reduced motion. Arrows and a swipe step it.
 * Without JavaScript every review is in the HTML in a row.
 */
export default function HomeReviews() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [resting, setResting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduce, setReduce] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = reviews.length;

  const go = useCallback(
    (dir: number) => {
      setOpen(null);
      setActive((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      mq.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const playing = !paused && !resting && !hidden && !reduce && open === null;

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => go(1), HOLD_MS);
    return () => window.clearTimeout(t);
  }, [playing, active, go]);

  const onTouchStart = (e: TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
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
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M15 8H2M7 3L2 8l5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused} aria-label={paused ? 'Play the reviews' : 'Pause the reviews'}>
            {paused ? (
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 2.5v11l9-5.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
              </svg>
            )}
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={styles.stage}
        aria-roledescription="carousel"
        aria-label="Reviews from Google"
        onMouseEnter={() => setResting(true)}
        onMouseLeave={() => setResting(false)}
        onFocus={() => setResting(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setResting(false);
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <ul className={styles.track} style={{ '--i': active } as CSSProperties}>
          {reviews.map((review, i) => {
            const short = excerpt(review.text);
            const isActive = i === active;
            const isOpen = open === i;
            return (
              <li
                key={review.name}
                className={styles.slide}
                data-pos={isActive ? 0 : i < active ? -1 : 1}
                aria-hidden={!isActive}
                inert={!isActive}
                aria-roledescription="slide"
                aria-label={`Review by ${review.name}`}
              >
                <figure className={styles.review}>
                  <Stars />
                  <blockquote>
                    <p>{isOpen || !short.cut ? review.text : short.text}</p>
                  </blockquote>
                  {short.cut && (
                    <button type="button" className={styles.moreBtn} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                      {isOpen ? 'Show less' : 'Read the full review'}
                    </button>
                  )}
                  <figcaption className={styles.reviewBy}>
                    <span className={styles.monogram} aria-hidden="true">
                      {initials(review.name)}
                    </span>
                    <span>
                      <span className={styles.byName}>{review.name}</span>
                      <span className={styles.bySource}>Google review</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>

      <span key={active} className={styles.timer} data-play={playing} aria-hidden="true" style={{ '--dur': `${HOLD_MS}ms` } as CSSProperties}>
        <i />
      </span>
    </section>
  );
}
