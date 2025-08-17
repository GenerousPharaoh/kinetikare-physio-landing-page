"use client";

// <!-- UI REDESIGN 2024 - PREMIUM MEDICAL AESTHETIC -->

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  ChevronRightIcon,
  SparklesIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

interface ConditionCategory {
  title: string;
  subtitle: string;
  accent: string;
  gradient: string;
  textGradient: string;
  conditions: string[];
}

interface AdditionalService {
  title: string;
  description: string;
}

interface ConditionsPageClientProps {
  conditionCategories: ConditionCategory[];
  additionalServices: AdditionalService[];
}

export default function ConditionsPageClient({ 
  conditionCategories, 
  additionalServices
}: ConditionsPageClientProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Quick navigation sections
  const quickNavItems = [
    { name: "Spine & Back", tab: 0 },
    { name: "Shoulder", tab: 1 },
    { name: "Arm & Hand", tab: 2 },
    { name: "Hip & Pelvis", tab: 3 },
    { name: "Knee", tab: 4 },
    { name: "Foot & Ankle", tab: 5 },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* COMPLETELY REDESIGNED Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-16 bg-gradient-to-br from-slate-50 via-white to-[#B08D57]/5">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#B08D57]/25 via-[#D4AF37]/15 to-transparent rounded-full blur-[150px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/20 via-[#B08D57]/10 to-transparent rounded-full blur-[150px] opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Conditions I <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Treat</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                From acute injuries to chronic conditions, I provide personalized care tailored to your specific needs and recovery goals
              </p>

              {/* PREMIUM Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative group">
                  <div className="relative bg-white rounded-full border-2 border-slate-200 hover:border-[#B08D57] transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#B08D57]" />
                    <input
                      type="text"
                      placeholder="Search conditions (e.g., back pain, knee injury, arthritis...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-[#B08D57]/20 text-lg font-medium text-slate-900 placeholder-slate-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - NO SCROLLING ISSUES */}
      <section className="pt-8 pb-20 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* PREMIUM Navigation Tabs */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {quickNavItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.tab)}
                  className={`relative px-8 py-4 rounded-full font-bold text-base transition-all duration-500 transform hover:-translate-y-0.5 ${
                    activeTab === item.tab
                      ? 'text-white shadow-2xl'
                      : 'text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#B08D57] shadow-lg hover:text-[#B08D57]'
                  }`}
                >
                  {activeTab === item.tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
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
                          
                          return (
                            <Link 
                              key={index}
                              href={`/conditions/${mainCondition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
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
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-100 shadow-2xl">
                    {/* Header Section */}
                    <div className="text-center px-8 py-12 bg-gradient-to-r from-[#B08D57]/10 via-white to-[#D4AF37]/10 rounded-t-3xl">
                      <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {conditionCategories[activeTab].title}
                      </h2>
                      <p className="text-xl text-slate-700 font-light">
                        {conditionCategories[activeTab].subtitle}
                      </p>
                    </div>

                    {/* Conditions Grid - PREMIUM Design */}
                    <div className="p-8 lg:p-12">
                      <div className="grid md:grid-cols-2 gap-6 items-stretch">
                          {conditionCategories[activeTab].conditions.map((condition, index) => {
                            const parts = condition.split('(');
                            const mainCondition = parts[0].trim();
                            const details = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';
                            
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.3 }}
                                className="group"
                              >
                                <Link 
                                  href={`/conditions/${mainCondition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
                                  className="block h-full"
                                >
                                  <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#B08D57] hover:bg-gradient-to-br hover:from-white hover:to-[#B08D57]/5 transition-all duration-500 h-full min-h-[120px] cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transform">
                                    <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-black text-lg text-slate-900 group-hover:text-[#B08D57] transition-colors mb-1">
                                          {mainCondition}
                                        </h4>
                                        {details && (
                                          <p className="text-base text-slate-600 leading-relaxed">
                                            {details}
                                          </p>
                                        )}
                                      </div>
                                      <ChevronRightIcon className="w-5 h-5 text-[#B08D57] group-hover:translate-x-1 transition-transform" />
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
                Continue your recovery journey with a comprehensive assessment tailored to your specific needs and goals.
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