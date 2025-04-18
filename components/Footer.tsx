"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, LinkIcon } from '@heroicons/react/24/outline'; // Using outline icons for footer
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';

// const logoSrc = "/images/logo-light.png"; // Remove if using text logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { 
      title: "Quick Links",
      links: [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'My Expertise', href: '/#services' },
        { name: 'Specialties', href: '/#conditions' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: '4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9',
      href: 'https://www.google.com/maps/place/Endorphins+Health+and+Wellness+Centre/@43.4079928,-79.8288817,17z'
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000'
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: 'info@khphysiotherapy.com',
      href: 'mailto:info@khphysiotherapy.com'
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: 'Mon-Thurs: 9am-8pm, Fri: 9am-5pm'
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kareem-hassanein-60585133a', // Updated with actual LinkedIn URL
      icon: <LinkIcon className="w-5 h-5" /> 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden">
      {/* Enhanced decorative elements with animations */}
      <motion.div 
        className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      ></motion.div>
      
      {/* Top accent bar with gradient animation */}
      <motion.div 
        className="h-1.5 bg-gradient-to-r from-primary-800 via-accent to-primary-800 bg-[length:200%_auto]"
        animate={{ 
          backgroundPosition: ["0% center", "100% center", "0% center"],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      
      {/* Main content */}
      <motion.div 
        className="container mx-auto px-4 pt-20 pb-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-5"
            variants={itemVariants}
          >
            <div className="mb-8">
              <Link href="/" className="inline-flex items-baseline mb-4 hover:opacity-90 transition-opacity">
                <motion.span 
                  className="font-heading font-bold text-2xl md:text-3xl text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  KH
                </motion.span>
                <motion.span 
                  className="font-heading font-medium italic text-2xl md:text-3xl text-accent ml-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Physiotherapy
                </motion.span>
              </Link>
              
              {/* Mission statement with glassmorphism */}
              <GlassCard
                className="inline-block py-2 px-4 mb-6"
                backgroundOpacity={0.1}
                blurStrength="sm"
                borderStyle="none"
                animate={false}
              >
                <p className="text-lg md:text-xl font-heading text-accent/90 italic">
                  "Personalized care for optimal recovery"
                </p>
              </GlassCard>
              
              {/* Description text */}
              <motion.p 
                className="text-neutral-100 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                variants={itemVariants}
              >
                Providing expert physiotherapy care in Burlington and Waterdown. My approach focuses on individualized treatment plans to help you achieve your health and performance goals.
              </motion.p>
              
              {/* Credentials/Associations with enhanced glassmorphism */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                variants={itemVariants}
              >
                <GlassCard
                  className="px-3 py-1.5 text-sm font-medium"
                  backgroundOpacity={0.08}
                  blurStrength="sm"
                  borderStyle="light"
                  animate={false}
                >
                  <span>Registered Physiotherapist</span>
                </GlassCard>
                
                <GlassCard
                  className="px-3 py-1.5 text-sm font-medium"
                  backgroundOpacity={0.08}
                  blurStrength="sm"
                  borderStyle="light"
                  animate={false}
                >
                  <span>Sports Rehabilitation</span>
                </GlassCard>
                
                <GlassCard
                  className="px-3 py-1.5 text-sm font-medium"
                  backgroundOpacity={0.08}
                  blurStrength="sm"
                  borderStyle="light"
                  animate={false}
                >
                  <span>Manual Therapy</span>
                </GlassCard>
              </motion.div>
              
              {/* Social Links with animations */}
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                {socialLinks.map((social) => (
                  <motion.a 
                    key={social.name} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-white bg-primary-800/60 backdrop-blur-sm border border-primary-700 rounded-full transition-all duration-300"
                    aria-label={social.name}
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: "rgba(216, 180, 88, 0.4)",
                      borderColor: "rgba(216, 180, 88, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <GlassCard
              className="p-6 h-full"
              backgroundOpacity={0.05}
              blurStrength="sm"
              borderStyle="light"
              animate={false}
            >
              <h3 className="font-bold text-xl text-white mb-6 pb-3 border-b border-primary-700/50">
                Navigation
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {footerLinks.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h4 className="font-semibold text-accent text-lg mb-4">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <motion.li 
                          key={link.name}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Link 
                            href={link.href} 
                            className="text-neutral-200 hover:text-white transition-all duration-200 text-base flex items-center group"
                          >
                            <motion.span 
                              className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 transition-all duration-200"
                              whileHover={{ width: 8, height: 8 }}
                            ></motion.span>
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <GlassCard
              className="p-6 h-full"
              backgroundOpacity={0.05}
              blurStrength="sm"
              borderStyle="light"
              animate={false}
            >
              <h3 className="font-bold text-xl text-white mb-6 pb-3 border-b border-primary-700/50">
                Contact Information
              </h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start text-base group"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="mt-0.5 mr-4 p-2.5 bg-primary-800/40 backdrop-blur-sm border border-primary-700/50 rounded-xl text-accent"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(216, 180, 88, 0.15)",
                        borderColor: "rgba(216, 180, 88, 0.4)"
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-neutral-200 hover:text-white transition-colors duration-200"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-neutral-200">{item.text}</span>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              {/* Book now button with animation */}
              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/0 via-accent-light/30 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </a>
              </motion.div>
              
              {/* Google Maps Embed */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="font-semibold text-lg text-white mb-4">Find Us</h4>
                <GlassCard
                  className="p-2 overflow-hidden rounded-lg"
                  backgroundOpacity={0.05}
                  blurStrength="sm"
                  borderStyle="light"
                  animate={false}
                >
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.518670972593!2d-79.82630139999999!3d43.4079889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61568c54cbff%3A0x433767b454bd4446!2sEndorphins%20Health%20and%20Wellness%20Centre!5e0!3m2!1sen!2sca!4v1744926379014!5m2!1sen!2sca" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Endorphins Health and Wellness Centre Location"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </GlassCard>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom Bar with glassmorphism */}
        <GlassCard
          className="py-6 px-4 mt-8"
          backgroundOpacity={0.03}
          blurStrength="sm"
          borderStyle="none"
          animate={false}
        >
          <div className="md:flex md:justify-between md:items-center text-sm">
            <div className="text-neutral-300 mb-4 md:mb-0">
              &copy; {currentYear} KH Physiotherapy. All Rights Reserved.
            </div>
            <div className="text-neutral-400 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span>Made with dedication to personalized care</span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                className="text-accent hover:text-accent-light transition-colors duration-200 inline-flex items-center group"
              >
                <span>Back to top</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </motion.svg>
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </footer>
  );
} 