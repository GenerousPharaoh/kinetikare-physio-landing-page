import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-50 text-primary-700">
      {/* Hero Section */}
      <section className="bg-premium-light text-primary-800 py-20 relative border-b border-neutral-200 section-premium">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 premium-text-shadow">
              About <span className="premium-gradient-text">Kareem Hassanein</span>
            </h1>
            <p className="text-primary-800 text-lg font-medium">
              CAMPT-certified physiotherapist dedicated to evidence-based care and patient-centered treatment.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-premium-accent opacity-10"></div>
      </section>

      {/* Bio Section with Side-by-Side Layout */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-premium-card premium-image">
                <Image
                  src="/images/kareem-profile.png"
                  alt="Kareem Hassanein, Physiotherapist"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  className="image-static"
                  priority
                />
              </div>
              <div className="mt-6 relative w-full rounded-lg overflow-hidden shadow-premium-subtle max-w-sm md:max-w-md mx-auto premium-image">
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
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
                My Approach to Physiotherapy
              </h2>
              <div className="premium-border mb-6 bg-white/80 p-6 rounded-lg shadow-premium-subtle">
                <p className="text-primary-800 mb-6">
                  As a registered physiotherapist, I bring evidence-based care to every treatment session. My approach combines manual therapy, exercise prescription, and patient education to help you understand your condition and become an active participant in your recovery.
                </p>
                <p className="text-primary-800 mb-6">
                  With a <span className="highlight-premium font-medium">CAMPT certification</span>, I have advanced training in manual therapy techniques that allow me to diagnose and treat the root cause of your pain or dysfunction, not just the symptoms. My goal is to help you achieve long-term results and provide you with the tools to maintain your health.
                </p>
                <p className="text-primary-800 mb-6">
                  I believe in personalized care—no two patients are the same, and your treatment plan should reflect your unique needs, goals, and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clinic Location Section */}
      <section className="py-16 bg-white border-y border-neutral-200 section-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
              Our Clinic Location
            </h2>
            <p className="text-primary-800 font-medium">
              Conveniently located at Endorphins Health & Wellness Centre in Burlington, Ontario.
            </p>
            <div className="premium-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="luxury-card rounded-lg overflow-hidden premium-image">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="/images/clinic-exterior.jpg"
                  alt="Endorphins Health & Wellness Centre"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center p-8 luxury-card rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
                Endorphins Health & Wellness Centre
              </h3>
              <p className="text-primary-800 mb-4">
                Our clinic is located in a modern, accessible facility with ample parking and a welcoming environment.
              </p>
              <ul className="space-y-3 text-primary-800 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>4631 Palladium Way, Unit 6</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Burlington, ON L7M 0W9</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>(905) 634-6000</span>
                </li>
              </ul>
              <a
                href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-effect text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center premium-focus"
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
      <section className="py-16 bg-neutral-50 bg-premium-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
              Credentials & Training
            </h2>
            <p className="text-primary-800 font-medium">
              Continuously advancing my education to provide the highest standard of care.
            </p>
            <div className="premium-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="premium-card p-6 rounded-lg hover:shadow-premium-card transition-shadow premium-shine">
              <div className="rounded-lg bg-premium-subtle p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary-700">Education</h3>
              </div>
              <ul className="space-y-3 text-primary-800">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Master of Physiotherapy, University of Toronto</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bachelor of Science in Kinesiology, McMaster University</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>CAMPT-Certified Manual Therapist</span>
                </li>
              </ul>
            </div>
            
            <div className="premium-card p-6 rounded-lg hover:shadow-premium-card transition-shadow premium-shine">
              <div className="rounded-lg bg-premium-subtle p-3 mb-4">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary-700">Specialized Training</h3>
              </div>
              <ul className="space-y-3 text-primary-800">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Dry Needling & Acupuncture Certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Sports Injury Rehabilitation Specialist</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Active Release Technique (ART) Provider</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Treatment Showcase */}
      <section className="py-16 bg-white border-t border-neutral-200 section-premium">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
              Treatment Specialties
            </h2>
            <p className="text-primary-800 font-medium">
              Offering a range of specialized treatments to address your specific needs.
            </p>
            <div className="premium-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="luxury-card rounded-lg overflow-hidden hover:shadow-premium-card transition-shadow group premium-shine">
              <div className="relative h-48 overflow-hidden premium-image">
                <div className="absolute top-0 right-0 m-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-premium-subtle z-10">
                  <svg className="w-8 h-8 text-accent drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.5h-9" />
                  </svg>
                </div>
                <Image 
                  src="/images/manual-therapy.jpg"
                  alt="Manual Therapy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Manual Therapy</h3>
                <p className="text-primary-700 text-sm">
                  Hands-on techniques to improve tissue mobility, reduce pain, and restore function to joints and muscles.
                </p>
              </div>
            </div>
            
            <div className="luxury-card rounded-lg overflow-hidden hover:shadow-premium-card transition-shadow group premium-shine">
              <div className="relative h-48 overflow-hidden premium-image">
                <div className="absolute top-0 right-0 m-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-premium-subtle z-10">
                  <svg className="w-8 h-8 text-accent drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 12.728M5.636 5.636a9 9 0 1 1 12.728 12.728" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                  </svg>
                </div>
                <Image 
                  src="/images/sports-injury.jpg"
                  alt="Sports Rehabilitation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Sports Rehabilitation</h3>
                <p className="text-primary-700 text-sm">
                  Specialized programs for athletes to recover from injury and improve performance.
                </p>
              </div>
            </div>
            
            <div className="luxury-card rounded-lg overflow-hidden hover:shadow-premium-card transition-shadow group premium-shine">
              <div className="relative h-48 overflow-hidden premium-image">
                <div className="absolute top-0 right-0 m-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-premium-subtle z-10">
                  <svg className="w-8 h-8 text-accent drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082c.25.024.5.05.75.082M9.75 9.235c.131 0 .263-.01.393-.02m-4.179-3.657c-.283-.102-.56-.215-.832-.338m-.832-.338L5 8.75m0 0H1.5m0 0 1.064-3.319c.176-.55.356-1.1.525-1.651M1.5 8.75l1.052-.323m1.948 2.898A2.25 2.25 0 0 1 3 9.375V2.625A2.25 2.25 0 0 1 5.25.375h13.5A2.25 2.25 0 0 1 21 2.625v6.75A2.25 2.25 0 0 1 18.75 11.25H16.5m-13.248 4.688 2.806-3.22" />
                  </svg>
                </div>
                <Image 
                  src="/images/dry-needling.jpg"
                  alt="Dry Needling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Dry Needling</h3>
                <p className="text-primary-700 text-sm">
                  Advanced technique targeting trigger points to relieve muscle tension and pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-premium-light border-t border-neutral-200 bg-premium-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center premium-glow p-10 rounded-xl bg-white/90 backdrop-blur-sm">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary-800 text-premium-heading">
              Ready to Work Together?
            </h2>
            <p className="text-primary-800 text-lg mb-8 font-medium">
              Book your appointment today and let&apos;s start your journey to better movement and pain-free living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#booking"
                className="btn-premium btn-premium-effect text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium premium-focus"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="premium-card bg-white text-primary-700 hover:shadow-premium-card transition-all duration-300 px-6 py-3 rounded-lg font-medium premium-focus"
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