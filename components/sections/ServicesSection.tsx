"use client";

import React from 'react';
import Link from 'next/link';
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

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-light text-slate-900 mb-4 tracking-[-0.02em]">
              Additional <span className="text-[#B08D57]">Services</span>
            </h3>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Comprehensive care extending beyond core services to support every aspect of your recovery journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={service} 
                className="group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#B08D57]/50 hover:shadow-md transition-all duration-300 text-center">
                  <h4 className="font-normal text-slate-900 group-hover:text-[#B08D57] transition-colors duration-300 text-lg">
                    {service}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
