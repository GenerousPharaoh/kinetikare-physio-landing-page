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
      {/* Simple Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Accessibility Statement
            </h1>
            <div className="text-gray-600 space-y-1">
              <p><strong>Effective Date:</strong> May 25, 2025</p>
              <p><strong>Kareem Hassanein, Registered Physiotherapist</strong></p>
              <p>Operating at: Endorphins Health and Wellness Centre</p>
              <p>4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">
              
              {/* Commitment to Accessibility */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Commitment to Accessibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I am committed to providing physiotherapy services that are accessible to all individuals, including persons with disabilities. I strive to ensure that every patient can access my services with dignity and independence, in compliance with the Accessibility for Ontarians with Disabilities Act (AODA) and the Ontario Human Rights Code.
                </p>
              </section>

              {/* Accessibility Standards */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Accessibility Standards
                </h2>

                <div className="space-y-8">
                  {/* Customer Service Standard */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Customer Service Standard</h3>
                    <p className="text-gray-700 mb-3">
                      I am committed to providing accessible customer service to people with disabilities. This means:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Welcoming people with disabilities and their support persons, service animals, or assistive devices</li>
                      <li>Communicating in ways that take into account a person's disability</li>
                      <li>Providing notice when facilities or services that people with disabilities rely on are temporarily disrupted</li>
                      <li>Training myself and any future staff on accessibility requirements</li>
                    </ul>
                  </div>

                  {/* Information and Communications Standard */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Information and Communications Standard</h3>
                    <p className="text-gray-700 mb-3">
                      I will provide information in accessible formats upon request, including:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Providing documents in alternative formats (large print, electronic formats)</li>
                      <li>Ensuring my website meets WCAG 2.0 Level AA standards</li>
                      <li>Responding to accessibility requests in a timely manner</li>
                      <li>Providing communication supports as needed</li>
                    </ul>
                  </div>

                  {/* Employment Standard */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Employment Standard</h3>
                    <p className="text-gray-700 mb-3">
                      Should I hire employees in the future, I commit to:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Providing accessible recruitment and hiring processes</li>
                      <li>Developing individual accommodation plans for employees with disabilities</li>
                      <li>Providing accessible workplace information</li>
                    </ul>
                  </div>

                  {/* Design of Public Spaces Standard */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Design of Public Spaces Standard</h3>
                    <p className="text-gray-700 mb-3">
                      My practice space at Endorphins Health and Wellness Centre includes:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
                      <li>Accessible parking spaces</li>
                      <li>Accessible entrance and pathways</li>
                      <li>Accessible reception and waiting areas</li>
                      <li>Accessible treatment rooms</li>
                    </ul>
                    <div className="bg-gray-50 p-4 border border-gray-200">
                      <p className="text-gray-700 mb-2">
                        For questions about the physical accessibility of the Endorphins Health and Wellness Centre facility, you may also contact:
                      </p>
                      <div className="text-gray-800 font-medium">
                        <p>Endorphins Health and Wellness Centre</p>
                        <p>Email: info@endorphinshealth.com</p>
                        <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Services */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Accessibility Services
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Assistive Devices</h3>
                    <p className="text-gray-700">
                      I welcome patients who use assistive devices. I will ensure that patients can use their assistive devices to access my services. I am familiar with various assistive devices and am willing to assist if requested.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Support Persons</h3>
                    <p className="text-gray-700">
                      Patients with disabilities who are accompanied by a support person are welcome to have that person accompany them during their appointment at no additional charge. I may require consent from the patient to discuss confidential health information in the presence of a support person.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Service Animals</h3>
                    <p className="text-gray-700">
                      I welcome patients with disabilities who are accompanied by service animals. Service animals are permitted in all areas of my practice that are open to patients, except where prohibited by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Communication</h3>
                    <p className="text-gray-700 mb-3">
                      I will communicate with patients with disabilities in ways that take into account their disability. I am prepared to use various communication methods including:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Written notes</li>
                      <li>Email communication</li>
                      <li>Clear verbal communication</li>
                      <li>Allowing extra time for communication</li>
                      <li>Using plain language</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Additional Sections */}
              <section className="mb-12 space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Accessible Formats and Communication Supports</h3>
                  <p className="text-gray-700">
                    Upon request, I will provide or arrange for accessible formats and communication supports for persons with disabilities in a timely manner and at no additional cost. I will consult with the person making the request to determine the most appropriate accessible format or communication support.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Notice of Temporary Disruption</h3>
                  <p className="text-gray-700 mb-3">
                    In the event of a planned or unexpected disruption to services or facilities, I will notify patients promptly. This notice will include:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
                    <li>The reason for the disruption</li>
                    <li>The anticipated duration</li>
                    <li>A description of alternative facilities or services, if available</li>
                  </ul>
                  <p className="text-gray-700 mb-2">Notice will be provided through:</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Signage at the practice location</li>
                    <li>Website updates</li>
                    <li>Direct contact with affected patients when possible</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Training</h3>
                  <p className="text-gray-700 mb-3">
                    I maintain current knowledge of accessibility requirements and best practices through ongoing professional development. Any future staff or volunteers will receive training on:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>The purposes of the AODA and Human Rights Code</li>
                    <li>How to interact and communicate with people with various types of disabilities</li>
                    <li>How to interact with people who use assistive devices or require the assistance of a service animal or support person</li>
                    <li>What to do if a person with a disability is having difficulty accessing services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Modifications to Policies</h3>
                  <p className="text-gray-700">
                    I am committed to developing policies that respect and promote the dignity and independence of people with disabilities. When developing or modifying policies, I will consider the impact on persons with disabilities and their ability to access my services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    I am committed to continuously improving accessibility in my practice. I welcome suggestions for improvement and will incorporate feedback into how I deliver physiotherapy services.
                  </p>
                </div>
              </section>

              {/* Feedback Process */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Feedback Process
                </h2>
                <p className="text-gray-700 mb-4">
                  I welcome feedback on how I provide accessible services to patients with disabilities. Feedback can be provided:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
                  <li><strong>In Person:</strong> At my practice location during business hours</li>
                  <li><strong>By Phone:</strong> (905) 634-6000</li>
                  <li><strong>By Email:</strong> kareem.hassanein@gmail.com</li>
                  <li><strong>By Mail:</strong> 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</li>
                </ul>
                <p className="text-gray-700">
                  I will acknowledge feedback within 5 business days and will work to address concerns promptly. Accessible formats for providing feedback are available upon request.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Questions About This Statement
                </h2>
                <p className="text-gray-700 mb-4">
                  For more information about this accessibility statement or to request documents in an accessible format, please contact:
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">Kareem Hassanein, Registered Physiotherapist</p>
                  <p className="text-gray-700">Email: kareem.hassanein@gmail.com</p>
                  <p className="text-gray-700">Phone: (905) 634-6000</p>
                  <p className="text-gray-700">Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 