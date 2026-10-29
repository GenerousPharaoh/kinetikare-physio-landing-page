'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { GOOGLE_REVIEW_TOTAL, GOOGLE_REVIEWS_URL, reviews } from '@/lib/reviews';
import styles from './Home.module.css';

/**
 * Pull quotes: one sentence each, word for word from the review it names, and
 * about how he assesses and explains rather than outcome claims. A quote that
 * is not found verbatim in its review is dropped (see SPOTLIGHT below), so an
 * edit to lib/reviews.ts can never leave a misquote on the page.
 */
const PULL_QUOTES = [
  { name: 'Ryan Darkwah', quote: 'He found that the problem came from weakness in my hip and tension in my quads that was putting extra strain on my patellar tendon.' },
  { name: 'Marko Vasilic', quote: 'Kareem did a full movement analysis and tested all of the surrounding joints and muscles, which really showed me where the extra stress was coming from.' },
  { name: 'Serhiy Sidey', quote: "When the surgeon's office sent the wrong post-op protocol, he caught it and built me the right one." },
  { name: 'Sean Vandenbarselaar', quote: 'He figured out the thigh pain was coming from a nerve in my lower back rather than the thigh itself, and walked me through why it had been moving around the way it was.' },
];

const SPOTLIGHT = PULL_QUOTES.filter((p) => reviews.some((r) => r.name === p.name && r.text.includes(p.quote)));

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
 * Two parts. First the spotlight: the section holds while four pull quotes
 * take the screen one at a time, each lighting up word by word as you scroll.
 * Then the row of every review on the site, to swipe or step through, each
 * opening to the full text. Without JavaScript or with reduced motion the
 * pull quotes are simply listed, fully lit.
 */
export default function HomeReviews() {
  const spotRef = useRef<HTMLDivElement>(null);
  const quoteRefs = useRef<(HTMLElement | null)[]>([]);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => setPinned(!reduce), [reduce]);

  const { scrollYProgress } = useScroll({ target: spotRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (!pinned) return;
    const n = SPOTLIGHT.length;
    const at = Math.min(n - 0.0001, p * n);
    const index = Math.floor(at);
    // Light the words over the first 80% of a quote's stretch, then hold it.
    const lit = Math.min(1, (at - index) / 0.8);
    quoteRefs.current.forEach((el, i) => el?.style.setProperty('--q', String(i < index ? 1 : i > index ? 0 : lit)));
    setActive(index);
  });

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
      <div ref={spotRef} className={styles.spot} data-pinned={pinned} style={{ '--n': SPOTLIGHT.length } as CSSProperties}>
        <div className={styles.spotStage}>
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

          <div className={styles.spotQuotes}>
            {SPOTLIGHT.map((p, i) => {
              const words = p.quote.split(' ');
              return (
                <figure
                  key={p.name}
                  ref={(el) => {
                    quoteRefs.current[i] = el;
                  }}
                  className={styles.spotQuote}
                  data-state={i === active ? 'active' : i < active ? 'past' : 'next'}
                  style={{ '--w': words.length } as CSSProperties}
                >
                  <blockquote>
                    <p>
                      {words.map((word, w) => (
                        <span key={w} className={styles.word} style={{ '--i': w } as CSSProperties}>
                          {word}{' '}
                        </span>
                      ))}
                    </p>
                  </blockquote>
                  <figcaption>{p.name}</figcaption>
                </figure>
              );
            })}
          </div>

          <ol className={styles.spotSteps} aria-hidden="true">
            {SPOTLIGHT.map((p, i) => (
              <li key={p.name} data-on={i <= active} />
            ))}
          </ol>
        </div>
      </div>

      <div className={styles.rowHead}>
        <p className={styles.rowLabel}>More from Google</p>
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
              <Stars />
              <figure>
                <blockquote>
                  <p>{isOpen || !short.cut ? review.text : short.text}</p>
                </blockquote>
                <figcaption>{review.name}</figcaption>
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
