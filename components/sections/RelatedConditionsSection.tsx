"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  LinkIcon,
  BeakerIcon,
  HeartIcon,
  CogIcon,
  EyeIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import { Condition } from '@/lib/conditions-data';
import { getDetailedRelationships } from '@/lib/conditions-data';

interface RelatedConditionsSectionProps {
  currentCondition: Condition;
  relatedConditions: Condition[];
}

const relationshipTypeIcons = {
  anatomical: EyeIcon,
  symptomatic: HeartIcon,
  causal: BeakerIcon,
  biomechanical: CogIcon,
  treatment: ClipboardDocumentCheckIcon
};

const relationshipTypeColors = {
  anatomical: {
    bg: 'from-blue-50/70 to-blue-50/30',
    border: 'border-blue-100',
    icon: 'from-blue-500 to-blue-600',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800'
  },
  symptomatic: {
    bg: 'from-rose-50/70 to-rose-50/30',
    border: 'border-rose-100',
    icon: 'from-rose-500 to-rose-600',
    text: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-800'
  },
  causal: {
    bg: 'from-emerald-50/70 to-emerald-50/30',
    border: 'border-emerald-100',
    icon: 'from-emerald-500 to-emerald-600',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800'
  },
  biomechanical: {
    bg: 'from-purple-50/70 to-purple-50/30',
    border: 'border-purple-100',
    icon: 'from-purple-500 to-purple-600',
    text: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-800'
  },
  treatment: {
    bg: 'from-amber-50/70 to-amber-50/30',
    border: 'border-amber-100',
    icon: 'from-amber-500 to-amber-600',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800'
  }
};

const relationshipTypeLabels = {
  anatomical: 'Anatomical Connection',
  symptomatic: 'Similar Symptoms',
  causal: 'Causal Relationship',
  biomechanical: 'Movement Pattern',
  treatment: 'Treatment Approach'
};

export default function RelatedConditionsSection({ 
  currentCondition, 
  relatedConditions 
}: RelatedConditionsSectionProps) {
  const relationships = getDetailedRelationships(currentCondition.slug);
  
  // Match related conditions with their relationship details
  const enrichedRelatedConditions = relatedConditions.map(condition => {
    const relationship = relationships.find(rel => rel.slug === condition.slug);
    return {
      condition,
      relationship
    };
  }).filter(item => item.relationship); // Only show conditions with detailed relationships

  if (enrichedRelatedConditions.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 mb-8">
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-indigo-50/30 pointer-events-none"></div>
        
        <div className="relative">
          {/* Header with gradient accent */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <LinkIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Related Conditions</h2>
                <p className="text-sm text-slate-200 mt-1">
                  Understanding interconnected conditions helps guide comprehensive treatment
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              {enrichedRelatedConditions.map(({ condition, relationship }, index) => {
                const colors = relationshipTypeColors[relationship!.relationshipType];
                const Icon = relationshipTypeIcons[relationship!.relationshipType];
                const typeLabel = relationshipTypeLabels[relationship!.relationshipType];
                
                return (
                  <motion.div
                    key={condition.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`group relative bg-gradient-to-r ${colors.bg} rounded-xl border ${colors.border} hover:shadow-lg transition-all duration-300`}
                  >
                    <Link href={`/conditions/${condition.slug}`} className="block p-6">
                      <div className="flex gap-5">
                        {/* Relationship Type Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-14 h-14 bg-gradient-to-br ${colors.icon} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Header Row */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-1">
                                {condition.name}
                              </h3>
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                                {typeLabel}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              {/* Relevance Score */}
                              <div className="flex items-center gap-1">
                                <span className="text-xs font-medium text-slate-500">Relevance:</span>
                                <div className="flex gap-0.5">
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <div
                                      key={i}
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        i < Math.ceil(relationship!.relevanceScore / 2)
                                          ? 'bg-yellow-400'
                                          : 'bg-slate-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs font-bold text-slate-600 ml-1">
                                  {relationship!.relevanceScore}/10
                                </span>
                              </div>
                              <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                          
                          {/* Condition Description */}
                          {condition.description && (
                            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                              {condition.description}
                            </p>
                          )}
                          
                          {/* Relationship Explanation */}
                          <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-white/40">
                            <h4 className={`text-xs font-bold ${colors.text} uppercase tracking-wider mb-1.5`}>
                              Why This Condition is Related
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              {relationship!.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Footer with medical disclaimer */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold">Clinical Note:</span>
                  <span className="ml-1">
                    Condition relationships are based on anatomical, biomechanical, and clinical evidence. 
                    Individual presentations may vary. Proper assessment is essential for accurate diagnosis and treatment planning.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}