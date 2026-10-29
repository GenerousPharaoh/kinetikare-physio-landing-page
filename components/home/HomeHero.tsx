'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { GOOGLE_REVIEW_TOTAL } from '@/lib/reviews';
import Arrow from './Arrow';
import styles from './Home.module.css';

/**
 * The opening screen: Kareem's name set very large, his portrait standing in
 * front of the end of it. The hero is sticky, so the atlas below rises over it
 * like a curtain; while that happens the two lines of the name drift apart and
 * the portrait recedes. The entrance itself is CSS (it runs before
 * hydration); only the scroll-linked part needs JavaScript.
 */
export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Measured against one screen of scroll: the atlas covers the hero in that distance.
  const span = typeof window === 'undefined' ? 800 : window.innerHeight;
  const firstX = useTransform(scrollY, [0, span], ['0vw', reduce ? '0vw' : '-14vw']);
  const secondX = useTransform(scrollY, [0, span], ['0vw', reduce ? '0vw' : '10vw']);
  const figureY = useTransform(scrollY, [0, span], ['0%', reduce ? '0%' : '-6%']);
  const figureScale = useTransform(scrollY, [0, span], [1, reduce ? 1 : 0.92]);
  const shade = useTransform(scrollY, [0, span], [0, 0.55]);

  return (
    <section ref={ref} className={`${styles.sec} ${styles.hero}`} aria-labelledby="home-title">
      <div className={styles.heroGlow} aria-hidden="true" />

      <h1 id="home-title" className={styles.heroName}>
        <motion.span className={styles.heroLine} style={{ x: firstX }}>
          <span>Kareem</span>
        </motion.span>
        <motion.span className={`${styles.heroLine} ${styles.heroLineTwo}`} style={{ x: secondX }}>
          <span>Hassanein</span>
        </motion.span>
      </h1>

      <motion.div className={styles.heroFigure} style={{ y: figureY, scale: figureScale }}>
        <div className={styles.heroFigureInner}>
          <Image
            src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
            alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
            fill
            priority
            quality={85}
            sizes="(min-width: 1024px) 34vw, 86vw"
          />
        </div>
      </motion.div>

      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={styles.heroCopy}>
        <p className={`${styles.eyebrow} ${styles.heroEyebrow}`}>Physiotherapy in Burlington</p>
        <div className={styles.heroBottom}>
          <p className={styles.slogan}>
            The Science of Recovery.
            <em>The Art of Care.</em>
          </p>
          <p className={styles.heroLede}>
            One-on-one physiotherapy in Burlington, built around finding the root cause of your pain and getting back to feeling your best.
          </p>
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
          <ul className={styles.facts}>
            <li>Direct billing</li>
            <li>No referral needed</li>
            <li>Evening hours</li>
            <li>
              <a href="#reviews">5.0 on Google, {GOOGLE_REVIEW_TOTAL} reviews</a>
            </li>
          </ul>
        </div>
      </div>

      <motion.div className={styles.heroShade} style={{ opacity: shade }} aria-hidden="true" />
    </section>
  );
}
