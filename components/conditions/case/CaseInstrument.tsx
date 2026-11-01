'use client';

import React, { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRightIcon, ListBulletIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
  reviewed,
  readMinutes,
}: {
  sections: CaseSection[];
  slug: string;
  name: string;
  region: string;
  plateName?: string;
  reviewed?: string | null;
  readMinutes?: number;
}) {
  const pagePath = `/conditions/${slug}`;
  const [active, setActive] = useState('top');
  const [marker, setMarker] = useState({ top: 0, height: 28 });
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
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
      let current = 'top';
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
      const link = listRef.current?.querySelector<HTMLElement>(current === 'top' ? 'a:first-child' : `a[href="#${current}"]`);
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

  // The section panel drops down from the strip (the strip stays visible, so
  // its button both opens and closes). Escape or a tap outside closes it;
  // focus moves to the first link and back to the button on close; the page
  // behind does not scroll meanwhile (locked on the root, not the body, so
  // the sticky strip keeps its place).
  const listBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const btn = listBtnRef.current;
    const panel = sheetRef.current;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const first = sheetRef.current?.querySelector<HTMLElement>('a');
    requestAnimationFrame(() => first?.focus({ preventScroll: true }));
    return () => {
      root.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      // Back to the button unless a chosen section already took focus.
      const a = document.activeElement;
      if (!a || a === document.body || panel?.contains(a)) btn?.focus({ preventScroll: true });
    };
  }, [open]);

  // Keep the active tab in view in the phone strip as the reader scrolls.
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.querySelector<HTMLElement>('[aria-current]');
    if (!row || !tab) return;
    const left = tab.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft - 10;
    if (Math.abs(row.scrollLeft - left) > 2) row.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  // Every in-page link on the sheet (the glance panel, "check when these
  // symptoms need a doctor first") scrolls smoothly and moves focus, the same
  // as the index. The site sets scroll-behavior: auto, so this is the only
  // place that animates.
  useEffect(() => {
    const page = document.querySelector<HTMLElement>('[data-case-page]');
    if (!page) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest('a[href^="#"]');
      if (!a || !page.contains(a) || a.closest('[data-case-index]')) return;
      const id = decodeURIComponent(a.getAttribute('href')!.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
      if (!el.hasAttribute('tabindex')) el.tabIndex = -1;
      el.focus({ preventScroll: true });
    };
    page.addEventListener('click', onClick);
    return () => page.removeEventListener('click', onClick);
  }, [slug]);

  const current = active === 'top' ? 'Overview' : sections.find((s) => s.id === active)?.label ?? '';
  const zoom = active === 'science';

  // Smooth scroll to the section (the site sets scroll-behavior: auto) and
  // keep the hash in the address bar.
  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setOpen(false);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const land = (el: HTMLElement | null) => {
      if (!el) return;
      if (!el.hasAttribute('tabindex')) el.tabIndex = -1;
      el.focus({ preventScroll: true });
    };
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', window.location.pathname);
      land(document.querySelector('h1'));
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    land(el);
  };

  const entries = [{ id: 'top', label: 'Overview' }, ...sections];
  const index = (
    <>
      {entries.map((s) => (
        <a key={s.id} href={s.id === 'top' ? pagePath : `#${s.id}`} aria-current={active === s.id ? 'location' : undefined} onClick={(e) => go(e, s.id)}>
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
        {reviewed && (
          <p className={styles.instMeta}>
            Reviewed {reviewed}
            {readMinutes ? ` · ${readMinutes} min read` : ''}
          </p>
        )}
        <CasePlate key={slug} slug={slug} priority zoom={zoom} className={styles.viewer} sizes="300px" />
        {plateName && (
          <p className={`${styles.viewerCap} ${styles.mono}`}>
            Plate <b>{plateName}</b>
          </p>
        )}
        <div className={styles.instProgress} aria-hidden="true" style={{ '--p': `${Math.round(progress * 100)}%` } as CSSProperties}>
          <i />
        </div>
        <nav aria-label="On this page" data-case-index="">
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
        <nav ref={tabsRef} className={styles.secTabs} aria-label="Sections" data-case-index="">
          {entries.map((s) => (
            <a key={s.id} href={s.id === 'top' ? pagePath : `#${s.id}`} className={styles.secTab} aria-current={active === s.id ? 'location' : undefined} onClick={(e) => go(e, s.id)}>
              {s.label}
            </a>
          ))}
        </nav>
        <button ref={listBtnRef} type="button" className={`${styles.plain} ${styles.stripList}`} aria-expanded={open} aria-controls="case-section-panel" aria-label={open ? 'Close the section list' : `All sections. Reading: ${current}`} onClick={() => setOpen((v) => !v)}>
          {open ? <XMarkIcon aria-hidden="true" /> : <ListBulletIcon aria-hidden="true" />}
        </button>
        <span aria-hidden="true" className={styles.stripProgress} />
      </div>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />
          <div ref={sheetRef} id="case-section-panel" className={styles.panelNav}>
            <nav aria-label="On this page" data-case-index="">{index}</nav>
          </div>
        </>
      )}
    </>
  );
}
