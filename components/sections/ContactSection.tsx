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
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-7 h-7" />,
      title: "Location",
      content: (
        <div className="space-y-2">
          <p className="font-semibold text-slate-900 text-lg">Endorphins Health and Wellness Centre</p>
          <p className="text-slate-600 font-medium">4631 Palladium Wy Unit 6</p>
          <p className="text-slate-600 font-medium">Burlington, ON L7M 0W9</p>
        </div>
      ),
      gradient: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      hoverBg: "group-hover:bg-slate-100/50"
    },
    {
      icon: <EnvelopeIcon className="w-7 h-7" />,
      title: "Email",
      content: (
        <a 
          href="mailto:kareem.hassanein@gmail.com"
          className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-lg"
        >
          kareem.hassanein@gmail.com
        </a>
      ),
      gradient: "from-[#B08D57] to-[#A17D47]",
      bgColor: "bg-[#B08D57]/5",
      hoverBg: "group-hover:bg-[#B08D57]/10"
    },
    {
      icon: <PhoneIcon className="w-7 h-7" />,
      title: "Phone",
      content: (
        <a 
          href="tel:+19056346000"
          className="text-[#B08D57] hover:text-[#D4AF37] transition-colors duration-300 font-semibold text-lg"
        >
          (905) 634-6000
        </a>
      ),
      gradient: "from-slate-700 to-slate-800",
      bgColor: "bg-slate-50",
      hoverBg: "group-hover:bg-slate-100/50"
    },
    {
      icon: <ClockIcon className="w-7 h-7" />,
      title: "Hours",
      content: (
        <div className="space-y-2">
          <p className="text-slate-800 font-semibold text-lg">Monday - Friday: 2PM - 8PM</p>
          <p className="text-slate-600 font-medium">Saturday: Available upon request</p>
          <p className="text-slate-600 font-medium">Sunday: Closed</p>
        </div>
      ),
      gradient: "from-[#8B7355] to-[#6B5B47]",
      bgColor: "bg-[#D4AF37]/5",
      hoverBg: "group-hover:bg-[#D4AF37]/10"
    }
  ];

  const serviceAreas = [
    "Burlington", "Waterdown", "Oakville", "Milton", "Hamilton", 
    "Flamborough", "Dundas", "Ancaster", "Aldershot"
  ];

  const premiumFeatures = [
    "Direct online booking",
    "Same-day appointments available",
    "Comprehensive assessment included",
    "Personalized treatment plans"
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
            className="text-center mb-24"
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[0.9]">
                Get in <span className="text-[#B08D57] relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                </span>
              </h2>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full opacity-30"></div>
            </div>
            
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Ready to start your recovery journey? Experience personalized physiotherapy care designed to help you move and feel your best.
            </p>
            
            {/* Premium badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 rounded-full border border-[#B08D57]/20"
            >
              <CheckCircleIcon className="w-5 h-5 text-[#B08D57] mr-2" />
              <span className="text-[#B08D57] font-semibold">Professional Physiotherapy Services</span>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Left Column - Premium Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-xl border border-slate-200/60 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Premium background pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                    
                    {/* Subtle background */}
                    <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700`}></div>
                    
                    {/* Premium icon container */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-8 text-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                      {item.icon}
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative text-2xl font-bold text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                    <div className="relative text-slate-600 leading-relaxed">
                      {item.content}
                    </div>
                    
                    {/* Premium hover accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Premium CTA and Service Areas */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {/* Premium Book Appointment CTA */}
              <div className="bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                {/* Premium background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <CalendarDaysIcon className="w-14 h-14 mb-8 opacity-90" />
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to Start?</h3>
                  <p className="text-white/90 mb-8 leading-relaxed text-lg font-light">
                    Book your appointment online and take the first step towards recovery with personalized care.
                  </p>
                  
                  {/* Premium features list */}
                  <div className="mb-8 space-y-3">
                    {premiumFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="flex items-center text-white/90"
                      >
                        <CheckCircleIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group inline-flex items-center justify-center w-full px-8 py-5 bg-white text-[#B08D57] rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg"
                  >
                    <span>Book Appointment</span>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Premium Service Areas */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-xl border border-slate-200/60">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Service Areas</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {serviceAreas.map((area, index) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="inline-block px-4 py-2.5 bg-slate-100 text-slate-700 rounded-2xl font-semibold border border-slate-200 hover:bg-[#B08D57]/10 hover:text-[#B08D57] hover:border-[#B08D57]/20 transition-all duration-400 cursor-default"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  My practice is conveniently located in Burlington, and I'm pleased to extend my physiotherapy services to individuals and families in our surrounding communities. If you're looking for experienced physiotherapy care to help you move and feel your best, I invite you to get in touch.
                </p>
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
