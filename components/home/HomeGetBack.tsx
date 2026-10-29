'use client';

import { useRef } from 'react';
import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Print from '@/components/Print';
import { GET_BACK_ROW, ILLUSTRATIONS } from '@/lib/illustrations';
import styles from './Home.module.css';

/**
 * Six of Kareem's life prints on navy, no captions (his instruction). Hung in
 * two sizes, bottoms aligned, in the order GET_BACK_ROW sets so similar
 * figures never sit side by side. While the section crosses the screen each
 * print drifts at its own rate, so the shelf has depth without moving out of
 * line at rest.
 */

// Pixels of travel across the section's pass through the viewport.
const DRIFT = [-36, 44, -18, 56, -42, 26];

function phoneSpan(i: number) {
  const row = Math.floor(i / 2);
  const first = i % 2 === 0;
  const large = row % 2 === 0 ? first : !first;
  return large ? 'col-span-5 sm:col-span-1' : 'col-span-4 sm:col-span-1';
}

function Drift({ progress, distance, children, className }: { progress: MotionValue<number>; distance: number; children: React.ReactNode; className: string }) {
  const y = useTransform(progress, [0, 1], [distance, -distance]);
  return (
    <motion.li className={className} style={{ y }}>
      {children}
    </motion.li>
  );
}

export default function HomeGetBack() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section ref={ref} className={`${styles.sec} ${styles.getBack} ${styles.onDark}`} aria-labelledby="get-back-heading">
      <h2 id="get-back-heading" className={styles.getBackTitle}>
        Get back to it.
      </h2>
      <ul className={styles.shelf}>
        {GET_BACK_ROW.map((key, i) => (
          <Drift key={key} progress={scrollYProgress} distance={reduce ? 0 : DRIFT[i]} className={phoneSpan(i)}>
            <Print {...ILLUSTRATIONS[key]} sizes="(min-width: 1024px) 15vw, (min-width: 640px) 32vw, 54vw" />
          </Drift>
        ))}
      </ul>
    </section>
  );
}
