'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: "Dr. Fel Rocci",
    text: "I had ACL surgery on my right knee following a tennis injury in April, 1999. As a result of ignoring my orthopedic surgeon's advice at that time to undergo one year of physiotherapy treatment, my right leg stiffened and weakened. This resulted in throwing off my entire body alignment, spinal column and left leg. In my effort to return to playing tennis in 2022, I ran into setbacks related to my existing injuries. Finally, 25 years since the injury I pursued treatment after meeting Kareem in March, 2024. His thorough diagnosis combined with an adaptable approach that shifted to optimize my progress has been nothing short of amazing! He adjusted treatment to compliment my progress utilizing deep tissue massage, dry needling and targeted exercises. It has taken just 14 months to restore my function to about 90% of normal, and I believe we will get to 100%. What matters to me is being able to play tennis unencumbered by injury. Having worked with Kareem my game has not only improved significantly over these past 3 years - I am also now able to play 4-5 times a week without incurring a setback. Not bad for a 70 year old! I write this review not only to acknowledge Kareem's diagnostic and treatment skills, but to 'pay it forward'. To those who are struggling with chronic pain and mobility issues, hesitate no further - your quality of life will be significantly improved in short order with a treatment plan tailor-made for you"
  },
  {
    name: "Thanula Gnanakanthan",
    text: "I've been seeing Kareem for physiotherapy and I can honestly say the experience has been outstanding. I came in with an ankle injury and from the very first session, Kareem was thorough, knowledgeable, and incredibly attentive. He took the time to explain the root of the issue, set clear goals, and crafted a personalized treatment plan that included hands-on therapy and guided exercises. What I really appreciated was how funny, kindhearted and compassionate he was, it made each session something I looked forward to. I saw consistent progress and now feel stronger and pain free. Highly recommend Kareem to anyone looking for an experienced physiotherapist who takes the time to listen and deliver results."
  },
  {
    name: "Tami Murzin",
    text: "I had a fantastic experience working with Kareem Hassanein for a shoulder injury. From the start, Kareem took the time to really understand the issue and developed a treatment plan that was both effective and manageable. Kareem's knowledge, encouragement, and hands-on approach helped me regain strength and mobility much faster than I expected. I always felt listened to and supported, and he provided great guidance on exercises I could do at home to keep progressing. I'm so grateful for Kareem's care and would highly recommend him to anyone dealing with an injury—especially if you're looking for someone who combines expertise with genuine compassion."
  },
  {
    name: "Mitch Ball",
    text: "I struggled with rotator cuff, hip, and back pain from weightlifting for a long time. Kareem's approach was great. His assessments helped me understand what was wrong, the exercises were effective, and the dry needling and deep tissue work really accelerated my recovery. He knows his stuff. Highly recommend."
  },
  {
    name: "D Belisle",
    text: "I can't recommend Kareem highly enough! After undergoing knee surgery, I was fortunate to have him as my physiotherapist. From day one, he took the time to truly understand my situation and tailor a treatment plan. Kareem also developed a comprehensive at-home exercise program—it was clear, structured, and was adapted as I progressed. Kareem was incredibly attentive, always making sure I performed each exercise correctly and safely. I never once felt rushed during our sessions; he always made time to answer my questions and listened carefully to any concerns I had. His professionalism, knowledge, and genuine care made a huge difference in my recovery. If you're looking for a physiotherapist who is thorough, patient, and truly dedicated to your recovery, look no further."
  },
  {
    name: "Nader S",
    text: "I took my elderly father to Kareem for his mobility issues and hip/back pain. He took his time to assess his my father's issue to determine the appropriate care. My father had a wonderful experience under Kareem's care, his issues immediately improved."
  },
  {
    name: "Marko Vasilic",
    text: "I had been struggling with achilles tendinitis and plantar fasciitis for months, and it was holding me back from playing basketball the way I wanted. Kareem did a full movement analysis and tested all of the surrounding joints and muscles, which really showed me where the extra stress was coming from. Treatment included deep trigger point release with dry needling, cupping to ease the tightness, and exercises that were specific to building the strength and mobility I needed on the court. The progress was steady, and before long the pain and stiffness had eased up and I felt confident moving again. I'm now back to playing comfortably without worrying about my Achilles or heel flaring up. I highly recommend Kareem for any athletes trying to get back to playing comfortably."
  },
  {
    name: "Ryan Darkwah",
    text: "I went to Kareem because my knees were hurting every time I jumped playing ball. He found that the problem came from weakness in my hip and tension in my quads that was putting extra strain on my patellar tendon. Kareem used dry needling on my quads to release the tightness and had me work on strengthening the right muscles. My pain's gone now, and I'm back to playing at full speed. He really knows his stuff and helped me get back on the court feeling stronger than before. I'd definitely recommend him to any athletes dealing with nagging injuries 💪🏿"
  },
  {
    name: "Pasquale Di Clemente",
    text: "Kareem has really helped me with the pain in my ankle and glute. He's great at adjusting each session based on how I'm feeling that day and always checks in to make sure I'm making progress. The exercises he's given me have made a big difference in my strength and balance, and he even sends videos with clear instructions so I never forget what to do. The dry needling and cupping have also helped loosen up my tight muscles and speed up my recovery. He asks the right questions that get to what's really going on, and I always feel like he's paying attention to the details. I was a bit nervous starting with someone new, but Kareem is easygoing and relatable, and now I actually look forward to my sessions. The clinic itself is comfortable and welcoming, which makes the whole experience even better."
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Generate Review schema for each review
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "Review",
      "position": index + 1,
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Kareem Hassanein Physiotherapy",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4631 Palladium Way, Unit 6",
          "addressLocality": "Burlington",
          "addressRegion": "ON",
          "postalCode": "L7M 0W9",
          "addressCountry": "CA"
        }
      }
    }))
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000); // Change review every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible reviews for carousel (current, prev, next)
  const getVisibleReviews = () => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [
      { ...reviews[prevIndex], position: 'prev' },
      { ...reviews[currentIndex], position: 'current' },
      { ...reviews[nextIndex], position: 'next' }
    ];
  };

  return (
    <section className="section-luxury-spacing bg-gradient-to-b from-white to-gray-50 texture-luxury">
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-semibold text-gray-800">5.0</span>
            <span className="text-gray-600">(11 reviews)</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-2 heading-luxury-1">Google Reviews</h2>
          <p className="max-w-2xl mx-auto text-luxury-subtle">
            What patients are saying
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative h-[600px] md:h-[550px]">
              <AnimatePresence mode="wait">
                {getVisibleReviews().map((review, index) => (
                  <motion.div
                    key={`${review.name}-${review.position}`}
                    initial={{
                      opacity: 0,
                      x: review.position === 'prev' ? -100 : review.position === 'next' ? 100 : 0,
                      scale: review.position === 'current' ? 1 : 0.85
                    }}
                    animate={{
                      opacity: review.position === 'current' ? 1 : 0.3,
                      x: review.position === 'prev' ? -350 : review.position === 'next' ? 350 : 0,
                      scale: review.position === 'current' ? 1 : 0.85,
                      filter: review.position === 'current' ? 'blur(0px)' : 'blur(3px)'
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={`absolute inset-0 ${
                      review.position === 'current' ? 'z-20' : 'z-10 hidden md:block'
                    }`}
                  >
                    <div className="h-full flex items-center justify-center px-4">
                      <div className="bg-white rounded-2xl shadow-luxury-deep hover:shadow-luxury-float transition-all duration-600 p-10 max-w-3xl w-full border border-gray-200 h-[550px] md:h-[500px] flex flex-col relative overflow-hidden">
                        {/* Google Badge */}
                        <div className="flex items-center gap-2 mb-4 flex-shrink-0 relative z-10">
                          <div className="w-5 h-5 relative">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">Google Review</span>
                        </div>

                        {/* Stars - Yellow with subtle styling */}
                        <div className="flex gap-0.5 mb-5 flex-shrink-0 relative z-10">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Text - Bolder, More Prominent, Scrollable */}
                        <div className="flex-grow overflow-y-auto mb-5 pr-3 relative z-10" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db transparent' }}>
                          <p className="text-slate-700 leading-relaxed text-base">
                            {review.text}
                          </p>
                        </div>

                        {/* Reviewer Name - Enhanced */}
                        <div className="flex items-center justify-between flex-shrink-0 pt-4 border-t border-gray-200 relative z-10">
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="text-sm text-gray-500">Verified Patient</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - Outside overflow container */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-150 group pointer-events-auto cursor-pointer border-0 outline-none focus:outline-none"
              style={{ transform: 'translate(-3rem, -50%)' }}
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 z-30 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-150 group pointer-events-auto cursor-pointer border-0 outline-none focus:outline-none"
              style={{ transform: 'translate(3rem, -50%)' }}
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 border-0 outline-none focus:outline-none cursor-pointer ${
                index === currentIndex
                  ? 'w-1.5 h-1.5 md:w-2 md:h-2 bg-[#B08D57]'
                  : 'w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-300 hover:bg-[#B08D57]/60'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/search?q=kareem+hassanein+physiotherapy+burlington"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>Read all reviews on Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}