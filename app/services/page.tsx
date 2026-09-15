import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import { CheckIcon } from '@heroicons/react/24/outline';
import styles from '@/components/services/Services.module.css';

// Force static generation for better SEO
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Burlington Physiotherapy Services | Sports Rehab, Dry Needling',
  description: 'Burlington physiotherapy for sports injuries, knee and hip pain, dry needling, cupping, exercise rehab, and post-surgical recovery. Direct billing.',
  metadataBase: new URL('https://www.kinetikarephysio.com'),
  openGraph: {
    siteName: 'Kinetikare',
    title: 'Burlington Physiotherapy Services | Sports Rehab, Dry Needling & Cupping',
    description: 'Sports rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based physiotherapy in Burlington.',
    type: 'website',
    url: 'https://www.kinetikarephysio.com/services',
    images: [{
      url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Kareem Hassanein Physiotherapy Services'
    }]
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/services'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const services = [
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    description: (
      <>
        Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted soft tissue techniques.{' '}
        <Link href="/treatments/joint-mobilization" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn about joint mobilization
        </Link>
        {' '}or{' '}
        <Link href="/treatments/soft-tissue-myofascial-release" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          myofascial release techniques
        </Link>
        .
      </>
    ),
    features: [
      'Joint mobilization',
      'Soft tissue release techniques',
      'Trigger point therapy',
      'Myofascial release'
    ],
  },
  {
    id: 'sports-rehab',
    title: 'Sports Rehabilitation',
    description: (
      <>
        Tailored rehabilitation for athletes to recover from injury and return to their sport safely and stronger.{' '}
        <Link href="/treatments/sports-rehab-return-to-sport" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Explore sports rehabilitation approach
        </Link>
        .
      </>
    ),
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
    description: (
      <>
        Precision therapy using thin filiform needles to release trigger points and relieve muscular pain and tension.{' '}
        <Link href="/treatments/dry-needling" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn about dry needling
        </Link>
        {' '}or{' '}
        <Link href="/faq" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Trigger point release',
      'Muscle tension reduction',
      'Pain management',
      'Improved range of motion'
    ],
  },
  {
    id: 'exercise-therapy',
    title: 'Exercise Therapy',
    description: (
      <>
        Customized exercise programs designed to restore function, build strength, and prevent injury recurrence.{' '}
        <Link href="/treatments/exercise-therapy" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Explore exercise therapy
        </Link>
        {' '}or{' '}
        <Link href="/faq" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Strengthening exercises',
      'Functional movement training',
      'Core stabilization',
      'Flexibility and mobility work'
    ],
  },
  {
    id: 'postural-assessment',
    title: 'Posture & Ergonomic Assessment',
    description: (
      <>
        Comprehensive analysis of your posture and work environment to address pain and prevent future issues.{' '}
        <Link href="/treatments/postural-assessment" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn about postural assessment
        </Link>
        {' '}or{' '}
        <Link href="/faq" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          read common questions
        </Link>
        .
      </>
    ),
    features: [
      'Movement pattern analysis',
      'Postural correction strategies',
      'Ergonomic recommendations',
      'Preventive care planning'
    ],
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: (
      <>
        Evidence-based approaches to reduce pain and improve quality of life through targeted interventions including cupping and IASTM.{' '}
        <Link href="/treatments/cupping-therapy" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn about cupping
        </Link>
        ,{' '}
        <Link href="/treatments/iastm" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          IASTM
        </Link>
        , or{' '}
        <Link href="/treatments/pain-education" className="text-[#8A6F0A] hover:text-[#D4AF37] underline transition-colors duration-300">
          pain education
        </Link>
        .
      </>
    ),
    features: [
      'Acute and chronic pain treatment',
      'Myofascial Release Therapy (Instrument Assisted Soft Tissue Massage; Cupping)',
      'Therapeutic modalities',
      'Pain education and self-management'
    ],
  },
];

