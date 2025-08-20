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

        {/* Tab Navigation - Premium Design */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <nav className="flex gap-0 overflow-x-auto scrollbar-hide">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-4 sm:px-6 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? 'text-[#B08D57]'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span>{tab.label}</span>
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B08D57]"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
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
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                What's Happening in Your Body
                              </h2>
                              <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                  {condition.pathophysiology}
                                </p>
                              </div>
                            </div>
                          )}

                          {condition.overview && !condition.pathophysiology && (
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                Understanding Your Condition
                              </h2>
                              <div className="prose prose-slate max-w-none">
                                {condition.overview.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-slate-600 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.biomechanics && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                Why This Happens
                              </h2>
                              <div className="prose prose-slate max-w-none">
                                {condition.biomechanics.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="text-slate-600 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                          
                        </div>
                      )}

                      {/* Symptoms Tab */}
                      {activeTab === 'symptoms' && (
                        <div className="space-y-6">
                          {condition.clinicalPresentation && (
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
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
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                Similar Conditions
                              </h2>
                              <div className="space-y-4">
                                {condition.differentialDiagnosis.map((diff, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                    <h3 className="font-medium text-slate-900 mb-1">{diff.condition}</h3>
                                    <p className="text-sm text-slate-600">
                                      {diff.distinguishingFeatures}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                When to Seek Help
                              </h2>
                              <ul className="space-y-2">
                                {condition.whenToSeek.map((item, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 bg-[#B08D57] rounded-full flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Treatment Tab */}
                      {activeTab === 'treatment' && (
                        <div className="space-y-6">
                          {condition.treatmentApproach && (
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
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
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Treatment Evidence
                              </h2>
                              <div className="space-y-4">
                                {condition.evidenceBasedTreatment.map((treatment, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                    <h3 className="font-medium text-slate-900 mb-1">{treatment.approach}</h3>
                                    <p className="text-slate-600 text-sm">{treatment.evidence}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.timeline && condition.timeline.length > 0 && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Recovery Timeline
                              </h2>
                              <div className="space-y-6">
                                {condition.timeline.map((phase, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                    <h3 className="font-medium text-slate-900 mb-1">
                                      {phase.phase} <span className="font-normal text-slate-500">• {phase.duration}</span>
                                    </h3>
                                    <p className="text-slate-600">{phase.description}</p>
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
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Research Evidence
                              </h2>
                              <div className="space-y-6">
                                {condition.keyResearch.map((research, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                    <h3 className="font-medium text-slate-900 mb-1">
                                      {research.title} <span className="text-slate-500 font-normal">({research.year})</span>
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-2">{research.findings}</p>
                                    <p className="text-sm text-slate-700">
                                      {research.relevance}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.researchInsights && condition.researchInsights.length > 0 && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Clinical Insights
                              </h2>
                              <div className="space-y-4">
                                {condition.researchInsights.map((insight, index) => {
                                  const colonIndex = insight.indexOf(':');
                                  const topic = colonIndex > -1 ? insight.substring(0, colonIndex).trim() : '';
                                  const finding = colonIndex > -1 ? insight.substring(colonIndex + 1).trim() : insight;
                                  
                                  return (
                                    <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                      {topic ? (
                                        <>
                                          <h3 className="font-medium text-slate-900 mb-1">{topic}</h3>
                                          <p className="text-slate-600 text-sm">{finding}</p>
                                        </>
                                      ) : (
                                        <p className="text-slate-600">{finding}</p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Management Tab */}
                      {activeTab === 'self-care' && (
                        <div className="space-y-6">
                          {condition.selfManagement && condition.selfManagement.length > 0 && (
                            <div className="mb-8">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Management Strategies
                              </h2>
                              <div className="space-y-6">
                                {condition.selfManagement.map((strategy, index) => (
                                  <div key={index} className="pl-4 border-l-2 border-[#B08D57]/30">
                                    <h3 className="font-medium text-slate-900 mb-2">{strategy.strategy}</h3>
                                    <p className="text-slate-600 text-sm">{strategy.rationale}</p>
                                    {strategy.precautions && strategy.precautions.length > 0 && (
                                      <ul className="mt-3 space-y-1 text-sm text-slate-500">
                                        {strategy.precautions.map((precaution, pIndex) => (
                                          <li key={pIndex} className="flex items-start gap-2">
                                            <span className="text-amber-600 mt-0.5">•</span>
                                            <span>{precaution}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {condition.prognosis && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-4">
                                Prognosis
                              </h2>
                              
                              <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 mb-4">{condition.prognosis.timeline}</p>
                                
                                {condition.prognosis.naturalHistory && (
                                  <p className="text-slate-600 mb-4">{condition.prognosis.naturalHistory}</p>
                                )}
                                
                                {condition.prognosis.factors && condition.prognosis.factors.length > 0 && (
                                  <div>
                                    <p className="font-medium text-slate-900 mb-2">Key factors for recovery:</p>
                                    <ul className="space-y-1">
                                      {condition.prognosis.factors.map((factor, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                                          <span className="text-[#B08D57] mt-0.5">•</span>
                                          <span>{factor}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}



                          {condition.faqs && condition.faqs.length > 0 && (
                            <div className="mb-8 pt-8 border-t border-slate-200">
                              <h2 className="text-2xl font-light text-slate-900 mb-6">
                                Common Questions
                              </h2>
                              <div className="space-y-4">
                                {condition.faqs.map((faq, index) => (
                                  <details key={index} className="group">
                                    <summary className="flex items-start gap-3 cursor-pointer list-none">
                                      <div className="mt-1 h-1.5 w-1.5 bg-[#B08D57] rounded-full flex-shrink-0" />
                                      <span className="font-medium text-slate-900 group-open:text-[#B08D57] transition-colors">
                                        {faq.question}
                                      </span>
                                    </summary>
                                    <p className="mt-2 ml-5 text-slate-600">{faq.answer}</p>
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

                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section 
          className="py-12 bg-slate-900" 
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