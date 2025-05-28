"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ServicesSection() {
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
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-[#B08D57]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#B08D57] mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive physiotherapy care tailored to your unique needs and recovery goals
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={service.title} className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-200 hover:border-[#B08D57]/30 flex flex-col">
                {/* Service Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
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
                    className="inline-flex items-center text-[#B08D57] hover:text-[#D4AF37] font-semibold transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ChevronRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Additional <span className="text-[#B08D57]">Services</span>
            </h3>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Comprehensive care extending beyond core services to support every aspect of your recovery journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={service} className="group">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#B08D57]/50 hover:shadow-md transition-all duration-300 text-center">
                  <h4 className="font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors duration-300 text-lg">
                    {service}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
