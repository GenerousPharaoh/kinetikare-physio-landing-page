"use client";

// <!-- REDESIGNED 2025 - ALL CRITICAL ISSUES FIXED -->

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  CalendarIcon,
  AcademicCapIcon,
  BeakerIcon,
  DocumentTextIcon,
  HeartIcon,
  ChartBarIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  FireIcon,
  ShieldCheckIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';
import { getTreatmentsByCondition } from '@/lib/treatments-data';
import type { PatternMatcherCluster } from '@/lib/pattern-matchers/knee-cluster';
import ClinicalObservations from './conditions/ClinicalObservations';
import AuthorByline from './conditions/AuthorByline';
import SectionHeading from './conditions/SectionHeading';
import RelatedConditionsList from './conditions/RelatedConditionsList';
import ComparisonCrossLinks from './conditions/ComparisonCrossLinks';
import ConsentNote from './conditions/ConsentNote';

// Lazy-load the Pattern Matcher: only adds to the bundle when used, and only
// after hydration. ssr:false keeps it out of the initial HTML payload.
const PatternMatcher = dynamic(() => import('./conditions/PatternMatcher'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 min-h-[220px] flex items-center justify-center text-slate-400 text-sm">
      Loading pattern check...
    </div>
  ),
});

type PatternClusterConditions = Record<
  string,
  { slug: string; name: string; patternMatcher?: Condition['patternMatcher'] }
>;

interface ConditionPageClientProps {
  condition: Condition;
  relatedConditions: Condition[];
  conditionSlug: string;
  patternCluster?: PatternMatcherCluster;
  patternConditions?: PatternClusterConditions;
}

