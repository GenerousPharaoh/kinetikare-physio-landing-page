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
      link: "/intake",
      linkText: "Book an assessment"
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
      link: "/treatments",
      linkText: "Treatment methods"
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
      className="section-luxury-spacing section-temperature-a texture-luxury"
    >
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-slate-900 mb-4 md:mb-6 heading-luxury-1">
            Your <span className="text-luxury-gradient">Care Journey</span>
          </h2>
          <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-4 md:mb-8"></div>
          <p className="text-base md:text-xl lg:text-2xl max-w-4xl mx-auto text-luxury-subtle">
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
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
          >
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative group h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-start">
                {/* Step Card - Premium glass design */}
                <div className="h-full glass-luxury rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-luxury-medium hover:shadow-luxury-deep transition-all duration-600 relative overflow-hidden border-luxury-subtle premium-hover-lift">
                  {/* Premium gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-[#B08D57]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Number indicator - subtle */}
                    <div className="absolute -top-2 -right-2 text-6xl font-light text-[#B08D57]/5 group-hover:text-[#B08D57]/10 transition-colors duration-500">
                      {index + 1}
                    </div>

                    {/* Title - premium typography */}
                    <h3 className="text-lg lg:text-xl text-slate-900 mb-3 md:mb-5 whitespace-nowrap group-hover:text-[#B08D57] transition-colors duration-300 heading-luxury-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed md:leading-[1.7] flex-grow font-light">
                      {step.description}
                    </p>

                    {/* Interactive link */}
                    <Link
                      href={step.link}
                      className="mt-4 md:mt-6 flex items-center text-sm text-[#B08D57] transition-all duration-300 hover:text-[#D4AF37]"
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

          {/* Mobile scroll hint */}
          <div className="flex md:hidden justify-center mt-3 gap-1.5">
            {steps.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/20" />
            ))}
          </div>
        </div>


      </div>
    </motion.section>
  );
} 