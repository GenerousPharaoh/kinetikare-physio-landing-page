"use client";

import React from 'react';
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
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      icon: DocumentTextIcon,
      color: "bg-emerald-500"
    },
    {
      number: 3,
      title: "Active Treatment",
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      icon: WrenchScrewdriverIcon,
      color: "bg-amber-500"
    },
    {
      number: 4,
      title: "Recovery & Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      icon: CheckCircleIcon,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your <span className="text-[#B08D57]">Care Journey</span>
          </h2>
          <div className="w-24 h-1 bg-[#B08D57] mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A structured, personalized approach to your recovery designed to deliver measurable results
          </p>
        </div>

        {/* Care Journey Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gray-300 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-[#B08D57] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Begin Your Recovery Journey?
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Every step is designed around your specific needs and goals. Let's start with a comprehensive assessment.
            </p>
            <a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#B08D57] hover:bg-[#A17D47] text-white rounded-lg font-semibold transition-colors duration-300"
            >
              Book Your Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 