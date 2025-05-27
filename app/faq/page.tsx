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
import { 
  QuestionMarkCircleIcon, 
  CalendarIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ClockIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

// Helper to check if code is running in browser
const isBrowser = typeof window !== 'undefined';

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
        question: `Do I need a doctor referral to see a physiotherapist in Ontario?`,
        answer: `No, you do not need a doctor referral to book an appointment with me in Ontario. You can schedule directly. However, some extended health insurance plans might require a referral for reimbursement. It is always a good idea to check your specific plan details. If you are unsure, please feel free to ask when booking, and I can help guide you or direct you to the right information.`
      },
      {
        question: `What should I wear to my appointment?`,
        answer: `Comfortable, athletic-style clothing is ideal – anything that allows you to move freely and lets me easily access the area I need to assess or treat (e.g., shorts for knee issues, a tank top for shoulder issues). Your comfort is the priority; I can always adapt the assessment and treatment if you prefer certain areas to remain covered.`
      },
      {
        question: `What should I expect during my first physiotherapy visit?`,
        answer: `Your first visit is dedicated to thoroughly understanding you and your situation.

Conversation: We will have a detailed discussion about your current symptoms, your goals for physiotherapy, your daily activities and lifestyle, and your relevant health history. This includes past injuries or conditions, surgeries, as well as any medications you are currently taking. Understanding this full picture is crucial for ensuring your safety and developing the most effective treatment plan for you.

Assessment: I will propose an assessment approach, explain what it involves, and then evaluate your movement, strength, joint mobility, and muscle control relevant to your concern.

Plan: Based on the findings, I will discuss my assessment of the issue (or potential causes) and collaboratively create an initial treatment plan with you.

Importantly, every step is based on your informed consent. I will explain the assessment and treatment options, their benefits, and any potential risks. You are always in control, and there is absolutely no obligation to proceed with any part of the process you are uncomfortable with. I encourage you to ask questions and voice any concerns at any time. To help you digest everything, I will send a follow-up summary outlining the key assessment findings and our agreed-upon plan.`
      },
      {
        question: `Will I receive treatment during my first session, or is it just an assessment?`,
        answer: `In most cases, your first session includes both assessment and the start of treatment, always with your explicit consent for each part. A thorough assessment is crucial for effective treatment. If your situation is complex, I will prioritize understanding the core issues first before diving deep into treatment. You always have the right to focus only on assessment or to decline any proposed treatment.`
      },
      {
        question: `What if I have multiple areas of pain or complex issues?`,
        answer: `It is quite common for pain or dysfunction in one area to be linked to others. I will start by addressing your most significant concern while assessing the whole picture to understand how different areas might be connected. Your treatment plan will be structured holistically to address the root causes, not just isolated symptoms.`
      },
      {
        question: `I am not sure if physiotherapy is the right choice for me. Can I ask some questions before booking?`,
        answer: `Of course! If you are uncertain whether physiotherapy, or my approach specifically, is the best fit for your needs, please feel free to reach out. I am happy to answer brief questions via phone or email to help you make an informed decision before you commit to an appointment.`
      }
    ]
  },
  {
    id: 'treatment-experience',
    name: 'Treatment Experience',
    icon: <DocumentTextIcon className="w-6 h-6" />,
    questions: [
      {
        question: `How many physiotherapy sessions will I need?`,
        answer: `The number of sessions varies depending on your specific condition, your recovery goals, and how your body responds to treatment. After your initial assessment, I will provide a clear, personalized treatment plan outlining the expected timeline and milestones. I will focus on an evidence-based strategy designed to get you results efficiently – no vague promises or unnecessary sessions.`
      },
      {
        question: `What is manual therapy, and will it be part of my treatment?`,
        answer: `Manual therapy involves hands-on techniques like joint mobilizations or soft tissue work aimed at reducing pain and improving mobility. If appropriate, I will explain these techniques and propose incorporating them into your comprehensive plan (which always includes education and exercise). Your informed consent is required before I perform any manual therapy.`
      },
      {
        question: `Do you offer dry needling?`,
        answer: `Yes. Dry needling is one of several tools I may use to help reduce pain, release muscle tension, or improve mobility—particularly when addressing persistent trigger points, movement restrictions, or muscle imbalances. It involves the use of fine, sterile needles to target specific areas of tightness or dysfunction within muscle tissue.

Common uses include treating myofascial trigger points (knots), calming overactive muscle contractions, supporting postural or repetitive strain issues, and helping restore normal movement patterns when muscles are contributing to pain or joint restriction.

That said, it is never a required part of treatment. If I believe dry needling could be helpful for your condition, I will explain the rationale, what to expect, and any potential risks. Your informed consent is essential, and you are always free to decline it. Many effective treatment plans do not include dry needling at all—it is simply one option among many, based on what works best for you.`
      },
      {
        question: `Will I be treated by you directly throughout my care?`,
        answer: `Yes. You will work one-on-one with me for the entire duration of every session. I do not use assistants or aides for treatment delivery. Your appointment time is dedicated solely to your assessment, treatment, and progression.`
      },
      {
        question: `I have tried physiotherapy before and it did not help. How is your approach different?`,
        answer: `It is really understandable to feel that way if you have not had the results you hoped for in the past. Finding the right therapeutic relationship and approach is key, as different styles work better for different people and conditions. While I cannot speak to your specific previous experiences, I can share what I focus on in my practice:

Dedicated Time & Attention: I structure my schedule to ensure I can dedicate the entire appointment time to you, one-on-one. My aim here is simply to allow enough focused time for us to thoroughly explore your concerns, conduct assessments without feeling rushed, and carefully work through treatment strategies together.

Looking Holistically: I try my best to understand the bigger picture. This often involves looking beyond the immediate area of pain to consider related body regions, how you move during meaningful activities, and listening closely to your history to understand potential contributing factors. The goal is collaborative problem-solving to find potential root causes.

Emphasis on Education and Active Participation: A core part of my philosophy is helping you understand what might be going on and why. While I use hands-on techniques when appropriate (and always with your informed consent), I place a strong emphasis on active strategies – finding the right exercises and movements for you, and equipping you with knowledge for self-management. My hope is this empowers you long after our sessions end.

Partnership in Goal Setting: We work together to define what success looks like for you. Whether it is reducing pain, improving function for a specific hobby, or increasing confidence in movement, your goals guide the plan. Your feedback is essential in adjusting our approach along the way.

Ultimately, my commitment is to provide thoughtful, individualized care and work collaboratively with you. If you decide to proceed, I hope you will recognize this approach as helpful.`
      },
      {
        question: `Do you give exercises? What if I struggle to keep up with them?`,
        answer: `Yes, targeted exercise is often key. I focus on quality over quantity, ensuring you understand the exercises and feel comfortable performing them. If you struggle, we modify the plan together. Your feedback is crucial.`
      },
      {
        question: `Is physiotherapy treatment painful?`,
        answer: `While some techniques might cause temporary discomfort, treatment should not be acutely painful. Pain is never the goal. I will always explain what to expect, check in frequently, and immediately modify or stop any technique if you feel uncomfortable or wish to pause. Open communication is essential, and your comfort and safety are paramount.`
      },
      {
        question: `What happens if my progress stalls or I am not improving as expected?`,
        answer: `Progress is not always linear, and pain levels are not the only measure. Together, we will track objective improvements in strength, range of motion, function, and your ability to perform meaningful activities. If progress stalls despite you following the plan:

I Reassess Thoroughly: I do not just keep doing the same thing. I will step back and systematically reassess to understand why things might not be changing as expected.

We Adjust the Strategy: Based on my findings and our discussion, I will modify the treatment plan with you.

I Collaborate and Advocate: If needed, and always with your permission, I will communicate with your doctor or other providers. Furthermore, I firmly believe that effective care includes supporting you beyond our clinic walls. If you face obstacles or feel unsupported elsewhere in the healthcare system, I am committed to helping you navigate those challenges. This might involve assisting you in formulating questions for other providers, helping to ensure your concerns are taken seriously, or facilitating appropriate referrals. My role is to support your overall well-being and advocate for the care you need to find the best path forward.`
      },
      {
        question: `How do you decide which specific treatments or techniques to use?`,
        answer: `Treatment decisions are always collaborative and evidence-informed. They are based on:

- Findings from your detailed assessment
- Your specific goals and preferences
- How your body responds to different interventions
- The best available scientific evidence

I discuss the rationale for each approach with you, ensuring you understand the why behind your plan.`
      },
      {
        question: `What if I have received conflicting advice from another healthcare provider?`,
        answer: `That happens sometimes, and it is okay. Different providers may have different perspectives or focus on different aspects of your health. My role is to help you understand your current situation based on my assessment. We will focus on what makes sense for you now, integrate useful information from others where appropriate, and build a clear path forward together. My focus is on clarity and collaboration, not contradiction.`
      },
      {
        question: `What kind of environment do you try to create for your patients?`,
        answer: `Creating an environment where you feel genuinely heard, truly respected, and completely safe is not just a goal—it is fundamental to how I practice. Because I understand firsthand how vulnerable and challenging it can feel to seek healthcare, and how crucial it is to feel genuinely supported, I am deeply committed to:

Listening Attentively: Ensuring you have the uninterrupted time and space needed to share your story, concerns, and goals.

Communicating Clearly & Honestly: Explaining my findings and our plan in straightforward language, ensuring you understand the why behind every step.

Empowering You: Making certain you feel fully in control of your care. This means knowing you have the right to ask anything, voice concerns, understand your options, and decline any part of assessment or treatment at any time, without hesitation or judgment. My aim is for you to feel like an informed, respected, and active partner throughout your entire care journey here.`
      },
      {
        question: `What makes your assessments distinct?`,
        answer: `My assessments go beyond just identifying the painful area. I look at how your body moves as a system, often under load or during functional tasks, to understand the underlying biomechanical factors contributing to your issue. The aim is not just to tell you what hurts, but to help you understand why it is happening and outline a clear strategy to address it.`
      },
      {
        question: `Will I actually understand what is wrong and what we are doing about it?`,
        answer: `Absolutely. Patient education is fundamental to my approach. I believe that understanding your body and your treatment plan empowers you to take an active role in your recovery. I explain concepts clearly, check for understanding, and encourage questions. This includes understanding your right to consent to or decline any part of care.`
      },
      {
        question: `How involved will I be in creating my treatment plan?`,
        answer: `Very involved! Physiotherapy is a partnership. I provide the clinical expertise and guidance, but your goals, lifestyle, preferences, and feedback are essential in shaping a plan that is both effective and realistic for you. We make decisions together every step of the way.`
      }
    ]
  },
  {
    id: 'long-term-health',
    name: 'Long-Term Health',
    icon: <ClockIcon className="w-6 h-6" />,
    questions: [
      {
        question: `Can I come for injury prevention, performance enhancement, or tune-ups, even if I am not currently in pain?`,
        answer: `Yes, definitely! Proactive physiotherapy is incredibly valuable. I work with many individuals – athletes, active individuals, or those simply wanting to move better and feel more resilient – to identify potential movement limitations or strength deficits before they cause problems. I can help develop strategies to optimize movement, build strength, enhance performance, and reduce future injury risk.`
      },
      {
        question: `Is strength training part of physiotherapy?`,
        answer: `Yes, appropriate strength training is often a crucial part of physiotherapy. Building strength helps protect joints, improve bone density, enhance balance, prevent injuries, and maintain functional independence as we age. I integrate tailored strength and conditioning principles into treatment plans, whether your goal is to lift groceries without pain, return to sport, learn foundational exercises like squats and deadlifts safely, or simply build confidence in your physical abilities.`
      }
    ]
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: <CalendarIcon className="w-6 h-6" />,
    questions: [
      {
        question: `Can I bring someone with me to my appointment?`,
        answer: `Absolutely. If having a partner, friend, family member, or primary caregiver present helps you feel more comfortable or supported, they are welcome to join you. This can be especially helpful for those who may need assistance with communication, understanding treatment instructions, or simply prefer having additional support during their healthcare journey. Please just let me know when you book your appointment.`
      },
      {
        question: `What is your cancellation policy?`,
        answer: `I kindly request at least 24 hours notice if you need to cancel or reschedule your appointment. This allows the time slot to be offered to another patient in need. I recognize that unexpected things happen; if you need to cancel last minute due to an emergency or illness, please let me know as soon as possible. I aim to be flexible and understanding, especially for isolated incidents.`
      }
    ]
  },
  {
    id: 'billing',
    name: 'Insurance & Billing',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    questions: [
      {
        question: `Do you offer direct billing to insurance companies?`,
        answer: `Yes, direct billing is offered for most major extended health insurance providers. Please bring your insurance card/information (policy and group numbers) to your first appointment, and direct billing can typically be processed for you at the clinic. If you have questions about the process, please do not hesitate to ask, but remember to check with your insurer about your specific coverage details.`
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState<FaqItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Refs for each section
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Set mounted state once component mounts in browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll to show/hide sticky navigation and update active section
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyNav(scrollY > 400);

      // Update active category based on scroll position (scroll spy)
      if (!isSearching) {
        const sections = Object.entries(sectionRefs.current);
        const currentSection = sections.find(([id, element]) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        });

        if (currentSection) {
          setActiveCategory(currentSection[0]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, isSearching]);

  // Smooth scroll to section
  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when navigating
    setIsSearching(false);
    
    const element = sectionRefs.current[categoryId];
    if (element) {
      const yOffset = -120; // Account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Search functionality
  useEffect(() => {
    if (!isMounted) return;
    
    console.log('Search query changed:', searchQuery); // Debug log
    
    if (searchQuery.trim() === '') {
      setIsSearching(false);
      setFilteredQuestions([]);
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
    
    console.log('Total questions to search:', allQuestions.length); // Debug log
    
    // Filter questions based on search query
    const filtered = allQuestions.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    console.log('Filtered results:', filtered.length); // Debug log
    setFilteredQuestions(filtered);
  }, [searchQuery, isMounted]);

  // Get current questions to display
  const currentQuestions = isSearching 
    ? filteredQuestions 
    : faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  // If not mounted yet (server-side), render a minimal version
  if (!isMounted) {
    return (
      <main className="min-h-screen flex flex-col text-primary-700 bg-white">
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-5 text-primary-800">
                Frequently Asked <span className="text-[#B08D57]">Questions</span>
              </h1>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Find answers to common questions about physiotherapy services and what to expect during your visits
              </p>
            </div>
          <div className="h-[600px] flex items-center justify-center">
            <div className="text-center">Loading FAQ content...</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col text-primary-700 bg-gradient-to-br from-slate-50 via-white to-neutral-50">
      {/* Single Elegant Side Navigation */}
      <AnimatePresence>
        {showStickyNav && !isSearching && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-2 top-1/2 transform -translate-y-1/2 z-50 max-w-[200px]"
          >
            {/* Desktop Version */}
            <div className="hidden md:block">
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-xl rounded-2xl p-3 relative overflow-hidden">
                {/* Premium background elements */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#B08D57]/8 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-3">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl mb-2 shadow-lg">
                      <QuestionMarkCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight">FAQ</h3>
                  </div>
                  
                  <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
                    {faqCategories.map((category, index) => (
                      <motion.button
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`group flex items-center space-x-2 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 w-full text-left relative overflow-hidden ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white shadow-md transform scale-105'
                            : 'bg-slate-50/80 text-slate-700 hover:bg-gradient-to-r hover:from-[#B08D57]/10 hover:to-[#D4AF37]/10 hover:text-[#B08D57] hover:shadow-sm'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-white/60 text-slate-600 group-hover:bg-[#B08D57]/20 group-hover:text-[#B08D57]'
                        }`}>
                          <div className="w-3 h-3">{category.icon}</div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <span className="relative z-10 block truncate text-xs leading-tight">{category.name}</span>
                        </div>
                        
                        {activeCategory === category.id && (
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Version - Ultra Compact */}
            <div className="md:hidden">
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-xl rounded-xl p-2 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-center mb-2">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-lg mb-1 shadow-lg">
                      <QuestionMarkCircleIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {faqCategories.map((category, index) => (
                      <button
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        className={`group flex items-center justify-center p-1.5 rounded-lg text-xs font-semibold transition-all duration-300 w-full ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white shadow-md'
                            : 'bg-slate-50/80 text-slate-700 hover:bg-[#B08D57]/10 hover:text-[#B08D57]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${
                          activeCategory === category.id
                            ? 'text-white'
                            : 'text-slate-600 group-hover:text-[#B08D57]'
                        }`}>
                          <div className="w-3 h-3">{category.icon}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-800 tracking-tight">
              Frequently Asked <span className="text-[#B08D57]">Questions</span>
            </h1>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about physiotherapy services and what to expect during your visits
            </p>
        </div>
      
        {/* Enhanced search bar */}
        <div className="max-w-2xl mx-auto mb-16 relative z-10">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-neutral-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 group-hover:text-accent group-focus-within:text-accent transition-colors duration-200" />
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions..." 
                className="block w-full bg-white border border-neutral-300 rounded-full py-3.5 pl-12 pr-12 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent shadow-sm group-hover:shadow-md transition-all duration-200"
              />
              
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 mr-3 flex items-center justify-center h-8 w-8 my-auto rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                  aria-label="Clear search"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto">
          {/* Search Results */}
            {isSearching && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 bg-white shadow-lg rounded-2xl p-8 border border-neutral-100">
                <h2 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                  Search Results
                </h2>
                <p className="text-primary-600 text-lg">
                  {filteredQuestions.length === 0 
                    ? 'No questions found matching your search.' 
                    : `Found ${filteredQuestions.length} question${filteredQuestions.length === 1 ? '' : 's'} matching "${searchQuery}"`}
                </p>
                {filteredQuestions.length === 0 && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Clear search and view all questions
                  </button>
                )}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <FAQAccordion items={filteredQuestions} />
                </motion.div>
              </AnimatePresence>
              </div>
            )}
            
          {/* Category Navigation (when not searching) */}
            {!isSearching && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`group flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 
                      transform hover:scale-105 hover:-translate-y-1 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-br from-primary-50 to-primary-100 text-primary-900 border-2 border-primary-200 shadow-xl shadow-primary-100/50'
                        : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-50 text-primary-700 border border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className={`p-4 rounded-xl mb-4 transition-all duration-300 ${
                      activeCategory === category.id 
                        ? 'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900 shadow-lg' 
                        : 'bg-gradient-to-br from-neutral-50 to-neutral-100 text-primary-600 group-hover:from-primary-50 group-hover:to-primary-100 group-hover:text-primary-700'
                    }`}>
                      {category.icon}
                    </div>
                    <span className="text-sm font-semibold text-center leading-tight">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Individual Category Sections */}
              <div className="max-w-4xl mx-auto space-y-16">
                {faqCategories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    ref={(el) => {
                      sectionRefs.current[category.id] = el;
                    }}
                    className="scroll-mt-32"
                  >
                    <div className="mb-10 bg-white shadow-lg rounded-2xl p-8 border border-neutral-100">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl shadow-lg">
                          {category.icon}
                  </div>
                  <div>
                          <h2 className="text-3xl font-bold text-primary-900 mb-2 tracking-tight">
                            {category.name}
                    </h2>
                          <p className="text-primary-600 text-lg">
                            {category.questions.length} questions in this category
                    </p>
                  </div>
                </div>
              </div>
            
              <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
              >
                      <FAQAccordion items={category.questions} />
              </motion.div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-20 text-center">
                <div className="bg-gradient-to-br from-white to-neutral-50 shadow-lg rounded-2xl p-10 border border-neutral-100">
                  <p className="text-primary-600 mb-6 text-lg">Can't find what you're looking for?</p>
                  <Link 
                    href="/#contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </>
            )}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(148, 163, 184, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #B08D57, #D4AF37);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #D4AF37, #B08D57);
        }
      `}</style>
    </main>
  );
}

// Commented out metadata export as it is not allowed in client components
/*
export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Physiotherapy Clinic',
  description: 'Find answers to common questions about physiotherapy treatments, what to expect during your first visit, treatment approaches, and more.',
};
*/ 