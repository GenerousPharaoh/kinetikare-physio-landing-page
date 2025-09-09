import React from 'react';

interface OverviewSectionProps {
  title: string;
  content: string;
  conditionName?: string;
}

export default function OverviewSection({ title, content, conditionName }: OverviewSectionProps) {
  // Split content into paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  // Identify key sentences (first sentence of each paragraph and sentences with important keywords)
  const getFormattedParagraph = (paragraph: string, index: number) => {
    const sentences = paragraph.split('. ').filter(s => s.trim());
    
    // For the first paragraph, make the first sentence slightly larger
    if (index === 0 && sentences.length > 0) {
      const firstSentence = sentences[0] + (sentences[0].endsWith('.') ? '' : '.');
      const rest = sentences.slice(1).join('. ') + (sentences.length > 1 ? '.' : '');
      
      return (
        <div key={index} className="space-y-2">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
            {firstSentence}
          </p>
          {rest && (
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {rest}
            </p>
          )}
        </div>
      );
    }
    
    // For middle paragraphs, add visual breathing room
    if (index > 0 && index < paragraphs.length - 1) {
      return (
        <div key={index} className="relative">
          {/* Add a subtle left border for visual hierarchy */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B08D57]/20 to-transparent rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-4">
            {paragraph}
          </p>
        </div>
      );
    }
    
    // Regular paragraphs
    return (
      <p key={index} className="text-sm md:text-base text-slate-600 leading-relaxed">
        {paragraph}
      </p>
    );
  };
  
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
        {title}
      </h2>
      
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            {getFormattedParagraph(paragraph, index)}
            
            {/* Add visual separator between major sections (every 2 paragraphs) */}
            {index > 0 && index < paragraphs.length - 1 && (index + 1) % 2 === 0 && (
              <div className="flex items-center justify-center py-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#B08D57]/40"></div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200"></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Mobile-friendly reading experience indicator */}
      <div className="mt-8 pt-4 border-t border-slate-100 md:hidden">
        <p className="text-xs text-slate-400 text-center">
          Swipe or scroll for more information
        </p>
      </div>
    </div>
  );
}