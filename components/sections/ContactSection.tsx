"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const { ref: sectionRef, isInView } = useScrollAnimation({
    yOffset: 0,
    delay: 0,
    duration: 0.3,
    rootMargin: '400px 0px 400px 0px'
  });

  // Start visible — animate only on scroll
  const animationProps = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  };

  const serviceAreas = [
    "Waterdown", "Oakville", "Milton", "Hamilton", 
    "Flamborough", "Dundas", "Ancaster", "Aldershot"
  ];

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="section-luxury-spacing pb-24 md:pb-0 section-temperature-a relative overflow-hidden texture-luxury"
      id="contact"
    >
      {/* Clean background elements with subtle parallax */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#B08D57]/3 to-transparent rounded-full blur-3xl parallax-bg-slow"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4AF37]/3 to-transparent rounded-full blur-3xl parallax-bg-medium"></div>
      
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="relative inline-block mb-4 sm:mb-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-4 sm:mb-8 heading-luxury-1">
                Get in <span className="text-luxury-gradient relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
            </div>

            <p className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 text-luxury-subtle">
              Ready to move forward? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Information Only */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {/* Single Consolidated Contact Card */}
              <div className="glass-luxury rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-luxury-deep hover:shadow-luxury-float transition-[transform,box-shadow] duration-600 border-luxury-subtle premium-hover-glow">
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-8 sm:mb-10 tracking-[-0.02em] text-center">Contact Information</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Location */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B08D57] to-[#A17D47] rounded-xl text-white shadow-lg flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-normal text-slate-900 mb-2">Location</h4>
                      <div className="space-y-1">
                        <p className="font-normal text-slate-900 text-sm sm:text-base">Endorphins Health and Wellness Centre</p>
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
                      <h4 className="text-base sm:text-lg font-normal text-slate-900 mb-2">Email</h4>
                      <a 
                        href="mailto:kareem.hassanein@gmail.com"
                        className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-normal text-sm sm:text-base lg:text-lg break-all"
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
                      <h4 className="text-base sm:text-lg font-normal text-slate-900 mb-2">Phone</h4>
                      <a 
                        href="tel:+19056346000"
                        className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-normal text-sm sm:text-base lg:text-lg"
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
                      <h4 className="text-base sm:text-lg font-normal text-slate-900 mb-2">Hours</h4>
                      <div className="space-y-3">
                        {/* Endorphins Location */}
                        <div>
                          <p className="text-xs text-[#B08D57] font-medium mb-1">Endorphins Health & Wellness</p>
                          <div className="space-y-1 pl-2">
                            <div className="flex justify-between text-sm sm:text-base">
                              <span className="text-slate-700">Monday:</span>
                              <span className="text-slate-800 font-normal">1:30 PM - 7:30 PM</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-base">
                              <span className="text-slate-700">Tuesday:</span>
                              <span className="text-slate-800 font-normal">3:30 PM - 7:30 PM</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-base">
                              <span className="text-slate-700">Thursday:</span>
                              <span className="text-slate-800 font-normal">1:30 PM - 7:30 PM</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional availability - more subtle */}
                        <div className="pt-2 border-t border-slate-100">
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>Wednesday*:</span>
                              <span>2:00 PM - 7:30 PM</span>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>Friday*:</span>
                              <span>2:00 PM - 7:30 PM</span>
                            </div>
                            <p className="text-xs text-slate-400 italic mt-1">*Headon Physio location</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Simplified CTA */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-start"
            >
              {/* Simplified Book Appointment CTA */}
              <div className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white relative overflow-hidden shadow-premium-3 hover:shadow-premium-3-hover shadow-transition">
                {/* Clean background elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 text-center">
                  <CalendarDaysIcon className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 mx-auto opacity-90" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 sm:mb-8 tracking-[-0.02em]">Book Your Appointment</h3>
                  <p className="text-white/90 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg lg:text-xl font-light">
                    Schedule your physiotherapy consultation and start your journey to better health.
                  </p>
                  
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-medium shadow-premium-2 hover:shadow-premium-2-hover hover:from-[#B08D57] hover:to-[#D4AF37] hover:text-white shadow-transition hover:scale-105 text-lg sm:text-xl mb-6 sm:mb-8"
                  >
                    <span>Book Appointment</span>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 sm:w-7 sm:h-7 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>

                  {/* Features list */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 text-left">
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-normal text-sm sm:text-base">Direct online booking</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-normal text-sm sm:text-base">Same-day appointments available</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-normal text-sm sm:text-base">Comprehensive assessment included</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="font-normal text-sm sm:text-base">Personalized treatment plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 sm:mt-16 pb-12 sm:pb-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-3 tracking-[-0.02em]">
              Service <span className="text-[#B08D57]">Area</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              Based in <span className="font-medium text-slate-800">Burlington</span>, welcoming patients from nearby communities
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm sm:text-base text-slate-700 font-normal"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
