"use client";

// PREMIUM REDESIGN 2025 - SPLIT-PANEL NAVIGATION SYSTEM

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  SparklesIcon,
  ChartBarIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  ExclamationCircleIcon,
  MagnifyingGlassIcon,
  FireIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';

interface ConditionPageClientProps {
  condition: Condition;
  relatedConditions: Condition[];
}

// Navigation section interface
interface NavSection {
  id: string;
  label: string;
  icon: React.ElementType;
  subsections?: { id: string; label: string }[];
}

export default function ConditionPageClient({
  condition,
  relatedConditions
}: ConditionPageClientProps) {
  // State management
  const [activeSection, setActiveSection] = useState('pathophysiology');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for scroll tracking
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Management tab collapsible sections
  const [expandedManagementSections, setExpandedManagementSections] = useState<{ [key: string]: boolean }>({
    'evidence-based': true,
    'treatment-techniques': false,
    'timeline': false,
    'prognosis': false,
    'measuring': false,
    'faqs': false
  });

  const toggleManagementSection = (section: string) => {
    setExpandedManagementSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Research tab collapsible sections
  const [expandedResearchSections, setExpandedResearchSections] = useState<{ [key: string]: boolean }>({
    'key-research': true,
    'research-insights': false
  });

  const toggleResearchSection = (section: string) => {
    setExpandedResearchSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

  // Build navigation sections dynamically based on available content
  const navigationSections: NavSection[] = [];

  if (condition.pathophysiology || condition.biomechanics || condition.understanding) {
    const subsections = [];
    if (condition.pathophysiology) subsections.push({ id: 'pathophysiology', label: 'Pathophysiology' });
    if (condition.biomechanics) subsections.push({ id: 'biomechanics', label: 'Contributing Factors' });
    if (condition.understanding) subsections.push({ id: 'understanding', label: 'Understanding' });

    navigationSections.push({
      id: 'science',
      label: 'Science',
      icon: BeakerIcon,
      subsections
    });
  }

  if (condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek) {
    const subsections = [];
    if (condition.clinicalPresentation) subsections.push({ id: 'symptoms', label: 'Symptoms' });
    if (condition.differentialDiagnosis) subsections.push({ id: 'differential', label: 'Differential Diagnosis' });
    if (condition.whenToSeek) subsections.push({ id: 'when-to-seek', label: 'When to Seek Help' });

    navigationSections.push({
      id: 'clinical',
      label: 'Clinical',
      icon: DocumentTextIcon,
      subsections
    });
  }

  if (condition.evidenceSnapshot || condition.selfManagement || condition.treatmentApproach || condition.timeline || condition.prognosis) {
    const subsections = [];
    if (condition.evidenceSnapshot || condition.selfManagement) subsections.push({ id: 'evidence-based', label: 'Evidence-Based Management' });
    if (condition.treatmentApproach) subsections.push({ id: 'treatment-techniques', label: 'Treatment Techniques' });
    if (condition.timeline) subsections.push({ id: 'timeline', label: 'Recovery Timeline' });
    if (condition.prognosis) subsections.push({ id: 'prognosis', label: 'Prognosis' });
    if (condition.measuringProgress) subsections.push({ id: 'measuring', label: 'Measuring Progress' });
    if (condition.faqs) subsections.push({ id: 'faqs', label: 'FAQs' });

    navigationSections.push({
      id: 'management',
      label: 'Management',
      icon: HeartIcon,
      subsections
    });
  }

  if (condition.keyResearch || condition.researchInsights) {
    const subsections = [];
    if (condition.keyResearch) subsections.push({ id: 'key-research', label: 'Key Research' });
    if (condition.researchInsights) subsections.push({ id: 'research-insights', label: 'Research Insights' });

    navigationSections.push({
      id: 'research',
      label: 'Research',
      icon: ChartBarIcon,
      subsections
    });
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileNavOpen(false);
    }
  };

  // Track scroll position for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Find active section
      const scrollPosition = window.scrollY + 150;

      for (const section of navigationSections) {
        if (section.subsections) {
          for (const subsection of section.subsections) {
            const element = sectionRefs.current[subsection.id];
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(subsection.id);
                return;
              }
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationSections]);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.name,
    "description": condition.overview || condition.description,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Physiotherapy",
      "description": condition.treatmentApproach?.description
    },
    "signOrSymptom": condition.clinicalRedFlags?.map(flag => ({
      "@type": "MedicalSymptom",
      "name": flag.sign || flag
    }))
  };

  // Filter sections by search query
  const filteredSections = navigationSections.map(section => ({
    ...section,
    subsections: section.subsections?.filter(sub =>
      sub.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (section.subsections && section.subsections.length > 0)
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Screen-reader-only H1 for SEO */}
        <h1 className="sr-only">
          {condition.name} Treatment Burlington | Kareem Hassanein Physiotherapy | Waterdown Oakville Physiotherapist
        </h1>

        {/* Progress bar at top */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Minimal Hero with Breadcrumbs */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-100 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
              <Link href="/" className="hover:text-[#B08D57] transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <ChevronRightIcon className="h-3 w-3" />
              <Link href="/conditions" className="hover:text-[#B08D57] transition-all duration-300 hover:scale-105">
                Conditions
              </Link>
              <ChevronRightIcon className="h-3 w-3" />
              <span className="text-slate-900 font-medium">{condition.name}</span>
            </nav>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-slate-900 mb-2">
                  {condition.name}
                </h2>
                {condition.description && (
                  <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
                    {condition.description}
                  </p>
                )}
              </div>

              {/* Mobile nav toggle */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden ml-4 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Toggle navigation"
              >
                {mobileNavOpen ? (
                  <XMarkIcon className="h-6 w-6 text-slate-700" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-slate-700" />
                )}
              </button>
            </div>

            {/* Red Flags Disclaimer */}
            {((condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0) ||
              (condition.redFlags && condition.redFlags.length > 0)) && (
              <details className="group mt-4">
                <summary className="flex items-center gap-2 cursor-pointer list-none text-sm text-red-700 hover:text-red-800 transition-colors">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <span className="underline font-medium">When to seek immediate medical attention</span>
                  <ChevronDownIcon className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="grid md:grid-cols-2 gap-3">
                    {condition.clinicalRedFlags ? (
                      condition.clinicalRedFlags.map((flag, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-sm">
                          <div className="mt-1 h-2 w-2 bg-red-500 rounded-full flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-red-900 leading-snug">{flag.sign}</p>
                            <p className="text-red-700 mt-0.5 leading-snug">{flag.action}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      condition.redFlags?.map((flag, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-sm">
                          <div className="mt-1 h-2 w-2 bg-red-500 rounded-full flex-shrink-0" />
                          <span className="text-red-800 flex-1 leading-snug">{flag}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </details>
            )}
          </div>
        </section>

        {/* Main Split-Panel Layout */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="flex gap-8">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
                {/* Search */}
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Navigation */}
                <nav className="bg-white rounded-2xl border border-slate-200 p-4 shadow-lg">
                  <div className="space-y-1">
                    {filteredSections.map((section) => (
                      <div key={section.id}>
                        {/* Section header */}
                        <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          <section.icon className="h-4 w-4" />
                          {section.label}
                        </div>

                        {/* Subsections */}
                        {section.subsections?.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => scrollToSection(subsection.id)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                              activeSection === subsection.id
                                ? 'bg-[#B08D57]/10 text-[#B08D57] border-l-4 border-[#B08D57]'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent hover:border-slate-200'
                            }`}
                          >
                            <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                              {subsection.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Progress indicator */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Reading Progress</span>
                    <span className="text-sm font-bold text-[#B08D57]">{Math.round(scrollProgress)}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] transition-all duration-300 rounded-full"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
              {mobileNavOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileNavOpen(false)}
                    className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40"
                  />

                  {/* Drawer */}
                  <motion.div
                    initial={{ x: -320 }}
                    animate={{ x: 0 }}
                    exit={{ x: -320 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
                  >
                    <div className="p-6">
                      {/* Close button */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-slate-900">Navigation</h3>
                        <button
                          onClick={() => setMobileNavOpen(false)}
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <XMarkIcon className="h-5 w-5 text-slate-600" />
                        </button>
                      </div>

                      {/* Search */}
                      <div className="relative mb-6">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search sections..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
                        />
                      </div>

                      {/* Navigation */}
                      <nav className="space-y-1">
                        {filteredSections.map((section) => (
                          <div key={section.id}>
                            <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              <section.icon className="h-4 w-4" />
                              {section.label}
                            </div>

                            {section.subsections?.map((subsection) => (
                              <button
                                key={subsection.id}
                                onClick={() => scrollToSection(subsection.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  activeSection === subsection.id
                                    ? 'bg-[#B08D57]/10 text-[#B08D57] border-l-4 border-[#B08D57]'
                                    : 'text-slate-700 hover:bg-slate-50 border-l-4 border-transparent'
                                }`}
                              >
                                {subsection.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </nav>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main ref={contentRef} className="flex-1 min-w-0">
              {!hasDetailedContent ? (
                // Coming Soon Message
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-12 border border-slate-200 shadow-lg text-center"
                >
                  <ClockIcon className="h-20 w-20 text-slate-300 mx-auto mb-6" />
                  <h2 className="text-3xl font-medium text-slate-900 mb-4">
                    Content Coming Soon
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Detailed information about {condition.name} is currently being developed.
                  </p>

                  {relatedConditions && relatedConditions.length > 0 && (
                    <div className="mb-8">
                      <p className="text-slate-700 font-medium mb-4">
                        Check out these related conditions:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                        {relatedConditions.slice(0, 4).map((related) => (
                          <Link
                            key={related.slug}
                            href={`/conditions/${related.slug}`}
                            className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-3 rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-sm"
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
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <CalendarIcon className="h-5 w-5" />
                    Book Consultation
                  </Link>
                </motion.div>
              ) : (
                // Main content sections
                <div className="space-y-6">
                  {/* 1. PATHOPHYSIOLOGY */}
                  {condition.pathophysiology && (
                    <div ref={(el) => { sectionRefs.current['pathophysiology'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        The Science of {condition.name || 'Your Condition'}
                      </h2>
                      <p className="text-base text-slate-700 leading-relaxed">
                        {condition.pathophysiology}
                      </p>
                    </div>
                  )}

                  {/* 2. BIOMECHANICS */}
                  {condition.biomechanics && (
                    <div ref={(el) => { sectionRefs.current['biomechanics'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h3 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        Contributing Factors
                      </h3>
                      <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
                        {condition.biomechanics}
                      </p>
                    </div>
                  )}

                  {/* 3. UNDERSTANDING SECTION (fallback if no pathophysiology) */}
                  {!condition.pathophysiology && condition.understanding && (
                    <div ref={(el) => { sectionRefs.current['understanding'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        Understanding {condition.name}
                      </h2>
                      <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
                        {condition.understanding}
                      </p>
                    </div>
                  )}

                  {/* 4. CLINICAL PRESENTATION */}
                  {condition.clinicalPresentation && (
                    <div ref={(el) => { sectionRefs.current['symptoms'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        Symptoms and Presentation
                      </h2>

                      {condition.clinicalPresentation.primarySymptoms && condition.clinicalPresentation.primarySymptoms.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-base font-medium text-slate-900 mb-4">Primary Symptoms</h3>
                          <div className="grid gap-3">
                            {condition.clinicalPresentation.primarySymptoms.map((symptom, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <CheckCircleIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 leading-relaxed">{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {condition.clinicalPresentation.associatedSymptoms && condition.clinicalPresentation.associatedSymptoms.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-base font-medium text-slate-900 mb-4">Associated Symptoms</h3>
                          <div className="grid gap-3">
                            {condition.clinicalPresentation.associatedSymptoms.map((symptom, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <InformationCircleIcon className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 leading-relaxed">{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {condition.clinicalPresentation.typicalPattern && (
                        <div>
                          <h3 className="text-base font-medium text-slate-900 mb-4">Typical Pattern</h3>
                          <p className="text-sm text-slate-700 leading-relaxed p-4 bg-slate-50 rounded-lg border border-slate-200">
                            {condition.clinicalPresentation.typicalPattern}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 5. DIFFERENTIAL DIAGNOSIS */}
                  {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                    <div ref={(el) => { sectionRefs.current['differential'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        Differential Diagnosis
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {condition.differentialDiagnosis.map((diff: any, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                              <span className="text-sm font-semibold text-[#B08D57]">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              {typeof diff === 'string' ? (
                                <span className="text-sm text-slate-700 leading-relaxed">{diff}</span>
                              ) : (
                                <>
                                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{diff.condition}</h3>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    <span className="font-medium">Key differences:</span> {diff.distinguishingFeatures}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 6. WHEN TO SEEK HELP */}
                  {condition.whenToSeek && (
                    <div ref={(el) => { sectionRefs.current['when-to-seek'] = el; }} className="bg-amber-50 border border-amber-200 rounded-xl p-8 md:p-8">
                      <div className="flex items-start gap-3 mb-4">
                        <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-amber-900">
                          When to Seek Professional Help
                        </h2>
                      </div>
                      {typeof condition.whenToSeek === 'string' ? (
                        <p className="text-base text-amber-900 leading-relaxed whitespace-pre-line">
                          {condition.whenToSeek}
                        </p>
                      ) : (
                        <div className="space-y-3">
                          {condition.whenToSeek.map((item: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircleIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span className="text-base text-amber-900 leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 7. KEY RESEARCH */}
                  {condition.keyResearch && condition.keyResearch.length > 0 && (
                    <div ref={(el) => { sectionRefs.current['key-research'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleResearchSection('key-research')}
                        className="w-full flex items-center justify-between p-8 hover:bg-slate-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <AcademicCapIcon className="h-6 w-6 text-[#B08D57]" />
                          <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                            Key Research
                          </h2>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedResearchSections['key-research'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                        </motion.div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedResearchSections['key-research'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              {/* Check if NEW FORMAT (with finding, detail, clinicalRelevance) */}
                              {condition.keyResearch[0] && 'finding' in condition.keyResearch[0] ? (
                                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                  {condition.keyResearch.map((research: any, index: number) => (
                                    <div
                                      key={index}
                                      className="break-inside-avoid bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
                                    >
                                      <div className="flex items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                                          <span className="text-sm font-bold text-[#B08D57]">{index + 1}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-slate-900 leading-snug flex-1">
                                          {research.finding}
                                        </p>
                                      </div>

                                      <p className="text-xs text-slate-600 leading-relaxed mb-3 pl-11">
                                        {research.detail}
                                      </p>

                                      <div className="pl-11 pt-3 border-t border-slate-200">
                                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                                          Clinical Relevance
                                        </p>
                                        <p className="text-xs text-slate-700 leading-relaxed">
                                          {research.clinicalRelevance}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                // OLD FORMAT (title, authors, year)
                                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                  {condition.keyResearch.map((research: any, index: number) => (
                                    <div
                                      key={index}
                                      className="break-inside-avoid bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
                                    >
                                      <div className="flex items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                                          <span className="text-sm font-bold text-[#B08D57]">{index + 1}</span>
                                        </div>
                                        <div className="flex-1">
                                          <p className="text-sm font-semibold text-slate-900 leading-snug mb-1">
                                            {research.title}
                                          </p>
                                          <p className="text-xs text-slate-600 leading-relaxed">
                                            {research.authors} ({research.year})
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 8. RESEARCH INSIGHTS */}
                  {condition.researchInsights && (
                    <div ref={(el) => { sectionRefs.current['research-insights'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleResearchSection('research-insights')}
                        className="w-full flex items-center justify-between p-8 hover:bg-slate-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <SparklesIcon className="h-6 w-6 text-[#B08D57]" />
                          <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                            Research Insights
                          </h2>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedResearchSections['research-insights'] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                        </motion.div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedResearchSections['research-insights'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <div className="space-y-6">
                                {condition.researchInsights.insights?.map((insight: any, index: number) => (
                                  <div
                                    key={index}
                                    className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                                  >
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                                        <span className="text-sm font-bold text-[#B08D57]">{index + 1}</span>
                                      </div>
                                      <h3 className="text-base font-semibold text-slate-900 flex-1 leading-snug">
                                        {insight.finding}
                                      </h3>
                                    </div>

                                    {insight.implications && (
                                      <div className="pl-11">
                                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                                          Clinical Implications
                                        </p>
                                        <ul className="space-y-2">
                                          {insight.implications.map((implication: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                                              <ArrowRightIcon className="h-4 w-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                                              <span>{implication}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}

                                {condition.researchInsights.clinicalRelevance && (
                                  <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200">
                                    <div className="flex items-start gap-3">
                                      <InformationCircleIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                      <div>
                                        <p className="text-xs font-medium text-amber-900 uppercase tracking-wider mb-2">
                                          Clinical Relevance
                                        </p>
                                        <p className="text-sm text-amber-900 leading-relaxed">
                                          {condition.researchInsights.clinicalRelevance}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 9. EVIDENCE SNAPSHOT + SELF-MANAGEMENT (Combined as "Evidence-Based Management") */}
                  {(condition.evidenceSnapshot || condition.selfManagement) && (
                    <div ref={(el) => { sectionRefs.current['evidence-based'] = el; }} className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-8">
                        Evidence-Based Management Strategies
                      </h2>

                      {/* Evidence Snapshot Cards */}
                      {condition.evidenceSnapshot && (
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          {/* Primary Strategy */}
                          {condition.evidenceSnapshot.primaryStrategy && (
                            <div className="group p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-emerald-100">
                                  <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wider">
                                  Primary Strategy
                                </h3>
                              </div>
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {condition.evidenceSnapshot.primaryStrategy}
                              </p>
                            </div>
                          )}

                          {/* Secondary Strategy */}
                          {condition.evidenceSnapshot.secondaryStrategy && (
                            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100">
                                  <SparklesIcon className="h-5 w-5 text-blue-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                                  Secondary Strategy
                                </h3>
                              </div>
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {condition.evidenceSnapshot.secondaryStrategy}
                              </p>
                            </div>
                          )}

                          {/* Prevention Strategy */}
                          {condition.evidenceSnapshot.preventionStrategy && (
                            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-100">
                                  <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-purple-900 uppercase tracking-wider">
                                  Prevention Strategy
                                </h3>
                              </div>
                              <p className="text-sm text-slate-700 leading-relaxed">
                                {condition.evidenceSnapshot.preventionStrategy}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Self-Management */}
                      {condition.selfManagement && condition.selfManagement.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium text-slate-900 mb-4">Self-Management Strategies</h3>
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {condition.selfManagement.map((item: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300"
                              >
                                <CheckCircleIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  {typeof item === 'string' ? (
                                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                                  ) : (
                                    <>
                                      <p className="text-sm font-semibold text-slate-900 mb-1">{item.strategy}</p>
                                      {item.rationale && (
                                        <p className="text-xs text-slate-600 leading-relaxed mb-2">{item.rationale}</p>
                                      )}
                                      {item.precautions && item.precautions.length > 0 && (
                                        <div className="mt-2 pt-2 border-t border-slate-200">
                                          <p className="text-xs font-medium text-amber-700 mb-1">Precautions:</p>
                                          <ul className="space-y-1">
                                            {item.precautions.map((precaution: string, pIndex: number) => (
                                              <li key={pIndex} className="text-xs text-amber-900 leading-relaxed pl-3">• {precaution}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {condition.selfManagementPrecautions && condition.selfManagementPrecautions.length > 0 && (
                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                              <div className="flex items-start gap-3 mb-3">
                                <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider">
                                  Important Precautions
                                </h4>
                              </div>
                              <ul className="space-y-2 pl-8">
                                {condition.selfManagementPrecautions.map((precaution: string, index: number) => (
                                  <li key={index} className="text-sm text-amber-900 leading-relaxed">
                                    {precaution}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 10. TREATMENT TECHNIQUES */}
                  {condition.treatmentApproach && (
                    <div ref={(el) => { sectionRefs.current['treatment-techniques'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleManagementSection('treatment-techniques')}
                        className="w-full p-8 bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-orange-100">
                              <HeartIcon className="h-6 w-6 text-orange-600" />
                            </div>
                            <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                              Treatment Techniques
                            </h2>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedManagementSections['treatment-techniques'] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedManagementSections['treatment-techniques'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              {condition.treatmentApproach.description && (
                                <p className="text-base text-slate-700 leading-relaxed mb-6">
                                  {condition.treatmentApproach.description}
                                </p>
                              )}

                              {condition.treatmentApproach.phases && condition.treatmentApproach.phases.length > 0 && (
                                <div className="space-y-6">
                                  {condition.treatmentApproach.phases.map((phase, index) => (
                                    <div
                                      key={index}
                                      className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200"
                                    >
                                      <div className="flex items-start gap-3 mb-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                          <span className="text-sm font-bold text-orange-600">{index + 1}</span>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-base font-semibold text-slate-900 mb-1">
                                            {phase.phase}
                                          </h3>
                                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                                            {phase.focus}
                                          </p>
                                          <ul className="space-y-2">
                                            {phase.techniques?.map((technique, techIndex) => (
                                              <li key={techIndex} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                                                <CheckCircleIcon className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <span>{technique}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 11. RECOVERY TIMELINE */}
                  {condition.timeline && (
                    <div ref={(el) => { sectionRefs.current['timeline'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleManagementSection('timeline')}
                        className="w-full p-8 bg-gradient-to-r from-teal-50 to-white hover:from-teal-100 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-100">
                              <ClockIcon className="h-6 w-6 text-teal-600" />
                            </div>
                            <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                              Recovery Timeline
                            </h2>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedManagementSections['timeline'] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedManagementSections['timeline'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              {condition.timeline.typical && (
                                <div className="mb-6 p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200">
                                  <h3 className="text-sm font-semibold text-teal-900 uppercase tracking-wider mb-3">
                                    Typical Recovery
                                  </h3>
                                  <p className="text-base text-slate-700 leading-relaxed">
                                    {condition.timeline.typical}
                                  </p>
                                </div>
                              )}

                              {condition.timeline.phases && condition.timeline.phases.length > 0 && (
                                <div className="space-y-4">
                                  {condition.timeline.phases.map((phase, index) => (
                                    <div
                                      key={index}
                                      className="flex gap-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200"
                                    >
                                      <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                          <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                                        </div>
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                          <h3 className="text-base font-semibold text-slate-900">{phase.phase}</h3>
                                          {phase.duration && (
                                            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                                              {phase.duration}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                                          {phase.description}
                                        </p>
                                        {phase.goals && phase.goals.length > 0 && (
                                          <ul className="space-y-1.5">
                                            {phase.goals.map((goal, goalIndex) => (
                                              <li key={goalIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircleIcon className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                                <span>{goal}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 12. PROGNOSIS */}
                  {condition.prognosis && (
                    <div ref={(el) => { sectionRefs.current['prognosis'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleManagementSection('prognosis')}
                        className="w-full p-8 bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-100">
                              <ChartBarIcon className="h-6 w-6 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                              Prognosis & Outcomes
                            </h2>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedManagementSections['prognosis'] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedManagementSections['prognosis'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 space-y-6">
                              {condition.prognosis.conservative && (
                                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-200">
                                  <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <CheckCircleIcon className="h-4 w-4" />
                                    Conservative Management
                                  </h3>
                                  <p className="text-base text-slate-700 leading-relaxed">
                                    {condition.prognosis.conservative}
                                  </p>
                                </div>
                              )}

                              {condition.prognosis.surgical && (
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                                  <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <InformationCircleIcon className="h-4 w-4" />
                                    Surgical Management
                                  </h3>
                                  <p className="text-base text-slate-700 leading-relaxed">
                                    {condition.prognosis.surgical}
                                  </p>
                                </div>
                              )}

                              {condition.prognosis.factorsAffecting && condition.prognosis.factorsAffecting.length > 0 && (
                                <div>
                                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                                    Factors Affecting Recovery
                                  </h3>
                                  <div className="grid gap-3">
                                    {condition.prognosis.factorsAffecting.map((factor, index) => (
                                      <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                                      >
                                        <ArrowRightIcon className="h-4 w-4 text-purple-500 flex-shrink-0 mt-1" />
                                        <span className="text-sm text-slate-700 leading-relaxed">{factor}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {condition.prognosis.returnToActivity && (
                                <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200">
                                  <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <FireIcon className="h-4 w-4" />
                                    Return to Activity
                                  </h3>
                                  <p className="text-base text-slate-700 leading-relaxed">
                                    {condition.prognosis.returnToActivity}
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 13. MEASURING PROGRESS */}
                  {condition.measuringProgress && (
                    <div ref={(el) => { sectionRefs.current['measuring'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleManagementSection('measuring')}
                        className="w-full p-8 bg-gradient-to-r from-green-50 to-white hover:from-green-100 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-100">
                              <ChartBarIcon className="h-6 w-6 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                              Measuring Progress
                            </h2>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedManagementSections['measuring'] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedManagementSections['measuring'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 space-y-6">
                              {condition.measuringProgress.subjective && condition.measuringProgress.subjective.length > 0 && (
                                <div>
                                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                                    Subjective Markers
                                  </h3>
                                  <div className="grid gap-3">
                                    {condition.measuringProgress.subjective.map((marker, index) => (
                                      <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                                      >
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 leading-relaxed">{marker}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {condition.measuringProgress.objective && condition.measuringProgress.objective.length > 0 && (
                                <div>
                                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                                    Objective Measures
                                  </h3>
                                  <div className="grid gap-3">
                                    {condition.measuringProgress.objective.map((measure, index) => (
                                      <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                                      >
                                        <ChartBarIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 leading-relaxed">{measure}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {condition.measuringProgress.functional && condition.measuringProgress.functional.length > 0 && (
                                <div>
                                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                                    Functional Tests
                                  </h3>
                                  <div className="grid gap-3">
                                    {condition.measuringProgress.functional.map((test, index) => (
                                      <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                                      >
                                        <FireIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700 leading-relaxed">{test}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {condition.measuringProgress.assessmentTools && condition.measuringProgress.assessmentTools.length > 0 && (
                                <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200">
                                  <h3 className="text-sm font-semibold text-green-900 uppercase tracking-wider mb-4">
                                    Assessment Tools
                                  </h3>
                                  <div className="space-y-3">
                                    {condition.measuringProgress.assessmentTools.map((tool, index) => (
                                      <div key={index}>
                                        <div className="flex items-start gap-3 mb-2">
                                          <BookOpenIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                                          <div className="flex-1">
                                            <p className="text-sm font-semibold text-slate-900">{tool.name}</p>
                                            <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                              {tool.description}
                                            </p>
                                          </div>
                                        </div>
                                        {tool.link && (
                                          <a
                                            href={tool.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-green-600 hover:text-green-700 font-medium ml-7"
                                          >
                                            Learn more
                                            <ArrowRightIcon className="h-3 w-3" />
                                          </a>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 14. FAQs */}
                  {condition.faqs && condition.faqs.length > 0 && (
                    <div ref={(el) => { sectionRefs.current['faqs'] = el; }} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      {/* Collapsible header */}
                      <button
                        onClick={() => toggleManagementSection('faqs')}
                        className="w-full p-8 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-100">
                              <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900">
                              Frequently Asked Questions
                            </h2>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedManagementSections['faqs'] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence>
                        {expandedManagementSections['faqs'] && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 space-y-4">
                              {condition.faqs.map((faq, index) => (
                                <details
                                  key={index}
                                  className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                                >
                                  <summary className="flex items-start justify-between cursor-pointer list-none">
                                    <span className="text-sm font-semibold text-slate-900 leading-snug pr-4">
                                      {faq.question}
                                    </span>
                                    <ChevronDownIcon className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                                  </summary>
                                  <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </details>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* 15. Related Conditions CTA */}
                  {relatedConditions && relatedConditions.length > 0 && (
                    <div className="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 border border-slate-200">
                      <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                        Related Conditions
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {relatedConditions.slice(0, 6).map((related) => (
                          <Link
                            key={related.slug}
                            href={`/conditions/${related.slug}`}
                            className="flex items-center gap-3 p-4 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-[#B08D57] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group"
                          >
                            <ArrowRightIcon className="h-4 w-4 text-[#B08D57] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span className="text-sm font-medium text-slate-900">{related.name}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Book Consultation CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-slate-200">
                        <Link
                          href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          <CalendarIcon className="h-5 w-5" />
                          Book Consultation
                        </Link>
                        <Link
                          href="/conditions"
                          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl text-sm font-medium border border-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <BookOpenIcon className="h-5 w-5" />
                          Browse All Conditions
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
