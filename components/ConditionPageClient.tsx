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
    { id: 'self-care', label: 'Self-Care', icon: HeartIcon },
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

      <div className="bg-white min-h-screen">
        {/* Minimal Hero with Breadcrumbs */}
        <section className="pt-24 pb-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
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

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {condition.name}
              </h1>
              {condition.description && (
                <p className="text-sm md:text-base text-slate-500 max-w-3xl">
                  {condition.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Small Red Flags Disclaimer Button */}
        {((condition.clinicalRedFlags && condition.clinicalRedFlags.length > 0) || 
          (condition.redFlags && condition.redFlags.length > 0)) && (
          <div className="bg-white border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto py-2">
                <details className="group">
                  <summary className="flex items-center gap-2 cursor-pointer list-none text-xs text-red-700 hover:text-red-800 transition-colors">
                    <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                    <span className="underline">Important: When to seek immediate medical attention</span>
                    <ChevronDownIcon className="h-3.5 w-3.5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="grid md:grid-cols-2 gap-2">
                      {condition.clinicalRedFlags ? (
                        condition.clinicalRedFlags.map((flag, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs">
                            <div className="mt-1 h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                            <div>
                              <p className="font-medium text-red-900">{flag.sign}</p>
                              <p className="text-red-700 mt-0.5">{flag.action}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        condition.redFlags?.map((flag, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs">
                            <div className="mt-1 h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-red-800">{flag}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
                          activeTab === tab.id
                            ? 'bg-[#B08D57] text-white shadow-md'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
                <div className="hidden lg:flex items-center gap-3">
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium text-sm transition-colors"
                  >
                    Book Now
                    <ArrowRightIcon className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
                {/* Main Content - min-w-0 prevents overflow */}
                <main className="relative min-w-0">
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
                                What's Happening in Your Body
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
                                Why This Happens
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
                          
                          {/* Evidence Snapshot - Moved to Overview Tab */}
                          {condition.evidenceSnapshot && (
                            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                              <div className="flex items-start gap-3">
                                <BeakerIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <h2 className="font-semibold text-blue-900 mb-2">Evidence Snapshot</h2>
                                  <ul className="space-y-1.5 text-sm text-blue-800">
                                    <li className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>{condition.evidenceSnapshot.firstLine}</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>{condition.evidenceSnapshot.imaging}</span>
                                    </li>
                                    <li className="flex items-start">
                                      <span className="mr-2">•</span>
                                      <span>{condition.evidenceSnapshot.management}</span>
                                    </li>
                                  </ul>
                                  {condition.evidenceSnapshot.sources && (
                                    <p className="text-xs text-blue-600 mt-3 italic">
                                      Sources: {condition.evidenceSnapshot.sources}
                                    </p>
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
                                    <div className="flex items-start justify-between mb-2">
                                      <h3 className="font-semibold text-slate-900">{treatment.approach}</h3>
                                      {treatment.effectivenessLevel && (
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                          treatment.effectivenessLevel === 'strong' 
                                            ? 'bg-green-100 text-green-800' 
                                            : treatment.effectivenessLevel === 'moderate'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-blue-100 text-blue-800'
                                        }`}>
                                          {treatment.effectivenessLevel} evidence
                                        </span>
                                      )}
                                    </div>
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

                      {/* Self-Care Tab */}
                      {activeTab === 'self-care' && (
                        <div className="space-y-6">
                          {condition.selfManagement && condition.selfManagement.length > 0 && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Self-Management Strategies
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

                          {/* Access and Hours Section */}
                          {condition.accessAndHours && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                                Access and Hours
                              </h2>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <CalendarIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-slate-900 text-sm">Location</p>
                                    <p className="text-sm text-slate-600">{condition.accessAndHours.location}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <ClockIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-slate-900 text-sm">Hours</p>
                                    <p className="text-sm text-slate-600">{condition.accessAndHours.hours}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-slate-900 text-sm">Parking</p>
                                    <p className="text-sm text-slate-600">{condition.accessAndHours.parking}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <HeartIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-slate-900 text-sm">Accessibility</p>
                                    <p className="text-sm text-slate-600">{condition.accessAndHours.accessibility}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <ArrowRightIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-slate-900 text-sm">Booking</p>
                                    <p className="text-sm text-slate-600">{condition.accessAndHours.booking}</p>
                                  </div>
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
                <aside className="hidden lg:block sticky top-24 self-start z-0">
                  <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-xl p-6 border border-[#B08D57]/20">
                      <h3 className="font-semibold text-slate-900 mb-4">Ready to Get Started?</h3>
                      <p className="text-sm text-slate-600 mb-4">If this page matches what you are dealing with and you want a clear plan, book an assessment or send a question first.</p>
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
                      <h3 className="font-semibold text-slate-900 mb-4">What to Expect</h3>
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

{/* Floating CTA removed - using global FloatingButtons component instead */}

        {/* Bottom CTA Section - Simplified */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Get personalized treatment for {condition.name.toLowerCase()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-colors"
                >
                  Book Your Assessment
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}