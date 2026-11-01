import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import type { Condition } from '@/lib/conditions-data';
import { getAllConditions, getDetailedRelationships } from '@/lib/conditions-data';
import type { PatternMatcherCluster } from '@/lib/pattern-matchers/knee-cluster';
import { getConditionHub } from '@/lib/condition-hubs';
import { getTreatmentsByCondition } from '@/lib/treatments-data';
import { REHAB_PROGRESSION_SLUGS, REHAB_SCOPE_NOTES } from '@/lib/rehab-progression';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { inlineName } from '@/lib/text';
import { guidesForRegion } from '@/lib/pain-guides';
import { differentialHref, linkedDifferentialSlugs } from '@/lib/differential-links';
import { CATEGORY_PRINT, ILLUSTRATIONS } from '@/lib/illustrations';
import { getComparisonsForCondition } from '@/lib/condition-comparisons';
import { groupRedFlags, redFlagSummary, redFlagUrgency, type RedFlagUrgency } from '@/lib/red-flags';
import { CONDITION_KEY_POINTS } from '@/lib/condition-key-points';
import { splitPhaseTitle } from '@/lib/phase-title';
import Print from '@/components/Print';
import Reveal from '@/components/home/Reveal';
import GlossaryText from '../GlossaryText';
import { comparisonQuestion } from '../ComparisonCrossLinks';
import { CONDITION_PLATES } from '@/lib/condition-plates';
import { geist } from './fonts';
import CasePlate from './CasePlate';
import CaseInstrument from './CaseInstrument';
import CaseActionBar from './CaseActionBar';
import CasePhases from './CasePhases';
import CaseDisclosure from './CaseDisclosure';
import CaseQuiz from './CaseQuiz';
import CaseResearch from './CaseResearch';
import styles from './Case.module.css';

/**
 * Condition page, "case" template (October 2026). The same content and
 * order as ConditionFlowPage (symptoms, the clinic, warning signs,
 * treatment, recovery, similar conditions, questions, the science, the
 * research), set as a case file: a dark instrument panel pinned beside a
 * white reading sheet, with the plate in a viewer that zooms as the science
 * is read, a numbered section index, indexed rows, urgency chips, the rehab
 * phases as a stepper, a recovery track and the studies as cards. Server
 * component; the instrument, the phases, the disclosures and the quiz are
 * small client islands.
 */

type PatternClusterConditions = Record<
  string,
  { slug: string; name: string; patternMatcher?: Condition['patternMatcher'] }
>;

interface Props {
  condition: Condition;
  relatedConditions: Condition[];
  conditionSlug: string;
  patternCluster?: PatternMatcherCluster;
  patternConditions?: PatternClusterConditions;
}

const PORTRAIT =
  '/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function reviewedLabel(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

const REGION_LABEL: Record<string, string> = {
  knee: 'Knee',
  'hip-pelvis': 'Hip & pelvis',
  shoulder: 'Shoulder',
  'foot-ankle': 'Foot & ankle',
  'elbow-wrist-hand': 'Elbow, wrist & hand',
  'spinal-health': 'Spine & back',
};

const sentence = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

const URG_CLASS: Record<RedFlagUrgency, string> = {
  emergency: styles.urgEmergency,
  today: styles.urgToday,
  doctor: styles.urgDoctor,
};

const URG_LABEL: Record<RedFlagUrgency, string> = {
  emergency: 'Emergency',
  today: 'Same day',
  doctor: 'Your doctor',
};

