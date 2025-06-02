import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Accessibility Statement | KinetiKare Physiotherapy',
  description: 'Our commitment to providing accessible physiotherapy services to all individuals, including persons with disabilities, in compliance with AODA and Ontario Human Rights Code.',
  keywords: 'accessibility, AODA, physiotherapy accessibility, barrier-free healthcare, accessible services Burlington',
};

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement" effectiveDate="June 2, 2025">
      {/* Commitment to Accessibility */}
      <section>
        <h2>Commitment to Accessibility</h2>
        <p>
          I am committed to providing physiotherapy services that are accessible to all individuals, including persons with disabilities. I strive to ensure that every patient can access my services with dignity and independence, in compliance with the Accessibility for Ontarians with Disabilities Act (AODA) and the Ontario Human Rights Code.
        </p>
      </section>

      {/* Accessibility Standards */}
      <section>
        <h2>Accessibility Standards</h2>
        
        {/* Customer Service Standard */}
        <h3>Customer Service Standard</h3>
        <p>
          I am committed to providing accessible customer service to people with disabilities. This means:
        </p>
        <ul>
          <li>Welcoming people with disabilities and their support persons, service animals, or assistive devices</li>
          <li>Communicating in ways that take into account a person's disability</li>
          <li>Providing notice when facilities or services that people with disabilities rely on are temporarily disrupted</li>
          <li>Training myself and any future staff on accessibility requirements</li>
        </ul>

        {/* Information and Communications Standard */}
        <h3>Information and Communications Standard</h3>
        <p>
          I will provide information in accessible formats upon request, including:
        </p>
        <ul>
          <li>Providing documents in alternative formats (large print, electronic formats)</li>
          <li>Ensuring my website meets WCAG 2.0 Level AA standards</li>
          <li>Responding to accessibility requests in a timely manner</li>
          <li>Providing communication supports as needed</li>
        </ul>

        {/* Employment Standard */}
        <h3>Employment Standard</h3>
        <p>
          Should I hire employees in the future, I commit to:
        </p>
        <ul>
          <li>Providing accessible recruitment and hiring processes</li>
          <li>Developing individual accommodation plans for employees with disabilities</li>
          <li>Providing accessible workplace information</li>
        </ul>

        {/* Design of Public Spaces Standard */}
        <h3>Design of Public Spaces Standard</h3>
        <p>
          My practice space at Endorphins Health and Wellness Centre includes:
        </p>
        <ul>
          <li>Accessible parking spaces</li>
          <li>Accessible entrance and pathways</li>
          <li>Accessible reception and waiting areas</li>
          <li>Accessible treatment rooms</li>
        </ul>
        <div className="contact-box">
          <p>
            For questions about the physical accessibility of the Endorphins Health and Wellness Centre facility, you may also contact:
          </p>
          <p className="contact-name">Endorphins Health and Wellness Centre</p>
          <p>Email: info@endorphinshealth.com</p>
          <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
        </div>
      </section>

      {/* Key Services */}
      <section>
        <h2>Accessibility Services</h2>
        
        <h3>Assistive Devices</h3>
        <p>
          I welcome patients who use assistive devices. I will ensure that patients can use their assistive devices to access my services. I am familiar with various assistive devices and am willing to assist if requested.
        </p>

        <h3>Support Persons</h3>
        <p>
          Patients with disabilities who are accompanied by a support person are welcome to have that person accompany them during their appointment at no additional charge. I may require consent from the patient to discuss confidential health information in the presence of a support person.
        </p>

        <h3>Service Animals</h3>
        <p>
          I welcome patients with disabilities who are accompanied by service animals. Service animals are permitted in all areas of my practice that are open to patients, except where prohibited by law.
        </p>

        <h3>Communication</h3>
        <p>
          I will communicate with patients with disabilities in ways that take into account their disability. I am prepared to use various communication methods including:
        </p>
        <ul>
          <li>Written notes</li>
          <li>Email communication</li>
          <li>Clear verbal communication</li>
          <li>Allowing extra time for communication</li>
          <li>Using plain language</li>
        </ul>
      </section>

      {/* Additional Sections */}
      <section>
        <h3>Accessible Formats and Communication Supports</h3>
        <p>
          Upon request, I will provide or arrange for accessible formats and communication supports for persons with disabilities in a timely manner and at no additional cost. I will consult with the person making the request to determine the most appropriate accessible format or communication support.
        </p>

        <h3>Notice of Temporary Disruption</h3>
        <p>
          In the event of a planned or unexpected disruption to services or facilities, I will notify patients promptly. This notice will include:
        </p>
        <ul>
          <li>The reason for the disruption</li>
          <li>The anticipated duration</li>
          <li>A description of alternative facilities or services, if available</li>
        </ul>
        <p>Notice will be provided through:</p>
        <ul>
          <li>Signage at the practice location</li>
          <li>Website updates</li>
          <li>Direct contact with affected patients when possible</li>
        </ul>

        <h3>Training</h3>
        <p>
          I maintain current knowledge of accessibility requirements and best practices through ongoing professional development. Any future staff or volunteers will receive training on:
        </p>
        <ul>
          <li>The purposes of the AODA and Human Rights Code</li>
          <li>How to interact and communicate with people with various types of disabilities</li>
          <li>How to interact with people who use assistive devices or require the assistance of a service animal or support person</li>
          <li>What to do if a person with a disability is having difficulty accessing services</li>
        </ul>

        <h3>Modifications to Policies</h3>
        <p>
          I am committed to developing policies that respect and promote the dignity and independence of people with disabilities. When developing or modifying policies, I will consider the impact on persons with disabilities and their ability to access my services.
        </p>

        <h3>Continuous Improvement</h3>
        <p>
          I am committed to continuously improving accessibility in my practice. I welcome suggestions for improvement and will incorporate feedback into how I deliver physiotherapy services.
        </p>
      </section>

      {/* Feedback Process */}
      <section>
        <h2>Feedback Process</h2>
        <p>
          I welcome feedback on how I provide accessible services to patients with disabilities. Feedback can be provided:
        </p>
        <ul>
          <li><strong>In Person:</strong> At my practice location during business hours</li>
          <li><strong>By Phone:</strong> (905) 634-6000</li>
          <li><strong>By Email:</strong> kareem.hassanein@gmail.com</li>
          <li><strong>By Mail:</strong> 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</li>
        </ul>
        <p>
          I will acknowledge feedback within 5 business days and will work to address concerns promptly. Accessible formats for providing feedback are available upon request.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Questions About This Statement</h2>
        <p>
          For more information about this accessibility statement or to request documents in an accessible format, please contact:
        </p>
        <div className="contact-box">
          <p className="contact-name">Kareem Hassanein, Registered Physiotherapist</p>
          <p>Email: kareem.hassanein@gmail.com</p>
          <p>Phone: (905) 634-6000</p>
          <p>Address: 4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}