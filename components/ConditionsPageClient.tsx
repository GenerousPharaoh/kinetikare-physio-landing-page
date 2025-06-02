"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
    <main className="min-h-screen bg-white">
      {/* Streamlined Hero Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #B08D57 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Conditions I Treat
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Comprehensive physiotherapy care for injuries, chronic conditions, and post-surgical rehabilitation
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search conditions (e.g., back pain, knee injury, arthritis...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:border-transparent text-slate-700 placeholder-slate-400 shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabbed Interface */}
      <section className="pt-0 pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sticky Navigation Tabs */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-8">
            <div className="flex overflow-x-auto scrollbar-hide space-x-2 sm:space-x-4 justify-center">
              {quickNavItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.tab)}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === item.tab
                      ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {searchQuery ? (
              // Search Results View
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Search Results for "{searchQuery}"
                </h2>
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-slate-600">No conditions found matching your search.</p>
                  </div>
                ) : (
                  filteredCategories.map((category) => (
                    <div key={category.title} className="bg-slate-50 rounded-2xl p-8">
                      <h3 className={`text-2xl font-bold mb-6 ${category.textGradient}`}>
                        {category.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.conditions.map((condition, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <ChevronRightIcon className="h-5 w-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              // Normal Tab View
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200/50 shadow-lg">
                    {/* Category Header */}
                    <div className="text-center mb-10">
                      <h2 className={`text-4xl font-bold mb-4 ${conditionCategories[activeTab].textGradient}`}>
                        {conditionCategories[activeTab].title}
                      </h2>
                      <p className="text-xl text-slate-600 mb-6">
                        {conditionCategories[activeTab].subtitle}
                      </p>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mx-auto"></div>
                    </div>

                    {/* Conditions Grid */}
                    <div className="max-w-5xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-4">
                        {conditionCategories[activeTab].conditions.map((condition, index) => {
                          const parts = condition.split('(');
                          const mainCondition = parts[0].trim();
                          const details = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';
                          
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group"
                            >
                              <div className="bg-white rounded-xl p-5 border border-slate-200/50 hover:border-[#B08D57]/30 hover:shadow-md transition-all duration-300 h-full">
                                <div className="flex items-start space-x-3">
                                  <div className="mt-1.5">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]"></div>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                                      {mainCondition}
                                    </h4>
                                    {details && (
                                      <p className="text-sm text-slate-600 mt-1">
                                        {details}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
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

      {/* Additional Services - Improved Grid Alignment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Additional Treatment Areas
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive care for complex cases and specialized rehabilitation needs
              </p>
            </div>

            {/* Improved Service Grid with consistent heights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl p-6 border border-slate-200/50 hover:shadow-lg hover:border-[#B08D57]/30 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-2 text-lg">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] relative">
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Move Forward Together?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Book your personalized assessment and let&apos;s work toward your recovery goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#B08D57] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book Your Assessment
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300"
              >
                Contact Me First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}