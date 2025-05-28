"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, 
  DocumentTextIcon, 
  WrenchScrewdriverIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function CareJourneySection() {
  const steps = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.",
      icon: UserIcon,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: 2,
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      icon: DocumentTextIcon,
      color: "from-emerald-500 to-green-600"
    },
    {
      number: 3,
      title: "Active Treatment",
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      icon: WrenchScrewdriverIcon,
      color: "from-amber-500 to-orange-600"
    },
    {
      number: 4,
      title: "Recovery & Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      icon: CheckCircleIcon,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Your <span className="text-[#B08D57] relative">
                Care Journey
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              A structured, personalized approach to your recovery designed to deliver measurable results
            </p>
          </div>

          {/* Care Journey Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="group">
                <div className="relative">
                  {/* Connection Line (hidden on mobile, visible on lg+) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 transform translate-x-0"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-lg hover:shadow-xl hover:border-[#B08D57]/30 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02]">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 0.3) 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                    
                    {/* Step Number */}
                    <div className="relative z-10 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl shadow-lg mb-4`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full text-white font-bold text-sm shadow-md">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                Ready to Begin Your Recovery Journey?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every step is designed around your specific needs and goals. Let's start with a comprehensive assessment.
              </p>
              <a
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
              >
                Book Your Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 