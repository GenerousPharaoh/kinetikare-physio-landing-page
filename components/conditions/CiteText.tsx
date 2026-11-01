'use client';

/**
 * CiteText
 *
 * Prose with its narrative citations made clickable. A sentence such as
 * "The UK FROST trial (Rangan et al., Lancet 2020) compared ..." keeps its
 * words exactly; the citation inside the brackets becomes a quiet link to
 * the paper's PubMed record (or DOI), opening in a new tab. The link targets
 * live in lib/citation-links.ts, keyed by condition slug and matched as
 * exact text, so a page only ever links the citations that were checked
 * for it (2026-11-01).
 *
 * Text between the citations goes through GlossaryText when `glossary` is
 * on (the science paragraphs and rehab phases, which already had popovers)
 * and renders plain when it is off (FAQ answers and self-care notes, which
 * never had them).
 */

import React from 'react';
import GlossaryText from './GlossaryText';
import { CITATION_LINKS } from '@/lib/citation-links';

interface Span {
  start: number;
  end: number;
  url: string;
  title?: string;
}

export interface CiteTextProps {
  slug: string;
  text: string;
  glossary?: boolean;
  usedTerms?: Set<string>;
}

export default function CiteText({ slug, text, glossary = false, usedTerms }: CiteTextProps) {
  const links = CITATION_LINKS[slug];
  const plain = (s: string, key: React.Key) =>
    glossary ? <GlossaryText key={key} text={s} usedTerms={usedTerms} /> : <React.Fragment key={key}>{s}</React.Fragment>;

  if (!links || links.length === 0) return <>{plain(text, 'all')}</>;

  // Longest citation text first, so "(Vuurberg et al., 2018; Martin et al., JOSPT 2021)"
  // is claimed before "Martin et al., JOSPT 2021" could be, then non-overlapping.
  const spans: Span[] = [];
  for (const link of [...links].sort((a, b) => b.text.length - a.text.length)) {
    let from = 0;
    for (;;) {
      const i = text.indexOf(link.text, from);
      if (i < 0) break;
      const end = i + link.text.length;
      if (!spans.some((s) => i < s.end && end > s.start)) spans.push({ start: i, end, url: link.url, title: link.title });
      from = end;
    }
  }
  if (spans.length === 0) return <>{plain(text, 'all')}</>;
  spans.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let pos = 0;
  spans.forEach((s, n) => {
    if (s.start > pos) nodes.push(plain(text.slice(pos, s.start), `t${n}`));
    const raw = text.slice(s.start, s.end);
    // Keep the brackets outside the link so the underline sits under the citation itself.
    const m = raw.match(/^\(([\s\S]*)\)$/);
    const label = m ? m[1] : raw;
    const link = (
      <a key={`c${n}`} className="cite" href={s.url} title={s.title} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
    if (m) nodes.push(<React.Fragment key={`p${n}`}>({link})</React.Fragment>);
    else nodes.push(link);
    pos = s.end;
  });
  if (pos < text.length) nodes.push(plain(text.slice(pos), 'tail'));
  return <>{nodes}</>;
}
