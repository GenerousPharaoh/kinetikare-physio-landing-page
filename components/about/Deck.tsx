'use client';

import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import styles from './About.module.css';

/**
 * Card motion for the About page (Kareem's pick, 2026-10-30: "cards with
 * real depth and motion"). Scroll only, nothing follows the pointer, and
 * nothing moves with reduced motion.
 */

/** True from the given width up (false on the server and before mount). */
function useWide(query: string) {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return wide;
}

/**
 * A row of three cards that arrives gathered like a deck, the outer two
 * tucked behind the middle one and turned a little, and fans out into the
 * row as it scrolls into view. Laptops and tablets only (the row is one
 * column on phones).
 */
export function CardFan({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useWide('(min-width: 768px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.42'] });
  const items = Children.toArray(children);
  const mid = (items.length - 1) / 2;
  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <FanCard key={i} dir={i - mid} progress={scrollYProgress} moving={wide && !reduce}>
          {child}
        </FanCard>
      ))}
    </div>
  );
}

function FanCard({ dir, progress, moving, children }: { dir: number; progress: MotionValue<number>; moving: boolean; children: ReactNode }) {
  const transform = useTransform(progress, (p) => {
    const k = Math.pow(1 - p, 2);
    const side = Math.abs(dir);
    return `translate3d(calc(${-dir * k * 100}% + ${-dir * k * 32}px), ${side * k * 22}px, 0) rotate(${dir * k * 5}deg) scale(${1 - side * k * 0.07})`;
  });
  return (
    <motion.div className="h-full" style={moving ? { transform, zIndex: dir === 0 ? 2 : 1, position: 'relative' } : undefined}>
      {children}
    </motion.div>
  );
}

/**
 * Cards that stack as you scroll: each sticks a little lower than the last
 * and the next slides over it; the ones beneath sink back and dim, and each
 * card's gold edge lights as it lands.
 */
export function StackDeck({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.2', 'end end'] });
  const items = Children.toArray(children);
  return (
    <div ref={ref} className={styles.deck}>
      {items.map((child, i) => (
        <DeckCard key={i} i={i} n={items.length} progress={scrollYProgress} still={Boolean(reduce)}>
          {child}
        </DeckCard>
      ))}
    </div>
  );
}

function DeckCard({ i, n, progress, still, children }: { i: number; n: number; progress: MotionValue<number>; still: boolean; children: ReactNode }) {
  const start = i / n;
  const below = n - 1 - i;
  const scale = useTransform(progress, [start, 1], [1, 1 - below * 0.045]);
  const shade = useTransform(progress, [start, 1], [0, below * 0.08]);
  const lit = useTransform(progress, [Math.max(0, (i - 0.7) / n), Math.max(0.02, i / n)], [0, 1]);
  return (
    <div className={styles.deckSlot} style={{ '--i': i } as CSSProperties}>
      <motion.div className={styles.deckCard} style={still ? undefined : { scale }}>
        {children}
        <motion.span className={styles.deckEdge} style={still ? undefined : { scaleX: lit }} aria-hidden="true" />
        {!still && <motion.span className={styles.deckShade} style={{ opacity: shade }} aria-hidden="true" />}
      </motion.div>
    </div>
  );
}

/** A card that grows into place as it scrolls into view (the story's quote). */
export function GrowIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.5'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { scale, y, willChange: 'transform' }}>
      {children}
    </motion.div>
  );
}

/** A card that drifts against the scroll, for a layered feel (laptops only). */
export function Drift({ children, distance = 24, className = '' }: { children: ReactNode; distance?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useWide('(min-width: 1024px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} className={className} style={wide && !reduce ? { y } : undefined}>
      {children}
    </motion.div>
  );
}
