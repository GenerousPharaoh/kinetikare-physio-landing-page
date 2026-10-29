'use client';

import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

const FIRST = 'Kareem';

/** One letter of the first name: it fans out from the centre as the page scrolls. */
function Letter({ letter, index, spread }: { letter: string; index: number; spread: MotionValue<number> }) {
  const offset = index - (FIRST.length - 1) / 2;
  const x = useTransform(spread, (v) => `${offset * v}vw`);
  return <motion.span style={{ x, animationDelay: `${120 + index * 55}ms` }}>{letter}</motion.span>;
}

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
 * The opening screen, set like a magazine cover: the first name in capitals
 * behind Kareem (his hair just overlaps the letters), the surname in gold
 * italic in front of him, his treatment room blurred into the dark behind.
 * Along the bottom, like a cover's lines: the slogan, the rating and the
 * practical facts on the left, the booking on the right, the centre left to
 * the surname.
 *
 * Motion (no pointer effects: Kareem did not want the text moving with the
 * mouse, 2026-10-29):
 * - Entrance (CSS, runs before hydration): the letters rise one by one, the
 *   portrait comes into focus, the surname wipes across, then the copy
 *   arrives in turn. At rest the portrait drifts very slowly.
 * - Scroll: the hero is sticky and the atlas rises over it like a curtain;
 *   meanwhile the camera pushes in, the letters fan out and the names part.
 */
export default function HomeHero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // One screen of scroll is the distance in which the atlas covers the hero.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const still = Boolean(reduce);
  const firstY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '-30%']);
  const spread = useTransform(scrollY, [0, span], [0, still ? 0 : 2.6]);
  const lastY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '60%']);
  const figureScale = useTransform(scrollY, [0, span], [1, still ? 1 : 1.12]);
  const shade = useTransform(scrollY, [0, span], [0, 0.6]);

  return (
    <section className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      <div className={styles.heroRoom} aria-hidden="true">
        <Image src="/images/home-hero-room-blur.webp" alt="" fill sizes="100vw" quality={60} />
      </div>
      <div className={styles.heroLight} aria-hidden="true" />

      {/* One h1 for both names; each is placed on its own layer, the first
          behind the portrait and the surname in front of it. */}
      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroFirst} style={{ y: firstY }}>
          <span className={styles.heroLetters} aria-hidden="true">
            {FIRST.split('').map((letter, i) => (
              <Letter key={i} letter={letter} index={i} spread={spread} />
            ))}
          </span>
          <span className="sr-only">{FIRST} </span>
        </motion.span>
        <motion.span className={styles.heroLast} style={{ y: lastY }}>
          <span className={styles.heroSurname}>Hassanein</span>
        </motion.span>
      </h1>

      <motion.div className={styles.heroFigure} style={{ scale: figureScale }}>
        <div className={styles.heroFigureInner}>
          <div className={styles.heroFigureGlow}>
            <Image
              src="/images/kareem-hassanein-portrait-cutout.webp"
              alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
              fill
              priority
              quality={85}
              sizes="(min-width: 1024px) 52vw, 120vw"
            />
          </div>
        </div>
      </motion.div>

      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={styles.heroCopy}>
        <div className={styles.heroLockup}>
          <p className={styles.slogan}>
            <span className={styles.sloganLine}>The Science of Recovery.</span>
            <em className={styles.sloganLine}>The Art of Care.</em>
          </p>
          <a href="#reviews" className={styles.heroRating}>
            <Stars />
            <span>
              5.0 on Google, {GOOGLE_REVIEW_TOTAL} reviews
            </span>
          </a>
          <ul className={styles.heroFacts}>
            <li>Direct billing</li>
            <li>No referral needed</li>
            <li>Evening hours</li>
          </ul>
        </div>
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
      </div>

      <motion.div className={styles.heroShade} style={{ opacity: shade }} aria-hidden="true" />
    </section>
  );
}
