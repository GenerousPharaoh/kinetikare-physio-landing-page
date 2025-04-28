import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-50 text-primary-700">
      {/* Hero Section */}
      <section className="bg-white text-primary-800 py-20 relative border-b border-neutral-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="text-accent">Kareem Hassanein</span>
            </h1>
            <p className="text-primary-600 text-lg">
              CAMPT-certified physiotherapist dedicated to evidence-based care and patient-centered treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section with Side-by-Side Layout */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/kareem-profile.png"
                  alt="Kareem Hassanein, Physiotherapist"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  className="image-static"
                  priority
                />
              </div>
              <div className="mt-6 relative w-full rounded-lg overflow-hidden shadow-lg max-w-sm md:max-w-md mx-auto">
                <Image
                  src="/images/physiotherapist.jpg"
                  alt="Professional Physiotherapy Care"
                  width={500}
                  height={300}
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover object-center w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
                My Approach to Physiotherapy
              </h2>
              <p className="text-primary-600 mb-6">
                As a registered physiotherapist, I bring evidence-based care to every treatment session. My approach combines manual therapy, exercise prescription, and patient education to help you understand your condition and become an active participant in your recovery.
              </p>
              <p className="text-primary-600 mb-6">
                With a CAMPT certification, I have advanced training in manual therapy techniques that allow me to diagnose and treat the root cause of your pain or dysfunction, not just the symptoms. My goal is to help you achieve long-term results and provide you with the tools to maintain your health.
              </p>
              <p className="text-primary-600 mb-6">
                I believe in personalized care—no two patients are the same, and your treatment plan should reflect your unique needs, goals, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clinic Location Section */}
      <section className="py-16 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Our Clinic Location
            </h2>
            <p className="text-primary-600">
              Conveniently located at Endorphins Health & Wellness Centre in Burlington, Ontario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/clinic-exterior.jpg"
                  alt="Endorphins Health & Wellness Centre"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary-800">
                Endorphins Health & Wellness Centre
              </h3>
              <p className="text-primary-600 mb-4">
                Our clinic is located in a modern, accessible facility with ample parking and a welcoming environment.
              </p>
              <ul className="space-y-3 text-primary-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>4631 Palladium Way, Unit 6</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Burlington, ON L7M 0W9</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>(905) 634-6000</span>
                </li>
              </ul>
              <a
                href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent hover:bg-accent-dark text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section with Visual Elements */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Credentials & Training
            </h2>
            <p className="text-primary-600">
              Continuously advancing my education to provide the highest standard of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-neutral-200">
              <div className="rounded-lg bg-primary-50 p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary-700">Education</h3>
              </div>
              <ul className="space-y-3 text-primary-600">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-neutral-200">
              <div className="rounded-lg bg-primary-50 p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary-700">Specialized Training</h3>
              </div>
              <ul className="space-y-3 text-primary-600">
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
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Treatment Specialties
            </h2>
            <p className="text-primary-600">
              Offering a range of specialized treatments to address your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-neutral-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/manual-therapy.jpg"
                  alt="Manual Therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Manual Therapy</h3>
                <p className="text-primary-600 text-sm">
                  Hands-on techniques to improve tissue mobility, reduce pain, and restore function to joints and muscles.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-neutral-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/sports-injury.jpg"
                  alt="Sports Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Sports Rehabilitation</h3>
                <p className="text-primary-600 text-sm">
                  Specialized programs for athletes to recover from injury and improve performance.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group border border-neutral-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/dry-needling.jpg"
                  alt="Dry Needling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Dry Needling</h3>
                <p className="text-primary-600 text-sm">
                  Advanced technique targeting trigger points to relieve muscle tension and pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800">
              Ready to Work Together?
            </h2>
            <p className="text-primary-600 text-lg mb-8">
              Book your appointment today and let&apos;s start your journey to better movement and pain-free living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#booking"
                className="btn bg-accent hover:bg-accent-dark text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="btn bg-primary-50 border border-primary-200 text-primary-700 hover:bg-primary-100 transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 