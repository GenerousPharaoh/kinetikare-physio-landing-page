import type { CSSProperties } from 'react';

/**
 * Kareem's low-poly illustrations of himself at work (his own, October
 * 2026), the set the home hero plays through. Transparent WebP, 1100px
 * tall, each figure standing on the bottom edge of its picture. `aspect` is
 * the picture's width over height; `fade` names the edges where a scene
 * runs off its picture (b, l, r) and should fade out instead of ending in
 * a hard line. The services page sets one beside each service.
 */
export interface Figure {
  src: string;
  aspect: number;
  label: string;
  fade?: string;
}

const FIGURE_LIST = {
  hipFlexion: { src: '/images/hero-art/kareem-hip-flexion.webp', aspect: 0.86, label: 'Kareem bending the hip and knee of a patient lying on the table', fade: 'blr' },
  bandRow: { src: '/images/hero-art/kareem-band-row.webp', aspect: 0.743, label: 'Kareem pulling a resistance band in a split stance', fade: 'r' },
  shoulderStretch: { src: '/images/hero-art/kareem-shoulder-stretch.webp', aspect: 0.82, label: 'Kareem guiding a patient through a shoulder stretch', fade: 'br' },
  consultation: { src: '/images/hero-art/kareem-consultation.webp', aspect: 0.815, label: 'Kareem going over a plan with a patient on a tablet', fade: 'lr' },
  stepUp: { src: '/images/hero-art/kareem-step-up.webp', aspect: 0.522, label: 'Kareem stepping up onto a box' },
  kneeFlexion: { src: '/images/hero-art/kareem-knee-flexion.webp', aspect: 0.839, label: 'Kareem holding a patient’s knee and ankle to bend the leg on the table', fade: 'blr' },
  shoulderElevation: { src: '/images/hero-art/kareem-shoulder-elevation.webp', aspect: 0.569, label: 'Kareem raising a standing patient’s arm while feeling the shoulder blade' },
  kettlebellDeadlift: { src: '/images/hero-art/kareem-kettlebell-deadlift.webp', aspect: 0.693, label: 'Kareem lifting a kettlebell from the floor' },
  shoulderCheckStanding: { src: '/images/hero-art/kareem-shoulder-check-standing.webp', aspect: 0.598, label: 'Kareem checking a standing patient’s shoulder movement' },
  legAssessment: { src: '/images/hero-art/kareem-leg-assessment.webp', aspect: 0.841, label: 'Kareem assessing the hip and knee of a patient lying on the table', fade: 'blr' },
  shoulderMobility: { src: '/images/hero-art/kareem-shoulder-mobility.webp', aspect: 0.8, label: 'Kareem moving a patient’s arm overhead', fade: 'br' },
  sitToStand: { src: '/images/hero-art/kareem-sit-to-stand.webp', aspect: 0.805, label: 'Kareem helping a patient stand up from the table', fade: 'r' },
} as const satisfies Record<string, Figure>;

export type FigureKey = keyof typeof FIGURE_LIST;

export const FIGURES: Record<FigureKey, Figure> = FIGURE_LIST;

/** The mask that fades a figure's cut edges into the ground behind it. */
export function figureMask(fade?: string): CSSProperties | undefined {
  if (!fade) return undefined;
  const parts: string[] = [];
  if (fade.includes('b')) parts.push('linear-gradient(to top, transparent 0%, #000 18%)');
  const l = fade.includes('l');
  const r = fade.includes('r');
  if (l || r) {
    parts.push(`linear-gradient(to right, ${l ? 'transparent 0%, #000 12%' : '#000 0%'}, ${r ? '#000 88%, transparent 100%' : '#000 100%'})`);
  }
  const mask = parts.join(', ');
  return parts.length > 1
    ? { maskImage: mask, WebkitMaskImage: mask, maskComposite: 'intersect', WebkitMaskComposite: 'source-in' }
    : { maskImage: mask, WebkitMaskImage: mask };
}
