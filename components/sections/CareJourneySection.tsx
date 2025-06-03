"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

export default function CareJourneySection() {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: stepsRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ delay: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.",
      link: "/about",
      linkText: "About my approach"
    },
    {
      number: "02", 
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      link: "/services",
      linkText: "View services"
    },
    {
      number: "03",
      title: "Active Treatment", 
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      link: "/conditions",
      linkText: "Conditions I treat"
    },
    {
      number: "04",
      title: "Recovery + Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      link: "/faq",
      linkText: "Common questions"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Your <span className="text-[#B08D57]">Care Journey</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A structured, personalized approach to your recovery designed to deliver measurable results
          </p>
        </motion.div>

        {/* Care Journey Steps */}
        <div className="relative">
          {/* Subtle dots instead of line */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-20 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2 h-2 bg-[#B08D57]/20 rounded-full"></div>
            ))}
          </div>
          
          <motion.div 
            ref={stepsRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative group h-full">
                {/* Step Card - Premium glass design */}
                <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden border border-white/60 group-hover:border-[#B08D57]/20 group-hover:-translate-y-1">
                  {/* Premium gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-[#B08D57]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Number indicator - subtle */}
                    <div className="absolute -top-2 -right-2 text-6xl font-bold text-[#B08D57]/5 group-hover:text-[#B08D57]/10 transition-colors duration-500">
                      {index + 1}
                    </div>
                    
                    {/* Title - premium typography */}
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-5 tracking-tight leading-none whitespace-nowrap group-hover:text-[#B08D57] transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description - more engaging */}
                    <p className="text-[15px] text-slate-700 leading-[1.7] flex-grow font-light">
                      {step.description}
                    </p>
                    
                    {/* Interactive link - always visible */}
                    <Link 
                      href={step.link}
                      className="mt-6 flex items-center text-sm text-[#B08D57] transition-all duration-300 hover:text-[#D4AF37]"
                    >
                      <span className="font-medium">{step.linkText}</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Premium accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA - Redesigned */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Take the Next Step in Your Recovery?
              </h3>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Every step is designed around your specific needs and goals. Let's start with a comprehensive assessment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Book Your Assessment
                </a>
                <span className="text-white/60 text-sm">or</span>
                <a
                  href="tel:+19056346000"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Call to Discuss
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#B08D57]/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 