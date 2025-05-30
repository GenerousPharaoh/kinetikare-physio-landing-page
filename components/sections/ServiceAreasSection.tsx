"use client";

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { FaMapMarkerAlt, FaClock, FaCity, FaMapSigns, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
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
      name: "Burlington Central",
      icon: FaMapMarkerAlt,
      details: "Conveniently located near major routes (QEW, 407)."
    },
    {
      name: "North Burlington",
      icon: FaCity,
      details: "Serving communities like Alton Village and Millcroft."
    },
    {
      name: "Waterdown",
      icon: FaCity,
      details: "Easily accessible for Waterdown residents."
    },
    {
      name: "Oakville & Hamilton",
      icon: FaMapSigns,
      details: "Welcoming patients from neighbouring cities."
    }
  ];

  const hoursData = [
    { day: "Monday - Friday", hours: "2:00 PM - 8:00 PM" },
    { day: "Saturday", hours: "Available upon request" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 text-gray-800 relative">
      {/* Clean background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#B08D57]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Header */}
        <motion.div 
          className="mb-10 md:mb-14 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block rounded-full px-4 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium mb-6 border border-[#B08D57]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Service Areas
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Where I Provide Care
          </motion.h2>
          
          <motion.p 
            className="text-slate-600 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Serving communities across the Greater Toronto Area with dedicated physiotherapy care.
          </motion.p>
        </motion.div>

        {/* Clean hero image section */}
        <motion.div
          initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "50px" }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-16 aspect-[16/7]"
        >
          <Image
            src="/images/facebook-image.jpg"
            alt="KH Physiotherapy clinic in Burlington"
            fill
            className="object-cover object-center"
            style={{ 
              filter: 'brightness(1.1) contrast(1.1)',
            }}
            priority={true}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-800/30 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white z-10">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#B08D57] text-white text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                Centrally Located
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">
                Easy access from surrounding communities
              </h3>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                Conveniently positioned at 4631 Palladium Wy Unit 6, Burlington, ON L7M 0W9
              </p>
            </div>
          </div>
        </motion.div>

        {/* Clean cards layout */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 -mt-12">
            {/* Practice Location */}
            <motion.div 
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0, duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Practice Location</h3>
                </div>
                
                <p className="text-slate-800 font-semibold mb-2">
                  4631 Palladium Wy Unit 6, Burlington, ON L7M 0W9
                </p>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  Strategically positioned for convenient access from Burlington, North Burlington, Waterdown, Oakville, and Hamilton.
                </p>
                
                <Link 
                  href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49" 
                  target="_blank"
                  className="inline-flex items-center justify-center text-white bg-[#B08D57] hover:bg-[#D4AF37] px-6 py-3 rounded-xl transition-colors duration-300 font-medium w-full"
                >
                  Get Directions <FaMapMarkerAlt className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Communities Served */}
            <motion.div 
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center mr-4">
                    <FaCity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Communities I Serve</h3>
                </div>
                
                <ul className="space-y-3 text-sm flex-grow mb-6">
                  {areas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <area.icon className="h-4 w-4 text-[#B08D57] mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">{area.name}</span>
                        <p className="text-slate-600 text-xs mt-1">{area.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-600">
                  I also welcome patients from Milton, Flamborough, Dundas, Ancaster, and Aldershot areas.
                </div>
              </div>
            </motion.div>
            
            {/* Operating Hours */}
            <motion.div 
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center mr-4">
                    <FaClock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Operating Hours</h3>
                </div>
                
                <div className="space-y-3 flex-grow mb-8">
                  {hoursData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm pb-2 border-b border-slate-100 last:border-0">
                      <span className="font-medium text-slate-800">{item.day}</span>
                      <span className="text-slate-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#B08D57] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 w-full"
                >
                  <FaCalendarAlt className="mr-2 h-4 w-4" /> Book Your Appointment
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Mobile call button */}
          <div className="mt-8 md:hidden">
            <Link 
              href="tel:+19056346000" 
              className="inline-flex items-center justify-center text-white bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-xl transition-colors duration-300 font-medium w-full"
            >
              <FaPhoneAlt className="h-4 w-4 mr-2" />
              Call Me at 905-634-6000
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}