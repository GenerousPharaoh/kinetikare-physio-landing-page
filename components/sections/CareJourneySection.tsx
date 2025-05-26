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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Journey steps list */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {careJourneyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onClick={() => setCurrentJourneyIndex(index)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    index === currentJourneyIndex
                      ? 'bg-gradient-to-br from-white to-primary-50 border-primary-200 shadow-xl shadow-primary-100/20'
                      : 'bg-white border-neutral-200 hover:border-primary-200 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      index === currentJourneyIndex
                        ? 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] shadow-lg'
                        : 'bg-gradient-to-br from-neutral-100 to-neutral-200 group-hover:from-[#B08D57]/20 group-hover:to-[#D4AF37]/20'
                    }`}>
                      {React.createElement(item.icon, {
                        className: `w-6 h-6 ${
                          index === currentJourneyIndex ? 'text-white' : 'text-primary-600 group-hover:text-[#B08D57]'
                        }`
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        index === currentJourneyIndex ? 'text-primary-900' : 'text-primary-800 group-hover:text-primary-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        index === currentJourneyIndex ? 'text-primary-700' : 'text-primary-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentJourneyIndex
                        ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] scale-125'
                        : 'bg-neutral-300 group-hover:bg-[#D4AF37]/60'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Premium Glass Journey Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                {/* PREMIUM GLASS: Ultra-premium glass container */}
                <div 
                  className="relative bg-white/60 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/80 overflow-hidden"
                  style={{
                    boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                  }}
                >
                  
                  {/* Premium glass background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/30 rounded-3xl"></div>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/15 via-[#B08D57]/10 to-transparent rounded-3xl blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#B08D57]/15 via-[#D4AF37]/10 to-transparent rounded-3xl blur-xl"></div>
                  
                  {/* Glass accent bar */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] rounded-t-3xl"></div>
                  
                  {/* Floating glass elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#D4AF37]/60 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#B08D57]/60 rounded-full shadow-md animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                      Your Care Journey
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto rounded-full shadow-lg"></div>
                  </div>
                  
                  {/* Content area */}
                  <div className="relative h-56 flex items-center justify-center z-10">
                    {isJourneyReady ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentJourneyIndex}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="text-center w-full"
                        >
                          <div className="space-y-6">
                            {/* Premium icon */}
                            <motion.div 
                              className="flex justify-center mb-6"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.5 }}
                            >
                              <div className="relative w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl animate-pulse opacity-30"></div>
                                {React.createElement(currentJourney.icon, {
                                  className: "w-8 h-8 text-white relative z-10 drop-shadow-sm"
                                })}
                              </div>
                            </motion.div>
                            
                            {/* Title */}
                            <motion.h4 
                              className="text-xl font-bold text-primary-900 mb-4 leading-tight tracking-tight"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              {currentJourney.title}
                            </motion.h4>
                            
                            {/* Description */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="relative"
                            >
                              <p className="text-primary-700 leading-relaxed text-sm max-w-sm mx-auto font-medium relative z-10 px-4 py-3 bg-white/40 rounded-xl border border-white/60 backdrop-blur-sm shadow-sm">
                                {currentJourney.description}
                              </p>
                            </motion.div>
                            
                            {/* Accent line */}
                            <motion.div 
                              className="flex justify-center mt-4"
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: "3rem", opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                            >
                              <div className="h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      // Static placeholder - no transition on first load
                      <div className="text-center w-full">
                        <div className="space-y-6">
                          <div className="relative w-16 h-16 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-xl mx-auto">
                            <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-primary-900 mb-4 leading-tight tracking-tight">
                            Thorough Assessments
                          </h4>
                          <p className="text-primary-700 leading-relaxed text-sm max-w-sm mx-auto font-medium px-4 py-3 bg-white/40 rounded-xl border border-white/60 backdrop-blur-sm shadow-sm">
                            Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex justify-center space-x-2 mt-6 mb-4 relative z-20">
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
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                          index === currentJourneyIndex 
                            ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/50' 
                            : 'bg-primary-300 hover:bg-primary-400 shadow-md'
                        }`}>
                          {index === currentJourneyIndex && (
                            <>
                              <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] animate-ping opacity-30"></div>
                              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#D4AF37]/20 blur-sm"></div>
                            </>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                
                  {/* CTA */}
                  <div className="pt-4 border-t border-white/40 text-center relative z-20">
                    <a
                      href="/about"
                      className="inline-flex items-center text-primary-700 hover:text-[#B08D57] transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer group"
                      style={{ pointerEvents: 'auto', zIndex: 20 }}
                    >
                      <span className="mr-2">Learn more about my approach</span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
                
                {/* Enhanced glass shadow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/20 to-[#D4AF37]/20 rounded-3xl blur-2xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CareJourneySection; 