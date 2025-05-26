import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | KinetiKare Physiotherapy',
  description: 'Terms and conditions for physiotherapy services, including appointment policies, fees, professional standards, and patient responsibilities.',
  keywords: 'terms of service, physiotherapy terms, appointment policy, healthcare terms, professional services, Burlington physiotherapy',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Terms and conditions for professional physiotherapy services
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
            
            {/* Acceptance of Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-[#B08D57]/20 pb-4">
                1. Acceptance of Terms
              </h2>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <p className="text-slate-700 leading-relaxed text-lg">
                  By booking an appointment, receiving physiotherapy services, or using my website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services.
                </p>
              </div>
            </div>

            {/* Professional Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                2. Professional Services
              </h2>

              <div className="space-y-8">
                {/* Scope of Services */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">2.1 Scope of Services</h3>
                  <p className="text-slate-700 mb-4">
                    I provide physiotherapy assessment and treatment services within my scope of practice as defined by the College of Physiotherapists of Ontario. Services may include but are not limited to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-xl p-4 border border-[#B08D57]/20">
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start">
                          <span className="text-[#B08D57] mr-2 mt-1">•</span>
                          Physical assessment and diagnosis
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#B08D57] mr-2 mt-1">•</span>
                          Manual therapy
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#B08D57] mr-2 mt-1">•</span>
                          Exercise prescription
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-xl p-4 border border-[#B08D57]/20">
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start">
                          <span className="text-[#B08D57] mr-2 mt-1">•</span>
                          Education and advice
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#B08D57] mr-2 mt-1">•</span>
                          Modalities as appropriate
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Not Medical Advice */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-[#B08D57]">2.2 Not Medical Advice</h3>
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <p className="text-slate-700">
                      While I am a regulated healthcare professional, the information provided on my website is for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointments */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                3. Appointments
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Booking */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-[#B08D57]">3.1 Booking</h3>
                  <p className="text-slate-700 text-sm">
                    Appointments can be booked through the methods I make available. By booking an appointment, you confirm that all information provided is accurate and complete.
                  </p>
                </div>

                {/* Cancellation Policy */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-red-700">3.2 Cancellation Policy</h3>
                  <p className="text-slate-700 text-sm mb-3">
                    I require a minimum of <span className="font-semibold text-red-600">24 hours notice</span> for appointment cancellations or rescheduling.
                  </p>
                  <p className="text-slate-700 text-sm">
                    Failure to provide adequate notice may result in a cancellation fee equivalent to the full appointment cost.
                  </p>
                </div>

                {/* Late Arrivals */}
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-yellow-700">3.3 Late Arrivals</h3>
                  <p className="text-slate-700 text-sm mb-3">
                    If you arrive late for your appointment, I will do my best to accommodate you for the remaining time.
                  </p>
                  <p className="text-slate-700 text-sm font-semibold">
                    The full fee will still apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Fees and Payment */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                4. Fees and Payment
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#B08D57]">4.1 Service Fees</h3>
                    <p className="text-slate-700">
                      Current fees for services are available upon request and will be communicated before treatment begins. Fees are subject to change with reasonable notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#B08D57]">4.2 Payment Terms</h3>
                    <p className="text-slate-700 mb-3">
                      Payment is due at the time of service unless other arrangements have been made.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-slate-700 font-medium">Accepted Payment Methods:</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-slate-600">
                        <span>• Cash</span>
                        <span>• Debit</span>
                        <span>• Credit Cards</span>
                        <span>• E-transfer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#B08D57]">4.3 Insurance</h3>
                    <p className="text-slate-700">
                      I provide receipts suitable for insurance submission. You are responsible for understanding your insurance coverage and for any amounts not covered by insurance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#B08D57]">4.4 Outstanding Balances</h3>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-slate-700">
                        Accounts with outstanding balances may be subject to additional fees or collection procedures as permitted by law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Relationship */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                5. Professional Relationship
              </h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 text-blue-700">5.1 Informed Consent</h3>
                    <p className="text-slate-700 text-sm">
                      Before beginning treatment, I will explain the proposed treatment, expected benefits, material risks, and alternatives. Your consent to treatment may be withdrawn at any time.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 text-purple-700">5.2 Professional Boundaries</h3>
                    <p className="text-slate-700 text-sm">
                      My relationship with patients is strictly professional. I maintain appropriate professional boundaries as required by my regulatory college.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 text-teal-700">5.3 Collaborative Care</h3>
                    <p className="text-slate-700 text-sm">
                      With your consent, I may communicate with other healthcare providers involved in your care to ensure coordinated treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Responsibilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                6. Your Responsibilities
              </h2>
              <div className="bg-[#B08D57]/5 rounded-2xl p-8 border border-[#B08D57]/20">
                <p className="text-slate-700 mb-6 font-medium">As a patient, you agree to:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Provide accurate and complete health information
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Inform me of changes in your health status
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Follow the prescribed treatment plan or communicate concerns
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Treat me and my practice space with respect
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Attend scheduled appointments or provide adequate notice
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B08D57] mr-3 mt-1">✓</span>
                        Make timely payment for services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-[#B08D57]/20 pb-4">
                7. Limitation of Liability
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-[#B08D57]">7.1 Professional Liability</h3>
                  <p className="text-slate-700">
                    I maintain professional liability insurance as required by the College of Physiotherapists of Ontario. My liability for professional services is limited to the coverage provided by this insurance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 text-yellow-700">7.2 No Guarantee of Results</h3>
                    <p className="text-slate-700">
                      While I strive to provide effective treatment, I cannot guarantee specific results or outcomes from physiotherapy services.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 text-red-700">7.3 Limitation on Damages</h3>
                    <p className="text-slate-700">
                      To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal and Compliance Sections */}
            <div className="space-y-12">
              {/* Intellectual Property */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property</h3>
                <p className="text-slate-700">
                  All content on my website, including text, graphics, logos, and images, is my property or used with permission and is protected by Canadian copyright laws.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h3>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <p className="text-slate-700 mb-4">You agree to indemnify and hold me harmless from any claims, damages, or expenses arising from:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Your breach of these Terms of Service
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Your violation of any law or regulation
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Your provision of false or misleading information
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B08D57] mr-2 mt-1">•</span>
                      Your failure to follow treatment recommendations resulting in injury
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h3>
                <p className="text-slate-700">
                  These Terms of Service are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.
                </p>
              </div>

              {/* Regulatory Compliance */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">11. Regulatory Compliance</h3>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <p className="text-slate-700">
                    I am registered with and regulated by the College of Physiotherapists of Ontario. I maintain all required registrations, insurance, and comply with all applicable professional standards and regulations.
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">12. Accessibility</h3>
                <p className="text-slate-700">
                  I am committed to providing accessible services in compliance with the Accessibility for Ontarians with Disabilities Act (AODA). Please contact me to discuss any accommodation needs.
                </p>
              </div>

              {/* Additional Terms */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">13. Modifications to Terms</h3>
                  <p className="text-slate-700 text-sm">
                    I reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to my website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">14. Severability</h3>
                  <p className="text-slate-700 text-sm">
                    If any provision is found unenforceable, it shall be limited to the minimum extent necessary, and remaining provisions shall remain in effect.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">15. Entire Agreement</h3>
                <p className="text-slate-700">
                  These Terms of Service, together with my Privacy Policy and any consent forms, constitute the entire agreement between us regarding the use of my services.
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">16. Contact Information</h3>
                <p className="text-slate-700 mb-6">
                  For questions about these Terms of Service, please contact:
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

              {/* Complaints and Regulatory Bodies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-[#B08D57]">17. Complaints & Regulatory Bodies</h3>
                <p className="text-slate-700 mb-6">
                  Concerns about my professional services may be directed to:
                </p>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-3">College of Physiotherapists of Ontario</p>
                  <div className="text-slate-600 text-sm space-y-1">
                    <p>375 University Avenue, Suite 901</p>
                    <p>Toronto, ON M5G 2J5</p>
                    <p>Phone: 416-591-3828</p>
                    <p>Toll-free: 1-800-583-5885</p>
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