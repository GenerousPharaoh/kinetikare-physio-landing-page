import PlaceholderImage from '@/components/PlaceholderImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-deep text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep to-navy-light opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gold-accent">Services</span>
            </h1>
            <p className="text-slate-text text-lg max-w-2xl mx-auto">
              Evidence-based physiotherapy treatments tailored to your specific needs, focused on long-term results and enhanced quality of life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        
          {/* Service 1 */}
          <div id="manual-therapy" className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-fade-in">
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <PlaceholderImage
                  src="/images/manual-therapy.jpg"
                  alt="Manual Therapy Session"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-700"
                  category="Manual Therapy"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-navy-light rounded-full flex items-center justify-center mb-4 animate-pulse-subtle">
                <svg className="w-7 h-7 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-navy-deep">
                Manual Therapy
              </h2>
              <p className="text-cool-gray mb-4">
                As a CAMPT-certified physiotherapist, I specialize in advanced manual therapy techniques that target the root cause of your pain or movement limitations.
              </p>
              <p className="text-cool-gray mb-4">
                My hands-on approach includes joint mobilizations, soft tissue techniques, and neural mobilizations designed to:
              </p>
              <ul className="list-disc pl-5 mb-6 text-cool-gray space-y-2">
                <li>Decrease pain and inflammation</li>
                <li>Restore joint mobility and function</li>
                <li>Improve tissue extensibility</li>
                <li>Accelerate healing and recovery</li>
                <li>Prevent recurrence of injuries</li>
              </ul>
              <p className="text-cool-gray italic">
                "Manual therapy provides immediate relief while creating the foundation for long-term recovery."
              </p>
            </div>
          </div>
          
          {/* Service 2 */}
          <div id="sports-injuries" className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <PlaceholderImage
                  src="/images/sports-rehab.jpg"
                  alt="Sports Injury Rehabilitation"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-700"
                  category="Sports Rehabilitation"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-navy-light rounded-full flex items-center justify-center mb-4 animate-pulse-subtle">
                <svg className="w-7 h-7 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-navy-deep">
                Sports Injuries
              </h2>
              <p className="text-cool-gray mb-4">
                Whether you're a weekend warrior or competitive athlete, my approach to sports injury management focuses on both rehabilitation and performance enhancement.
              </p>
              <p className="text-cool-gray mb-4">
                I develop personalized treatment plans to address:
              </p>
              <ul className="list-disc pl-5 mb-6 text-cool-gray space-y-2">
                <li>Acute injuries (sprains, strains, contusions)</li>
                <li>Chronic overuse injuries</li>
                <li>Post-surgical rehabilitation</li>
                <li>Sport-specific movement analysis</li>
                <li>Return-to-play protocols</li>
                <li>Injury prevention strategies</li>
              </ul>
              <p className="text-cool-gray italic">
                "My goal is not just to get you back to your sport, but to help you perform better than before your injury."
              </p>
            </div>
          </div>
          
          {/* Service 3 */}
          <div id="dry-needling" className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <PlaceholderImage
                  src="/images/dry-needling.jpg"
                  alt="Dry Needling Treatment"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-700"
                  category="Dry Needling"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-navy-light rounded-full flex items-center justify-center mb-4 animate-pulse-subtle">
                <svg className="w-7 h-7 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-navy-deep">
                Dry Needling
              </h2>
              <p className="text-cool-gray mb-4">
                Dry needling is an advanced technique that utilizes thin filiform needles to target trigger points and myofascial tension, providing rapid relief for acute and chronic pain conditions.
              </p>
              <p className="text-cool-gray mb-4">
                This specialized treatment is effective for:
              </p>
              <ul className="list-disc pl-5 mb-6 text-cool-gray space-y-2">
                <li>Muscle tension and spasms</li>
                <li>Myofascial pain syndrome</li>
                <li>Tendinopathies</li>
                <li>Headaches and migraines</li>
                <li>Joint pain and restricted mobility</li>
                <li>Sports performance enhancement</li>
              </ul>
              <p className="text-cool-gray italic">
                "Dry needling often provides immediate improvement in areas that have been problematic for months or even years."
              </p>
            </div>
          </div>
          
          {/* Service 4 */}
          <div id="exercise-prescription" className="flex flex-col md:flex-row-reverse items-center gap-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <PlaceholderImage
                  src="/images/exercise-therapy.jpg"
                  alt="Exercise Prescription Session"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-700"
                  category="Exercise Therapy"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-navy-light rounded-full flex items-center justify-center mb-4 animate-pulse-subtle">
                <svg className="w-7 h-7 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-navy-deep">
                Exercise Prescription
              </h2>
              <p className="text-cool-gray mb-4">
                Personalized exercise programs are the cornerstone of long-term recovery and prevention. I design individualized exercise plans that address your specific needs, goals, and lifestyle.
              </p>
              <p className="text-cool-gray mb-4">
                My approach to exercise prescription includes:
              </p>
              <ul className="list-disc pl-5 mb-6 text-cool-gray space-y-2">
                <li>Functional movement assessment</li>
                <li>Progressive strength training</li>
                <li>Neuromuscular reeducation</li>
                <li>Mobility and flexibility enhancement</li>
                <li>Sport-specific training</li>
                <li>Home exercise programs with digital follow-up</li>
              </ul>
              <p className="text-cool-gray italic">
                "The right exercises, performed correctly and consistently, are the key to sustainable recovery and optimal physical performance."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Start Your <span className="text-gold-accent">Recovery Journey</span>?
            </h2>
            <p className="text-slate-text text-lg mb-8">
              Book your appointment today at Endorphins Health and Wellness Centre in Burlington. Direct billing available for most insurance providers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:9056346000"
                className="bg-gold-accent text-navy-deep px-6 py-3 rounded-md font-medium hover:bg-gold-accent/90 transition-colors flex items-center hover-lift"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (905) 634-6000
              </a>
              <a
                href="https://endorphinshealthandwellness.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-gold-accent text-gold-accent px-6 py-3 rounded-md font-medium hover:bg-gold-accent/10 transition-colors flex items-center hover-lift"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 