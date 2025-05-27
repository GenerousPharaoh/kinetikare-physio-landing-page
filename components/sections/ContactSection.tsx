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
            viewport={{ once: true, margin: "-100px" }}
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
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Ready to start your recovery journey? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Information Only */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
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
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
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
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 sm:mt-20"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-slate-200/60">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight text-center">Service Areas</h3>
              
              {/* Enhanced layout for service areas */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-slate-50 text-slate-700 rounded-2xl px-4 py-3 font-semibold border border-slate-200 hover:bg-[#B08D57]/10 hover:text-[#B08D57] hover:border-[#B08D57]/20 transition-all duration-400 cursor-default text-center relative overflow-hidden text-sm sm:text-base min-w-[100px] whitespace-nowrap">
                      {/* Subtle hover background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
                      <span className="relative z-10">{area}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced description */}
              <div className="text-center">
                <p className="text-slate-600 leading-relaxed font-medium text-base sm:text-lg max-w-lg mx-auto">
                  My practice is conveniently located in <span className="font-semibold text-[#B08D57]">Burlington</span>, and I'm pleased to extend my physiotherapy services to individuals and families in our surrounding communities.
                </p>
                <p className="text-slate-500 mt-4 font-medium text-sm sm:text-base">
                  If you're looking for experienced physiotherapy care to help you move and feel your best, I invite you to get in touch.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Premium Bottom CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
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
