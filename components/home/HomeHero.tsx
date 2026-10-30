'use client';

import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

const BRAND = 'Kinetikare';

/** How strongly each echo of the masthead shows, nearest first. */
const ECHOES = [0.5, 0.32, 0.18];

/**
 * One echo of the masthead on scroll: as the masthead rises, copies of it
 * stay behind at even steps, like a chronophotograph of something moving
 * (Marey's motion studies, where movement analysis began).
 */
function Trail({ index, progress }: { index: number; progress: MotionValue<number> }) {
  // Fixed steps below the word (a strobe, not a smear), faint at first and
  // stronger as the masthead lifts; the word itself rises (mastY), so the
  // steps open up as it goes.
  const y = `${(index + 1) * 34}%`;
  const opacity = useTransform(progress, [0, 0.5], [0, ECHOES[index]]);
  return (
    <motion.span className={styles.mastTrail} style={{ y, opacity }}>
      {BRAND}
    </motion.span>
  );
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
 * The opening screen, set like a magazine cover: the masthead, KINETIKARE,
 * in capitals behind Kareem (his hair overlaps the letters), with PHYSIO
 * under its end; across his chest the slogan, the science in precise small
 * capitals and the art in gold italic; under it his name, signed. The
 * corners carry the practical lines: the rating and the facts on the left,
 * the booking on the right (on phones everything stacks, centred).
 *
 * Motion (load and scroll only; Kareem did not want anything moving with the
 * mouse, 2026-10-29):
 * - Entrance (CSS, runs before hydration): the room and light come up; the
 *   portrait rises and is solid before anything behind it moves; the
 *   masthead sweeps in from the left trailing echoes of itself, which close
 *   up as it settles; PHYSIO tracks in; the science line rises and the art
 *   line wipes across; the signature writes itself in, stroke by stroke
 *   (Signature.tsx); the corners arrive.
 * - Scroll: the hero is sticky and the atlas rises over it like a curtain;
 *   meanwhile the camera pushes in, and the masthead lifts away leaving the
 *   same echoes behind it.
 */
export default function HomeHero({ signature }: { signature?: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // One screen of scroll is the distance in which the atlas covers the hero.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const still = Boolean(reduce);
  const progress = useTransform(scrollY, [0, span], [0, still ? 0 : 1]);
  const mastY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '-38%']);
  const coverY = useTransform(scrollY, [0, span], ['0%', still ? '0%' : '30%']);
  const figureScale = useTransform(scrollY, [0, span], [1, still ? 1 : 1.12]);
  const shade = useTransform(scrollY, [0, span], [0, 0.6]);

  return (
    <section className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      <div className={styles.heroRoom} aria-hidden="true">
        <Image src="/images/home-hero-room-blur.webp" alt="" fill sizes="100vw" quality={60} />
      </div>
      <div className={styles.heroLight} aria-hidden="true" />

      {/* The masthead sits behind the portrait. The h1 reads as text: the
          brand, then his name and title (shown in the signature below). */}
      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroMast} style={{ y: mastY }}>
          <span className={styles.mastWord} aria-hidden="true">
            {ECHOES.map((_, i) => (
              <Trail key={i} index={i} progress={progress} />
            ))}
            {ECHOES.map((a, i) => (
              <span key={i} className={styles.mastEcho} style={{ '--i': i + 1, '--a': a } as CSSProperties}>
                {BRAND}
              </span>
            ))}
            <span className={styles.mastInk}>{BRAND}</span>
            <span className={styles.mastSub}>Physio</span>
          </span>
          <span className="sr-only">Kinetikare Physio: Kareem Hassanein, Registered Physiotherapist</span>
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
        <div className={styles.heroLockup}>
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
