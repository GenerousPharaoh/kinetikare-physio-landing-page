import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { LightBulbIcon, UserGroupIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function About() {
  const commitments = [
    'A thorough assessment in a comfortable, judgment-free environment',
    'Clear explanations of findings in plain language',
    'A customized treatment plan addressing your specific goals',
    'One-on-one, unrushed attention during every session',
    'Evidence-based interventions combining manual therapy, movement retraining, and self-management strategies',
    'A collaborative approach that respects your input and preferences',
  ];

  return (
    <main className="min-h-screen flex flex-col text-primary-700 bg-white">
      {/* Hero Section */}
      <section className="bg-primary-50 text-primary-800 py-10 pt-20 relative border-b border-neutral-200">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              About <span className="text-[#B08D57]">Kareem</span>
            </h1>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              A journey of experience, empathy, and a commitment to expertise in physiotherapy
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#B08D57] opacity-20"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Sidebar */}
            <div className="md:col-span-1 order-2 md:order-1">
              <div className="sticky top-24">
                {/* Profile Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-md border border-neutral-100">
                  <ClientImage
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein, Physiotherapist"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Professional Highlights */}
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-4 text-primary-800 border-b border-primary-100 pb-2">Professional Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3"></div>
                      <span>MSc Physiotherapy (Distinction)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3"></div>
                      <span>FCAMPT Level 2 Certified</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3"></div>
                      <span>5+ Years Clinical Practice</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57] mr-3"></div>
                      <span>6,000+ hours personal training</span>
                    </li>
                  </ul>
                </div>
                
                {/* CTA */}
                <div className="bg-primary-800 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-bold mb-4 text-white">Ready to Begin?</h3>
                  <p className="mb-5 text-sm text-white/90">Book your appointment today and start your journey to better movement and pain-free living.</p>
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 bg-[#B08D57] hover:bg-[#A17D47] text-white rounded-md transition-colors duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary-800">
                The Path That Shaped My Practice
              </h2>
              
              <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-800 prose-p:text-primary-700">
                <p>
                  My journey into physiotherapy wasn't merely academic—it was forged through personal experience. From competitive soccer and pursuing a Kinesiology degree at McMaster University to navigating my own significant injuries including debilitating disc herniations, I've experienced both sides of rehabilitation.
                </p>
                <p>
                  These moments of vulnerability transformed my professional purpose, leading me to complete a Master's in Physiotherapy from Robert Gordon University with distinction. My education, combined with firsthand experience as a patient, has deeply informed my approach to care.
                </p>
                
                {/* Philosophy of Practice Section - Redesigned */}
                <div className="py-12 md:py-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-10 text-center relative pb-3">
                    Philosophy of Practice
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#B08D57]"></span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-neutral-200">
                    {/* Card 1: Root Cause Resolution */}
                    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <LightBulbIcon className="h-10 w-10 text-[#B08D57] mb-5" />
                      <h4 className="font-semibold text-lg text-primary-800 mb-2">Root Cause Resolution</h4>
                      <p className="text-primary-600 leading-relaxed text-sm">
                        I don't just treat symptoms; I investigate underlying movement patterns to address what's truly driving your pain.
                      </p>
                    </div>
                    {/* Card 2: Collaborative Partnership */}
                    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <UserGroupIcon className="h-10 w-10 text-[#B08D57] mb-5" />
                      <h4 className="font-semibold text-lg text-primary-800 mb-2">Collaborative Partnership</h4>
                      <p className="text-primary-600 leading-relaxed text-sm">
                        Your input is key. I listen, explain clearly, and involve you in every treatment decision.
                      </p>
                    </div>
                    {/* Card 3: Personalized Progression */}
                    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
                      <AdjustmentsHorizontalIcon className="h-10 w-10 text-[#B08D57] mb-5" />
                      <h4 className="font-semibold text-lg text-primary-800 mb-2">Personalized Progression</h4>
                      <p className="text-primary-600 leading-relaxed text-sm">
                        Recovery isn't linear. Your treatment evolves with you, adapting to optimize your unique healing journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mt-10 mb-6">A Different Approach to Care</h3>
                
                <blockquote className="italic border-l-4 border-[#B08D57] pl-4 py-2 my-6 text-primary-700">
                  "Having sat on both sides of the treatment table, I recognize the profound difference between being processed through a system and being truly understood."
                </blockquote>
                
                <p>
                  My practice is built on firsthand experience—both as a clinician and as a patient who has navigated the frustrations of pain, slow recovery, and an often impersonal healthcare system. This dual perspective means I genuinely understand how easily patients can be overlooked.
                </p>
                <p>
                  I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care. Each patient receives a plan tailored to their unique needs, grounded in advanced manual therapy, exercise science, and a refusal to overlook the details that drive real outcomes and measurable progress.
                </p>
                <p>
                  Beyond treatment, I take pride in acting as your advocate within a complex medical landscape. My standard for care isn't based on industry averages or convenient shortcuts—it's built on the dedicated attention and rigor you deserve.
                </p>
              </div>

              {/* Professional Background Section */}
              <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-800 prose-p:text-primary-700 mt-10 mb-10">
                <h3 className="text-2xl font-bold mt-10 mb-6">Professional Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white border border-neutral-200 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4 text-primary-800">Education</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <ClientImage
                          src="/images/robert-gordon-university-logo-png_seeklogo-341455.png"
                          alt="Robert Gordon University Logo"
                          width={40}
                          height={40}
                          className="mr-3 h-10 w-10 object-contain"
                        />
                        <span>MSc Physiotherapy (Distinction), Robert Gordon University</span>
                      </li>
                      <li className="flex items-center">
                        <ClientImage
                          src="/images/mcmaster-university-logo-png_seeklogo-90018.png"
                          alt="McMaster University Logo"
                          width={40}
                          height={40}
                          className="mr-3 h-10 w-10 object-contain"
                        />
                        <span>BSc Kinesiology (Honours), McMaster University</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-neutral-200 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4 text-primary-800">Advanced Certifications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>FCAMPT Level 2 (Manual & Manipulative Therapy)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>Certified Dry Needling Practitioner</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white border border-neutral-200 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4 text-primary-800">Experience</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>5+ years clinical practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>6,000+ hours personal training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>Former Assistant Fitness Manager, GoodLife Fitness</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-neutral-200 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4 text-primary-800">Athletic Background</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>Semi-professional soccer (Cove Rangers, Scotland)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1.5">•</span>
                        <span>Canadian Soccer League (Brantford Galaxy)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* My Commitment to You Section */}
              <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-800 prose-p:text-primary-700 mt-10">
                <h3 className="text-2xl font-bold mt-10 mb-6">My Commitment to You</h3>
                <ul className="space-y-3">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start">
                      <CheckBadgeIcon className="h-6 w-6 text-[#B08D57] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Affiliations Section */}
      <section className="py-16 bg-primary-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold mb-8 text-primary-800 text-center">
            Professional Affiliations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <Link 
              href="https://physiotherapy.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 flex items-center justify-center h-32"
            >
              <ClientImage
                src="/images/canadian-physio-association-logo.png"
                alt="Canadian Physiotherapy Association"
                width={180}
                height={100}
                className="object-contain h-auto max-h-20"
              />
            </Link>
            
            <Link 
              href="https://collegept.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 flex items-center justify-center h-32"
            >
              <ClientImage
                src="/images/college-of-physiotherapists-of-ontario-logo.webp"
                alt="College of Physiotherapists of Ontario"
                width={180}
                height={100}
                className="object-contain h-auto max-h-20"
              />
            </Link>
            
            <Link 
              href="https://endorphinshealth.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 flex items-center justify-center h-32"
            >
              <ClientImage
                src="/images/endorphins-health-and-wellness-centre-logo.png"
                alt="Endorphins Health & Wellness Centre"
                width={180}
                height={100}
                className="object-contain h-auto max-h-20"
              />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50 text-primary-800 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-primary-800">
              Take the Next Step in Your Recovery Journey
            </h2>
            <p className="text-lg text-primary-600 mb-10 leading-relaxed">
              Book your appointment today or contact me with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 bg-[#B08D57] hover:bg-[#A17D47] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book an Appointment
              </Link>
              <Link
                href="/#services"
                className="py-3.5 px-8 bg-white text-primary-700 hover:bg-neutral-100 border border-neutral-300 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
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