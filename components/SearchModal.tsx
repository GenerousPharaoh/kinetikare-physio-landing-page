"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  MagnifyingGlassIcon,
  XMarkIcon,
  DocumentTextIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { getAllConditions } from '@/lib/conditions-data';
import Link from 'next/link';
import { 
  symptomMappings, 
  bodyPartConditions, 
  exerciseDatabase, 
  quickActions,
  treatmentModalities,
  activityInjuries 
} from '@/lib/search-content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'condition' | 'faq' | 'service' | 'page';
  title: string;
  description?: string;
  url: string;
  category?: string;
  score: number;
}

// Fuzzy search helper
function fuzzyMatch(text: string, query: string): { matches: boolean; score: number } {
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Exact match - highest score
  if (textLower === queryLower) {
    return { matches: true, score: 100 };
  }
  
  // Contains exact phrase - high score
  if (textLower.includes(queryLower)) {
    const position = textLower.indexOf(queryLower);
    // Higher score if match is at the beginning
    const positionScore = position === 0 ? 90 : 80 - (position * 2);
    return { matches: true, score: Math.max(positionScore, 50) };
  }
  
  // All words present - medium score
  const queryWords = queryLower.split(/\s+/);
  const allWordsPresent = queryWords.every(word => textLower.includes(word));
  if (allWordsPresent) {
    return { matches: true, score: 40 + (queryWords.length * 5) };
  }
  
  // Some words present - lower score
  const matchingWords = queryWords.filter(word => textLower.includes(word));
  if (matchingWords.length > 0) {
    const score = 20 + (matchingWords.length / queryWords.length * 20);
    return { matches: true, score };
  }
  
  // Fuzzy character matching for typos
  let queryIndex = 0;
  let textIndex = 0;
  let matches = 0;
  
  while (queryIndex < queryLower.length && textIndex < textLower.length) {
    if (queryLower[queryIndex] === textLower[textIndex]) {
      matches++;
      queryIndex++;
    }
    textIndex++;
  }
  
  if (matches >= queryLower.length * 0.7) {
    return { matches: true, score: matches / queryLower.length * 30 };
  }
  
  return { matches: false, score: 0 };
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Intelligent search with contextual understanding
  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const searchResults: SearchResult[] = [];
    const conditions = getAllConditions();
    const termLower = searchTerm.toLowerCase().trim();
    
    // IMMEDIATE PRIORITY: Emergency & urgent situations
    const emergencyTerms = ['emergency', 'urgent', 'severe pain', 'can\'t walk', 'can\'t move', 'help now', 'emergency'];
    const hasEmergency = emergencyTerms.some(term => termLower.includes(term));
    
    if (hasEmergency) {
      searchResults.push({
        type: 'page',
        title: '🚨 URGENT CARE NEEDED',
        description: 'Call immediately: 905-634-6000 or visit emergency room',
        url: 'tel:905-634-6000',
        category: 'emergency',
        score: 1000
      });
    }
    
    // PRIORITY 1: Booking & Appointment requests
    const bookingTerms = ['book', 'appointment', 'schedule', 'see someone', 'visit', 'come in'];
    const hasBooking = bookingTerms.some(term => termLower.includes(term));
    
    if (hasBooking) {
      searchResults.push({
        type: 'page',
        title: '📅 Book Your Assessment',
        description: 'Click to schedule with Kareem - Evening appointments available',
        url: 'https://endorphinshealth.janeapp.com/#/staff_member/42',
        category: 'booking',
        score: 500
      });
    }
    
    // PRIORITY 2: Symptom-based intelligent matching
    symptomMappings.forEach(mapping => {
      const strongMatch = mapping.symptoms.some(symptom => {
        // Exact match or very close fuzzy match
        const exact = termLower.includes(symptom);
        const fuzzy = fuzzyMatch(termLower, symptom).score > 70;
        return exact || fuzzy;
      });
      
      if (strongMatch) {
        const urgencyIcon = mapping.urgency === 'emergency' ? '🚨' : 
                           mapping.urgency === 'high' ? '⚡' : 
                           mapping.urgency === 'moderate' ? '⏰' : '📋';
        
        searchResults.push({
          type: 'condition',
          title: `${urgencyIcon} ${mapping.action}`,
          description: `Common with: ${mapping.conditions.slice(0, 2).join(', ')}${mapping.conditions.length > 2 ? '...' : ''}`,
          url: mapping.urgency === 'emergency' ? 'tel:905-634-6000' : 'https://endorphinshealth.janeapp.com/#/staff_member/42',
          category: `${mapping.urgency} priority`,
          score: mapping.urgency === 'emergency' ? 800 : 
                 mapping.urgency === 'high' ? 400 : 
                 mapping.urgency === 'moderate' ? 300 : 200
        });
      }
    });
    
    // PRIORITY 3: Body part intelligence - understand "my knee hurts"
    Object.entries(bodyPartConditions).forEach(([bodyPart, conditionList]) => {
      const bodyPartVariations = [
        bodyPart,
        `${bodyPart} pain`,
        `${bodyPart} injury`,
        `${bodyPart} hurt`,
        `my ${bodyPart}`,
        `${bodyPart} problem`
      ];
      
      const matchesBodyPart = bodyPartVariations.some(variation => 
        termLower.includes(variation) || fuzzyMatch(termLower, variation).score > 60
      );
      
      if (matchesBodyPart) {
        // Find matching conditions in the actual condition database
        const actualConditions = getAllConditions().filter(condition => 
          conditionList.some(condName => 
            condition.name.toLowerCase().includes(condName.toLowerCase()) ||
            condName.toLowerCase().includes(condition.name.toLowerCase())
          )
        ).slice(0, 3);
        
        actualConditions.forEach((condition, index) => {
          searchResults.push({
            type: 'condition',
            title: condition.name,
            description: `Common ${bodyPart} condition - Click to learn more`,
            url: `/conditions/${condition.slug}`,
            category: bodyPart,
            score: 350 - (index * 10) // First condition has highest score
          });
        });
        
        // Add generic body part help
        searchResults.push({
          type: 'service',
          title: `${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Treatment`,
          description: `Specialized physiotherapy for ${bodyPart} issues`,
          url: '/services',
          category: 'treatment',
          score: 280
        });
      }
    });
    
    // PRIORITY 4: Activity-based searches ("running injury", "golf pain")
    activityInjuries.forEach(activity => {
      const activityMatch = activity.keywords.some(keyword => {
        const variations = [
          keyword,
          `${keyword} injury`,
          `${keyword} pain`,
          `${keyword} problem`
        ];
        return variations.some(v => termLower.includes(v));
      });
      
      if (activityMatch) {
        searchResults.push({
          type: 'condition',
          title: `${activity.activity.charAt(0).toUpperCase() + activity.activity.slice(1)} Injuries`,
          description: activity.advice,
          url: '/conditions',
          category: 'activity-specific',
          score: 320
        });
        
        // Add specific conditions for this activity
        activity.conditions.forEach((conditionName, index) => {
          // Find the actual condition in our database
          const actualCondition = getAllConditions().find(c => 
            c.name.toLowerCase().includes(conditionName.toLowerCase()) ||
            conditionName.toLowerCase().includes(c.name.toLowerCase())
          );
          
          if (actualCondition) {
            searchResults.push({
              type: 'condition',
              title: actualCondition.name,
              description: `Common in ${activity.activity}`,
              url: `/conditions/${actualCondition.slug}`,
              category: activity.activity,
              score: 300 - (index * 5)
            });
          }
        });
      }
    });
    
    // PRIORITY 5: Treatment & Service searches
    treatmentModalities.forEach(treatment => {
      const treatmentMatch = treatment.keywords.some(keyword => 
        termLower.includes(keyword) || fuzzyMatch(termLower, keyword).score > 60
      );
      
      if (treatmentMatch) {
        searchResults.push({
          type: 'service',
          title: treatment.name,
          description: treatment.description,
          url: '/services',
          category: 'treatment',
          score: 250
        });
      }
    });
    
    // PRIORITY 6: Insurance & billing questions
    const insuranceTerms = ['insurance', 'coverage', 'cost', 'price', 'billing', 'ohip', 'benefits'];
    const hasInsurance = insuranceTerms.some(term => termLower.includes(term));
    
    if (hasInsurance) {
      searchResults.push({
        type: 'faq',
        title: '💳 Insurance & Direct Billing',
        description: 'We bill most insurance companies directly - no upfront payment needed',
        url: '/faq#insurance',
        category: 'billing',
        score: 450
      });
    }
    
    // PRIORITY 7: Location & hours
    const locationTerms = ['where', 'location', 'address', 'directions', 'hours', 'when open', 'parking'];
    const hasLocation = locationTerms.some(term => termLower.includes(term));
    
    if (hasLocation) {
      searchResults.push({
        type: 'page',
        title: '📍 Clinic Location & Hours',
        description: '4631 Palladium Way, Burlington - Evening appointments available',
        url: '/#contact',
        category: 'location',
        score: 400
      });
    }
    
    // FALLBACK: Search actual conditions with stricter matching
    if (searchResults.length < 3) {
      conditions.forEach(condition => {
        const nameMatch = fuzzyMatch(condition.name, searchTerm);
        
        if (nameMatch.score > 50) { // Much stricter threshold
          searchResults.push({
            type: 'condition',
            title: condition.name,
            description: condition.overview?.substring(0, 120) || condition.shortDescription || 'Learn about this condition',
            url: `/conditions/${condition.slug}`,
            category: condition.category || 'condition',
            score: nameMatch.score + 100 // Boost actual conditions
          });
        }
      });
    }
    
    // Remove duplicates and sort by relevance
    const uniqueResults = searchResults.filter((result, index, self) => 
      index === self.findIndex(r => r.title === result.title)
    );
    
    return uniqueResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Fewer, more relevant results
  }, [searchTerm]);

  // Update results when search changes
  useEffect(() => {
    setResults(searchResults);
    setSelectedIndex(0);
  }, [searchResults]);

  // Save search when selecting a result
  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const newRecent = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    
    router.push(result.url);
    onClose();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const getIcon = (type: string, category?: string) => {
    // Special icons for specific categories
    if (category === 'emergency') {
      return <FireIcon className="h-5 w-5" />;
    }
    
    if (category === 'booking') {
      return <ClockIcon className="h-5 w-5" />;
    }
    
    if (category === 'billing') {
      return <QuestionMarkCircleIcon className="h-5 w-5" />;
    }
    
    if (category === 'location') {
      return <SparklesIcon className="h-5 w-5" />;
    }
    
    switch (type) {
      case 'condition':
        return <HeartIcon className="h-5 w-5" />;
      case 'faq':
        return <QuestionMarkCircleIcon className="h-5 w-5" />;
      case 'service':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'page':
        return <SparklesIcon className="h-5 w-5" />;
      default:
        return <DocumentTextIcon className="h-5 w-5" />;
    }
  };
  
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'emergency':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'high priority':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'booking':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'billing':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'location':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-[#B08D57]/10 text-[#B08D57] border-[#B08D57]/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-[5%] sm:inset-x-8 md:inset-x-12 lg:inset-x-20 xl:inset-x-32 2xl:inset-x-48 z-50"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 via-transparent to-[#D4AF37]/5 pointer-events-none rounded-2xl"></div>
              
              <div className="relative flex flex-col h-full max-h-[85vh]">
                {/* Search Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 sm:p-6 rounded-t-2xl flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-5 sm:h-6 w-5 sm:w-6 text-white/60" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search conditions, treatments..."
                        className="w-full pl-10 sm:pl-14 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-base sm:text-lg"
                      />
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 sm:p-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <XMarkIcon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                    </button>
                  </div>
                  
                </div>

                {/* Results - Scrollable */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
                  {searchTerm.length >= 2 ? (
                    results.length > 0 ? (
                      <div className="p-2 pb-4">
                        {results.map((result, index) => (
                          <div
                            key={`${result.type}-${result.title}-${index}`}
                            className={`w-full rounded-xl transition-all border ${
                              index === selectedIndex 
                                ? 'bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 border-[#B08D57]/30 shadow-md' 
                                : 'hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                            onMouseEnter={() => setSelectedIndex(index)}
                          >
                            <button
                              onClick={() => handleResultClick(result)}
                              className="w-full text-left p-3 sm:p-4"
                            >
                              <div className="flex items-start gap-3 sm:gap-4">
                                <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                                  result.category === 'emergency' ? 'bg-red-500 text-white' :
                                  result.category === 'booking' ? 'bg-green-500 text-white' :
                                  result.category === 'billing' ? 'bg-blue-500 text-white' :
                                  result.category === 'location' ? 'bg-purple-500 text-white' :
                                  index === selectedIndex 
                                    ? 'bg-gradient-to-br from-[#B08D57] to-[#D4AF37] text-white' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {getIcon(result.type, result.category)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{result.title}</h3>
                                        {result.category && (
                                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(result.category)}`}>
                                            {result.category}
                                          </span>
                                        )}
                                      </div>
                                      {result.description && (
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                                          {result.description}
                                        </p>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 ml-3">
                                      {/* Action buttons for specific result types */}
                                      {(result.category === 'booking' || result.url.includes('janeapp.com')) && (
                                        <div className="text-xs text-green-600 font-medium hidden sm:block">
                                          Click to book
                                        </div>
                                      )}
                                      {result.url.startsWith('tel:') && (
                                        <div className="text-xs text-red-600 font-medium hidden sm:block">
                                          Tap to call
                                        </div>
                                      )}
                                      <ArrowRightIcon className={`h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 transition-transform ${
                                        index === selectedIndex ? 'translate-x-1 text-[#B08D57]' : 'text-gray-400'
                                      }`} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                            
                            {/* Quick action for emergency results */}
                            {result.category === 'emergency' && (
                              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                                <div className="flex gap-2 pt-2 border-t border-red-200">
                                  <Link
                                    href="tel:905-634-6000"
                                    className="flex-1 px-3 py-2 bg-red-500 text-white text-center text-sm font-medium rounded-lg hover:bg-red-600 transition-colors"
                                    onClick={onClose}
                                  >
                                    Call Now
                                  </Link>
                                  <button
                                    onClick={() => {
                                      setSearchTerm('emergency room directions');
                                    }}
                                    className="px-3 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors"
                                  >
                                    Find ER
                                  </button>
                                </div>
                              </div>
                            )}
                            
                            {/* Quick booking for high priority conditions */}
                            {result.category?.includes('priority') && result.category !== 'emergency' && (
                              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                                <div className="pt-2 border-t border-orange-200">
                                  <Link
                                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                                    target="_blank"
                                    className="block w-full px-3 py-2 bg-orange-500 text-white text-center text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
                                    onClick={onClose}
                                  >
                                    Book Urgent Assessment
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 sm:p-12 text-center">
                        <div className="inline-flex p-3 sm:p-4 bg-gray-100 rounded-full mb-4">
                          <MagnifyingGlassIcon className="h-6 sm:h-8 w-6 sm:w-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">No results found for "{searchTerm}"</p>
                        <p className="text-xs sm:text-sm text-gray-500">Try a different search term</p>
                      </div>
                    )
                  ) : searchTerm.length > 0 ? (
                    <div className="p-8 sm:p-12 text-center">
                      <p className="text-gray-500 text-sm sm:text-base">Keep typing to search...</p>
                    </div>
                  ) : (
                    <div className="p-4 sm:p-8">
                      {/* Popular Searches */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base flex items-center gap-2">
                          <FireIcon className="h-4 sm:h-5 w-4 sm:w-5 text-[#D4AF37]" />
                          Popular Searches
                        </h3>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                          {['back pain', 'knee injury', 'neck pain', 'shoulder pain', 'insurance'].map(term => (
                            <button
                              key={term}
                              onClick={() => setSearchTerm(term)}
                              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#B08D57]/10 to-[#D4AF37]/10 border border-[#B08D57]/20 rounded-lg hover:border-[#B08D57]/40 transition-colors text-xs sm:text-sm font-medium text-gray-700"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Recent Searches */}
                      {recentSearches.length > 0 && (
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-sm sm:text-base">
                              <ClockIcon className="h-4 sm:h-5 w-4 sm:w-5" />
                              Recent Searches
                            </h3>
                            <button
                              onClick={() => {
                                setRecentSearches([]);
                                localStorage.removeItem('recentSearches');
                              }}
                              className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              Clear
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {recentSearches.map(term => (
                              <button
                                key={term}
                                onClick={() => setSearchTerm(term)}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-xs sm:text-sm text-gray-700"
                              >
                                {term}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Quick Actions */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Quick Actions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Link
                            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                            target="_blank"
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg hover:border-green-300 transition-colors group"
                            onClick={onClose}
                          >
                            <ClockIcon className="h-5 w-5" />
                            <div>
                              <div className="font-medium text-green-800 text-sm">Book Assessment</div>
                              <div className="text-xs text-green-600">Available today</div>
                            </div>
                            <ArrowRightIcon className="h-4 w-4 text-green-600 ml-auto group-hover:translate-x-1 transition-transform" />
                          </Link>
                          
                          <Link
                            href="tel:905-634-6000"
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg hover:border-red-300 transition-colors group"
                            onClick={onClose}
                          >
                            <FireIcon className="h-5 w-5" />
                            <div>
                              <div className="font-medium text-red-800 text-sm">Call Clinic</div>
                              <div className="text-xs text-red-600">905-634-6000</div>
                            </div>
                            <ArrowRightIcon className="h-4 w-4 text-red-600 ml-auto group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>

                {/* Footer - Hide on mobile */}
                {results.length > 0 && searchTerm.length >= 2 && (
                  <div className="hidden sm:block border-t border-gray-100 px-6 py-3 bg-gray-50">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-500">
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">↑↓</kbd>
                          Navigate
                        </span>
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">Enter</kbd>
                          Select
                        </span>
                        <span className="flex items-center gap-1">
                          <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs">Esc</kbd>
                          Close
                        </span>
                      </div>
                      <span className="text-gray-500">
                        {results.length} result{results.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}