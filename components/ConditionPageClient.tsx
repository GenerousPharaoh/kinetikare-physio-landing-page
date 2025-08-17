"use client";

// <!-- UI REDESIGN 2024 - COMPLETE OVERHAUL -->

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

      <main className="bg-white">
        {/* Hero Section - COMPLETELY REDESIGNED */}
        <section className="relative pt-28 lg:pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-[#B08D57]/5">
          {/* New Premium Background Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#B08D57]/25 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[120px]"></div>
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">{condition.name}</span>
                  <span className="block mt-3 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Expert Treatment</span>
                </h1>
                {condition.description && (
                  <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                    {condition.description}
                  </p>
                )}

                {/* Quick Action Buttons - PREMIUM DESIGN */}
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B08D57] text-white rounded-full font-bold text-lg transition-all duration-500 shadow-2xl shadow-[#B08D57]/30 hover:shadow-[#B08D57]/50 hover:-translate-y-1 transform"
                  >
                    <span>Book Assessment Now</span>
                    <CalendarIcon className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg border-3 border-[#B08D57] hover:bg-[#B08D57] hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                  >
                    <span>Ask a Question</span>
                    <QuestionMarkCircleIcon className="ml-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - COMPLETELY REDESIGNED */}
        <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-[#B08D57]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <ShieldCheckIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-slate-900 mb-2">Evidence-Based Care</h3>
                      <p className="text-base text-slate-600 leading-relaxed">Research-driven treatment protocols</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-[#B08D57]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <AcademicCapIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-slate-900 mb-2">Manual Therapy</h3>
                      <p className="text-base text-slate-600 leading-relaxed">Expert hands-on techniques</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-[#B08D57]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <CheckCircleIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-slate-900 mb-2">Direct Billing</h3>
                      <p className="text-base text-slate-600 leading-relaxed">All major insurances accepted</p>
                    </div>
                  </div>
                </motion.div>
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
                      className="bg-white rounded-xl p-6 border border-slate-200"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                        <LightBulbIcon className="h-5 w-5 text-[#B08D57] mr-3" />
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
                      className="bg-white rounded-xl p-6 border border-slate-200"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 mb-6">
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
                      className="bg-white rounded-xl p-6 border border-slate-200"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 mb-6">
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
                      className="bg-[#B08D57]/5 rounded-xl p-6 border border-[#B08D57]/20"
                    >
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
                      className="bg-white rounded-xl p-6 border border-slate-200"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                        <ClockIcon className="h-5 w-5 text-[#B08D57] mr-3" />
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
                      className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 mb-6">
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
                      <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <h3 className="text-base font-semibold text-slate-900 mb-4">
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
                        className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-all duration-300"
                      >
                        Book Your Assessment
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                      </div>
                    )}

                    {/* Red Flags */}
                  {condition.redFlags && condition.redFlags.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="text-base font-semibold text-red-900 mb-4 flex items-center">
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
                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <h3 className="text-base font-semibold text-slate-900 mb-4">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                  Continue Your <span className="text-[#D4AF37]">Care Journey</span>
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                  Take the next step in managing {condition.name.toLowerCase()}. I'll work with you to develop a personalized treatment plan tailored to your specific needs and goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    <span>Book Your Assessment Today</span>
                    <ChevronRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300"
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
}// Force rebuild Sun 17 Aug 2025 12:13:43 EDT
