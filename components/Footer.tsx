"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, LinkIcon, ArrowUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const footerLinks = [
    { 
      title: "Quick Links",
      links: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/#about' },
        { name: 'Conditions', href: '/#conditions' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Blog', href: '/blog' },
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
      text: 'kareem.hassanein@gmail.com',
      href: 'mailto:kareem.hassanein@gmail.com',
      ariaLabel: 'Email us'
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-accent flex-shrink-0" />,
      text: 'Mon-Fri: 2pm-8pm'
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

  // Handle navigation for footer links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For hash links on the home page
    if (href.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove /# part
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = document.querySelector('header')?.offsetHeight || 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // For non-home pages with hash links, navigate to the home page first
    else if (href.startsWith('/#') && window.location.pathname !== '/') {
      // Let the default navigation happen - will navigate to home page with hash
    }
  };

  return (
    <footer className="relative bg-neutral-50 text-primary-800 pt-8 pb-4 md:pb-4 mb-16 md:mb-0 border-t border-neutral-200/80 shadow-sm">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-100 via-accent/30 to-primary-100"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-80 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[100px]" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-100/40 blur-[80px]" aria-hidden="true"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
          {/* Left Column - Branding and Book Button */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="flex items-baseline mb-3">
                <span className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary-600">KH</span>
                <span className="font-heading text-accent ml-1 text-xl sm:text-2xl">Physiotherapy</span>
              </div>
              
              {/* Book Button */}
              <a 
                href="https://khphysiotherapy.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-medium px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent/5 mt-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 w-fit text-sm sm:text-base"
                aria-label="Book an appointment online"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              
              {/* Compact Contact Info */}
              <div className="space-y-2 text-xs sm:text-sm mb-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-2">
                    <div className="p-1.5 rounded-lg text-accent bg-primary-50 border border-primary-100 mt-0.5 sm:mt-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary-700 hover:text-accent transition-colors duration-200 inline-block"
                          aria-label={item.ariaLabel || item.text}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-primary-700">{item.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-2 mt-auto">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 text-primary-600 bg-primary-50 backdrop-blur-sm border border-primary-100 rounded-full hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 focus-visible:outline-none"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Middle Column - Navigation Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-3">
              {/* Mobile Dropdown */}
              <div className="md:hidden">
                {footerLinks.map((section) => (
                  <div key={section.title} className="mb-2">
                    <button 
                      onClick={() => toggleSection(section.title)}
                      className="flex justify-between items-center w-full py-2 px-3 bg-primary-50 rounded-lg text-primary-700 text-sm"
                    >
                      <span className="font-medium">{section.title}</span>
                      <ChevronDownIcon 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedSection === section.title ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {expandedSection === section.title && (
                      <div className="mt-2 pl-3 space-y-1.5">
                        {section.links.map((link) => (
                          <div key={link.name}>
                            <Link 
                              href={link.href} 
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="text-primary-700 hover:text-accent transition-all duration-200 text-sm flex items-center gap-1"
                            >
                              <span className="w-1 h-1 bg-accent/70 rounded-full flex-shrink-0"></span>
                              <span>{link.name}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-1">
                {footerLinks.map((section) => (
                  <div key={section.title} className="mb-4">
                    <h4 className="text-accent font-medium text-sm mb-2">{section.title}</h4>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-primary-700 hover:text-accent transition-all duration-200 flex items-center gap-1 text-xs"
                          >
                            <span className="w-1 h-1 bg-accent/70 rounded-full flex-shrink-0"></span>
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Map */}
          <div className="md:col-span-4 lg:col-span-6">
            <h4 className="font-medium text-sm text-primary-700 mb-2">Find Us</h4>
            <div className="overflow-hidden rounded-lg border border-neutral-200 shadow-md aspect-video md:aspect-square lg:aspect-[16/9]">
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
                aria-label="Google Map showing our clinic location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-3 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div className="text-primary-600/80 text-xs">
              &copy; {currentYear} KH Physiotherapy. All Rights Reserved.
            </div>
            <div className="flex items-center">
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center justify-center p-1.5 rounded-full bg-primary-50 text-accent hover:text-white hover:bg-accent/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50"
                aria-label="Back to top"
              >
                <ArrowUpIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 