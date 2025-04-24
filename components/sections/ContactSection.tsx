"use client";

import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  // Simplified contact info array
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Clinic Address',
      lines: ['Endorphins Health and Wellness', '4631 Palladium Way, Unit 6', 'Burlington, ON L7M 0W9'],
      href: 'https://www.google.com/maps/place/Endorphins+Health+and+Wellness+Centre/@43.4079928,-79.8288817,17z'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Number',
      lines: ['(905) 634-6000'],
      href: 'tel:+19056346000'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Address',
      lines: ['kareem.hassanein@gmail.com'],
      href: 'mailto:kareem.hassanein@gmail.com'
    },
    {
      icon: ClockIcon,
      title: 'Clinic Hours',
      lines: [
        'Monday - Thursday: 8:00 AM - 8:00 PM',
        'Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <section id="contact" className="section bg-neutral-50 text-primary-700 overflow-hidden py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-700 mb-4">
            Contact Information
          </h2>
          <p className="section-subtitle text-lg text-primary-600 mx-auto max-w-3xl">
            Have questions or ready to start your recovery journey? Reach out today.
          </p>
          <div className="w-20 h-px bg-accent mx-auto mt-6"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-5">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-2">{item.title}</h4>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-primary-600 mb-1">
                      {item.href && i === 0 ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 underline underline-offset-2">
                          {line}
                        </a>
                      ) : ( line )}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Booking CTA */}
        <div className="text-center mt-16">
          <p className="mb-6 text-lg">For the fastest response, please book directly through our online system:</p>
          <a 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
