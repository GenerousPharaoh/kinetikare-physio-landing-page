'use client';

import React, { ChangeEvent } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onClear,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
        <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 group-hover:text-accent group-focus-within:text-accent transition-colors duration-200" />
      </div>
      
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full bg-white border border-neutral-300 rounded-full py-3.5 pl-12 pr-12 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent shadow-sm group-hover:shadow-md transition-all duration-200"
      />
      
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 mr-3 flex items-center justify-center h-8 w-8 my-auto rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
          aria-label="Clear search"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
      
      {/* Subtle background glow for enhanced visual appeal */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-full bg-accent/5 blur-md -z-10"></div>
      </div>
    </div>
  );
};

export default SearchBar; 