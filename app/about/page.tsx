import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-primary-900 text-neutral-200">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="text-accent">Kareem Hassanein</span>
            </h1>
            <p className="text-neutral-300 text-lg">
              CAMPT-certified physiotherapist dedicated to evidence-based care and patient-centered treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section with Side-by-Side Layout */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/physiotherapist.jpg"
                  alt="Professional Physiotherapy Care"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 relative w-full rounded-lg overflow-hidden shadow-lg max-w-sm md:max-w-md mx-auto">
                <Image
                  src="/images/kareem-profile.png"
                  alt="Kareem Hassanein, Physiotherapist"
                  width={500}
                  height={625}
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover object-center w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-4 text-white">
                My Approach to Physiotherapy
              </h2>
              <p className="text-neutral-300 mb-6">
                As a registered physiotherapist, I bring evidence-based care to every treatment session. My approach combines manual therapy, exercise prescription, and patient education to help you understand your condition and become an active participant in your recovery.
              </p>
              <p className="text-neutral-300 mb-6">
                With a CAMPT certification, I have advanced training in manual therapy techniques that allow me to diagnose and treat the root cause of your pain or dysfunction, not just the symptoms. My goal is to help you achieve long-term results and provide you with the tools to maintain your health.
              </p>
              <p className="text-neutral-300 mb-6">
                I believe in personalized care—no two patients are the same, and your treatment plan should reflect your unique needs, goals, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section with Visual Elements */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">
              Credentials & Training
            </h2>
            <p className="text-neutral-300">
              Continuously advancing my education to provide the highest standard of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-700">
              <div className="rounded-lg bg-accent/10 p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-white">Education</h3>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Master of Physiotherapy, University of Toronto</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Bachelor of Science in Kinesiology, McMaster University</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>CAMPT-Certified Manual Therapist</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-700">
              <div className="rounded-lg bg-accent/10 p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-white">Specialized Training</h3>
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dry Needling & Acupuncture Certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Sports Injury Rehabilitation Specialist</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Active Release Technique (ART) Provider</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Treatment Showcase */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">
              Treatment Specialties
            </h2>
            <p className="text-neutral-300">
              Offering a range of specialized treatments to address your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-primary-700">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/manual-therapy.jpg"
                  alt="Manual Therapy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Manual Therapy</h3>
                <p className="text-neutral-300 text-sm">
                  Hands-on techniques to improve tissue mobility, reduce pain, and restore function to joints and muscles.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-primary-700">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/sports-injury.jpg"
                  alt="Sports Rehabilitation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Sports Rehabilitation</h3>
                <p className="text-neutral-300 text-sm">
                  Specialized programs for athletes to recover from injury and improve performance.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-primary-700">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/dry-needling.jpg"
                  alt="Dry Needling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Dry Needling</h3>
                <p className="text-neutral-300 text-sm">
                  Advanced technique targeting trigger points to relieve muscle tension and pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">
              Ready to Work Together?
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Book your appointment today and let's start your journey to better movement and pain-free living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#booking"
                className="btn btn-primary"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="btn bg-white/5 border border-transparent text-neutral-200 hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 