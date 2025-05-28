"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    image: "/images/avatars/avatar-1.jpg",
    content: "After seeing multiple physiotherapists, I finally found someone who truly listens and understands. Kareem's approach goes beyond just treating symptoms - he helped me understand my body mechanics and gave me the tools to prevent future injuries. I've been seeing him for over two years now, and my running performance has never been better.",
    rating: 5,
    highlight: "2+ years of continuous care"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Software Developer",
    image: "/images/avatars/avatar-2.jpg",
    content: "The extended hours including Saturdays have been a game-changer for my busy schedule. Kareem doesn't rush through appointments - he takes the time to ensure you understand your treatment plan. His innovative use of technology for exercises and follow-ups shows he truly cares about making recovery accessible.",
    rating: 5,
    highlight: "Saturday appointments available"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Teacher & Mother of Two",
    image: "/images/avatars/avatar-3.jpg",
    content: "What sets Kareem apart is his genuine commitment to patient care. When I needed urgent treatment, he stayed late to accommodate me. He remembers details about my progress and life, making each session feel personalized. My entire family now sees him for any physiotherapy needs.",
    rating: 5,
    highlight: "Entire family trusts his care"
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Retired Engineer",
    image: "/images/avatars/avatar-4.jpg",
    content: "At 72, I was skeptical about physiotherapy helping my chronic back pain. Kareem's patient-centered approach and advanced manual therapy techniques have given me a new lease on life. He explains everything clearly and adjusts treatments based on my comfort level. I've referred over 10 friends to him.",
    rating: 5,
    highlight: "10+ patient referrals"
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Professional Athlete",
    image: "/images/avatars/avatar-5.jpg",
    content: "Kareem's expertise in sports rehabilitation is exceptional. He developed a comprehensive return-to-sport protocol that got me back on the field faster than expected. His dedication shows in the way he follows up between sessions and celebrates your victories with you.",
    rating: 5,
    highlight: "Expert sports rehabilitation"
  },
  {
    id: 6,
    name: "Michael Foster",
    role: "Construction Worker",
    image: "/images/avatars/avatar-6.jpg",
    content: "After a workplace injury, I needed someone who understood the physical demands of my job. Kareem not only treated my injury but also taught me proper body mechanics for work. His practical approach and genuine care have kept me injury-free for over a year now.",
    rating: 5,
    highlight: "Workplace injury specialist"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of patients who have experienced exceptional care and lasting results
            </p>
            
            {/* Trust metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              className="flex flex-wrap justify-center gap-8 mt-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">5.0 Average Rating</span>
              </div>
              <div className="text-gray-700">
                <span className="font-bold text-[#B08D57]">90%</span> Patient Return Rate
              </div>
              <div className="text-gray-700">
                <span className="font-bold text-[#B08D57]">600+</span> Patients Served
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                className="bg-white rounded-2xl shadow-lg p-8 relative group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Highlight badge */}
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {testimonial.highlight}
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-[#D4AF37]" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#B08D57] to-[#D4AF37] p-0.5">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#B08D57] font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-[#B08D57]/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-700 mb-8">
              Experience the difference of truly personalized physiotherapy care
            </p>
            <a 
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Join Our Success Stories
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 