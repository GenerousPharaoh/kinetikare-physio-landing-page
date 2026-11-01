import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import type { Condition } from '@/lib/conditions-data';
import { getDetailedRelationships } from '@/lib/conditions-data';
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
import { groupRedFlags, redFlagSummary, type RedFlagUrgency } from '@/lib/red-flags';
import { CONDITION_KEY_POINTS } from '@/lib/condition-key-points';
import Print from '@/components/Print';
import Reveal from '@/components/home/Reveal';
import { playfairItalic } from '@/components/home/fonts';
import GlossaryText from '../GlossaryText';
import { comparisonQuestion } from '../ComparisonCrossLinks';
import { CONDITION_PLATES } from '../RegionAnatomy';
import AtlasPlate from './AtlasPlate';
import AtlasRail from './AtlasRail';
import AtlasActionBar from './AtlasActionBar';
import AtlasPhases from './AtlasPhases';
import AtlasDisclosure from './AtlasDisclosure';
import AtlasQuiz from './AtlasQuiz';
import AtlasResearch from './AtlasResearch';
import styles from './Atlas.module.css';

/**
 * Condition page, atlas template (October 2026). The same content and order
 * as ConditionFlowPage (symptoms, the clinic, warning signs, treatment,
 * recovery, similar conditions, questions, the science, the research), set
 * as a plate from an atlas: a night opening panel with the engraved plate
 * large, a hairline "at a glance" row, one reading column with a rail, paper
 * panels and hairlines instead of cards, the plate again in the science
 * section, and a night closing band. Server component; the rail, the phone
 * bars, the phases, the disclosures and the quiz are small client islands.
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

// Adds a full stop only when the data string does not already end with one.
const sentence = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

const BAND_CLASS: Record<RedFlagUrgency, string> = {
  emergency: styles.bandEmergency,
  today: styles.bandToday,
  doctor: styles.bandDoctor,
};

// A study's source line: `citation` when present, otherwise authors, year,
// journal and title. PubMed IDs and DOIs become links.
function Citation({ research }: { research: NonNullable<Condition['keyResearch']>[number] }) {
  const built = [research.authors, research.year ? `(${research.year})` : undefined, research.journal]
    .filter(Boolean)
    .join(' ');
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
  return <p className={styles.refCite}>{parts}</p>;
}

function SectionHead({ title, stand }: { title: React.ReactNode; stand?: string }) {
  return (
    <Reveal as="div" className={styles.sectionHead}>
      <Reveal as="span" variant="rule" className={styles.rule} />
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

export default function ConditionAtlasPage({
  condition,
  relatedConditions,
  conditionSlug,
  patternCluster,
  patternConditions,
}: Props) {
  const conditionHub = getConditionHub(conditionSlug, condition.category);
  const relatedTreatments = getTreatmentsByCondition(conditionSlug);
  const hasPatternMatcher = Boolean(
    patternCluster && patternConditions && condition.patternMatcher?.clusterKey === patternCluster.key,
  );
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
  const related = relatedConditions
    .filter((r) => !excludeSlugs.has(r.slug) && explanationBySlug.get(r.slug))
    .slice(0, 6);
  const reviewed = reviewedLabel(condition.lastReviewed);

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
    <a href={JANE_ASSESSMENT_URL} data-booking-source={source} target="_blank" rel="noopener noreferrer" className={styles.textLink} style={{ marginTop: 28 }}>
      Book an assessment for {nameLower}
      <ArrowRightIcon aria-hidden="true" />
    </a>
  );

  const clinicParagraphs = (condition.clinicalObservations?.body ?? '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className={`${styles.atlas} ${playfairItalic.variable}`} data-atlas-page="">
      {/* Opening */}
      <section className={styles.opening} data-atlas-opening="">
        <div className={styles.frame}>
          <div className={styles.openingGrid}>
            <div className={styles.lead}>
              <nav aria-label="Breadcrumb" className={styles.crumbs}>
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
                <span>{condition.name}</span>
              </nav>
              <p className={styles.kicker}>
                {conditionHub ? <Link href={conditionHub.path}>{conditionHub.name}</Link> : 'Condition'}
              </p>
              <h1 className={styles.title}>{condition.name}</h1>
            </div>

            <div className={styles.plateCol}>
              <AtlasPlate key={conditionSlug} slug={conditionSlug} priority sizes="(min-width: 1024px) 520px, 360px" />
              {plateName && (
                <p className={styles.plateCaption}>
                  <em>Plate</em>
                  {plateName}
                </p>
              )}
            </div>

            <div className={styles.rest}>
              <p className={styles.summary}>{condition.summary || condition.description}</p>
              <p className={styles.byline}>
                <Link href="/about">Kareem Hassanein</Link>
                <span>Registered Physiotherapist</span>
                <span className={styles.dot} aria-hidden="true">·</span>
                <span>
                  <abbr title="College of Physiotherapists of Ontario registration" style={{ textDecoration: 'none' }}>CPO</abbr> #20079
                </span>
                {reviewed && (
                  <>
                    <span className={styles.dot} aria-hidden="true">·</span>
                    <span>
                      Reviewed <time dateTime={condition.lastReviewed}>{reviewed}</time>
                    </span>
                  </>
                )}
              </p>
              <div className={styles.actions}>
                <a href={JANE_ASSESSMENT_URL} data-booking-source="condition_intro" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                  Book an assessment
                  <ArrowRightIcon aria-hidden="true" />
                </a>
                <a href="tel:+19056346000" className={styles.btnGhost}>
                  <PhoneIcon aria-hidden="true" />
                  Call the clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      {glance.length > 0 && (
        <section aria-label="At a glance">
          <div className={styles.frame}>
            <div className={styles.glance}>
              {glance.map((row) => (
                <div key={row.label}>
                  <a href={row.href}>
                    <span className={styles.glanceLabel}>
                      {row.label}
                      <ArrowDownIcon aria-hidden="true" />
                    </span>
                    <span className={styles.glanceText}>{row.text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className={styles.frame}>
        <div className={styles.body}>
          <div className={styles.railCol}>
            <AtlasRail sections={sections} slug={conditionSlug} />
          </div>

          <div className={styles.article} data-atlas-article="">
            {/* Symptoms */}
            {(condition.clinicalPresentation || hasPatternMatcher) && (
              <section id="symptoms">
                <SectionHead title="Does this sound like you?" />
                {condition.clinicalPresentation?.primarySymptoms && (
                  <ul className={`${styles.list} ${styles.listTwo}`}>
                    {condition.clinicalPresentation.primarySymptoms.map((symptom) => (
                      <li key={symptom}>{symptom}</li>
                    ))}
                  </ul>
                )}
                {condition.clinicalPresentation?.associatedSymptoms && (
                  <>
                    <span className={styles.label} style={{ marginTop: 32, marginBottom: 10 }}>Often alongside it</span>
                    <ul className={`${styles.list} ${styles.listSoft}`}>
                      {condition.clinicalPresentation.associatedSymptoms.map((symptom) => (
                        <li key={symptom}>{symptom}</li>
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
                  <div style={{ marginTop: 40 }}>
                    {redFlags.length > 0 && (
                      <p className={styles.small} style={{ marginBottom: 16 }}>
                        Before using this comparison, check{' '}
                        <a href="#red-flags" className={styles.inlineLink}>when these symptoms need a doctor first</a>.
                      </p>
                    )}
                    <div className={styles.quiz}>
                      <AtlasQuiz currentSlug={conditionSlug} cluster={patternCluster} conditionsBySlug={patternConditions} />
                    </div>
                  </div>
                )}
                {bookLine('condition_symptoms')}
              </section>
            )}

            {/* In clinic */}
            {condition.clinicalObservations && clinicParagraphs.length > 0 && (
              <section id="in-clinic">
                <Reveal as="div" className={`${styles.panel} ${styles.note}`}>
                  <div className={styles.noteWho}>
                    <span className={styles.portrait}>
                      <Image src={PORTRAIT} alt="" fill sizes="52px" />
                    </span>
                    <span>
                      <span className={styles.noteName}>Kareem Hassanein</span>
                      <br />
                      <span className={styles.noteRole}>Registered Physiotherapist, Burlington</span>
                    </span>
                  </div>
                  <h2 className={`${styles.h3} ${styles.noteTitle}`}>
                    {condition.clinicalObservations.title?.trim() || 'Patterns I see in clinic'}
                  </h2>
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
                <Reveal as="div" className={styles.panel}>
                  <div className={styles.warnHead}>
                    <ExclamationTriangleIcon aria-hidden="true" />
                    <h2 className={styles.h3}>When to see a doctor first</h2>
                  </div>
                  {bands.map((band) => (
                    <div key={band.urgency} className={styles.band}>
                      <h3 className={`${styles.bandLabel} ${BAND_CLASS[band.urgency]}`}>
                        <i aria-hidden="true" />
                        {band.heading}
                      </h3>
                      <ul className={styles.flags}>
                        {band.flags.map((flag) => (
                          <li key={flag.sign}>
                            <p className={styles.flagSign}>{flag.sign}</p>
                            {flag.action && <p className={styles.flagAction}>{flag.action}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Reveal>
              </section>
            )}

            {/* Treatment */}
            {(primary || showRehab || condition.selfManagement || condition.treatmentApproach) && (
              <section id="treatment">
                <SectionHead title="How it is treated" />
                <div className={styles.prose}>
                  {primary && (
                    <div className={styles.opener}>
                      <span className={styles.leadIn}>Main approach</span>
                      <p>{sentence(primary)}</p>
                    </div>
                  )}
                  {secondary && (
                    <div className={styles.opener}>
                      <span className={styles.leadIn}>Alongside it</span>
                      <p>{sentence(secondary)}</p>
                    </div>
                  )}
                  {prevention && (
                    <div className={styles.opener}>
                      <span className={styles.leadIn}>Managing it over time</span>
                      <p>{sentence(prevention)}</p>
                    </div>
                  )}
                </div>

                {phases.length > 0 && (
                  <div id="rehab-progression" data-section="rehab-progression" style={{ marginTop: 48 }}>
                    <h3 className={styles.h3}>A typical rehabilitation progression</h3>
                    <div className={`${styles.prose} ${styles.phasesIntro}`}>
                      <p>
                        Recovery from {nameLower} is usually staged: calm the symptoms first, then rebuild the strength
                        and capacity of the area, then return to your full activities. The phases below show how that can progress.
                      </p>
                    </div>
                    {REHAB_SCOPE_NOTES[conditionSlug] && (
                      <aside role="note" aria-label="Important scope and clearance note" className={styles.scope}>
                        <span className={styles.label}>Before you use this progression</span>
                        <p>{REHAB_SCOPE_NOTES[conditionSlug]}</p>
                      </aside>
                    )}
                    <aside aria-label="Using these exercises safely" className={styles.safety}>
                      <span className={styles.label}>Using these safely</span>
                      <p>
                        These are general examples, not individual advice. The right exercises, load and pace depend on
                        your diagnosis, your symptoms and any medical or surgical restrictions, and an assessment can tell
                        you which of these suit you. Build up gradually, and back off if symptoms get worse instead of settling.
                        {redFlags.length > 0 && ' If any of the warning signs listed on this page apply to you, hold off and get assessed first.'}
                      </p>
                    </aside>
                    <AtlasPhases phases={phases} />
                  </div>
                )}

                {condition.selfManagement && condition.selfManagement.length > 0 && (
                  <>
                    <h3 id="self-care" className={`${styles.h3} ${styles.subHead}`}>What you can do now</h3>
                    <dl className={styles.defs}>
                      {condition.selfManagement.map((item) => (
                        <div key={item.strategy}>
                          <dt>{item.strategy}</dt>
                          <dd>{sentence(item.rationale)}</dd>
                          {item.precautions && item.precautions.length > 0 && (
                            <dd className={styles.caution}>{item.precautions.map(sentence).join(' ')}</dd>
                          )}
                        </div>
                      ))}
                    </dl>
                  </>
                )}

                {(condition.treatmentApproach || relatedTreatments.length > 0) && (
                  <>
                    <h3 className={`${styles.h3} ${styles.subHead}`}>What I use in clinic</h3>
                    {condition.treatmentApproach?.description && (
                      <div className={styles.prose} style={{ marginBottom: 18 }}>
                        <p>{condition.treatmentApproach.description}</p>
                      </div>
                    )}
                    {condition.treatmentApproach?.techniques && (
                      <dl className={styles.defs}>
                        {condition.treatmentApproach.techniques.map((technique) => {
                          const [title, ...rest] = technique.split(': ');
                          return (
                            <div key={technique}>
                              <dt>{title}</dt>
                              {rest.length > 0 && <dd>{sentence(rest.join(': '))}</dd>}
                            </div>
                          );
                        })}
                      </dl>
                    )}
                    {relatedTreatments.length > 0 && (
                      <>
                        <span className={styles.label} style={{ marginTop: 32, marginBottom: 10 }}>Treatments on this site</span>
                        <ul className={`${styles.rows} ${styles.rowsTwo}`}>
                          {relatedTreatments.map((t) => (
                            <li key={t.id}>
                              <Link href={`/treatments/${t.id}`}>
                                <span className={styles.rowText}>{t.shortName ?? t.name}</span>
                                <ArrowRightIcon aria-hidden="true" />
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                <SectionHead title="How long it takes" />
                <div className={styles.prose}>
                  {!condition.prognosis && !condition.timeline?.length && keyPointText?.time && <p>{sentence(keyPointText.time)}</p>}
                  {condition.prognosis?.timeline && <p>{sentence(condition.prognosis.timeline)}</p>}
                  {condition.prognosis?.naturalHistory && <p>{sentence(condition.prognosis.naturalHistory)}</p>}
                </div>
                {condition.timeline && condition.timeline.length > 0 && (
                  <dl className={styles.defs} style={{ marginTop: 28 }}>
                    {condition.timeline.map((phase) => (
                      <div key={phase.phase}>
                        <dt>
                          {phase.phase} <span style={{ color: 'var(--gold-ink)', fontWeight: 500 }}>({phase.duration})</span>
                        </dt>
                        <dd>{sentence(phase.description)}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {condition.prognosis?.factors && condition.prognosis.factors.length > 0 && (
                  <>
                    <span className={styles.label} style={{ marginTop: 32, marginBottom: 10 }}>What changes the timeline</span>
                    <ul className={`${styles.list} ${styles.listTwo} ${styles.listSoft}`}>
                      {condition.prognosis.factors.map((factor) => (
                        <li key={factor}>{factor}</li>
                      ))}
                    </ul>
                  </>
                )}
                {condition.measuringProgress?.dayToDay && (
                  <div className={styles.prose} style={{ marginTop: 28 }}>
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
                <SectionHead title={similarHeading.heading} />
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
                    <span className={styles.label} style={{ marginTop: 36, marginBottom: 10 }}>Side by side</span>
                    <ul className={styles.rows}>
                      {comparisons.map((comparison) => (
                        <li key={comparison.pair}>
                          <Link href={`/conditions/compare/${comparison.pair}`}>
                            <span>
                              <span className={styles.rowText}>{comparisonQuestion(comparison, conditionSlug)}</span>
                              <span className={styles.rowBlurb}>How I separate the two by pattern, tests and exam findings.</span>
                            </span>
                            <ArrowRightIcon aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            {/* Questions */}
            {condition.faqs && condition.faqs.length > 0 && (
              <section id="faqs">
                <SectionHead title="What patients ask me most" />
                <div className={styles.disc}>
                  {condition.faqs.map((faq) => (
                    <AtlasDisclosure key={faq.question} title={faq.question}>
                      <p>{faq.answer}</p>
                    </AtlasDisclosure>
                  ))}
                </div>
                {bookLine('condition_faq')}
              </section>
            )}

            {/* The science */}
            {(scienceText || condition.biomechanics) && (
              <section id="science" className={styles.bleed}>
                <div className={styles.ground} aria-hidden="true" />
                <SectionHead title={<>The Science of {condition.name}</>} />
                <div className={styles.clearfix}>
                  <figure className={styles.figure}>
                    <AtlasPlate key={`${conditionSlug}-figure`} slug={conditionSlug} sizes="340px" />
                    {plateName && <figcaption>{plateName}</figcaption>}
                  </figure>
                  {scienceText && (
                    <div className={styles.prose}>
                      <Paragraphs text={scienceText} />
                    </div>
                  )}
                </div>
                {condition.biomechanics && (
                  <div className={styles.disc} style={{ marginTop: 36 }}>
                    <AtlasDisclosure title="Contributing factors">
                      <Paragraphs text={condition.biomechanics} />
                    </AtlasDisclosure>
                  </div>
                )}
              </section>
            )}

            {/* Research */}
            {(keyResearch.length > 0 || researchInsights.length > 0) && (
              <section id="research">
                <SectionHead title="What the studies show" />
                {keyResearch.length > 0 && (
                  <AtlasResearch count={keyResearch.length}>
                    {keyResearch.map((r, i) => {
                      const title = r.finding || r.title;
                      const body = r.detail || r.findings;
                      const relevance = r.clinicalRelevance || r.relevance;
                      return (
                        <li key={i}>
                          <div>
                            {title && <h3 className={styles.refFinding}>{title}</h3>}
                            {body && <p className={styles.refBody}>{sentence(body)}</p>}
                            {relevance && <p className={styles.refWhy}>{sentence(relevance)}</p>}
                            <Citation research={r} />
                          </div>
                        </li>
                      );
                    })}
                  </AtlasResearch>
                )}
                {researchInsights.length > 0 && (
                  <ul className={styles.insights}>
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
                <Reveal as="div" className={styles.sectionHead}>
                  <Reveal as="span" variant="rule" className={styles.rule} />
                  <h2 id="keep-reading" className={styles.h2}>Keep reading</h2>
                </Reveal>
                {regionGuides.length > 0 && (
                  <>
                    <span className={styles.label} style={{ marginBottom: 10 }}>Guides on {guideRegion.toLowerCase()} pain</span>
                    <ul className={`${styles.rows} ${styles.rowsTwo}`}>
                      {regionGuides.map((g) => (
                        <li key={g.href}>
                          <Link href={g.href}>
                            <span>
                              <span className={styles.rowText}>{g.title}</span>
                              <span className={styles.rowBlurb}>{g.blurb}</span>
                            </span>
                            <ArrowRightIcon aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {related.length > 0 && (
                  <>
                    <span className={styles.label} style={{ marginTop: regionGuides.length > 0 ? 36 : 0, marginBottom: 10 }}>Related conditions</span>
                    <ul className={`${styles.rows} ${styles.rowsTwo}`}>
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link href={`/conditions/${r.slug}`}>
                            <span>
                              <span className={styles.rowText}>{r.name}</span>
                              <span className={styles.rowBlurb}>{explanationBySlug.get(r.slug)}</span>
                            </span>
                            <ArrowRightIcon aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            <aside className={styles.consent} aria-label="About hands-on assessment">
              <ShieldCheckIcon aria-hidden="true" />
              <p>
                Every part of an assessment runs on informed consent. I explain what I am checking for and why before I
                do it, and I can offer an alternative approach if a test or technique does not suit your comfort level or needs.
              </p>
            </aside>
          </div>
        </div>
      </div>

      {/* Closing */}
      <section className={`${styles.closing} ${styles.onNight}`} data-atlas-closing="">
        <div className={styles.frame}>
          <div className={styles.closingGrid}>
            <div>
              <h2 className={styles.closingTitle}>Getting back to it</h2>
              <p className={styles.closingText}>Physiotherapy for {nameLower}, built around the activity you want back.</p>
              <div className={styles.actions}>
                <a href={JANE_ASSESSMENT_URL} data-booking-source="condition_footer" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                  Book an assessment
                  <ArrowRightIcon aria-hidden="true" />
                </a>
                <Link href="/contact" className={styles.btnGhost}>
                  Contact
                </Link>
              </div>
            </div>
            <Reveal as="div" className={styles.closingPrint}>
              <Print {...ILLUSTRATIONS[CATEGORY_PRINT[condition.category] ?? 'walking']} sizes="(min-width: 1024px) 340px, 300px" />
            </Reveal>
          </div>
        </div>
      </section>

      <AtlasActionBar />
    </main>
  );
}
