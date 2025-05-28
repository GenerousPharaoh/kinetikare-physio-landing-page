import React from 'react';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

// Sample blog posts data - replace with API or data fetching later
const posts = [
  {
    slug: 'ai-physiotherapy-advisor-launch',
    title: 'Introducing Our AI Physiotherapy Advisor: Get Instant Guidance 24/7',
    excerpt: 'Experience the future of physiotherapy consultation with our new AI-powered advisor. Get evidence-based guidance for your pain and movement concerns anytime.',
  },
  {
    slug: 'understanding-low-back-pain',
    title: 'Understanding Low Back Pain: Why It Keeps Coming Back and What You Can Actually Do About It',
    excerpt: 'Discover the most common reasons your back pain recurs and learn practical ways to finally address the root causes for lasting relief.',
  },
  {
    slug: 'rotator-cuff-exercises',
    title: 'Rotator Cuff Injury? Practical Exercises to Start Your Recovery Safely (Consult First!)',
    excerpt: 'Learn about the essential first steps in rotator cuff rehabilitation with safe exercises to begin your recovery journey.',
  },
  {
    slug: 'first-physio-visit-expectations',
    title: 'Your First Physiotherapy Visit: Exactly What to Expect (and How to Get the Most From It)',
    excerpt: 'Prepare for your initial physiotherapy assessment with insider knowledge on maximizing your first appointment.',
  },
];

export const metadata: Metadata = {
  title: 'Physiotherapy Blog - Expert Insights for Better Movement | Kareem Hassanein',
  description: 'Read evidence-based articles about pain management, injury prevention, and recovery strategies from Burlington\'s trusted physiotherapist.',
};

export default function BlogPage() {
  return (
    <div className="flex-grow">
      <Container as="section" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-700 mb-4">
            Movement, Health & Recovery Insights
          </h1>
          <p className="text-lg text-primary-600 mb-12">
            Practical advice and evidence-based knowledge to help you move better, recover faster, and stay active longer.
          </p>

          {posts.length > 0 ? (
            <div className="space-y-12">
              {posts.map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="aspect-video relative rounded-lg overflow-hidden bg-primary-100">
                        <ClientImage
                          src={`/images/blog/blog-${post.slug}.jpg`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <h2 className="text-xl md:text-2xl font-heading font-medium text-primary-700 mb-2 group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <div className="text-sm text-primary-500 mb-3">
                          Published on [Date Placeholder]
                        </div>
                        <p className="text-primary-600">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 inline-flex items-center text-accent group-hover:underline">
                          Read more <span className="ml-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-primary-500">
              No posts available at the moment. Check back soon!
            </div>
          )}
        </div>
      </Container>
    </div>
  );
} 