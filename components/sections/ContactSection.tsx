"use client";

import React, { useState, useRef } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from 'lucide-react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  PaperAirplaneIcon, // Replaces Send
  CheckCircleIcon, // Replaces Check
  ExclamationCircleIcon // Replaces AlertCircle
} from '@heroicons/react/24/outline'; // Using outline icons

// Define interfaces for form state and validation
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      lines: ['info@khphysiotherapy.com'],
      href: 'mailto:info@khphysiotherapy.com'
    },
    {
      icon: ClockIcon,
      title: 'Clinic Hours',
      lines: ['Mon-Thurs: 9am - 8pm', 'Fri: 9am - 5pm']
    }
  ];

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being changed
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus(null);

    // Simulate API call
    // Replace with your actual form submission logic (e.g., fetch to API endpoint)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // Simulate success
      setStatus({ submitted: true, success: true, message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
      setErrors({});
      formRef.current?.reset(); // Ensure form element is visually reset
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ submitted: true, success: false, message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-primary-900 text-neutral-200 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Get In Touch
          </h2>
          <p className="section-subtitle text-lg text-neutral-300 mx-auto max-w-3xl">
            Have questions or ready to start your recovery journey? Reach out today.
          </p>
          <div className="w-20 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Info Column */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-neutral-300">
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

          {/* Contact Form Column */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className={`form-input ${errors.name ? 'border-red-500' : 'border-primary-700'}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className={`form-input ${errors.email ? 'border-red-500' : 'border-primary-700'}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1">Phone (Optional)</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input border-primary-700"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">Subject *</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className={`form-input ${errors.subject ? 'border-red-500' : 'border-primary-700'}`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                 {errors.subject && <p id="subject-error" className="text-red-400 text-xs mt-1">{errors.subject}</p>}
             </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message *</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`form-textarea ${errors.message ? 'border-red-500' : 'border-primary-700'}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              
              {/* Submission Button */}
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5 mr-2 -ml-1" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Status Message */} 
              {status && (
                <div 
                  role="alert"
                  className={`mt-4 p-4 rounded-md text-sm flex items-start 
                    ${status.success 
                      ? 'bg-green-900/50 border border-green-700 text-green-200' 
                      : 'bg-red-900/50 border border-red-700 text-red-200'}`
                  }
                >
                  {status.success ? 
                    <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green-400" /> : 
                    <ExclamationCircleIcon className="w-5 h-5 mr-2 flex-shrink-0 text-red-400" />
                  }
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* Update local styles for dark form inputs */}
      <style jsx>{`
        .form-input,
        .form-textarea {
          @apply block w-full px-4 py-2 rounded-md border bg-primary-800 text-neutral-200 shadow-sm 
                 border-primary-700 placeholder-neutral-500 
                 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none
                 transition duration-150 ease-in-out sm:text-sm;
        }
        .form-input:-webkit-autofill,
        .form-input:-webkit-autofill:hover,
        .form-input:-webkit-autofill:focus,
        .form-textarea:-webkit-autofill,
        .form-textarea:-webkit-autofill:hover,
        .form-textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #e5e5e5; /* Light text color */
          -webkit-box-shadow: 0 0 0px 1000px #1A3A43 inset; /* primary-800 approx */
          transition: background-color 5000s ease-in-out 0s;
        }
        .form-textarea {
          min-height: 100px;
        }
      `}</style>
    </section>
  );
}
