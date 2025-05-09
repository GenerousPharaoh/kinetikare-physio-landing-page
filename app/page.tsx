"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Professional Physiotherapy Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Specialized care for pain relief, rehabilitation, and improved mobility. Our expert physiotherapists are dedicated to helping you achieve optimal physical well-being.
            </p>
            <Link href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
              Book Appointment
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Sports Rehabilitation</h3>
                <p className="text-gray-600">
                  Specialized treatment for sports-related injuries designed to get you back to your peak performance safely.
                </p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Pain Management</h3>
                <p className="text-gray-600">
                  Effective strategies to reduce chronic pain and improve your quality of life through personalized therapy.
                </p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Post-Surgery Recovery</h3>
                <p className="text-gray-600">
                  Comprehensive rehabilitation programs to help you recover faster after surgical procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              About Us
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                Our clinic brings together expert physiotherapists with years of specialized training and experience. We're dedicated to providing evidence-based care that addresses the root causes of physical discomfort and limitation.
              </p>
              <p className="text-lg">
                Using state-of-the-art equipment and innovative techniques, we develop personalized treatment plans that focus on your specific needs and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
              Contact Us
            </h2>
            <div className="max-w-xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-8">
                  <p className="text-lg">
                    Book your appointment today
                  </p>
                  <p className="text-xl font-bold mt-2">
                    (123) 456-7890
                  </p>
                  <p className="mt-1">
                    123 Therapy Street, Burlington, Ontario
                  </p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 