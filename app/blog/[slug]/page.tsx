import React from 'react';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

// Helper function to check if an image exists
function imageExists(slug: string): boolean {
  try {
    // Check if the file exists in the public directory
    const publicDir = path.join(process.cwd(), 'public');
    const imagePath = path.join(publicDir, 'images', 'blog', `${slug}.jpg`);
    return fs.existsSync(imagePath);
  } catch (error) {
    console.error('Error checking image existence:', error);
    return false;
  }
}

// Placeholder data structure - replace with actual fetching logic later
const getPostData = (slug: string) => {
  if (slug === 'understanding-low-back-pain') {
    return {
      title: "Understanding Low Back Pain: Why It Keeps Coming Back and What You Can Actually Do About It",
      content: (
        <>
          <p>If low back pain keeps returning, you&apos;re probably frustrated and tired of temporary fixes. Trust me—you&apos;re not alone. The majority of patients I see from Burlington and Waterdown struggle with recurring back pain, not because they&apos;ve suffered severe injuries, but due to the everyday wear and tear of life. Think prolonged sitting at work, clearing heavy snow in winter, or getting back into sports too quickly after downtime.</p>
          <p>Your spine is remarkably resilient, yet sensitive to consistent misuse. Quick fixes rarely address the root causes—usually muscle imbalances, poor movement habits, or weak core and hip muscles. This is exactly where my individualized approach to physiotherapy comes in.</p>
          <p>I start by assessing your movement patterns and posture, pinpointing what specifically triggers your pain. Forget generic stretching routines; instead, we focus on targeted strength training, functional mobility exercises, and practical education. I help you make small yet significant adjustments in your daily activities—like better ergonomics for your home workspace, proper lifting techniques for winter snow, or tailored warm-ups for your hockey games at Harry Howell Arena.</p>
          <p>Taking control of your back pain means understanding your body better. When you address the real causes instead of chasing symptoms, lasting relief is absolutely possible.</p>
        </>
      ),
    };
  } else if (slug === 'rotator-cuff-exercises') {
    return {
      title: "Rotator Cuff Injury? Practical Exercises to Start Your Recovery Safely (Consult First!)",
      content: (
        <>
          <p>Rotator cuff injuries are incredibly common—especially among athletes and active adults here in Burlington and Waterdown. Whether you injured your shoulder playing tennis at City View Park or from lifting improperly at home, you&apos;re probably feeling frustrated by limited mobility and pain that affects simple activities like reaching overhead or sleeping comfortably.</p>
          <p>Here&apos;s what you need to know: early physiotherapy intervention can dramatically improve your recovery. Starting with simple, gentle exercises can maintain your range of motion and minimize muscle loss while you recover.</p>
          <p>Here are two safe, beginner-friendly exercises I often recommend (<strong>but always consult me or another physiotherapist before starting</strong>):</p>
          <ul>
            <li><strong>Pendulum Swings:</strong> Lean forward gently, supporting yourself on a sturdy surface. Allow your injured arm to dangle loosely, and slowly swing it in small circles. This promotes gentle mobility without strain.</li>
            <li><strong>Shoulder Blade Squeezes:</strong> Sit or stand comfortably. Slowly squeeze your shoulder blades back and together without shrugging your shoulders upward. Hold for five seconds, then release. This simple movement improves posture and reduces strain on the rotator cuff.</li>
          </ul>
          <p>These foundational exercises help start your recovery right—but remember, rotator cuff injuries are unique. A personalized physiotherapy assessment will ensure you&apos;re on the right track toward full recovery, safely returning to sports and daily activities without setbacks.</p>
        </>
      ),
    };
  } else if (slug === 'first-physio-visit-expectations') {
    return {
      title: "Your First Physiotherapy Visit: Exactly What to Expect (and How to Get the Most From It)",
      content: (
        <>
          <p>Booking your first physiotherapy appointment can feel intimidating. Whether you&apos;re dealing with persistent neck pain from desk work, recovering from surgery, or managing a sports injury from weekend hockey, knowing exactly what to expect can ease your nerves and maximize your recovery.</p>
          <p>At your initial session, I spend significant time understanding your history, symptoms, and goals. We&apos;ll thoroughly assess your movement patterns, joint mobility, strength, and identify exactly what&apos;s causing your issue—not just chasing symptoms. It&apos;s essential you feel heard, comfortable, and fully informed every step of the way.</p>
          <p>Here&apos;s how to prepare to make the most of your visit:</p>
          <ul>
            <li><strong>Wear comfortable clothing:</strong> Loose clothes or athletic wear allows me to assess your movement clearly.</li>
            <li><strong>Bring relevant documents:</strong> Any medical imaging, reports, or referrals you have help build the clearest picture possible.</li>
            <li><strong>Ask questions:</strong> The more you understand your condition, the better you can actively participate in recovery.</li>
          </ul>
          <p>Most importantly, you&apos;ll leave your first appointment with a clear, practical plan tailored specifically for you—no generic exercise sheets. We&apos;ll set achievable goals together, whether it&apos;s returning to your morning jog at Waterdown Memorial Park or comfortably lifting your kids without pain.</p>
          <p>A successful physiotherapy journey starts with trust, clarity, and genuine collaboration. That&apos;s exactly what your first appointment is all about.</p>
        </>
      ),
    };
  } else if (slug === 'ai-physiotherapy-advisor-launch') {
    return {
      title: "Introducing Our AI Physiotherapy Advisor: Get Instant Guidance 24/7",
      content: (
        <>
          <h2>Revolutionizing Physiotherapy Access with AI</h2>
          <p>I&apos;m excited to announce the launch of our <strong>AI Physiotherapy Advisor</strong> - a cutting-edge tool designed to provide instant, evidence-based physiotherapy guidance whenever you need it.</p>
          
          <h3>Why We Built This</h3>
          <p>As a physiotherapist, I often encounter patients who:</p>
          <ul>
            <li>Need quick answers outside of clinic hours</li>
            <li>Are unsure if their symptoms require professional assessment</li>
            <li>Want to understand their condition better before booking an appointment</li>
            <li>Live far from quality physiotherapy services</li>
          </ul>
          <p>Our AI advisor bridges this gap, offering professional-grade guidance that&apos;s accessible to everyone.</p>
          
          <h3>What Can the AI Physio Advisor Do?</h3>
          
          <h4>1. Pain Assessment & Guidance</h4>
          <ul>
            <li>Analyze your symptoms and provide initial insights</li>
            <li>Suggest safe, evidence-based exercises</li>
            <li>Identify red flags that require immediate medical attention</li>
          </ul>
          
          <h4>2. Exercise Recommendations</h4>
          <ul>
            <li>Personalized exercise suggestions based on your condition</li>
            <li>Proper form cues and safety considerations</li>
            <li>Progressive exercise plans for various stages of recovery</li>
          </ul>
          
          <h4>3. Injury Prevention Tips</h4>
          <ul>
            <li>Sport-specific injury prevention strategies</li>
            <li>Workplace ergonomics advice</li>
            <li>Movement pattern corrections</li>
          </ul>
          
          <h4>4. Educational Resources</h4>
          <ul>
            <li>Clear explanations of various conditions</li>
            <li>Understanding of healing timelines</li>
            <li>Self-management strategies</li>
          </ul>
          
          <h3>How It Works</h3>
          <ol>
            <li><strong>Visit our AI Physio page</strong> - Access the advisor directly from our website</li>
            <li><strong>Ask your question</strong> - Describe your symptoms or concerns in plain language</li>
            <li><strong>Receive instant guidance</strong> - Get evidence-based recommendations tailored to your query</li>
            <li><strong>Follow up if needed</strong> - Book a consultation for hands-on assessment and treatment</li>
          </ol>
          
          <h3>Important: When to See a Physiotherapist</h3>
          <p>While our AI advisor is incredibly helpful, it&apos;s important to remember that it <strong>complements, not replaces</strong>, professional care. You should always book an in-person assessment for:</p>
          <ul>
            <li>Severe or worsening pain</li>
            <li>Recent injuries or trauma</li>
            <li>Symptoms that don&apos;t improve with conservative care</li>
            <li>When you need hands-on treatment techniques</li>
            <li>Post-surgical rehabilitation</li>
            <li>Complex movement disorders</li>
          </ul>
          
          <h3>The Technology Behind It</h3>
          <p>Our AI advisor is powered by advanced language models trained on physiotherapy knowledge, including:</p>
          <ul>
            <li>Evidence-based treatment protocols</li>
            <li>Current best practices in rehabilitation</li>
            <li>Safety guidelines and contraindications</li>
            <li>My own clinical experience and approach</li>
          </ul>
          
          <h3>Privacy & Security</h3>
          <p>Your conversations with the AI advisor are:</p>
          <ul>
            <li>Completely confidential</li>
            <li>Not stored or shared</li>
            <li>Protected by industry-standard encryption</li>
            <li>Compliant with healthcare privacy regulations</li>
          </ul>
          
          <h3>Try It Today!</h3>
          <p>Ready to experience the future of physiotherapy consultation? <Link href="/ai-physio">Visit our AI Physio Advisor</Link> and get instant guidance for your movement and pain concerns.</p>
          <p>Remember, while AI can provide valuable guidance, nothing replaces the expertise of hands-on assessment and treatment. If you need personalized care, <a href="https://endorphinshealth.janeapp.com/#/staff_member/42" target="_blank" rel="noopener noreferrer">book your consultation</a> today.</p>
          
          <h3>Looking Forward</h3>
          <p>This is just the beginning. We&apos;re continuously improving the AI advisor based on user feedback and the latest research. Future updates will include:</p>
          <ul>
            <li>Visual exercise demonstrations</li>
            <li>Progress tracking features</li>
            <li>Integration with wearable devices</li>
            <li>Multi-language support</li>
          </ul>
          <p>Have questions or feedback about our AI advisor? I&apos;d love to hear from you!</p>
          <p><em>Stay moving, stay healthy!</em></p>
          <p><strong>Kareem Hassanein, PT</strong><br />
          <em>CAMPT Level 2 Certified Physiotherapist</em></p>
        </>
      ),
    };
  }
  return null; // Post not found
};

