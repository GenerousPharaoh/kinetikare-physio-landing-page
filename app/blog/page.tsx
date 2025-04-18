import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Placeholder data - replace with actual data fetching later
const posts = [
  {
    slug: 'understanding-low-back-pain',
    title: "Understanding Low Back Pain: Why It Keeps Coming Back and What You Can Actually Do About It",
    excerpt: "If low back pain keeps returning, you're probably frustrated and tired of temporary fixes. Trust me—you're not alone... Learn how to address the real causes instead of chasing symptoms.",
  },
  {
    slug: 'rotator-cuff-exercises',
    title: "Rotator Cuff Injury? Practical Exercises to Start Your Recovery Safely (Consult First!)",
    excerpt: "Rotator cuff injuries are incredibly common. Learn two safe, beginner-friendly exercises to help start your recovery right... (Consultation recommended first!).",
  },
  {
    slug: 'first-physio-visit-expectations',
    title: "Your First Physiotherapy Visit: Exactly What to Expect (and How to Get the Most From It)",
    excerpt: "Feeling intimidated about your first physio appointment? Know exactly what to expect and how to prepare to maximize your recovery...",
  },
  // Add other posts here later
];

export default function BlogListPage() {
  return (
    <div className="bg-primary-900 text-neutral-200 flex-grow">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-8 text-center">
          Physiotherapy Insights Blog
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-neutral-300">
            Explore articles on injury recovery, pain management, exercises, and maintaining an active lifestyle.
          </p>
        </div>
        
        {/* Blog post list */}
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.slug} className="p-6 border border-primary-700/60 rounded-lg bg-primary-800 shadow-md hover:bg-primary-700/70 transition-colors duration-200 flex flex-col sm:flex-row gap-6 items-start">
                {/* Placeholder Image on the Left using next/image */}
                <div className="w-full sm:w-1/3 flex-shrink-0 aspect-video bg-primary-700 rounded-md flex items-center justify-center text-neutral-500 text-xs relative overflow-hidden">
                  <Image 
                     src={`https://via.placeholder.com/300x169/1A3A43/BCAD96?text=Image+Coming+Soon`} // Darker placeholder with lighter text
                     alt={`${post.title} - Placeholder Image`} 
                     fill
                     style={{ objectFit: 'cover' }}
                     sizes="(max-width: 640px) 80vw, 33vw"
                    />
                </div>
                {/* Text Content on the Right - Adjust text colors */}
                <div className="flex-grow">
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h2>
                  {/* Adjust metadata color */}
                  <div className="text-sm text-neutral-400 mb-3">[Date] - [Category Placeholder]</div>
                  {/* Adjust excerpt color */}
                  <p className="text-neutral-300 mb-4 line-clamp-2 sm:line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  {/* Adjust link color */}
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-accent hover:text-accent-light group text-sm">
                    Read More 
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 border border-dashed border-primary-700/60 rounded-lg">
              <p className="text-neutral-400">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 