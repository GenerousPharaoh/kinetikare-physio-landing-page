"use client";

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { MapPinIcon, ClockIcon, BuildingOfficeIcon, ArrowTopRightOnSquareIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceAreasSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const areas = [
    {
      name: "Burlington",
      icon: MapPinIcon,
      details: "Central Burlington, North Burlington, and surrounding neighbourhoods"
    },
    {
      name: "Waterdown",
      icon: BuildingOfficeIcon,
      details: "Easy access for all Waterdown residents"
    },
    {
      name: "Oakville",
      icon: BuildingOfficeIcon,
      details: "Serving North Oakville communities"
    },
    {
      name: "Hamilton",
      icon: BuildingOfficeIcon,
      details: "West Hamilton and Dundas areas"
    }
  ];

  const hoursData = [
    { day: "Monday - Friday", hours: "2:00 PM - 8:00 PM" },
    { day: "Saturday", hours: "Available upon request" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="service-areas" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Where I <span className="text-[#B08D57]">Provide Care</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Serving communities across the Greater Toronto Area with dedicated physiotherapy care
          </p>
        </motion.div>


        {/* Cards Grid - Modern Design */}
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Practice Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#B08D57]/20 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPinIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Practice Location</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-slate-800 font-semibold text-lg">
                    4631 Palladium Wy Unit 6
                  </p>
                  <p className="text-slate-700 font-medium -mt-2">
                    Burlington, ON L7M 0W9
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Strategically positioned for convenient access from Burlington, North Burlington, Waterdown, Oakville, and Hamilton.
                  </p>
                </div>
                
                <Link 
                  href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#B08D57] hover:bg-[#D4AF37] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Get Directions</span>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* Communities Served Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#B08D57]/20 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg">
                    <BuildingOfficeIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Communities I Serve</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-slate-600 text-sm mb-4">Conveniently serving patients from:</p>
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B08D57] rounded-full flex-shrink-0 mt-1.5"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{area.name}</h4>
                        <p className="text-slate-600 text-sm">{area.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    I also welcome patients from Milton, Flamborough, Dundas, Ancaster, and Aldershot areas.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Operating Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#B08D57]/20 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg">
                    <ClockIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Operating Hours</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  {hoursData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-slate-800">{item.day}</span>
                      <span className="text-slate-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#B08D57] hover:bg-[#D4AF37] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span>Book Your Appointment</span>
                  </a>
                  
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-slate-800 px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-[#B08D57]/30"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>905-634-6000</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}