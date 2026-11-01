import { Fragment, type ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const nowrap = { whiteSpace: 'nowrap' } as const;

/**
 * An action label that ends in a small arrow, with the last word held to
 * the arrow so the arrow never wraps onto a line of its own. The text is
 * unchanged.
 */
export function ActionLabel({ text }: { text: string }) {
  const cut = text.lastIndexOf(' ');
  const head = cut === -1 ? '' : text.slice(0, cut + 1);
  const last = cut === -1 ? text : text.slice(cut + 1);
  return (
    <>
      {head}
      <span style={nowrap}>
        {last}
        <ArrowRightIcon aria-hidden="true" />
      </span>
    </>
  );
}

/**
 * Text whose hyphenated words do not break at the hyphen ("Post-Surgical"
 * stays on one line in a large heading). The text is unchanged.
 */
export function KeepHyphens({ text }: { text: string }): ReactNode {
  if (!text.includes('-')) return text;
  return text.split(/(\S*-\S*)/).map((part, i) =>
    part.includes('-') ? (
      <span key={i} style={nowrap}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
