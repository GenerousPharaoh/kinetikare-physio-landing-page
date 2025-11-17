"use client";

// <!-- REDESIGNED 2025 - ALL CRITICAL ISSUES FIXED -->

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

// Tab interface for better organization
interface TabContent {
  id: string;
  label: string;
  icon: React.ElementType;
}

export default function ConditionPageClient({
  condition,
  relatedConditions
}: ConditionPageClientProps) {

  // Determine first available tab for this condition
  const getFirstAvailableTab = () => {
    if (condition.pathophysiology || condition.overview || condition.biomechanics) return 'overview';
    if (condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek) return 'symptoms';
    if (condition.selfManagement || condition.prognosis || condition.faqs || condition.treatmentApproach || condition.timeline || condition.evidenceBasedTreatment) return 'self-care';
    if (condition.keyResearch || condition.researchInsights) return 'research';
    return 'overview'; // fallback
  };

  const [activeTab, setActiveTab] = useState(getFirstAvailableTab());

  // Active sub-views for each tab (instead of scrolling/collapsible)
  const [activeOverviewView, setActiveOverviewView] = useState<string>('pathophysiology');
  const [activeClinicalView, setActiveClinicalView] = useState<string>('clinical-presentation');
  const [activeManagementView, setActiveManagementView] = useState<string>('evidence-based-treatment');
  const [activeResearchView, setActiveResearchView] = useState<string>('key-research');

  // Sidebar state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({});

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
        return condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek;
      case 'research':
        return condition.keyResearch || condition.researchInsights;
      case 'self-care':
        // Now includes treatment approach and timeline content
        return condition.selfManagement || condition.prognosis || condition.faqs || 
               condition.treatmentApproach || condition.timeline || condition.evidenceBasedTreatment;
      default:
        return false;
    }
  });


  // Simplified scroll handler - ONLY for progress bar and sticky sidebar
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;
          const headerHeight = 96;

          // Progress bar
          const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
          setScrollProgress(progress);

          // Sticky sidebar
          const sidebarContainer = document.getElementById('sidebar-container');
          if (sidebarContainer) {
            const containerTop = sidebarContainer.getBoundingClientRect().top + scrollTop;
            if (scrollTop > containerTop - headerHeight) {
              setSidebarStyle({
                position: 'fixed',
                top: `${headerHeight}px`,
                width: '224px',
                maxHeight: `calc(100vh - ${headerHeight + 24}px)`,
                overflowY: 'auto'
              });
            } else {
              setSidebarStyle({ position: 'static' });
            }
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
    "signOrSymptom": condition.redFlags?.map(flag => ({
      "@type": "MedicalSymptom",
      "name": flag
    }))
  };

  // Check if we need multiple citations
  const hasStrongEvidence = (treatment: any) => {
    return treatment.effectivenessLevel === 'strong' && 
           (!condition.keyResearch || condition.keyResearch.length < 2);
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Screen-reader-only H1 for SEO */}
        <h1 className="sr-only">
          {condition.name} Treatment Burlington | Kareem Hassanein Physiotherapy | Waterdown Oakville Physiotherapist
        </h1>

        {/* Minimal Hero with Breadcrumbs */}
        <section className="pt-24 pb-3 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-3">
                <Link href="/" className="hover:text-[#B08D57] transition-colors">
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors">
                  Conditions
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">{condition.name}</span>
              </nav>

              <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-slate-900 mb-3">
                {condition.name}
              </h1>
              {condition.description && (
                <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
                  {condition.description}
                </p>
              )}

              {/* Regional Service Area - Subtle mention */}
              <p className="text-xs text-slate-400 mt-2">
                Treating {condition.name.toLowerCase()} at our Burlington clinic • Convenient for Waterdown and Flamborough residents
              </p>

              {/* Red Flags Disclaimer - Simple expandable that pushes content */}
              {((condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0) || 
                (condition.redFlags && condition.redFlags.length > 0)) && (
                <details className="group mt-3">
                  <summary className="flex items-center gap-1.5 cursor-pointer list-none text-xs text-red-700 hover:text-red-800 transition-colors">
                    <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                    <span className="underline">Important: When to seek immediate medical attention</span>
                    <ChevronDownIcon className="h-3.5 w-3.5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="grid md:grid-cols-2 gap-3">
                      {condition.clinicalRedFlags ? (
                        condition.clinicalRedFlags.map((flag, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs">
                            <div className="mt-[5px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-medium text-red-900 leading-tight">{flag.sign}</p>
                              <p className="text-red-700 mt-0.5 leading-tight">{flag.action}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        condition.redFlags?.map((flag, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs">
                            <div className="mt-[5px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-red-800 flex-1 leading-tight">{flag}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </details>
              )}
            </div>
          </div>
        </section>

        {/* Mobile Navigation Toggle (visible on mobile only) */}
        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex items-center gap-2 py-3 text-slate-700 font-medium"
            >
              {mobileNavOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
              <span>Navigation</span>
            </button>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <section className="pt-6 pb-16 bg-white min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex gap-6 items-start relative">
              {/* Sidebar Navigation - Desktop - JAVASCRIPT STICKY */}
              <aside id="sidebar-container" className="hidden lg:block w-56 flex-shrink-0">
                <nav className="space-y-3 pr-3" style={{...sidebarStyle, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                  {/* Scroll Progress - Enhanced */}
                  <div className="h-1 bg-slate-100/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#D4AF37] transition-all duration-500 ease-out shadow-sm"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>

                  {/* Navigation Sections - Ultra Smooth */}
                  <div className="space-y-1.5">
                    {/* Overview/Science Section with Sub-navigation */}
                    {tabs.find(t => t.id === 'overview') && (
                      <div>
                        <button
                          onClick={() => setActiveTab('overview')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            activeTab === 'overview'
                              ? 'bg-[#B08D57] text-white'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-slate-200 pl-3"
                          >
                            {condition.pathophysiology && (
                              <button
                                onClick={() => setActiveOverviewView('pathophysiology')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeOverviewView === 'pathophysiology'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Pathophysiology
                              </button>
                            )}
                            {condition.biomechanics && (
                              <button
                                onClick={() => setActiveOverviewView('biomechanics')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeOverviewView === 'biomechanics'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                          onClick={() => setActiveTab('symptoms')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            activeTab === 'symptoms'
                              ? 'bg-[#B08D57] text-white'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FireIcon className="h-4 w-4 flex-shrink-0" />
                            <span>Clinical</span>
                          </div>
                          {(condition.clinicalPresentation || (condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0) || (condition.whenToSeek && condition.whenToSeek.length > 0)) && (
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
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-slate-200 pl-3"
                          >
                            {condition.clinicalPresentation && (
                              <button
                                onClick={() => setActiveClinicalView('clinical-presentation')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeClinicalView === 'clinical-presentation'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Clinical Presentation
                              </button>
                            )}
                            {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                              <button
                                onClick={() => setActiveClinicalView('differential')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeClinicalView === 'differential'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Differential Diagnosis
                              </button>
                            )}
                            {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                              <button
                                onClick={() => setActiveClinicalView('when-to-seek')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeClinicalView === 'when-to-seek'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                          onClick={() => setActiveTab('self-care')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            activeTab === 'self-care'
                              ? 'bg-[#B08D57] text-white'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-slate-200 pl-3"
                          >
                            <button
                              onClick={() => setActiveManagementView('evidence-based-treatment')}
                              className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                activeManagementView === 'evidence-based-treatment'
                                  ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                              }`}
                            >
                              Evidence-Based Treatment
                            </button>
                            {condition.treatmentApproach && (
                              <button
                                onClick={() => setActiveManagementView('treatment-techniques')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeManagementView === 'treatment-techniques'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Treatment Techniques
                              </button>
                            )}
                            {condition.timeline && (
                              <button
                                onClick={() => setActiveManagementView('timeline')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeManagementView === 'timeline'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Recovery Timeline
                              </button>
                            )}
                            {condition.prognosis && (
                              <button
                                onClick={() => setActiveManagementView('prognosis')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeManagementView === 'prognosis'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Prognosis & Outcomes
                              </button>
                            )}
                            {condition.measuringProgress && (
                              <button
                                onClick={() => setActiveManagementView('measuring-success')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeManagementView === 'measuring-success'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Measuring Progress
                              </button>
                            )}
                            {condition.faqs && (
                              <button
                                onClick={() => setActiveManagementView('faqs')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeManagementView === 'faqs'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                          onClick={() => setActiveTab('research')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            activeTab === 'research'
                              ? 'bg-[#B08D57] text-white'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
                            className="ml-3 mt-1.5 space-y-1 border-l-2 border-slate-200 pl-3"
                          >
                            {condition.keyResearch && condition.keyResearch.length > 0 && (
                              <button
                                onClick={() => setActiveResearchView('key-research')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeResearchView === 'key-research'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                              >
                                Key Research & Evidence
                              </button>
                            )}
                            {condition.researchInsights && condition.researchInsights.length > 0 && (
                              <button
                                onClick={() => setActiveResearchView('research-insights')}
                                className={`w-full text-left px-2.5 py-1.5 text-xs transition-all duration-200 ease-out rounded ${
                                  activeResearchView === 'research-insights'
                                    ? 'bg-[#B08D57] text-white font-medium shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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

              {/* Mobile Sidebar Drawer */}
              <AnimatePresence>
                {mobileNavOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="lg:hidden fixed inset-0 z-40 bg-black/50"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <motion.div
                      initial={{ x: -280 }}
                      animate={{ x: 0 }}
                      exit={{ x: -280 }}
                      transition={{ type: "spring", damping: 20 }}
                      className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl p-6 overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Search */}
                      <div className="relative mb-6">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent"
                        />
                      </div>

                      {/* Mobile Navigation */}
                      <nav className="space-y-1">
                        {tabs.find(t => t.id === 'overview') && (
                          <button
                            onClick={() => {
                              setActiveTab('overview');
                              setMobileNavOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === 'overview'
                                ? 'bg-[#B08D57] text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <InformationCircleIcon className="h-5 w-5 flex-shrink-0" />
                            <span>Science</span>
                          </button>
                        )}

                        {tabs.find(t => t.id === 'symptoms') && (
                          <button
                            onClick={() => {
                              setActiveTab('symptoms');
                              setMobileNavOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === 'symptoms'
                                ? 'bg-[#B08D57] text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <FireIcon className="h-5 w-5 flex-shrink-0" />
                            <span>Clinical</span>
                          </button>
                        )}

                        {tabs.find(t => t.id === 'self-care') && (
                          <button
                            onClick={() => {
                              setActiveTab('self-care');
                              setMobileNavOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === 'self-care'
                                ? 'bg-[#B08D57] text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <ShieldCheckIcon className="h-5 w-5 flex-shrink-0" />
                            <span>Management</span>
                          </button>
                        )}

                        {tabs.find(t => t.id === 'research') && (
                          <button
                            onClick={() => {
                              setActiveTab('research');
                              setMobileNavOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === 'research'
                                ? 'bg-[#B08D57] text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <ChartBarIcon className="h-5 w-5 flex-shrink-0" />
                            <span>Research</span>
                          </button>
                        )}
                      </nav>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="max-w-4xl mx-auto">
                  {/* Tab Content */}
                  <main className="relative min-w-0 w-full">
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                    >
                      {/* Overview Tab */}
                      {activeTab === 'overview' && (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeOverviewView}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            {activeOverviewView === 'pathophysiology' && condition.pathophysiology && (
                              <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                  The Science of {condition.name || 'Your Condition'}
                                </h2>
                                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                                  {condition.pathophysiology}
                                </p>
                              </div>
                            )}

                            {activeOverviewView === 'pathophysiology' && condition.overview && !condition.pathophysiology && (
                              <div className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                                <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                  Understanding Your Condition
                                </h2>
                                <div className="space-y-4">
                                  {condition.overview.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-base text-slate-700 leading-relaxed">
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeOverviewView === 'biomechanics' && condition.biomechanics && (
                              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                  Contributing Factors
                                </h2>
                                <div className="space-y-4">
                                  {condition.biomechanics.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed">
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      )}

                      {/* Symptoms Tab */}
                      {activeTab === 'symptoms' && (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeClinicalView}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            {activeClinicalView === 'clinical-presentation' && condition.clinicalPresentation && (
                              <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-slate-900 mb-8">
                                  Clinical Presentation
                                </h2>

                                {condition.clinicalPresentation.primarySymptoms && (
                                  <div className="mb-8">
                                    <h3 className="text-xl font-semibold leading-tight text-slate-900 mb-5">Primary Symptoms</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      {condition.clinicalPresentation.primarySymptoms.map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                          <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                          <span className="text-base md:text-lg text-slate-700 leading-relaxed">{symptom}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {condition.clinicalPresentation.associatedSymptoms && (
                                  <div className="mb-8">
                                    <h3 className="text-xl font-medium leading-tight text-slate-900 mb-4">Associated Symptoms</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      {condition.clinicalPresentation.associatedSymptoms.map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                          <div className="mt-2 h-1.5 w-1.5 bg-slate-400 rounded-full" />
                                          <span className="text-base text-slate-700 leading-relaxed">{symptom}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {condition.clinicalPresentation.typicalPattern && (
                                  <div className="p-6 md:p-7 bg-gradient-to-br from-[#B08D57]/5 to-[#B08D57]/10 rounded-xl border border-[#B08D57]/20 shadow-sm">
                                    <h3 className="text-xl font-semibold leading-tight text-slate-900 mb-4">Typical Pattern</h3>
                                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">{condition.clinicalPresentation.typicalPattern}</p>
                                  </div>
                                )}
                              </div>
                            )}

                            {activeClinicalView === 'differential' && condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                              <div className="bg-slate-50 rounded-xl p-8 md:p-8 border border-slate-200">
                                <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-4">
                                  Differential Diagnosis
                                </h2>
                                <p className="text-base text-slate-700 leading-relaxed mb-6">Conditions with similar presentations:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  {condition.differentialDiagnosis.map((diff, index) => (
                                    <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                      <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                          <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{diff.condition}</h3>
                                          <p className="text-sm text-slate-700 leading-relaxed">
                                            <span className="font-medium">Key differences:</span> {diff.distinguishingFeatures}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeClinicalView === 'when-to-seek' && condition.whenToSeek && condition.whenToSeek.length > 0 && (
                              <div className="bg-amber-50 rounded-xl p-8 md:p-8 border border-amber-200">
                                <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                  When to Seek Professional Help
                                </h2>
                                <div className="space-y-3">
                                  {condition.whenToSeek.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                      <CheckCircleIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-base text-slate-700 leading-relaxed">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      )}

                      {/* Treatment Tab */}
                      {activeTab === 'treatment' && (
                        <div className="space-y-8">
                          {condition.treatmentApproach && (
                            <div className="bg-white rounded-xl p-8 md:p-8 border border-slate-200">
                              <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                {condition.treatmentApproach.title}
                              </h2>
                              <p className="text-base text-slate-700 leading-relaxed mb-8">
                                {condition.treatmentApproach.description}
                              </p>
                              <div className="space-y-3">
                                {condition.treatmentApproach.techniques.map((technique, index) => {
                                  const [title, description] = technique.split(': ');
                                  return (
                                    <div key={index} className="flex items-start gap-3">
                                      <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <span className="font-medium text-slate-900">{title}</span>
                                        {description && <span className="text-slate-700 leading-relaxed">: {description}</span>}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {condition.evidenceBasedTreatment && condition.evidenceBasedTreatment.length > 0 && (
                            <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Evidence-Based Treatment Options
                              </h2>
                              <div className="space-y-4">
                                {condition.evidenceBasedTreatment.map((treatment, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                                    <h3 className="text-xl font-medium leading-tight text-slate-900 mb-3">{treatment.approach}</h3>
                                    <p className="text-base text-slate-700 leading-relaxed">{treatment.evidence}</p>
                                    {hasStrongEvidence(treatment) && (
                                      <p className="text-xs text-amber-600 mt-2 italic">
                                        Note: Additional studies needed to confirm effectiveness level
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.timeline && condition.timeline.length > 0 && (
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200">
                              <h2 className="text-2xl font-medium tracking-tight leading-tight text-slate-900 mb-6">
                                Recovery Timeline
                              </h2>
                              <div className="relative">
                                {condition.timeline.map((phase, index) => (
                                  <div key={index} className="flex gap-4 mb-6 last:mb-0">
                                    <div className="flex flex-col items-center">
                                      <div className="w-3 h-3 bg-[#B08D57] rounded-full" />
                                      {index < condition.timeline!.length - 1 && (
                                        <div className="w-0.5 h-full bg-[#B08D57]/30 mt-2" />
                                      )}
                                    </div>
                                    <div className="flex-1 pb-6">
                                      <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-medium leading-tight text-slate-900">{phase.phase}</h3>
                                        <span className="text-sm text-[#B08D57] bg-[#B08D57]/10 px-2 py-1 rounded">
                                          {phase.duration}
                                        </span>
                                      </div>
                                      <p className="text-base text-slate-700 leading-relaxed">{phase.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Research Tab - Premium Design */}
                      {activeTab === 'research' && (
                        <div id="section-research" className="space-y-8 scroll-mt-40">
                          {condition.keyResearch && condition.keyResearch.length > 0 && (
                            <div data-section="key-research" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-teal-50/20 pointer-events-none"></div>

                              <div className="relative">
                                {/* Header with gradient accent - Clickable */}
                                <div 
                                  className="bg-gradient-to-r from-emerald-900 to-emerald-700 px-8 py-6 cursor-pointer hover:from-emerald-800 hover:to-emerald-600 transition-all"
                                  onClick={() => toggleResearchSection('key-research')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <BeakerIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Key Research & Evidence</h2>
                                        <p className="text-sm text-emerald-200 mt-1">Peer-reviewed studies supporting treatment approaches</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedResearchSections['key-research'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {expandedResearchSections['key-research'] && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                    {condition.keyResearch.map((research, index) => {
                                      const colors = [
                                        { bg: 'from-emerald-50/50 to-emerald-50/20', border: 'border-emerald-100', icon: 'from-emerald-500 to-emerald-600', text: 'text-emerald-700' },
                                        { bg: 'from-blue-50/50 to-blue-50/20', border: 'border-blue-100', icon: 'from-blue-500 to-blue-600', text: 'text-blue-700' },
                                        { bg: 'from-purple-50/50 to-purple-50/20', border: 'border-purple-100', icon: 'from-purple-500 to-purple-600', text: 'text-purple-700' },
                                        { bg: 'from-teal-50/50 to-teal-50/20', border: 'border-teal-100', icon: 'from-teal-500 to-teal-600', text: 'text-teal-700' },
                                      ];
                                      const color = colors[index % colors.length];

                                      // Check if this is NEW FORMAT (finding/detail/clinicalRelevance) or OLD FORMAT (title/authors/findings)
                                      const isNewFormat = research.finding && research.detail && research.clinicalRelevance;

                                      return (
                                        <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 break-inside-avoid mb-6">
                                          <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                              <div className={`w-12 h-12 bg-gradient-to-br ${color.icon} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="flex-1">
                                              {isNewFormat ? (
                                                // NEW FORMAT RENDERING
                                                <>
                                                  <div className="mb-3">
                                                    <h3 className={`text-base font-semibold ${color.text} mb-2 leading-tight`}>
                                                      {research.finding}
                                                    </h3>
                                                  </div>

                                                  <div className="mb-3">
                                                    <h5 className="text-sm font-medium text-slate-900 mb-1">Research Details:</h5>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{research.detail}</p>
                                                  </div>

                                                  <div className="p-3 bg-white/60 backdrop-blur rounded-lg border border-white/40">
                                                    <h5 className="text-sm font-medium text-slate-900 mb-1">Clinical Relevance:</h5>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{research.clinicalRelevance}</p>
                                                  </div>
                                                </>
                                              ) : (
                                                // OLD FORMAT RENDERING
                                                <>
                                                  <div className="flex items-start justify-between mb-3">
                                                    <h3 className={`text-xs font-semibold ${color.text} uppercase tracking-wider mb-2`}>
                                                      {research.authors && `${research.authors} (${research.year})`}
                                                      {!research.authors && research.title}
                                                    </h3>
                                                    {research.year && (
                                                      <span className="text-xs text-slate-500 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full font-medium">
                                                        {research.year}
                                                      </span>
                                                    )}
                                                  </div>

                                                  {research.authors && (
                                                    <h4 className="font-medium text-slate-900 mb-3 text-lg leading-tight">
                                                      {research.title}
                                                    </h4>
                                                  )}

                                                  {research.journal && (
                                                    <p className="text-sm text-slate-600 italic mb-3">
                                                      Published in: {research.journal}
                                                      {research.sampleSize && ` • Sample Size: ${research.sampleSize}`}
                                                    </p>
                                                  )}

                                                  <div className="mb-3">
                                                    <h5 className="text-sm font-medium text-slate-900 mb-1">Key Findings:</h5>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{research.findings}</p>
                                                  </div>

                                                  <div className="p-3 bg-white/60 backdrop-blur rounded-lg border border-white/40">
                                                    <h5 className="text-sm font-medium text-slate-900 mb-1">Clinical Relevance:</h5>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{research.relevance}</p>
                                                  </div>

                                                  {research.citation && (
                                                    <div className="mt-3 pt-3 border-t border-slate-200/60">
                                                      <p className="text-xs text-slate-500 font-mono">{research.citation}</p>
                                                    </div>
                                                  )}
                                                </>
                                              )}
                                            </div>
                                          </div>
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}

                          {condition.researchInsights && condition.researchInsights.length > 0 && (
                            <div data-section="research-insights" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20 pointer-events-none"></div>

                              <div className="relative">
                                {/* Header with gradient accent - Clickable */}
                                <div 
                                  className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 cursor-pointer hover:from-blue-800 hover:to-blue-600 transition-all"
                                  onClick={() => toggleResearchSection('research-insights')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <ChartBarIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Research Insights</h2>
                                        <p className="text-sm text-blue-200 mt-1">Clinical implications and practice recommendations</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedResearchSections['research-insights'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {expandedResearchSections['research-insights'] && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    {condition.researchInsights.map((insight, index) => {
                                      const colonIndex = insight.indexOf(':');
                                      const topic = colonIndex > -1 ? insight.substring(0, colonIndex).trim() : '';
                                      const finding = colonIndex > -1 ? insight.substring(colonIndex + 1).trim() : insight;
                                      
                                      const colors = [
                                        { bg: 'from-blue-50/50 to-blue-50/20', border: 'border-blue-100', icon: 'from-blue-500 to-blue-600', text: 'text-blue-700' },
                                        { bg: 'from-indigo-50/50 to-indigo-50/20', border: 'border-indigo-100', icon: 'from-indigo-500 to-indigo-600', text: 'text-indigo-700' },
                                        { bg: 'from-violet-50/50 to-violet-50/20', border: 'border-violet-100', icon: 'from-violet-500 to-violet-600', text: 'text-violet-700' },
                                        { bg: 'from-cyan-50/50 to-cyan-50/20', border: 'border-cyan-100', icon: 'from-cyan-500 to-cyan-600', text: 'text-cyan-700' },
                                      ];
                                      const color = colors[index % colors.length];
                                      
                                      return (
                                        <div key={index} className={`group relative bg-gradient-to-r ${color.bg} rounded-xl p-6 border ${color.border} hover:shadow-md transition-all`}>
                                          <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                              <div className={`w-12 h-12 bg-gradient-to-br ${color.icon} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="flex-1">
                                              {topic ? (
                                                <>
                                                  <h3 className={`text-xs font-semibold ${color.text} uppercase tracking-wider mb-2`}>{topic}</h3>
                                                  <p className="text-slate-700 text-sm leading-relaxed">{finding}</p>
                                                </>
                                              ) : (
                                                <p className="text-slate-700 text-sm leading-relaxed">{finding}</p>
                                              )}
                                            </div>
                                          </div>
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Management Tab */}
                      {activeTab === 'self-care' && (
                        <div id="section-self-care" className="space-y-8 scroll-mt-40">
                          {/* Integrated Evidence-Based Management - Premium Design */}
                          {(condition.evidenceSnapshot || condition.selfManagement) && (
                            <div data-section="evidence-based" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent - Now clickable */}
                                <div 
                                  className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6 cursor-pointer hover:from-slate-800 hover:to-slate-600 transition-all"
                                  onClick={() => toggleManagementSection('evidence-based')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <BeakerIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Evidence-Based Management</h2>
                                        <p className="text-sm text-slate-200 mt-1">Comprehensive treatment strategies with proven outcomes</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['evidence-based'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {expandedManagementSections['evidence-based'] && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="space-y-8">
                                    {/* Evidence Snapshot Cards - 3 COLUMN GRID */}
                                    {condition.evidenceSnapshot && (
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Primary Strategy Card */}
                                        {(condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine) && (
                                          <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                            <div className="space-y-4">
                                              <div className="flex justify-center">
                                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="text-center">
                                                <h3 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">Primary Treatment Approach</h3>
                                                <p className="text-slate-700 text-sm leading-relaxed">
                                                  {condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                        
                                        {/* Secondary Strategy Card */}
                                        {(condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging) && (
                                          <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                            <div className="space-y-4">
                                              <div className="flex justify-center">
                                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="text-center">
                                                <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">Complementary Interventions</h3>
                                                <p className="text-slate-700 text-sm leading-relaxed">
                                                  {condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        )}

                                        {/* Prevention Strategy Card */}
                                        {(condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management) && (
                                          <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                            <div className="space-y-4">
                                              <div className="flex justify-center">
                                                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="text-center">
                                                <h3 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3">Prevention & Long-term Care</h3>
                                                <p className="text-slate-700 text-sm leading-relaxed">
                                                  {condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management}
                                                </p>
                                              </div>
                                            </div>
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
                                          const colors = [
                                            { bg: 'from-amber-50/50 to-amber-50/20', border: 'border-amber-100', icon: 'from-amber-500 to-amber-600', text: 'text-amber-700' },
                                            { bg: 'from-teal-50/50 to-teal-50/20', border: 'border-teal-100', icon: 'from-teal-500 to-teal-600', text: 'text-teal-700' },
                                            { bg: 'from-rose-50/50 to-rose-50/20', border: 'border-rose-100', icon: 'from-rose-500 to-rose-600', text: 'text-rose-700' },
                                            { bg: 'from-indigo-50/50 to-indigo-50/20', border: 'border-indigo-100', icon: 'from-indigo-500 to-indigo-600', text: 'text-indigo-700' },
                                          ];
                                          const color = colors[index % colors.length];
                                          
                                          return (
                                            <div key={index} className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                              <div className="flex gap-4">
                                                <div className="flex-shrink-0">
                                                  <div className={`w-12 h-12 bg-gradient-to-br ${color.icon} rounded-xl flex items-center justify-center shadow-lg`}>
                                                    <span className="text-white font-semibold text-lg">{index + 1}</span>
                                                  </div>
                                                </div>
                                                <div className="flex-1">
                                                  <h3 className={`text-xs font-semibold ${color.text} uppercase tracking-wider mb-2`}>{strategy.strategy}</h3>
                                                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                                    {strategy.rationale}
                                                  </p>
                                                  {strategy.precautions && strategy.precautions.length > 0 && (
                                                    <div className="mt-3 p-3 bg-amber-50/70 backdrop-blur rounded-lg border border-amber-200">
                                                      <div className="flex items-start gap-2">
                                                        <ExclamationCircleIcon className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                                        <div className="flex-1">
                                                          <p className="text-xs font-medium text-amber-900 mb-1">Important Precautions</p>
                                                          <ul className="text-xs text-amber-800 space-y-1">
                                                            {strategy.precautions.map((precaution, pIndex) => (
                                                              <li key={pIndex} className="flex items-start">
                                                                <span className="mr-1.5">•</span>
                                                                <span>{precaution}</span>
                                                              </li>
                                                            ))}
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )}
                                                  {strategy.strategy.toLowerCase().includes('nutrition') && (
                                                    <p className="text-xs text-slate-500 mt-3 italic flex items-center gap-1">
                                                      <InformationCircleIcon className="h-3 w-3" />
                                                      Nutritional advice is general guidance. Consult a registered dietitian for personalized plans.
                                                    </p>
                                                  )}
                                                </div>
                                              </div>
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}

                          {/* Treatment Techniques Section - Collapsible */}
                          {condition.treatmentApproach && (
                            <div data-section="treatment-techniques" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/20 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent - Clickable */}
                                <div 
                                  className="bg-gradient-to-r from-orange-900 to-amber-700 px-8 py-6 cursor-pointer hover:from-orange-800 hover:to-amber-600 transition-all"
                                  onClick={() => toggleManagementSection('treatment-techniques')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <AcademicCapIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Treatment Techniques</h2>
                                        <p className="text-sm text-orange-200 mt-1">Specialized manual therapy and intervention approaches</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['treatment-techniques'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {expandedManagementSections['treatment-techniques'] && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                        <p className="text-base text-slate-700 leading-relaxed mb-6">
                                          {condition.treatmentApproach.description}
                                        </p>
                                        <div className="space-y-3">
                                          {condition.treatmentApproach.techniques.map((technique, index) => {
                                            const [title, description] = technique.split(': ');
                                            return (
                                              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50/50 to-amber-50/30 rounded-lg border border-orange-100">
                                                <CheckCircleIcon className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                <div>
                                                  <span className="font-medium text-slate-900">{title}</span>
                                                  {description && <span className="text-slate-700 leading-relaxed">: {description}</span>}
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}

                          {/* Recovery Timeline Section - Collapsible */}
                          {condition.timeline && condition.timeline.length > 0 && (
                            <div data-section="timeline" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-cyan-50/20 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent - Clickable */}
                                <div 
                                  className="bg-gradient-to-r from-teal-900 to-cyan-700 px-8 py-6 cursor-pointer hover:from-teal-800 hover:to-cyan-600 transition-all"
                                  onClick={() => toggleManagementSection('timeline')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <ClockIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Recovery Timeline</h2>
                                        <p className="text-sm text-teal-200 mt-1">Expected phases and milestones in your recovery journey</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['timeline'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {expandedManagementSections['timeline'] && (
                                    <motion.div 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}

                          {condition.prognosis && (
                            <div data-section="prognosis" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/20 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent - Clickable */}
                                <div 
                                  className="bg-gradient-to-r from-purple-900 to-purple-700 px-8 py-6 cursor-pointer hover:from-purple-800 hover:to-purple-600 transition-all"
                                  onClick={() => toggleManagementSection('prognosis')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Prognosis & Recovery</h2>
                                        <p className="text-sm text-purple-200 mt-1">Expected outcomes and recovery factors</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['prognosis'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence>
                                  {expandedManagementSections['prognosis'] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    {/* Timeline Card */}
                                    <div className="group relative bg-gradient-to-r from-purple-50/50 to-purple-50/20 rounded-xl p-6 border border-purple-100 hover:shadow-md transition-all">
                                      <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2">Expected Timeline</h3>
                                          <p className="text-slate-700 text-sm leading-relaxed">{condition.prognosis.timeline}</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Natural History Card */}
                                    {condition.prognosis.naturalHistory && (
                                      <div className="group relative bg-gradient-to-r from-pink-50/50 to-pink-50/20 rounded-xl p-6 border border-pink-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-semibold text-pink-700 uppercase tracking-wider mb-2">Natural History</h3>
                                            <p className="text-slate-700 text-sm leading-relaxed">{condition.prognosis.naturalHistory}</p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Recovery Factors */}
                                    {condition.prognosis.factors && condition.prognosis.factors.length > 0 && (
                                      <div className="group relative bg-gradient-to-r from-indigo-50/50 to-indigo-50/20 rounded-xl p-6 border border-indigo-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">Factors Affecting Recovery</h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                              {condition.prognosis.factors.map((factor, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                  <CheckCircleIcon className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                                  <span className="text-sm text-slate-700">{factor}</span>
                                                </div>
                                              ))}
                                            </div>
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
                            </div>
                          )}

                          {/* Measuring Progress Section - Premium Design */}
                          {condition.measuringProgress && (
                            <div data-section="measuring" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/20 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent */}
                                <div 
                                  className="bg-gradient-to-r from-green-900 to-green-700 px-8 py-6 cursor-pointer hover:from-green-800 hover:to-green-600 transition-all"
                                  onClick={() => toggleManagementSection('measuring')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Measuring Progress</h2>
                                        <p className="text-sm text-green-200 mt-1">Track your recovery journey</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['measuring'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence>
                                  {expandedManagementSections['measuring'] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    {/* Day-to-Day Tracking Card */}
                                    <div className="group relative bg-gradient-to-r from-green-50/50 to-green-50/20 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all">
                                      <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v20m0-10h4m4 0h4m-4-5v10" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">Day-to-Day Tracking</h3>
                                          <p className="text-slate-700 text-sm leading-relaxed">{condition.measuringProgress.dayToDay}</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Assessment Tools Card */}
                                    {condition.measuringProgress.questionnaires && (
                                      <div className="group relative bg-gradient-to-r from-emerald-50/50 to-emerald-50/20 rounded-xl p-6 border border-emerald-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Assessment Tools</h3>
                                            <p className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ 
                                              __html: condition.measuringProgress.questionnaires
                                                .replace(/\b(DASH)\b/g, '<a href="https://www.physio-pedia.com/DASH_Outcome_Measure" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(SPADI)\b/g, '<a href="https://www.physiotutors.com/questionnaires/shoulder-pain-disability-index-spadi/" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(ODI|Oswestry Disability Index)\b/g, '<a href="https://www.physio-pedia.com/Oswestry_Disability_Index" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(NPRS|Numeric Pain Rating Scale)\b/g, '<a href="https://www.physio-pedia.com/Numeric_Pain_Rating_Scale" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(VAS|Visual Analogue Scale)\b/g, '<a href="https://www.physio-pedia.com/Visual_Analogue_Scale" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(Roland-Morris)\b/g, '<a href="https://www.physio-pedia.com/Roland_Morris_Disability_Questionnaire" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(KOOS)\b/g, '<a href="https://www.physio-pedia.com/Knee_injury_and_Osteoarthritis_Outcome_Score" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(WOMAC)\b/g, '<a href="https://www.physio-pedia.com/Western_Ontario_and_McMaster_Universities_Osteoarthritis_Index_(WOMAC)" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(LEFS|Lower Extremity Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Lower_Extremity_Functional_Scale" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                                .replace(/\b(PSFS|Patient Specific Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Patient_Specific_Functional_Scale" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline hover:text-emerald-800 font-medium">$1</a>')
                                            }} />
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Activity Targets Card */}
                                    <div className="group relative bg-gradient-to-r from-teal-50/50 to-teal-50/20 rounded-xl p-6 border border-teal-100 hover:shadow-md transition-all">
                                      <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">Activity Targets</h3>
                                          <p className="text-slate-700 text-sm leading-relaxed">{condition.measuringProgress.activityTarget}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}


                          {condition.faqs && condition.faqs.length > 0 && (
                            <div data-section="faqs" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden scroll-mt-40">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/20 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent */}
                                <div 
                                  className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 cursor-pointer hover:from-blue-800 hover:to-blue-600 transition-all"
                                  onClick={() => toggleManagementSection('faqs')}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                        <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
                                      </div>
                                      <div>
                                        <h2 className="text-2xl font-medium tracking-tight leading-tight text-white">Frequently Asked Questions</h2>
                                        <p className="text-sm text-blue-200 mt-1">Common concerns and answers</p>
                                      </div>
                                    </div>
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                                      {expandedManagementSections['faqs'] ? (
                                        <ChevronUpIcon className="h-5 w-5 text-white" />
                                      ) : (
                                        <ChevronDownIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence>
                                  {expandedManagementSections['faqs'] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="p-8">
                                  <div className="space-y-5">
                                    {condition.faqs.map((faq, index) => {
                                      const colors = [
                                        { bg: 'from-blue-50/50 to-blue-50/20', border: 'border-blue-100', icon: 'from-blue-500 to-blue-600', text: 'text-blue-700', open: 'text-blue-800' },
                                        { bg: 'from-cyan-50/50 to-cyan-50/20', border: 'border-cyan-100', icon: 'from-cyan-500 to-cyan-600', text: 'text-cyan-700', open: 'text-cyan-800' },
                                        { bg: 'from-sky-50/50 to-sky-50/20', border: 'border-sky-100', icon: 'from-sky-500 to-sky-600', text: 'text-sky-700', open: 'text-sky-800' },
                                        { bg: 'from-indigo-50/50 to-indigo-50/20', border: 'border-indigo-100', icon: 'from-indigo-500 to-indigo-600', text: 'text-indigo-700', open: 'text-indigo-800' },
                                      ];
                                      const color = colors[index % colors.length];
                                      
                                      return (
                                        <details key={index} className={`group relative bg-gradient-to-r ${color.bg} rounded-xl p-6 border ${color.border} hover:shadow-md transition-all`}>
                                          <summary className="flex gap-4 cursor-pointer list-none">
                                            <div className="flex-shrink-0">
                                              <div className={`w-12 h-12 bg-gradient-to-br ${color.icon} rounded-xl flex items-center justify-center shadow-lg transition-transform group-open:rotate-12`}>
                                                <span className="text-white font-semibold text-lg">Q{index + 1}</span>
                                              </div>
                                            </div>
                                            <div className="flex-1">
                                              <h3 className={`text-xs font-semibold ${color.text} group-open:${color.open} uppercase tracking-wider transition-colors`}>
                                                {faq.question}
                                              </h3>
                                            </div>
                                          </summary>
                                          <div className="mt-4 ml-16">
                                            <p className="text-slate-700 text-sm leading-relaxed">
                                              {faq.answer}
                                            </p>
                                          </div>
                                        </details>
                                      );
                                    })}
                                  </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  )}
                </main>

                {/* Related Conditions - Now inline below content */}
                {relatedConditions.length > 0 && (
                  <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-medium text-slate-900 mb-4">Related Conditions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {relatedConditions.slice(0, 4).map((related) => (
                        <Link
                          key={related.slug}
                          href={`/conditions/${related.slug}`}
                          className="p-3 hover:bg-white rounded-lg transition-colors group text-center"
                        >
                          <p className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors text-sm">
                            {related.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white hover:text-white rounded-lg font-medium transition-all duration-300 shadow-premium-1 hover:shadow-premium-2 hover:scale-[1.02] group"
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
    </>
  );
}