import React from 'react';
import { Metadata } from 'next';
import ConditionsPageClient from '@/components/ConditionsPageClient';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Conditions I Treat | Physiotherapy in Burlington & Waterdown',
  description: 'Comprehensive physiotherapy treatment for spinal health, sports injuries, chronic pain, post-surgical rehabilitation, and more. Expert care for all ages and activity levels in Burlington, Waterdown, Hamilton, and Oakville.',
  keywords: ['physiotherapy conditions', 'back pain treatment Burlington', 'sports injury rehab', 'chronic pain management', 'post-surgical rehab', 'Burlington physiotherapy', 'Waterdown physiotherapy', 'Hamilton physiotherapy', 'Oakville physiotherapy'],
  openGraph: {
    title: 'Conditions I Treat | KinetiKare Physiotherapy',
    description: 'Expert physiotherapy treatment for spinal health, sports injuries, chronic pain, and post-surgical rehabilitation in Burlington and surrounding areas.',
    url: 'https://www.kinetikarephysio.com/conditions',
    type: 'website',
  },
};

export default function ConditionsPage() {
  const conditionCategories = [
    {
      title: "Spinal Health",
      subtitle: "Neck, Mid-Back & Low Back",
      accent: "#B08D57",
      gradient: "from-[#B08D57]/20 via-[#D4AF37]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent",
      conditions: [
        "Low Back Pain (acute and chronic, mechanical, disc-related)",
        "Neck Pain & Stiffness (including whiplash-associated disorders)",
        "Sciatica & Other Nerve Root Compressions (e.g., radiculopathy)",
        "Disc Herniations / Bulges",
        "Degenerative Disc Disease & Degenerative Joint Disease (Spondylosis)",
        "Spinal Stenosis",
        "Postural Dysfunction & Related Pain",
        "Headaches & Migraines (cervicogenic or tension-type)"
      ]
    },
    {
      title: "Shoulder Conditions",
      subtitle: "Complete shoulder care",
      accent: "#A17D47",
      gradient: "from-[#A17D47]/20 via-[#B08D57]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#A17D47] to-[#B08D57] bg-clip-text text-transparent",
      conditions: [
        "Rotator Cuff Injuries (tendinopathy, tears, post-repair)",
        "Shoulder Impingement Syndrome",
        "Frozen Shoulder (Adhesive Capsulitis)",
        "Shoulder Instability / Dislocations (conservative management & post-surgical)",
        "Bursitis / Tendinitis",
        "AC Joint Sprains"
      ]
    },
    {
      title: "Elbow, Wrist & Hand",
      subtitle: "Upper extremity focus",
      accent: "#D4AF37",
      gradient: "from-[#D4AF37]/20 via-[#B08D57]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent",
      conditions: [
        "Tennis Elbow (Lateral Epicondylitis)",
        "Golfer's Elbow (Medial Epicondylitis)",
        "Carpal Tunnel Syndrome",
        "De Quervain's Tenosynovitis",
        "Wrist Sprains & Strains",
        "Repetitive Strain Injuries"
      ]
    },
    {
      title: "Hip & Pelvis",
      subtitle: "Core stability and mobility",
      accent: "#B08D57",
      gradient: "from-[#B08D57]/20 via-[#A17D47]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#B08D57] to-[#A17D47] bg-clip-text text-transparent",
      conditions: [
        "Hip Pain (e.g., Bursitis, Gluteal Tendinopathy, Impingement (FAI))",
        "Piriformis Syndrome",
        "Sacroiliac (SI) Joint Dysfunction",
        "Groin Strains"
      ]
    },
    {
      title: "Knee Conditions",
      subtitle: "Comprehensive knee care",
      accent: "#A17D47",
      gradient: "from-[#A17D47]/20 via-[#D4AF37]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#A17D47] to-[#D4AF37] bg-clip-text text-transparent",
      conditions: [
        "Knee Pain (e.g., Patellofemoral Pain Syndrome, Patellar Tendinopathy)",
        "Ligament Sprains/Tears (ACL, PCL, MCL, LCL – conservative & post-surgical rehab)",
        "Meniscal Injuries (conservative & post-surgical rehab)",
        "IT Band Syndrome",
        "Osteoarthritis of the Knee"
      ]
    },
    {
      title: "Foot & Ankle",
      subtitle: "Foundation of movement",
      accent: "#D4AF37",
      gradient: "from-[#D4AF37]/20 via-[#A17D47]/10 to-transparent",
      textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#A17D47] bg-clip-text text-transparent",
      conditions: [
        "Ankle Sprains",
        "Plantar Fasciitis & Heel Spurs",
        "Achilles Tendinopathy / Tendinitis",
        "Shin Splints (Medial Tibial Stress Syndrome)",
        "Peroneal Tendinopathy"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Post-Surgical Rehabilitation",
      description: "Including joint replacements (hip, knee, shoulder), ligament reconstructions (e.g., ACL), fracture fixation, rotator cuff repairs, meniscectomies, spinal surgery recovery."
    },
    {
      title: "Arthritis Management",
      description: "Osteoarthritis, Rheumatoid Arthritis (focus on pain management, mobility, and function)."
    },
    {
      title: "Sports-Related Injuries",
      description: "Muscle strains, ligament sprains, contusions, overuse injuries specific to various sports."
    },
    {
      title: "Chronic Pain Management",
      description: "Multimodal approaches to help manage and reduce long-standing pain."
    },
    {
      title: "Balance & Gait Disorders",
      description: "Especially relevant for older adults or those with neurological considerations."
    },
    {
      title: "Pre-Operative Optimization",
      description: "Preparing for surgery to improve outcomes."
    }
  ];

  const clientTypes = [
    {
      title: "Athletes & Active Individuals",
      description: "Peak performance and injury prevention",
      pattern: "dots"
    },
    {
      title: "Chronic Conditions",
      description: "Long-term pain management and mobility",
      pattern: "lines"
    },
    {
      title: "Recovery & Rehabilitation",
      description: "Post-surgery and injury recovery",
      pattern: "waves"
    }
  ];

  return (
    <ConditionsPageClient 
      conditionCategories={conditionCategories}
      additionalServices={additionalServices}
      clientTypes={clientTypes}
    />
  );
} 