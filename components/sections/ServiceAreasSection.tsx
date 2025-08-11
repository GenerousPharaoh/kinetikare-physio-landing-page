"use client";

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { MapPinIcon, ClockIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ServiceAreasSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const areas = [
    "Waterdown",
    "Oakville",
    "Hamilton",
    "Milton",
    "Flamborough",
    "Dundas",
    "Ancaster",
    "Aldershot"
  ];

  const hoursData = [
    { day: "Monday", hours: "1:30 PM - 8:00 PM" },
    { day: "Tuesday", hours: "1:30 PM - 8:00 PM" },
    { day: "Thursday", hours: "1:30 PM - 8:00 PM" }
  ];

  return (
    <section id="service-areas" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Simple Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Location & <span className="text-[#B08D57]">Hours</span>
          </h2>
          <div className="w-20 h-1 bg-[#B08D57] mx-auto"></div>
        </motion.div>

        {/* Streamlined Content Grid */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Location Card - Featured */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#B08D57] rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Clinic Location</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-800 font-semibold">4631 Palladium Wy Unit 6</p>
                    <p className="text-slate-700">Burlington, ON L7M 0W9</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm">
                    Easy access from QEW & 407. Ample free parking available.
                  </p>
                  
                  <Link 
                    href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[#B08D57] hover:text-[#D4AF37] font-medium transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#B08D57] rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Office Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {hoursData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-slate-700">{item.day}</span>
                      <span className="text-slate-600">{item.hours}</span>
                    </div>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <a
                      href="tel:+19056346000"
                      className="flex items-center justify-center gap-2 text-slate-700 hover:text-[#B08D57] transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span className="font-medium">905-634-6000</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Areas Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#B08D57] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Service Area</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-800 font-semibold text-base mb-1">Burlington</p>
                    <p className="text-slate-600 text-sm">Primary service area</p>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-slate-600 text-sm mb-2">Welcoming patients from:</p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {areas.join(", ")} and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 rounded-xl p-8 border border-[#B08D57]/20">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Start Your Recovery?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Book your appointment online or call to discuss your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B08D57] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <CalendarDaysIcon className="w-5 h-5" />
                  Book Online
                </a>
                <a
                  href="tel:+19056346000"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors border-2 border-gray-200"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}