"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CareJourneySection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const journeySteps = [
    {
      number: 1,
      title: "Thorough Assessment",
      description: "Comprehensive evaluation to understand your unique condition and identify root causes beyond symptoms",
      gradient: "from-[#B08D57] to-[#D4AF37]",
      bgGradient: "from-[#B08D57]/10 to-[#D4AF37]/5"
    },
    {
      number: 2,
      title: "Expert Treatment",
      description: "Advanced manual therapy techniques combined with evidence-based interventions for optimal healing",
      gradient: "from-[#A17D47] to-[#B08D57]",
      bgGradient: "from-[#A17D47]/10 to-[#B08D57]/5"
    },
    {
      number: 3,
      title: "Personalized Plan",
      description: "Customized exercise programs and rehabilitation strategies tailored to your specific needs and goals",
      gradient: "from-[#D4AF37] to-[#B08D57]",
      bgGradient: "from-[#D4AF37]/10 to-[#B08D57]/5"
    },
    {
      number: 4,
      title: "Ongoing Support",
      description: "Continuous guidance and progress monitoring to help you maintain improvements and prevent future issues",
      gradient: "from-[#B08D57] to-[#A17D47]",
      bgGradient: "from-[#B08D57]/10 to-[#A17D47]/5"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, journeySteps.length]);

  const nextStep = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);
  };

  const prevStep = () => {
    setIsAutoPlaying(false);
    setCurrentStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const goToStep = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentStep(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-tl from-[#B08D57]/8 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Your Care <span className="text-[#B08D57]">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to physiotherapy focused on understanding, treating, and empowering your recovery
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden min-h-[500px]">
              {/* Background gradient for current step */}
              <motion.div 
                key={`bg-${currentStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${journeySteps[currentStep].bgGradient} rounded-3xl`}
              />
              
              {/* Floating decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-[#B08D57]/10 to-transparent rounded-full blur-xl"></div>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center min-h-[500px]">
                {/* Left side - Number Display */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      {/* Main Number Container */}
                      <div className={`w-32 h-32 bg-gradient-to-br ${journeySteps[currentStep].gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                        
                        {/* Step Number */}
                        <div className="relative z-10 text-white text-5xl font-bold">
                          {journeySteps[currentStep].number}
                        </div>
                        
                        {/* Animated ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 text-center md:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        {journeySteps[currentStep].title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                        {journeySteps[currentStep].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <button
                onClick={prevStep}
                className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous step"
              >
                <ChevronLeftIcon className="w-6 h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" />
              </button>

              {/* Step Indicators */}
              <div className="flex space-x-3">
                {journeySteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentStep ? 'scale-125' : 'hover:scale-110'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] shadow-lg shadow-[#B08D57]/40' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}>
                      {index === currentStep && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                          className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] opacity-40"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextStep}
                className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next step"
              >
                <ChevronRightIcon className="w-6 h-6 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
          >
            <Link
              href="/about"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Learn About My Approach</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-xl text-slate-700 rounded-xl font-semibold shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Start Your Journey</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareJourneySection; 