"use client";

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AnimateOnScroll from '../AnimateOnScroll';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      // Here you would normally send data to your API
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data submitted:", data);
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or want to schedule an appointment? 
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Location</h4>
                      <p className="text-gray-600">Endorphins Health and Wellness Centre<br />4631 Palladium Wy Unit 6, Burlington, ON L7M 0W9</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Email</h4>
                      <p className="text-gray-600">kareem.hassanein@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Phone</h4>
                      <p className="text-gray-600">(905) 634-6000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 2PM - 8PM<br />
                        Saturday: Available upon request<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-800 mb-6">Send a Message</h3>
                
                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you! Your message has been sent successfully.
                  </div>
                ) : null}
                
                {errorMessage ? (
                  <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                    {errorMessage}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your name"
                      {...register('name')}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your email"
                      {...register('email')}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your phone number"
                      {...register('phone')}
                    />
                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="How can we help you?"
                      {...register('message')}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-75"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
