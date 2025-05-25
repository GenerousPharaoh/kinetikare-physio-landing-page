import React from 'react';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physiotherapy Services | Kareem Hassanein',
  description: 'Advanced physiotherapy services including sports rehabilitation, manual therapy, dry needling, and more for better movement and pain-free living.',
};

const services = [
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    description: 'Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted tissue manipulation.',
    image: '/images/manual-therapy.jpg',
    features: [
      'Joint mobilization and manipulation',
      'Soft tissue release techniques',
      'Fascial release therapy',
      'Proprioceptive neuromuscular facilitation',
    ],
  },
  {
    id: 'sports-rehab',
    title: 'Sports Rehabilitation',
    description: 'Tailored rehabilitation for athletes to recover from injury and return to their sport safely and stronger.',
    image: '/images/sports-injury.jpg',
    features: [
      'Sport-specific movement analysis',
      'Progressive strength training',
      'Functional movement restoration',
      'Return-to-sport testing and programming',
    ],
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    description: 'Precision therapy using thin filiform needles to release trigger points and relieve muscular pain and tension.',
    image: '/images/dry-needling.jpg',
    features: [
      'Trigger point release',
      'Improved blood flow to tissues',
      'Reduced muscle tension',
      'Enhanced tissue healing',
    ],
  },
  {
    id: 'exercise-therapy',
    title: 'Exercise Therapy',
    description: 'Customized exercise programs designed to restore function, build strength, and prevent injury recurrence.',
    image: '/images/exercise-therapy.jpg',
    features: [
      'Personalized exercise prescription',
      'Progressive resistance training',
      'Functional movement training',
      'Home exercise programming',
    ],
  },
  {
    id: 'postural-assessment',
    title: 'Posture & Ergonomic Assessment',
    description: 'Comprehensive analysis of your posture and work environment to address pain and prevent future issues.',
    image: '/images/posture-assessment.jpg',
    features: [
      'Detailed postural evaluation',
      'Workplace ergonomic assessment',
      'Corrective exercise prescription',
      'Lifestyle modification guidance',
    ],
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: 'Evidence-based approaches to reduce persistent pain through multiple modalities and self-management strategies.',
    image: '/images/pain-management.jpg',
    features: [
      'Pain neuroscience education',
      'Manual pain relief techniques',
      'Lifestyle and activity modification',
      'Graded motor imagery and pain desensitization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col text-primary-700 bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 text-primary-800 py-10 pt-20 relative border-b border-neutral-200">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              Physiotherapy <span className="text-[#B08D57]">Services</span>
            </h1>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Professional care tailored to your unique needs, combining advanced techniques with personalized attention.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57] opacity-20"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="premium-card rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ClientImage 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-heading font-semibold mb-3 text-primary-800">
                    {service.title}
                  </h2>
                  <p className="text-primary-700 mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">
                      Key Benefits
                    </h3>
                    <ul className="space-y-1 text-primary-700 text-sm">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 section-light border-y border-[#B08D57]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              The Treatment Process
            </h2>
            <p className="text-primary-800 font-medium">
              What to expect during your physiotherapy journey with me.
            </p>
            <div className="w-32 h-0.5 bg-[#B08D57] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">1</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Patient-Led Discovery</h3>
              <p className="text-primary-700">
                You lead the way by sharing your experience, concerns, and goals in an open, judgment-free environment.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">2</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Assessment</h3>
              <p className="text-primary-700">
                A thorough evaluation of your condition, medical history, and goals to create a personalized treatment plan.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">3</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Treatment</h3>
              <p className="text-primary-700">
                Evidence-based interventions combining manual therapy, exercise, and education to address your specific needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1A2036] rounded-full text-[#D4AF37] font-bold text-2xl flex items-center justify-center mb-4 shadow-md">4</div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-primary-800">Adaptive Progress</h3>
              <p className="text-primary-700">
                Collaborative fine-tuning of your program based on your response, ensuring optimal recovery through continuous adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-gradient-accent text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">
              Insurance Coverage
            </h2>
            <div className="w-32 h-0.5 bg-white/60 mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto text-left border border-white/20">
            <p className="text-white/90 mb-4 font-medium">
              Physiotherapy services are covered by most extended health insurance plans. We offer direct billing with many providers, including:
            </p>
            <ul className="list-disc list-inside text-white/90 mb-6 space-y-1 font-medium">
              <li>Green Shield</li>
              <li>Blue Cross</li>
              <li>Sun Life</li>
              <li>Manulife</li>
              <li>Great-West Life</li>
              <li>WSIB</li>
            </ul>
            <p className="text-white/90">
              Not sure if your insurance plan covers your treatment? Contact us and we'll help verify your coverage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-subtle border-t border-[#B08D57]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-10 rounded-xl bg-white shadow-lg border border-[#B08D57]/10">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Ready to Address Your Pain?
            </h2>
            <p className="text-primary-800 text-lg mb-8 font-medium">
              Partner with a physiotherapist dedicated to understanding your unique needs and achieving lasting results. Schedule your comprehensive assessment today.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1A2036] hover:bg-[#252E4A] text-[#D4AF37] rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg border border-[#1A2036]"
            >
              Book Your Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 