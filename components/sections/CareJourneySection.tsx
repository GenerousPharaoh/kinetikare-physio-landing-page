"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardDocumentCheckIcon, HandRaisedIcon, AcademicCapIcon, MapIcon } from '@heroicons/react/24/solid';

// Type definitions
type CareJourneyItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CareJourneySection = React.memo(function CareJourneySection() {
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0);
  const [isJourneyReady, setIsJourneyReady] = useState(false);

  // Care Journey items with appropriate icons
  const careJourneyItems: CareJourneyItem[] = [
    {
      title: "Thorough Assessments",
      description: "Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms",
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: "Advanced Manual Therapy",
      description: "Specialized hands-on techniques combined with evidence-based interventions for effective treatment",
      icon: HandRaisedIcon
    },
    {
      title: "Personalized Exercise Plans",
      description: "Customized rehabilitation strategies tailored to your unique needs and functional status",
      icon: AcademicCapIcon
    },
    {
      title: "Clear Recovery Roadmap",
      description: "Strategic planning with measurable milestones to achieve your health goals efficiently",
      icon: MapIcon
    }
  ];

  useEffect(() => {
    // Journey carousel
    const journeyStartDelay = setTimeout(() => {
      setIsJourneyReady(true);
      const journeyInterval = setInterval(() => {
        setCurrentJourneyIndex((prevIndex) => (prevIndex + 1) % careJourneyItems.length);
      }, 4000);

      return () => clearInterval(journeyInterval);
    }, 1000);

    return () => {
      clearTimeout(journeyStartDelay);
    };
  }, [careJourneyItems.length]);

  const currentJourney = careJourneyItems[currentJourneyIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/patterns/noise-pattern.png')",
            backgroundSize: "200px"
          }}
        />
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-[#B08D57]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">
              Your Care <span className="text-[#B08D57]">Journey</span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach to physiotherapy that focuses on understanding, treating, and empowering you throughout your recovery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Right side - Premium Glass Journey Carousel - Now centered and larger */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-2xl mx-auto">
                {/* PREMIUM GLASS: Ultra-premium glass container - Enhanced and larger */}
                <div 
                  className="relative bg-white/40 backdrop-blur-3xl rounded-3xl p-12 shadow-2xl border border-white/60 overflow-hidden"
                  style={{
                    boxShadow: '0 40px 80px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.9)'
                  }}
                >
                  
                  {/* Enhanced premium glass background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/35 rounded-3xl"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/20 via-[#B08D57]/15 to-transparent rounded-3xl blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#B08D57]/20 via-[#D4AF37]/15 to-transparent rounded-3xl blur-2xl"></div>
                  
                  {/* Premium glass accent bar - thicker */}
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] rounded-t-3xl"></div>
                  
                  {/* Enhanced floating glass elements */}
                  <div className="absolute top-8 right-8 w-4 h-4 bg-[#D4AF37]/70 rounded-full shadow-xl animate-pulse"></div>
                  <div className="absolute bottom-12 left-12 w-3 h-3 bg-[#B08D57]/70 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/3 left-8 w-2 h-2 bg-white/60 rounded-full shadow-md animate-pulse" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Sophisticated header with tagline instead of duplicate title */}
                  <div className="text-center mb-12 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl shadow-xl mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight">
                      Evidence-Based Excellence
                    </h3>
                    <p className="text-primary-600 text-lg font-medium leading-relaxed max-w-lg mx-auto">
                      Where clinical expertise meets personalized care for optimal recovery outcomes
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto rounded-full shadow-lg mt-6"></div>
                  </div>
                  
                  {/* Content area - larger */}
                  <div className="relative h-72 flex items-center justify-center z-10">
                    {isJourneyReady ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentJourneyIndex}
                          initial={{ opacity: 0, y: 25, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -25, scale: 0.95 }}
                          transition={{ 
                            duration: 0.7, 
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="text-center w-full"
                        >
                          <div className="space-y-8">
                            {/* Premium icon - larger */}
                            <motion.div 
                              className="flex justify-center mb-8"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.5 }}
                            >
                              <div className="relative w-20 h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl flex items-center justify-center shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl animate-pulse opacity-40"></div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/30 to-[#B08D57]/30 rounded-3xl blur-xl"></div>
                                {React.createElement(currentJourney.icon, {
                                  className: "w-10 h-10 text-white relative z-10 drop-shadow-lg"
                                })}
                              </div>
                            </motion.div>
                            
                            {/* Title - larger */}
                            <motion.h4 
                              className="text-2xl font-bold text-primary-900 mb-6 leading-tight tracking-tight"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              {currentJourney.title}
                            </motion.h4>
                            
                            {/* Description - enhanced styling */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="relative"
                            >
                              <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/70 shadow-xl">
                                <p className="text-primary-700 leading-relaxed text-base max-w-lg mx-auto font-medium relative z-10">
                                  {currentJourney.description}
                                </p>
                                {/* Quote decoration */}
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full flex items-center justify-center shadow-xl">
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                  </svg>
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Enhanced accent line */}
                            <motion.div 
                              className="flex justify-center mt-6"
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: "4rem", opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                            >
                              <div className="h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-lg"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      // Enhanced static placeholder
                      <div className="text-center w-full">
                        <div className="space-y-8">
                          <div className="relative w-20 h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
                            <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/30 to-[#B08D57]/30 rounded-3xl blur-xl"></div>
                            <ClipboardDocumentCheckIcon className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
                          </div>
                          <h4 className="text-2xl font-bold text-primary-900 mb-6 leading-tight tracking-tight">
                            Thorough Assessments
                          </h4>
                          <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/70 shadow-xl">
                            <p className="text-primary-700 leading-relaxed text-base max-w-lg mx-auto font-medium">
                              Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms
                            </p>
                            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full flex items-center justify-center shadow-xl">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced progress dots - larger and more premium */}
                  <div className="flex justify-center space-x-4 mt-10 mb-6 relative z-20">
                    {careJourneyItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentJourneyIndex(index)}
                        className={`group relative transition-all duration-300 cursor-pointer hover:scale-125 ${
                          index === currentJourneyIndex 
                            ? 'scale-125' 
                            : 'hover:scale-110'
                        }`}
                        style={{ pointerEvents: 'auto', zIndex: 20 }}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div className={`w-4 h-4 rounded-full transition-all duration-300 relative ${
                          index === currentJourneyIndex 
                            ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] shadow-xl shadow-[#D4AF37]/60' 
                            : 'bg-primary-300 hover:bg-primary-400 shadow-lg'
                        }`}>
                          {index === currentJourneyIndex && (
                            <>
                              <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] animate-ping opacity-40"></div>
                              <div className="absolute -inset-1 w-6 h-6 rounded-full bg-[#D4AF37]/30 blur-lg"></div>
                            </>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                
                  {/* Enhanced CTA */}
                  <div className="pt-6 border-t border-white/50 text-center relative z-20">
                    <a
                      href="/about"
                      className="inline-flex items-center text-primary-700 hover:text-[#B08D57] transition-all duration-300 text-base font-semibold tracking-wide cursor-pointer group"
                      style={{ pointerEvents: 'auto', zIndex: 20 }}
                    >
                      <span className="mr-3">Discover My Methodology</span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-lg">→</span>
                    </a>
                  </div>
                </div>
                
                {/* Enhanced premium glass shadow */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#B08D57]/25 to-[#D4AF37]/25 rounded-3xl blur-3xl opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CareJourneySection; 