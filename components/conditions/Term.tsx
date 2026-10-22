'use client';

/**
 * Term
 *
 * Wraps a technical term inline with a subtle dotted gold underline and a
 * definition popover from lib/glossary.
 *
 * Behavior:
 *  - Opens on click, tap, keyboard focus. No hover-only dependency.
 *  - Escape closes and returns focus to the trigger.
 *  - Click / tap outside closes.
 *  - `aria-describedby` on trigger points at the popover content for SRs.
 *  - Missing glossary entries render children unchanged (no-op fallback).
 *  - Desktop: collision-aware inline popover (flips above trigger if
 *    there isn't room below).
 *  - Mobile (< 640px): bottom-anchored sheet card centered over a dimmed
 *    backdrop, so the definition is never cramped into a narrow column
 *    directly under the trigger.
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { GLOSSARY, type GlossaryEntry } from '@/lib/glossary';
import { useModalDialog } from '@/hooks/useModalDialog';

export interface TermProps {
  /** Glossary key (e.g. 'tendinopathy'). If missing from the glossary the
   *  wrapper is a no-op and children render unchanged. */
  termId: string;
  /** The surface text to display inline (may differ from the canonical
   *  term, e.g. a plural or an alias). */
  children: React.ReactNode;
}

const MOBILE_BREAKPOINT_PX = 640;

// Only one Term popover should be visible at a time. When a Term opens,
// it dispatches this event; every other Term listens for it and closes
// itself if the event wasn't its own. Keeps implementation lightweight
// (no context provider required around the component tree).
const TERM_OPEN_EVENT = 'kk-term-open';

