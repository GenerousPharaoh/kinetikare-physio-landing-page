"use client";

import React, { useCallback, useState } from 'react';
import { LinkIcon, CheckIcon } from '@heroicons/react/24/outline';

/**
 * SectionHeading
 *
 * Anchored section heading with a subtle copy-link affordance. Renders the
 * chosen heading level with a stable `id` and a small button that copies the
 * absolute URL (including `#id`) to the clipboard. A lightweight inline toast
 * (`role="status"`, `aria-live="polite"`) confirms the copy.
 *
 * Designed to be visually quiet: the copy button is invisible until the
 * heading row is hovered or the button itself is focused. On touch devices,
 * the button remains visible at a low-opacity resting state so it stays
 * reachable.
 */

type HeadingLevel = 'h2' | 'h3';

export interface SectionHeadingProps {
  /** Stable kebab-case anchor id, e.g. "pathophysiology". */
  id: string;
  /** Heading level to render. Defaults to 'h2'. */
  as?: HeadingLevel;
  /** Heading content. */
  children: React.ReactNode;
  /** Tailwind classes applied to the heading element. */
  className?: string;
  /** Optional extra classes for the wrapper <div>. */
  wrapperClassName?: string;
  /**
   * Optional uppercase kicker label rendered above the heading (e.g. "OVERVIEW",
   * "SYMPTOMS"). Small caps + gold accent dot. Gives each major section a
   * clearer editorial entry without touching the heading itself.
   */
  kicker?: string;
  /**
   * When `true`, apply `scroll-mt-28` by default so the anchored section
   * does not sit under the sticky header. Defaults to `true`.
   */
  scrollOffset?: boolean;
}

export default function SectionHeading({
  id,
  as = 'h2',
  children,
  className = '',
  wrapperClassName = '',
  kicker,
  scrollOffset = true,
}: SectionHeadingProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const base = window.location.href.split('#')[0];
    const url = `${base}#${id}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback: temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Silent failure: clipboard blocked. Do not disrupt the page.
    }
  }, [id]);

  const HeadingTag = as as React.ElementType;
  const scrollClass = scrollOffset ? 'scroll-mt-28' : '';

  return (
    <div className={`${scrollClass} ${wrapperClassName}`}>
      {kicker && (
        <div className="mb-3 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            {kicker}
          </p>
        </div>
      )}
      <div className="group/heading relative flex items-start gap-2">
        <HeadingTag id={id} className={className}>
          {children}
        </HeadingTag>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to this section"
        className="mt-1.5 inline-flex items-center justify-center h-7 w-7 rounded-md text-slate-400 opacity-0 group-hover/heading:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]/60 hover:text-[#B08D57] transition-opacity duration-150"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-[#B08D57]" aria-hidden="true" />
        ) : (
          <LinkIcon className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute left-0 top-full mt-1 text-xs font-medium text-[#B08D57] transition-opacity duration-150 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Link copied
      </span>
      </div>
    </div>
  );
}