// Tab interface for better organization
interface TabContent {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SubSectionChip {
  id: string;
  label: string;
  isActive: boolean;
  onSelect: () => void;
}

export default function ConditionPageClient({
  condition,
  relatedConditions,
  conditionSlug,
  patternCluster,
  patternConditions,
}: ConditionPageClientProps) {

  const hasPatternMatcher = Boolean(
    patternCluster && patternConditions && condition.patternMatcher?.clusterKey === patternCluster.key,
  );

  // Get related treatments for this condition
  const relatedTreatments = getTreatmentsByCondition(conditionSlug);

  // Determine first available tab for this condition
  const getFirstAvailableTab = () => {
    if (condition.pathophysiology || condition.overview || condition.biomechanics) return 'overview';
    if (condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek || hasPatternMatcher) return 'symptoms';
    if (condition.selfManagement || condition.prognosis || condition.faqs || condition.treatmentApproach || condition.timeline || condition.evidenceBasedTreatment || relatedTreatments.length > 0) return 'self-care';
    if (condition.keyResearch || condition.researchInsights) return 'research';
    return 'overview'; // fallback
  };

  const [activeTab, setActiveTab] = useState(getFirstAvailableTab());
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Each tab's sub-sections are all rendered and stacked. Sidebar
  // sub-items scroll to the matching section anchor and a scrollspy
  // updates which sub-item is "current". `activeSubSection` is the
  // section id currently in view for the active tab.
  const [activeSubSection, setActiveSubSection] = useState<string>('');

  // Sidebar state
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const sidebarPlaceholderRef = useRef<HTMLDivElement>(null);

  // Scroll to top of content container (used when switching top-level tabs)
  const scrollToContentTop = () => {
    if (contentContainerRef.current) {
      const headerHeight = 96; // Fixed header
      const padding = 32; // Extra padding from top
      const elementTop = contentContainerRef.current.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = elementTop - headerHeight - padding;
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
  };

  // Scroll to a specific sub-section anchor within the current tab.
  // Uses scroll-margin-top on the element so the sticky header isn't
  // covering the heading. Updates activeSubSection optimistically so
  // the sidebar highlights immediately even before the scrollspy fires.
  const scrollToSubSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    setActiveSubSection(sectionId);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Check if condition has detailed content
  const hasDetailedContent = Boolean(
    condition.pathophysiology || 
    condition.clinicalPresentation || 
    condition.evidenceBasedTreatment ||
    condition.evidenceSnapshot ||
    condition.whatToExpect ||
    condition.measuringProgress ||
    condition.selfManagement ||
    condition.differentialDiagnosis ||
    condition.keyResearch
  );

  // Define tabs based on available content
  const tabs: TabContent[] = [
    { id: 'overview', label: 'Overview', icon: InformationCircleIcon },
    { id: 'symptoms', label: 'Symptoms', icon: DocumentTextIcon },
    { id: 'self-care', label: 'Management', icon: HeartIcon },
    { id: 'research', label: 'Research', icon: ChartBarIcon },
  ].filter(tab => {
    // Only show tabs that have content
    switch(tab.id) {
      case 'overview':
        return condition.pathophysiology || condition.overview || condition.biomechanics;
      case 'symptoms':
        return condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek || hasPatternMatcher;
      case 'research':
        return condition.keyResearch || condition.researchInsights;
      case 'self-care':
        // Now includes treatment approach and timeline content
        return condition.selfManagement || condition.prognosis || condition.faqs ||
               condition.treatmentApproach || condition.timeline || condition.evidenceBasedTreatment || relatedTreatments.length > 0;
      default:
        return false;
    }
  });

  const tabGuides: Record<string, string> = {
    overview: 'Pathophysiology and contributing factors.',
    symptoms: 'Clinical presentation, differential diagnosis, and red flags.',
    'self-care': 'Management options, treatment techniques, and recovery expectations.',
    research: 'Research summaries and clinical takeaways.',
  };

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? 'Section';

  const subSectionChips: SubSectionChip[] = (() => {
    const chip = (id: string, label: string): SubSectionChip => ({
      id,
      label,
      isActive: activeSubSection === id,
      onSelect: () => scrollToSubSection(id),
    });

    if (activeTab === 'overview') {
      return [
        condition.pathophysiology ? chip('pathophysiology-section', 'Pathophysiology') : null,
        condition.biomechanics ? chip('biomechanics-section', 'Contributing Factors') : null,
      ].filter((c): c is SubSectionChip => Boolean(c));
    }

    if (activeTab === 'symptoms') {
      return [
        condition.clinicalPresentation ? chip('clinical-presentation-section', 'Clinical Presentation') : null,
        hasPatternMatcher ? chip('pattern-matcher-section', 'Is this my pattern?') : null,
        condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0
          ? chip('differential-section', 'Differential Diagnosis') : null,
        condition.whenToSeek && condition.whenToSeek.length > 0
          ? chip('when-to-seek-section', 'When to Seek Help') : null,
      ].filter((c): c is SubSectionChip => Boolean(c));
    }

    if (activeTab === 'self-care') {
      return [
        (condition.evidenceSnapshot || condition.selfManagement)
          ? chip('evidence-based-management', 'Evidence-Based Treatment') : null,
        (condition.treatmentApproach || relatedTreatments.length > 0)
          ? chip('treatment-techniques', 'Treatment Techniques') : null,
        condition.timeline && condition.timeline.length > 0
          ? chip('recovery-timeline', 'Recovery Timeline') : null,
        condition.prognosis ? chip('prognosis', 'Prognosis & Outcomes') : null,
        condition.measuringProgress ? chip('measuring-progress', 'Measuring Progress') : null,
        condition.faqs && condition.faqs.length > 0 ? chip('faqs', 'FAQs') : null,
      ].filter((c): c is SubSectionChip => Boolean(c));
    }

    if (activeTab === 'research') {
      return [
        condition.keyResearch && condition.keyResearch.length > 0
          ? chip('key-research', 'Key Research') : null,
        condition.researchInsights && condition.researchInsights.length > 0
          ? chip('research-insights', 'Research Insights') : null,
      ].filter((c): c is SubSectionChip => Boolean(c));
    }

    return [];
  })();


  // Track page reading progress + JS-based sidebar sticky. Sticky CSS
  // is broken globally by `html { overflow-x: hidden }` (no practical
  // way to remove without breaking horizontal-scroll containment), so we
  // pin the aside with position: fixed when the placeholder scrolls past
  // the sticky line, and restore absolute/static when scrolled back up
  // or near the bottom of the placeholder.
  useEffect(() => {
    let ticking = false;
    const STICKY_OFFSET = 112;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;
          const scrollableHeight = Math.max(documentHeight - windowHeight, 1);
          const progress = Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100));
          setScrollProgress(progress);

          // Manual sticky: on lg+, pin the aside with position:fixed when
          // the placeholder's top crosses the sticky line. Placeholder
          // reserves the layout space so content doesn't reflow. When the
          // content column (flex parent) nears its end, release the aside
          // so it doesn't overlap the footer CTA.
          const placeholder = sidebarPlaceholderRef.current;
          const aside = document.getElementById('sidebar-container');
          if (placeholder && aside && window.innerWidth >= 1024) {
            const placeholderRect = placeholder.getBoundingClientRect();
            const asideHeight = aside.offsetHeight || 0;
            // Flex parent wraps sidebar + content column; its bottom edge
            // is the true "end of article" for sticky purposes.
            const flexParent = placeholder.parentElement;
            const parentRect = flexParent?.getBoundingClientRect();
            const parentBottom = parentRect ? parentRect.bottom : Infinity;

            const atTop = placeholderRect.top > STICKY_OFFSET;
            // If the content column's bottom is above (STICKY_OFFSET + aside
            // height + gutter), we're near the end — park aside absolute at
            // the bottom of the placeholder.
            const bottomOverlapThreshold = STICKY_OFFSET + asideHeight + 24;
            const nearBottom = parentBottom < bottomOverlapThreshold;

            if (atTop) {
              aside.style.position = '';
              aside.style.top = '';
              aside.style.left = '';
              aside.style.width = '';
              placeholder.style.minHeight = '';
            } else if (nearBottom && flexParent) {
              // Pin at bottom: place aside absolute within placeholder so
              // it sits flush with flex parent's bottom edge.
              const offsetFromPlaceholderTop = (flexParent.offsetHeight) - (placeholder.offsetTop - flexParent.offsetTop) - asideHeight;
              aside.style.position = 'absolute';
              aside.style.top = `${Math.max(0, offsetFromPlaceholderTop)}px`;
              aside.style.left = '';
              aside.style.width = '';
              if (asideHeight > 0) placeholder.style.minHeight = `${asideHeight}px`;
            } else {
              aside.style.position = 'fixed';
              aside.style.top = `${STICKY_OFFSET}px`;
              aside.style.left = `${placeholderRect.left}px`;
              aside.style.width = `${placeholder.offsetWidth}px`;
              if (asideHeight > 0) placeholder.style.minHeight = `${asideHeight}px`;
            }
          } else if (aside) {
            // Mobile or no placeholder: clear any inline positioning
            aside.style.position = '';
            aside.style.top = '';
            aside.style.left = '';
            aside.style.width = '';
            if (placeholder) placeholder.style.minHeight = '';
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Scrollspy: update activeSubSection based on which sub-section is
  // currently closest to the top of the viewport (below the sticky
  // header). Re-runs when the active tab changes so each tab's sections
  // are tracked independently.
  useEffect(() => {
    const ids = subSectionChips.map((c) => c.id);
    if (ids.length === 0) {
      setActiveSubSection('');
      return;
    }

    // Default to the first section until the user scrolls past it.
    setActiveSubSection(ids[0]);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Trigger when a section crosses the upper ~30% of the viewport,
    // accounting for the sticky header (~96px). rootMargin shifts the
    // intersection line so the sidebar highlights the section the user
    // is actively reading, not the one barely entering from below.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSubSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-128px 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, conditionSlug]);

  // Check if we need multiple citations
  const hasStrongEvidence = (treatment: any) => {
    return treatment.effectivenessLevel === 'strong' && 
           (!condition.keyResearch || condition.keyResearch.length < 2);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        {/* Reading progress indicator */}
        <div aria-hidden="true" className="fixed top-[72px] lg:top-24 left-0 right-0 z-30 pointer-events-none">
          <div className="h-0.5 bg-slate-200/70">
            <div
              className="h-full bg-[#B08D57] transition-[width] duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Minimal Hero with Breadcrumbs */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
                <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200">
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors duration-200">
                  Conditions
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">{condition.name}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                {condition.name}
              </h1>
              {condition.description && (
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                  {condition.description}
                </p>
              )}

              {/* Author byline: E-E-A-T signal with optional last-reviewed date */}
              <AuthorByline
                lastReviewed={condition.lastReviewed}
                conditionName={condition.name}
              />

              {/* Primary actions: single primary CTA + inline text links so
                  the hero stops looking like a button rack. */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
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
                <span aria-hidden="true" className="hidden sm:inline h-4 w-px bg-slate-300" />
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#B08D57] transition-colors"
                >
                  View all conditions
                  <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Mobile / tablet in-page tab nav. Hidden on lg+ because the
                  desktop sticky sidebar (plus mobile bottom bar + drawer)
                  already handle navigation. Keeping three synchronized navs
                  visible on desktop was the single biggest source of visual
                  noise in the hero. */}
              <div className="mt-4 max-w-4xl lg:hidden">
                <div className="rounded-xl border border-slate-200 bg-white p-2">
                  <div role="tablist" aria-label="Condition page sections" className="flex flex-wrap items-center gap-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          id={`condition-tab-${tab.id}`}
                          role="tab"
                          aria-selected={isActive}
                          aria-controls="condition-tabpanel"
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => {
                            setActiveTab(tab.id);
                            scrollToContentTop();
                          }}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-[#B08D57] text-white shadow-sm'
                              : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile / tablet sub-section quick navigation - hidden on lg+ */}
              {subSectionChips.length > 1 && (
                <div className="mt-4 lg:hidden">
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-2 px-1">
                    Inside {activeTabLabel}
                  </p>
                  <div className="relative -mx-1">
                    <div className="overflow-x-auto scrollbar-hide px-1 [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-20px),transparent)] md:[mask-image:none]">
                      <div className="inline-flex items-center gap-2 min-w-max pb-1">
                        {subSectionChips.map((chip) => (
                          <button
                            key={chip.id}
                            onClick={chip.onSelect}
                            aria-current={chip.isActive ? 'true' : undefined}
                            className={`px-3 py-1.5 min-h-[44px] rounded-full text-xs font-medium border transition-colors ${
                              chip.isActive
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-[#B08D57] hover:text-[#B08D57]'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* Main Content Area with Sidebar */}
        <section className="pt-6 pb-28 md:pb-24 lg:pb-16 bg-white min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex gap-6 items-start relative">
              {/* Sidebar Navigation - Desktop. position:sticky is unreliable
                  here because <html> has overflow-x: hidden globally, which
                  silently breaks sticky for every descendant. We use a JS
                  sticky via useEffect below: toggle .is-stuck on the aside
                  when its placeholder top crosses the sticky line. */}
              <div className="hidden lg:block w-56 flex-shrink-0 self-start relative" ref={sidebarPlaceholderRef}>
                <aside id="sidebar-container" className="w-56">
                  <nav aria-label="Page sections" className="max-h-[calc(100vh-8rem)] overflow-y-auto space-y-3 pr-3">
                  {/* Navigation Sections - Ultra Smooth */}
                  <div className="space-y-1.5">
                    {/* Overview/Science Section with Sub-navigation */}
                    {tabs.find(t => t.id === 'overview') && (
                      <div>
                        <button
                          onClick={() => {
                            setActiveTab('overview');
                            scrollToContentTop();
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'overview'
                              ? 'bg-slate-50 text-slate-900 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <BeakerIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Science</span>
                          </div>
                          {(condition.pathophysiology || condition.biomechanics) && (
                            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeTab === 'overview' ? 'rotate-180' : ''}`} />
                          )}
                        </button>

                        {/* Sub-navigation for Overview */}
                        {activeTab === 'overview' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-l-[#B08D57]/25 pl-3"
                          >
                            {condition.pathophysiology && (
                              <button
                                onClick={() => scrollToSubSection('pathophysiology-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'pathophysiology-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Pathophysiology
                              </button>
                            )}
                            {condition.biomechanics && (
                              <button
                                onClick={() => scrollToSubSection('biomechanics-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'biomechanics-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Contributing Factors
                              </button>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Symptoms/Clinical Section with Sub-navigation */}
                    {tabs.find(t => t.id === 'symptoms') && (
                      <div>
                        <button
                          onClick={() => { setActiveTab('symptoms'); scrollToContentTop(); }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'symptoms'
                              ? 'bg-slate-50 text-slate-900 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FireIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Clinical</span>
                          </div>
                          {(condition.clinicalPresentation || (condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0) || (condition.whenToSeek && condition.whenToSeek.length > 0) || hasPatternMatcher) && (
                            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeTab === 'symptoms' ? 'rotate-180' : ''}`} />
                          )}
                        </button>

                        {/* Sub-navigation for Symptoms */}
                        {activeTab === 'symptoms' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-l-[#B08D57]/25 pl-3"
                          >
                            {condition.clinicalPresentation && (
                              <button
                                onClick={() => scrollToSubSection('clinical-presentation-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'clinical-presentation-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Clinical Presentation
                              </button>
                            )}
                            {hasPatternMatcher && (
                              <button
                                onClick={() => scrollToSubSection('pattern-matcher-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'pattern-matcher-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Is this my pattern?
                              </button>
                            )}
                            {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                              <button
                                onClick={() => scrollToSubSection('differential-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'differential-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Differential Diagnosis
                              </button>
                            )}
                            {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                              <button
                                onClick={() => scrollToSubSection('when-to-seek-section')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'when-to-seek-section'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                When to Seek Help
                              </button>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Management Section with Sub-navigation */}
                    {tabs.find(t => t.id === 'self-care') && (
                      <div>
                        <button
                          onClick={() => { setActiveTab('self-care'); scrollToContentTop(); }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'self-care'
                              ? 'bg-slate-50 text-slate-900 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ShieldCheckIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Management</span>
                          </div>
                          <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeTab === 'self-care' ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Sub-navigation - shows when Management is active */}
                        {activeTab === 'self-care' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-l-[#B08D57]/25 pl-3"
                          >
                            <button
                              onClick={() => scrollToSubSection('evidence-based-management')}
                              className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                activeSubSection === 'evidence-based-management'
                                  ? 'text-slate-900 font-semibold'
                                  : 'text-slate-500 hover:text-slate-900'
                              }`}
                            >
                              Evidence-Based Treatment
                            </button>
                            {(condition.treatmentApproach || relatedTreatments.length > 0) && (
                              <button
                                onClick={() => scrollToSubSection('treatment-techniques')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'treatment-techniques'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Treatment Techniques
                              </button>
                            )}
                            {condition.timeline && (
                              <button
                                onClick={() => scrollToSubSection('recovery-timeline')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'recovery-timeline'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Recovery Timeline
                              </button>
                            )}
                            {condition.prognosis && (
                              <button
                                onClick={() => scrollToSubSection('prognosis')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'prognosis'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Prognosis & Outcomes
                              </button>
                            )}
                            {condition.measuringProgress && (
                              <button
                                onClick={() => scrollToSubSection('measuring-progress')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'measuring-progress'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Measuring Progress
                              </button>
                            )}
                            {condition.faqs && (
                              <button
                                onClick={() => scrollToSubSection('faqs')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'faqs'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                FAQs
                              </button>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Research Section with Sub-navigation */}
                    {tabs.find(t => t.id === 'research') && (
                      <div>
                        <button
                          onClick={() => { setActiveTab('research'); scrollToContentTop(); }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'research'
                              ? 'bg-slate-50 text-slate-900 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ChartBarIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Research</span>
                          </div>
                          {((condition.keyResearch && condition.keyResearch.length > 0) || (condition.researchInsights && condition.researchInsights.length > 0)) && (
                            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeTab === 'research' ? 'rotate-180' : ''}`} />
                          )}
                        </button>

                        {/* Sub-navigation for Research */}
                        {activeTab === 'research' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-l-[#B08D57]/25 pl-3"
                          >
                            {condition.keyResearch && condition.keyResearch.length > 0 && (
                              <button
                                onClick={() => scrollToSubSection('key-research')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'key-research'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Key Research & Evidence
                              </button>
                            )}
                            {condition.researchInsights && condition.researchInsights.length > 0 && (
                              <button
                                onClick={() => scrollToSubSection('research-insights')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors duration-150 rounded ${
                                  activeSubSection === 'research-insights'
                                    ? 'text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                              >
                                Research Insights
                              </button>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </nav>
                </aside>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="max-w-4xl mx-auto">
                  {/* Tab Content */}
                  <main ref={contentContainerRef} className="relative min-w-0 w-full">
                  {/* Coming Soon Message - Shown when no detailed content */}
                  {!hasDetailedContent ? (
                    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                      <div className="flex flex-col items-center text-center">
                        <ClockIcon className="h-16 w-16 text-slate-400 mb-4" />
                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-4">
                          Content Coming Soon
                        </h2>
                        <p className="text-base text-slate-700 leading-relaxed max-w-2xl mb-8">
                          Detailed information about {condition.name} is currently being developed.
                        </p>
                        
                        {relatedConditions && relatedConditions.length > 0 && (
                          <div className="w-full mb-8">
                            <p className="text-slate-700 font-medium mb-4">
                              In the meantime, check out these related conditions:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                              {relatedConditions.slice(0, 4).map((related) => (
                                <Link
                                  key={related.slug}
                                  href={`/conditions/${related.slug}`}
                                  className="bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 transition-colors text-sm"
                                >
                                  {related.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <Link 
                          href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center gap-2"
                        >
                          <CalendarIcon className="h-5 w-5" />
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  ) : (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeTab}
                      id="condition-tabpanel"
                      role="tabpanel"
                      aria-labelledby={`condition-tab-${activeTab}`}
                      tabIndex={0}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Overview Tab - all sub-sections stacked; sidebar
                          sub-items scroll to the respective anchor rather
                          than swapping content. */}
                      {activeTab === 'overview' && (
                        <>
                        <div className="space-y-8">
                          {condition.pathophysiology && (
                            <div id="pathophysiology-section" data-section="pathophysiology" className="bg-white rounded-xl p-10 md:p-12 border border-slate-200 shadow-sm scroll-mt-28">
                              <SectionHeading
                                id="pathophysiology"
                                kicker="Overview"
                                className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900 mb-8"
                              >
                                The Science of {condition.name || 'Your Condition'}
                              </SectionHeading>
                              <div className="space-y-5">
                                {condition.pathophysiology.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.overview && !condition.pathophysiology && (
                            <div id="pathophysiology-section" data-section="pathophysiology" className="bg-white rounded-xl p-10 md:p-12 border border-slate-200 shadow-sm scroll-mt-28">
                              <SectionHeading
                                id="overview"
                                kicker="Overview"
                                className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900 mb-8"
                              >
                                Understanding Your Condition
                              </SectionHeading>
                              <div className="space-y-6">
                                {condition.overview.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.biomechanics && (
                            <div id="biomechanics-section" data-section="biomechanics" className="bg-white rounded-xl p-10 md:p-12 border border-slate-200 shadow-sm scroll-mt-28">
                              <SectionHeading
                                id="contributing-factors"
                                kicker="Overview"
                                className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900 mb-8"
                              >
                                Contributing Factors
                              </SectionHeading>
                              <div className="space-y-6">
                                {condition.biomechanics.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {condition.clinicalObservations && (
                          <div className="mt-8">
                            <ClinicalObservations observations={condition.clinicalObservations} />
                          </div>
                        )}
                      </>
                      )}

                      {/* Symptoms Tab */}
                      {activeTab === 'symptoms' && (
                        <>
                          {/* Urgent red-flag callout - moved here from hero so it
                              sits in context with symptom information */}
                          {((condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0) ||
                            (condition.redFlags && condition.redFlags.length > 0)) && (
                            <aside
                              aria-label="When to seek immediate medical attention"
                              className="mb-6 bg-white rounded-xl border border-red-200 border-l-4 border-l-red-600 shadow-sm p-6 md:p-8"
                            >
                              <div className="mb-4 flex items-center gap-2.5">
                                <ExclamationTriangleIcon className="h-4 w-4 text-red-600" aria-hidden="true" />
                                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-700">
                                  When to seek immediate medical attention
                                </p>
                              </div>
                              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                {condition.clinicalRedFlags ? (
                                  condition.clinicalRedFlags.map((flag, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm">
                                      <div className="mt-[7px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                      <div className="flex-1">
                                        <p className="font-medium text-slate-900 leading-snug">{flag.sign}</p>
                                        <p className="text-slate-600 mt-0.5 leading-snug">{flag.action}</p>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  condition.redFlags?.map((flag, index) => (
                                    <div key={index} className="flex items-start gap-2 text-sm">
                                      <div className="mt-[7px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                      <span className="text-slate-800 flex-1 leading-snug">{flag}</span>
                                    </div>
                                  ))
                                )}
                              </div>
                            </aside>
                          )}

                        <div className="space-y-8">
                          {condition.clinicalPresentation && (
                            <div id="clinical-presentation-section" data-section="clinical-presentation" className="bg-white rounded-xl p-10 md:p-12 border border-slate-200 shadow-sm scroll-mt-28">
                                <SectionHeading
                                  id="clinical-presentation"
                                  kicker="Symptoms"
                                  className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900 mb-10"
                                >
                                  Clinical Presentation
                                </SectionHeading>

                                {condition.clinicalPresentation.primarySymptoms && (
                                  <div className="mb-10">
                                    <h3 className="text-xl font-semibold leading-tight text-slate-900 mb-6">Primary Symptoms</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      {condition.clinicalPresentation.primarySymptoms.map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-100">
                                          <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                          <span className="text-base md:text-lg text-slate-700 leading-relaxed">{symptom}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {condition.clinicalPresentation.associatedSymptoms && (
                                  <div className="mb-10">
                                    <h3 className="text-xl font-semibold leading-tight text-slate-900 mb-6">Associated Symptoms</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                      {condition.clinicalPresentation.associatedSymptoms.map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-200">
                                          <div className="mt-1.5 h-1.5 w-1.5 bg-[#B08D57] rounded-full flex-shrink-0" />
                                          <span className="text-sm md:text-base text-slate-700 leading-relaxed">{symptom}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {condition.clinicalPresentation.typicalPattern && (
                                  <div className="relative p-8 md:p-10 bg-gradient-to-br from-[#B08D57]/8 via-[#B08D57]/5 to-transparent rounded-2xl border border-[#B08D57]/20 shadow-md overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B08D57]/5 rounded-full blur-3xl"></div>
                                    <div className="relative">
                                      <h3 className="text-xl font-semibold leading-tight text-slate-900 mb-5">Typical Pattern</h3>
                                      <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">{condition.clinicalPresentation.typicalPattern}</p>
                                    </div>
                                  </div>
                                )}
                            </div>
                          )}

                          {hasPatternMatcher && patternCluster && patternConditions && (
                            <div id="pattern-matcher-section" data-section="pattern-matcher" className="scroll-mt-28">
                              <PatternMatcher
                                currentSlug={conditionSlug}
                                cluster={patternCluster}
                                conditionsBySlug={patternConditions}
                              />
                            </div>
                          )}

                          {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                            <div id="differential-section" data-section="differential" className="bg-white rounded-xl p-10 md:p-12 border border-slate-200 shadow-sm scroll-mt-28">
                              <SectionHeading
                                id="differential-diagnosis"
                                kicker="Symptoms"
                                className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900 mb-3"
                              >
                                Differential Diagnosis
                              </SectionHeading>
                              <p className="text-base text-slate-600 leading-relaxed mb-10">Conditions with similar presentations:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {condition.differentialDiagnosis.map((diff, index) => (
                                  <div key={index} className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                    <div className="mb-3 flex items-center gap-2.5">
                                      <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                                      <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">{diff.condition}</p>
                                    </div>
                                    <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[58ch]">
                                      <span className="font-semibold text-slate-900">Key differences:</span> {diff.distinguishingFeatures}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                            <div id="when-to-seek-section" data-section="when-to-seek" className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 border-l-4 border-l-amber-500 shadow-sm scroll-mt-28">
                              <div className="mb-4 flex items-center gap-2.5">
                                <ExclamationTriangleIcon className="h-4 w-4 text-amber-600" aria-hidden="true" />
                                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">When to seek professional help</p>
                              </div>
                              <div className="space-y-3">
                                {condition.whenToSeek.map((item, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <span className="text-base text-slate-700 leading-relaxed max-w-[72ch]">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        </>
                      )}

                      {/* Research Tab - all sub-sections stacked */}
                      {activeTab === 'research' && (
                        <div className="space-y-8">
                          {condition.keyResearch && condition.keyResearch.length > 0 && (
                            <div id="key-research" data-section="key-research" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Research</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Key Research &amp; Evidence</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Peer-reviewed studies supporting the treatment approach.</p>
                                </div>

                                <div className="p-8">
                                  <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                    {condition.keyResearch.map((research, index) => {
                                      // Unified editorial card: white, gold left rule, numeric kicker.
                                      // No chromatic differentiation between research items.
                                      const isNewFormat = research.finding && research.detail && research.clinicalRelevance;
                                      const indexLabel = String(index + 1).padStart(2, '0');

                                      return (
                                        <div key={index} className="relative bg-white rounded-xl p-6 md:p-7 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm break-inside-avoid mb-6">
                                          <div className="mb-4 flex items-center gap-2.5">
                                            <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">{indexLabel}</span>
                                            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                                              {isNewFormat ? 'Finding' : (research.authors ? `${research.authors}${research.year ? ` · ${research.year}` : ''}` : 'Study')}
                                            </p>
                                          </div>

                                          {isNewFormat ? (
                                            <>
                                              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-4 leading-snug max-w-[58ch]">
                                                {research.finding}
                                              </h3>

                                              <div className="mb-4">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1.5">Research details</p>
                                                <p className="text-slate-700 text-sm leading-relaxed max-w-[58ch]">{research.detail}</p>
                                              </div>

                                              <div className="pt-4 border-t border-slate-100">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1.5">Clinical relevance</p>
                                                <p className="text-slate-700 text-sm leading-relaxed max-w-[58ch]">{research.clinicalRelevance}</p>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              {research.title && (
                                                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3 leading-snug max-w-[58ch]">
                                                  {research.title}
                                                </h3>
                                              )}

                                              {research.journal && (
                                                <p className="text-sm text-slate-600 italic mb-4">
                                                  {research.journal}
                                                  {research.sampleSize && ` · n=${research.sampleSize}`}
                                                </p>
                                              )}

                                              {research.findings && (
                                                <div className="mb-4">
                                                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1.5">Key findings</p>
                                                  <p className="text-slate-700 text-sm leading-relaxed max-w-[58ch]">{research.findings}</p>
                                                </div>
                                              )}

                                              {research.relevance && (
                                                <div className="pt-4 border-t border-slate-100">
                                                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-1.5">Clinical relevance</p>
                                                  <p className="text-slate-700 text-sm leading-relaxed max-w-[58ch]">{research.relevance}</p>
                                                </div>
                                              )}

                                              {research.citation && (
                                                <p className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono leading-relaxed">
                                                  {research.citation}
                                                </p>
                                              )}
                                            </>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  
                                  {condition.keyResearch.length < 3 && (
                                    <div className="mt-6 p-4 bg-amber-50/70 backdrop-blur rounded-xl border border-amber-200">
                                      <div className="flex items-start gap-3">
                                        <ExclamationCircleIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <p className="text-sm font-medium text-amber-900 mb-1">Research Database Expanding</p>
                                          <p className="text-sm text-amber-800">
                                            Additional peer-reviewed studies are being reviewed and will be added to strengthen the evidence base for this condition.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Evidence Quality Disclaimer */}
                                  <div className="mt-6 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span className="font-medium">Evidence Quality:</span>
                                      <span>Studies selected based on methodological rigor and clinical applicability</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            )}

                          {condition.researchInsights && condition.researchInsights.length > 0 && (
                            <div id="research-insights" data-section="research-insights" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-28">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Research</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Research Insights</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Clinical implications and practice recommendations.</p>
                                </div>

                                      <div className="p-8">
                                  <div className="space-y-4">
                                    {condition.researchInsights.map((insight, index) => {
                                      const colonIndex = insight.indexOf(':');
                                      const topic = colonIndex > -1 ? insight.substring(0, colonIndex).trim() : '';
                                      const finding = colonIndex > -1 ? insight.substring(colonIndex + 1).trim() : insight;

                                      return (
                                        <div key={index} className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                          {topic ? (
                                            <>
                                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">{topic}</p>
                                              <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{finding}</p>
                                            </>
                                          ) : (
                                            <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{finding}</p>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  
                                  <div className="mt-6 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span className="font-medium">Evidence Base:</span>
                                      <span>Based on current physiotherapy research and clinical practice guidelines</span>
                                    </div>
                                  </div>
                                      </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Management Tab */}
                      {activeTab === 'self-care' && (
                        <div className="space-y-8">
                          {(condition.evidenceSnapshot || condition.selfManagement) && (
                            <div id="evidence-based-management" data-section="evidence-based" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Evidence-Based Management</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Treatment strategies with the strongest support in the current literature.</p>
                                </div>
                                
                                      <div className="p-8">
                                  <div className="space-y-8">
                                    {/* Evidence Snapshot Cards - unified editorial pattern:
                                        white card, gold left rule, numeric kicker, uniform type.
                                        Differentiation comes from the label and number, not color. */}
                                    {condition.evidenceSnapshot && (
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {(condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine) && (
                                          <div className="relative bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-7 h-full flex flex-col">
                                            <div className="mb-4 flex items-center gap-2.5">
                                              <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">01</span>
                                              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                                                Primary approach
                                              </p>
                                            </div>
                                            <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[58ch]">
                                              {condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine}
                                            </p>
                                          </div>
                                        )}

                                        {(condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging) && (
                                          <div className="relative bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-7 h-full flex flex-col">
                                            <div className="mb-4 flex items-center gap-2.5">
                                              <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">02</span>
                                              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                                                Complementary
                                              </p>
                                            </div>
                                            <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[58ch]">
                                              {condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging}
                                            </p>
                                          </div>
                                        )}

                                        {(condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management) && (
                                          <div className="relative bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-7 h-full flex flex-col">
                                            <div className="mb-4 flex items-center gap-2.5">
                                              <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">03</span>
                                              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                                                Prevention &amp; long-term
                                              </p>
                                            </div>
                                            <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[58ch]">
                                              {condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    
                                    {/* Self-Management Strategies - 2 COLUMN GRID */}
                                    {condition.selfManagement && condition.selfManagement.length > 0 && (
                                      <div className="space-y-6">
                                        {condition.evidenceSnapshot && (
                                          <div className="flex items-center gap-3 mt-8 mb-6">
                                            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
                                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Detailed Management Strategies</span>
                                            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
                                          </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {condition.selfManagement.map((strategy, index) => {
                                          const indexLabel = String(index + 1).padStart(2, '0');
                                          return (
                                            <div key={index} className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                              <div className="mb-3 flex items-center gap-2.5">
                                                <span aria-hidden="true" className="text-sm font-semibold text-[#B08D57] tabular-nums">{indexLabel}</span>
                                                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">{strategy.strategy}</p>
                                              </div>
                                              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 max-w-[58ch]">
                                                {strategy.rationale}
                                              </p>
                                              {strategy.precautions && strategy.precautions.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-slate-100">
                                                  <div className="flex items-start gap-2">
                                                    <ExclamationCircleIcon className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                                    <div className="flex-1">
                                                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 mb-1.5">Important precautions</p>
                                                      <ul className="text-xs text-slate-600 space-y-1.5">
                                                        {strategy.precautions.map((precaution, pIndex) => (
                                                          <li key={pIndex} className="flex items-start gap-2">
                                                            <span aria-hidden="true" className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-amber-500" />
                                                            <span className="leading-relaxed">{precaution}</span>
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                              {strategy.strategy.toLowerCase().includes('nutrition') && (
                                                <p className="text-xs text-slate-500 mt-3 italic flex items-center gap-1">
                                                  <InformationCircleIcon className="h-3 w-3" aria-hidden="true" />
                                                  Nutritional advice is general guidance. Consult a registered dietitian for personalized plans.
                                                </p>
                                              )}
                                            </div>
                                          );
                                        })}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Sources Footer */}
                                    {condition.evidenceSnapshot?.sources && (
                                      <div className="mt-8 pt-6 border-t border-slate-200">
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                          </svg>
                                          <span className="font-medium">Evidence Base:</span>
                                          <span>{condition.evidenceSnapshot.sources}</span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                      </div>
                              </div>
                            </div>
                          )}

                            {/* Treatment Techniques Section */}
                            {(condition.treatmentApproach || relatedTreatments.length > 0) && (
                            <div id="treatment-techniques" data-section="treatment-techniques" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Treatment Techniques</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Evidence-based manual therapy and intervention approaches.</p>
                                </div>

                                      <div className="p-8">
                                        {condition.treatmentApproach && (
                                          <>
                                            <p className="text-base text-slate-700 leading-relaxed max-w-[72ch] mb-6">
                                              {condition.treatmentApproach.description}
                                            </p>
                                            <div className="space-y-3">
                                              {condition.treatmentApproach.techniques.map((technique, index) => {
                                                const [title, description] = technique.split(': ');
                                                return (
                                                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                                                    <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" aria-hidden="true" />
                                                    <div>
                                                      <span className="font-semibold text-slate-900">{title}</span>
                                                      {description && <span className="text-slate-700 leading-relaxed">: {description}</span>}
                                                    </div>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </>
                                        )}

                                        {/* Recommended Treatments - Inside Treatment Techniques */}
                                        {relatedTreatments.length > 0 && (
                                          <div className="mt-8 pt-8 border-t border-slate-200">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Recommended treatment approaches</p>
                                            <p className="text-sm text-slate-600 mb-5 max-w-[68ch]">Treatment approaches are individualized to each patient's needs and goals. All interventions require explicit informed consent, and treatment plans are collaboratively modified based on your preferences and response to care.</p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                              {relatedTreatments.map((treatment) => (
                                                <Link key={treatment.id} href={`/treatments/${treatment.id}`} className="group">
                                                  <div className="relative bg-white rounded-lg p-5 border border-slate-200 hover:border-[#B08D57] hover:shadow-md transition-[border-color,box-shadow] duration-200 cursor-pointer h-full flex flex-col">
                                                    <h4 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                                                      {treatment.name}
                                                    </h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-3">
                                                      {treatment.shortDescription}
                                                    </p>
                                                    <div className="inline-flex items-center text-[#B08D57] font-medium text-sm">
                                                      <span>Explore {treatment.name}</span>
                                                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                                    </div>
                                                  </div>
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                              </div>
                            </div>
                          )}

                            {/* Recovery Timeline Section */}
                            {condition.timeline && condition.timeline.length > 0 && (
                            <div id="recovery-timeline" data-section="timeline" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Recovery Timeline</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Phases and milestones typical of the recovery arc.</p>
                                </div>
                                
                                      <div className="p-8">
                                        <div className="relative">
                                          {condition.timeline.map((phase, index) => (
                                            <div key={index} className="flex gap-4 mb-6 last:mb-0">
                                              <div className="flex flex-col items-center">
                                                <div className="w-3 h-3 bg-teal-600 rounded-full" />
                                                {index < condition.timeline!.length - 1 && (
                                                  <div className="w-0.5 h-full bg-teal-600/30 mt-2" />
                                                )}
                                              </div>
                                              <div className="flex-1 pb-6">
                                                <div className="flex items-center gap-3 mb-2">
                                                  <h3 className="text-xl font-medium leading-tight text-slate-900">{phase.phase}</h3>
                                                  <span className="text-sm text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                                                    {phase.duration}
                                                  </span>
                                                </div>
                                                <p className="text-base text-slate-700 leading-relaxed">{phase.description}</p>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                              </div>
                            </div>
                          )}

                            {condition.prognosis && (
                            <div id="prognosis" data-section="prognosis" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Prognosis &amp; Recovery</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">What outcomes and recovery factors typically look like.</p>
                                </div>
                                
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    {/* Timeline Card */}
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Expected timeline</p>
                                      <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{condition.prognosis.timeline}</p>
                                    </div>

                                    {/* Natural History Card */}
                                    {condition.prognosis.naturalHistory && (
                                      <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Natural history</p>
                                        <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{condition.prognosis.naturalHistory}</p>
                                      </div>
                                    )}

                                    {/* Recovery Factors */}
                                    {condition.prognosis.factors && condition.prognosis.factors.length > 0 && (
                                      <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-3">Factors affecting recovery</p>
                                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                                          {condition.prognosis.factors.map((factor, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                              <CheckCircleIcon className="h-4 w-4 text-[#B08D57] mt-0.5 flex-shrink-0" aria-hidden="true" />
                                              <span className="text-sm text-slate-700 leading-relaxed">{factor}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                      </div>
                              </div>
                            </div>
                          )}

                            {/* Measuring Progress Section */}
                            {condition.measuringProgress && (
                            <div id="measuring-progress" data-section="measuring" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Measuring Progress</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">How to track the recovery arc week to week.</p>
                                </div>
                                
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Day-to-day tracking</p>
                                      <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{condition.measuringProgress.dayToDay}</p>
                                    </div>

                                    {condition.measuringProgress.questionnaires && (
                                      <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Assessment tools</p>
                                        <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]" dangerouslySetInnerHTML={{
                                          __html: condition.measuringProgress.questionnaires
                                            .replace(/\b(DASH)\b/g, '<a href="https://www.physio-pedia.com/DASH_Outcome_Measure" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(SPADI)\b/g, '<a href="https://www.physiotutors.com/questionnaires/shoulder-pain-disability-index-spadi/" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(ODI|Oswestry Disability Index)\b/g, '<a href="https://www.physio-pedia.com/Oswestry_Disability_Index" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(NPRS|Numeric Pain Rating Scale)\b/g, '<a href="https://www.physio-pedia.com/Numeric_Pain_Rating_Scale" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(VAS|Visual Analogue Scale)\b/g, '<a href="https://www.physio-pedia.com/Visual_Analogue_Scale" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(Roland-Morris)\b/g, '<a href="https://www.physio-pedia.com/Roland_Morris_Disability_Questionnaire" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(KOOS)\b/g, '<a href="https://www.physio-pedia.com/Knee_injury_and_Osteoarthritis_Outcome_Score" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(WOMAC)\b/g, '<a href="https://www.physio-pedia.com/Western_Ontario_and_McMaster_Universities_Osteoarthritis_Index_(WOMAC)" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(LEFS|Lower Extremity Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Lower_Extremity_Functional_Scale" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                            .replace(/\b(PSFS|Patient Specific Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Patient_Specific_Functional_Scale" target="_blank" rel="noopener noreferrer" class="text-[#B08D57] underline hover:text-[#997A4B] font-medium">$1</a>')
                                        }} />
                                      </div>
                                    )}

                                    <div className="relative bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm">
                                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-2">Activity targets</p>
                                      <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">{condition.measuringProgress.activityTarget}</p>
                                    </div>
                                  </div>
                                      </div>
                              </div>
                            </div>
                          )}

                            {condition.faqs && condition.faqs.length > 0 && (
                            <div id="faqs" data-section="faqs" className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40">
                              <div className="relative">
                                <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                                  <div className="mb-3 flex items-center gap-2.5">
                                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Management</p>
                                  </div>
                                  <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">Frequently Asked Questions</h2>
                                  <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">Common concerns and answers about this condition.</p>
                                </div>
                                
                                      <div className="p-8">
                                  <div className="space-y-3">
                                    {condition.faqs.map((faq, index) => {
                                      const qLabel = `Q${String(index + 1).padStart(2, '0')}`;
                                      return (
                                        <details key={index} className="group relative bg-white rounded-xl border border-slate-200 open:border-l-4 open:border-l-[#B08D57] shadow-sm transition-[border-width,border-color] duration-200">
                                          <summary className="flex gap-4 cursor-pointer list-none items-start p-6">
                                            <span aria-hidden="true" className="flex-shrink-0 text-sm font-semibold text-[#B08D57] tabular-nums pt-0.5">
                                              {qLabel}
                                            </span>
                                            <div className="flex-1">
                                              <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug group-open:text-[#8c6d3d] transition-colors">
                                                {faq.question}
                                              </h3>
                                            </div>
                                            <ChevronDownIcon
                                              aria-hidden="true"
                                              className="flex-shrink-0 h-5 w-5 text-slate-400 mt-1 group-hover:text-slate-600 group-open:text-[#B08D57] transition-transform duration-200 group-open:rotate-180"
                                            />
                                          </summary>
                                          <div className="px-6 pb-6">
                                            <div className="ml-10 border-t border-slate-100 pt-4">
                                              <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[72ch]">
                                                {faq.answer}
                                              </p>
                                            </div>
                                          </div>
                                        </details>
                                      );
                                    })}
                                  </div>
                                      </div>
                              </div>
                            </div>
                          )}

                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  )}
                </main>

                {/* Related Conditions - inline below content, now with
                    relationship badges and one-line explanations from the
                    intelligentRelationships data map. */}
                <RelatedConditionsList
                  currentSlug={conditionSlug}
                  relatedConditions={relatedConditions}
                  limit={6}
                />

                {/* Cross-links to any "X vs. Y" comparison pages that feature
                    this condition. Renders nothing when no comparison exists. */}
                <ComparisonCrossLinks
                  conditionSlug={conditionSlug}
                  currentConditionName={condition.name}
                />

                {/* Consent + alternatives note. Communicates that every part of an
                    assessment happens with informed consent and alternative
                    approaches are always available. Mounted once per condition page. */}
                <ConsentNote />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Bottom CTA Section */}
        <section 
          className="mt-8 py-12 bg-slate-900" 
          style={{ 
            backgroundColor: '#0f172a',
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'white' }}>
                Get Expert Treatment
              </h2>
              <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Professional physiotherapy for {condition.name.toLowerCase()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white hover:text-white rounded-lg font-medium transition-colors duration-200 shadow-premium-1 hover:shadow-premium-2 group"
                >
                  Book Assessment
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setMobileNavOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close navigation"
                >
                  <XMarkIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Navigation Content - full page ToC. All tabs listed, and the
                  active tab's sub-sections are expanded beneath it so users
                  can jump to any part of the condition page from anywhere. */}
              <div className="p-6 space-y-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <div key={tab.id}>
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                          setMobileNavOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-slate-50 text-slate-900 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{tab.label}</span>
                      </button>
                      {isActive && subSectionChips.length > 1 && (
                        <div className="mt-1 ml-5 pl-3 border-l-2 border-l-[#B08D57]/25 space-y-1">
                          {subSectionChips.map((chip) => (
                            <button
                              key={chip.id}
                              onClick={() => {
                                chip.onSelect();
                                setMobileNavOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                                chip.isActive
                                  ? 'text-slate-900 font-semibold'
                                  : 'text-slate-500 hover:text-slate-900'
                              }`}
                            >
                              {chip.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Navigation Bar - Mobile Only - Compact */}
      <div role="tablist" aria-label="Condition page sections" className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-40 pb-safe">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="condition-tabpanel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToContentTop();
                }}
                className={`flex flex-col items-center justify-center gap-0.5 px-2 py-2 rounded-lg transition-all duration-200 min-w-[60px] min-h-[48px] ${
                  isActive
                    ? 'bg-[#B08D57]/15 text-[#8c6d3d] shadow-sm'
                    : 'text-gray-600 hover:text-slate-700'
                }`}
              >
                <tab.icon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[11px] font-medium leading-tight">{tab.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open section navigation"
            aria-expanded={mobileNavOpen}
            className={`flex flex-col items-center justify-center gap-0.5 px-2 py-2 rounded-lg transition-colors duration-200 min-w-[60px] min-h-[48px] ${
              mobileNavOpen ? 'bg-[#B08D57]/15 text-[#8c6d3d]' : 'text-gray-600 hover:text-slate-700'
            }`}
          >
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-medium leading-tight">Sections</span>
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
