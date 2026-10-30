import type { CSSProperties } from 'react';
import { SIGNATURE_GLYPHS, SIGNATURE_STROKES, SIGNATURE_VIEWBOX } from './signature-data';
import styles from './Home.module.css';

/**
 * Kareem's name, writing itself in. The letter outlines are drawn through a
 * mask of pen strokes traced through them; each stroke draws on in turn
 * (stroke-dashoffset), so the ink appears in the order a hand would write it.
 * Pure CSS: it runs before hydration, starts at --sig-start (set in
 * Home.module.css) and shows complete with reduced motion or no CSS
 * animation. Decorative; the h1 carries the name as text.
 *
 * A server component, passed into the hero as a prop, so the path data is in
 * the HTML only and not in the hero's JavaScript.
 */
export default function Signature({ className = '' }: { className?: string }) {
  return (
    <svg className={`${styles.signature} ${className}`} viewBox={SIGNATURE_VIEWBOX} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="signature-ink" x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0" stopColor="#efe2bf" />
          <stop offset="0.55" stopColor="#d6bf8e" />
          <stop offset="1" stopColor="#bf9f68" />
        </linearGradient>
        <mask id="signature-pen" maskUnits="userSpaceOnUse">
          <g className={styles.signaturePen}>
            {SIGNATURE_STROKES.map((s, i) => (
              <path
                key={i}
                d={s.d}
                pathLength={1}
                strokeWidth={s.w}
                style={{ '--at': `${s.at}ms`, '--ms': `${s.ms}ms` } as CSSProperties}
              />
            ))}
          </g>
        </mask>
      </defs>
      <path d={SIGNATURE_GLYPHS} fill="url(#signature-ink)" mask="url(#signature-pen)" />
    </svg>
  );
}
