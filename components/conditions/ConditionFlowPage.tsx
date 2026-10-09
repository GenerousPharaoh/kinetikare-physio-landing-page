'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowRightIcon,
  BeakerIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import type { Condition } from '@/lib/conditions-data';
import type { PatternMatcherCluster } from '@/lib/pattern-matchers/knee-cluster';
import { getConditionHub } from '@/lib/condition-hubs';
import { getTreatmentsByCondition } from '@/lib/treatments-data';
import { REHAB_PROGRESSION_SLUGS, REHAB_SCOPE_NOTES } from '@/lib/rehab-progression';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { CATEGORY_PRINT, ILLUSTRATIONS } from '@/lib/illustrations';
import AuthorByline from './AuthorByline';
import RegionAnatomy from './RegionAnatomy';
import ClinicalObservations from './ClinicalObservations';
import ExerciseProgression from './ExerciseProgression';
import GlossaryText from './GlossaryText';
import RelatedConditionsList from './RelatedConditionsList';
import ComparisonCrossLinks from './ComparisonCrossLinks';
import ConsentNote from './ConsentNote';
import Print from '@/components/Print';

/**
 * Condition page layout (single page since 2026-10-08; it replaced the tabbed
 * ConditionPageClient). Content is in the order a patient asks: does this sound
 * like me, what do you see in clinic, how is it treated, how long, when to see a
 * doctor, what else it could be, questions, then the science and the research.
 * No tabs and no fixed bars on phones; the site's floating Book and Call pills
 * carry booking there. Glossary underlines only in the science section.
 */

const PatternMatcher = dynamic(() => import('./PatternMatcher'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 min-h-[220px] flex items-center justify-center text-slate-500 text-sm">
      Loading pattern check...
    </div>
  ),
});

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

function Heading({
  icon: Icon,
  children,
  id,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="p-2.5 bg-slate-900 rounded-xl flex-shrink-0">
        <Icon className="h-5 w-5 text-[#B08D57]" aria-hidden="true" />
      </div>
      <h2 id={id} className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
        {children}
      </h2>
    </div>
  );
}

// Adds a full stop only when the data string does not already end with one.
const sentence = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

