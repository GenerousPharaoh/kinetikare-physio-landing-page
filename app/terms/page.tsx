import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Use | Kinetikare Physiotherapy',
  description: 'The terms for using this website: what the information is for, how booking works, and how the content may be used.',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/terms',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

/**
 * Website terms. Rewritten 2026-11-01: the earlier version read as a
 * clinic's service agreement (cancellation fees, late arrivals, collections,
 * indemnities), which this site does not run. Treatment, fees and clinic
 * policies are agreed at the clinic where a patient books. These terms cover
 * the website only.
 */
export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" effectiveDate="November 1, 2026">
      <section>
        <h2>What these terms cover</h2>
        <p>
          These terms apply to this website, kinetikarephysio.com. By reading it you accept them. They are not the terms of
          your care. Appointments, fees, cancellations, receipts and everything else about treatment are arranged with the
          clinic where you book, under that clinic&rsquo;s policies, and nothing on this site changes those arrangements.
        </p>
      </section>

      <section>
        <h2>Information, not advice</h2>
        <p>
          I write the pages on this site as general education about conditions I treat. They describe how I think about a
          problem and what the research says, so that you arrive at an appointment, with me or with anyone else, better
          informed. Reading them does not make you my patient, and nothing here replaces an assessment of your own
          situation by a regulated health professional. If you are worried about a symptom, see your family doctor. If you
          have any of the warning signs listed on a page, follow the instruction next to it, and if you think you are
          having an emergency call 911.
        </p>
      </section>

      <section>
        <h2>Accuracy and dates</h2>
        <p>
          I review every page myself and the date shown on it is the last time I checked it. Research moves, and I update
          pages when the evidence changes, but I cannot promise that every page is complete or current at every moment. If
          you find an error or something out of date, I would like to hear about it through the contact page.
        </p>
      </section>

      <section>
        <h2>Booking and forms</h2>
        <p>
          Booking links on this site open the clinic&rsquo;s online booking system, Jane, which is run by Jane Software
          Inc. and has its own terms and privacy policy. The call-back form on this site asks for a phone call and nothing
          more; sending it does not book an appointment or start treatment.
        </p>
      </section>

      <section>
        <h2>Using the content</h2>
        <p>
          The text, illustrations and design of this site are mine or used with permission, and are protected by copyright.
          You are welcome to read, print and share pages for your own use and to quote short passages with a link back.
          Copying whole pages, reusing the illustrations, or presenting the material as your own needs my written
          permission.
        </p>
      </section>

      <section>
        <h2>Links to other sites</h2>
        <p>
          Pages link to research papers, guidelines and other sites I think are worth reading. I do not control those
          sites and am not responsible for what they publish or how they handle your information.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          The site is provided as it is. To the extent Ontario law allows, I am not liable for loss or harm that comes from
          relying on the website instead of an assessment, from errors or omissions in its content, or from the site being
          unavailable. Nothing in these terms limits any liability that the law does not allow to be limited, and nothing
          here affects the professional obligations I owe to patients under the standards of the College of
          Physiotherapists of Ontario.
        </p>
      </section>

      <section>
        <h2>Changes and governing law</h2>
        <p>
          I may update these terms; the date at the top shows the current version. These terms are governed by the laws
          of Ontario and Canada, and any dispute about them belongs in the courts of Ontario.
        </p>
      </section>

      <section>
        <h2>Regulation and complaints</h2>
        <p>
          I am a Registered Physiotherapist regulated by the College of Physiotherapists of Ontario, which keeps a public
          register and handles concerns about any physiotherapist&rsquo;s practice. Concerns about my professional
          services can be raised with me directly or with the College (1-800-583-5885, collegept.org).
        </p>
      </section>

      <section>
        <h2>Contact</h2>
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
