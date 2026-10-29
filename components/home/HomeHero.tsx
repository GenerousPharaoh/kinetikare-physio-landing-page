'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  m as motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

const FIRST = 'Kareem';

/** One letter of the first name: it fans out from the centre as the page scrolls. */
function Letter({ letter, index, spread }: { letter: string; index: number; spread: MotionValue<number> }) {
  const offset = index - (FIRST.length - 1) / 2;
  const x = useTransform(spread, (v) => `${offset * v}vw`);
  return (
    <motion.span style={{ x, animationDelay: `${120 + index * 55}ms` }}>
      {letter}
    </motion.span>
  );
}

/** How far a layer moves with the pointer: further layers move less, or the other way. */
function useDepth(sx: MotionValue<number>, sy: MotionValue<number>, amount: number) {
  return {
    x: useTransform(sx, (v) => v * amount),
    y: useTransform(sy, (v) => v * amount * 0.6),
  };
}

/**
 * The opening screen, set like a magazine cover: the first name in capitals
 * behind Kareem (his hair just overlaps the letters), the surname in gold
 * italic in front of him, his treatment room blurred into the dark behind.
 *
 * Motion, in three layers:
 * - Entrance (CSS, runs before hydration): the letters rise one by one, the
 *   portrait comes into focus, the surname wipes across and a gold line draws
 *   under it, then the slogan, facts and buttons arrive in turn. At rest the
 *   portrait drifts very slowly.
 * - Pointer (desktop with a mouse only): the room, the first name, the
 *   portrait and the surname shift by different amounts, so the cover has
 *   depth. Nothing changes or swaps; it only moves.
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

  // Pointer depth: -1..1 across the hero, eased by a spring.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });
  const roomDepth = useDepth(sx, sy, -14);
  const firstDepth = useDepth(sx, sy, -22);
  const figureDepth = useDepth(sx, sy, 10);
  const lastDepth = useDepth(sx, sy, 26);

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (event: PointerEvent) => {
      if (window.scrollY > window.innerHeight) return;
      px.set((event.clientX / window.innerWidth) * 2 - 1);
      py.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, px, py]);

  return (
    <section className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      <motion.div className={styles.heroRoom} style={roomDepth} aria-hidden="true">
        <Image src="/images/home-hero-room-blur.webp" alt="" fill sizes="100vw" quality={60} />
      </motion.div>
      <div className={styles.heroLight} aria-hidden="true" />

      {/* One h1 for both names; each is placed on its own layer, the first
          behind the portrait and the surname in front of it. */}
      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroFirst} style={{ y: firstY }}>
          <motion.span className={styles.heroDepth} style={firstDepth}>
            <span className={styles.heroLetters} aria-hidden="true">
              {FIRST.split('').map((letter, i) => (
                <Letter key={i} letter={letter} index={i} spread={spread} />
              ))}
            </span>
          </motion.span>
          <span className="sr-only">{FIRST} </span>
        </motion.span>
        <motion.span className={styles.heroLast} style={{ y: lastY }}>
          <motion.span className={styles.heroDepth} style={lastDepth}>
            <span className={styles.heroSurname}>Hassanein</span>
          </motion.span>
        </motion.span>
      </h1>

      <motion.div className={styles.heroFigure} style={{ scale: figureScale }}>
        <motion.div className={styles.heroFigureDepth} style={figureDepth}>
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
      </motion.div>

      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={styles.heroCopy}>
        <div className={styles.heroCopyText}>
          <p className={styles.slogan}>
            <span className={styles.sloganLine}>The Science of Recovery.</span>
            <em className={styles.sloganLine}>The Art of Care.</em>
          </p>
          <ul className={styles.facts}>
            <li>Direct billing</li>
            <li>No referral needed</li>
            <li>Evening hours</li>
            <li>
              <a href="#reviews">5.0 on Google, {GOOGLE_REVIEW_TOTAL} reviews</a>
            </li>
          </ul>
        </div>
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

      <motion.div className={styles.heroShade} style={{ opacity: shade }} aria-hidden="true" />
    </section>
  );
}
