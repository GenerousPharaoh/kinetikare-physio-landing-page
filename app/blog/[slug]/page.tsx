import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

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
  }
  return null; // Post not found
};

// Use function declaration without type annotations - let Next.js infer them
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostData(slug);

  if (!post) {
    return <div className="container mx-auto px-4 py-16 md:py-24 text-center text-neutral-400 bg-primary-900 flex-grow">Post not found.</div>;
  }

  return (
    <div className="bg-primary-900 text-neutral-200 flex-grow">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-block text-accent hover:text-accent-light mb-6 group">
             &larr; <span className="group-hover:underline">Back to Blog</span>
          </Link>
          
          <div className="mb-8 aspect-video bg-primary-800 rounded-lg flex items-center justify-center text-neutral-500 relative overflow-hidden">
            <Image 
              src={`https://via.placeholder.com/800x450/1A3A43/BCAD96?text=Featured+Image`}
              alt={`${post.title} - Featured Image Placeholder`} 
              fill
              style={{ objectFit: 'cover' }}
              priority
             /> 
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="mb-8 text-sm text-neutral-400">Published on [Date Placeholder]</div>
          
          <div className="prose prose-lg max-w-none 
                        prose-p:text-neutral-300 prose-headings:text-white 
                        prose-strong:text-white prose-a:text-accent hover:prose-a:text-accent-light
                        prose-li:text-neutral-300 prose-ul:list-disc prose-ul:marker:text-accent">
            {post.content}
          </div>

          <div className="mt-12 pt-8 border-t border-primary-700/60">
            <p className="text-neutral-300 mb-4">Struggling with persistent back pain? Let&apos;s find the root cause together.</p>
            <Link href="/#contact" className="btn btn-primary">
              Book an Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata with simpler typing
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostData(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Kareem Hassanein Physiotherapy'
    };
  }
  
  return {
    title: `${post.title} - Kareem Hassanein Physiotherapy`,
    description: `Read more about ${post.title} and get expert physiotherapy insights.`
  };
}

// Static params generator
export function generateStaticParams() {
  return [
    { slug: 'understanding-low-back-pain' },
    { slug: 'rotator-cuff-exercises' },
    { slug: 'first-physio-visit-expectations' }
  ];
} 