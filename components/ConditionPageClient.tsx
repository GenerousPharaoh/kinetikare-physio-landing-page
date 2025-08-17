"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  LightBulbIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  CalendarIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';

interface ConditionPageClientProps {
  condition: Condition;
  relatedConditions: Condition[];
}

export default function ConditionPageClient({ 
  condition, 
  relatedConditions 
}: ConditionPageClientProps) {
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

      <main className="bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-28 pb-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08D57]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
                <Link href="/" className="hover:text-[#B08D57] transition-colors">
                  Home
                </Link>
                <ChevronRightIcon className="h-4 w-4" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors">
                  Conditions
                </Link>
                <ChevronRightIcon className="h-4 w-4" />
                <span className="text-slate-900 font-medium">{condition.name}</span>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                  {condition.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">Treatment</span>
                </h1>
                {condition.description && (
                  <p className="text-lg md:text-xl text-slate-600 mb-8">
                    {condition.description}
                  </p>
                )}

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Book Assessment
                    <CalendarIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold shadow-md hover:shadow-lg border border-slate-200 transition-all duration-300"
                  >
                    Ask a Question
                    <QuestionMarkCircleIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 border-y border-slate-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <ShieldCheckIcon className="h-6 w-6 text-[#B08D57]" />
                  <div className="text-left">
                    <p className="font-semibold text-slate-900">Evidence-Based Care</p>
                    <p className="text-sm text-slate-600">Research-driven treatment</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <AcademicCapIcon className="h-6 w-6 text-[#B08D57]" />
                  <div className="text-left">
                    <p className="font-semibold text-slate-900">Manual Therapy</p>
                    <p className="text-sm text-slate-600">Hands-on techniques</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-[#B08D57]" />
                  <div className="text-left">
                    <p className="font-semibold text-slate-900">Direct Billing</p>
                    <p className="text-sm text-slate-600">Most insurances accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Overview Section */}
                  {condition.overview && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <LightBulbIcon className="h-6 w-6 text-[#B08D57] mr-3" />
                        Understanding Your Condition
                      </h2>
                      <div className="prose prose-slate max-w-none">
                        {condition.overview.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-slate-600 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Biomechanics Section */}
                  {condition.biomechanics && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg border border-slate-100"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Why This Happens
                      </h2>
                      <div className="prose prose-slate max-w-none">
                        {condition.biomechanics.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-slate-600 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Common Misconceptions */}
                  {condition.commonMisconceptions && condition.commonMisconceptions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Common Misconceptions
                      </h2>
                      <div className="space-y-4">
                        {condition.commonMisconceptions.map((misconception, index) => {
                          const colonIndex = misconception.indexOf(':');
                          const myth = colonIndex > -1 ? misconception.substring(0, colonIndex).trim() : misconception;
                          const truth = colonIndex > -1 ? misconception.substring(colonIndex + 1).trim() : '';
                          
                          // If no truth part found, display the entire text as a single misconception
                          if (!truth && misconception) {
                            return (
                              <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                <p className="text-slate-600">
                                  ❌ {misconception}
                                </p>
                              </div>
                            );
                          }
                          
                          if (!truth) {
                            return null;
                          }
                          
                          return (
                            <div key={index} className="p-4 bg-slate-50 rounded-xl">
                              <p className="font-semibold text-slate-900 mb-2">
                                ❌ Myth: {myth}
                              </p>
                              <p className="text-slate-600">
                                ✅ Truth: {truth}
                              </p>
                            </div>
                          );
                        }).filter(Boolean)}
                      </div>
                    </motion.div>
                  )}

                  {/* Treatment Approach */}
                  {condition.treatmentApproach && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-8 shadow-lg border border-[#B08D57]/20"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">
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
                                <span className="font-semibold text-slate-900">{title}:</span>
                                <span className="text-slate-600 ml-2">{description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Recovery Timeline */}
                  {condition.timeline && condition.timeline.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <ClockIcon className="h-6 w-6 text-[#B08D57] mr-3" />
                        Expected Recovery Timeline
                      </h2>
                      <div className="space-y-6">
                        {condition.timeline.map((phase, index) => (
                          <div key={index} className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-2 bg-[#B08D57] rounded-full mt-2"></div>
                            {index < condition.timeline!.length - 1 && (
                              <div className="absolute left-0.5 top-2 w-0.5 h-full bg-[#B08D57]/30"></div>
                            )}
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-slate-900">{phase.phase}</h3>
                                <span className="text-sm text-[#B08D57] font-medium bg-[#B08D57]/10 px-3 py-1 rounded-full">
                                  {phase.duration}
                                </span>
                              </div>
                              <p className="text-slate-600">{phase.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* FAQs */}
                  {condition.faqs && condition.faqs.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-slate-50 rounded-2xl p-8 shadow-lg"
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-6">
                        {condition.faqs.map((faq, index) => (
                          <div key={index} className="border-b border-slate-200 pb-6 last:border-0">
                            <h3 className="font-semibold text-slate-900 mb-3 flex items-start gap-2">
                              <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                              {faq.question}
                            </h3>
                            <p className="text-slate-600 ml-7">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-8">
                    {/* When to Seek Help */}
                    {condition.whenToSeek && condition.whenToSeek.length > 0 && (
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">
                        When to Seek Help
                      </h3>
                      <ul className="space-y-3">
                        {condition.whenToSeek.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                        target="_blank"
                        className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Book Your Assessment
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                      </div>
                    )}

                    {/* Red Flags */}
                  {condition.redFlags && condition.redFlags.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Seek Immediate Care If:
                      </h3>
                      <ul className="space-y-2">
                        {condition.redFlags.map((flag, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-600 mt-0.5">•</span>
                            <span className="text-sm text-red-800">{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related Conditions */}
                  {relatedConditions.length > 0 && (
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">
                        Related Conditions
                      </h3>
                      <div className="space-y-3">
                        {relatedConditions.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/conditions/${related.slug}`}
                            className="block p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors">
                                  {related.name}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                  {related.description}
                                </p>
                              </div>
                              <ChevronRightIcon className="h-4 w-4 text-slate-400 group-hover:text-[#B08D57] transition-colors" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Continue Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">Care Journey</span>
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                  Take the next step in managing {condition.name.toLowerCase()}. I'll work with you to develop a personalized treatment plan tailored to your specific needs and goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  >
                    <span>Book Your Assessment Today</span>
                    <ChevronRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    <span>Have Questions?</span>
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>Direct Billing Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>Evening Appointments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>Personalized Treatment Plans</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}