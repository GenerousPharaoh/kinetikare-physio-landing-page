"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="relative inline-block mb-6 sm:mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight leading-[0.9]">
                Get in <span className="text-[#B08D57] relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
              Ready to continue your recovery journey? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Information Only */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            >
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
            </motion.div>

            {/* Right Column - Simplified CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              className="flex flex-col justify-start"
            >
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
            </motion.div>
          </div>

          {/* Full-Width Service Areas Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            className="mt-16 sm:mt-20"
          >
            <div className="bg-gradient-to-br from-white via-slate-50/50 to-white backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-200/60 relative overflow-hidden">
              {/* Premium background elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#B08D57]/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/8 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#B08D57]/3 to-[#D4AF37]/3 rounded-full blur-3xl"></div>
              
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>

              <div className="relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl mb-6 sm:mb-8 shadow-xl"
                  >
                    <MapPinIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                    Service <span className="text-[#B08D57] relative">
                      Areas
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                    </span>
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                    Proudly serving patients from communities across Halton Region and the surrounding Golden Horseshoe area
                  </p>
                </div>

                {/* Enhanced Service Areas Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.02 * index,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      <div className={`bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl p-4 sm:p-5 font-semibold border transition-all duration-500 cursor-default text-center relative overflow-hidden shadow-lg hover:shadow-xl ${
                        area === "Burlington" 
                          ? "border-[#B08D57]/40 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 shadow-[#B08D57]/10" 
                          : "border-slate-200/60 hover:border-[#B08D57]/30 group-hover:shadow-[#B08D57]/10"
                      }`}>
                        {/* Gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 rounded-2xl ${
                          area === "Burlington"
                            ? "from-[#B08D57]/8 via-[#D4AF37]/5 to-[#B08D57]/8 opacity-100 group-hover:opacity-100"
                            : "from-[#B08D57]/5 via-[#D4AF37]/3 to-[#B08D57]/5 opacity-0 group-hover:opacity-100"
                        }`}></div>
                        
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                        
                        {/* Location icon */}
                        <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br rounded-xl mb-3 sm:mb-4 transition-all duration-300 ${
                          area === "Burlington"
                            ? "from-[#B08D57]/20 to-[#D4AF37]/20 group-hover:from-[#B08D57]/30 group-hover:to-[#D4AF37]/30"
                            : "from-[#B08D57]/10 to-[#D4AF37]/10 group-hover:from-[#B08D57]/20 group-hover:to-[#D4AF37]/20"
                        }`}>
                          <MapPinIcon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                            area === "Burlington"
                              ? "text-[#B08D57] group-hover:text-[#D4AF37]"
                              : "text-[#B08D57] group-hover:text-[#D4AF37]"
                          }`} />
                        </div>
                        
                        <span className={`relative z-10 text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 ${
                          area === "Burlington"
                            ? "text-[#B08D57] group-hover:text-[#D4AF37]"
                            : "text-slate-800 group-hover:text-[#B08D57]"
                        }`}>
                          {area}
                        </span>
                        
                        {/* Elegant primary location indicator for Burlington */}
                        {area === "Burlington" && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm animate-pulse"></div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced Description with Visual Elements */}
                <div className="text-center relative">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/60 shadow-lg relative overflow-hidden"
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-lg"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-6">
                          <div className="flex items-center space-x-2 text-[#B08D57]">
                            <div className="w-2 h-2 bg-[#B08D57] rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-[#B08D57] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                        
                        <p className="text-slate-700 leading-relaxed font-medium text-lg sm:text-xl lg:text-2xl mb-6">
                          My practice is conveniently located in{" "}
                          <span className="font-bold text-[#B08D57] bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 px-2 py-1 rounded-lg">
                            Burlington
                          </span>
                          , and I'm pleased to extend my physiotherapy services to individuals and families throughout our surrounding communities.
                        </p>
                        
                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <div className="flex items-center space-x-2 text-slate-600">
                            <CheckCircleIcon className="w-5 h-5 text-[#B08D57]" />
                            <span className="font-semibold text-sm sm:text-base">Expert Care</span>
                          </div>
                          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                          <div className="flex items-center space-x-2 text-slate-600">
                            <CheckCircleIcon className="w-5 h-5 text-[#D4AF37]" />
                            <span className="font-semibold text-sm sm:text-base">Convenient Locations</span>
                          </div>
                          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                          <div className="flex items-center space-x-2 text-slate-600">
                            <CheckCircleIcon className="w-5 h-5 text-[#B08D57]" />
                            <span className="font-semibold text-sm sm:text-base">Personalized Treatment</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-500 font-medium text-base sm:text-lg">
                          If you're looking for experienced physiotherapy care to help you move and feel your best,{" "}
                          <span className="text-[#B08D57] font-semibold">I invite you to get in touch.</span>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Bottom CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            className="text-center mt-16 sm:mt-20 lg:mt-24"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
