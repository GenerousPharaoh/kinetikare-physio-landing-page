import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SplitTextProps = {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  animation?: 'fadeUp' | 'fadeIn' | 'staggered';
  once?: boolean;
  threshold?: number;
};

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  as: Component = 'span',
  animation = 'fadeUp',
  once = true,
  threshold = 0.1,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  // Define animation variants
  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === 'fadeUp' ? 20 : 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * 0.04),
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Start animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Split text into characters
  const words = children.split(' ');

  return (
    <Component className={`inline-block ${className}`} ref={ref}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              className="inline-block"
              initial="hidden"
              animate={controls}
              variants={letterVariants}
              custom={wordIndex * 3 + charIndex}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
};

export default SplitText; 