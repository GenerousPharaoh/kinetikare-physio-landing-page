import React from 'react';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physiotherapy Services | Kareem Hassanein',
  description: 'Advanced physiotherapy services including sports rehabilitation, manual therapy, dry needling, and more for better movement and pain-free living.',
};

const services = [
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    description: 'Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted tissue manipulation.',
    image: '/images/manual-therapy.jpg',
    features: [
      'Joint mobilization and manipulation',
      'Soft tissue release techniques',
      'Fascial release therapy',
      'Proprioceptive neuromuscular facilitation',
    ],
  },
  {
    id: 'sports-rehab',
    title: 'Sports Rehabilitation',
    description: 'Tailored rehabilitation for athletes to recover from injury and return to their sport safely and stronger.',
    image: '/images/sports-injury.jpg',
    features: [
      'Sport-specific movement analysis',
      'Progressive strength training',
      'Functional movement restoration',
      'Return-to-sport testing and programming',
    ],
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    description: 'Precision therapy using thin filiform needles to release trigger points and relieve muscular pain and tension.',
    image: '/images/dry-needling.jpg',
    features: [
      'Trigger point release',
      'Improved blood flow to tissues',
      'Reduced muscle tension',
      'Enhanced tissue healing',
    ],
  },
  {
    id: 'exercise-therapy',
    title: 'Exercise Therapy',
    description: 'Customized exercise programs designed to restore function, build strength, and prevent injury recurrence.',
    image: '/images/exercise-therapy.jpg',
    features: [
      'Personalized exercise prescription',
      'Progressive resistance training',
      'Functional movement training',
      'Home exercise programming',
    ],
  },
  {
    id: 'postural-assessment',
    title: 'Posture & Ergonomic Assessment',
    description: 'Comprehensive analysis of your posture and work environment to address pain and prevent future issues.',
    image: '/images/posture-assessment.jpg',
    features: [
      'Detailed postural evaluation',
      'Workplace ergonomic assessment',
      'Corrective exercise prescription',
      'Lifestyle modification guidance',
    ],
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: 'Evidence-based approaches to reduce persistent pain through multiple modalities and self-management strategies.',
    image: '/images/pain-management.jpg',
    features: [
      'Pain neuroscience education',
      'Manual pain relief techniques',
      'Lifestyle and activity modification',
      'Graded motor imagery and pain desensitization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col text-primary-700 bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 text-primary-800 py-10 pt-20 relative border-b border-neutral-200">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              Physiotherapy <span className="text-[#B08D57]">Services</span>
            </h1>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Professional care tailored to your unique needs, combining advanced techniques with personalized attention.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57] opacity-20"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className="group relative">
                {/* Premium Card Container */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1A2036] to-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {/* Better Icons based on service */}
                      {service.id === 'manual-therapy' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      )}
                      {service.id === 'sports-rehab' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <circle cx="12" cy="12" r="3" strokeWidth={2} />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v6m0 10v6m11-7h-6m-10 0H1" />
                        </svg>
                      )}
                      {service.id === 'dry-needling' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L12 22M8 6L16 6M10 10L14 10M9 14L15 14M11 18L13 18" />
                        </svg>
                      )}
                      {service.id === 'exercise-therapy' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L8.25 2.95M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0" />
                        </svg>
                      )}
                      {service.id === 'postural-assessment' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7M9 17h6M10 21h4" />
                        </svg>
                      )}
                      {service.id === 'pain-management' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-4 text-primary-800 group-hover:text-[#B08D57] transition-colors duration-300">
                    {service.title}
                  </h2>

                    {/* Description */}
                    <p className="text-primary-700 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                    {/* Features List */}
                  <div className="mt-auto">
                      <div className="flex items-center mb-4">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mr-3"></div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#B08D57]">
                      Key Benefits
                    </h3>
                      </div>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start group/item">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B08D57]/20 to-[#D4AF37]/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#B08D57] to-[#D4AF37]"></div>
                            </div>
                            <span className="text-primary-700 text-sm leading-relaxed font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
              Your Journey
            </div>
            <h2 className="text-4xl font-bold mb-6 text-primary-800">
              The Treatment Process
            </h2>
            <div className="w-24 h-1 bg-[#B08D57] mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 leading-relaxed">
              What to expect during your physiotherapy journey with me
            </p>
          </div>
          
          {/* Sophisticated Treatment Flow */}
          <div className="max-w-7xl mx-auto">
            {/* Flow Container */}
            <div className="relative">
              {/* Flowing Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57]/30 to-transparent transform -translate-y-1/2 z-0"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
                {[
                  {
                    title: "Patient-Led Discovery",
                    description: "You lead the way by sharing your experience, concerns, and goals in an open, judgment-free environment.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    ),
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    title: "Assessment",
                    description: "A thorough evaluation of your condition, medical history, and goals to create a personalized treatment plan.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    gradient: "from-emerald-500 to-emerald-600"
                  },
                  {
                    title: "Treatment",
                    description: "Evidence-based interventions combining manual therapy, exercise, and education to address your specific needs.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    ),
                    gradient: "from-purple-500 to-purple-600"
                  },
                  {
                    title: "Adaptive Progress",
                    description: "Collaborative fine-tuning of your program based on your response, ensuring optimal recovery through continuous adaptation.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    gradient: "from-amber-500 to-amber-600"
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Floating Card */}
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 overflow-hidden h-80 flex flex-col">
                      {/* Gradient Background Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Floating Orbs */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-full blur-xl opacity-60"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#D4AF37]/8 to-[#B08D57]/8 rounded-full blur-lg opacity-40"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center flex flex-col h-full">
                        {/* Icon Container */}
                        <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                          {/* Icon Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl animate-pulse opacity-20"></div>
                          
                          {/* Icon */}
                          <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-4 text-primary-800 group-hover:text-[#B08D57] transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-primary-600 leading-relaxed text-sm group-hover:text-primary-700 transition-colors duration-300 flex-1">
                          {step.description}
                        </p>
                        
                        {/* Accent Line */}
                        <div className="mt-6 mx-auto w-12 h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full group-hover:w-16 transition-all duration-300"></div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                    </div>
            
                    {/* Connection Arrow (Desktop Only) */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#B08D57] group-hover:text-[#D4AF37] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage Section - Premium Redesign */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
                Insurance & Billing
              </div>
              <h2 className="text-4xl font-bold mb-6 text-primary-800">
              Insurance Coverage
            </h2>
              <div className="w-24 h-1 bg-[#B08D57] mx-auto mb-8"></div>
              <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                Physiotherapy services are covered by most extended health insurance plans
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Insurance Providers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B08D57]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-800">
                      Direct Billing Available
                    </h3>
          </div>
          
                  <p className="text-primary-600 mb-8 leading-relaxed">
                    We offer direct billing with major insurance providers:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      'Canada Life',
                      'Sun Life', 
                      'Manulife',
                      'Green Shield Canada',
                      'Blue Cross',
                      'WSIB'
                    ].map((provider, index) => (
                      <div key={index} className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200/60 hover:shadow-md hover:border-[#B08D57]/20 transition-all duration-300 group">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-primary-700 font-medium text-lg">{provider}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 rounded-xl p-4 border border-[#B08D57]/20">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-primary-700 font-medium">and more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Coverage Help */}
              <div className="bg-gradient-to-br from-primary-800 to-slate-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#B08D57]/15 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-primary-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Need Coverage Help?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    If you're unsure whether we can direct bill your plan, call us and we'll let you know. We're here to help verify your coverage and ensure you get the care you need.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3"></div>
                      <span className="text-white/90">Free coverage verification</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3"></div>
                      <span className="text-white/90">Direct billing when possible</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3"></div>
                      <span className="text-white/90">Payment plan options available</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="tel:+16139007234"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call for Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-subtle border-t border-[#B08D57]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-xl bg-white shadow-lg border border-[#B08D57]/10">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Ready to Address Your Pain?
            </h2>
            <p className="text-primary-800 text-lg mb-8 font-medium">
              Partner with a physiotherapist dedicated to understanding your unique needs and achieving lasting results. Schedule your comprehensive assessment today.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1A2036] hover:bg-[#252E4A] text-[#D4AF37] rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg border border-[#1A2036]"
            >
              Book Your Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 