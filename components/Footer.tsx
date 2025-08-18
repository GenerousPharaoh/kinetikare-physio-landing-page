"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Envelope, 
  Clock, 
  ArrowUp,
  FacebookLogo, 
  InstagramLogo, 
  LinkedinLogo 
} from "@phosphor-icons/react";
import Image from 'next/image';
import BackgroundTexture from './BackgroundTexture';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: '4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9',
      href: 'https://maps.app.goo.gl/syZN4FUBgACrtqgK9',
      ariaLabel: 'View my location on Google Maps'
    },
    {
      icon: <Phone className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000',
      ariaLabel: 'Call my office'
    },
    {
      icon: <Envelope className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: 'kareem.hassanein@gmail.com',
      href: 'mailto:kareem.hassanein@gmail.com',
      ariaLabel: 'Email us'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Tuesday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Thursday', hours: '1:30 PM - 8:00 PM' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kareem-hassanein-physiotherapy/',
      icon: <LinkedinLogo weight="fill" className="w-6 h-6" />
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
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white pt-12 relative overflow-hidden">
      {/* Premium subtle background pattern */}
      <BackgroundTexture texture="noise" opacity={0.02} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Centered Logo and Branding Section */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block" aria-label="Return to homepage">
            <Image
              src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
              alt="KinetiKare Physiotherapy Logo"
              width={80}
              height={80}
              className="mx-auto mb-4 opacity-90 hover:opacity-100 transition-opacity"
            />
            <h3 className="font-heading text-2xl text-white mb-2">
              KinetiKare <span className="text-gold">Physiotherapy</span>
            </h3>
            <p className="text-sm text-white/80 mb-3">Kareem Hassanein, Registered Physiotherapist</p>
          </Link>
          
          {/* Professional Registration Link */}
          <Link
            href="https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-gold hover:text-gold/80 transition-colors duration-300 mb-6"
          >
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            CPO Verified Registration
          </Link>
          
          {/* Social links */}
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                aria-label={`Visit ${social.name} profile`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 transform shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="mt-0.5 mr-3">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-gold transition-colors duration-300 break-words" aria-label={item.ariaLabel}>
                      {item.text}
                    </a>
                  ) : (
                    <span className="break-words">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">
              Hours
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span>{schedule.day}:</span>
                  <span className="text-white/70">{schedule.hours}</span>
                </li>
              ))}
              <li className="flex justify-between text-white/50 italic text-xs mt-3">
                <span>Wed, Fri-Sun:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link href="/services" className="hover:text-gold transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-gold transition-colors duration-300">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300 font-medium"
                >
                  Book Online
                </a>
              </li>
            </ul>
          </div>
          
          {/* Location Preview */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">
              Location
            </h3>
            <div className="rounded-lg overflow-hidden h-[200px] relative shadow-lg border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.518670972593!2d-79.82630139999999!3d43.4079889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61568c54cbff%3A0x433767b454bd4446!2sEndorphins%20Health%20and%20Wellness%20Centre!5e0!3m2!1sen!2sca!4v1745456201323!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Endorphins Health and Wellness Centre location"
                className="transition-all duration-500 hover:opacity-95"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/syZN4FUBgACrtqgK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-gold hover:text-gold/80 transition-colors duration-300 mt-2"
            >
              View larger map
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-xs text-white/60 mb-4 md:mb-0">
              © {currentYear} KinetiKare Physiotherapy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-white/60">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <span className="text-white/20">•</span>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
              <span className="text-white/20">•</span>
              <Link href="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gold shadow-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp weight="bold" className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
} 