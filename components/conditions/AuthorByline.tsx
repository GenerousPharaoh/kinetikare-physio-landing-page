import React from 'react';
import Link from 'next/link';

/**
 * AuthorByline
 *
 * Compact, understated authorship byline shown on condition pages beneath the
 * hero H1. Communicates E-E-A-T: the named registered physiotherapist who
 * wrote and reviews the clinical content, his credentials, CPO registration
 * number, practice location, and (when provided) the date the content was
 * last reviewed.
 *
 * Server component: purely presentational, no state.
 */

export interface AuthorBylineProps {
  /** ISO date string (e.g. '2026-04-16'). When present, renders a "Last reviewed" line. */
  lastReviewed?: string;
  /** Condition name, used for screen-reader context. Optional. */
  conditionName?: string;
}

const AUTHOR_NAME = 'Kareem Hassanein';
const AUTHOR_ROLE = 'Registered Physiotherapist';
const AUTHOR_CREDENTIALS = 'MSc PT, BSc Kinesiology';
const CPO_REGISTRATION = '#20079';
const CLINIC_NAME = 'Endorphins Health & Wellness Centre';
const CLINIC_CITY = 'Burlington';
const CLINIC_URL = 'https://endorphinshealth.com';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatReviewedDate(iso: string): { label: string | null; datetime: string } {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return { label: null, datetime: iso };
  }
  const label = `${MONTH_NAMES[parsed.getUTCMonth()]} ${parsed.getUTCDate()}, ${parsed.getUTCFullYear()}`;
  return { label, datetime: iso };
}

export default function AuthorByline({ lastReviewed, conditionName }: AuthorBylineProps) {
  const reviewed = lastReviewed ? formatReviewedDate(lastReviewed) : null;
  const ariaLabel = conditionName
    ? `Author and review information for ${conditionName}`
    : 'Author and review information';

  return (
    <aside
      aria-label={ariaLabel}
      className="mt-5 border-t border-b border-slate-200/80 py-3"
    >
      <address className="not-italic flex flex-col md:flex-row md:items-center md:flex-wrap gap-x-3 gap-y-1 text-sm md:text-xs text-slate-600">
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]"
          />
          <span className="text-slate-500">Written and reviewed by</span>
        </span>

        <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
          <Link
            href="/about"
            className="font-semibold text-slate-900 hover:text-[#B08D57] transition-colors"
          >
            {AUTHOR_NAME}
          </Link>
          <span className="text-slate-700">,</span>
          <span className="text-slate-700">{AUTHOR_ROLE}</span>
          <span className="text-slate-400" aria-hidden="true">
            &middot;
          </span>
          <span className="text-slate-600">{AUTHOR_CREDENTIALS}</span>
          <span className="text-slate-400" aria-hidden="true">
            &middot;
          </span>
          <span className="text-slate-600">
            <abbr
              title="College of Physiotherapists of Ontario registration"
              className="no-underline"
            >
              CPO
            </abbr>{' '}
            {CPO_REGISTRATION}
          </span>
        </span>

        <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 md:ml-auto">
          <span className="text-slate-500">Practicing at</span>
          <Link
            href={CLINIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-[#B08D57] transition-colors"
          >
            {CLINIC_NAME}
          </Link>
          <span className="text-slate-500">, {CLINIC_CITY}</span>
        </span>
      </address>

      {reviewed?.label && (
        <p className="mt-1.5 text-xs text-slate-500">
          Last reviewed:{' '}
          <time dateTime={reviewed.datetime} className="text-slate-600">
            {reviewed.label}
          </time>
        </p>
      )}
    </aside>
  );
}
