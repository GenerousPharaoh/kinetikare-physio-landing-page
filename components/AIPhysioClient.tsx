"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  PaperAirplaneIcon, 
  ExclamationTriangleIcon,
  UserCircleIcon,
  ArrowPathIcon,
  ShareIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface SuggestedQuestion {
  text: string;
  category: string;
}

export default function AIPhysioClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Suggested questions for engagement
  const suggestedQuestions: SuggestedQuestion[] = [
    { text: "I have lower back pain when sitting for long periods. What exercises can help?", category: "Back Pain" },
    { text: "My knee hurts when running. Should I stop exercising completely?", category: "Sports Injury" },
    { text: "What's the difference between acute and chronic pain?", category: "Education" },
    { text: "Can you suggest stretches for neck pain from computer work?", category: "Posture" },
  ];

  // Welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        role: 'assistant',
        content: `Hello! I'm your AI Physiotherapy Advisor, powered by advanced AI and physiotherapy knowledge. 

I'm here to provide general guidance about:
• Pain management strategies
• Exercise recommendations
• Injury prevention tips
• Movement and posture advice
• Recovery timelines

How can I help you today?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-physio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue.trim() }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    textareaRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">KinetiKare AI</h1>
                <p className="text-xs text-slate-600">Physiotherapy Advisor</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ShareIcon className="h-5 w-5 text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <BookmarkIcon className="h-5 w-5 text-slate-600" />
              </button>
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Book Real Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer Modal */}
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <ExclamationTriangleIcon className="h-8 w-8 text-amber-500 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Important Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  This AI assistant provides general physiotherapy information and should not replace professional medical advice.
                </p>
                <p className="font-semibold">
                  Always consult with a qualified healthcare provider for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Proper diagnosis of your condition</li>
                  <li>Personalized treatment plans</li>
                  <li>Severe or persistent symptoms</li>
                  <li>Emergency medical situations</li>
                </ul>
                <p className="text-sm">
                  By continuing, you acknowledge that this tool is for educational purposes only.
                </p>
              </div>
              
              <button
                onClick={() => setShowDisclaimer(false)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                I Understand & Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Interface */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Messages Area */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 mb-6 min-h-[60vh] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-slate-200' 
                      : 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37]'
                  }`}>
                    {message.role === 'user' ? (
                      <UserCircleIcon className="h-6 w-6 text-slate-600" />
                    ) : (
                      <SparklesIcon className="h-6 w-6 text-white" />
                    )}
                  </div>
                  
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-white/70' : 'text-slate-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex items-center space-x-2 bg-slate-100 rounded-2xl px-4 py-3">
                  <ArrowPathIcon className="h-5 w-5 text-slate-600 animate-spin" />
                  <span className="text-slate-600">Analyzing your question...</span>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="border-t border-slate-200/50 p-4">
              <p className="text-sm text-slate-600 mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question.text)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 transition-colors"
                  >
                    {question.category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-slate-200/50 p-4">
            <div className="flex items-end space-x-3">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about your pain, movement, or injury concerns..."
                className="flex-1 resize-none bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B08D57] text-slate-700 min-h-[50px] max-h-[200px]"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  inputValue.trim() && !isLoading
                    ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white hover:shadow-lg'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Premium Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 rounded-2xl p-6 border border-[#B08D57]/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Want Personalized Treatment?
              </h3>
              <p className="text-slate-600">
                While AI can provide guidance, nothing beats hands-on assessment and treatment.
              </p>
            </div>
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Book Assessment
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
            <div>Powered by Advanced AI</div>
            <div>•</div>
            <div>Burlington, ON</div>
          </div>
        </div>
      </div>
    </div>
  );
} 