// Force static generation for better performance
export const dynamic = 'force-static';

// In Next.js 15, use plain functions without explicit type annotations
export default function Page(props: any) {
  const slug = props.params.slug;
  const post = getPostData(slug);
  
  // Determine the image path - use slug-specific image if it exists, otherwise fallback
  const imagePath = `/images/blog/${slug}.jpg`;
  const fallbackImagePath = '/images/blog/post-placeholder.jpg';

  if (!post) {
    return <div className="container mx-auto px-4 py-16 md:py-24 text-center text-primary-500 bg-neutral-50 flex-grow">Post not found.</div>;
  }

  return (
    <div className="bg-neutral-50 text-primary-700 flex-grow">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-block text-accent hover:text-accent-dark mb-6 group">
             &larr; <span className="group-hover:underline">Back to Blog</span>
          </Link>
          
          <div className="mb-8 aspect-video bg-primary-100 rounded-lg flex items-center justify-center text-primary-400 relative overflow-hidden">
            <ClientImage 
              src={imageExists(slug) ? imagePath : fallbackImagePath}
              alt={`${post.title} - Featured Image`} 
              fill
              className="object-cover"
              priority
             /> 
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-700 mb-4">
            {post.title}
          </h1>
          
          <div className="mb-8 text-sm text-primary-500">Published on [Date Placeholder]</div>
          
          <div className="prose prose-lg max-w-none 
                        prose-p:text-primary-700 prose-headings:text-primary-700 
                        prose-strong:text-primary-800 prose-a:text-accent hover:prose-a:text-accent-dark
                        prose-li:text-primary-700 prose-ul:list-disc prose-ul:marker:text-accent">
            {post.content}
          </div>

          <div className="mt-12 pt-8 border-t border-primary-200">
            <p className="text-primary-600 mb-4">Struggling with persistent back pain? Let&apos;s find the root cause together.</p>
            <Link href="/#contact" className="btn btn-primary">
              Book an Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Use simple typing for metadata functions as well
export function generateMetadata(props: any): Metadata {
  const post = getPostData(props.params.slug);
  const slug = props.params.slug;
  
  if (!post) {
    return {
      title: 'Post Not Found - Kareem Hassanein Physiotherapy'
    };
  }
  
  // Create a description based on the post content
  const getPostDescription = (slug: string) => {
    switch (slug) {
      case 'understanding-low-back-pain':
        return 'Discover why low back pain keeps returning and learn evidence-based strategies to address root causes for lasting relief. Expert physiotherapy insights from Burlington.';
      case 'rotator-cuff-exercises':
        return 'Safe, effective rotator cuff exercises to start your recovery. Learn proper techniques and when to seek professional physiotherapy care in Burlington.';
      case 'first-physio-visit-expectations':
        return 'Complete guide to your first physiotherapy appointment. Learn what to expect, how to prepare, and maximize your recovery from day one.';
      case 'ai-physiotherapy-advisor-launch':
        return 'Introducing our revolutionary AI Physiotherapy Advisor - get instant, evidence-based guidance 24/7 for your movement and pain concerns.';
      default:
        return `Expert physiotherapy insights and guidance from Kareem Hassanein. Read about ${post.title} and improve your movement health.`;
    }
  };
  
  const description = getPostDescription(slug);
  const imageUrl = imageExists(slug) ? `/images/blog/${slug}.jpg` : '/images/blog/post-placeholder.jpg';
  
  return {
    title: `${post.title} | Physiotherapy Blog`,
    description: description,
    keywords: [
      'physiotherapy blog',
      'Burlington physiotherapy',
      'back pain treatment',
      'sports injury recovery',
      'manual therapy',
      'exercise therapy',
      'physiotherapy tips',
      'Kareem Hassanein',
      'evidence-based physiotherapy'
    ],
    authors: [{ name: 'Kareem Hassanein', url: 'https://www.kinetikarephysio.com/about' }],
    metadataBase: new URL('https://www.kinetikarephysio.com'),
    openGraph: {
      title: post.title,
      description: description,
      url: `/blog/${slug}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: new Date().toISOString(),
      authors: ['Kareem Hassanein'],
      section: 'Physiotherapy',
      tags: ['physiotherapy', 'health', 'wellness', 'Burlington', 'treatment'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: [imageUrl],
      creator: '@kinetikarephysio',
    },
    alternates: {
      canonical: `https://www.kinetikarephysio.com/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Static params generator
export function generateStaticParams() {
  return [
    { slug: 'understanding-low-back-pain' },
    { slug: 'rotator-cuff-exercises' },
    { slug: 'first-physio-visit-expectations' },
    { slug: 'ai-physiotherapy-advisor-launch' }
  ];
} 