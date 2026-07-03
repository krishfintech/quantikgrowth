import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './motion';

interface MaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount (heroes) or when scrolled into view (sections). */
  trigger?: 'mount' | 'inView';
}

/**
 * Cinematic line/clip reveal: the content rises into place from behind a mask.
 * Transform/opacity only (60fps). Under prefers-reduced-motion it renders
 * statically — and because the text is real DOM, it stays crawlable either way.
 */
export const MaskReveal = ({ children, className = '', delay = 0, trigger = 'mount' }: MaskRevealProps) => {
  const reduceMotion = useReducedMotion();
  const inner = {
    initial: reduceMotion ? false : { y: '115%' },
    animate: { y: '0%' },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE, delay },
  };

  return (
    <span className={`block overflow-hidden pb-[0.12em] ${className}`}>
      {trigger === 'mount' ? (
        <motion.span className="block will-change-transform" initial={inner.initial} animate={inner.animate} transition={inner.transition}>
          {children}
        </motion.span>
      ) : (
        <motion.span
          className="block will-change-transform"
          initial={inner.initial}
          whileInView={inner.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={inner.transition}
        >
          {children}
        </motion.span>
      )}
    </span>
  );
};
