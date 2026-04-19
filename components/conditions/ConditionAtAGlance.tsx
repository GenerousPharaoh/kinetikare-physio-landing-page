import React from 'react';
import {
  ClockIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';

/**
 * ConditionAtAGlance
 *
 * An above-the-fold TL;DR card for condition pages. Surfaces three
 * patient-first answers that the long-form clinical prose buries:
 *   1. Typical recovery timeframe (from prognosis.timeline)
 *   2. What the first visit looks like (from whatToExpect.firstVisit)
 *   3. What actually helps (from evidenceBasedTreatment[0])
 *
 * Intentionally editorial, not a marketing dashboard. Gently collapses
 * to 2- or 1-column if any field is missing, and renders nothing if all
 * three are missing.
 */

interface ConditionAtAGlanceProps {
  condition: Condition;
}

/**
 * Pull a concise lead sentence from a longer paragraph. Splits on the
 * first sentence-ending period and trims. Falls back to the raw string
 * when the paragraph is too short to warrant trimming.
 */
function firstSentence(text: string | undefined, maxLen = 180): string | null {
  if (!text) return null;
  const cleaned = text.trim();
  if (cleaned.length === 0) return null;
  if (cleaned.length < 30) return cleaned;
  const firstPeriod = cleaned.indexOf('. ');
  const candidate = firstPeriod > 0 ? cleaned.slice(0, firstPeriod + 1) : cleaned;
  if (candidate.length <= maxLen) return candidate;
  // Truncate at last word boundary within maxLen
  const clipped = candidate.slice(0, maxLen);
  const lastSpace = clipped.lastIndexOf(' ');
  return (lastSpace > 40 ? clipped.slice(0, lastSpace) : clipped).replace(/[,;:\s]+$/, '') + '...';
}

type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

interface GlanceColumn {
  key: string;
  Icon: HeroIcon;
  label: string;
  answer: string;
  supporting?: string;
}

function buildColumns(condition: Condition): GlanceColumn[] {
  const columns: GlanceColumn[] = [];

  const recovery = firstSentence(condition.prognosis?.timeline);
  if (recovery) {
    columns.push({
      key: 'recovery',
      Icon: ClockIcon,
      label: 'Typical recovery',
      answer: recovery,
    });
  }

  const firstVisit = firstSentence(condition.whatToExpect?.firstVisit, 200);
  if (firstVisit) {
    columns.push({
      key: 'first-visit',
      Icon: ClipboardDocumentCheckIcon,
      label: 'First visit',
      answer: firstVisit,
    });
  }

  // What actually helps: prefer evidenceBasedTreatment[0], fall back to treatmentApproach.description
  const primaryTreatment = condition.evidenceBasedTreatment?.[0];
  if (primaryTreatment?.approach) {
    const evidence = firstSentence(primaryTreatment.evidence, 160);
    columns.push({
      key: 'what-helps',
      Icon: AcademicCapIcon,
      label: 'What actually helps',
      answer: primaryTreatment.approach,
      supporting: evidence ?? undefined,
    });
  } else if (condition.treatmentApproach?.title) {
    columns.push({
      key: 'what-helps',
      Icon: AcademicCapIcon,
      label: 'What actually helps',
      answer: condition.treatmentApproach.title,
      supporting: firstSentence(condition.treatmentApproach.description, 160) ?? undefined,
    });
  }

  return columns;
}

export default function ConditionAtAGlance({ condition }: ConditionAtAGlanceProps) {
  const columns = buildColumns(condition);
  if (columns.length === 0) return null;

  // Desktop column divider behavior depends on count
  const colsClass =
    columns.length === 1
      ? 'grid-cols-1'
      : columns.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return (
    <section
      aria-label="At a glance summary"
      className="mt-6"
    >
      <div className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-6 md:p-8">
        {/* Kicker matching SectionHeading pattern */}
        <div className="mb-5 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]"
          />
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            At a glance
          </p>
        </div>

        <dl
          className={`grid ${colsClass} gap-6 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200`}
        >
          {columns.map(({ key, Icon, label, answer, supporting }, idx) => (
            <div
              key={key}
              className={`${idx > 0 ? 'pt-5 md:pt-0 md:pl-10' : ''} ${
                idx > 0 && columns.length > 1 ? 'md:pl-10' : ''
              }`}
            >
              <Icon className="h-4 w-4 text-[#B08D57] mb-3" aria-hidden="true" />
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                {label}
              </dt>
              <dd className="m-0 text-base md:text-lg text-slate-800 leading-snug font-normal line-clamp-3">
                {answer}
              </dd>
              {supporting && (
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 m-0">
                  {supporting}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
