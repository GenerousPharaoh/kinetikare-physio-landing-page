"use client";

import React from 'react';

export default function CareJourneySection() {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and movement patterns to understand your unique needs.",
      accent: "from-slate-600 to-slate-800"
    },
    {
      number: "02", 
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan with clear goals, timelines, and evidence-based interventions.",
      accent: "from-slate-700 to-slate-900"
    },
    {
      number: "03",
      title: "Active Treatment", 
      description: "Hands-on therapy, exercise prescription, and education to address your specific condition and restore function.",
      accent: "from-slate-800 to-black"
    },
    {
      number: "04",
      title: "Recovery & Prevention",
      description: "Ongoing support, home exercise programs, and strategies to prevent re-injury and maintain long-term health.",
      accent: "from-[#B08D57] to-[#8B6D42]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Your <span className="text-[#B08D57]">Care Journey</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A structured, personalized approach to your recovery designed to deliver measurable results
          </p>
        </div>

        {/* Care Journey Steps */}
        <div className="relative">
          {/* Background connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Subtle background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-[0.02] rounded-3xl`}></div>
                  
                  {/* Step Number - Elegant Typography */}
                  <div className="relative z-10 mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.accent} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg tracking-wider">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#B08D57]/5 to-transparent rounded-tl-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Redesigned */}
        <div className="mt-24">
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
        </div>
      </div>
    </section>
  );
} 