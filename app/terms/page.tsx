import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | KinetiKare Physiotherapy',
  description: 'Terms and conditions for physiotherapy services, including appointment policies, fees, professional standards, and patient responsibilities.',
  keywords: 'terms of service, physiotherapy terms, appointment policy, healthcare terms, professional services, Burlington physiotherapy',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/terms',
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" effectiveDate="June 2, 2025">
      {/* 1. Acceptance of Terms */}
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By booking an appointment, receiving physiotherapy services, or using my website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services.
        </p>
      </section>

      {/* 2. Professional Services */}
      <section>
        <h2>2. Professional Services</h2>
        
        <h3>2.1 Scope of Services</h3>
        <p>
          I provide physiotherapy assessment and treatment services within my scope of practice as defined by the College of Physiotherapists of Ontario. Services may include but are not limited to:
        </p>
        <ul>
          <li>Physical assessment and diagnosis</li>
          <li>Manual therapy</li>
          <li>Exercise prescription</li>
          <li>Education and advice</li>
          <li>Modalities as appropriate</li>
        </ul>

        <h3>2.2 Not Medical Advice</h3>
        <p>
          While I am a regulated healthcare professional, the information provided on my website is for general informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </section>

      {/* 3. Appointments */}
      <section>
        <h2>3. Appointments</h2>
        
        <h3>3.1 Booking</h3>
        <p>
          Appointments can be booked through the methods I make available. By booking an appointment, you confirm that all information provided is accurate and complete.
        </p>

        <h3>3.2 Cancellation Policy</h3>
        <p>
          I require a minimum of <strong>24 hours notice</strong> for appointment cancellations or rescheduling.
        </p>
        <p>
          Failure to provide adequate notice or missing an appointment without notice may result in a cancellation fee equivalent to the full appointment cost.
        </p>

        <h3>3.3 Late Arrivals</h3>
        <p>
          If you arrive late for your appointment, I will do my best to accommodate you for the remaining time. The full fee will still apply.
        </p>
      </section>

      {/* 4. Fees and Payment */}
      <section>
        <h2>4. Fees and Payment</h2>
        
        <h3>4.1 Service Fees</h3>
        <p>
          Current fees for services are available upon request and will be communicated before treatment begins. Fees are subject to change with reasonable notice.
        </p>
        
        <h3>4.2 Payment Terms</h3>
        <p>
          Payment is due at the time of service unless other arrangements have been made. I accept cash, debit, credit cards, and e-transfer.
        </p>

        <h3>4.3 Insurance</h3>
        <p>
          I provide receipts suitable for insurance submission. You are responsible for understanding your insurance coverage and for any amounts not covered by insurance.
        </p>

        <h3>4.4 Outstanding Balances</h3>
        <p>
          Accounts with outstanding balances may be subject to additional fees or collection procedures as permitted by law.
        </p>
      </section>

      {/* 5. Professional Relationship */}
      <section>
        <h2>5. Professional Relationship</h2>
        
        <h3>5.1 Informed Consent</h3>
        <p>
          Before beginning treatment, I will explain the proposed treatment, expected benefits, material risks, and alternatives. Your consent to treatment may be withdrawn at any time.
        </p>

        <h3>5.2 Professional Boundaries</h3>
        <p>
          My relationship with patients is strictly professional. I maintain appropriate professional boundaries as required by my regulatory college.
        </p>

        <h3>5.3 Collaborative Care</h3>
        <p>
          With your consent, I may communicate with other healthcare providers involved in your care to ensure coordinated treatment.
        </p>
      </section>

      {/* 6. Your Responsibilities */}
      <section>
        <h2>6. Your Responsibilities</h2>
        <p>As a patient, you agree to:</p>
        <ul>
          <li>Provide accurate and complete health information</li>
          <li>Inform me of changes in your health status</li>
          <li>Follow the prescribed treatment plan or communicate concerns</li>
          <li>Treat me and my practice space with respect</li>
          <li>Attend scheduled appointments or provide adequate cancellation notice</li>
          <li>Make timely payment for services</li>
        </ul>
      </section>

      {/* 7. Limitation of Liability */}
      <section>
        <h2>7. Limitation of Liability</h2>
        
        <h3>7.1 Professional Liability</h3>
        <p>
          I maintain professional liability insurance as required by the College of Physiotherapists of Ontario. My liability for professional services is limited to the coverage provided by this insurance.
        </p>

        <h3>7.2 No Guarantee of Results</h3>
        <p>
          While I strive to provide effective treatment, I cannot guarantee specific results or outcomes from physiotherapy services.
        </p>

        <h3>7.3 Limitation on Damages</h3>
        <p>
          To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the provision of services.
        </p>
      </section>

      {/* Additional Legal Sections */}
      <section>
        <h3>8. Intellectual Property</h3>
        <p>
          All content on my website, including text, graphics, logos, and images, is my property or used with permission and is protected by Canadian copyright laws.
        </p>

        <h3>9. Indemnification</h3>
        <p>You agree to indemnify and hold me harmless from any claims, damages, or expenses arising from:</p>
        <ul>
          <li>Your breach of these Terms of Service</li>
          <li>Your violation of any law or regulation</li>
          <li>Your provision of false or misleading information</li>
          <li>Your failure to follow treatment recommendations resulting in injury</li>
        </ul>

        <h3>10. Governing Law</h3>
        <p>
          These Terms of Service are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.
        </p>

        <h3>11. Regulatory Compliance</h3>
        <p>
          I am registered with and regulated by the College of Physiotherapists of Ontario. I maintain all required registrations, insurance, and comply with all applicable professional standards and regulations.
        </p>

        <h3>12. Accessibility</h3>
        <p>
          I am committed to providing accessible services in compliance with the Accessibility for Ontarians with Disabilities Act (AODA). Please contact me to discuss any accommodation needs.
        </p>

        <h3>13. Modifications to Terms</h3>
        <p>
          I reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to my website. Your continued use of my services after changes constitutes acceptance of the modified terms.
        </p>

        <h3>14. Severability</h3>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full effect.
        </p>

        <h3>15. Entire Agreement</h3>
        <p>
          These Terms of Service, together with my Privacy Policy and any consent forms, constitute the entire agreement between you and me regarding the use of my services.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2>16. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact:
        </p>
        <div className="contact-box">
          <p className="contact-name">Kareem Hassanein, Registered Physiotherapist</p>
          <p>Email: kareem.hassanein@gmail.com</p>
          <p>Phone: (905) 634-6000</p>
          <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
        </div>
      </section>

      {/* Complaints and Regulatory Bodies */}
      <section>
        <h2>17. Complaints and Regulatory Bodies</h2>
        <p>
          Concerns about my professional services may be directed to:
        </p>
        <div className="contact-box">
          <p className="contact-name">College of Physiotherapists of Ontario</p>
          <p>375 University Avenue, Suite 901</p>
          <p>Toronto, ON M5G 2J5</p>
          <p>Phone: 416-591-3828</p>
          <p>Toll-free: 1-800-583-5885</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
