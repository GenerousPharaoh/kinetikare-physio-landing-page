'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { GET_BACK_ROW, ILLUSTRATIONS } from '@/lib/illustrations';
import styles from './Home.module.css';

/**
 * "Get back to it." and six of Kareem's life prints, no captions (his
 * instruction), hung along one wall. The section holds while the wall slides
 * sideways, so scrolling down walks you past the prints. GET_BACK_ROW sets the
 * order so similar figures are never side by side.
 *
 * Without JavaScript, or with reduced motion, the wall is an ordinary
 * horizontal scroller and nothing is pinned.
 */
export default function HomeGetBack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce) return;
    const measure = () => setTravel(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const pinned = travel > 0;

  return (
    <section
      ref={sectionRef}
      className={`${styles.sec} ${styles.getBack} ${styles.onDark}`}
      aria-labelledby="get-back-heading"
      data-pinned={pinned}
      style={pinned ? { height: `calc(100svh - var(--hh) + ${travel}px)` } : undefined}
    >
      <div className={styles.wallFrame}>
        <motion.ul ref={trackRef} className={styles.wall} style={pinned ? { x } : undefined}>
          <li className={styles.wallTitle}>
            <h2 id="get-back-heading">Get back to it.</h2>
          </li>
          {GET_BACK_ROW.map((key, i) => {
            const art = ILLUSTRATIONS[key];
            return (
              <li key={key} className={styles.wallPrint} data-hang={i % 2 === 0 ? 'high' : 'low'} style={{ backgroundColor: art.paper }}>
                <Image src={art.src} alt="" fill sizes="(min-width: 1024px) 30vw, 66vw" quality={82} />
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
