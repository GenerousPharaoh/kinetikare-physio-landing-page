"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentCheckIcon, HandRaisedIcon, AcademicCapIcon, MapIcon } from '@heroicons/react/24/solid';

// Type definitions
type CareJourneyItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CareJourneySection = React.memo(function CareJourneySection() {
  // Care Journey items with appropriate icons
  const careJourneyItems: CareJourneyItem[] = [
    {
      title: "Thorough Assessment",
      description: "Comprehensive evaluation to understand your unique condition and identify root causes beyond symptoms",
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: "Expert Treatment",
      description: "Advanced manual therapy techniques combined with evidence-based interventions for optimal healing",
      icon: HandRaisedIcon
    },
    {
      title: "Personalized Plan",
      description: "Customized exercise programs and rehabilitation strategies tailored to your specific needs and goals",
      icon: AcademicCapIcon
    },
    {
      title: "Ongoing Support",
      description: "Continuous guidance and progress monitoring to help you maintain improvements and prevent future issues",
      icon: MapIcon
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Subtle background elements */}
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

          {/* Journey Steps with Connecting Line */}
          <div className="relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {careJourneyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.4, y: 25, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-2xl hover:border-[#B08D57]/30 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white">
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="flex justify-center mb-8 mt-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#B08D57]/10 group-hover:to-[#D4AF37]/10 transition-all duration-500 shadow-lg">
                        {React.createElement(item.icon, {
                          className: "w-10 h-10 text-slate-600 group-hover:text-[#B08D57] transition-colors duration-500"
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-20"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group shadow-lg"
              >
                <span>Learn About My Approach</span>
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-[#B08D57] font-semibold rounded-xl border-2 border-[#B08D57] hover:bg-[#B08D57] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 group shadow-lg"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default CareJourneySection; 