'use client';

import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function MedicalDisclaimer() {
  return (
    <div className="max-w-4xl mx-auto mb-8 px-4">
      <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 flex gap-3">
        <InformationCircleIcon className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-600 leading-relaxed">
          <p>
            This information is provided for educational purposes only and should not be considered medical advice.
            Always consult with a qualified healthcare professional regarding your specific condition.
            Individual results may vary based on your unique circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}
