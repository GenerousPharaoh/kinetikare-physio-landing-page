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
                          
                          {/* Evidence Snapshot - Premium Sophisticated Design */}
                          {condition.evidenceSnapshot && (
                            <div className="relative bg-gradient-to-r from-slate-50 to-white rounded-xl p-8 shadow-sm border border-slate-200 overflow-hidden">
                              {/* Subtle decorative element */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
                              
                              <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="p-2 bg-slate-100 rounded-lg">
                                    <BeakerIcon className="h-5 w-5 text-slate-700" />
                                  </div>
                                  <div>
                                    <h2 className="text-xl font-semibold text-slate-900">Evidence-Based Management</h2>
                                    <p className="text-xs text-slate-500 mt-0.5">Clinical strategies with proven outcomes</p>
                                  </div>
                                </div>
                                
                                <div className="grid gap-4">
                                  {/* Primary Strategy */}
                                  {(condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine) && (
                                    <div className="group relative">
                                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                      <div className="relative flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                                            <span className="text-emerald-600 font-semibold text-sm">1</span>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-sm font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">Primary Treatment</h3>
                                          <p className="text-slate-600 text-sm leading-relaxed">
                                            {condition.evidenceSnapshot.primaryStrategy || condition.evidenceSnapshot.firstLine}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Secondary Strategy */}
                                  {(condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging) && (
                                    <div className="group relative">
                                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                      <div className="relative flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold text-sm">2</span>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-sm font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">Complementary Approach</h3>
                                          <p className="text-slate-600 text-sm leading-relaxed">
                                            {condition.evidenceSnapshot.secondaryStrategy || condition.evidenceSnapshot.imaging}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Prevention Strategy */}
                                  {(condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management) && (
                                    <div className="group relative">
                                      <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                      <div className="relative flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                          <div className="w-8 h-8 bg-violet-50 rounded-full flex items-center justify-center">
                                            <span className="text-violet-600 font-semibold text-sm">3</span>
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-sm font-semibold text-slate-800 mb-1.5 uppercase tracking-wide">Prevention & Long-term Care</h3>
                                          <p className="text-slate-600 text-sm leading-relaxed">
                                            {condition.evidenceSnapshot.preventionStrategy || condition.evidenceSnapshot.management}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Sources with premium styling */}
                                {condition.evidenceSnapshot.sources && (
                                  <div className="mt-6 pt-4 border-t border-slate-200">
                                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span className="font-medium">Clinical Sources:</span> {condition.evidenceSnapshot.sources}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
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
                                    <p className="text-slate-600 text-sm">{condition.measuringProgress.questionnaires}</p>
                                  </div>
                                )}
                                <div>
                                  <h3 className="font-semibold text-slate-900 mb-2">Activity Targets</h3>
                                  <p className="text-slate-600 text-sm">{condition.measuringProgress.activityTarget}</p>
                                </div>
                                <p className="text-xs text-slate-500 mt-3 italic">
                                  Ontario quality standards encourage local outcome tracking.
                                </p>
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