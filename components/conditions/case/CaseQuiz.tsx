'use client';

import dynamic from 'next/dynamic';
import type { PatternMatcherProps } from '../PatternMatcher';

/** The pattern quiz, loaded on the client only, with a reserved height so nothing jumps. */
const PatternMatcher = dynamic(() => import('../PatternMatcher'), {
  ssr: false,
  loading: () => <div style={{ minHeight: 420 }} aria-hidden="true" />,
});

export default function CaseQuiz(props: PatternMatcherProps) {
  return <PatternMatcher {...props} />;
}
