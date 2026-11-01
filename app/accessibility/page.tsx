import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Accessibility | Kinetikare Physiotherapy',
  description: 'How this website is built to be usable by everyone, how care is made accessible in person, and how to tell me when something is in the way.',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/accessibility',
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
 * Accessibility statement. Rewritten 2026-11-01 from a template that
 * described employment standards, signage and training programmes for an
 * organisation this site is not. It now says what the website does, what
 * happens in person, and how to report a barrier.
 */
export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility" effectiveDate="November 1, 2026">
      <section>
        <h2>The short version</h2>
        <p>
          I want anyone to be able to read this site and to get care from me without a barrier in the way. Where something
          falls short, I would rather hear about it and fix it than not know. This statement reflects my obligations under
          the Accessibility for Ontarians with Disabilities Act and the Ontario Human Rights Code.
        </p>
      </section>

      <section>
        <h2>This website</h2>
        <p>
          The site is built to the Web Content Accessibility Guidelines 2.1 at level AA as its working standard. In
          practice that means:
        </p>
        <ul>
          <li>Every page works with a keyboard alone, with a visible focus marker on the control you are on.</li>
          <li>Text and controls meet contrast requirements, and the text can be enlarged in your browser without breaking the layout.</li>
          <li>Images that carry meaning have text descriptions; decorative ones are hidden from screen readers.</li>
          <li>Animation is reduced or removed when your device asks for reduced motion, and nothing on the page moves with the pointer.</li>
          <li>Headings, landmarks and lists are marked up so that screen readers can move through a page in order.</li>
          <li>The condition pages are written in plain language, with technical terms explained where they first appear.</li>
        </ul>
        <p>
          I check the site on a laptop and a phone, with a keyboard and with a screen reader, after each change. Some
          longer pages are still dense, and I keep working on them. If a page is hard to use with your technology, tell
          me which page and what happened and I will look at it.
        </p>
      </section>

      <section>
        <h2>In person</h2>
        <p>Care is arranged around what you need rather than the other way round. In particular:</p>
        <ul>
          <li>Support persons and service animals are welcome at every appointment.</li>
          <li>Bring any assistive device you use; treatment and exercises are adapted to it.</li>
          <li>We can communicate in whatever way works for you: spoken, written, by email, with extra time, or in plain language.</li>
          <li>Exercise programmes, forms and other documents are available in large print or electronic formats on request, at no extra cost.</li>
          <li>Before your first visit, ask me about the entrance, parking and washrooms at the clinic you are attending and I will tell you what to expect.</li>
        </ul>
      </section>

      <section>
        <h2>Tell me</h2>
        <p>
          Feedback about accessibility, online or in person, comes straight to me. You can email, call, or raise it at
          an appointment, and I will reply in the format you prefer.
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
