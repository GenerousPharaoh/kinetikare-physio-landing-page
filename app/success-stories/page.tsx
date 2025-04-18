import PlaceholderImage from '@/components/PlaceholderImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Success stories data
const successStories = [
  {
    id: 1,
    name: 'Sarah M.',
    age: 42,
    condition: 'Chronic Lower Back Pain',
    image: '/images/testimonial-sarah.jpg',
    quote: 'After 3 years of chronic back pain and trying various treatments with little success, I almost gave up hope. Working with Kareem completely changed my life. His manual therapy approach combined with a personalized exercise program not only relieved my pain but gave me the tools to prevent it from returning.',
    duration: '8 weeks',
    outcome: 'Pain-free with a maintenance program',
    story: 'Sarah came to me after suffering from debilitating lower back pain for over three years. She had tried various treatments including medication, general exercise, and even considered surgery. Using a combination of manual therapy techniques focused on the thoracolumbar junction and targeted exercises to strengthen her core and gluteal muscles, we were able to address the root cause of her pain. Sarah is now pain-free and actively participating in activities she had abandoned years ago.'
  },
  {
    id: 2,
    name: 'Michael R.',
    age: 35,
    condition: 'Post-Surgical ACL Rehabilitation',
    image: '/images/testimonial-michael.jpg',
    quote: 'As an avid soccer player, tearing my ACL was devastating. Kareem\'s expertise in post-surgical rehabilitation was exactly what I needed. His progressive approach challenged me at the right pace, and his knowledge of sport-specific training helped me return to playing even stronger than before my injury.',
    duration: '6 months',
    outcome: 'Full return to competitive sports',
    story: 'Michael came to me after ACL reconstruction surgery with the goal of returning to competitive soccer. We developed a comprehensive rehabilitation program that followed evidence-based protocols while being tailored to his specific needs. We focused on restoring full range of motion, rebuilding quad strength, and progressively introducing sport-specific movements. Through consistent work and dedication, Michael was able to pass all return-to-sport testing criteria and has returned to playing at a competitive level with improved biomechanics that reduce his risk of re-injury.'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    age: 29,
    condition: 'Chronic Migraines & Neck Pain',
    image: '/images/testimonial-jennifer.jpg',
    quote: 'I had been suffering from chronic migraines and neck pain for years, which significantly affected my quality of life and ability to work. Kareem\'s treatment, combining manual therapy, dry needling, and a focused exercise program, has reduced my migraines from 3-4 per week to maybe 1 mild one per month. I finally feel like I have my life back.',
    duration: '12 weeks',
    outcome: 'Significant reduction in frequency and intensity of migraines',
    story: 'Jennifer was experiencing 3-4 debilitating migraines per week along with constant neck tension. After a thorough assessment, I identified significant restrictions in her upper cervical spine and tension in the surrounding musculature. We used a multimodal approach including manual therapy to improve joint mobility, dry needling to release trigger points in her suboccipital and upper trapezius muscles, and a progressive exercise program focused on deep neck flexor strengthening and posture correction. Jennifer now manages her condition independently with only occasional maintenance treatments.'
  },
  {
    id: 4,
    name: 'David K.',
    age: 58,
    condition: 'Rotator Cuff Tendinopathy',
    image: '/images/testimonial-david.jpg',
    quote: 'As someone who enjoys golf and weightlifting, developing shoulder pain in my dominant arm was frustrating. Kareem\'s approach was different from other therapists I\'d seen—he focused on finding the cause rather than just treating symptoms. The combination of hands-on treatment and his carefully designed exercise program has completely resolved my pain.',
    duration: '10 weeks',
    outcome: 'Full resolution of pain and return to activities',
    story: 'David presented with right shoulder pain that had been progressively worsening over 6 months. Diagnostic imaging showed rotator cuff tendinopathy without full tears. Our treatment focused on improving scapular control, addressing posterior capsule tightness through manual therapy, and a progressive loading program for the rotator cuff muscles. We also modified his weightlifting and golf techniques to reduce strain on the affected tissues. David has returned to both activities pain-free and with improved performance.'
  }
];

export default function SuccessStories() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-deep text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep to-navy-light opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Success <span className="text-gold-accent">Stories</span>
            </h1>
            <p className="text-slate-text text-lg max-w-2xl mx-auto">
              Real results from real patients. Discover how evidence-based physiotherapy treatment has helped people overcome pain, recover from injuries, and return to the activities they love.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover-lift" style={{ animationDelay: "0.1s" }}>
              <p className="text-4xl font-bold text-gold-accent mb-2 animate-pulse-subtle">96%</p>
              <p className="text-navy-deep font-medium">Patient Satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover-lift" style={{ animationDelay: "0.2s" }}>
              <p className="text-4xl font-bold text-gold-accent mb-2 animate-pulse-subtle">800+</p>
              <p className="text-navy-deep font-medium">Patients Treated</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover-lift" style={{ animationDelay: "0.3s" }}>
              <p className="text-4xl font-bold text-gold-accent mb-2 animate-pulse-subtle">85%</p>
              <p className="text-navy-deep font-medium">Return to Sport Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover-lift" style={{ animationDelay: "0.4s" }}>
              <p className="text-4xl font-bold text-gold-accent mb-2 animate-pulse-subtle">10+</p>
              <p className="text-navy-deep font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-navy-deep animate-fade-in">
            Patient <span className="text-gold-accent">Testimonials</span> & Case Studies
          </h2>
          
          {successStories.map((story, index) => (
            <div 
              key={story.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-20 bg-off-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image Column */}
              <div className="lg:w-1/3">
                <div className="relative h-80 lg:h-full">
                  <PlaceholderImage
                    src={story.image}
                    alt={`${story.name} Testimonial`}
                    fill
                    style={{ objectFit: 'cover' }}
                    category="Testimonial"
                    isProfile={true}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content Column */}
              <div className="lg:w-2/3 p-8">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-navy-deep">
                      {story.name}, {story.age}
                    </h3>
                    <p className="text-gold-accent font-medium mb-1">
                      {story.condition}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                    <div className="bg-navy-light text-white text-sm px-3 py-1 rounded-full mb-1">
                      Treatment: {story.duration}
                    </div>
                    <div className="bg-gold-accent/20 text-gold-accent text-sm px-3 py-1 rounded-full">
                      Outcome: {story.outcome}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <svg className="absolute text-gold-accent opacity-20 w-12 h-12 -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-cool-gray italic pl-6">
                    &quot;{story.quote}&quot;
                  </p>
                </div>
                
                <h4 className="text-lg font-heading font-semibold mb-2 text-navy-deep">
                  Case Study
                </h4>
                <p className="text-cool-gray">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-deep text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Start Your <span className="text-gold-accent">Success Story</span> Today
            </h2>
            <p className="text-slate-text text-lg mb-8">
              Join our growing list of patients who have overcome pain and regained their active lifestyle through evidence-based physiotherapy treatment.
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