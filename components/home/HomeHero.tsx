'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

const BRAND = 'Kinetikare';

/**
 * Kareem's four illustrations (his own, made in ChatGPT, October 2026), in
 * the order they play: the coaching, the plan, the step-up, the strength.
 * Each sits bottom-centre in the same box. The coaching one goes first
 * because it is the widest: a later figure that painted larger than the
 * first would be counted as the page's largest paint, seconds after load.
 */
const ART = [
  { src: '/images/hero-art/kareem-coaching-squat.webp', label: 'coaching a patient through a squat to a bench' },
  { src: '/images/hero-art/kareem-laptop-table.webp', label: 'reviewing a plan on a laptop, seated on a treatment table' },
  { src: '/images/hero-art/kareem-step-up.webp', label: 'stepping up onto a box' },
  { src: '/images/hero-art/kareem-kettlebell-deadlift.webp', label: 'lifting a kettlebell from the floor' },
];

/**
 * The rays of the logo's sun, fanned behind the figures: thin gold lines,
 * alternately long and short, drawn outward from the centre on load.
 */
const SUN_RAYS = (() => {
  const n = 25;
  const cx = 500;
  const cy = 560;
  return Array.from({ length: n }, (_, i) => {
    const a = (Math.PI * (i + 0.5)) / n + Math.PI; // the upper half, left to right
    const r1 = 250;
    const r2 = i % 2 === 0 ? 540 : 440;
    const f = (v: number) => Math.round(v * 10) / 10;
    return {
      d: `M${f(cx + r1 * Math.cos(a))} ${f(cy + r1 * Math.sin(a))}L${f(cx + r2 * Math.cos(a))} ${f(cy + r2 * Math.sin(a))}`,
      delay: Math.round(Math.abs(i - (n - 1) / 2) * 38),
    };
  });
})();

/** How long each figure holds before the next rises in, after the first. */
const HOLD_MS = 5200;
const FIRST_HOLD_MS = 5600;

const Stars = () => (
  <span className={styles.heroStars} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
      </svg>
    ))}
  </span>
);

/**
 * The opening screen, set like a poster: KINETIKARE in black condensed
 * capitals running up the left edge (across the top on phones), PHYSIO in a
 * gold outline beside it, both in front of the art; his four illustrations
 * taking turns in front of the logo's sun; on the right the slogan, the
 * science in tracked capitals and the art in gold italic, then his name
 * signed, the booking and the rating.
 *
 * Motion (load and scroll only; Kareem did not want anything moving with the
 * mouse, 2026-10-29):
 * - Entrance (CSS, runs before hydration): the light comes up; the sun's
 *   rays draw outward; the first figure rises in from the floor; the
 *   masthead's letters rise in turn; the slogan, the signature
 *   (Signature.tsx) and the rest follow.
 * - Then every few seconds the next figure rises in behind a soft edge while
 *   the last fades away (paused while the hero is off screen or the tab is
 *   hidden; never with reduced motion, which shows the first figure). Only
 *   opacity, blur, a small shift and a mask move: a smoother change than the
 *   triangle facets of round 11, which he found glitchy.
 * - Scroll: the hero is sticky and the atlas rises over it like a curtain;
 *   meanwhile the art pushes in and the masthead lifts away.
 */
