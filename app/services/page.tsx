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
                      {/* Dynamic Icon based on service */}
                      {service.id === 'manual-therapy' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      )}
                      {service.id === 'sports-rehab' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {service.id === 'dry-needling' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                      {service.id === 'exercise-therapy' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                      {service.id === 'postural-assessment' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {service.id === 'pain-management' && (
                        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>

                    {/* Service Number Badge */}
                    <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {String(index + 1).padStart(2, '0')}
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
      <section className="py-16 section-light border-y border-[#B08D57]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              The Treatment Process
            </h2>
            <p className="text-primary-800 font-medium">
              What to expect during your physiotherapy journey with me.
            </p>
            <div className="w-32 h-0.5 bg-[#B08D57] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">1</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Patient-Led Discovery</h3>
              <p className="text-primary-700">
                You lead the way by sharing your experience, concerns, and goals in an open, judgment-free environment.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">2</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Assessment</h3>
              <p className="text-primary-700">
                A thorough evaluation of your condition, medical history, and goals to create a personalized treatment plan.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">3</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Treatment</h3>
              <p className="text-primary-700">
                Evidence-based interventions combining manual therapy, exercise, and education to address your specific needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">4</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Adaptive Progress</h3>
              <p className="text-primary-700">
                Collaborative fine-tuning of your program based on your response, ensuring optimal recovery through continuous adaptation.
              </p>
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