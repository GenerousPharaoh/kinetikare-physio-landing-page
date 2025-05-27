"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CareJourneySection = () => {
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

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-tl from-[#B08D57]/8 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
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

          {/* Mobile: Vertical Stack Layout */}
          <div className="block lg:hidden">
            <div className="space-y-8 max-w-md mx-auto">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-2xl opacity-30`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Step Number */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                        <span className="text-white text-2xl font-bold">{step.number}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line for mobile */}
                  {index < journeySteps.length - 1 && (
                    <div className="flex justify-center mt-4 mb-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-6xl mx-auto">
              {/* Central Circle Container */}
              <div className="relative w-full aspect-square max-w-4xl mx-auto">
                
                {/* Central Hub */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="w-40 h-40 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-full"
                    />
                    
                    {/* Center content */}
                    <div className="relative z-10 text-center text-white">
                      <div className="text-3xl font-bold mb-1">Your</div>
                      <div className="text-xl font-semibold">Journey</div>
                    </div>
                    
                    {/* Pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 border-4 border-white/30 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Journey Steps - Positioned manually for perfect circle */}
                {/* Step 1 - Top */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 w-80 relative overflow-hidden group cursor-default">
                    <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[0].bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${journeySteps[0].gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-3xl font-bold">1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {journeySteps[0].title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {journeySteps[0].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 - Right */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 w-80 relative overflow-hidden group cursor-default">
                    <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[1].bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${journeySteps[1].gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-3xl font-bold">2</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {journeySteps[1].title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {journeySteps[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 - Bottom */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 w-80 relative overflow-hidden group cursor-default">
                    <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[2].bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${journeySteps[2].gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-3xl font-bold">3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {journeySteps[2].title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {journeySteps[2].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4 - Left */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 w-80 relative overflow-hidden group cursor-default">
                    <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[3].bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${journeySteps[3].gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-3xl font-bold">4</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {journeySteps[3].title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {journeySteps[3].description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M 50% 0% Q 100% 0% 100% 50%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 100% 50% Q 100% 100% 50% 100%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1.9, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 50% 100% Q 0% 100% 0% 50%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 2.2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0% 50% Q 0% 0% 50% 0%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 2.5, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B08D57" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-20"
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