export default function HomeHero({ signature, reviewers = [] }: { signature?: ReactNode; reviewers?: string[] }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // One screen of scroll is the distance in which the atlas covers the hero.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const still = Boolean(reduce);
  const mastY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '-60%']);
  const coverY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '30%']);
  const artScale = useTransform(scrollY, [0, span], [1, still ? 1 : 1.1]);
  const shade = useTransform(scrollY, [0, span], [0, 0.6]);

  // The sequence: which figure is showing, which is leaving, and whether the
  // first has handed over yet (until then it plays its entrance).
  const [seq, setSeq] = useState({ cur: 0, prev: -1, started: false });
  // The other figures are mounted (and so fetched) once the page has
  // settled, and join the sequence only when loaded.
  const [later, setLater] = useState(false);
  const loaded = useRef<boolean[]>(ART.map((_, i) => i === 0));

  useEffect(() => {
    if (reduce) return;
    const mountTimer = window.setTimeout(() => setLater(true), 2200);
    let timer = 0;
    const tick = () => {
      const onScreen = window.scrollY < window.innerHeight * 0.9;
      setSeq((s) => {
        const next = (s.cur + 1) % ART.length;
        if (document.hidden || !onScreen || !loaded.current[next]) return s;
        return { cur: next, prev: s.cur, started: true };
      });
      timer = window.setTimeout(tick, HOLD_MS);
    };
    timer = window.setTimeout(tick, FIRST_HOLD_MS);
    return () => {
      window.clearTimeout(mountTimer);
      window.clearTimeout(timer);
    };
  }, [reduce]);

  const stateOf = (i: number) =>
    i === seq.cur ? (seq.started ? 'in' : 'first') : i === seq.prev ? 'out' : undefined;

  return (
    <section className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      <div className={styles.heroLight} aria-hidden="true" />

      <motion.div
        className={styles.heroArt}
        style={{ scale: artScale }}
        role="img"
        aria-label={`Illustrations of Kareem Hassanein: ${ART.map((a) => a.label).join('; ')}`}
      >
        <svg className={styles.heroSun} viewBox="0 0 1000 600" aria-hidden="true">
          {SUN_RAYS.map((r, i) => (
            <path key={i} d={r.d} pathLength={1} style={{ '--d': `${r.delay}ms` } as CSSProperties} />
          ))}
        </svg>
        {ART.map((art, i) =>
          i === 0 || later ? (
            <div key={i} className={styles.artLayer} data-state={stateOf(i)} aria-hidden="true">
              <Image
                src={art.src}
                alt=""
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : 'eager'}
                quality={75}
                sizes="(min-width: 1024px) 40vw, 70vw"
                onLoad={() => (loaded.current[i] = true)}
              />
            </div>
          ) : null,
        )}
      </motion.div>

      {/* The masthead, in front of the art. The h1 reads as text: the brand,
          then his name and title (shown in the signature). */}
      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroMast} style={{ y: mastY }}>
          <span className={styles.mastWord} aria-hidden="true">
            <span className={styles.mastBrand}>
              {BRAND.split('').map((ch, i) => (
                <span key={i} style={{ '--i': i } as CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
            <span className={styles.mastSub}>Physio</span>
          </span>
          <span className="sr-only">Kinetikare Physio: Kareem Hassanein, Registered Physiotherapist</span>
        </motion.span>
      </h1>

      <div className={styles.heroCopy}>
        <motion.div className={styles.heroCover} style={{ y: coverY }}>
          <p className={styles.slogan}>
            <span className={styles.sloganScience}>
              <span>The Science of Recovery.</span>
            </span>
            <em className={styles.sloganArt}>The Art of Care.</em>
          </p>
          <div className={styles.heroSigned}>
            {signature}
            <span className={styles.heroCredential} aria-hidden="true">
              Registered Physiotherapist
            </span>
          </div>
        </motion.div>
        <div className={styles.heroAction}>
          <div className={styles.ctaRow}>
            <a
              href={JANE_ASSESSMENT_URL}
              data-booking-source="hero"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnLight}`}
            >
              Book an assessment
              <Arrow />
            </a>
            <a href="#where-does-it-hurt" className={styles.textLink}>
              Where does it hurt?
            </a>
          </div>
        </div>
        <div className={styles.heroLockup}>
          {/* The rating as a badge: the initials of his most recent reviewers,
              then the score in gold stars and the count. */}
          <a href="#reviews" className={styles.heroRating} aria-label={`Rated 5.0 out of 5 from ${GOOGLE_REVIEW_TOTAL} reviews on Google`}>
            {reviewers.length > 0 && (
              <span className={styles.ratingFaces} aria-hidden="true">
                {reviewers.map((initials, i) => (
                  <span key={i}>{initials}</span>
                ))}
              </span>
            )}
            <span className={styles.ratingText} aria-hidden="true">
              <span className={styles.ratingScore}>
                <strong>5.0</strong>
                <Stars />
              </span>
              <span className={styles.ratingCount}>{GOOGLE_REVIEW_TOTAL} reviews on Google</span>
            </span>
          </a>
          <ul className={styles.heroFacts}>
            <li>Direct billing</li>
            <li>No referral needed</li>
            <li>Evening hours</li>
          </ul>
        </div>
      </div>

      <motion.div className={styles.heroShade} style={{ opacity: shade }} aria-hidden="true" />
    </section>
  );
}