function Citation({ research }: { research: NonNullable<Condition['keyResearch']>[number] }) {
  const built = [research.authors, research.year ? `(${research.year})` : undefined, research.journal].filter(Boolean).join(' ');
  const showTitle = research.title && research.finding && research.title !== research.finding;
  const text = research.citation || [built, showTitle ? research.title : undefined].filter(Boolean).join('. ');
  if (!text) return null;
  const parts: React.ReactNode[] = [];
  const re = /(PMID:?\s*(\d{6,9}))|(\b(?:doi:?\s*|https?:\/\/doi\.org\/)(10\.\d{4,9}\/[^\s,;)]+[^\s,;).]))/gi;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const href = m[2] ? `https://pubmed.ncbi.nlm.nih.gov/${m[2]}/` : `https://doi.org/${m[4]}`;
    parts.push(
      <a key={m.index} href={href} target="_blank" rel="noopener noreferrer">
        {m[0]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <p className={styles.studyCite}>{parts}</p>;
}

function Head({ title, stand }: { title: React.ReactNode; stand?: string }) {
  return (
    <Reveal as="div" className={styles.secHead}>
      <Reveal as="span" variant="rule" className={styles.accentBar} />
      <h2 className={styles.h2}>{title}</h2>
      {stand && <p className={styles.stand}>{stand}</p>}
    </Reveal>
  );
}

function Paragraphs({ text, used }: { text: string; used?: Set<string> }) {
  const set = used ?? new Set<string>();
  return (
    <>
      {text.split('\n\n').map((p, i) => (
        <p key={i}>
          <GlossaryText text={p} usedTerms={set} />
        </p>
      ))}
    </>
  );
}

export default function ConditionCasePage({ condition, relatedConditions, conditionSlug, patternCluster, patternConditions }: Props) {
  const conditionHub = getConditionHub(conditionSlug, condition.category);
  const relatedTreatments = getTreatmentsByCondition(conditionSlug);
  const hasPatternMatcher = Boolean(patternCluster && patternConditions && condition.patternMatcher?.clusterKey === patternCluster.key);
  const showRehab = Boolean(condition.exerciseProgression && REHAB_PROGRESSION_SLUGS.has(conditionSlug));
  const phases = showRehab && condition.exerciseProgression
    ? [condition.exerciseProgression.phase1, condition.exerciseProgression.phase2, condition.exerciseProgression.phase3].filter(Boolean)
    : [];
  const snapshot = condition.evidenceSnapshot;
  const primary = snapshot?.primaryStrategy || snapshot?.firstLine;
  const secondary = snapshot?.secondaryStrategy || snapshot?.imaging;
  const prevention = snapshot?.preventionStrategy || snapshot?.management;
  const redFlags: Array<{ sign: string; action?: string }> =
    condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0
      ? condition.clinicalRedFlags
      : (condition.redFlags && condition.redFlags.length > 0 ? condition.redFlags : condition.whenToSeek ?? []).map((sign) => ({ sign }));
  const bands = groupRedFlags(redFlags);
  const scienceText = condition.pathophysiology || condition.overview;
  const keyPointText = CONDITION_KEY_POINTS[conditionSlug];
  const firstSteps = (condition.selfManagement ?? []).slice(0, 2).map((item) => sentence(item.strategy)).join(' ');
  const warningLine = redFlagSummary(redFlags);
  const glance = keyPointText
    ? [
        { label: 'What usually helps', text: keyPointText.helps, href: '#treatment' },
        { label: 'What you can do now', text: firstSteps, href: '#self-care' },
        { label: 'How long it takes', text: keyPointText.time, href: '#recovery' },
        { label: 'See a doctor first', text: warningLine, href: '#red-flags' },
      ].filter((row): row is { label: string; text: string; href: string } => Boolean(row.text))
    : [];
  const researchInsights = condition.researchInsights ?? [];
  const keyResearch = condition.keyResearch ?? [];
  const nameLower = inlineName(condition.name);
  const plateName = CONDITION_PLATES[conditionSlug];
  const region = conditionHub?.name.replace(/ pain$/i, '') ?? REGION_LABEL[condition.category] ?? 'Condition';
  const similarHeading =
    conditionSlug === 'diabetes-related-conditions'
      ? { label: 'Related problems', heading: 'Problems this page covers' }
      : { label: 'Similar conditions', heading: 'Conditions that can feel similar' };
  const GUIDE_REGION: Record<string, string> = { knee: 'Knee', 'foot-ankle': 'Foot & Ankle' };
  const guideRegion = GUIDE_REGION[condition.category];
  const regionGuides = guideRegion ? guidesForRegion(guideRegion) : [];
  const comparisons = getComparisonsForCondition(conditionSlug) ?? [];
  const explanationBySlug = new Map(getDetailedRelationships(conditionSlug).map((rel) => [rel.slug, rel.explanation]));
  const excludeSlugs = linkedDifferentialSlugs((condition.differentialDiagnosis ?? []).map((d) => d.condition), conditionSlug);
  const related = relatedConditions.filter((r) => !excludeSlugs.has(r.slug) && explanationBySlug.get(r.slug)).slice(0, 6);
  const reviewed = reviewedLabel(condition.lastReviewed);
  // Reading time from the page's own text, at 220 words a minute.
  const wordCount = [
    condition.summary, condition.description, scienceText, condition.biomechanics,
    condition.clinicalObservations?.body, primary, secondary, prevention,
    condition.prognosis?.timeline, condition.prognosis?.naturalHistory, condition.treatmentApproach?.description,
    ...(condition.clinicalPresentation?.primarySymptoms ?? []),
    ...(condition.clinicalPresentation?.associatedSymptoms ?? []),
    ...(condition.selfManagement ?? []).flatMap((i) => [i.strategy, i.rationale]),
    ...(condition.faqs ?? []).flatMap((f) => [f.question, f.answer]),
    ...(condition.differentialDiagnosis ?? []).map((d) => d.distinguishingFeatures),
    ...phases.flatMap((p) => [p.focus, p.progressionCriteria, ...(p.examples ?? [])]),
    ...keyResearch.flatMap((r) => [r.finding, r.detail, r.findings, r.clinicalRelevance]),
  ].filter(Boolean).join(' ').split(/\s+/).length;
  const readMinutes = Math.max(3, Math.round(wordCount / 220));
  // Sibling conditions in the same hub (or category when there is no hub).
  const siblings = getAllConditions()
    .filter((c) => c.slug !== conditionSlug && (conditionHub ? getConditionHub(c.slug, c.category)?.path === conditionHub.path : c.category === condition.category))
    .filter((c) => CONDITION_PLATES[c.slug])
    .slice(0, 8);
  const trackSpans = phases.map((p) => splitPhaseTitle(p.title)).filter((p) => p.when);

  const sections = [
    { id: 'symptoms', label: 'Symptoms', show: Boolean(condition.clinicalPresentation || hasPatternMatcher) },
    { id: 'in-clinic', label: 'In clinic', show: Boolean(condition.clinicalObservations) },
    { id: 'red-flags', label: 'See a doctor first', show: redFlags.length > 0 },
    { id: 'treatment', label: 'Treatment', show: Boolean(primary || showRehab || condition.selfManagement || condition.treatmentApproach) },
    { id: 'recovery', label: 'Recovery time', show: Boolean(condition.prognosis || condition.timeline?.length || keyPointText?.time) },
    { id: 'similar', label: similarHeading.label, show: Boolean(condition.differentialDiagnosis?.length) },
    { id: 'faqs', label: 'Questions', show: Boolean(condition.faqs?.length) },
    { id: 'science', label: 'The science', show: Boolean(scienceText || condition.biomechanics) },
    { id: 'research', label: 'Research', show: keyResearch.length > 0 || researchInsights.length > 0 },
  ].filter((s) => s.show);

  const bookLine = (source: string) => (
    <a href={JANE_ASSESSMENT_URL} data-booking-source={source} target="_blank" rel="noopener noreferrer" className={styles.bookLine}>
      Book an assessment for {nameLower}
      <ArrowRightIcon aria-hidden="true" />
    </a>
  );

  const clinicParagraphs = (condition.clinicalObservations?.body ?? '').split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <main className={`${styles.case} ${geist.variable}`} data-case-page="">
      <div className={styles.shell}>
        <CaseInstrument sections={sections} slug={conditionSlug} name={condition.name} region={region} plateName={plateName} reviewed={reviewed} readMinutes={readMinutes} />

        <div className={styles.sheet}>
          <div className={styles.column} data-case-column="">
            {/* Opening */}
            <header className={styles.opening} data-case-opening="">
              <nav aria-label="Breadcrumb" className={`${styles.crumbs} ${styles.mono}`}>
                <Link href="/">Home</Link>
                <ChevronRightIcon aria-hidden="true" />
                <Link href="/conditions">Conditions</Link>
                {conditionHub && (
                  <>
                    <ChevronRightIcon aria-hidden="true" />
                    <Link href={conditionHub.path}>{conditionHub.name}</Link>
                  </>
                )}
                <ChevronRightIcon aria-hidden="true" />
                <span aria-current="page">{condition.name}</span>
              </nav>
              <h1 className={styles.h1}>{condition.name}</h1>
              <p className={styles.summary}>{condition.summary || condition.description}</p>
              <p className={styles.byline}>
                <Link href="/about">Kareem Hassanein</Link>
                <span>Registered Physiotherapist</span>
                <i aria-hidden="true" />
                <span>
                  <abbr title="College of Physiotherapists of Ontario registration">CPO</abbr> #20079
                </span>
                {reviewed && (
                  <>
                    <i aria-hidden="true" />
                    <span>
                      Reviewed <time dateTime={condition.lastReviewed}>{reviewed}</time>
                    </span>
                  </>
                )}
                <i aria-hidden="true" />
                <span className={styles.time}>{readMinutes} min read</span>
              </p>
              <div className={styles.actions}>
                <a href={JANE_ASSESSMENT_URL} data-booking-source="condition_intro" target="_blank" rel="noopener noreferrer" className={styles.btnInk}>
                  Book an assessment
                  <ArrowRightIcon aria-hidden="true" />
                </a>
                <a href="tel:+19056346000" className={styles.btnLine}>
                  <PhoneIcon aria-hidden="true" />
                  Call the clinic
                </a>
              </div>

              <figure className={styles.plateBlock}>
                <CasePlate key={`${conditionSlug}-block`} slug={conditionSlug} className={styles.plateImg} sizes="(min-width: 640px) 600px, 100vw" />
                {plateName && (
                  <figcaption className={styles.mono}>
                    Plate <b>{plateName}</b>
                  </figcaption>
                )}
              </figure>

              {glance.length > 0 && (
                <nav className={styles.glance} aria-label="At a glance">
                  {glance.map((row) => (
                    <a key={row.label} href={row.href}>
                      <span className={styles.mono}>
                        {row.label}
                        <ArrowDownIcon aria-hidden="true" />
                      </span>
                      <span className={styles.glanceText}>{row.text}</span>
                    </a>
                  ))}
                </nav>
              )}
            </header>

            {/* Symptoms */}
            {(condition.clinicalPresentation || hasPatternMatcher) && (
              <section id="symptoms">
                <Head title="Does this sound like you?" />
                {condition.clinicalPresentation?.primarySymptoms && (
                  <ul className={`${styles.rows} ${styles.rowsTwo}`} role="list">
                    {condition.clinicalPresentation.primarySymptoms.map((symptom, i) => (
                      <Reveal as="li" key={symptom} delay={Math.min(i, 5) * 50}>
                        <span>{symptom}</span>
                      </Reveal>
                    ))}
                  </ul>
                )}
                {condition.clinicalPresentation?.associatedSymptoms && (
                  <>
                    <h3 className={`${styles.label} ${styles.mono}`} style={{ marginTop: 28 }}>Often alongside it</h3>
                    <ul className={styles.rows} role="list">
                      {condition.clinicalPresentation.associatedSymptoms.map((symptom) => (
                        <li key={symptom}>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {condition.clinicalPresentation?.typicalPattern && (
                  <Reveal as="blockquote" className={styles.quote}>
                    {condition.clinicalPresentation.typicalPattern}
                  </Reveal>
                )}
                {hasPatternMatcher && patternCluster && patternConditions && (
                  <div style={{ marginTop: 36 }}>
                    {redFlags.length > 0 && (
                      <p className={styles.small} style={{ marginBottom: 14 }}>
                        Before using this comparison, check{' '}
                        <a href="#red-flags" className={styles.link}>when these symptoms need a doctor first</a>.
                      </p>
                    )}
                    <div className={styles.quiz} data-hide-floating="">
                      <CaseQuiz currentSlug={conditionSlug} cluster={patternCluster} conditionsBySlug={patternConditions} />
                    </div>
                  </div>
                )}
                {bookLine('condition_symptoms')}
              </section>
            )}

            {/* In clinic */}
            {condition.clinicalObservations && clinicParagraphs.length > 0 && (
              <section id="in-clinic">
                <Reveal as="div" className={styles.panel}>
                  <div className={styles.who}>
                    <span className={styles.portrait}>
                      <Image src={PORTRAIT} alt="" fill sizes="44px" />
                    </span>
                    <span>
                      <span className={styles.whoName}>Kareem Hassanein</span>
                      <span className={styles.whoRole}>Registered Physiotherapist, Burlington</span>
                    </span>
                  </div>
                  <h2 className={`${styles.h3} ${styles.noteTitle}`}>{condition.clinicalObservations.title?.trim() || 'Patterns I see in clinic'}</h2>
                  <div className={styles.noteBody}>
                    {clinicParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              </section>
            )}

            {/* When to see a doctor first */}
            {redFlags.length > 0 && (
              <section id="red-flags">
                <Head title="When to see a doctor first" />
                <div className={styles.flags} data-top={bands[0]?.urgency}>
                  {bands.flatMap((band) =>
                    band.flags.map((flag) => {
                      const u = redFlagUrgency(flag);
                      return (
                        <div key={flag.sign} className={styles.flag}>
                          <span className={`${styles.urg} ${styles.mono} ${URG_CLASS[u]}`}>
                            <i aria-hidden="true" />
                            {URG_LABEL[u]}
                          </span>
                          <div>
                            <p className={styles.flagSign}>{flag.sign}</p>
                            {flag.action && <p className={styles.flagAction}>{flag.action}</p>}
                          </div>
                        </div>
                      );
                    }),
                  )}
                </div>
              </section>
            )}

            {/* Treatment */}
            {(primary || showRehab || condition.selfManagement || condition.treatmentApproach) && (
              <section id="treatment">
                <Head title="How it is treated" stand={keyPointText?.helps} />
                <div className={styles.prose}>
                  {primary && (
                    <div className={styles.opener}>
                      <span className={`${styles.lead} ${styles.mono}`}>Main approach</span>
                      <p>{sentence(primary)}</p>
                    </div>
                  )}
                  {secondary && (
                    <div className={styles.opener}>
                      <span className={`${styles.lead} ${styles.mono}`}>Alongside it</span>
                      <p>{sentence(secondary)}</p>
                    </div>
                  )}
                  {prevention && (
                    <div className={styles.opener}>
                      <span className={`${styles.lead} ${styles.mono}`}>Managing it over time</span>
                      <p>{sentence(prevention)}</p>
                    </div>
                  )}
                </div>

                {phases.length > 0 && (
                  <div id="rehab-progression" data-section="rehab-progression">
                    <h3 className={`${styles.h3} ${styles.sub}`}>A typical rehabilitation progression</h3>
                    <div className={styles.prose}>
                      <p>
                        Recovery from {nameLower} is usually staged: calm the symptoms first, then rebuild the strength and capacity of the
                        area, then return to your full activities. The phases below show how that can progress.
                      </p>
                    </div>
                    {REHAB_SCOPE_NOTES[conditionSlug] && (
                      <aside role="note" aria-label="Important scope and clearance note" className={styles.scope}>
                        <span className={styles.mono}>Before you use this progression</span>
                        {REHAB_SCOPE_NOTES[conditionSlug]}
                      </aside>
                    )}
                    <aside aria-label="Using these exercises safely" className={styles.safety}>
                      <span className={styles.mono}>Using these safely</span>
                      These are general examples, not individual advice. The right exercises, load and pace depend on your diagnosis, your
                      symptoms and any medical or surgical restrictions, and an assessment can tell you which of these suit you. Build up
                      gradually, and back off if symptoms get worse instead of settling.
                      {redFlags.length > 0 && ' If any of the warning signs listed on this page apply to you, hold off and get assessed first.'}
                    </aside>
                    <CasePhases phases={phases} />
                  </div>
                )}

                {condition.selfManagement && condition.selfManagement.length > 0 && (
                  <>
                    <h3 id="self-care" className={`${styles.h3} ${styles.sub}`}>What you can do now</h3>
                    <ol className={`${styles.rows} ${styles.rowsPlain}`} role="list">
                      {condition.selfManagement.map((item) => (
                        <li key={item.strategy}>
                          <span>
                            <span className={styles.rowTitle}>{item.strategy}</span>
                            <span className={styles.rowBody}>{sentence(item.rationale)}</span>
                            {item.precautions && item.precautions.length > 0 && (
                              <span className={styles.rowNote}>{item.precautions.map(sentence).join(' ')}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                {(condition.treatmentApproach || relatedTreatments.length > 0) && (
                  <>
                    <h3 className={`${styles.h3} ${styles.sub}`}>What I use in clinic</h3>
                    {condition.treatmentApproach?.description && (
                      <div className={styles.prose} style={{ marginBottom: 16 }}>
                        <p>{condition.treatmentApproach.description}</p>
                      </div>
                    )}
                    {condition.treatmentApproach?.techniques && (
                      <ul className={`${styles.rows} ${styles.rowsPlain}`} role="list">
                        {condition.treatmentApproach.techniques.map((technique) => {
                          const [title, ...rest] = technique.split(': ');
                          return (
                            <li key={technique}>
                              <span>
                                <span className={styles.rowTitle}>{title}</span>
                                {rest.length > 0 && <span className={styles.rowBody}>{sentence(rest.join(': '))}</span>}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {relatedTreatments.length > 0 && (
                      <>
                        <h4 className={`${styles.label} ${styles.mono}`} style={{ marginTop: 26 }}>Treatments on this site</h4>
                        <div className={styles.chips}>
                          {relatedTreatments.map((t) => (
                            <Link key={t.id} href={`/treatments/${t.id}`}>
                              {t.shortName ?? t.name}
                              <ArrowRightIcon aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
                {bookLine('condition_management')}
              </section>
            )}

            {/* Recovery */}
            {(condition.prognosis || condition.timeline?.length || keyPointText?.time) && (
              <section id="recovery">
                <Head title="How long it takes" stand={keyPointText?.time} />
                {trackSpans.length === 3 && (
                  <ol className={styles.track} aria-label="Rehabilitation time spans" role="list">
                    {trackSpans.map((p, i) => (
                      <li key={i}>
                        <span className={`${styles.trackWhen} ${styles.mono}`}>{p.when}</span>
                        <span className={styles.trackName}>{p.name}</span>
                      </li>
                    ))}
                  </ol>
                )}
                <div className={styles.prose}>
                  {!condition.prognosis && !condition.timeline?.length && keyPointText?.time && <p>{sentence(keyPointText.time)}</p>}
                  {condition.prognosis?.timeline && sentence(condition.prognosis.timeline) !== (keyPointText?.time ? sentence(keyPointText.time) : '') && <p>{sentence(condition.prognosis.timeline)}</p>}
                  {condition.prognosis?.naturalHistory && <p>{sentence(condition.prognosis.naturalHistory)}</p>}
                </div>
                {condition.timeline && condition.timeline.length > 0 && (
                  <ol className={`${styles.rows} ${styles.rowsPlain}`} style={{ marginTop: 24 }} role="list">
                    {condition.timeline.map((phase) => (
                      <li key={phase.phase}>
                        <span>
                          <span className={styles.rowTitle}>
                            {phase.phase} <span style={{ color: 'var(--accent-ink)', fontWeight: 500 }}>({phase.duration})</span>
                          </span>
                          <span className={styles.rowBody}>{sentence(phase.description)}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
                {condition.prognosis?.factors && condition.prognosis.factors.length > 0 && (
                  <>
                    <h3 className={`${styles.label} ${styles.mono}`} style={{ marginTop: 28 }}>What changes the timeline</h3>
                    <ul className={`${styles.rows} ${styles.rowsTwo}`} role="list">
                      {condition.prognosis.factors.map((factor) => (
                        <li key={factor}>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {condition.measuringProgress?.dayToDay && (
                  <div className={styles.prose} style={{ marginTop: 24 }}>
                    <p>
                      <strong>How I track it.</strong> {condition.measuringProgress.dayToDay}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Similar conditions */}
            {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
              <section id="similar">
                <Head title={similarHeading.heading} />
                <dl className={styles.compare}>
                  {condition.differentialDiagnosis.map((d) => {
                    const href = differentialHref(d.condition, conditionSlug);
                    return (
                      <div key={d.condition}>
                        <dt>
                          {href ? (
                            <Link href={href}>
                              {d.condition}
                              <ArrowRightIcon aria-hidden="true" />
                            </Link>
                          ) : (
                            d.condition
                          )}
                        </dt>
                        <dd>{d.distinguishingFeatures}</dd>
                      </div>
                    );
                  })}
                </dl>
                {comparisons.length > 0 && (
                  <>
                    <h3 className={`${styles.label} ${styles.mono}`} style={{ marginTop: 30 }}>Side by side</h3>
                    <div className={styles.tiles}>
                      {comparisons.map((comparison) => (
                        <Link key={comparison.pair} href={`/conditions/compare/${comparison.pair}`}>
                          <span className={styles.tileTitle}>{comparisonQuestion(comparison, conditionSlug)}</span>
                          <span className={styles.tileBlurb}>How I separate the two by pattern, tests and exam findings.</span>
                          <ArrowRightIcon aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            {/* Questions */}
            {condition.faqs && condition.faqs.length > 0 && (
              <section id="faqs">
                <Head title="What patients ask me most" />
                <div className={styles.disc}>
                  {condition.faqs.map((faq) => (
                    <CaseDisclosure key={faq.question} title={faq.question}>
                      <p>{faq.answer}</p>
                    </CaseDisclosure>
                  ))}
                </div>
                {bookLine('condition_faq')}
              </section>
            )}

            {/* The science */}
            {(scienceText || condition.biomechanics) && (
              <section id="science">
                <Head title={<>The science of {nameLower}</>} />
                <div className={styles.clearfix}>
                  <figure className={styles.figureFrame}>
                    <CasePlate key={`${conditionSlug}-figure`} slug={conditionSlug} className={styles.plateImg} sizes="300px" />
                    {plateName && <figcaption className={styles.mono}>{plateName}</figcaption>}
                  </figure>
                  {scienceText && (
                    <div className={styles.prose}>
                      <Paragraphs text={scienceText} />
                    </div>
                  )}
                </div>
                {condition.biomechanics && (
                  <div className={styles.disc} style={{ marginTop: 30 }}>
                    <CaseDisclosure title="Contributing factors">
                      <Paragraphs text={condition.biomechanics} />
                    </CaseDisclosure>
                  </div>
                )}
              </section>
            )}

            {/* Research */}
            {(keyResearch.length > 0 || researchInsights.length > 0) && (
              <section id="research">
                <Head title="What the studies show" />
                {keyResearch.length > 0 && (
                  <CaseResearch count={keyResearch.length}>
                    {keyResearch.map((r, i) => {
                      const title = r.finding || r.title;
                      const body = r.detail || r.findings;
                      const relevance = r.clinicalRelevance || r.relevance;
                      const meta = [r.year, r.journal].filter(Boolean).join(' · ');
                      return (
                        <Reveal as="li" key={i} className={styles.study} delay={Math.min(i, 3) * 70}>
                          {meta && <span className={`${styles.studyMeta} ${styles.mono}`}>{meta}</span>}
                          {title && <h3 className={styles.studyFinding}>{title}</h3>}
                          {body && <p className={styles.studyBody}>{sentence(body)}</p>}
                          {relevance && <p className={styles.studyWhy}>{sentence(relevance)}</p>}
                          <Citation research={r} />
                        </Reveal>
                      );
                    })}
                  </CaseResearch>
                )}
                {researchInsights.length > 0 && (
                  <ul className={styles.insights} role="list">
                    {researchInsights.map((insight) => {
                      const colon = insight.indexOf(':');
                      return (
                        <li key={insight}>
                          {colon > -1 ? (
                            <>
                              <strong>{insight.slice(0, colon).trim()}.</strong> {insight.slice(colon + 1).trim()}
                            </>
                          ) : (
                            insight
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            )}

            {/* Keep reading */}
            {(regionGuides.length > 0 || related.length > 0) && (
              <section aria-labelledby="keep-reading">
                <Reveal as="div" className={styles.secHead}>
                  <h2 id="keep-reading" className={styles.h2}>Keep reading</h2>
                </Reveal>
                {regionGuides.length > 0 && (
                  <>
                    <h3 className={`${styles.label} ${styles.mono}`}>Guides on {guideRegion.toLowerCase()} pain</h3>
                    <div className={styles.tiles}>
                      {regionGuides.map((g) => (
                        <Link key={g.href} href={g.href}>
                          <span className={styles.tileTitle}>{g.title}</span>
                          <span className={styles.tileBlurb}>{g.blurb}</span>
                          <ArrowRightIcon aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </>
                )}
                {related.length > 0 && (
                  <>
                    <h3 className={`${styles.label} ${styles.mono}`} style={{ marginTop: regionGuides.length > 0 ? 28 : 0 }}>Related conditions</h3>
                    <div className={styles.tiles}>
                      {related.map((r) => (
                        <Link key={r.slug} href={`/conditions/${r.slug}`}>
                          {CONDITION_PLATES[r.slug] && (
                            <span className={styles.tileThumb}>
                              <Image src={`/images/conditions/${r.slug}.webp`} alt="" fill sizes="44px" />
                            </span>
                          )}
                          <span className={styles.tileTitle}>{r.name}</span>
                          <span className={styles.tileBlurb}>{explanationBySlug.get(r.slug)}</span>
                          <ArrowRightIcon aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            <aside className={styles.consent} aria-label="About hands-on assessment">
              <ShieldCheckIcon aria-hidden="true" />
              <p>
                Every part of an assessment runs on informed consent. I explain what I am checking for and why before I do it, and I can
                offer an alternative approach if a test or technique does not suit your comfort level or needs.
              </p>
            </aside>
          </div>
        </div>
      </div>

      {/* Closing */}
      <section className={styles.closing} data-case-closing="">
        <div className={styles.closingGrid}>
          <div>
            <h2 className={styles.closingTitle}>Getting back to it</h2>
            <p className={styles.closingText}>Physiotherapy for {nameLower}, built around the activity you want back.</p>
            <div className={styles.actions}>
              <a href={JANE_ASSESSMENT_URL} data-booking-source="condition_footer" target="_blank" rel="noopener noreferrer" className={styles.btnLight}>
                Book an assessment
                <ArrowRightIcon aria-hidden="true" />
              </a>
              <Link href="/contact" className={styles.btnDark}>
                Contact
              </Link>
            </div>
          </div>
          <Reveal as="div" className={styles.closingPrint}>
            <Print {...ILLUSTRATIONS[CATEGORY_PRINT[condition.category] ?? 'walking']} sizes="300px" />
          </Reveal>
        </div>
        {siblings.length > 0 && (
          <div className={styles.siblings}>
            <div className={styles.siblingsHead}>
              <h2>More {conditionHub ? `in ${conditionHub.name.toLowerCase()}` : `in ${region.toLowerCase()}`}</h2>
              {conditionHub && <Link href={conditionHub.path}>The {conditionHub.name.toLowerCase()} guide</Link>}
            </div>
            <div className={styles.siblingsRow}>
              {siblings.map((c) => (
                <Link key={c.slug} href={`/conditions/${c.slug}`}>
                  <span className={styles.siblingThumb}>
                    <Image src={`/images/conditions/${c.slug}.webp`} alt="" fill sizes="48px" />
                  </span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <CaseActionBar />
    </main>
  );
}
