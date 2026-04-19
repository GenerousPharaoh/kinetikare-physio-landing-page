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
 * Layout principles:
 *  - Mobile: stacked block, left-aligned. Name + role on one line (wraps if
 *    necessary). Credentials / CPO on their own muted line. Clinic and
 *    last-reviewed share a trailing line separated by a middot, wrapping
 *    cleanly when there isn't room.
 *  - Desktop: same block, slightly tighter — nothing is pushed to the right
 *    edge of the hero column, so the byline can never orphan a fragment.
 *  - No card chrome: single top border, mutes into the page like an
 *    editorial byline rather than a component.
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

function Divider() {
  return (
    <span aria-hidden="true" className="text-slate-300">
      &middot;
    </span>
  );
}

export default function AuthorByline({ lastReviewed, conditionName }: AuthorBylineProps) {
  const reviewed = lastReviewed ? formatReviewedDate(lastReviewed) : null;
  const ariaLabel = conditionName
    ? `Author and review information for ${conditionName}`
    : 'Author and review information';

  return (
    <aside
      aria-label={ariaLabel}
      className="mt-6 border-t border-slate-200/80 pt-3"
    >
      <address className="not-italic text-[13px] leading-relaxed text-slate-600">
        {/* Line 1: person. Name is the visual anchor; role follows on the
            same line. Credentials and CPO fall to a softer secondary line
            so the primary line never has to fight for room with 4 tokens. */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <Link
            href="/about"
            className="text-slate-900 font-semibold tracking-tight hover:text-[#B08D57] transition-colors"
          >
            {AUTHOR_NAME}
          </Link>
          <span className="text-slate-700">{AUTHOR_ROLE}</span>
        </div>

        {/* Line 2: credentials + CPO registration, quieter. */}
        <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-slate-500">
          <span>{AUTHOR_CREDENTIALS}</span>
          <Divider />
          <span>
            <abbr
              title="College of Physiotherapists of Ontario registration"
              className="no-underline"
            >
              CPO
            </abbr>{' '}
            {CPO_REGISTRATION}
          </span>
        </div>

        {/* Line 3: where + when, joined by a middot. Wraps onto a new line
            on narrow viewports without either fragment being stranded. */}
        <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-slate-500">
          <span>
            Practicing at{' '}
            <Link
              href={CLINIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-[#B08D57] transition-colors"
            >
              {CLINIC_NAME}
            </Link>
            , {CLINIC_CITY}
          </span>
          {reviewed?.label && (
            <>
              <Divider />
              <span>
                Last reviewed{' '}
                <time dateTime={reviewed.datetime} className="text-slate-600">
                  {reviewed.label}
                </time>
              </span>
            </>
          )}
        </div>
      </address>
    </aside>
  );
}
