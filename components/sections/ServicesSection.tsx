"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import {
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: servicesRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ delay: 0.1 });

  const mainServices = [
    {
      title: "Manual Therapy",
      description: "Advanced hands-on techniques including joint mobilization, soft tissue work, and specialized treatment methods.",
      features: ["Joint Mobilization", "Soft Tissue Techniques", "Myofascial Release"]
    },
    {
      title: "Exercise Therapy", 
      description: "Personalized movement programs designed to restore function, build strength, and prevent re-injury.",
      features: ["Strength Training", "Movement Correction", "Injury Prevention"]
    },
    {
      title: "Dry Needling",
      description: "Precise needle techniques targeting trigger points and dysfunctional tissues for pain relief and improved function.",
      features: ["Trigger Point Release", "Pain Management", "Muscle Activation"]
    }
  ];

  const additionalServices = [
    "Post-Surgical Rehabilitation",
    "Sports Injury Recovery", 
    "Chronic Pain Management",
    "Movement Assessment",
    "Injury Prevention Programs",
    "Return-to-Sport Protocols"
  ];

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="py-12 md:py-16 bg-gray-50" 
      id="services"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-[-0.02em]">
            <span className="text-[#B08D57]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#B08D57] mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive physiotherapy care tailored to your unique needs and recovery goals
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {mainServices.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#B08D57]/30 flex flex-col">
                {/* Service Content */}
                <h3 className="text-2xl font-normal text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg flex-grow">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div className="mt-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#B08D57] hover:text-[#D4AF37] font-normal transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Treatment Image and Additional Services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Manual Therapy Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative h-[600px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-50">
              {/* Image with contain to show full image */}
              <div className="relative h-full w-full">
                <Image
                  src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy.jpg"
                  alt="Manual therapy treatment - knee mobilization and stretching technique"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'contrast(1.05) saturate(1.1)', imageRendering: 'crisp-edges' }}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Very subtle gradient overlay just at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Minimal text badge at bottom */}
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full"></div>
                  <span className="text-sm font-medium text-slate-900">Hands-On Manual Therapy</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Services - Matched Height Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-auto lg:h-[700px]"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-light text-[#B08D57] mb-3 tracking-[-0.02em]">
                  Additional Services
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Comprehensive care extending beyond core services
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={service}
                    className="group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-[#B08D57]/50 hover:shadow-md transition-all duration-300">
                      <h4 className="font-normal text-slate-900 group-hover:text-[#B08D57] transition-colors duration-300 text-sm">
                        {service}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Treatment Approach Section */}
              <div className="border-t border-gray-200 pt-6 flex-grow">
                <h4 className="text-lg font-light text-[#B08D57] mb-3">
                  Treatment Approach
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-medium">Evidence-Based:</span> Every technique backed by current research
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-medium">Patient-Centered:</span> Your goals guide every aspect of treatment
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-medium">Outcome-Focused:</span> Regular assessments track your progress
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <div className="mt-6 text-center">
                <a
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B08D57] hover:bg-[#9A7A4F] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg text-sm"
                >
                  Book Your Assessment
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
                <p className="text-xs text-slate-500 mt-2">Direct insurance billing available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
