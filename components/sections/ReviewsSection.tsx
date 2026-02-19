"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, CalendarIcon } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

// Import QuoteIcon (custom component)
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    condition: "Sports Injury Recovery",
    text: "The therapists here truly understand athletic injuries. Their tailored approach to my knee rehabilitation got me back on the field faster than I expected.",
    rating: 5,
    date: "February 2023",
    imageSrc: "/images/testimonials/michael-r.jpg",
    highlight: true
  },
  {
    id: 2,
    name: "Sarah Thompson",
    condition: "Post-Surgery Rehabilitation",
    text: "After my shoulder surgery, I was concerned about regaining full mobility. The team designed a progressive recovery plan that was both challenging and manageable.",
    rating: 5,
    date: "March 2023",
    imageSrc: "/images/testimonials/sarah-t.jpg",
    highlight: false
  },
  {
    id: 3,
    name: "David Chen",
    condition: "Chronic Neck Pain",
    text: "I've lived with neck pain for years from desk work. Their combination of manual therapy and posture training has made a significant difference in my daily comfort.",
    rating: 4,
    date: "January 2023",
    imageSrc: "/images/testimonials/david-c.jpg",
    highlight: false
  },
  {
    id: 4,
    name: "Lisa Martinez",
    condition: "Arthritis Management",
    text: "Living with arthritis is challenging, but their therapeutic approaches have helped me maintain mobility and reduce pain. I appreciate their holistic perspective.",
    rating: 5,
    date: "April 2023",
    imageSrc: "/images/testimonials/lisa-m.jpg",
    highlight: false
  }
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });

  const handleBookClick = () => {
    // Implement the booking logic here
  };

  return (
    <section id="reviews" className="bg-neutral-50 text-primary-700 py-20 sm:py-24 md:py-28 relative border-t border-neutral-200">
      {/* Static decorative elements instead of animated for better performance */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-1/2 bg-primary-100/40 blur-3xl rounded-full opacity-20"
        aria-hidden="true"
      />
      
      <div 
        className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-accent/10 blur-3xl rounded-full opacity-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            {/* Simplified section header with fewer animations */}
            <div className="inline-block mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center mx-auto shadow-lg border border-primary-300/50">
                <Star className="w-8 h-8 text-accent" />
              </div>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-700 mb-4">
              Patient Testimonials
              <span 
                className="block mx-auto mt-3 w-20 h-1.5 bg-accent rounded-full"
              />
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto mt-6">
              Hear what patients have to say about their experience and results.
            </p>
          </motion.div>

          <motion.div 
            className="mb-16 lg:mb-20"
            variants={itemVariants}
          >
            {/* Top testimonial */}
            <GlassCard
              className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl bg-white border border-primary-100"
              animate={false}
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 relative">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src="/images/testimonials/emma-j.jpg" 
                      alt="Emma J." 
                      fill
                      className="object-cover"
                      sizes="80px"
                      loading="eager"
                      priority
                    />
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-primary-700 text-center mb-6 relative">
                  <QuoteIcon className="absolute -top-6 -left-4 w-12 h-12 text-primary-200 opacity-70" aria-hidden="true" />
                  <p className="relative z-10">
                    &quot;As someone who&apos;s tried many physiotherapists over the years for my chronic back pain, I can confidently say that the care I received here was exceptional. Their approach is thorough, personalized, and effective. For the first time in years, I&apos;m able to enjoy activities I thought were behind me.&quot;
                  </p>
                </blockquote>
                
                <div className="text-center">
                  <div className="font-medium text-primary-700">Emma Johnson</div>
                  <div className="text-primary-600 text-sm">Treated for chronic lower back pain</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Grid of testimonials with optimized rendering */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                custom={index}
                style={{ willChange: 'opacity, transform' }}
              >
                <GlassCard
                  className="h-full p-6 md:p-8 rounded-xl bg-white border border-primary-100 flex flex-col"
                  animate={false}
                >
                  <div className="flex items-start mb-4">
                    <div className="mr-4 relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name} 
                          fill
                          className="object-cover"
                          sizes="48px"
                          loading={index < 2 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-primary-700">{testimonial.name}</div>
                      <div className="text-primary-600 text-sm">{testimonial.condition}</div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-primary-700 mb-4 flex-1">
                    <p>{testimonial.text}</p>
                  </blockquote>
                  
                  <div className="text-sm text-primary-600">
                    <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                    {testimonial.date}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Interactive call to action with simpler animation */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className="text-primary-600 mb-6">
              Ready to experience the same results? Book your appointment today.
            </p>
            <Link 
              href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg relative overflow-hidden" 
            >
              Schedule Your Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection; 
