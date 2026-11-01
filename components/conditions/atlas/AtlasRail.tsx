'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import styles from './Atlas.module.css';

export interface AtlasSection {
  id: string;
  label: string;
}

/**
 * "On this page". Desktop: a sticky list in the left margin whose gold rule
 * fills down to the section being read. Phones: a slim bar under the site
 * header that names the current section, with a gold progress line along
 * its foot, and opens the list as a sheet. One scroll listener drives both.
 */
export default function AtlasRail({ sections, slug }: { sections: AtlasSection[]; slug: string }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [fill, setFill] = useState(0);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const ids = sections.map((s) => s.id).join(',');

  useEffect(() => {
    const els = ids
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const article = document.querySelector<HTMLElement>('[data-atlas-article]');
    let frame = 0;

    const update = () => {
      frame = 0;
      // A section is current once its top has crossed the line an anchor jump
      // lands it on (the scroll margin), with a little slack.
      const line = (els[0] ? parseFloat(getComputedStyle(els[0]).scrollMarginTop) || 0 : 0) + 24;
      let current = els[0]?.id ?? '';
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);

      // Reading progress through the article, for the phone bar.
      if (article) {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.5;
        const done = Math.min(Math.max(-rect.top + window.innerHeight * 0.5, 0), Math.max(total, 1));
        setProgress(total > 0 ? done / total : 0);
      }

      // The rail's gold rule fills to the middle of the current item.
      const list = listRef.current;
      if (list) {
        const link = list.querySelector<HTMLElement>(`a[href="#${current}"]`);
        if (link) setFill(link.offsetTop + link.offsetHeight / 2);
      }
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

  // The sheet: Escape closes, the body stays put behind it.
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

  return (
    <>
      <nav className={styles.rail} aria-label="On this page">
        <p className={styles.railTitle}>On this page</p>
        <ul ref={listRef} className={styles.railList} style={{ '--fill': `${fill}px` } as React.CSSProperties}>
          <span aria-hidden="true" className={styles.railFill} />
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.railCta}>
          <a
            href={JANE_ASSESSMENT_URL}
            data-booking-source="condition_rail"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
          >
            Book an assessment
            <ArrowRightIcon aria-hidden="true" />
          </a>
          <a href="tel:+19056346000" className={`${styles.textLink} ${styles.callLine}`}>
            <PhoneIcon aria-hidden="true" />
            (905) 634-6000
          </a>
        </div>
      </nav>

      <div className={styles.bar} style={{ '--p': `${Math.round(progress * 100)}%` } as React.CSSProperties}>
        <button
          type="button"
          className={styles.barBtn}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className={styles.barLabel}>On this page</span>
          <span className={styles.barCurrent}>{current}</span>
          <ChevronDownIcon aria-hidden="true" />
        </button>
        <span aria-hidden="true" className={styles.barProgress} />
      </div>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            ref={sheetRef}
            className={styles.sheet}
            role="dialog"
            aria-modal="true"
            aria-label="On this page"
            tabIndex={-1}
          >
            <div className={styles.sheetHead}>
              <span className={styles.label}>On this page</span>
              <button type="button" className={styles.sheetClose} aria-label="Close" onClick={() => setOpen(false)}>
                <XMarkIcon aria-hidden="true" />
              </button>
            </div>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined} onClick={() => setOpen(false)}>
                    {s.label}
                    <ArrowRightIcon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
