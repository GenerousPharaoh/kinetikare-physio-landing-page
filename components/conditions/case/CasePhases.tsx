'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
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
  const [tick, setTick] = useState(0);
  const touched = useRef(false);
  const headings = useRef<Array<HTMLHeadingElement | null>>([]);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const usedTerms = new Set<string>();
  const fill = phases.length > 1 ? i / (phases.length - 1) : 0;

  const select = (k: number, focusTab = false) => {
    const next = Math.max(0, Math.min(phases.length - 1, k));
    touched.current = true;
    setI(next);
    setTick((t) => t + 1);
    if (focusTab) tabs.current[next]?.focus();
  };

  // After paging, put focus on the new phase's heading so keyboard and
  // screen-reader users land in the content they asked for.
  useEffect(() => {
    if (!touched.current) return;
    const h = headings.current[i];
    if (h && document.activeElement?.closest('[data-pager]')) h.focus({ preventScroll: true });
  }, [i, tick]);

  const onTabKey = (e: React.KeyboardEvent, k: number) => {
    const map: Record<string, number> = { ArrowRight: k + 1, ArrowDown: k + 1, ArrowLeft: k - 1, ArrowUp: k - 1, Home: 0, End: phases.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div>
      <div className={styles.stepper} role="tablist" aria-label="Rehabilitation phases" style={{ '--fill': fill } as CSSProperties}>
        {phases.map((phase, k) => {
          const { name, when } = splitPhaseTitle(phase.title);
          return (
            <button
              key={k}
              ref={(el) => { tabs.current[k] = el; }}
              type="button"
              role="tab"
              id={`phase-tab-${k}`}
              aria-selected={k === i}
              aria-controls={`phase-panel-${k}`}
              tabIndex={k === i ? 0 : -1}
              className={`${styles.plain} ${styles.step}`}
              data-state={k < i ? 'done' : k === i ? 'active' : 'next'}
              onClick={() => select(k)}
              onKeyDown={(e) => onTabKey(e, k)}
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
            key={k}
            id={`phase-panel-${k}`}
            role="tabpanel"
            aria-labelledby={`phase-tab-${k}`}
            hidden={k !== i}
            className={styles.phasePanel}
          >
            <div key={`${k}-${tick}`} className={styles.phaseIn}>
            <p className={`${styles.mono} ${styles.phaseWhen}`}>Phase {k + 1}{when ? ` · ${when}` : ''}</p>
            <h4 ref={(el) => { headings.current[k] = el; }} tabIndex={-1} className={styles.phaseTitle}>{name}</h4>
            <div className={styles.prose}>
              <p><GlossaryText text={phase.focus} usedTerms={usedTerms} /></p>
            </div>
            {phase.examples && phase.examples.length > 0 && (
              <>
                <h5 className={`${styles.label} ${styles.mono}`}>Example exercises</h5>
                <ol className={styles.rows} role="list">
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
            </div>
            <div className={styles.phasePager} data-pager="">
              <button type="button" className={`${styles.plain} ${styles.pager}`} disabled={k === 0} onClick={() => select(k - 1)}>
                <ArrowLeftIcon aria-hidden="true" />
                Previous phase
              </button>
              <button type="button" className={`${styles.plain} ${styles.pager}`} disabled={k === phases.length - 1} onClick={() => select(k + 1)}>
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
