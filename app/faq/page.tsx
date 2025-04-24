"use client"; // Required for useState

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FAQAccordion, { FaqItem } from '@/components/FAQAccordion';
import { motion, AnimatePresence } from 'framer-motion';
import PatternBackground from '@/components/ui/PatternBackground';
import ContactCTA from '@/components/sections/ContactCTA';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import { 
  QuestionMarkCircleIcon, 
  CalendarIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ClockIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  questions: FaqItem[];
}

// FAQ categories with their respective questions and answers
const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: <QuestionMarkCircleIcon className="w-6 h-6" />,
    questions: [
      {
        question: 'Do I need a doctor&apos;s referral to see a physiotherapist in Ontario?',
        answer: 'No, you don&apos;t need a doctor&apos;s referral to book an appointment with me in Ontario. You can schedule directly. However, some extended health insurance plans might require a referral for reimbursement. It&apos;s always a good idea to check your specific plan details. If you&apos;re unsure, please feel free to ask when booking, and I can help guide you or direct you to the right information.'
      },
      {
        question: 'What should I wear to my appointment?',
        answer: 'Comfortable, athletic-style clothing is ideal – anything that allows you to move freely and lets me easily access the area I need to assess or treat (e.g., shorts for knee issues, a tank top for shoulder issues). Your comfort is the priority; I can always adapt the assessment and treatment if you prefer certain areas to remain covered.'
      },
      {
        question: 'What should I expect during my first physiotherapy visit?',
        answer: 'Your first visit is dedicated to thoroughly understanding you and your situation.<br><br><strong>Conversation:</strong> We&apos;ll have a detailed discussion about your current symptoms, your goals for physiotherapy, your daily activities and lifestyle, and your relevant health history. This includes past injuries or conditions, surgeries, as well as any medications you are currently taking. Understanding this full picture is crucial for ensuring your safety and developing the most effective treatment plan for you.<br><br><strong>Assessment:</strong> I&apos;ll propose an assessment approach, explain what it involves, and then evaluate your movement, strength, joint mobility, and muscle control relevant to your concern.<br><br><strong>Plan:</strong> Based on the findings, I&apos;ll discuss my assessment of the issue (or potential causes) and collaboratively create an initial treatment plan with you.<br><br>Importantly, every step is based on your informed consent. I will explain the assessment and treatment options, their benefits, and any potential risks. You are always in control, and there is absolutely no obligation to proceed with any part of the process you&apos;re uncomfortable with. I encourage you to ask questions and voice any concerns at any time. To help you digest everything, I&apos;ll send a follow-up summary outlining the key assessment findings and our agreed-upon plan.'
      },
      {
        question: 'Will I receive treatment during my first session, or is it just an assessment?',
        answer: 'In most cases, your first session includes both assessment and the start of treatment, always with your explicit consent for each part. A thorough assessment is crucial for effective treatment. If your situation is complex, I&apos;ll prioritize understanding the core issues first before diving deep into treatment. You always have the right to focus only on assessment or to decline any proposed treatment.'
      },
      {
        question: 'What if I have multiple areas of pain or complex issues?',
        answer: 'It&apos;s quite common for pain or dysfunction in one area to be linked to others. I&apos;ll start by addressing your most significant concern while assessing the whole picture to understand how different areas might be connected. Your treatment plan will be structured holistically to address the root causes, not just isolated symptoms.'
      },
      {
        question: 'I&apos;m not sure if physiotherapy is the right choice for me. Can I ask some questions before booking?',
        answer: 'Of course! If you&apos;re uncertain whether physiotherapy, or my approach specifically, is the best fit for your needs, please feel free to reach out. I&apos;m happy to answer brief questions via phone or email to help you make an informed decision before you commit to an appointment.'
      }
    ]
  },
  {
    id: 'treatment-experience',
    name: 'Treatment Experience',
    icon: <DocumentTextIcon className="w-6 h-6" />,
    questions: [
      {
        question: 'How many physiotherapy sessions will I need?',
        answer: 'The number of sessions varies depending on your specific condition, your recovery goals, and how your body responds to treatment. After your initial assessment, I&apos;ll provide a clear, personalized treatment plan outlining the expected timeline and milestones. I&apos;ll focus on an evidence-based strategy designed to get you results efficiently – no vague promises or unnecessary sessions.'
      },
      {
        question: 'What is manual therapy, and will it be part of my treatment?',
        answer: 'Manual therapy involves hands-on techniques like joint mobilizations or soft tissue work aimed at reducing pain and improving mobility. If appropriate, I will explain these techniques and propose incorporating them into your comprehensive plan (which always includes education and exercise). Your informed consent is required before I perform any manual therapy.'
      },
      {
        question: 'Do you offer dry needling?',
        answer: 'Yes. Dry needling is one of several tools I may use to help reduce pain, release muscle tension, or improve mobility—particularly when addressing persistent trigger points, movement restrictions, or muscle imbalances. It involves the use of fine, sterile needles to target specific areas of tightness or dysfunction within muscle tissue.<br><br>Common uses include treating myofascial trigger points ("knots"), calming overactive muscle contractions, supporting postural or repetitive strain issues, and helping restore normal movement patterns when muscles are contributing to pain or joint restriction.<br><br>That said, it is never a required part of treatment. If I believe dry needling could be helpful for your condition, I&apos;ll explain the rationale, what to expect, and any potential risks. Your informed consent is essential, and you&apos;re always free to decline it. Many effective treatment plans do not include dry needling at all—it&apos;s simply one option among many, based on what works best for you.'
      },
      {
        question: 'Will I be treated by you directly throughout my care?',
        answer: 'Yes. You will work one-on-one with me for the entire duration of every session. I do not use assistants or aides for treatment delivery. Your appointment time is dedicated solely to your assessment, treatment, and progression.'
      },
      {
        question: 'I&apos;ve tried physiotherapy before and it didn&apos;t help. How is your approach different?',
        answer: 'It&apos;s really understandable to feel that way if you haven&apos;t had the results you hoped for in the past. Finding the right therapeutic relationship and approach is key, as different styles work better for different people and conditions. While I can&apos;t speak to your specific previous experiences, I can share what I focus on in my practice:<br><br><strong>Dedicated Time & Attention:</strong> I structure my schedule to ensure I can dedicate the entire appointment time to you, one-on-one. My aim here is simply to allow enough focused time for us to thoroughly explore your concerns, conduct assessments without feeling rushed, and carefully work through treatment strategies together.<br><br><strong>Looking Holistically:</strong> I try my best to understand the bigger picture. This often involves looking beyond the immediate area of pain to consider related body regions, how you move during meaningful activities, and listening closely to your history to understand potential contributing factors. The goal is collaborative problem-solving to find potential root causes.<br><br><strong>Emphasis on Education and Active Participation:</strong> A core part of my philosophy is helping you understand what might be going on and why. While I use hands-on techniques when appropriate (and always with your informed consent), I place a strong emphasis on active strategies – finding the right exercises and movements for you, and equipping you with knowledge for self-management. My hope is this empowers you long after our sessions end.<br><br><strong>Partnership in Goal Setting:</strong> We work together to define what success looks like for you. Whether it&apos;s reducing pain, improving function for a specific hobby, or increasing confidence in movement, your goals guide the plan. Your feedback is essential in adjusting our approach along the way.<br><br>Ultimately, my commitment is to provide thoughtful, individualized care and work collaboratively with you. If you decide to proceed, I hope you&apos;ll recognize this approach as helpful.'
      },
      {
        question: 'Do you give exercises? What if I struggle to keep up with them?',
        answer: 'Yes, targeted exercise is often key. I focus on quality over quantity, ensuring you understand the exercises and feel comfortable performing them. If you struggle, we modify the plan together. Your feedback is crucial.'
      },
      {
        question: 'Is physiotherapy treatment painful?',
        answer: 'While some techniques might cause temporary discomfort, treatment should not be acutely painful. Pain is never the goal. I will always explain what to expect, check in frequently, and immediately modify or stop any technique if you feel uncomfortable or wish to pause. Open communication is essential, and your comfort and safety are paramount.'
      },
      {
        question: 'What happens if my progress stalls or I&apos;m not improving as expected?',
        answer: 'Progress isn&apos;t always linear, and pain levels aren&apos;t the only measure. Together, we&apos;ll track objective improvements in strength, range of motion, function, and your ability to perform meaningful activities. If progress stalls despite you following the plan:<br><br><strong>I Reassess Thoroughly:</strong> I don&apos;t just keep doing the same thing. I&apos;ll step back and systematically reassess to understand why things might not be changing as expected.<br><br><strong>We Adjust the Strategy:</strong> Based on my findings and our discussion, I&apos;ll modify the treatment plan with you.<br><br><strong>I Collaborate and Advocate:</strong> If needed, and always with your permission, I will communicate with your doctor or other providers. Furthermore, I firmly believe that effective care includes supporting you beyond our clinic walls. If you face obstacles or feel unsupported elsewhere in the healthcare system, I&apos;m committed to helping you navigate those challenges. This might involve assisting you in formulating questions for other providers, helping to ensure your concerns are taken seriously, or facilitating appropriate referrals. My role is to support your overall well-being and advocate for the care you need to find the best path forward.'
      },
      {
        question: 'How do you decide which specific treatments or techniques to use?',
        answer: 'Treatment decisions are always collaborative and evidence-informed. They are based on:<br><br>- Findings from your detailed assessment.<br>- Your specific goals and preferences.<br>- How your body responds to different interventions.<br>- The best available scientific evidence.<br><br>I discuss the rationale for each approach with you, ensuring you understand the &apos;why&apos; behind your plan.'
      },
      {
        question: 'What if I&apos;ve received conflicting advice from another healthcare provider?',
        answer: 'That happens sometimes, and it&apos;s okay. Different providers may have different perspectives or focus on different aspects of your health. My role is to help you understand your current situation based on my assessment. We&apos;ll focus on what makes sense for you now, integrate useful information from others where appropriate, and build a clear path forward together. My focus is on clarity and collaboration, not contradiction.'
      },
      {
        question: 'What kind of environment do you try to create for your patients?',
        answer: 'Creating an environment where you feel genuinely heard, truly respected, and completely safe isn&apos;t just a goal—it&apos;s fundamental to how I practice. Because I understand firsthand how vulnerable and challenging it can feel to seek healthcare, and how crucial it is to feel genuinely supported, I am deeply committed to:<br><br><strong>Listening Attentively:</strong> Ensuring you have the uninterrupted time and space needed to share your story, concerns, and goals.<br><br><strong>Communicating Clearly & Honestly:</strong> Explaining my findings and our plan in straightforward language, ensuring you understand the &apos;why&apos; behind every step.<br><br><strong>Empowering You:</strong> Making certain you feel fully in control of your care. This means knowing you have the right to ask anything, voice concerns, understand your options, and decline any part of assessment or treatment at any time, without hesitation or judgment. My aim is for you to feel like an informed, respected, and active partner throughout your entire care journey here.'
      },
      {
        question: 'What makes your assessments distinct?',
        answer: 'My assessments go beyond just identifying the painful area. I look at how your body moves as a system, often under load or during functional tasks, to understand the underlying biomechanical factors contributing to your issue. The aim is not just to tell you what hurts, but to help you understand why it&apos;s happening and outline a clear strategy to address it.'
      },
      {
        question: 'Will I actually understand what&apos;s wrong and what we&apos;re doing about it?',
        answer: 'Absolutely. Patient education is fundamental to my approach. I believe that understanding your body and your treatment plan empowers you to take an active role in your recovery. I explain concepts clearly, check for understanding, and encourage questions. This includes understanding your right to consent to or decline any part of care.'
      },
      {
        question: 'How involved will I be in creating my treatment plan?',
        answer: 'Very involved! Physiotherapy is a partnership. I provide the clinical expertise and guidance, but your goals, lifestyle, preferences, and feedback are essential in shaping a plan that is both effective and realistic for you. We make decisions together every step of the way.'
      }
    ]
  },
  {
    id: 'long-term-health',
    name: 'Long-Term Health',
    icon: <ClockIcon className="w-6 h-6" />,
    questions: [
      {
        question: 'Can I come for injury prevention, performance enhancement, or &apos;tune-ups,&apos; even if I&apos;m not currently in pain?',
        answer: 'Yes, definitely! Proactive physiotherapy is incredibly valuable. I work with many individuals – athletes, active individuals, or those simply wanting to move better and feel more resilient – to identify potential movement limitations or strength deficits before they cause problems. I can help develop strategies to optimize movement, build strength, enhance performance, and reduce future injury risk.'
      },
      {
        question: 'Is strength training part of physiotherapy?',
        answer: 'Yes, appropriate strength training is often a crucial part of physiotherapy. Building strength helps protect joints, improve bone density, enhance balance, prevent injuries, and maintain functional independence as we age. I integrate tailored strength and conditioning principles into treatment plans, whether your goal is to lift groceries without pain, return to sport, learn foundational exercises like squats and deadlifts safely, or simply build confidence in your physical abilities.'
      }
    ]
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: <CalendarIcon className="w-6 h-6" />,
    questions: [
      {
        question: 'Can I bring someone with me to my appointment?',
        answer: 'Absolutely. If having a partner, friend, or family member present helps you feel more comfortable or supported, they are welcome to join you. Please just let me know when you book your appointment.'
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'I kindly request at least 24 hours&apos; notice if you need to cancel or reschedule your appointment. This allows the time slot to be offered to another patient in need. I recognize that unexpected things happen; if you need to cancel last minute due to an emergency or illness, please let me know as soon as possible. I aim to be flexible and understanding, especially for isolated incidents.'
      }
    ]
  },
  {
    id: 'billing',
    name: 'Insurance & Billing',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    questions: [
      {
        question: 'Do you offer direct billing to insurance companies?',
        answer: 'Yes, direct billing is offered for most major extended health insurance providers. Please bring your insurance card/information (policy and group numbers) to your first appointment, and direct billing can typically be processed for you at the clinic. If you have questions about the process, please don&apos;t hesitate to ask, but remember to check with your insurer about your specific coverage details.'
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<FaqItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    // Flatten all questions from all categories
    const allQuestions = faqCategories.flatMap(category => 
      category.questions.map(q => ({
        ...q,
        category: category.name
      }))
    );
    
    // Filter questions based on search query
    const filtered = allQuestions.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredQuestions(filtered);
  }, [searchQuery]);

  // Get current questions to display
  const currentQuestions = isSearching 
    ? filteredQuestions 
    : faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about physiotherapy services and what to expect during your visits"
      />
      
      {/* Search bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar 
          placeholder="Search for questions..." 
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onClear={() => setSearchQuery('')}
        />
      </div>
      
      {!isSearching && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-100 text-primary-900 border-2 border-primary-300 shadow-md'
                  : 'bg-white hover:bg-neutral-50 text-primary-700 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${
                activeCategory === category.id 
                  ? 'bg-primary-200 text-primary-900' 
                  : 'bg-neutral-100 text-primary-600'
              }`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      )}
      
      <div className="max-w-3xl mx-auto">
        {isSearching && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-900 mb-2">
              Search Results
            </h2>
            <p className="text-primary-600">
              {filteredQuestions.length === 0 
                ? 'No questions found matching your search.' 
                : `Found ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} matching "${searchQuery}"`}
            </p>
            {filteredQuestions.length === 0 && (
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-accent hover:text-accent-dark underline transition-colors"
              >
                Clear search and view all questions
              </button>
            )}
          </div>
        )}
        
        {!isSearching && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-900 mb-2">
              {faqCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-primary-600">
              {faqCategories.find(cat => cat.id === activeCategory)?.questions.length} questions in this category
            </p>
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? 'search' : activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <FAQAccordion items={currentQuestions} />
          </motion.div>
        </AnimatePresence>
        
        {currentQuestions.length > 0 && !isSearching && (
          <div className="mt-12 text-center">
            <p className="text-primary-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Commented out metadata export as it is not allowed in client components
/*
export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Physiotherapy Clinic',
  description: 'Find answers to common questions about physiotherapy treatments, what to expect during your first visit, treatment approaches, and more.',
};
*/ 