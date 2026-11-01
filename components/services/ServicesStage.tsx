'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import { FIGURES, figureMask, type FigureKey } from '@/lib/figures';
import styles from './Services.module.css';

export interface StageItem {
  id: string;
  figure: FigureKey;
}

/**
 * The services in sequence: on laptops a dark stage stays in place beside
 * the text and shows the illustration for the service being read, each
 * change a soft fade and settle (nothing follows the pointer). The
 * chapters are server rendered and passed in as children, each marked
 * data-chapter; on phones each chapter carries its own picture, so the
 * stage is not shown. Without JavaScript the first figure stays and
 * everything reads as before.
 */
export default function ServicesStage({ items, children }: { items: StageItem[]; children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [loadRest, setLoadRest] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const chapters = Array.from(flow.querySelectorAll<HTMLElement>('[data-chapter]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      // A chapter takes the stage as its top passes the middle of the window.
      const line = window.innerHeight * 0.5;
      let index = 0;
      for (const el of chapters) {
        if (el.getBoundingClientRect().top < line) index = Number(el.dataset.chapter);
      }
      // The chapter on the stage reads at full strength (Services.module.css).
      for (const el of chapters) el.dataset.active = String(Number(el.dataset.chapter) === index);
      setActive(index);
    };
    const onScroll = () => {
      setLoadRest(true);
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // The other figures load once the page is idle, or on the first scroll.
    const idle = window.setTimeout(() => setLoadRest(true), 2000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(idle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.sequence}>
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.stageInner}>
          {items.map((item, i) => {
            if (i > 0 && !loadRest) return null;
            const f = FIGURES[item.figure];
            const state = i === active ? 'active' : i < active ? 'past' : 'next';
            return (
              <div key={item.id} className={styles.figure} data-state={state} style={{ '--ar': f.aspect } as CSSProperties}>
                <Image src={f.src} alt="" fill sizes="(min-width: 1360px) 520px, 42vw" quality={82} priority={i === 0} style={figureMask(f.fade)} />
              </div>
            );
          })}
        </div>
      </div>
      <div ref={flowRef} className={styles.flow}>
        {children}
      </div>
    </div>
  );
}
