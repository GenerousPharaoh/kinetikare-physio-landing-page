'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import GlossaryText from '../GlossaryText';
import { splitPhaseTitle } from '@/lib/phase-title';
import type { ExerciseProgressionPhase } from '@/lib/conditions-data';
import styles from './Case.module.css';

/**
 * The three rehabilitation phases as a stepper: three nodes on a track,
 * one phase in view at a time, previous and next. Every phase is in the
 * HTML (inactive ones hidden) for the HowTo schema and search engines.
 */
export default function CasePhases({ phases }: { phases: ExerciseProgressionPhase[] }) {
  const [i, setI] = useState(0);
  const usedTerms = new Set<string>();
  const fill = phases.length > 1 ? i / (phases.length - 1) : 0;
  return (
    <div>
      <div className={styles.stepper} role="tablist" aria-label="Rehabilitation phases" style={{ '--fill': fill } as CSSProperties}>
        {phases.map((phase, k) => {
          const { name, when } = splitPhaseTitle(phase.title);
          return (
            <button
              key={k}
              type="button"
              role="tab"
              id={`phase-tab-${k}`}
              aria-selected={k === i}
              aria-controls={`phase-panel-${k}`}
              className={`${styles.plain} ${styles.step}`}
              data-state={k < i ? 'done' : k === i ? 'active' : 'next'}
              onClick={() => setI(k)}
            >
              <span className={`${styles.node} ${styles.mono}`}>{k + 1}</span>
              <span className={`${styles.stepWhen} ${styles.mono}`}>{when ?? `Phase ${k + 1}`}</span>
              <span className={styles.stepName}>{name}</span>
            </button>
          );
        })}
      </div>
      {phases.map((phase, k) => {
        const { name, when } = splitPhaseTitle(phase.title);
        return (
          <div
            key={k === i ? `active-${k}` : `idle-${k}`}
            id={`phase-panel-${k}`}
            role="tabpanel"
            aria-labelledby={`phase-tab-${k}`}
            hidden={k !== i}
            className={styles.phasePanel}
          >
            <h4 className={styles.phaseTitle}>
              <span className={styles.mono}>Phase {k + 1}{when ? ` · ${when}` : ''}</span>
              {name}
            </h4>
            <div className={styles.prose}>
              <p><GlossaryText text={phase.focus} usedTerms={usedTerms} /></p>
            </div>
            {phase.examples && phase.examples.length > 0 && (
              <>
                <span className={`${styles.label} ${styles.mono}`}>Example exercises</span>
                <ol className={styles.rows}>
                  {phase.examples.map((ex, n) => (
                    <li key={n}>
                      <GlossaryText text={ex} usedTerms={usedTerms} />
                    </li>
                  ))}
                </ol>
              </>
            )}
            {phase.progressionCriteria && (
              <div className={styles.milestone}>
                <span className={styles.mono}>Possible milestones before moving on</span>
                <GlossaryText text={phase.progressionCriteria} usedTerms={usedTerms} />
              </div>
            )}
            <div className={styles.phasePager}>
              <button type="button" className={`${styles.plain} ${styles.pager}`} disabled={k === 0} onClick={() => setI(k - 1)}>
                <ArrowLeftIcon aria-hidden="true" />
                Previous phase
              </button>
              <button type="button" className={`${styles.plain} ${styles.pager}`} disabled={k === phases.length - 1} onClick={() => setI(k + 1)}>
                Next phase
                <ArrowRightIcon aria-hidden="true" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
