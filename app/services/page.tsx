import React from 'react';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { Metadata } from 'next';

// Force static generation for better SEO
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Physiotherapy Services | Kareem Hassanein Burlington & Waterdown Area',
  description: 'Physiotherapy services in Burlington: manual therapy, dry needling, exercise rehab and pain management. Direct billing.',
  keywords: [
    'Kareem Hassanein services',
    'Kareem Hassanein treatments',
    'physiotherapy services Burlington',
    'physio services Burlington',
    'back pain treatment Burlington',
    'lower back pain physio Burlington',
    'chronic back pain Burlington',
    'neck pain treatment Burlington',
    'whiplash treatment Burlington',
    'knee pain treatment Burlington',
    'ACL rehab Burlington',
    'meniscus injury Burlington',
    'shoulder pain treatment Burlington',
    'rotator cuff therapy Burlington',
    'frozen shoulder Burlington',
    'sports injury treatment Burlington',
    'sports physio Burlington',
    'athlete rehabilitation Burlington',
    'running injury physio Burlington',
    'tennis elbow treatment Burlington',
    'plantar fasciitis treatment Burlington',
    'sciatica treatment Burlington',
    'hip pain treatment Burlington',
    'manual therapy Burlington',
    'hands on therapy Burlington',
    'joint mobilization Burlington',
    'dry needling Burlington',
    'IMS Burlington',
    'trigger point therapy Burlington',
    'post surgery rehab Burlington',
    'post op physiotherapy Burlington',
    'MVA physiotherapy Burlington',
    'car accident physio Burlington',
    'work injury physio Burlington',
    'WSIB physiotherapy Burlington',
    'pain management Hamilton',
    'pain management Oakville',
    'trigger point therapy Burlington',
    'trigger point therapy Waterdown',
    'trigger point release Burlington',
    'trigger point release Waterdown',
    'myofascial release Burlington',
    'myofascial release Waterdown',
    'cupping therapy Burlington',
    'cupping therapy Waterdown',
    'cupping therapy Hamilton',
    'cupping therapy Oakville',
    'IASTM Burlington',
    'IASTM Waterdown',
    'instrument assisted soft tissue massage Burlington',
    'instrument assisted soft tissue massage Waterdown',
    'joint mobilization Burlington',
    'joint mobilization Waterdown',
    'sports injury rehabilitation Burlington',
    'sports injury rehabilitation Waterdown',
    'sports injury treatment Burlington',
    'sports injury treatment Waterdown',
    'posture assessment Burlington',
    'posture assessment Waterdown',
    'ergonomic assessment Burlington',
    'ergonomic assessment Waterdown',
    'soft tissue release Burlington',
    'soft tissue release Waterdown',
    'movement analysis Burlington',
    'movement analysis Waterdown',
    'physiotherapy clinic Burlington',
    'physiotherapy clinic Waterdown',
    'physiotherapy clinic Hamilton',
    'physiotherapy clinic Oakville'
  ],
  metadataBase: new URL('https://www.kinetikarephysio.com'),
  openGraph: {
    title: 'Physiotherapy Services | Kareem Hassanein',
    description: 'Physiotherapy services including sports rehabilitation, manual therapy, dry needling, and exercise therapy for improved movement and pain management.',
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
        Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted tissue manipulation.{' '}
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Have questions about manual therapy?
        </Link>
      </>
    ),
    image: '/images/manual-therapy.jpg',
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
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn what to expect during sports rehab
        </Link>
        .
      </>
    ),
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
    description: (
      <>
        Precision therapy using thin filiform needles to release trigger points and relieve muscular pain and tension.{' '}
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Common questions about dry needling answered
        </Link>
        .
      </>
    ),
    image: '/images/dry-needling.jpg',
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
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Learn about my exercise approach
        </Link>
        .
      </>
    ),
    image: '/images/exercise-therapy.jpg',
    features: [
      'Strength and conditioning',
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
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Questions about assessments?
        </Link>
      </>
    ),
    image: '/images/posture-assessment.jpg',
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
        <Link href="/faq" className="text-[#B08D57] hover:text-[#D4AF37] underline transition-colors duration-300">
          Explore my pain management FAQ
        </Link>
        .
      </>
    ),
    image: '/images/pain-management.jpg',
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
            "description": "Hands-on techniques to mobilize joints, reduce pain, and restore function through targeted tissue manipulation."
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
        "description": "Specialized instruments to detect and treat soft tissue dysfunction",
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
    <main className="min-h-screen flex flex-col text-primary-700 bg-white">
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      {/* Medical Procedures Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProceduresSchema),
        }}
      />

      {/* Hero Section - Refined */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-slate-50 text-primary-800 py-12 pt-24 md:py-16 md:pt-28 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B08D57]/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent"></div>
        
        {/* Subtle Background Accents */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 backdrop-blur-sm rounded-full border border-[#B08D57]/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-[#B08D57] tracking-wider uppercase">Expert Physiotherapy Care</span>
            </div>
            
            {/* Main Title with Split Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light mb-6 leading-tight tracking-[-0.03em]">
              <span className="bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">Physiotherapy</span>
              <span className="block mt-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent" style={{
                backgroundSize: '200% 100%'
              }}>Services</span>
            </h1>
            
            {/* Premium Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B08D57]/40"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/40"></div>
            </div>
            
            {/* Refined Description */}
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed font-light" style={{lineHeight: '1.8'}}>
              Professional care tailored to your unique needs, combining 
              <span className="font-normal text-primary-700"> advanced techniques </span>
              with 
              <span className="font-normal text-primary-700"> personalized attention</span>
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="#services-grid"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center">
                  Explore Services
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-800 font-medium rounded-xl shadow-sm hover:shadow-md border border-primary-200 hover:border-[#B08D57]/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                <span className="relative">Book Assessment</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/50"></path>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
      </section>

      {/* Services Grid - Clean & Modern */}
      <section id="services-grid" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-white relative overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B08D57' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className="group relative h-full">
                {/* Card Container - Clean Design */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full min-h-[480px] border border-slate-100">
                  {/* Premium gradient accent line at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content container */}
                  <div className="relative h-full flex flex-col">
                    {/* Header section with title */}
                    <div className="p-8 pb-6">
                      {/* Title with better typography */}
                      <h2 className="text-2xl font-light text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors duration-500">
                        {service.title}
                      </h2>
                      
                      {/* Subtle divider */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] opacity-60 group-hover:w-20 transition-all duration-500"></div>
                    </div>

                    {/* Description section */}
                    <div className="flex-1 px-8">
                      <p className="text-slate-600 leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefits section with cleaner design */}
                    <div className="px-8 pb-8 pt-6 mt-auto">
                      <div className="border-t border-slate-100 pt-6">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57] mb-4">
                          Benefits
                        </h3>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start group/item">
                              <div className="mt-1.5 mr-3 flex-shrink-0">
                                <div className="w-1 h-1 rounded-full bg-[#B08D57] group-hover/item:scale-150 transition-transform duration-300"></div>
                              </div>
                              <span className="text-slate-600 text-sm leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#B08D57]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Refined */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
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
            <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 backdrop-blur-sm text-[#B08D57] text-sm font-medium rounded-full mb-8 border border-[#B08D57]/20 shadow-sm transition-all duration-300 cursor-default">
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mr-3"></div>
              <span className="uppercase tracking-wider">Treatment Journey</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-primary-800">
              The Treatment <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Process</span>
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
                        <h3 className="text-xl font-medium mb-4 text-primary-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#B08D57] group-hover:to-[#D4AF37] group-hover:bg-clip-text transition-all duration-500 leading-tight">
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

      {/* Insurance Coverage Section - Clean */}
      <section className="py-16 bg-gradient-to-br from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse at top left, rgba(176, 141, 87, 0.03) 0%, transparent 40%)',
        }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#B08D57]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4AF37]/3 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Premium Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 backdrop-blur-sm text-[#B08D57] text-sm font-medium rounded-full mb-8 border border-[#B08D57]/20 shadow-sm transition-all duration-300 cursor-default">
                <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mr-3"></div>
                <span className="uppercase tracking-wider">Insurance & Billing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-8 text-primary-800">
                Insurance <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Coverage</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B08D57]/40 to-transparent"></div>
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full animate-ping"></div>
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
              </div>
              <p className="text-lg md:text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed font-light" style={{lineHeight: '1.8'}}>
                Physiotherapy services are covered by most extended health insurance plans
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Insurance Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-neutral-200/60 relative overflow-hidden group hover:shadow-md transition-all duration-500">
                {/* Subtle Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#B08D57]/5 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:scale-110 transition-transform duration-500" style={{
                        boxShadow: '0 10px 30px -5px rgba(176, 141, 87, 0.3)'
                      }}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-medium text-primary-800">
                      Direct Billing Available
                    </h3>
          </div>
          
                  <p className="text-primary-600 mb-8 leading-relaxed">
                    Direct billing available with major insurance providers:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      'Canada Life',
                      'Sun Life', 
                      'Manulife',
                      'Green Shield Canada',
                      'Blue Cross',
                      'WSIB'
                    ].map((provider, index) => (
                      <div key={index} className="group/item flex items-center p-4 bg-gradient-to-r from-slate-50/50 to-white rounded-xl border border-slate-200/60 hover:shadow-lg hover:border-[#B08D57]/30 hover:translate-x-1 transition-all duration-500 cursor-default" style={{
                        animationDelay: `${index * 0.05}s`,
                        backdropFilter: 'blur(5px)'
                      }}>
                        <div className="relative mr-4 flex-shrink-0">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] group-hover/item:scale-125 transition-transform duration-300"></div>
                          <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] opacity-30 blur-sm group-hover/item:opacity-60 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-primary-700 font-normal text-lg group-hover/item:text-primary-800 transition-colors duration-300">{provider}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#B08D57]/8 to-[#D4AF37]/8 rounded-xl p-5 border border-[#B08D57]/20 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center">
                      <div className="relative mr-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] animate-ping"></div>
                      </div>
                      <span className="text-primary-700 font-medium bg-gradient-to-r from-primary-700 to-[#B08D57] bg-clip-text text-transparent">and many more providers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Coverage Card */}
              <div className="bg-gradient-to-br from-primary-800 via-slate-800 to-primary-900 rounded-2xl p-8 text-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                {/* Subtle Glow Effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full -translate-y-24 translate-x-24 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#B08D57]/10 to-transparent rounded-full translate-y-20 -translate-x-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}></div>
                
                <div className="relative z-10">
                  <div className="relative w-16 h-16 mb-8">
                    <div className="relative w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-normal mb-4 text-white">
                    Need Coverage Help?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    If you're unsure whether we can direct bill your plan, call us and we'll let you know. We're here to help verify your coverage and ensure you get the care you need.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      'Free coverage verification',
                      'Direct billing when possible',
                      'Payment plan options available'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center group/benefit hover:translate-x-1 transition-transform duration-300" style={{animationDelay: `${idx * 0.1}s`}}>
                        <div className="relative mr-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B08D57] group-hover/benefit:scale-125 transition-transform duration-300"></div>
                          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B08D57] opacity-40 blur-sm"></div>
                        </div>
                        <span className="text-white/95 group-hover/benefit:text-white transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="tel:+16139007234"
                      className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] text-white rounded-xl font-medium transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call for Support
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Modern */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(176, 141, 87, 0.03) 0%, transparent 50%)',
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#B08D57]/5 via-transparent to-[#D4AF37]/5 rounded-full blur-3xl opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Premium CTA Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-[#B08D57]/10 overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(176,141,87,0.25)] transition-all duration-700" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B08D57]/10 via-[#D4AF37]/5 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#D4AF37]/10 via-[#B08D57]/5 to-transparent rounded-full translate-y-24 -translate-x-24 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 backdrop-blur-sm rounded-full border border-[#B08D57]/20 mb-8">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full mr-3"></div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#B08D57]">Next Steps</span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 text-primary-800">
                  Continue Your <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Care Journey</span>
                </h2>
                
                {/* Description */}
                <p className="text-primary-600 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl mx-auto" style={{lineHeight: '1.8'}}>
                  Partner with a physiotherapist dedicated to understanding your unique needs and achieving lasting results. Take the next step toward your recovery goals.
                </p>
                
                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#1A2036] to-slate-800 text-white rounded-xl font-medium text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#B08D57] hover:to-[#D4AF37] hover:text-slate-900 transform hover:-translate-y-0.5"
                >
                  Book Your Assessment
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t border-[#B08D57]/10">
                  <div className="flex items-center text-primary-600">
                    <svg className="w-5 h-5 text-[#B08D57] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Direct Insurance Billing</span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <svg className="w-5 h-5 text-[#B08D57] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Evidence-Based Treatment</span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <svg className="w-5 h-5 text-[#B08D57] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Personalized Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
} 