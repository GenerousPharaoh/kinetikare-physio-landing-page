import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | KinetiKare Physiotherapy',
  description: 'Our comprehensive privacy policy outlining how we collect, use, and protect your personal and health information in compliance with PIPEDA and PHIPA.',
  keywords: 'privacy policy, PIPEDA, PHIPA, health information privacy, personal information protection, physiotherapy privacy',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy Policy
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
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I, Kareem Hassanein, Registered Physiotherapist, am committed to protecting your personal information and your right to privacy. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or use my physiotherapy services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and the Personal Health Information Protection Act (PHIPA) of Ontario.
                </p>
              </section>

              {/* Information I Collect */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Information I Collect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-2">I may collect the following personal information:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Full name and contact information (address, phone number, email)</li>
                      <li>Date of birth and age</li>
                      <li>Ontario Health Insurance Plan (OHIP) information</li>
                      <li>Private insurance information</li>
                      <li>Emergency contact information</li>
                      <li>Referring physician information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Health Information</h3>
                    <p className="text-gray-700 mb-2">As a healthcare provider, I collect:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Medical history and current health conditions</li>
                      <li>Physiotherapy assessment findings</li>
                      <li>Treatment plans and progress notes</li>
                      <li>Diagnostic test results</li>
                      <li>Communications with other healthcare providers regarding your care</li>
                      <li>Appointment records and billing information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Website Information</h3>
                    <p className="text-gray-700 mb-2">When you visit my website, I may automatically collect:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Website Analytics</h3>
                    <p className="text-gray-700 mb-2">I use Google Analytics to understand how visitors use my website. This service collects:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Anonymous usage data (pages viewed, time on site, bounce rate)</li>
                      <li>General location information (city/region, not specific address)</li>
                      <li>Device and browser information</li>
                      <li>How you found my website (search engines, referral sites)</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      This data is anonymized and used solely to improve website content and user experience. No personal health information is shared with Google Analytics.
                    </p>
                  </div>
                </div>
              </section>

              {/* How I Use Your Information */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  How I Use Your Information
                </h2>
                <p className="text-gray-700 mb-3">I use your personal and health information to:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Provide physiotherapy assessment and treatment services</li>
                  <li>Develop and monitor your treatment plan</li>
                  <li>Communicate with you about appointments and care</li>
                  <li>Process billing and insurance claims</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate with other healthcare providers involved in your care (with consent)</li>
                  <li>Maintain accurate clinical records</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve my services and website functionality</li>
                </ul>
              </section>

              {/* Disclosure of Information */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Disclosure of Your Information
                </h2>
                <p className="text-gray-700 mb-4">I may share your information in the following circumstances:</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">With Your Consent</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>To other healthcare providers involved in your care</li>
                      <li>To insurance companies for billing purposes</li>
                      <li>To family members or caregivers you have authorized</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Without Your Consent (as permitted by law)</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>To comply with legal obligations or court orders</li>
                      <li>To protect against imminent harm to you or others</li>
                      <li>For public health or safety reasons</li>
                      <li>To professional regulatory bodies as required</li>
                      <li>To defend against legal claims</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Data Security
                </h2>
                <p className="text-gray-700 mb-3">I implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Physical security measures at my practice location</li>
                  <li>Secure storage of paper records in locked filing systems</li>
                  <li>Password-protected electronic systems</li>
                  <li>Encryption of electronic communications where appropriate</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security assessments and updates</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-3">Under applicable privacy laws, you have the right to:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Access your personal and health information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Withdraw consent for certain uses of your information</li>
                  <li>Request restrictions on how I use your information</li>
                  <li>Lodge a complaint with privacy authorities</li>
                  <li>Request information about my privacy practices</li>
                </ul>
              </section>

              {/* Additional Sections */}
              <section className="mb-12 space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Retention of Information</h3>
                  <p className="text-gray-700">
                    I retain your personal health information for a minimum of 10 years following your last visit, or 10 years after you reach the age of majority (18 years), whichever is longer, as required by the College of Physiotherapists of Ontario. After this period, records are securely destroyed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Children's Privacy</h3>
                  <p className="text-gray-700">
                    I provide services to minors with parental or guardian consent. Parents/guardians have the right to access their minor child's health information, subject to the minor's consent rights under Ontario law.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Accessible Formats and Communication Supports</h3>
                  <p className="text-gray-700">
                    Upon request, I will provide or arrange for accessible formats and communication supports for persons with disabilities in a timely manner and at no additional cost.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Changes to This Policy</h3>
                  <p className="text-gray-700">
                    I may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Effective Date" and will be posted on my website. I encourage you to review this Policy periodically.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">Kareem Hassanein, Registered Physiotherapist</p>
                  <p className="text-gray-700">Email: kareem.hassanein@gmail.com</p>
                  <p className="text-gray-700">Phone: (905) 634-6000</p>
                  <p className="text-gray-700">Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                </div>
              </section>

              {/* Complaints */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  Complaints
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have concerns about my privacy practices, you may file a complaint with:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="font-medium text-gray-900">Information and Privacy Commissioner of Ontario</p>
                    <p className="text-gray-700">2 Bloor Street East, Suite 1400</p>
                    <p className="text-gray-700">Toronto, ON M4W 1A8</p>
                    <p className="text-gray-700">Phone: 1-800-387-0073</p>
                    <p className="text-gray-700">Email: info@ipc.on.ca</p>
                  </div>

                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <p className="font-medium text-gray-900">Privacy Commissioner of Canada</p>
                    <p className="text-gray-700">30 Victoria Street</p>
                    <p className="text-gray-700">Gatineau, Quebec K1A 1H3</p>
                    <p className="text-gray-700">Phone: 1-800-282-1376</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 