'use client';

/**
 * Term
 *
 * Wraps a technical term inline with a subtle dotted gold underline and a
 * popover containing a patient-friendly definition from lib/glossary.
 *
 * Design goals (from the 2026 tooltip/popover best-practices consensus):
 *  - Does not rely on hover alone: works on tap (mobile), click, and
 *    keyboard focus (Enter / Space).
 *  - Dismissable with Escape and with click-outside; Escape returns focus
 *    to the trigger.
 *  - Popover stays visible while hovered so users can read / select text.
 *  - `aria-describedby` on trigger points at the popover so screen readers
 *    announce the definition when the term is focused.
 *  - Renders nothing extra when the glossary has no entry (safe fallback).
 *  - Collision-aware: flips above the trigger if there's no room below.
 *
 * Implementation uses our own state + absolute-positioned element rather
 * than the native Popover API so behavior is consistent across Safari
 * versions and so we have full control over styling / animation.
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { GLOSSARY, type GlossaryEntry } from '@/lib/glossary';

type Placement = 'bottom' | 'top';

export interface TermProps {
  /** Glossary key (e.g. 'tendinopathy'). If missing from the glossary the
   *  wrapper is a no-op and children render unchanged. */
  termId: string;
  /** The surface text to display inline (may differ from the canonical
   *  term, e.g. a plural or an alias). */
  children: React.ReactNode;
}

const POPOVER_WIDTH = 320; // px; matches min(22rem, 90vw) visually

export default function Term({ termId, children }: TermProps) {
  const entry: GlossaryEntry | undefined = GLOSSARY[termId];
  const popoverId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>('bottom');

  const close = useCallback(() => setOpen(false), []);

  // Close on outside click / Escape; dismisses predictably whether the
  // popover was opened by tap, click or keyboard.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (popoverRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Decide whether to flip the popover above the trigger if there isn't
  // room below the viewport.
  useLayoutEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    // Popover is roughly 120-180px tall for short definitions.
    if (spaceBelow < 180 && spaceAbove > spaceBelow) {
      setPlacement('top');
    } else {
      setPlacement('bottom');
    }
  }, [open]);

  if (!entry) {
    // Nothing to annotate - render children passthrough.
    return <>{children}</>;
  }

  return (
    <span className="relative inline-flex items-baseline">
      <button
        ref={triggerRef}
        type="button"
        aria-describedby={open ? popoverId : undefined}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          // Keep open when focus moves into the popover itself.
          const next = e.relatedTarget as Node | null;
          if (next && popoverRef.current?.contains(next)) return;
          setOpen(false);
        }}
        className="group/term inline text-inherit cursor-help rounded-sm border-b border-dotted border-[#B08D57]/60 decoration-from-font focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/60 focus-visible:ring-offset-1 hover:border-[#B08D57]"
      >
        {children}
        <InformationCircleIcon
          aria-hidden="true"
          className="ml-0.5 inline-block h-3 w-3 -translate-y-[1px] text-[#B08D57]/70 group-hover/term:text-[#B08D57]"
        />
      </button>
      {open && (
        <span
          ref={popoverRef}
          id={popoverId}
          role="tooltip"
          onMouseLeave={close}
          className={`absolute z-40 ${
            placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          } left-0 w-[min(20rem,calc(100vw-2rem))] bg-white rounded-lg border border-slate-200 border-l-4 border-l-[#B08D57] shadow-xl p-4 text-left normal-case`}
          style={{ maxWidth: POPOVER_WIDTH }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
            {entry.term}
          </p>
          <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
            {entry.definition}
          </p>
          <button
            type="button"
            aria-label="Close definition"
            onClick={() => {
              close();
              triggerRef.current?.focus();
            }}
            className="absolute top-1.5 right-1.5 inline-flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/60"
          >
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </span>
      )}
    </span>
  );
}
