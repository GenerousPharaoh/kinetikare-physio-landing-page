"use client";

import React from 'react';
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
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500"
    },
    {
      number: "02", 
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500"
    },
    {
      number: "03",
      title: "Active Treatment", 
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      gradient: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-500"
    },
    {
      number: "04",
      title: "Recovery + Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      gradient: "from-[#B08D57] to-[#D4AF37]",
      iconColor: "text-[#B08D57]"
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
                {/* Step Card - Premium design with gradient accents */}
                <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-200/50 group-hover:scale-[1.02]">
                  {/* Gradient accent ribbon */}
                  <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content with better typography */}
                  <div className="relative h-full flex flex-col">
                    {/* Title with custom styling to prevent line breaks */}
                    <h3 className={`text-xl font-black mb-5 tracking-tight leading-none ${step.iconColor} whitespace-nowrap`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.title.toUpperCase()}
                    </h3>
                    
                    {/* Description with better typography */}
                    <p className="text-gray-700 leading-relaxed flex-grow text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500`}></div>
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
                  href="tel:+19055559999"
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