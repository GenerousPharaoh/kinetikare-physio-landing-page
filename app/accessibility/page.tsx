import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | KinetiKare Physiotherapy',
  description: 'Our commitment to providing accessible physiotherapy services to all individuals, including persons with disabilities, in compliance with AODA and Ontario Human Rights Code.',
  keywords: 'accessibility, AODA, physiotherapy accessibility, barrier-free healthcare, accessible services Burlington',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Accessibility Statement
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our commitment to providing accessible physiotherapy services to all individuals
            </p>
            <div className="bg-[#B08D57]/10 rounded-2xl p-6 mt-8 border border-[#B08D57]/20">
              <p className="text-lg font-semibold text-slate-800 mb-2">Effective Date: May 25, 2025</p>
              <div className="text-slate-600">
                <p className="font-semibold">Kareem Hassanein, Registered Physiotherapist</p>
                <p>Operating at: Endorphins Health and Wellness Centre</p>
                <p>4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            
            {/* Commitment to Accessibility */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                Commitment to Accessibility
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                I am committed to providing physiotherapy services that are accessible to all individuals, including persons with disabilities. I strive to ensure that every patient can access my services with dignity and independence, in compliance with the Accessibility for Ontarians with Disabilities Act (AODA) and the Ontario Human Rights Code.
              </p>
            </div>

            {/* Accessibility Standards */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                Accessibility Standards
              </h2>

              <div className="space-y-12">
                {/* Customer Service Standard */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">
                    Customer Service Standard
                  </h3>
                  <p className="text-slate-700 mb-4">
                    I am committed to providing accessible customer service to people with disabilities. This means:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Welcoming people with disabilities and their support persons, service animals, or assistive devices
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Communicating in ways that take into account a person's disability
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Providing notice when facilities or services that people with disabilities rely on are temporarily disrupted
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Training myself and any future staff on accessibility requirements
                    </li>
                  </ul>
                </div>

                {/* Information and Communications Standard */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">
                    Information and Communications Standard
                  </h3>
                  <p className="text-slate-700 mb-4">
                    I will provide information in accessible formats upon request, including:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Providing documents in alternative formats (large print, electronic formats)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Ensuring my website meets WCAG 2.0 Level AA standards
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Responding to accessibility requests in a timely manner
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Providing communication supports as needed
                    </li>
                  </ul>
                </div>

                {/* Employment Standard */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">
                    Employment Standard
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Should I hire employees in the future, I commit to:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Providing accessible recruitment and hiring processes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Developing individual accommodation plans for employees with disabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Providing accessible workplace information
                    </li>
                  </ul>
                </div>

                {/* Design of Public Spaces Standard */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">
                    Design of Public Spaces Standard
                  </h3>
                  <p className="text-slate-700 mb-4">
                    My practice space at Endorphins Health and Wellness Centre includes:
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Accessible parking spaces
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Accessible entrance and pathways
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Accessible reception and waiting areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Accessible treatment rooms
                    </li>
                  </ul>
                  <div className="bg-white rounded-lg p-4 border border-slate-300">
                    <p className="text-slate-700 mb-2">
                      For questions about the physical accessibility of the Endorphins Health and Wellness Centre facility, you may also contact:
                    </p>
                    <div className="text-slate-800 font-semibold">
                      <p>Endorphins Health and Wellness Centre</p>
                      <p>Email: info@endorphinshealth.com</p>
                      <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Services */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Assistive Devices */}
              <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#B08D57]/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Assistive Devices</h3>
                <p className="text-slate-700">
                  I welcome patients who use assistive devices. I will ensure that patients can use their assistive devices to access my services. I am familiar with various assistive devices and am willing to assist if requested.
                </p>
              </div>

              {/* Support Persons */}
              <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#B08D57]/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Support Persons</h3>
                <p className="text-slate-700">
                  Patients with disabilities who are accompanied by a support person are welcome to have that person accompany them during their appointment at no additional charge. I may require consent from the patient to discuss confidential health information in the presence of a support person.
                </p>
              </div>

              {/* Service Animals */}
              <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#B08D57]/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Animals</h3>
                <p className="text-slate-700">
                  I welcome patients with disabilities who are accompanied by service animals. Service animals are permitted in all areas of my practice that are open to patients, except where prohibited by law.
                </p>
              </div>

              {/* Communication */}
              <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#B08D57]/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Communication</h3>
                <p className="text-slate-700 mb-4">
                  I will communicate with patients with disabilities in ways that take into account their disability. I am prepared to use various communication methods including:
                </p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• Written notes</li>
                  <li>• Email communication</li>
                  <li>• Clear verbal communication</li>
                  <li>• Allowing extra time for communication</li>
                  <li>• Using plain language</li>
                </ul>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Accessible Formats */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Accessible Formats and Communication Supports</h3>
                <p className="text-slate-700">
                  Upon request, I will provide or arrange for accessible formats and communication supports for persons with disabilities in a timely manner and at no additional cost. I will consult with the person making the request to determine the most appropriate accessible format or communication support.
                </p>
              </div>

              {/* Notice of Disruption */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Notice of Temporary Disruption</h3>
                <p className="text-slate-700 mb-4">
                  In the event of a planned or unexpected disruption to services or facilities, I will notify patients promptly. This notice will include:
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    The reason for the disruption
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    The anticipated duration
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    A description of alternative facilities or services, if available
                  </li>
                </ul>
                <p className="text-slate-700 mb-2">Notice will be provided through:</p>
                <ul className="space-y-1 text-slate-700">
                  <li>• Signage at the practice location</li>
                  <li>• Website updates</li>
                  <li>• Direct contact with affected patients when possible</li>
                </ul>
              </div>

              {/* Training */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Training</h3>
                <p className="text-slate-700 mb-4">
                  I maintain current knowledge of accessibility requirements and best practices through ongoing professional development. Any future staff or volunteers will receive training on:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    The purposes of the AODA and Human Rights Code
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    How to interact and communicate with people with various types of disabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    How to interact with people who use assistive devices or require the assistance of a service animal or support person
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B08D57] mr-2 mt-1">•</span>
                    What to do if a person with a disability is having difficulty accessing services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback and Contact Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feedback Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">Feedback Process</h3>
                <p className="text-slate-700 mb-6">
                  I welcome feedback on how I provide accessible services to patients with disabilities. Feedback can be provided:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800">In Person:</p>
                    <p className="text-slate-600">At my practice location during business hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">By Phone:</p>
                    <p className="text-slate-600">(905) 634-6000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">By Email:</p>
                    <p className="text-slate-600">kareem.hassanein@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">By Mail:</p>
                    <p className="text-slate-600">4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                  </div>
                </div>
                <p className="text-slate-700 mt-6">
                  I will acknowledge feedback within 5 business days and will work to address concerns promptly. Accessible formats for providing feedback are available upon request.
                </p>
              </div>

              {/* Questions About This Statement */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">Questions About This Statement</h3>
                <p className="text-slate-700 mb-6">
                  For more information about this accessibility statement or to request documents in an accessible format, please contact:
                </p>
                <div className="bg-[#B08D57]/10 rounded-lg p-4 border border-[#B08D57]/20">
                  <p className="font-semibold text-slate-800 mb-2">Kareem Hassanein, Registered Physiotherapist</p>
                  <div className="space-y-1 text-slate-700">
                    <p>Email: kareem.hassanein@gmail.com</p>
                    <p>Phone: (905) 634-6000</p>
                    <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Sections */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Modifications to Policies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">Modifications to Policies</h3>
                <p className="text-slate-700">
                  I am committed to developing policies that respect and promote the dignity and independence of people with disabilities. When developing or modifying policies, I will consider the impact on persons with disabilities and their ability to access my services.
                </p>
              </div>

              {/* Continuous Improvement */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">Continuous Improvement</h3>
                <p className="text-slate-700">
                  I am committed to continuously improving accessibility in my practice. I welcome suggestions for improvement and will incorporate feedback into how I deliver physiotherapy services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 