export default function ServicesPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Kareem Hassanein Physiotherapy",
    "url": "https://www.kinetikarephysio.com/services",
    "description": "Professional physiotherapy services including manual therapy, sports rehabilitation, dry needling, exercise therapy, and pain management in Burlington, Ontario.",
    "medicalSpecialty": "Physical Therapy",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Physiotherapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Manual Therapy",
            "description": "Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted soft tissue techniques."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Sports Rehabilitation",
            "description": "Tailored rehabilitation for athletes to recover from injury and return to their sport safely and stronger."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy", 
            "name": "Dry Needling",
            "description": "Precision therapy using thin filiform needles to release trigger points and relieve muscular pain and tension."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Exercise Therapy", 
            "description": "Customized exercise programs designed to restore function, build strength, and prevent injury recurrence."
          }
        }
      ]
    }
  };

  // Add MedicalProcedure schema for each specific treatment
  const medicalProceduresSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Joint Mobilization",
        "description": "Skilled manual therapy technique to restore joint movement and reduce pain",
        "procedureType": "Physical Therapy",
        "bodyLocation": "Joints",
        "followup": "Exercise prescription and movement re-education",
        "preparation": "Physical assessment and movement analysis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dry Needling",
        "description": "Therapeutic technique using thin needles to release trigger points and reduce muscle tension",
        "procedureType": "Physical Therapy",
        "bodyLocation": "Trigger points in muscles",
        "followup": "Stretching and strengthening exercises",
        "preparation": "Identification of trigger points through palpation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Cupping Therapy",
        "description": "Myofascial decompression technique to improve blood flow and reduce muscle tension",
        "procedureType": "Physical Therapy",
        "bodyLocation": "Soft tissues",
        "followup": "Movement exercises and self-care instructions",
        "preparation": "Skin assessment and treatment area preparation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "IASTM (Instrument Assisted Soft Tissue Mobilization)",
            "description": "Ergonomic instruments used to detect and treat soft tissue dysfunction",
        "procedureType": "Physical Therapy",
        "bodyLocation": "Fascia and soft tissues",
        "followup": "Therapeutic exercises and movement patterns",
        "preparation": "Tissue assessment and movement screening"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Trigger Point Release",
        "description": "Manual pressure technique to deactivate painful trigger points",
        "procedureType": "Physical Therapy",
        "bodyLocation": "Trigger points in muscles",
        "followup": "Stretching and postural exercises",
        "preparation": "Trigger point mapping and assessment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Movement Analysis",
        "description": "Comprehensive assessment of movement patterns and biomechanics",
        "procedureType": "Diagnostic Physical Therapy",
        "bodyLocation": "Full body kinetic chain",
        "followup": "Personalized exercise program based on findings",
        "preparation": "Patient history and symptom review"
      }
    ]
  };

  // Breadcrumb schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kinetikarephysio.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.kinetikarephysio.com/services"
      }
    ]
  };

  return (
    <main className={styles.page}>
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(servicesStructuredData),
        }}
      />

      {/* Medical Procedures Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(medicalProceduresSchema),
        }}
      />

      {/* Hero Section */}
      <ServicesHero />

      <section id="services-grid" className={styles.directory} aria-label="Physiotherapy services">
        <div className={styles.directoryInner}>
          <nav className={styles.serviceNav} aria-label="Explore services">
            <p className={styles.eyebrow}>Explore services</p>
            <ul>
              {services.map((service, index) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{service.title}</span></a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {services.map((service, index) => (
              <article key={service.id} id={service.id} className={styles.service} tabIndex={-1} aria-labelledby={`${service.id}-heading`}>
                <div className={styles.serviceHeading}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h2 id={`${service.id}-heading`}>{service.title}</h2>
                </div>
                <div className={styles.serviceBody}>
                  <p>{service.description}</p>
                  <div>
                    <h3>Benefits</h3>
                    <ul className={styles.features}>{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Refined */}
      <section data-treatment-process className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(176, 141, 87, 0.05) 0%, transparent 50%)',
        }}></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#B08D57]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#D4AF37]/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#B08D57]/20 rounded-full"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#B08D57]/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 backdrop-blur-sm text-[#8A6F0A] text-sm font-medium rounded-full mb-8 border border-[#B08D57]/20 shadow-sm transition-all duration-300 cursor-default">
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mr-3"></div>
              <span className="uppercase tracking-wider">Treatment Journey</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-primary-800">
              The Treatment <span className="text-[#B08D57]">Process</span>
            </h2>
            
            {/* Elegant Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B08D57]/40 to-transparent"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
            </div>
            
            <p className="text-lg md:text-xl text-primary-600 leading-relaxed font-light max-w-3xl mx-auto" style={{lineHeight: '1.8'}}>
              What to expect during your physiotherapy journey with me
            </p>
          </div>
          
          {/* Sophisticated Treatment Flow */}
          <div className="max-w-7xl mx-auto">
            {/* Flow Container */}
            <div className="relative">
              {/* Premium Connection Line with Animation */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-[#B08D57]/20 to-transparent"></div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent absolute inset-0"></div>
              </div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
                {[
                  {
                    title: "Patient-Led Discovery",
                    description: "You lead the way by sharing your experience, concerns, and goals in an open, judgment-free environment.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    ),
                    gradient: "from-[#B08D57] to-[#D4AF37]"
                  },
                  {
                    title: "Assessment",
                    description: "A thorough evaluation of your condition, medical history, and goals to create a personalized treatment plan.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    gradient: "from-[#B08D57] to-[#D4AF37]"
                  },
                  {
                    title: "Treatment",
                    description: "Evidence-based interventions combining manual therapy, exercise, and education to address your specific needs.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    ),
                    gradient: "from-[#B08D57] to-[#D4AF37]"
                  },
                  {
                    title: "Adaptive Progress",
                    description: "Collaborative fine-tuning of your program based on your response, ensuring optimal recovery through continuous adaptation.",
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    gradient: "from-[#B08D57] to-[#D4AF37]"
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Process Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-premium-1 hover:shadow-premium-2 border border-slate-200/60 hover:border-[#B08D57]/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden h-[340px] flex flex-col group cursor-default" style={{
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      animationDelay: `${index * 0.1}s`
                    }}>
                      {/* Premium Background Effects - Removed tacky colored overlay */}
                      
                      {/* Subtle Background */}
                      <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center flex flex-col h-full">
                        {/* Icon Container */}
                        <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                          {/* Icon Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl group-hover:scale-105 transition-all duration-500"></div>
                          
                          {/* Icon */}
                          <div className="relative z-10 text-white transition-transform duration-300">
                            {step.icon}
                          </div>
            </div>
            
                        {/* Title */}
                        <h3 className="text-xl font-medium mb-4 text-primary-800 group-hover:text-[#B08D57] transition-all duration-500 leading-tight">
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-primary-600 leading-relaxed text-sm font-light group-hover:text-primary-700 transition-colors duration-300 flex-1">
                          {step.description}
                        </p>
                        
                        {/* Premium Accent Line */}
                        <div className="mt-6 mx-auto w-12 h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
            
                      {/* Premium Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms] ease-in-out" style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.1) 50%, transparent 60%)',
                          transform: 'skewX(-25deg)'
                        }}></div>
                      </div>
            </div>
            
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.insurance} aria-labelledby="insurance-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Insurance &amp; Billing</p><h2 id="insurance-heading">Insurance Coverage</h2></div>
            <p>Physiotherapy services are covered by most extended health insurance plans</p>
          </div>
          <div className={styles.billingGrid}>
            <div>
              <h3>Direct Billing Available</h3>
              <p className={styles.billingIntro}>Direct billing available with major insurance providers:</p>
              <ul className={styles.providers}>
                {['Canada Life', 'Sun Life', 'Manulife', 'Green Shield Canada', 'Blue Cross', 'Desjardins', 'TELUS Health'].map(provider => <li key={provider}>{provider}</li>)}
              </ul>
              <p className={styles.providerNote}>and many more providers</p>
              <p className={styles.eyebrow}>Session Fees</p>
              <dl className={styles.fees}>
                <div><dt>Initial Assessment</dt><dd>$130</dd></div>
                <div><dt>Follow-up (30 min)</dt><dd>$90</dd></div>
                <div><dt>Follow-up (60 min)</dt><dd>$145</dd></div>
              </dl>
            </div>
            <aside className={styles.coverage} aria-labelledby="coverage-help-heading">
              <h3 id="coverage-help-heading">Need Coverage Help?</h3>
              <p>If you're unsure whether direct billing is available for your plan, call me and I will verify your coverage details with you.</p>
              <ul className={styles.features}>
                <li>Free coverage verification</li><li>Direct billing when possible</li><li>Payment plan options available</li>
              </ul>
              <a href="tel:+19056346000" className={styles.textLink}>Call for Support</a>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="services-booking-heading">
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <div>
              <p className={styles.eyebrow}>Next Steps</p>
              <h2 id="services-booking-heading">Continue Your Care Journey</h2>
              <p>Partner with a physiotherapist dedicated to understanding your unique needs and achieving lasting results. Take the next step toward your recovery goals.</p>
            </div>
            <a href={JANE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${styles.primary} button-gold`}><span>Book Your Assessment</span></a>
          </div>
          <ul className={styles.trust}>
            {['Direct Insurance Billing', 'Evidence-Based Treatment', 'Personalized Care'].map(item => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </section>

    </main>
  );
} 
