"use client";

import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, LinkIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { 
      title: "Quick Links",
      links: [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Conditions', href: '/#conditions' },
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
      href: 'https://www.google.com/maps/place/Endorphins+Health+and+Wellness+Centre/@43.4079928,-79.8288817,17z',
      ariaLabel: 'View our location on Google Maps'
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000',
      ariaLabel: 'Call our office'
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: 'info@khphysiotherapy.com',
      href: 'mailto:info@khphysiotherapy.com',
      ariaLabel: 'Email us'
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: 'Mon-Thurs: 9am-8pm, Fri: 9am-5pm'
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kareem-hassanein-60585133a',
      icon: <LinkIcon className="w-5 h-5" /> 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-primary-900 text-white pt-16 pb-8 border-t border-primary-800/50">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-800 via-accent/30 to-primary-800"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-80 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-800/30 blur-[80px]" aria-hidden="true"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Branding Column */}
          <div className="lg:col-span-4">
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="flex items-baseline mb-6">
                <span className="font-heading font-bold text-2xl md:text-3xl text-white">KH</span>
                <span className="font-heading text-accent ml-1 text-2xl">Physiotherapy</span>
              </div>
              
              {/* Tagline */}
              <p className="text-lg italic text-accent mb-5 font-light">
                &quot;Personalized care for optimal recovery&quot;
              </p>
              
              {/* Description */}
              <p className="text-white leading-relaxed mb-6">
                Providing expert physiotherapy care in Burlington and Waterdown. My approach focuses on individualized treatment plans to help you achieve your health and performance goals.
              </p>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm text-white border border-primary-700/50">
                  Registered Physiotherapist
                </span>
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm text-white border border-primary-700/50">
                  Sports Rehabilitation
                </span>
                <span className="px-3 py-1.5 bg-primary-800/60 rounded-md text-sm text-white border border-primary-700/50">
                  Manual Therapy
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3 mt-auto">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-white bg-primary-800/80 backdrop-blur-sm border border-primary-700/50 rounded-full hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 focus-visible:outline-none"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xl text-white font-medium mb-6 pb-2 border-b border-primary-800/50">
              Navigation
            </h3>
            
            <div className="space-y-8">
              {footerLinks.map((section) => (
                <div key={section.title} className="mb-6">
                  <h4 className="text-accent font-medium mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-white hover:text-accent transition-all duration-200 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded-sm px-1"
                        >
                          <span className="w-1.5 h-1.5 bg-accent/70 rounded-full transition-all duration-200 group-hover:w-2 group-hover:h-2 flex-shrink-0"></span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5">
            <h3 className="text-xl text-white font-medium mb-6 pb-2 border-b border-primary-800/50">
              Contact Information
            </h3>
            
            <ul className="space-y-5 mb-8">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start text-base">
                  <div className="mt-0.5 mr-3 p-2 rounded-lg text-accent bg-primary-800/40 border border-primary-700/30">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded-sm px-1"
                        aria-label={item.ariaLabel || item.text}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Book Button */}
            <a 
              href="https://endorphinshealth.janeapp.com/#/staff_member/6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/5 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              aria-label="Book an appointment online"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            
            {/* Google Maps */}
            <div>
              <h4 className="font-medium text-lg text-white mb-4">Find Us</h4>
              <div className="overflow-hidden rounded-lg border border-primary-800/50 shadow-md">
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
                  aria-label="Google Map showing our clinic location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-primary-800/30">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="text-white text-sm">
              &copy; {currentYear} KH Physiotherapy. All Rights Reserved.
            </div>
            <div className="flex items-center text-sm">
              <span className="text-white mr-4">Made with dedication to personalized care</span>
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center justify-center p-2 rounded-full bg-primary-800/80 text-accent hover:text-white hover:bg-accent/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                aria-label="Back to top"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 