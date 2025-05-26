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
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* Premium Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.9]">
                Get in <span className="text-[#B08D57] relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your recovery journey? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column - Consolidated Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Single Consolidated Contact Card */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-12 shadow-xl border border-slate-200/60">
                <h3 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight text-center">Contact Information</h3>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Location */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg">
                        <MapPinIcon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Location</h4>
                    </div>
                    <div className="pl-15">
                      <p className="font-semibold text-slate-900">Endorphins Health and Wellness Centre</p>
                      <p className="text-slate-600">4631 Palladium Wy Unit 6</p>
                      <p className="text-slate-600">Burlington, ON L7M 0W9</p>
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-lg text-white shadow-md">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Email</p>
                        <a 
                          href="mailto:kareem.hassanein@gmail.com"
                          className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-sm sm:text-base break-words"
                        >
                          kareem.hassanein@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-lg text-white shadow-md">
                        <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Phone</p>
                        <a 
                          href="tel:+19056346000"
                          className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold"
                        >
                          (905) 634-6000
                        </a>
                    </div>
                  </div>
                  
                    {/* Hours */}
                    <div className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-lg text-white shadow-md mt-1">
                        <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Hours</p>
                        <div className="space-y-1">
                          <p className="text-slate-800 font-semibold">Monday - Friday: 2PM - 8PM</p>
                          <p className="text-slate-600">Saturday: Available upon request</p>
                          <p className="text-slate-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-12 shadow-xl border border-slate-200/60">
                <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight text-center">Service Areas</h3>
                
                {/* Enhanced grid layout for service areas */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="bg-slate-50 text-slate-700 rounded-2xl px-4 py-3 font-semibold border border-slate-200 hover:bg-[#B08D57]/10 hover:text-[#B08D57] hover:border-[#B08D57]/20 transition-all duration-400 cursor-default text-center relative overflow-hidden">
                        {/* Subtle hover background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
                        <span className="relative z-10">{area}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced description */}
                <div className="text-center">
                  <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-lg mx-auto">
                    My practice is conveniently located in <span className="font-semibold text-[#B08D57]">Burlington</span>, and I'm pleased to extend my physiotherapy services to individuals and families in our surrounding communities.
                  </p>
                  <p className="text-slate-500 mt-4 font-medium">
                    If you're looking for experienced physiotherapy care to help you move and feel your best, I invite you to get in touch.
                  </p>
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
              <div className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                {/* Premium background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <CalendarDaysIcon className="w-16 h-16 mb-8 mx-auto opacity-90" />
                  <h3 className="text-4xl font-bold mb-8 tracking-tight">Book Your Appointment</h3>
                  <p className="text-white/90 mb-12 leading-relaxed text-xl font-light">
                    Schedule your physiotherapy consultation and start your journey to better health.
                  </p>
                  
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center px-8 py-6 bg-white text-[#B08D57] rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-xl mb-8"
                  >
                    <span>Book Appointment</span>
                    <ArrowTopRightOnSquareIcon className="w-7 h-7 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>

                  {/* Features list */}
                  <div className="grid grid-cols-1 gap-4 text-left">
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="font-semibold">Direct online booking</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="font-semibold">Same-day appointments available</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="font-semibold">Comprehensive assessment included</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="font-semibold">Personalized treatment plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Bottom CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-24"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] p-16 shadow-2xl border border-slate-200/60 max-w-5xl mx-auto relative overflow-hidden">
              {/* Premium background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                  Questions About Your Treatment?
                </h3>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  I'm here to discuss your specific needs and how physiotherapy can help you achieve your recovery goals. Let's start a conversation about your health.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="tel:+19056346000"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg"
                  >
                    <PhoneIcon className="w-6 h-6 mr-3" />
                    <span>Call Now</span>
                  </Link>
                  <Link
                    href="mailto:kareem.hassanein@gmail.com"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold shadow-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 text-lg"
                  >
                    <EnvelopeIcon className="w-6 h-6 mr-3" />
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
