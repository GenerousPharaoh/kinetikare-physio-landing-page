import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | KinetiKare Physiotherapy',
  description: 'Our comprehensive privacy policy outlining how we collect, use, and protect your personal and health information in compliance with PIPEDA and PHIPA.',
  keywords: 'privacy policy, PIPEDA, PHIPA, health information privacy, personal information protection, physiotherapy privacy',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="June 2, 2025">
      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          I, Kareem Hassanein, Registered Physiotherapist, am committed to protecting your personal information and your right to privacy. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or use my physiotherapy services.
        </p>
        <p>
          This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and the Personal Health Information Protection Act (PHIPA) of Ontario.
        </p>
      </section>

      {/* Information I Collect */}
      <section>
        <h2>Information I Collect</h2>
        
        <h3>Personal Information</h3>
        <p>I may collect the following personal information:</p>
        <ul>
          <li>Full name and contact information (address, phone number, email)</li>
          <li>Date of birth and age</li>
          <li>Ontario Health Insurance Plan (OHIP) information</li>
          <li>Private insurance information</li>
          <li>Emergency contact information</li>
          <li>Referring physician information</li>
        </ul>

        <h3>Health Information</h3>
        <p>As a healthcare provider, I collect:</p>
        <ul>
          <li>Medical history and current health conditions</li>
          <li>Physiotherapy assessment findings</li>
          <li>Treatment plans and progress notes</li>
          <li>Diagnostic test results</li>
          <li>Communications with other healthcare providers regarding your care</li>
          <li>Appointment records and billing information</li>
        </ul>

        <h3>Website Information</h3>
        <p>When you visit my website, I may automatically collect:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Device and operating system information</li>
        </ul>

        <h3>Website Analytics</h3>
        <p>I use Google Analytics to understand how visitors use my website. This service collects:</p>
        <ul>
          <li>Anonymous usage data (pages viewed, time on site, bounce rate)</li>
          <li>General location information (city/region, not specific address)</li>
          <li>Device and browser information</li>
          <li>How you found my website (search engines, referral sites)</li>
        </ul>
        <p>
          This data is anonymized and used solely to improve website content and user experience. No personal health information is shared with Google Analytics.
        </p>
      </section>

      {/* How I Use Your Information */}
      <section>
        <h2>How I Use Your Information</h2>
        <p>I use your personal and health information to:</p>
        <ul>
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
      <section>
        <h2>Disclosure of Your Information</h2>
        <p>I may share your information in the following circumstances:</p>
        
        <h3>With Your Consent</h3>
        <ul>
          <li>To other healthcare providers involved in your care</li>
          <li>To insurance companies for billing purposes</li>
          <li>To family members or caregivers you have authorized</li>
        </ul>

        <h3>Without Your Consent (as permitted by law)</h3>
        <ul>
          <li>To comply with legal obligations or court orders</li>
          <li>To protect against imminent harm to you or others</li>
          <li>For public health or safety reasons</li>
          <li>To professional regulatory bodies as required</li>
          <li>To defend against legal claims</li>
        </ul>
      </section>

      {/* Data Security */}
      <section>
        <h2>Data Security</h2>
        <p>I implement appropriate technical and organizational measures to protect your personal information, including:</p>
        <ul>
          <li>Physical security measures at my practice location</li>
          <li>Secure storage of paper records in locked filing systems</li>
          <li>Password-protected electronic systems</li>
          <li>Encryption of electronic communications where appropriate</li>
          <li>Limited access to personal information on a need-to-know basis</li>
          <li>Regular security assessments and updates</li>
        </ul>
      </section>

      {/* Your Rights */}
      <section>
        <h2>Your Rights</h2>
        <p>Under applicable privacy laws, you have the right to:</p>
        <ul>
          <li>Access your personal and health information</li>
          <li>Request corrections to inaccurate information</li>
          <li>Withdraw consent for certain uses of your information</li>
          <li>Request restrictions on how I use your information</li>
          <li>Lodge a complaint with privacy authorities</li>
          <li>Request information about my privacy practices</li>
        </ul>
      </section>

      {/* Additional Information */}
      <section>
        <h3>Retention of Information</h3>
        <p>
          I retain your personal health information for a minimum of 10 years following your last visit, or 10 years after you reach the age of majority (18 years), whichever is longer, as required by the College of Physiotherapists of Ontario. After this period, records are securely destroyed.
        </p>

        <h3>Children's Privacy</h3>
        <p>
          I provide services to minors with parental or guardian consent. Parents/guardians have the right to access their minor child's health information, subject to the minor's consent rights under Ontario law.
        </p>

        <h3>Accessible Formats and Communication Supports</h3>
        <p>
          Upon request, I will provide or arrange for accessible formats and communication supports for persons with disabilities in a timely manner and at no additional cost.
        </p>

        <h3>Changes to This Policy</h3>
        <p>
          I may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Effective Date" and will be posted on my website. I encourage you to review this Policy periodically.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:
        </p>
        <div className="contact-box">
          <p className="contact-name">Kareem Hassanein, Registered Physiotherapist</p>
          <p>Email: kareem.hassanein@gmail.com</p>
          <p>Phone: (905) 634-6000</p>
          <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
        </div>
      </section>

      {/* Complaints */}
      <section>
        <h2>Complaints</h2>
        <p>
          If you have concerns about my privacy practices, you may file a complaint with:
        </p>
        
        <div className="contact-box">
          <p className="contact-name">Information and Privacy Commissioner of Ontario</p>
          <p>2 Bloor Street East, Suite 1400</p>
          <p>Toronto, ON M4W 1A8</p>
          <p>Phone: 1-800-387-0073</p>
          <p>Email: info@ipc.on.ca</p>
        </div>

        <div className="contact-box">
          <p className="contact-name">Privacy Commissioner of Canada</p>
          <p>30 Victoria Street</p>
          <p>Gatineau, Quebec K1A 1H3</p>
          <p>Phone: 1-800-282-1376</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}