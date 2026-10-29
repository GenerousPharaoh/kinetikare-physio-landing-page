'use client';

import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

const FIRST = 'Kareem';

/**
 * The opening screen, set like a magazine cover: the first name in capitals
 * behind Kareem (his hair just overlaps the letters), the surname in gold
 * italic in front of him, his treatment room blurred into the dark behind.
 *
 * The entrance is CSS, so it runs before hydration: the letters rise one by
 * one, the portrait comes into focus, the surname wipes across. The hero is
 * sticky, so the atlas below rises over it like a curtain; while it does, the
 * camera pushes in on the portrait and the two names part.
 */
export default function HomeHero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // One screen of scroll is the distance in which the atlas covers the hero.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const to = (value: number | string, still: number | string) => (reduce ? still : value);
  const firstY = useTransform(scrollY, [0, span], ['0%', to('-30%', '0%')]);
  const lastY = useTransform(scrollY, [0, span], ['0%', to('60%', '0%')]);
  const figureScale = useTransform(scrollY, [0, span], [1, to(1.12, 1) as number]);
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
              <span key={i} style={{ animationDelay: `${120 + i * 55}ms` }}>
                {letter}
              </span>
            ))}
          </span>
          <span className="sr-only">{FIRST} </span>
        </motion.span>
        <motion.span className={styles.heroLast} style={{ y: lastY }}>
          <span>Hassanein</span>
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
        <div className={styles.heroCopyText}>
          <p className={styles.slogan}>
            The Science of Recovery.
            <em>The Art of Care.</em>
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
