'use client';

import { useId, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import GlossaryText from '../GlossaryText';
import type { ExerciseProgressionPhase } from '@/lib/conditions-data';
import styles from './Atlas.module.css';

/**
 * The three rehabilitation phases as a timeline: a gold rail with a marker
 * per phase, the phase's time span lifted out of its title, the example
 * exercises as hairline rows and the milestones as "Move on when". Each phase
 * opens with an eased height. Until the reader touches one, the phases are
 * open on desktop and closed on phones (a CSS media query, so the first paint
 * is right without JavaScript). The content is always in the HTML for the
 * HowTo schema and search engines.
 */

// "Static Holds and Pain Control (Weeks 1 to 4)" -> title and time span.
function splitTitle(title: string): { name: string; when?: string } {
  const clean = title.replace(/^\s*phase\s*\d+\s*[:.\-]\s*/i, '').trim();
  const m = clean.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  if (m) return { name: m[1].trim(), when: m[2].trim() };
  return { name: clean };
}

function Phase({ phase, index, usedTerms }: { phase: ExerciseProgressionPhase; index: number; usedTerms: Set<string> }) {
  const [open, setOpen] = useState<'auto' | 'true' | 'false'>('auto');
  const id = useId();
  const { name, when } = splitTitle(phase.title);
  const toggle = () => {
    setOpen((v) => {
      if (v === 'auto') return window.matchMedia('(min-width: 1024px)').matches ? 'false' : 'true';
      return v === 'true' ? 'false' : 'true';
    });
  };
  return (
    <li className={styles.phase} data-open={open}>
      <h4>
        <button
          type="button"
          className={styles.phaseHead}
          aria-expanded={open === 'true' ? true : open === 'false' ? false : undefined}
          aria-controls={id}
          onClick={toggle}
        >
          <span>
            <span className={styles.phaseWhen}>Phase {index + 1}{when ? ` · ${when}` : ''}</span>
            <span className={styles.phaseTitle}>{name}</span>
          </span>
          <ChevronDownIcon aria-hidden="true" />
        </button>
      </h4>
      <div className={styles.phaseBody} id={id}>
        <div>
          <div className={styles.phaseInner}>
            <div className={styles.prose}>
              <p><GlossaryText text={phase.focus} usedTerms={usedTerms} /></p>
            </div>
            {phase.examples && phase.examples.length > 0 && (
              <>
                <span className={styles.label} style={{ marginTop: 20 }}>Example exercises</span>
                <ul className={styles.doses}>
                  {phase.examples.map((ex, i) => (
                    <li key={i}><GlossaryText text={ex} usedTerms={usedTerms} /></li>
                  ))}
                </ul>
              </>
            )}
            {phase.progressionCriteria && (
              <div className={styles.milestone}>
                <span className={styles.label}>Possible milestones before moving on</span>
                <p><GlossaryText text={phase.progressionCriteria} usedTerms={usedTerms} /></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function AtlasPhases({ phases }: { phases: ExerciseProgressionPhase[] }) {
  const usedTerms = new Set<string>();
  return (
    <ol className={styles.phases}>
      {phases.map((phase, i) => (
        <Phase key={i} phase={phase} index={i} usedTerms={usedTerms} />
      ))}
    </ol>
  );
}
