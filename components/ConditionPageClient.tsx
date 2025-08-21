"use client";

// <!-- REDESIGNED 2025 - ALL CRITICAL ISSUES FIXED -->

import React, { useState, useEffect } from 'react';
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
  BookOpenIcon,
  ExclamationCircleIcon
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
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

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
    { id: 'treatment', label: 'Treatment', icon: AcademicCapIcon },
    { id: 'research', label: 'Research', icon: ChartBarIcon },
    { id: 'self-care', label: 'Management', icon: HeartIcon },
  ].filter(tab => {
    // Only show tabs that have content
    switch(tab.id) {
      case 'overview':
        return condition.pathophysiology || condition.overview || condition.biomechanics;
      case 'symptoms':
        return condition.clinicalPresentation || condition.differentialDiagnosis || condition.whenToSeek;
      case 'treatment':
        return condition.treatmentApproach || condition.evidenceBasedTreatment || condition.timeline;
      case 'research':
        return condition.keyResearch || condition.researchInsights;
      case 'self-care':
        return condition.selfManagement || condition.prognosis || condition.faqs;
      default:
        return false;
    }
  });


  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

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

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1.5">
                {condition.name}
              </h1>
              {condition.description && (
                <p className="text-sm md:text-base text-slate-500 max-w-3xl">
                  {condition.description}
                </p>
              )}
              
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
                          <div key={index} className="flex items-start gap-2.5 text-xs">
                            <div className="mt-[5px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-medium text-red-900 leading-tight">{flag.sign}</p>
                              <p className="text-red-700 mt-0.5 leading-tight">{flag.action}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        condition.redFlags?.map((flag, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs">
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

        {/* Tab Navigation */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="-mx-4 sm:mx-0">
                <nav className="flex gap-1 sm:gap-2 overflow-x-auto py-3 sm:py-4 px-4 sm:px-0 scrollbar-hide">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all min-w-fit ${
                          activeTab === tab.id
                            ? 'bg-[#B08D57] text-white shadow-md'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <section className="pt-6 pb-0 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">
                {/* Main Content */}
                <main className="relative min-w-0 w-full">
                  {/* Coming Soon Message - Shown when no detailed content */}
                  {!hasDetailedContent ? (
                    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                      <div className="flex flex-col items-center text-center">
                        <ClockIcon className="h-16 w-16 text-slate-400 mb-4" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                          Content Coming Soon
                        </h2>
                        <p className="text-slate-600 max-w-2xl mb-6">
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
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Overview Tab */}
                      {activeTab === 'overview' && (
                        <div className="space-y-6">
                          {condition.pathophysiology && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                The Science of {condition.name || 'Your Condition'}
                              </h2>
                              <p className="text-slate-600 leading-relaxed">
                                {condition.pathophysiology}
                              </p>
                            </div>
                          )}

                          {condition.overview && !condition.pathophysiology && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Understanding Your Condition
                              </h2>
                              <div className="space-y-4">
                                {condition.overview.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-slate-600 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.biomechanics && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Contributing Factors
                              </h2>
                              <div className="space-y-4">
                                {condition.biomechanics.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-slate-600 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Evidence Snapshot - Elevated Professional Design */}
                          {condition.evidenceSnapshot && (
                            <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                              {/* Premium gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30 pointer-events-none"></div>
                              
                              <div className="relative">
                                {/* Header with gradient accent */}
                                <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                                      <BeakerIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                      <h2 className="text-2xl font-bold text-white">Evidence-Based Management</h2>
                                      <p className="text-sm text-slate-200 mt-1">Research-validated treatment strategies</p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-8">
                                  <div className="grid gap-5">
                                    {/* Primary Strategy Card */}
                                    {(condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine) && (
                                      <div className="group relative bg-gradient-to-r from-emerald-50/50 to-emerald-50/20 rounded-xl p-6 border border-emerald-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Primary Treatment Approach</h3>
                                            <p className="text-slate-700 text-sm leading-relaxed">
                                              {condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Secondary Strategy Card */}
                                    {(condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging) && (
                                      <div className="group relative bg-gradient-to-r from-blue-50/50 to-blue-50/20 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Complementary Interventions</h3>
                                            <p className="text-slate-700 text-sm leading-relaxed">
                                              {condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {/* Prevention Strategy Card */}
                                    {(condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management) && (
                                      <div className="group relative bg-gradient-to-r from-violet-50/50 to-violet-50/20 rounded-xl p-6 border border-violet-100 hover:shadow-md transition-all">
                                        <div className="flex gap-4">
                                          <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="flex-1">
                                            <h3 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-2">Prevention & Long-term Management</h3>
                                            <p className="text-slate-700 text-sm leading-relaxed">
                                              {condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  
                                  {/* Sources with elegant styling */}
                                  {condition.evidenceSnapshot.sources && (
                                    <div className="mt-8 pt-6 border-t border-slate-200">
                                      <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span className="font-semibold">Evidence Base:</span>
                                        <span>{condition.evidenceSnapshot.sources}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Symptoms Tab */}
                      {activeTab === 'symptoms' && (
                        <div className="space-y-6">
                          {condition.clinicalPresentation && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Clinical Presentation
                              </h2>
                              
                              {condition.clinicalPresentation.primarySymptoms && (
                                <div className="mb-6">
                                  <h3 className="font-semibold text-slate-900 mb-3">Primary Symptoms</h3>
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {condition.clinicalPresentation.primarySymptoms.map((symptom, index) => (
                                      <div key={index} className="flex items-start gap-3">
                                        <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600">{symptom}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {condition.clinicalPresentation.associatedSymptoms && (
                                <div className="mb-6">
                                  <h3 className="font-semibold text-slate-900 mb-3">Associated Symptoms</h3>
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {condition.clinicalPresentation.associatedSymptoms.map((symptom, index) => (
                                      <div key={index} className="flex items-start gap-3">
                                        <div className="mt-2 h-1.5 w-1.5 bg-slate-400 rounded-full" />
                                        <span className="text-slate-600">{symptom}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {condition.clinicalPresentation.typicalPattern && (
                                <div className="p-4 bg-[#B08D57]/5 rounded-lg border border-[#B08D57]/20">
                                  <h3 className="font-semibold text-slate-900 mb-2">Typical Pattern</h3>
                                  <p className="text-slate-600">{condition.clinicalPresentation.typicalPattern}</p>
                                </div>
                              )}
                            </div>
                          )}

                          {condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Differential Diagnosis
                              </h2>
                              <p className="text-slate-600 mb-4">Conditions with similar presentations:</p>
                              <div className="space-y-3">
                                {condition.differentialDiagnosis.map((diff, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-1">{diff.condition}</h3>
                                    <p className="text-sm text-slate-600">
                                      <span className="font-medium">Key differences:</span> {diff.distinguishingFeatures}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                When to Seek Professional Help
                              </h2>
                              <div className="space-y-2">
                                {condition.whenToSeek.map((item, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Treatment Tab */}
                      {activeTab === 'treatment' && (
                        <div className="space-y-6">
                          {condition.treatmentApproach && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                {condition.treatmentApproach.title}
                              </h2>
                              <p className="text-slate-600 mb-6">
                                {condition.treatmentApproach.description}
                              </p>
                              <div className="space-y-3">
                                {condition.treatmentApproach.techniques.map((technique, index) => {
                                  const [title, description] = technique.split(': ');
                                  return (
                                    <div key={index} className="flex items-start gap-3">
                                      <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <span className="font-semibold text-slate-900">{title}</span>
                                        {description && <span className="text-slate-600">: {description}</span>}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {condition.evidenceBasedTreatment && condition.evidenceBasedTreatment.length > 0 && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Evidence-Based Treatment Options
                              </h2>
                              <div className="space-y-4">
                                {condition.evidenceBasedTreatment.map((treatment, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-2">{treatment.approach}</h3>
                                    <p className="text-slate-600 text-sm">{treatment.evidence}</p>
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
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-6">
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
                                        <h3 className="font-semibold text-slate-900">{phase.phase}</h3>
                                        <span className="text-sm text-[#B08D57] bg-[#B08D57]/10 px-2 py-1 rounded">
                                          {phase.duration}
                                        </span>
                                      </div>
                                      <p className="text-slate-600">{phase.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Research Tab */}
                      {activeTab === 'research' && (
                        <div className="space-y-6">
                          {condition.keyResearch && condition.keyResearch.length > 0 && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Key Research & Evidence
                              </h2>
                              <div className="space-y-4">
                                {condition.keyResearch.map((research, index) => (
                                  <div key={index} className="border-l-4 border-[#B08D57]/30 pl-4 hover:border-[#B08D57] transition-colors">
                                    <div className="flex items-start justify-between mb-1">
                                      <h3 className="font-semibold text-slate-900 text-sm">{research.title}</h3>
                                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{research.year}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-2">{research.findings}</p>
                                    <p className="text-xs text-[#B08D57] font-medium">
                                      Clinical relevance: {research.relevance}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              {condition.keyResearch.length === 1 && (
                                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                                  <p className="text-xs text-amber-800">
                                    <ExclamationCircleIcon className="inline h-4 w-4 mr-1" />
                                    Additional research studies are being reviewed to strengthen the evidence base for this condition.
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {condition.researchInsights && condition.researchInsights.length > 0 && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Research Insights
                              </h2>
                              <div className="space-y-4">
                                {condition.researchInsights.map((insight, index) => {
                                  const colonIndex = insight.indexOf(':');
                                  const topic = colonIndex > -1 ? insight.substring(0, colonIndex).trim() : '';
                                  const finding = colonIndex > -1 ? insight.substring(colonIndex + 1).trim() : insight;
                                  
                                  return (
                                    <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                                      {topic ? (
                                        <>
                                          <h3 className="font-semibold text-slate-900 mb-2">{topic}</h3>
                                          <p className="text-slate-600">{finding}</p>
                                        </>
                                      ) : (
                                        <p className="text-slate-600">{finding}</p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              <p className="text-xs text-slate-500 mt-4 italic">
                                Based on current physiotherapy research and clinical guidelines
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Management Tab */}
                      {activeTab === 'self-care' && (
                        <div className="space-y-6">
                          {condition.selfManagement && condition.selfManagement.length > 0 && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Management Strategies
                              </h2>
                              <div className="space-y-4">
                                {condition.selfManagement.map((strategy, index) => (
                                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-2">{strategy.strategy}</h3>
                                    <p className="text-slate-600 text-sm mb-3">{strategy.rationale}</p>
                                    {strategy.precautions && strategy.precautions.length > 0 && (
                                      <div className="mt-3 p-3 bg-amber-50 rounded border border-amber-200">
                                        <p className="text-xs font-medium text-amber-900 mb-1">Important Precautions:</p>
                                        <ul className="text-xs text-amber-800 space-y-1">
                                          {strategy.precautions.map((precaution, pIndex) => (
                                            <li key={pIndex}>• {precaution}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {strategy.strategy.toLowerCase().includes('nutrition') && (
                                      <p className="text-xs text-slate-500 mt-2 italic">
                                        Note: Nutritional advice is general guidance. Consult a registered dietitian for personalized nutrition plans.
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.prognosis && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Prognosis & Recovery
                              </h2>
                              
                              <div className="space-y-4">
                                <div>
                                  <h3 className="font-semibold text-slate-900 mb-2">Expected Timeline</h3>
                                  <p className="text-slate-600">{condition.prognosis.timeline}</p>
                                </div>
                                
                                {condition.prognosis.naturalHistory && (
                                  <div>
                                    <h3 className="font-semibold text-slate-900 mb-2">Natural History</h3>
                                    <p className="text-slate-600">{condition.prognosis.naturalHistory}</p>
                                  </div>
                                )}
                                
                                {condition.prognosis.factors && condition.prognosis.factors.length > 0 && (
                                  <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Factors Affecting Recovery</h3>
                                    <div className="grid md:grid-cols-2 gap-2">
                                      {condition.prognosis.factors.map((factor, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                          <CheckCircleIcon className="h-4 w-4 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                          <span className="text-sm text-slate-600">{factor}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Measuring Progress Section */}
                          {condition.measuringProgress && (
                            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Measuring Progress
                              </h2>
                              <div className="space-y-3">
                                <div>
                                  <h3 className="font-semibold text-slate-900 mb-2">Day-to-Day Tracking</h3>
                                  <p className="text-slate-600 text-sm">{condition.measuringProgress.dayToDay}</p>
                                </div>
                                {condition.measuringProgress.questionnaires && (
                                  <div>
                                    <h3 className="font-semibold text-slate-900 mb-2">Assessment Tools</h3>
                                    <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ 
                                      __html: condition.measuringProgress.questionnaires
                                        .replace(/\b(DASH)\b/g, '<a href="https://www.physio-pedia.com/DASH_Outcome_Measure" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(SPADI)\b/g, '<a href="https://www.physiotutors.com/questionnaires/shoulder-pain-disability-index-spadi/" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(ODI|Oswestry Disability Index)\b/g, '<a href="https://www.physio-pedia.com/Oswestry_Disability_Index" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(NPRS|Numeric Pain Rating Scale)\b/g, '<a href="https://www.physio-pedia.com/Numeric_Pain_Rating_Scale" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(VAS|Visual Analogue Scale)\b/g, '<a href="https://www.physio-pedia.com/Visual_Analogue_Scale" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(Roland-Morris)\b/g, '<a href="https://www.physio-pedia.com/Roland_Morris_Disability_Questionnaire" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(KOOS)\b/g, '<a href="https://www.physio-pedia.com/Knee_injury_and_Osteoarthritis_Outcome_Score" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(WOMAC)\b/g, '<a href="https://www.physio-pedia.com/Western_Ontario_and_McMaster_Universities_Osteoarthritis_Index_(WOMAC)" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(LEFS|Lower Extremity Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Lower_Extremity_Functional_Scale" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                        .replace(/\b(PSFS|Patient Specific Functional Scale)\b/g, '<a href="https://www.physio-pedia.com/Patient_Specific_Functional_Scale" target="_blank" rel="noopener noreferrer" class="underline hover:text-slate-800">$1</a>')
                                    }} />
                                  </div>
                                )}
                                <div>
                                  <h3 className="font-semibold text-slate-900 mb-2">Activity Targets</h3>
                                  <p className="text-slate-600 text-sm">{condition.measuringProgress.activityTarget}</p>
                                </div>
                              </div>
                            </div>
                          )}


                          {condition.faqs && condition.faqs.length > 0 && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Frequently Asked Questions
                              </h2>
                              <div className="space-y-4">
                                {condition.faqs.map((faq, index) => (
                                  <details key={index} className="group">
                                    <summary className="flex items-start gap-2 cursor-pointer list-none">
                                      <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                      <span className="font-semibold text-slate-900 group-open:text-[#B08D57] transition-colors">
                                        {faq.question}
                                      </span>
                                    </summary>
                                    <p className="mt-3 ml-7 text-slate-600">{faq.answer}</p>
                                  </details>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  )}
                </main>

                {/* Sidebar - Sticky on desktop with proper z-index */}
                <aside className="hidden xl:block sticky top-24 self-start z-0">
                  <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-xl p-6 border border-[#B08D57]/20">
                      <h3 className="font-semibold text-slate-900 mb-4">Next Steps</h3>
                      <p className="text-sm text-slate-600 mb-4">Book an assessment to discuss your specific situation.</p>
                      <div className="space-y-3">
                        <Link
                          href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                          target="_blank"
                          className="w-full flex items-center justify-center px-4 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-colors"
                        >
                          Book Assessment
                          <CalendarIcon className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                          href="/#contact"
                          className="w-full flex items-center justify-center px-4 py-3 bg-white hover:bg-slate-50 text-slate-900 rounded-lg font-medium border border-slate-300 transition-colors"
                        >
                          Ask a Question
                          <QuestionMarkCircleIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Related Conditions */}
                    {relatedConditions.length > 0 && (
                      <div className="bg-white rounded-xl p-6 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-4">Related Conditions</h3>
                        <div className="space-y-2">
                          {relatedConditions.slice(0, 4).map((related) => (
                            <Link
                              key={related.slug}
                              href={`/conditions/${related.slug}`}
                              className="block p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                            >
                              <p className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors text-sm">
                                {related.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* What to Expect */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-4">Your Treatment Journey</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <ClockIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">First Visit</p>
                            <p className="text-xs text-slate-600 mt-0.5">Clarify patterns, test key movements, leave with 2-3 exercises</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <ChartBarIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">Early Phase</p>
                            <p className="text-xs text-slate-600 mt-0.5">Reduce symptom spikes, build tolerance for daily activities</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <ArrowRightIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">Progression</p>
                            <p className="text-xs text-slate-600 mt-0.5">Load increases planned and reviewed based on your responses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-colors"
                >
                  Book Assessment
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
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