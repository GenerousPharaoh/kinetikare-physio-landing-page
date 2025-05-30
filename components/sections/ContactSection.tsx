"use client";

import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ClockIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  const serviceAreas = [
    "Burlington", "Waterdown", "Oakville", "Milton", "Hamilton", 
    "Flamborough", "Dundas", "Ancaster", "Aldershot"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" id="contact">
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
          {/* Premium Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="relative inline-block mb-6 sm:mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[0.9]">
                Get in <span className="text-[#B08D57] relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-2xl lg:text-3xl font-light text-slate-600 mb-8 leading-relaxed">
              Ready to move forward in your recovery journey? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Information Only */}
            <div>
              {/* Single Consolidated Contact Card */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-200/60">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight text-center">Contact Information</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Location */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Location</h4>
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Endorphins Health and Wellness Centre</p>
                        <p className="text-slate-600 text-sm sm:text-base">4631 Palladium Wy Unit 6</p>
                        <p className="text-slate-600 text-sm sm:text-base">Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Email</h4>
                      <a 
                        href="mailto:kareem.hassanein@gmail.com"
                        className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-sm sm:text-base lg:text-lg break-all"
                      >
                        kareem.hassanein@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Phone</h4>
                      <a 
                        href="tel:+19056346000"
                        className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-sm sm:text-base lg:text-lg"
                      >
                        (905) 634-6000
                      </a>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Hours</h4>
                      <div className="space-y-1">
                        <p className="text-slate-800 font-semibold text-sm sm:text-base">Monday - Friday: 2PM - 8PM</p>
                        <p className="text-slate-600 text-sm sm:text-base">Saturday: Available upon request</p>
                        <p className="text-slate-600 text-sm sm:text-base">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Simplified CTA */}
            <div className="flex flex-col justify-start">
              {/* Simplified Book Appointment CTA */}
              <div className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                {/* Premium background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <CalendarDaysIcon className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 mx-auto opacity-90" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight">Book Your Appointment</h3>
                  <p className="text-white/90 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg lg:text-xl font-light">
                    Schedule your physiotherapy consultation and start your journey to better health.
                  </p>
                  
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-6 bg-white text-[#B08D57] rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg sm:text-xl mb-6 sm:mb-8"
                  >
                    <span>Book Appointment</span>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 sm:w-7 sm:h-7 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>

                  {/* Features list */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 text-left">
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Direct online booking</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Same-day appointments available</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Comprehensive assessment included</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Personalized treatment plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section - Enhanced Design */}
          <div className="mt-16 sm:mt-20">
            <div className="relative group">
              {/* Enhanced background with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-white rounded-[2.5rem] transform group-hover:scale-[1.01] transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/3 via-transparent to-[#D4AF37]/3 rounded-[2.5rem] opacity-60"></div>
              <div className="absolute inset-0 shadow-2xl rounded-[2.5rem] opacity-30"></div>
              
              {/* Premium floating background elements */}
              <div className="absolute -top-10 -left-10 w-52 h-52 bg-gradient-to-br from-[#B08D57]/8 to-[#D4AF37]/4 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-[#D4AF37]/8 to-[#B08D57]/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-[#B08D57]/4 to-[#D4AF37]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-[0.015] rounded-[2.5rem]" style={{
                backgroundImage: `radial-gradient(circle at 3px 3px, rgba(176, 141, 87, 0.4) 1px, transparent 0)`,
                backgroundSize: '48px 48px'
              }}></div>

              <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                {/* Enhanced Header with better visual hierarchy */}
                <div className="text-center mb-16 sm:mb-20">
                  {/* Icon with enhanced styling */}
                  <div className="relative inline-block mb-8 sm:mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl blur-lg opacity-30 scale-110"></div>
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                      <MapPinIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced typography */}
                  <div className="space-y-6">
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none">
                      Service{" "}
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">
                      Areas
                        </span>
                        <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-lg"></div>
                        <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-lg blur-sm"></div>
                    </span>
                  </h3>
                  
                    <div className="max-w-4xl mx-auto">
                      <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light">
                        Proudly serving patients from communities across{" "}
                        <span className="font-semibold text-slate-700">Halton Region</span>{" "}
                        and the surrounding{" "}
                        <span className="font-semibold text-slate-700">Golden Horseshoe area</span>
                  </p>
                    </div>
                  </div>
                </div>

                {/* Completely redesigned Service Areas Grid */}
                <div className="mb-16 sm:mb-20">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
                  {serviceAreas.map((area, index) => (
                    <div key={area} className="group relative">
                        {/* Enhanced badge design */}
                        <div className={`
                          relative bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 
                          border transition-all duration-500 cursor-default text-center 
                          shadow-lg hover:shadow-2xl transform hover:-translate-y-2
                          ${area === "Burlington" 
                            ? "border-[#B08D57]/40 bg-gradient-to-br from-[#B08D57]/8 to-[#D4AF37]/6 shadow-[#B08D57]/20" 
                            : "border-slate-200/60 hover:border-[#B08D57]/40 group-hover:shadow-[#B08D57]/15"
                          }
                        `}>
                        {/* Gradient background on hover */}
                          <div className={`
                            absolute inset-0 bg-gradient-to-br rounded-2xl transition-opacity duration-500
                            ${area === "Burlington"
                              ? "from-[#B08D57]/12 via-[#D4AF37]/8 to-[#B08D57]/12 opacity-100"
                              : "from-[#B08D57]/8 via-[#D4AF37]/5 to-[#B08D57]/8 opacity-0 group-hover:opacity-100"
                            }
                          `}></div>
                        
                          {/* Premium shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out rounded-2xl"></div>
                        
                          {/* Enhanced location icon */}
                          <div className={`
                            relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                            bg-gradient-to-br rounded-xl mb-4 sm:mb-5 transition-all duration-300 shadow-lg
                            ${area === "Burlington"
                              ? "from-[#B08D57]/25 to-[#D4AF37]/25 group-hover:from-[#B08D57]/35 group-hover:to-[#D4AF37]/35 shadow-[#B08D57]/20"
                              : "from-[#B08D57]/15 to-[#D4AF37]/15 group-hover:from-[#B08D57]/25 group-hover:to-[#D4AF37]/25 group-hover:shadow-[#B08D57]/20"
                            }
                          `}>
                            <MapPinIcon className={`
                              w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300
                              ${area === "Burlington"
                                ? "text-[#B08D57] group-hover:text-[#D4AF37] group-hover:scale-110"
                                : "text-[#B08D57] group-hover:text-[#D4AF37] group-hover:scale-110"
                              }
                            `} />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl"></div>
                        </div>
                        
                          {/* Enhanced text */}
                          <div className="relative z-10">
                            <span className={`
                              block text-base sm:text-lg lg:text-xl font-bold transition-all duration-300
                              ${area === "Burlington"
                            ? "text-[#B08D57] group-hover:text-[#D4AF37]"
                            : "text-slate-800 group-hover:text-[#B08D57]"
                              }
                            `}>
                          {area}
                        </span>
                          </div>
                        
                          {/* Enhanced primary location indicator for Burlington */}
                        {area === "Burlington" && (
                            <div className="absolute top-3 right-3 flex items-center space-x-1">
                              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm animate-pulse"></div>
                              <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                          )}
                          
                          {/* Subtle border glow effect */}
                          <div className={`
                            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            ${area === "Burlington" 
                              ? "shadow-[0_0_0_1px_rgba(176,141,87,0.3),0_0_20px_rgba(176,141,87,0.1)]"
                              : "shadow-[0_0_0_1px_rgba(176,141,87,0.2),0_0_15px_rgba(176,141,87,0.08)]"
                            }
                          `}></div>
                        </div>
                      </div>
                    ))}
                    </div>
                </div>
                
                {/* Enhanced Description Section */}
                <div className="text-center relative">
                  <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/60 shadow-2xl overflow-hidden">
                      {/* Enhanced decorative elements */}
                      <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#B08D57]/8 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#D4AF37]/8 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#B08D57]/3 to-[#D4AF37]/3 rounded-full blur-3xl"></div>
                      
                      {/* Geometric pattern */}
                      <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 0.5) 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                      }}></div>

                      <div className="relative z-10 space-y-8">
                        {/* Enhanced animated dots */}
                        <div className="flex items-center justify-center mb-8">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full animate-pulse shadow-lg"></div>
                            <div className="w-4 h-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                        
                        {/* Enhanced main text */}
                        <div className="space-y-6">
                          <p className="text-slate-700 leading-relaxed font-medium text-xl sm:text-2xl lg:text-3xl">
                          My practice is conveniently located in{" "}
                            <span className="relative inline-block font-bold text-[#B08D57] bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 px-4 py-2 rounded-xl shadow-lg">
                            Burlington
                              <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 rounded-xl"></div>
                          </span>
                          , and I'm pleased to extend my physiotherapy services to individuals and families throughout our surrounding communities.
                        </p>
                        </div>
                        
                        {/* Enhanced feature points */}
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 py-6">
                          <div className="flex items-center space-x-3 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <CheckCircleIcon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-slate-700 text-lg sm:text-xl">Expert Care</span>
                          </div>
                          
                          <div className="hidden sm:block w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                          
                          <div className="flex items-center space-x-3 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <CheckCircleIcon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-slate-700 text-lg sm:text-xl">Convenient Locations</span>
                          </div>
                          
                          <div className="hidden sm:block w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                          
                          <div className="flex items-center space-x-3 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <CheckCircleIcon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-slate-700 text-lg sm:text-xl">Personalized Treatment</span>
                          </div>
                        </div>
                        
                        {/* Enhanced call-to-action */}
                        <div className="pt-4">
                          <p className="text-slate-600 font-medium text-lg sm:text-xl leading-relaxed">
                          If you're looking for experienced physiotherapy care to help you move and feel your best,{" "}
                            <span className="relative inline-block">
                              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#D4AF37]">
                                I invite you to get in touch.
                              </span>
                              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                            </span>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Bottom CTA Section */}
          <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-200/60 max-w-5xl mx-auto relative overflow-hidden">
              {/* Premium background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
                  Questions About Your Treatment?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  I'm here to discuss your specific needs and how physiotherapy can help you achieve your recovery goals. Let's start a conversation about your health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Link
                    href="tel:+19056346000"
                    className="group inline-flex items-center justify-center px-6 py-4 sm:px-8 lg:px-10 sm:py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-base sm:text-lg"
                  >
                    <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    <span>Call Now</span>
                  </Link>
                  <Link
                    href="mailto:kareem.hassanein@gmail.com"
                    className="group inline-flex items-center justify-center px-6 py-4 sm:px-8 lg:px-10 sm:py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold shadow-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 text-base sm:text-lg"
                  >
                    <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    <span>Send Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
