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
    <footer className="relative bg-primary-900 text-white overflow-hidden border-t border-primary-800/50">
      {/* Subtle top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-primary-800 via-accent/30 to-primary-800"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description - simplified */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-baseline mb-5 hover:opacity-90 transition-opacity">
                <span className="font-heading font-bold text-2xl md:text-3xl text-white">KH</span>
                <span className="font-heading text-2xl md:text-3xl text-accent ml-1">Physiotherapy</span>
              </Link>
              
              <p className="text-lg italic text-accent/90 mb-6 font-light">
                "Personalized care for optimal recovery"
              </p>
              
              <p className="text-neutral-300 text-base leading-relaxed mb-8 max-w-lg">
                Providing expert physiotherapy care in Burlington and Waterdown. My approach focuses on individualized treatment plans to help you achieve your health and performance goals.
              </p>
              
              {/* Credentials/Associations */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm font-medium text-white border border-primary-700/50">
                  Registered Physiotherapist
                </span>
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm font-medium text-white border border-primary-700/50">
                  Sports Rehabilitation
                </span>
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm font-medium text-white border border-primary-700/50">
                  Manual Therapy
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-white bg-primary-800 border border-primary-700/50 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links - simplified */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-xl text-white mb-6">
              Navigation
            </h3>
            
            <div className="space-y-6">
              {footerLinks.map((section) => (
                <div key={section.title} className="mb-6">
                  <h4 className="font-medium text-accent text-lg mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-neutral-300 hover:text-white transition-all duration-200 flex items-center group"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 transition-all duration-200 group-hover:w-2 group-hover:h-2"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info - simplified */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-xl text-white mb-6">
              Contact Information
            </h3>
            
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start text-base">
                  <span className="mt-0.5 mr-4 p-2 bg-primary-800/60 rounded-lg text-accent border border-primary-700/50">
                    {item.icon}
                  </span>
                  <div className="pt-1">
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-neutral-300 hover:text-white transition-colors duration-200"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-neutral-300">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Book now button */}
            <div className="mt-8">
              <a 
                href="https://endorphinshealth.janeapp.com/#/staff_member/6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8">
              <h4 className="font-medium text-lg text-white mb-4">Find Us</h4>
              <div className="overflow-hidden rounded-lg border border-primary-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.518670972593!2d-79.82630139999999!3d43.4079889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61568c54cbff%3A0x433767b454bd4446!2sEndorphins%20Health%20and%20Wellness%20Centre!5e0!3m2!1sen!2sca!4v1744926379014!5m2!1sen!2sca" 
                  width="100%" 
                  height="200"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Endorphins Health and Wellness Centre Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - simplified */}
        <div className="pt-12 mt-12 border-t border-primary-800/30">
          <div className="md:flex md:justify-between md:items-center text-sm">
            <div className="text-neutral-400 mb-4 md:mb-0">
              &copy; {currentYear} KH Physiotherapy. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                className="text-accent hover:text-accent-light transition-colors duration-200 inline-flex items-center"
              >
                <span>Back to top</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 