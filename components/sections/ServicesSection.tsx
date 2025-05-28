"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  UserGroupIcon, 
  HeartIcon, 
  SparklesIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const mainServices = [
    {
      title: "Manual Therapy",
      description: "Advanced hands-on techniques including joint mobilization, soft tissue work, and specialized treatment methods.",
      image: "/images/manual-therapy/manual-therapy-1.jpg",
      features: ["Joint Mobilization", "Soft Tissue Techniques", "Myofascial Release"],
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Exercise Therapy", 
      description: "Personalized movement programs designed to restore function, build strength, and prevent re-injury.",
      image: "/images/exercise-therapy/exercise-therapy-1.jpg",
      features: ["Strength Training", "Movement Correction", "Injury Prevention"],
      accent: "from-green-500 to-emerald-500"
    },
    {
      title: "Dry Needling",
      description: "Precise needle techniques targeting trigger points and dysfunctional tissues for pain relief and improved function.",
      image: "/images/dry-needling/dry-needling-1.jpg", 
      features: ["Trigger Point Release", "Pain Management", "Muscle Activation"],
      accent: "from-purple-500 to-violet-500"
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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden" id="services">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#B08D57]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4AF37]/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="relative inline-block mb-6 sm:mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[0.9]">
                <span className="text-[#B08D57] relative">
                  Services
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-2xl lg:text-3xl font-light text-slate-600 mb-8 leading-relaxed">
              Comprehensive physiotherapy care tailored to your unique needs and recovery goals
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
            {mainServices.map((service, index) => (
              <div key={service.title} className="group">
                <div className="bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 hover:shadow-2xl hover:border-[#B08D57]/30 transition-all duration-500 hover:scale-[1.02]">
                  {/* Service Image */}
                  <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.accent} rounded-xl shadow-lg`}>
                        <SparklesIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 group-hover:text-[#B08D57] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08D57] mr-3 sm:mr-4 flex-shrink-0" />
                          <span className="text-slate-700 font-medium text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Link */}
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center text-[#B08D57] hover:text-[#D4AF37] font-bold transition-colors duration-300 text-base sm:text-lg"
                    >
                      <span>Learn More</span>
                      <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-200/60 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#B08D57]/8 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/8 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl mb-6 sm:mb-8 shadow-xl">
                <UserGroupIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                Additional <span className="text-[#B08D57]">Services</span>
              </h3>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
                Comprehensive care extending beyond our core services to support every aspect of your recovery journey
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {additionalServices.map((service, index) => (
                  <div key={service} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/60 hover:border-[#B08D57]/30 hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden">
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      
                      <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-xl mb-3 sm:mb-4 group-hover:from-[#B08D57]/20 group-hover:to-[#D4AF37]/20 transition-all duration-300">
                          <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08D57] group-hover:text-[#D4AF37] transition-colors duration-300" />
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-[#B08D57] transition-colors duration-300 text-sm sm:text-base lg:text-lg">
                          {service}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
