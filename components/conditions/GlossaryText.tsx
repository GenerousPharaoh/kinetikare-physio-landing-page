'use client';

/**
 * GlossaryText
 *
 * Takes a plain-text passage and returns React nodes with the FIRST
 * occurrence of each known glossary term wrapped in a <Term> popover.
 * Later occurrences are left untouched so the page doesn't turn into a
 * forest of dotted underlines.
 *
 * Scope of matches is per-passage by default. Pass a shared `usedTerms`
 * Set to dedupe across multiple paragraphs / sections rendered in
 * sequence (e.g. the pathophysiology section rendered as multiple
 * paragraphs should only highlight each term once across them all).
 */

import React from 'react';
import { GLOSSARY } from '@/lib/glossary';
import Term from './Term';

interface Match {
  start: number;
  end: number;
  termId: string;
  original: string;
}

function findFirstMatch(text: string, excluded: Set<string>): Match | null {
  let best: Match | null = null;
  for (const [termId, entry] of Object.entries(GLOSSARY)) {
    if (excluded.has(termId)) continue;
    // Try canonical term plus any aliases, longest first so
    // "eccentric contractions" beats "eccentric" if both match at 0.
    const variants = [entry.term, ...(entry.aliases ?? [])]
      .filter(Boolean)
      .sort((a, b) => b.length - a.length);
    for (const variant of variants) {
      const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Whole-word, case-insensitive.
      const re = new RegExp(`\\b(${escaped})\\b`, 'i');
      const m = re.exec(text);
      if (m && m.index !== undefined) {
        if (!best || m.index < best.start || (m.index === best.start && (m[0].length) > (best.end - best.start))) {
          best = {
            start: m.index,
            end: m.index + m[0].length,
            termId,
            original: m[0],
          };
          break; // first-matching variant wins for this term
        }
      }
    }
  }
  return best;
}

export interface GlossaryTextProps {
  text: string;
  /** Shared set so multiple paragraphs can dedupe matches across them. */
  usedTerms?: Set<string>;
}

export default function GlossaryText({ text, usedTerms }: GlossaryTextProps) {
  const nodes: React.ReactNode[] = [];
  const local = usedTerms ?? new Set<string>();
  let remaining = text;
  let guard = 0;
  while (remaining.length > 0 && guard < 200) {
    guard += 1;
    const match = findFirstMatch(remaining, local);
    if (!match) {
      nodes.push(remaining);
      break;
    }
    if (match.start > 0) {
      nodes.push(remaining.substring(0, match.start));
    }
    nodes.push(
      <Term key={`${match.termId}-${nodes.length}`} termId={match.termId}>
        {match.original}
      </Term>
    );
    local.add(match.termId);
    remaining = remaining.substring(match.end);
  }
  return <>{nodes}</>;
}
