"use client";

// <!-- UI REDESIGN 2024 - PREMIUM MEDICAL AESTHETIC -->

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

interface ConditionCategory {
  title: string;
  subtitle: string;
  accent: string;
  gradient: string;
  textGradient: string;
  conditions: string[];
  conditionsData?: Array<{
    slug: string;
    name: string;
    description?: string;
  }>;
}

interface AdditionalService {
  title: string;
  description: string;
}

interface ConditionsPageClientProps {
  conditionCategories: ConditionCategory[];
  additionalServices: AdditionalService[];
}

// Component to handle search params logic
function ConditionsPageWithParams({ 
  conditionCategories, 
  additionalServices
}: ConditionsPageClientProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Quick navigation sections - moved up to be available in useEffect
  const quickNavItems = [
    { name: "Spine & Back", tab: 0 },
    { name: "Shoulder", tab: 1 },
    { name: "Arm & Hand", tab: 2 },
    { name: "Hip & Pelvis", tab: 3 },
    { name: "Knee", tab: 4 },
    { name: "Foot & Ankle", tab: 5 },
  ];

  // Remember the user's tab selection using localStorage only (removed URL params to fix build)
  useEffect(() => {
    // Fall back to localStorage (for returning users)
    const savedTab = localStorage.getItem('conditionsActiveTab');
    if (savedTab && !isNaN(Number(savedTab))) {
      const tabNumber = Number(savedTab);
      if (tabNumber >= 0 && tabNumber < conditionCategories.length) {
        setActiveTab(tabNumber);
      }
    }
  }, [conditionCategories.length]);

  // Save tab selection to localStorage when changed
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
    localStorage.setItem('conditionsActiveTab', tabIndex.toString());
  };

  // Filter conditions based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return conditionCategories;
    
    return conditionCategories.map(category => ({
      ...category,
      conditions: category.conditions.filter(condition =>
        condition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => 
      category.conditions.length > 0 ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, conditionCategories]);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* COMPLETELY REDESIGNED Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-8 lg:pb-10 bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #B08D57 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
              >
                <HeartIcon className="w-5 h-5 text-[#B08D57]" />
                <span className="text-sm font-medium text-gray-700">Treatment Areas</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
                Treatment <span className="font-semibold">Areas</span>
              </h1>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#B08D57]/40"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/40"></div>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
                Personalized care for acute injuries and chronic conditions, tailored to specific needs and recovery goals
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="pt-0 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Medical Disclaimer */}
          <MedicalDisclaimer />

          {/* Search Bar - matching treatments page style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative group">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#B08D57] transition-colors" />
              <input
                type="text"
                placeholder="Search conditions (e.g., back pain, knee injury, arthritis...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#B08D57] transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
              />
            </div>
          </motion.div>

          {/* PREMIUM Navigation Tabs */}
          <div className="max-w-6xl mx-auto mb-2">
            {/* Filter Label */}
            <p className="text-center text-sm text-slate-500 mb-2 font-medium">Filter by Body Region</p>
            {/* Add padding to prevent pill button cutoff */}
            <div className="flex flex-wrap justify-center gap-2">
              {quickNavItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleTabChange(item.tab)}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 ${
                    activeTab === item.tab
                      ? 'text-white shadow-2xl shadow-[#B08D57]/30'
                      : 'text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#B08D57] shadow-lg hover:shadow-xl hover:text-[#B08D57]'
                  }`}
                >
                  {activeTab === item.tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {searchQuery ? (
              // Search Results View
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Search Results for "{searchQuery}"
                  </h2>
                  <p className="text-slate-600 mt-2">
                    {filteredCategories.reduce((acc, cat) => acc + cat.conditions.length, 0)} conditions found
                  </p>
                </div>
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                    <p className="text-slate-600">No conditions found matching your search.</p>
                  </div>
                ) : (
                  filteredCategories.map((category) => (
                    <div key={category.title} className="bg-white rounded-2xl shadow-md border border-slate-100 p-8">
                      <h3 className="text-2xl font-bold mb-6 text-slate-900">
                        {category.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.conditions.map((condition, index) => {
                          const parts = condition.split('(');
                          const mainCondition = parts[0].trim();
                          const details = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';
                          
                          // Use the actual slug from conditionsData if available
                          const slug = category.conditionsData?.[index]?.slug || 
                            mainCondition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                          
                          return (
                            <Link 
                              key={index}
                              href={`/conditions/${slug}`}
                              className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group"
                            >
                              <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <span className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors">{mainCondition}</span>
                                {details && (
                                  <span className="text-sm text-slate-600 block mt-0.5">{details}</span>
                                )}
                              </div>
                              <ChevronRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#B08D57] transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              // Enhanced Tab View
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* PREMIUM Card Design - NO OVERFLOW */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-lg">
                    {/* Header Section - Much smaller */}
                    <div className="px-6 py-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900">
                        {conditionCategories[activeTab].title}
                      </h2>
                    </div>

                    {/* Conditions Grid - PREMIUM Design */}
                    <div className="p-4 lg:p-6">
                      <div className="grid md:grid-cols-2 gap-3 items-stretch">
                          {conditionCategories[activeTab].conditions.map((condition, index) => {
                            const parts = condition.split('(');
                            const mainCondition = parts[0].trim();
                            const details = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';
                            
                            // Use the actual slug from conditionsData if available
                            const slug = conditionCategories[activeTab].conditionsData?.[index]?.slug || 
                              mainCondition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                            
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.3 }}
                                className="group"
                              >
                                <Link 
                                  href={`/conditions/${slug}`}
                                  className="block h-full"
                                >
                                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#B08D57] hover:bg-[#B08D57]/5 transition-all duration-300 h-full cursor-pointer hover:shadow-md transform hover:-translate-y-0.5">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="w-5 h-5 text-white" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-base text-slate-900 group-hover:text-[#B08D57] transition-colors">
                                          {mainCondition}
                                        </h4>
                                        {details && (
                                          <p className="text-sm text-slate-600 mt-0.5">
                                            {details}
                                          </p>
                                        )}
                                      </div>
                                      <ChevronRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#B08D57] transition-all" />
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* Additional Services - Premium Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                Additional Treatment <span className="text-[#B08D57]">Areas</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive care for complex cases and unique rehabilitation needs
              </p>
            </motion.div>

            {/* Premium Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <div className="relative bg-white rounded-xl p-8 border border-slate-200 hover:border-[#B08D57]/30 transition-all duration-300 h-full">
                    {/* Number Badge */}
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#B08D57]/10 rounded-lg mb-4">
                        <span className="text-[#B08D57] font-semibold text-lg">{index + 1}</span>
                      </div>
                      
                      <h3 className="font-semibold text-lg text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Ready to <span className="text-[#D4AF37]">Move Forward?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                If this page matches what you are dealing with and you want a clear plan, book an assessment or send a question first.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-all duration-300"
                >
                  <span>Book Your Assessment</span>
                  <ChevronRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span>Get in Touch First</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Force rebuild - Fixed pill button cutoff and spacing issues
export default function ConditionsPageClient(props: ConditionsPageClientProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConditionsPageWithParams {...props} />
    </Suspense>
  );
}