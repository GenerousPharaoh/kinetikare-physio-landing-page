"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Envelope, 
  Clock, 
  ArrowUp, 
  CaretDown, 
  FacebookLogo, 
  InstagramLogo, 
  TwitterLogo, 
  LinkedinLogo 
} from "@phosphor-icons/react";
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      icon: <MapPin className="w-5 h-5 text-accent flex-shrink-0" weight="duotone" />,
      text: '4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9',
      href: 'https://www.google.com/maps/place/Endorphins+Health+and+Wellness+Centre/@43.4079928,-79.8288817,17z',
      ariaLabel: 'View our location on Google Maps'
    },
    {
      icon: <Phone className="w-5 h-5 text-accent flex-shrink-0" weight="duotone" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000',
      ariaLabel: 'Call our office'
    },
    {
      icon: <Envelope className="w-5 h-5 text-accent flex-shrink-0" weight="duotone" />,
      text: 'kareem.hassanein@gmail.com',
      href: 'mailto:kareem.hassanein@gmail.com',
      ariaLabel: 'Email us'
    },
    {
      icon: <Clock className="w-5 h-5 text-accent flex-shrink-0" weight="duotone" />,
      text: 'Mon-Fri: 2pm-8pm'
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kareem-hassanein-60585133a',
      icon: <LinkedinLogo weight="fill" className="w-5 h-5" />
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
    <footer className="bg-primary-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-dots-sm opacity-[0.03] text-white pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Logo and contact info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block" aria-label="Return to homepage">
              <Image
                src="/images/logo-light.png"
                alt="KH Physiotherapy"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            
            <div className="space-y-4 text-neutral-200">
              {contactInfo.map((item, index) => (
                <p key={index} className="flex items-start">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="ml-3 hover:text-accent transition-colors duration-300" aria-label={item.ariaLabel}>
                      {item.text}
                    </a>
                  ) : (
                    <span className="ml-3">{item.text}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-flex">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/40 rounded-full -z-10"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'FAQ', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
                    className="text-neutral-200 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-flex">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/40 rounded-full -z-10"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Manual Therapy', 
                'Movement Assessment', 
                'Therapeutic Exercise', 
                'Pain Management', 
                'Sports Rehabilitation'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services/#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-neutral-200 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-flex">
              <span className="relative z-10">Hours of Operation</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/40 rounded-full -z-10"></span>
            </h3>
            <ul className="space-y-3 text-neutral-200">
              {[
                { day: 'Monday - Thursday', hours: '9:00 AM - 8:00 PM' },
                { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
                { day: 'Saturday', hours: 'By Appointment' },
                { day: 'Sunday', hours: 'Closed' }
              ].map((schedule) => (
                <li key={schedule.day} className="flex justify-between border-b border-white/10 pb-2">
                  <span>{schedule.day}</span>
                  <span className="text-accent font-medium">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social links and payment methods */}
        <div className="border-t border-white/10 pt-8 pb-6 grid gap-6 md:grid-cols-1 items-center">
          {/* Social links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                aria-label={`Visit ${social.name} profile`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors duration-300 flex items-center justify-center hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-neutral-300">
            © {currentYear} KH Physiotherapy. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6 text-xs text-neutral-400">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-accent transition-colors">Accessibility</Link>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-lg hover:bg-accent-dark transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          aria-label="Back to top"
        >
          <ArrowUp weight="bold" className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
} 