"use client";

import { getScrollBehavior } from '@/lib/scroll';
import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/components/faq/Faq.module.css';

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
  category?: string; // Optional property for search results
  id?: string; // Optional ID for direct linking
}

interface FAQAccordionProps {
  items: FaqItem[];
  defaultOpen?: number | null;
}

// Function to decode HTML entities to their respective characters
const decodeHtmlEntities = (text: string): string => {
  if (typeof window === 'undefined') {
    return text;
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const LINK_RE = /<a\s+href="([^"]*)"[^>]*className="([^"]*)"[^>]*>([^<]*)<\/a>/gi;

// Bold (**text**) and inline <a> tags inside a plain-text answer.
const parseInline = (text: string, keyBase: string): React.ReactNode => {
  const out: React.ReactNode[] = [];
  text.split(/(\*\*[^*]+\*\*)/g).forEach((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      out.push(<strong key={`${keyBase}-b${i}`}>{part.slice(2, -2)}</strong>);
      return;
    }
    let last = 0;
    let match: RegExpExecArray | null;
    LINK_RE.lastIndex = 0;
    while ((match = LINK_RE.exec(part)) !== null) {
      if (match.index > last) out.push(part.substring(last, match.index));
      out.push(
        <Link key={`${keyBase}-l${i}-${match.index}`} href={match[1]} className={styles.link}>
          {match[3]}
        </Link>
      );
      last = match.index + match[0].length;
    }
    if (last < part.length) out.push(part.substring(last));
  });
  return out;
};

const KEY_TERMS = ["Conversation:", "Assessment:", "Plan:", "I Reassess Thoroughly:", "I Adjust the Strategy:", "I Collaborate and Advocate:", "Listening Attentively:", "Communicating Clearly & Honestly:", "Empowering You:", "Dedicated Time & Attention:", "Looking Holistically:", "Emphasis on Education and Active Participation:", "Partnership in Goal Setting:"];

// Answers written as JSX render as they are; plain-text answers are split
// into paragraphs and lists.
const formatAnswer = (answer: string | React.ReactNode) => {
  if (typeof answer !== 'string') {
    return answer;
  }

  return answer.split('\n\n').map((raw, i) => {
    const paragraph = decodeHtmlEntities(raw);
    const key = `p${i}`;

    if (paragraph.includes('- ')) {
      const listItems = paragraph.split('- ').filter((item) => item.trim().length > 0);
      const beforeList = paragraph.split('- ')[0].trim();
      return (
        <div key={key}>
          {beforeList && <p>{parseInline(beforeList, `${key}-intro`)}</p>}
          <ul className={styles.bullets}>
            {listItems.map((item, j) => (
              <li key={j}>{parseInline(item, `${key}-${j}`)}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (paragraph.trim().startsWith('Yes')) {
      return (
        <p key={key} className={styles.yes}>
          <span className={styles.lead}>Yes. </span>
          {parseInline(paragraph.substring(4), key)}
        </p>
      );
    }

    const term = KEY_TERMS.find((t) => paragraph.includes(t));
    if (term) {
      const parts = paragraph.split(term);
      return (
        <p key={key}>
          {parts.map((part, j) => (
            <React.Fragment key={j}>
              {j > 0 && <span className={styles.lead}>{term} </span>}
              {part && parseInline(part, `${key}-${j}`)}
            </React.Fragment>
          ))}
        </p>
      );
    }

    const sentences = paragraph.split('. ');
    if (sentences.length > 1 && sentences[0].length < 60) {
      return (
        <p key={key}>
          <span className={styles.lead}>{sentences[0]}. </span>
          {parseInline(sentences.slice(1).join('. '), key)}
        </p>
      );
    }

    return <p key={key}>{parseInline(paragraph, key)}</p>;
  });
};

/**
 * One question: a native <details> so it opens without JavaScript and in
 * the browser's find-in-page. With JavaScript the click is taken over so
 * the answer's height can ease open and closed (the `open` attribute is
 * removed only after the closing ease).
 */
function Question({ item, initiallyOpen }: { item: FaqItem; initiallyOpen: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(initiallyOpen);
  const openRef = useRef(open);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // A direct link to this question (#id) opens it and brings it into view.
  useEffect(() => {
    if (!item.id || window.location.hash !== `#${item.id}`) return;
    const d = ref.current;
    if (!d) return;
    d.open = true;
    setOpen(true);
    timer.current = window.setTimeout(() => {
      const top = d.getBoundingClientRect().top;
      const clearance = (document.querySelector('header')?.getBoundingClientRect().height ?? 80) + 16;
      window.scrollTo({ top: Math.max(0, window.scrollY + top - clearance), behavior: getScrollBehavior() });
    }, 480);
  }, [item.id]);

  // Opening an answer already on screen does not move the page; only a
  // question that has slipped under the fixed header is brought back.
  const keepVisible = () => {
    const d = ref.current;
    if (!d || !openRef.current) return;
    const top = d.getBoundingClientRect().top;
    const clearance = (document.querySelector('header')?.getBoundingClientRect().height ?? 80) + 16;
    if (top < clearance) {
      window.scrollTo({ top: Math.max(0, window.scrollY + top - clearance), behavior: getScrollBehavior() });
    }
  };

  const onSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const d = ref.current;
    if (!d) return;
    window.clearTimeout(timer.current);
    if (!openRef.current) {
      d.open = true;
      // Commit the closed height before the row eases open.
      void d.offsetHeight;
      openRef.current = true;
      setOpen(true);
      timer.current = window.setTimeout(keepVisible, 470);
    } else {
      openRef.current = false;
      setOpen(false);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      timer.current = window.setTimeout(() => {
        if (!openRef.current && ref.current) ref.current.open = false;
      }, reduce ? 0 : 450);
    }
  };

  // The browser can open a closed row itself (find in page).
  const onToggle = () => {
    const d = ref.current;
    if (d?.open && !openRef.current) {
      openRef.current = true;
      setOpen(true);
    }
  };

  return (
    <details
      ref={ref}
      id={item.id}
      className={styles.discItem}
      data-open={open ? 'true' : 'false'}
      open={initiallyOpen || undefined}
      onToggle={onToggle}
    >
      <summary onClick={onSummaryClick}>
        <h3 className={styles.question}>{decodeHtmlEntities(item.question)}</h3>
        <PlusIcon aria-hidden="true" />
      </summary>
      <div className={styles.discBody}>
        <div>
          <div className={styles.answer}>{formatAnswer(item.answer)}</div>
        </div>
      </div>
    </details>
  );
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpen = null }) => {
  // Set once hydrated: the eased height applies only when the script that
  // drives it is running.
  const [enhanced, setEnhanced] = useState(false);
  useEffect(() => setEnhanced(true), []);

  return (
    <div className={styles.disc} data-enhanced={enhanced ? '' : undefined}>
      {items.map((item, index) => (
        <Question key={`${index}-${item.question}`} item={item} initiallyOpen={defaultOpen === index} />
      ))}
    </div>
  );
};

export default FAQAccordion;
