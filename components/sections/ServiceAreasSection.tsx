"use client";

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ServiceAreasSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const serviceAreas = [
    "Burlington", "Waterdown", "Oakville", "Hamilton", 
    "Milton", "Flamborough", "Dundas", "Ancaster", "Aldershot"
  ];

  return (
    <section id="service-areas" className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Service <span className="text-[#B08D57]">Areas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Proudly serving patients from communities across <strong>Halton Region</strong> and the surrounding <strong>Golden Horseshoe area</strong>
          </p>
        </motion.div>

        {/* Clean Service Areas Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isMounted && isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              className={`
                relative bg-white rounded-xl p-4 text-center border shadow-sm
                hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                ${area === "Burlington" 
                  ? "border-[#B08D57]/40 bg-gradient-to-br from-[#B08D57]/8 to-[#D4AF37]/5" 
                  : "border-slate-200 hover:border-[#B08D57]/30"
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05 }}
            >
              <MapPinIcon className={`w-6 h-6 mx-auto mb-2 ${area === "Burlington" ? "text-[#B08D57]" : "text-slate-600"}`} />
              <span className={`block font-semibold ${area === "Burlington" ? "text-[#B08D57]" : "text-slate-800"}`}>
                {area}
              </span>
              {area === "Burlington" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#B08D57] rounded-full"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Contact Info */}
        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Location */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex items-center mb-4">
              <MapPinIcon className="w-6 h-6 text-[#B08D57] mr-3" />
              <h3 className="text-xl font-bold text-slate-900">Practice Location</h3>
            </div>
            <p className="text-slate-700 mb-4">
              4631 Palladium Wy Unit 6<br />
              Burlington, ON L7M 0W9
            </p>
            <Link 
              href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49" 
              target="_blank"
              className="inline-flex items-center text-[#B08D57] hover:text-[#D4AF37] font-semibold transition-colors"
            >
              Get Directions →
            </Link>
          </div>

          {/* Booking */}
          <div className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <CalendarDaysIcon className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Book Your Assessment</h3>
            </div>
            <p className="mb-6 text-white/90">
              Ready to start your recovery journey? Schedule your comprehensive assessment today.
            </p>
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-block bg-white text-[#B08D57] px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}