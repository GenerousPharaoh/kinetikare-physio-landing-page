import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kinetikare Physiotherapy',
  description: 'What this website collects, what it is used for, who else handles it, and the choices you have.',
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/privacy',
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
 * Website privacy policy. Rewritten 2026-11-01 to cover what the site
 * actually does (analytics, the call-back form, hosting, the booking link)
 * and to send questions about clinical records to the clinic that holds
 * them, instead of describing a clinic's record-keeping as if this site
 * ran it. Facts here must track the code: GoogleAnalytics.tsx (consent
 * defaults, ad personalisation off, the Jane cross-domain linker),
 * CookieBanner.tsx (the stored choice) and the call-back route (Resend).
 */
export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="November 1, 2026">
      <section>
        <h2>What this policy covers</h2>
        <p>
          This policy is about this website, kinetikarephysio.com, which I write and run myself. It explains what the site
          collects when you read it, use the call-back form or follow a booking link, and what happens to that information.
        </p>
        <p>
          It does not cover your clinical record. Your assessment notes, treatment plan, receipts and insurance details are
          kept in the record system of the clinic where you see me, under that clinic&rsquo;s privacy practices and
          Ontario&rsquo;s health privacy law. Nothing from your clinical record is stored on or sent through this website.
          If you want to see or correct your clinical record, ask me at a visit or contact the clinic&rsquo;s front desk and
          I will point you to the right person.
        </p>
      </section>

      <section>
        <h2>What the website collects</h2>
        <h3>Reading the site</h3>
        <p>
          I use Google Analytics and Google Ads conversion tracking to understand how people use the site and whether my
          advertising leads to bookings or calls. These tools record the pages you view, how long you stay, which booking or
          phone links you press, your general location (city or region, not an address), your device and browser, and how
          you arrived (a search engine, an ad or another site). They do not record your name, your contact details or
          anything about your health. Google&rsquo;s advertising personalisation is switched off for every visitor, so
          nothing you read here is used to build an advertising audience.
        </p>
        <p>
          When you follow a booking link, the same anonymous analytics identifier is passed to the clinic&rsquo;s booking
          site so that a booking can be counted against the visit that led to it. The booking site itself (Jane, run by
          Jane Software Inc. in Canada) has its own privacy policy, which applies to anything you enter there.
        </p>
        <p>
          The site is hosted by Vercel, in the United States. Like any web host, Vercel keeps short-lived server logs,
          including your IP address and the pages requested, for security and performance.
        </p>
        <h3>The call-back form</h3>
        <p>
          If you ask for a call back, I receive your name, your phone number, the best time to call and, if you choose to
          give it, the body area that is bothering you. The form is delivered to my email through Resend, an email delivery
          service in the United States, so it may be processed outside Canada. I use it only to return your call and I keep
          it only as long as I need it to do that. It does not become part of a clinical record unless you become a patient
          and we agree that it should.
        </p>
        <h3>Email</h3>
        <p>If you email me, your message and my reply sit in my email account like any other correspondence.</p>
      </section>

      <section>
        <h2>Cookies and your choices</h2>
        <p>
          Google Analytics sets cookies on this site that last up to two years. The cookie notice lets you decline them.
          If you decline, that choice is stored in your browser, Google is told not to set or read its cookies here, and
          measurement continues without any identifier attached to you. You can change your mind by clearing the
          site&rsquo;s data in your browser, which brings the notice back. Your browser&rsquo;s own settings and
          Google&rsquo;s opt-out tools also work on this site. I set no other cookies.
        </p>
      </section>

      <section>
        <h2>Who else handles this information</h2>
        <p>
          Google (analytics and advertising measurement), Vercel (hosting), Resend (delivery of the call-back form) and
          Jane (online booking, once you leave this site). Each processes what it receives under its own policy. I do not
          sell information about you to anyone, and I do not share it with anyone else unless the law requires me to.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask me what I hold about you from the call-back form or from email, and ask me to correct or delete it.
          For your clinical record, the same rights of access and correction exist under Ontario law; ask me or the clinic
          where you were seen. If you are not satisfied with how I have handled your information, you can complain to the
          Information and Privacy Commissioner of Ontario (1-800-387-0073, ipc.on.ca) or the Office of the Privacy
          Commissioner of Canada (1-800-282-1376, priv.gc.ca).
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          This site is written for adults and the parents or guardians of younger patients. It has no accounts and asks
          for no information from children.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          When this policy changes, the date at the top changes with it. Anything that affects what is collected or who
          receives it will be described here, not buried.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about this policy or about the information this website holds come to me directly:</p>
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
