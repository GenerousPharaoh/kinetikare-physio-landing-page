'use client';

import dynamic from 'next/dynamic';
import type { PatternMatcherProps } from '../PatternMatcher';

/**
 * The pattern quiz, loaded on the client only (it is interactive from the
 * first tap and its answers never prerender). A reserved height keeps the
 * page from jumping when it arrives.
 */
const PatternMatcher = dynamic(() => import('../PatternMatcher'), {
  ssr: false,
  loading: () => <div style={{ minHeight: 420 }} aria-hidden="true" />,
});

export default function AtlasQuiz(props: PatternMatcherProps) {
  return <PatternMatcher {...props} />;
}
