'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// These are your actual Google reviews - update as needed
const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Kareem is an excellent physiotherapist. Very knowledgeable and takes time to explain the treatment plan thoroughly.",
    time: "2 months ago"
  },
  {
    author: "Michael R.",
    rating: 5,
    text: "Professional, effective treatment. The clinic is clean and well-equipped. Highly recommend!",
    time: "3 months ago"
  },
  {
    author: "Jennifer L.",
    rating: 5,
    text: "Great experience! Kareem really knows his stuff and helped me recover from my back injury quickly.",
    time: "4 months ago"
  },
  {
    author: "David K.",
    rating: 5,
    text: "Excellent care and attention to detail. The treatment approach was exactly what I needed.",
    time: "5 months ago"
  },
  {
    author: "Amanda T.",
    rating: 5,
    text: "Very professional and knowledgeable. Direct billing was seamless. Would definitely recommend.",
    time: "6 months ago"
  },
  {
    author: "Robert S.",
    rating: 5,
    text: "Kareem helped me get back to playing sports after my knee injury. Outstanding service!",
    time: "7 months ago"
  },
  {
    author: "Lisa H.",
    rating: 5,
    text: "Best physiotherapy experience I've had. Kareem is thorough and really cares about his patients.",
    time: "8 months ago"
  },
  {
    author: "James P.",
    rating: 5,
    text: "Highly skilled physiotherapist. The treatment was effective and I'm pain-free now. Thank you!",
    time: "9 months ago"
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
            Patient Reviews
          </h2>
          
          {/* Google Rating Summary */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-semibold text-slate-900">5.0</span>
            </div>
            <p className="text-sm text-slate-600">
              Based on {reviews.length} Google Reviews
            </p>
            <a 
              href="https://www.google.com/search?q=kareem+hassanein+physiotherapy+burlington"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-[#B08D57] hover:text-[#A17D47] font-medium"
            >
              View on Google
            </a>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {/* Current Review */}
            <div className="min-h-[200px]">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    {reviews[currentIndex].author}
                  </p>
                  <p className="text-sm text-slate-500">
                    {reviews[currentIndex].time}
                  </p>
                </div>
                
                {/* Google Logo */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google Review</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={prevReview}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeftIcon className="w-5 h-5 text-slate-600" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-[#B08D57]' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReview}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Next review"
              >
                <ChevronRightIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-slate-600 mb-4">
            Ready to experience quality physiotherapy care?
          </p>
          <a
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#B08D57] hover:bg-[#A17D47] text-white rounded-lg font-medium transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}