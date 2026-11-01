'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from './Arrow';
import styles from './Home.module.css';

export interface AtlasRegion {
  key: string;
  title: string;
  label: string;
  hub: string;
  blurb: string;
  plate: string;
  /** The joint centre (the plate's own gold crosshair) as a fraction of the plate. */
  joint: [number, number];
  conditions: { href: string; name: string }[];
}

/**
 * "Where does it hurt?": the anatomy plate, mounted as a print, stays in place
 * (sticky) while the text scrolls past it. Each region's text swaps the plate,
 * and the gold ring on the measuring line travels to the new joint. Without
 * JavaScript the knee plate simply stays and every link still works.
 */
export default function HomeAtlas({ regions }: { regions: AtlasRegion[] }) {
  const [active, setActive] = useState(0);
  const [loadRest, setLoadRest] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flow = flowRef.current;
    const stage = stageRef.current;
    if (!flow || !stage) return;
    const chapters = Array.from(flow.querySelectorAll<HTMLElement>('[data-chapter]'));
    const desktop = window.matchMedia('(min-width: 1024px)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const stageBottom = stage.getBoundingClientRect().bottom;
      // Desktop: a chapter takes over as its heading passes the middle of the
      // screen. Phone: near the top of the text area under the plate, so the
      // plate changes once the previous region has scrolled away.
      const line = desktop.matches ? vh * 0.55 : stageBottom + (vh - stageBottom) * 0.22;
      // The intro and the knee chapter both carry data-chapter="0".
      let index = 0;
      for (const el of chapters) {
        if (el.getBoundingClientRect().top < line) index = Number(el.dataset.chapter);
      }
      setActive(index);
    };
    const onScroll = () => {
      setLoadRest(true);
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // The other three plates load once the page is idle, or on the first scroll.
    const idle = window.setTimeout(() => setLoadRest(true), 2500);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(idle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const current = regions[active];
  const stageVars = { '--jx': current.joint[0], '--jy': current.joint[1] } as CSSProperties;

  return (
    <section className={`${styles.sec} ${styles.atlas}`} aria-labelledby="atlas-title">
      <div ref={stageRef} className={styles.stage} aria-hidden="true">
        <div className={styles.plates} style={stageVars}>
          <div className={styles.mount}>
            {regions.map((region, i) => {
              const state = i === active ? 'active' : i < active ? 'past' : 'next';
              if (i > 0 && !loadRest) return null;
              return (
                <div
                  key={region.key}
                  className={`${styles.plate} ${i === 0 ? styles.plateIntro : ''}`}
                  data-state={state}
                >
                  <div className={styles.plateInner}>
                    <Image
                      src={region.plate}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 44vw, 90vw"
                      quality={82}
                      priority={i === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.measure} />
          <div className={styles.ring}>
            <span key={active} className={styles.pulse} />
          </div>
        </div>
      </div>

      <div ref={flowRef} className={styles.flow}>
        <div id="where-does-it-hurt" className={styles.intro} data-chapter="0">
          <p className={styles.eyebrow}>Start by body region</p>
          <h2 id="atlas-title" className={styles.h2} style={{ marginTop: 18 }}>
            Where does it hurt?
          </h2>
          <p className={`${styles.bodyText} ${styles.introText}`}>
            Region-level overviews that sort common patterns and point you to the right detailed
            condition page.
          </p>
        </div>

        {regions.map((region, i) => (
          <article
            key={region.key}
            className={styles.chapter}
            data-chapter={i}
            aria-labelledby={`region-${region.key}`}
          >
            <div className={styles.chapterPlate} aria-hidden="true">
              <Image src={region.plate} alt="" fill sizes="(min-width: 640px) 60vw, 100vw" quality={82} />
            </div>
            <h3 id={`region-${region.key}`} className={styles.regionName}>
              {region.title}
            </h3>
            <p className={`${styles.bodyText} ${styles.regionBlurb}`}>{region.blurb}</p>
            <ul className={styles.condList}>
              {region.conditions.map((condition) => (
                <li key={condition.href}>
                  <Link href={condition.href} prefetch={false}>
                    {condition.name}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={region.hub}
              prefetch={false}
              className={`${styles.textLink} ${styles.hubLink}`}
            >
              Explore {region.label.toLowerCase()}
              <Arrow />
            </Link>
          </article>
        ))}

        <div className={styles.atlasEnd}>
          <ul>
            <li>
              <Link href="/conditions" prefetch={false} className={styles.textLink}>
                Browse all condition pages
              </Link>
            </li>
            <li>
              <Link href="/conditions/pain-guides" prefetch={false} className={styles.textLink}>
                See all pain guides
              </Link>
            </li>
            <li>
              <Link href="/conditions/compare" prefetch={false} className={styles.textLink}>
                All comparisons
              </Link>
            </li>
          </ul>
          <p className={styles.alsoLine}>
            Back pain:{' '}
            <Link href="/conditions/low-back-pain" prefetch={false}>
              Low back pain
            </Link>
            ,{' '}
            <Link href="/conditions/sciatica" prefetch={false}>
              Sciatica
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