export default function Term({ termId, children }: TermProps) {
  const entry: GlossaryEntry | undefined = GLOSSARY[termId];
  const popoverId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const restoringFocus = useRef(false);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    if (document.activeElement !== triggerRef.current) {
      // A mobile dialog restores focus after removing inert from the page.
      // That focus return must not open the definition again.
      restoringFocus.current = true;
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, []);
  useModalDialog(open && isMobile, popoverRef, handleClose);

  // When a different Term announces itself open, close this one.
  useEffect(() => {
    const onOtherOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ id: string }>).detail;
      if (detail?.id !== popoverId) setOpen(false);
    };
    document.addEventListener(TERM_OPEN_EVENT, onOtherOpen);
    return () => document.removeEventListener(TERM_OPEN_EVENT, onOtherOpen);
  }, [popoverId]);

  // When this Term opens, announce it so sibling Terms can close.
  useEffect(() => {
    if (!open) return;
    document.dispatchEvent(
      new CustomEvent(TERM_OPEN_EVENT, { detail: { id: popoverId } }),
    );
  }, [open, popoverId]);

  // Track mobile vs desktop so we can switch the rendering model. Media
  // query listener rather than a one-shot on mount so rotation / resize
  // keeps behavior correct.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    // Modern + legacy Safari compatibility.
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  // Close on outside click / Escape; dismisses predictably whether the
  // popover was opened by tap, click or keyboard.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (popoverRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      if (isMobile) handleClose();
      else close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isMobile) {
        e.preventDefault();
        handleClose();
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
  }, [open, isMobile, close, handleClose]);

  // Portals escape transformed sections. Clamp to both viewport edges and
  // remeasure while scrolling so a definition stays beside its own term.
  useLayoutEffect(() => {
    if (!open || isMobile) return;
    const update = () => {
      const trigger = triggerRef.current;
      const popover = popoverRef.current;
      if (!trigger || !popover) return;
      const rect = trigger.getBoundingClientRect();
      const box = popover.getBoundingClientRect();
      const below = window.innerHeight - rect.bottom;
      const top = below < box.height + 8 && rect.top > below
        ? rect.top - box.height - 8
        : rect.bottom + 8;
      setPosition({
        top: Math.max(12, Math.min(top, window.innerHeight - box.height - 12)),
        left: Math.max(12, Math.min(rect.left, window.innerWidth - box.width - 12)),
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true, capture: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [open, isMobile]);

  if (!entry) {
    // Nothing to annotate - render children passthrough.
    return <>{children}</>;
  }

  return (
    <span className="relative inline">
      <button
        ref={triggerRef}
        type="button"
        aria-describedby={open ? popoverId : undefined}
        aria-expanded={open}
        onClick={(event) => {
          // Focus and hover can open a desktop tooltip before click fires.
          // Keep that first activation open; touch can still toggle a sheet.
          if (!isMobile || event.detail === 0) setOpen(true);
          else setOpen((value) => !value);
        }}
        onMouseEnter={() => {
          // Hover-open only on desktop; mobile opens via tap.
          if (!isMobile) setOpen(true);
        }}
        onFocus={(event) => {
          if (restoringFocus.current) {
            restoringFocus.current = false;
            return;
          }
          if (event.currentTarget.matches(':focus-visible')) setOpen(true);
        }}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null;
          if (next && popoverRef.current?.contains(next)) return;
          setOpen(false);
        }}
        className="group/term inline p-0 min-h-0 min-w-0 shadow-none text-inherit text-[length:inherit] leading-[inherit] cursor-help rounded-sm underline decoration-dotted decoration-[#B08D57]/60 underline-offset-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/60 focus-visible:ring-offset-1 hover:decoration-[#B08D57]"
      >
        {children}
        <InformationCircleIcon
          aria-hidden="true"
          className="ml-[3px] hidden sm:inline-block h-[11px] w-[11px] -translate-y-[1px] text-[#B08D57]/50 group-hover/term:text-[#B08D57] group-focus-visible/term:text-[#B08D57] transition-colors"
        />
      </button>

      {open && !isMobile && createPortal(
        <span
          ref={popoverRef}
          id={popoverId}
          role="tooltip"
          onMouseLeave={close}
          className="term-popover-desktop fixed z-[70] block w-[min(20rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-y-auto bg-white rounded-md border border-slate-200 shadow-lg shadow-slate-900/5 p-3.5 text-left normal-case"
          style={position}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6F0A]">
            {entry.term}
          </p>
          <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
            {entry.definition}
          </p>
        </span>, document.body
      )}

      {open && isMobile && createPortal(
        <>
          {/* The portal keeps the sheet fixed to the viewport even inside
              animated cards and expanded rehabilitation phases. */}
          <span
            aria-hidden="true"
            data-dialog-backdrop
            onClick={handleClose}
            className="term-sheet-backdrop fixed inset-0 z-[70] bg-slate-900/25 backdrop-blur-[1px]"
          />
          {/* Bottom-anchored sheet. Fixed to viewport, full-width minus a
              safe inset. Rounded top, subtle lift. Safe-area aware. */}
          <span
            ref={popoverRef}
            id={popoverId}
            role="dialog"
            aria-modal="true"
            aria-label={entry.term}
            tabIndex={-1}
            className="term-sheet fixed inset-x-3 bottom-3 z-[80] block mx-auto max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 p-4 text-left normal-case"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6F0A]">
              {entry.term}
            </p>
            <p className="mt-1.5 text-[14px] text-slate-700 leading-relaxed">
              {entry.definition}
            </p>
            <button
              type="button"
              aria-label="Close definition"
              onClick={handleClose}
              className="absolute top-1.5 right-1.5 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/60 transition-colors"
            >
              <XMarkIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </span>
        </>, document.body
      )}

      {/* Scoped keyframes: subtle scale-fade for desktop popover, slide-up
          for mobile sheet. Kept inline so we don't pollute globals. */}
      <style jsx>{`
        .term-popover-desktop {
          animation: term-pop-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top left;
        }
        @keyframes term-pop-in {
          from {
            opacity: 0;
            transform: translateY(-2px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .term-sheet-backdrop {
          animation: term-fade-in 180ms ease-out;
        }
        .term-sheet {
          animation: term-sheet-in 220ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes term-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes term-sheet-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .term-popover-desktop,
          .term-sheet-backdrop,
          .term-sheet {
            animation: none;
          }
        }
      `}</style>
    </span>
  );
}