const Para = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-base md:text-[17px] text-slate-700 leading-relaxed max-w-[70ch] ${className}`}>{children}</p>
);

export default function ConditionFlowPage({
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
  const snapshot = condition.evidenceSnapshot;
  const primary = snapshot?.primaryStrategy || snapshot?.firstLine;
  const secondary = snapshot?.secondaryStrategy || snapshot?.imaging;
  const prevention = snapshot?.preventionStrategy || snapshot?.management;
  // Red flags: structured { sign, action } where written; older entries carry
  // plain strings in redFlags or whenToSeek, shown as signs without an action.
  const redFlags: Array<{ sign: string; action?: string }> =
    condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0
      ? condition.clinicalRedFlags
      : (condition.redFlags && condition.redFlags.length > 0 ? condition.redFlags : condition.whenToSeek ?? []).map((sign) => ({ sign }));
  const scienceText = condition.pathophysiology || condition.overview;
  const researchInsights = condition.researchInsights ?? [];
  const keyResearch = condition.keyResearch ?? [];
  const nameLower = condition.name.toLowerCase();

  // "On this page" rail (desktop) with a light scrollspy.
  const sections = [
    { id: 'symptoms', label: 'Symptoms', show: Boolean(condition.clinicalPresentation || hasPatternMatcher) },
    { id: 'in-clinic', label: 'In clinic', show: Boolean(condition.clinicalObservations) },
    { id: 'treatment', label: 'Treatment', show: Boolean(primary || showRehab || condition.selfManagement || condition.treatmentApproach) },
    { id: 'recovery', label: 'Recovery time', show: Boolean(condition.prognosis || condition.timeline) },
    { id: 'red-flags', label: 'See a doctor first', show: redFlags.length > 0 },
    { id: 'similar', label: 'Similar conditions', show: Boolean(condition.differentialDiagnosis?.length) },
    { id: 'faqs', label: 'Questions', show: Boolean(condition.faqs?.length) },
    { id: 'science', label: 'The science', show: Boolean(scienceText || condition.biomechanics) },
    { id: 'research', label: 'Research', show: keyResearch.length > 0 || researchInsights.length > 0 },
  ].filter((s) => s.show);

  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conditionSlug]);

  let band = 0;
  const tone = () => (band++ % 2 === 0 ? 'bg-white' : 'bg-slate-50/60');

  return (
    <div className="min-h-screen">
      {/* Reading progress */}
      <div aria-hidden="true" className="fixed top-[72px] lg:top-24 left-0 right-0 z-30 pointer-events-none">
        <div className="h-0.5 bg-slate-200/70">
          <div className="h-full bg-[#B08D57] transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-slate-50 via-white to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
            <div className="min-w-0">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 mb-4">
                <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200">Home</Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors duration-200">Conditions</Link>
                {conditionHub && (
                  <>
                    <ChevronRightIcon className="h-3 w-3" />
                    <Link href={conditionHub.path} className="hover:text-[#B08D57] transition-colors duration-200">
                      {conditionHub.name}
                    </Link>
                  </>
                )}
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">{condition.name}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                {condition.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                {condition.summary || condition.description}
              </p>

              <AuthorByline lastReviewed={condition.lastReviewed} conditionName={condition.name} />

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href={JANE_BOOKING_URL}
                  data-booking-source="condition_intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gold inline-flex items-center gap-1.5 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Initial Assessment
                </Link>
                <Link
                  href="tel:+19056346000"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#B08D57] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call clinic
                </Link>
                {conditionHub && (
                  <>
                    <span aria-hidden="true" className="hidden sm:inline h-4 w-px bg-slate-300" />
                    <Link
                      href={conditionHub.path}
                      className="group inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#B08D57] transition-colors"
                    >
                      {conditionHub.name} guide
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <RegionAnatomy slug={condition.slug} category={condition.category} caption />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          {/* On this page (desktop) */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-32 pt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">On this page</p>
              <ul className="space-y-1 border-l border-slate-200">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={active === s.id ? 'true' : undefined}
                      className={`block -ml-px border-l-2 pl-3 py-1 text-sm transition-colors ${
                        active === s.id
                          ? 'border-[#B08D57] text-slate-900 font-medium'
                          : 'border-transparent text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="min-w-0">
            {/* Does this sound like you? */}
            {(condition.clinicalPresentation || hasPatternMatcher) && (
              <section id="symptoms" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={ClipboardDocumentListIcon}>Does this sound like you?</Heading>
                {condition.clinicalPresentation?.primarySymptoms && (
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    {condition.clinicalPresentation.primarySymptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-base text-slate-700 leading-relaxed">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {condition.clinicalPresentation?.associatedSymptoms && (
                  <>
                    <p className="text-sm font-semibold text-slate-900 mb-2">Often alongside it</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                      {condition.clinicalPresentation.associatedSymptoms.map((symptom) => (
                        <li key={symptom} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {condition.clinicalPresentation?.typicalPattern && (
                  <blockquote className="my-8 border-l-4 border-[#B08D57] pl-5 !font-sans not-italic text-base md:text-lg text-slate-800 leading-relaxed max-w-[70ch]">
                    {condition.clinicalPresentation.typicalPattern}
                  </blockquote>
                )}
                {hasPatternMatcher && patternCluster && patternConditions && (
                  <div className="mt-8">
                    <PatternMatcher currentSlug={conditionSlug} cluster={patternCluster} conditionsBySlug={patternConditions} />
                  </div>
                )}
              </section>
            )}

            {/* His own notes */}
            {condition.clinicalObservations && (
              <section id="in-clinic" className="scroll-mt-28 py-12">
                <ClinicalObservations observations={condition.clinicalObservations} />
              </section>
            )}

            {/* Treatment */}
            {(primary || showRehab || condition.selfManagement || condition.treatmentApproach) && (
              <section id="treatment" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={HeartIcon}>How it is treated</Heading>
                {primary && (
                  <Para className="mb-4">
                    <strong className="text-slate-900">Main approach.</strong> {sentence(primary)}
                  </Para>
                )}
                {secondary && (
                  <Para className="mb-4">
                    <strong className="text-slate-900">Alongside it.</strong> {sentence(secondary)}
                  </Para>
                )}
                {prevention && (
                  <Para className="mb-8">
                    <strong className="text-slate-900">Keeping it from coming back.</strong> {sentence(prevention)}
                  </Para>
                )}

                {showRehab && (
                  <div className="my-8">
                    <ExerciseProgression
                      progression={condition.exerciseProgression}
                      conditionName={condition.name}
                      scopeNote={REHAB_SCOPE_NOTES[conditionSlug]}
                    />
                  </div>
                )}

                {condition.selfManagement && condition.selfManagement.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-medium text-slate-900 mb-4">What you can do now</h3>
                    <ul className="space-y-4 max-w-[70ch]">
                      {condition.selfManagement.map((item) => (
                        <li key={item.strategy} className="text-base text-slate-700 leading-relaxed">
                          <strong className="text-slate-900">{item.strategy}.</strong> {item.rationale}
                          {item.precautions && item.precautions.length > 0 && (
                            <span className="block mt-1 text-sm text-slate-500">{item.precautions.map(sentence).join(' ')}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(condition.treatmentApproach || relatedTreatments.length > 0) && (
                  <div className="mt-10">
                    <h3 className="text-xl font-medium text-slate-900 mb-4">What I use in clinic</h3>
                    {condition.treatmentApproach?.description && <Para className="mb-4">{condition.treatmentApproach.description}</Para>}
                    {condition.treatmentApproach?.techniques && (
                      <ul className="space-y-3 mb-6 max-w-[70ch]">
                        {condition.treatmentApproach.techniques.map((technique) => {
                          const [title, ...rest] = technique.split(': ');
                          return (
                            <li key={technique} className="flex items-start gap-3 text-base text-slate-700 leading-relaxed">
                              <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span>
                                {rest.length > 0 ? (
                                  <>
                                    <strong className="text-slate-900">{title}.</strong> {rest.join(': ')}
                                  </>
                                ) : (
                                  title
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {relatedTreatments.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {relatedTreatments.map((t) => (
                          <Link
                            key={t.id}
                            href={`/treatments/${t.id}`}
                            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm text-slate-700 hover:border-[#B08D57] hover:text-[#8A6F0A] transition-colors"
                          >
                            {t.name}
                            <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <a
                  href={JANE_BOOKING_URL}
                  data-booking-source="condition_management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 group inline-flex items-center gap-1.5 text-sm font-medium text-[#8A6F0A] hover:text-[#B08D57] transition-colors"
                >
                  Book an assessment for {nameLower}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </section>
            )}

            {/* Recovery time */}
            {(condition.prognosis || (condition.timeline && condition.timeline.length > 0)) && (
              <section id="recovery" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={ClockIcon}>How long it takes</Heading>
                {condition.prognosis?.timeline && <Para className="mb-4">{sentence(condition.prognosis.timeline)}</Para>}
                {condition.prognosis?.naturalHistory && <Para className="mb-6">{sentence(condition.prognosis.naturalHistory)}</Para>}
                {condition.timeline && condition.timeline.length > 0 && (
                  <ol className="mb-6 space-y-4 max-w-[70ch]">
                    {condition.timeline.map((phase) => (
                      <li key={phase.phase} className="text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">{phase.phase}</strong>{' '}
                        <span className="text-sm text-[#8A6F0A]">({phase.duration})</span>. {sentence(phase.description)}
                      </li>
                    ))}
                  </ol>
                )}
                {condition.prognosis?.factors && condition.prognosis.factors.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-slate-900 mb-2">What changes the timeline</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                      {condition.prognosis.factors.map((factor) => (
                        <li key={factor} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#B08D57] flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {condition.measuringProgress?.dayToDay && (
                  <Para className="mt-6 text-sm md:text-base text-slate-600">
                    <strong className="text-slate-900">How I track it.</strong> {condition.measuringProgress.dayToDay}
                  </Para>
                )}
              </section>
            )}

            {/* Red flags, once */}
            {redFlags.length > 0 && (
              <section id="red-flags" className="scroll-mt-28 py-12">
                <div className="rounded-2xl border border-red-200 border-l-4 border-l-red-600 bg-white p-6 md:p-8">
                  <div className="flex items-center gap-2.5 mb-5">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                    <h2 className="text-xl md:text-2xl font-medium text-slate-900">When to see a doctor first</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {redFlags.map((flag) => (
                      <div key={flag.sign} className="flex items-start gap-2 text-sm">
                        <div className="mt-[7px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 leading-snug">{flag.sign}</p>
                          {flag.action && <p className="text-slate-600 mt-0.5 leading-snug">{flag.action}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Similar conditions */}
            {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
              <section id="similar" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={ScaleIcon}>Conditions that can feel similar</Heading>
                <dl className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                  {condition.differentialDiagnosis.map((d) => (
                    <div key={d.condition}>
                      <dt className="text-base font-semibold text-slate-900 mb-1">{d.condition}</dt>
                      <dd className="text-sm text-slate-600 leading-relaxed">{d.distinguishingFeatures}</dd>
                    </div>
                  ))}
                </dl>
                <ComparisonCrossLinks conditionSlug={conditionSlug} currentConditionName={condition.name} />
              </section>
            )}

            {/* FAQ */}
            {condition.faqs && condition.faqs.length > 0 && (
              <section id="faqs" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={QuestionMarkCircleIcon}>{condition.name} questions I hear most</Heading>
                <div className="space-y-3">
                  {condition.faqs.map((faq) => (
                    <details key={faq.question} className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                        <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm md:text-base text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
                <a
                  href={JANE_BOOKING_URL}
                  data-booking-source="condition_faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 group inline-flex items-center gap-1.5 text-sm font-medium text-[#8A6F0A] hover:text-[#B08D57] transition-colors"
                >
                  Book an assessment for {nameLower}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </section>
            )}

            {/* The science, for readers who want it */}
            {(scienceText || condition.biomechanics) && (
              <section id="science" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={BeakerIcon}>The Science of {condition.name}</Heading>
                {scienceText && (
                  <div className="space-y-5">
                    {(() => {
                      const used = new Set<string>();
                      return scienceText.split('\n\n').map((p, i) => (
                        <Para key={i}>
                          <GlossaryText text={p} usedTerms={used} />
                        </Para>
                      ));
                    })()}
                  </div>
                )}
                {condition.biomechanics && (
                  <details className="group mt-10">
                    <summary className="flex items-center gap-2 cursor-pointer list-none text-lg font-medium text-slate-900 hover:text-[#8A6F0A] transition-colors">
                      Contributing factors
                      <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform" aria-hidden="true" />
                    </summary>
                    <div className="mt-4 space-y-5">
                      {(() => {
                        const used = new Set<string>();
                        return condition.biomechanics.split('\n\n').map((p, i) => (
                          <Para key={i}>
                            <GlossaryText text={p} usedTerms={used} />
                          </Para>
                        ));
                      })()}
                    </div>
                  </details>
                )}
              </section>
            )}

            {/* Research */}
            {(keyResearch.length > 0 || researchInsights.length > 0) && (
              <section id="research" className={`scroll-mt-28 py-12 ${tone()}`}>
                <Heading icon={BeakerIcon}>Key research</Heading>
                <div className="grid md:grid-cols-2 gap-5">
                  {keyResearch.map((r, i) => {
                    const title = r.finding || r.title;
                    const body = r.detail || r.findings;
                    const relevance = r.clinicalRelevance || r.relevance;
                    return (
                      <div key={i} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200">
                        {r.year && (
                          <span className="inline-flex px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#80650A] text-xs font-semibold mb-2">
                            {r.year}
                          </span>
                        )}
                        {title && <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">{title}</h3>}
                        {body && <p className="text-sm text-slate-700 leading-relaxed mb-3">{body}</p>}
                        {relevance && <p className="text-sm text-slate-500 leading-relaxed">{relevance}</p>}
                        {r.citation && <p className="mt-3 text-xs text-slate-500">{r.citation}</p>}
                      </div>
                    );
                  })}
                </div>
                {researchInsights.length > 0 && (
                  <ul className="mt-6 space-y-3 max-w-[70ch]">
                    {researchInsights.map((insight) => {
                      const colon = insight.indexOf(':');
                      return (
                        <li key={insight} className="text-base text-slate-700 leading-relaxed">
                          {colon > -1 ? (
                            <>
                              <strong className="text-slate-900">{insight.slice(0, colon).trim()}.</strong> {insight.slice(colon + 1).trim()}
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

            <div className="pb-4">
              <RelatedConditionsList currentSlug={conditionSlug} relatedConditions={relatedConditions} limit={6} />
              <ConsentNote />
            </div>
          </main>
        </div>
      </div>

      {/* Closing band, unchanged */}
      <section className="mt-8 !bg-[#0f172a] !bg-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-center lg:grid-cols-[1fr_340px] lg:gap-16">
            <div>
              <h2 className="font-playfair !text-white text-3xl md:text-4xl tracking-tight mb-3">Getting back to it</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-[48ch]">
                Physiotherapy for {nameLower}, built around the activity you want back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={JANE_BOOKING_URL}
                  data-booking-source="condition_footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gold inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 group"
                >
                  Book Assessment
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-white/25 text-white hover:bg-white/5 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[280px] md:max-w-none">
              <Print
                {...ILLUSTRATIONS[CATEGORY_PRINT[condition.category] ?? 'walking']}
                sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 280px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
