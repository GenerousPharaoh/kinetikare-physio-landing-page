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
      {/* Simple Header */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Terms of Service
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
              
              {/* 1. Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By booking an appointment, receiving physiotherapy services, or using my website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services.
                </p>
              </section>

              {/* 2. Professional Services */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  2. Professional Services
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">2.1 Scope of Services</h3>
                    <p className="text-gray-700 mb-3">
                      I provide physiotherapy assessment and treatment services within my scope of practice as defined by the College of Physiotherapists of Ontario. Services may include but are not limited to:
                    </p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                      <li>Physical assessment and diagnosis</li>
                      <li>Manual therapy</li>
                      <li>Exercise prescription</li>
                      <li>Education and advice</li>
                      <li>Modalities as appropriate</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">2.2 Not Medical Advice</h3>
                    <p className="text-gray-700">
                      While I am a regulated healthcare professional, the information provided on my website is for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Appointments */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  3. Appointments
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">3.1 Booking</h3>
                    <p className="text-gray-700">
                      Appointments can be booked through the methods I make available. By booking an appointment, you confirm that all information provided is accurate and complete.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">3.2 Cancellation Policy</h3>
                    <p className="text-gray-700 mb-2">
                      I require a minimum of <strong>24 hours notice</strong> for appointment cancellations or rescheduling.
                    </p>
                    <p className="text-gray-700">
                      Failure to provide adequate notice or missing an appointment without notice may result in a cancellation fee equivalent to the full appointment cost.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">3.3 Late Arrivals</h3>
                    <p className="text-gray-700">
                      If you arrive late for your appointment, I will do my best to accommodate you for the remaining time. The full fee will still apply.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Fees and Payment */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  4. Fees and Payment
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">4.1 Service Fees</h3>
                    <p className="text-gray-700">
                      Current fees for services are available upon request and will be communicated before treatment begins. Fees are subject to change with reasonable notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">4.2 Payment Terms</h3>
                    <p className="text-gray-700 mb-3">
                      Payment is due at the time of service unless other arrangements have been made. I accept cash, debit, credit cards, and e-transfer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">4.3 Insurance</h3>
                    <p className="text-gray-700">
                      I provide receipts suitable for insurance submission. You are responsible for understanding your insurance coverage and for any amounts not covered by insurance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">4.4 Outstanding Balances</h3>
                    <p className="text-gray-700">
                      Accounts with outstanding balances may be subject to additional fees or collection procedures as permitted by law.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Professional Relationship */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  5. Professional Relationship
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">5.1 Informed Consent</h3>
                    <p className="text-gray-700">
                      Before beginning treatment, I will explain the proposed treatment, expected benefits, material risks, and alternatives. Your consent to treatment may be withdrawn at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">5.2 Professional Boundaries</h3>
                    <p className="text-gray-700">
                      My relationship with patients is strictly professional. I maintain appropriate professional boundaries as required by my regulatory college.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">5.3 Collaborative Care</h3>
                    <p className="text-gray-700">
                      With your consent, I may communicate with other healthcare providers involved in your care to ensure coordinated treatment.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Your Responsibilities */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  6. Your Responsibilities
                </h2>
                <p className="text-gray-700 mb-3">As a patient, you agree to:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Provide accurate and complete health information</li>
                  <li>Inform me of changes in your health status</li>
                  <li>Follow the prescribed treatment plan or communicate concerns</li>
                  <li>Treat me and my practice space with respect</li>
                  <li>Attend scheduled appointments or provide adequate cancellation notice</li>
                  <li>Make timely payment for services</li>
                </ul>
              </section>

              {/* 7. Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  7. Limitation of Liability
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">7.1 Professional Liability</h3>
                    <p className="text-gray-700">
                      I maintain professional liability insurance as required by the College of Physiotherapists of Ontario. My liability for professional services is limited to the coverage provided by this insurance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">7.2 No Guarantee of Results</h3>
                    <p className="text-gray-700">
                      While I strive to provide effective treatment, I cannot guarantee specific results or outcomes from physiotherapy services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">7.3 Limitation on Damages</h3>
                    <p className="text-gray-700">
                      To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the provision of services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Additional Legal Sections */}
              <section className="mb-12 space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">8. Intellectual Property</h3>
                  <p className="text-gray-700">
                    All content on my website, including text, graphics, logos, and images, is my property or used with permission and is protected by Canadian copyright laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">9. Indemnification</h3>
                  <p className="text-gray-700 mb-3">You agree to indemnify and hold me harmless from any claims, damages, or expenses arising from:</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Your breach of these Terms of Service</li>
                    <li>Your violation of any law or regulation</li>
                    <li>Your provision of false or misleading information</li>
                    <li>Your failure to follow treatment recommendations resulting in injury</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">10. Governing Law</h3>
                  <p className="text-gray-700">
                    These Terms of Service are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">11. Regulatory Compliance</h3>
                  <p className="text-gray-700">
                    I am registered with and regulated by the College of Physiotherapists of Ontario. I maintain all required registrations, insurance, and comply with all applicable professional standards and regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">12. Accessibility</h3>
                  <p className="text-gray-700">
                    I am committed to providing accessible services in compliance with the Accessibility for Ontarians with Disabilities Act (AODA). Please contact me to discuss any accommodation needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">13. Modifications to Terms</h3>
                  <p className="text-gray-700">
                    I reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to my website. Your continued use of my services after changes constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">14. Severability</h3>
                  <p className="text-gray-700">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">15. Entire Agreement</h3>
                  <p className="text-gray-700">
                    These Terms of Service, together with my Privacy Policy and any consent forms, constitute the entire agreement between us regarding the use of my services.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  16. Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">Kareem Hassanein, Registered Physiotherapist</p>
                  <p className="text-gray-700">Email: kareem.hassanein@gmail.com</p>
                  <p className="text-gray-700">Phone: (905) 634-6000</p>
                  <p className="text-gray-700">Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
                </div>
              </section>

              {/* Complaints and Regulatory Bodies */}
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  17. Complaints and Regulatory Bodies
                </h2>
                <p className="text-gray-700 mb-4">
                  Concerns about my professional services may be directed to:
                </p>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">College of Physiotherapists of Ontario</p>
                  <p className="text-gray-700">375 University Avenue, Suite 901</p>
                  <p className="text-gray-700">Toronto, ON M5G 2J5</p>
                  <p className="text-gray-700">Phone: 416-591-3828</p>
                  <p className="text-gray-700">Toll-free: 1-800-583-5885</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 