import React from 'react';
import { Metadata } from 'next';
import ConditionsPageClient from '@/components/ConditionsPageClient';
import { conditionCategories, additionalServices } from '@/lib/conditions-data';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Treatment Areas | KinetiKare Physiotherapy - Kareem Hassanein',
  description: 'Back, neck, shoulder, knee, hip, foot and ankle conditions treated with clear plans and evidence-based care in Burlington.',
  keywords: [
    'KinetiKare conditions',
    'KinetiKare treatments',
    'Kinetikare physiotherapy conditions',
    'Kareem Hassanein conditions',
    'physiotherapy conditions Burlington',
    'physiotherapy conditions Waterdown',
    'physiotherapy conditions Hamilton',
    'physiotherapy conditions Oakville',
    'back pain treatment Burlington',
    'back pain treatment Waterdown', 
    'back pain treatment Hamilton',
    'back pain treatment Oakville',
    'neck pain treatment Burlington',
    'neck pain treatment Waterdown',
    'neck pain treatment Hamilton', 
    'neck pain treatment Oakville',
    'sports injury rehab Burlington',
    'sports injury rehab Waterdown',
    'sports injury rehab Hamilton',
    'sports injury rehab Oakville',
    'sports injury rehabilitation Burlington',
    'sports injury rehabilitation Waterdown',
    'sports injury rehabilitation Hamilton',
    'sports injury rehabilitation Oakville',
    'chronic pain management Burlington',
    'chronic pain management Waterdown',
    'chronic pain management Hamilton',
    'chronic pain management Oakville',
    'post-surgical rehab Burlington',
    'post-surgical rehab Waterdown',
    'post-surgical rehab Hamilton',
    'post-surgical rehab Oakville',
    'shoulder pain treatment Burlington',
    'shoulder pain treatment Waterdown',
    'shoulder pain treatment Hamilton',
    'shoulder pain treatment Oakville',
    'knee pain treatment Burlington',
    'knee pain treatment Waterdown',
    'knee pain treatment Hamilton',
    'knee pain treatment Oakville',
    'hip pain treatment Burlington',
    'hip pain treatment Waterdown',
    'hip pain treatment Hamilton',
    'hip pain treatment Oakville',
    'sciatica treatment Burlington',
    'sciatica treatment Waterdown',
    'sciatica treatment Hamilton',
    'sciatica treatment Oakville',
    'disc herniation treatment Burlington',
    'disc herniation treatment Waterdown',
    'disc herniation treatment Hamilton',
    'disc herniation treatment Oakville',
    'rotator cuff injury Burlington',
    'rotator cuff injury Waterdown',
    'rotator cuff injury Hamilton',
    'rotator cuff injury Oakville',
    'tennis elbow treatment Burlington',
    'tennis elbow treatment Waterdown',
    'tennis elbow treatment Hamilton',
    'tennis elbow treatment Oakville',
    'plantar fasciitis treatment Burlington',
    'plantar fasciitis treatment Waterdown',
    'plantar fasciitis treatment Hamilton',
    'plantar fasciitis treatment Oakville',
    'arthritis management Burlington',
    'arthritis management Waterdown',
    'arthritis management Hamilton',
    'arthritis management Oakville',
    'headache treatment Burlington',
    'headache treatment Waterdown',
    'headache treatment Hamilton',
    'headache treatment Oakville',
    'Burlington physiotherapy conditions',
    'Waterdown physiotherapy conditions',
    'Hamilton physiotherapy conditions',
    'Oakville physiotherapy conditions'
  ],
  openGraph: {
    title: 'Treatment Areas | KinetiKare Physiotherapy',
    description: 'Expert physiotherapy treatment for spinal health, sports injuries, chronic pain, and post-surgical rehabilitation in Burlington and surrounding areas.',
    url: 'https://www.kinetikarephysio.com/conditions',
    type: 'website',
    images: [{
      url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Conditions Treated - Kareem Hassanein Physiotherapy'
    }]
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com/conditions'
  },
};

export default function ConditionsPage() {
  // Transform the condition categories to include formatted condition strings
  const formattedCategories = conditionCategories.map(category => ({
    title: category.title,
    subtitle: category.subtitle,
    accent: category.accent,
    gradient: category.gradient,
    textGradient: category.textGradient,
    conditions: category.conditions.map(condition => {
      // Combine name and description in the format expected by ConditionsPageClient
      if (condition.description) {
        return `${condition.name} (${condition.description})`;
      }
      return condition.name;
    }),
    // Also pass the raw conditions data for proper slug generation
    conditionsData: category.conditions
  }));

  return (
    <ConditionsPageClient 
      conditionCategories={formattedCategories}
      additionalServices={additionalServices}
    />
  );
} 