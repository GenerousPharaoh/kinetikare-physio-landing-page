"use client";

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
    <main className="bg-gradient-to-b from-white to-slate-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 lg:py-16 pb-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08D57]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Conditions I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">Treat</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                From acute injuries to chronic conditions, I provide personalized care tailored to your specific needs and recovery goals
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/20 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/50">
                    <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search conditions (e.g., back pain, knee injury, arthritis...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-transparent rounded-2xl focus:outline-none text-slate-700 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Enhanced Tabbed Interface */}
      <section className="pt-0 pb-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Navigation Tabs */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {quickNavItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.tab)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === item.tab
                      ? 'text-white shadow-lg scale-105'
                      : 'text-slate-700 bg-white hover:bg-slate-50 shadow-md hover:shadow-lg border border-slate-200 hover:border-[#B08D57]/20'
                  }`}
                >
                  {activeTab === item.tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
                            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                              <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium text-slate-900">{mainCondition}</span>
                                {details && (
                                  <span className="text-sm text-slate-600 block mt-0.5">{details}</span>
                                )}
                              </div>
                            </div>
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
                  {/* Clean Card Design without overflow issues */}
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100">
                    {/* Header Section */}
                    <div className="text-center px-6 py-8 border-b border-slate-100">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-slate-900">
                        {conditionCategories[activeTab].title}
                      </h2>
                      <p className="text-lg text-slate-600">
                        {conditionCategories[activeTab].subtitle}
                      </p>
                    </div>

                    {/* Conditions Grid - Clean Design */}
                    <div className="p-6 lg:p-10">
                      <div className="grid md:grid-cols-2 gap-4">
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
                                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#B08D57]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                  <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-slate-900">
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
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Additional Treatment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">Areas</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden border border-slate-100 hover:border-[#B08D57]/20">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Number Badge */}
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
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
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">Move Forward?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                Continue your recovery journey with a comprehensive assessment tailored to your specific needs and goals.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  <span>Book Your Assessment</span>
                  <ChevronRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
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