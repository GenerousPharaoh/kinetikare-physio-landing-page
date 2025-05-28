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
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Steps Grid - All visible at once */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <span className="text-white text-2xl font-bold">{step.number}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
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
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-xl text-slate-700 rounded-xl font-semibold shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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