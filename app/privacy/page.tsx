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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Your privacy and the protection of your personal health information is our priority
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
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                Introduction
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                I, Kareem Hassanein, Registered Physiotherapist, am committed to protecting your personal information and your right to privacy. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or use my physiotherapy services.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <p className="text-slate-700 font-medium">
                  This policy complies with the <span className="text-[#B08D57] font-semibold">Personal Information Protection and Electronic Documents Act (PIPEDA)</span> and the <span className="text-[#B08D57] font-semibold">Personal Health Information Protection Act (PHIPA)</span> of Ontario.
                </p>
              </div>
            </div>

            {/* Information I Collect */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                Information I Collect
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Personal Information */}
                <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-6 border border-[#B08D57]/20">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-[#B08D57]">Personal Information</h3>
                  <p className="text-slate-700 mb-4 text-sm">I may collect the following personal information:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Full name and contact information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Date of birth and age
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      OHIP information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Private insurance information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Emergency contact information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Referring physician information
                    </li>
                  </ul>
                </div>

                {/* Health Information */}
                <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-6 border border-[#B08D57]/20">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-[#B08D57]">Health Information</h3>
                  <p className="text-slate-700 mb-4 text-sm">As a healthcare provider, I collect:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Medical history and current conditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Physiotherapy assessment findings
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Treatment plans and progress notes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Diagnostic test results
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Healthcare provider communications
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Appointment and billing records
                    </li>
                  </ul>
                </div>

                {/* Website Information */}
                <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-2xl p-6 border border-[#B08D57]/20">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-[#B08D57]">Website Information</h3>
                  <p className="text-slate-700 mb-4 text-sm">When you visit my website, I may collect:</p>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      IP address and browser type
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Pages visited and time spent
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Referring website addresses
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1 text-xs">•</span>
                      Device and OS information
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How I Use Your Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                How I Use Your Information
              </h2>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <p className="text-slate-700 mb-6">
                  I use your personal and health information to:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Provide physiotherapy assessment and treatment services
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Develop and monitor your treatment plan
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Communicate with you about appointments and care
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Process billing and insurance claims
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Comply with legal and regulatory requirements
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Communicate with other healthcare providers (with consent)
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Maintain accurate clinical records
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">•</span>
                        Improve my services and website functionality
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclosure of Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                Disclosure of Your Information
              </h2>
              <p className="text-slate-700 mb-8 text-lg">
                I may share your information in the following circumstances:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* With Your Consent */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-green-700">With Your Consent</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      To other healthcare providers involved in your care
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      To insurance companies for billing purposes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      To family members or caregivers you have authorized
                    </li>
                  </ul>
                </div>

                {/* Without Your Consent */}
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-orange-700">Without Your Consent <span className="text-sm font-normal">(as permitted by law)</span></h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      To comply with legal obligations or court orders
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      To protect against imminent harm
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      For public health or safety reasons
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      To professional regulatory bodies as required
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                Data Security
              </h2>
              <p className="text-slate-700 mb-6">
                I implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">🔒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Physical Security</h4>
                      <p className="text-slate-600 text-sm">Secure measures at practice location</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">📁</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Record Storage</h4>
                      <p className="text-slate-600 text-sm">Locked filing systems for paper records</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">🔐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Electronic Security</h4>
                      <p className="text-slate-600 text-sm">Password-protected systems</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">🔢</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Encryption</h4>
                      <p className="text-slate-600 text-sm">Secure electronic communications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">👥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Limited Access</h4>
                      <p className="text-slate-600 text-sm">Need-to-know basis only</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#B08D57] rounded-lg flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Regular Updates</h4>
                      <p className="text-slate-600 text-sm">Security assessments and updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                Your Rights
              </h2>
              <p className="text-slate-700 mb-6">
                Under applicable privacy laws, you have the right to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Access your personal and health information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Request corrections to inaccurate information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Withdraw consent for certain uses
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Request restrictions on information use
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Lodge complaints with privacy authorities
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      Request information about privacy practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              {/* Retention */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Retention of Information</h3>
                <div className="bg-[#B08D57]/5 rounded-2xl p-6 border border-[#B08D57]/20">
                  <p className="text-slate-700">
                    I retain your personal health information for a minimum of <span className="font-semibold text-[#B08D57]">10 years</span> following your last visit, or 10 years after you reach the age of majority (18 years), whichever is longer, as required by the College of Physiotherapists of Ontario. After this period, records are securely destroyed.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h3>
                <p className="text-slate-700">
                  I provide services to minors with parental or guardian consent. Parents/guardians have the right to access their minor child's health information, subject to the minor's consent rights under Ontario law.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h3>
                <p className="text-slate-700">
                  I may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Effective Date" and will be posted on my website. I encourage you to review this Policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Complaints Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">Contact Information</h3>
                <p className="text-slate-700 mb-6">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact me:
                </p>
                <div className="bg-[#B08D57]/10 rounded-lg p-6 border border-[#B08D57]/20">
                  <p className="font-semibold text-slate-800 mb-3">Kareem Hassanein, Registered Physiotherapist</p>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-medium">Email:</span> kareem.hassanein@gmail.com</p>
                    <p><span className="font-medium">Phone:</span> (905) 634-6000</p>
                    <p><span className="font-medium">Address:</span> 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                  </div>
                </div>
              </div>

              {/* Complaints */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">Complaints</h3>
                <p className="text-slate-700 mb-6">
                  If you have concerns about my privacy practices, you may file a complaint with:
                </p>
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800 mb-2">Information and Privacy Commissioner of Ontario</p>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p>2 Bloor Street East, Suite 1400</p>
                      <p>Toronto, ON M4W 1A8</p>
                      <p>Phone: 1-800-387-0073</p>
                      <p>Email: info@ipc.on.ca</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800 mb-2">Privacy Commissioner of Canada</p>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p>30 Victoria Street</p>
                      <p>Gatineau, Quebec K1A 1H3</p>
                      <p>Phone: 1-800-282-1376</p>
                    </div>
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