"use client"; // Required for useState

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FaqItemProps {
  question: string;
  answer: string;
}

// Accordion Item Component - Adjusted for dark theme
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Darker border
    <div className="border-b border-primary-700/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-accent/50 focus-visible:rounded-sm"
        aria-expanded={isOpen}
      >
        {/* Light text, white hover */}
        <span className="text-lg font-medium text-neutral-100 hover:text-white transition-colors duration-200">
          {question}
        </span>
        {/* Accent icon color */}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-accent flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-neutral-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        {/* Lighter answer text */}
        <div className="pt-1 pb-4 text-neutral-300 text-base leading-relaxed">
          {/* Use dangerouslySetInnerHTML if answer contains HTML, otherwise just render */} 
          {/* For simplicity now, assuming plain text */} 
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FaqPage() {
  // Organize FAQs into sections
  const faqSections = {
    "Getting Started": [
      { q: "Do I need a doctor's referral to see a physiotherapist in Ontario?", a: "No, you do not need a doctor's referral to see a registered physiotherapist in Ontario. You can book an appointment directly. However, some extended health insurance plans may require a referral for reimbursement, so it's best to check with your provider." },
      { q: "What should I expect during my first physiotherapy appointment?", a: "Your first appointment involves a detailed discussion about your health history, current condition, and goals. This is followed by a physical assessment to diagnose the issue. Based on the findings, we'll discuss a personalized treatment plan and often begin initial treatment and education." },
      { q: "What should I wear to my appointment?", a: "Wear comfortable clothing that allows easy access to the area being treated (e.g., shorts for knee/hip issues, tank top for shoulder issues)." },
      { q: "How many sessions will I need?", a: "That depends on your condition, goals, and how your body responds to treatment. After the initial assessment, I'll lay out a clear plan with realistic expectations. No vague timelines. No pressure. Just a focused, evidence-based strategy that respects your time and gets you moving in the right direction." },
      { q: "Do you offer direct billing?", a: "Yes—direct billing is available for most major insurance providers. Just bring your insurance information to your first session and we'll take care of the rest. If you have questions about what's covered, our reception team is happy to help." },
      { q: "Can I bring someone with me to the session?", a: "Yes. If having a partner, friend, or family member with you helps you feel more comfortable or supported, you're welcome to bring them. Just let us know when booking." },
      { q: "What's your cancellation policy?", a: "We ask for 24 hours' notice if you need to cancel or reschedule—this allows us to offer that time to someone else. That said, I fully understand that life happens. If something comes up last minute, just let us know. As long as it's not a recurring pattern, I always aim to give patients grace and flexibility. We're human too." },
      { q: "What should I expect during my first visit?", a: "Your first session is a mix of listening, problem-solving, and planning. We'll start with a detailed conversation about your symptoms, history, daily life, and goals. Then I'll assess how you move—looking at range, strength, joint mobility, and control. That said, the first visit can feel like a lot. To make it easier, I'll send you a written summary afterward outlining your assessment findings and our plan. We'll also revisit the key points over time, and you'll always have space to ask questions and clarify anything you're unsure about." },
      { q: "Will I receive treatment during my first session, or just an assessment?", a: "In most cases, yes—you'll receive treatment on day one. But we won't rush it. If we need more time to understand complex issues, we'll start with what's most important. Assessment is part of treatment when done right—it ensures what comes next is safe, specific, and effective." },
      { q: "What if I have multiple areas of pain or overlapping issues?", a: "That's common. I'll prioritize the most pressing issue and assess how different areas may be connected. Pain in one spot is often a symptom of something broader. We'll look at the full picture and structure your plan accordingly." },
      { q: "I'm not sure if physiotherapy is right for me. Can I just ask a few questions first?", a: "Of course. If you're unsure whether physio—or working with me specifically—is the right step, feel free to reach out. I'm happy to answer a few questions before you book. No pressure, just clarity." },
    ],
    "Your Treatment Experience": [
      { q: "What is manual therapy, and will it be part of my treatment?", a: "Manual therapy includes techniques like joint mobilizations and soft tissue work to reduce pain and improve movement. I use it when it makes sense—but it's always part of a broader plan that includes movement, exercise, and education." },
      { q: "Will I be treated by you directly, or by someone else?", a: "You'll work with me directly every step of the way. I don't pass care off to assistants or leave patients hooked to machines. Your session time is yours, and it's used intentionally." },
      { q: "I've tried physiotherapy before and didn't find it helpful. How is this different?", a: "Many people tell me that. My approach is rooted in figuring out why something's happening—not just treating symptoms. You won't get a generic program. We'll build something specific, useful, and grounded in what actually matters to you." },
      { q: "Do you give exercises? What if I'm not great at keeping up with them?", a: "Yes—but I keep it simple. I'd rather you do two meaningful movements well than forget a list of twelve. If something doesn't fit into your life, we'll adjust it. The plan should work for you, not add more stress." },
      { q: "Is physiotherapy painful?", a: "Some techniques can feel intense, but pain is never the goal. I'll explain everything ahead of time, check in with you, and make sure we adapt the approach to keep things safe and manageable." },
      { q: "What if things aren't improving?", a: "We don't rely only on pain to measure progress. We'll track strength, range, control, and function. If you've followed the plan and things still aren't moving, I'll reassess, revise the approach, and collaborate with other healthcare providers if needed. I advocate for you—always." },
      { q: "How do you decide which treatments to use?", a: "Everything is based on what I find during your assessment, how you respond, and what your goals are. We make decisions together. No guesswork, no cookie-cutter care." },
      { q: "What if I've been told something different by another provider?", a: "That's totally okay. I'm not here to contradict anyone—I'm here to help you make sense of what's going on now. We'll work with what's useful and let go of what isn't. There's no ego—just clarity." },
      { q: "What kind of environment do you try to create for your patients?", a: "I aim to create a space where you feel heard, respected, and safe. Having experienced dismissive care myself, I know how important that is. You won't be rushed. I'll take time to listen, explain, and make sure you always know what we're doing and why." },
      { q: "What makes your assessments different?", a: "I don't just chase symptoms. I assess how you move under load, across regions, and over time. You'll understand not just what hurts, but why it's happening—and what we're doing about it." },
      { q: "Will I understand what's going on with my body?", a: "Yes—this is central to my approach. I explain things clearly, without jargon, and make sure you understand your plan and your progress. Knowledge gives you control. You deserve that." },
      { q: "Can I be involved in shaping my treatment plan?", a: "Absolutely. This is a collaboration. I'll guide you clinically, but we'll shape the process together—based on your goals, lifestyle, and values." },
    ],
    "Long-Term Health & Performance": [
      { q: "Can I come for maintenance, tune-ups, or performance—even if I'm not injured?", a: "Yes—and that's often when physio is most valuable. I help people stay ahead of injury by identifying subtle movement issues and building long-term strength and resilience. Whether you're an athlete, weekend warrior, or just want to feel better moving through life—this is absolutely within scope." },
      { q: "Is strength training part of physiotherapy?", a: "It should be. Strength is one of the best tools we have to protect joints, reduce injury, and maintain bone density and balance as we age. I integrate strength work tailored to your level and goals—whether that means squatting safely, learning to deadlift, or just keeping up with life." },
    ]
  };

  return (
    // Apply dark theme to main container
    <div className="bg-primary-900 text-neutral-200 flex-grow">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Adjust heading colors */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Adjust subtitle color */}
          <p className="text-lg text-neutral-300">
            Find answers to common questions about physiotherapy, appointments, and insurance.
          </p>
        </div>

        {/* FAQ Accordion Sections - Adjust section title color/border */}
        <div className="max-w-3xl mx-auto space-y-10">
          {Object.entries(faqSections).map(([sectionTitle, items]) => (
            <div key={sectionTitle}>
              <h2 className="text-2xl font-semibold text-white mb-5 border-b border-primary-700/60 pb-2">
                {sectionTitle}
              </h2>
              <div className="space-y-1">
                {items.map((item, index) => (
                  <FaqItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Add CSS for max-height transition */}
        <style jsx>{`
          .transition-max-height {
            transition: max-height 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
} 