'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRightIcon, ChevronDownIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import CasePlate from './CasePlate';
import styles from './Case.module.css';

export interface CaseSection {
  id: string;
  label: string;
}

/**
 * The instrument: on desktop a dark panel pinned beside the sheet with the
 * plate in a viewer, the section index with a sliding marker, and booking;
 * on phones a dark strip under the site header naming the current section,
 * which opens the index as a sheet. One scroll listener drives both. The
 * viewer zooms into the plate while the science section is being read.
 */
export default function CaseInstrument({
  sections,
  slug,
  name,
  region,
  plateName,
}: {
  sections: CaseSection[];
  slug: string;
  name: string;
  region: string;
  plateName?: string;
}) {
  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [marker, setMarker] = useState({ top: 0, height: 28 });
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const ids = sections.map((s) => s.id).join(',');

  useEffect(() => {
    const els = ids
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const column = document.querySelector<HTMLElement>('[data-case-column]');
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (els[0] ? parseFloat(getComputedStyle(els[0]).scrollMarginTop) || 0 : 0) + 24;
      let current = els[0]?.id ?? '';
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);
      if (column) {
        const rect = column.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.5;
        const done = Math.min(Math.max(-rect.top + window.innerHeight * 0.5, 0), Math.max(total, 1));
        setProgress(total > 0 ? done / total : 0);
      }
      const link = listRef.current?.querySelector<HTMLElement>(`a[href="#${current}"]`);
      if (link) setMarker({ top: link.offsetTop, height: link.offsetHeight });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, slug]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    sheetRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = sections.find((s) => s.id === active)?.label ?? sections[0]?.label ?? '';
  const zoom = active === 'science';

  const index = (
    <>
      {sections.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined} onClick={() => setOpen(false)}>
          <span className={styles.mono}>{String(i + 1).padStart(2, '0')}</span>
          <span>{s.label}</span>
          {open && <ArrowRightIcon aria-hidden="true" />}
        </a>
      ))}
    </>
  );

  return (
    <>
      <aside className={styles.instrument} aria-label="Condition overview">
        <span className={styles.chip}>
          <i aria-hidden="true" />
          <span className={styles.mono}>{region} · Condition</span>
        </span>
        <p className={styles.instName}>{name}</p>
        <CasePlate key={slug} slug={slug} priority zoom={zoom} className={styles.viewer} sizes="300px" />
        {plateName && (
          <p className={`${styles.viewerCap} ${styles.mono}`}>
            Plate <b>{plateName}</b>
          </p>
        )}
        <nav aria-label="On this page">
          <div ref={listRef} className={styles.index}>
            <span aria-hidden="true" className={styles.indicator} style={{ '--it': `${marker.top}px`, height: marker.height } as CSSProperties} />
            {index}
          </div>
        </nav>
        <div className={styles.instCta}>
          <a href={JANE_ASSESSMENT_URL} data-booking-source="condition_rail" target="_blank" rel="noopener noreferrer" className={styles.btnLight}>
            Book an assessment
            <ArrowRightIcon aria-hidden="true" />
          </a>
          <a href="tel:+19056346000" className={styles.btnDark} aria-label="Call the clinic at 905-634-6000">
            <PhoneIcon aria-hidden="true" />
          </a>
        </div>
      </aside>

      <div className={styles.strip} style={{ '--p': `${Math.round(progress * 100)}%` } as CSSProperties}>
        <CasePlate key={`${slug}-thumb`} slug={slug} className={styles.thumb} sizes="34px" />
        <button type="button" className={`${styles.plain} ${styles.stripBtn}`} aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
          <span className={styles.stripText}>
            <span className={styles.stripName}>{name}</span>
            <span className={`${styles.stripCurrent} ${styles.mono}`}>{current}</span>
          </span>
          <ChevronDownIcon aria-hidden="true" />
        </button>
        <span aria-hidden="true" className={styles.stripProgress} />
      </div>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />
          <div ref={sheetRef} className={styles.sheetNav} role="dialog" aria-modal="true" aria-label="On this page" tabIndex={-1}>
            <div className={styles.sheetHead}>
              <span className={styles.mono}>On this page</span>
              <button type="button" className={`${styles.plain} ${styles.sheetClose}`} aria-label="Close" onClick={() => setOpen(false)}>
                <XMarkIcon aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="On this page">{index}</nav>
          </div>
        </>
      )}
    </>
  );
}
