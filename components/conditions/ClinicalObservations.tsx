import React from 'react';

/**
 * ClinicalObservations
 *
 * Renders Kareem's first-person "Patterns I see in clinic" callout — editorial
 * clinical observations attached to a condition. Purely content-driven: when
 * `observations` is undefined, this component renders nothing and the page is
 * unaffected.
 *
 * Visual design: a distinct boxed callout with a gold left border (#B08D57),
 * a small kicker, a paragraph body, and an optional last-reviewed date. Designed
 * to read clearly as a quote from the clinician rather than encyclopedic prose.
 */

export interface ClinicalObservationsData {
  /** Heading shown above the body. Defaults to "Patterns I see in clinic" when omitted. */
  title?: string;
  /** First-person prose. If it contains `\n\n`, each chunk renders as its own paragraph. */
  body: string;
  /** ISO date string (e.g. '2026-04-16') shown as a small transparency note below the body. */
  lastReviewed?: string;
}

interface ClinicalObservationsProps {
  observations?: ClinicalObservationsData;
}

const DEFAULT_TITLE = 'Patterns I see in clinic';
const KICKER = 'From the clinic';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatReviewedDate(iso: string): string | null {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return null;
  return `${MONTH_NAMES[parsed.getUTCMonth()]} ${parsed.getUTCDate()}, ${parsed.getUTCFullYear()}`;
}

export default function ClinicalObservations({ observations }: ClinicalObservationsProps) {
  if (!observations) return null;
  const body = observations.body?.trim();
  if (!body) return null;

  const title = observations.title?.trim() || DEFAULT_TITLE;
  const paragraphs = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  const reviewedLabel = observations.lastReviewed
    ? formatReviewedDate(observations.lastReviewed)
    : null;

  return (
    <aside
      aria-label={title}
      className="relative bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-6 sm:p-8 md:p-10"
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-full bg-[#B08D57]"
        />
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
          {KICKER}
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight text-slate-900 mb-6">
        {title}
      </h2>

      <div className="space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {reviewedLabel && (
        <p className="mt-6 text-xs text-slate-500">
          Last reviewed: <time dateTime={observations.lastReviewed}>{reviewedLabel}</time>
        </p>
      )}
    </aside>
  );
}
