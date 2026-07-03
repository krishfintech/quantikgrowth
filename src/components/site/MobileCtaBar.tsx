import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useAudience } from '../../audience';
import { EASE } from './motion';

interface MobileCtaBarProps {
  href?: string;
  label?: string;
}

/**
 * Sticky, thumb-reachable booking CTA shown only on mobile. Respects the
 * home-indicator safe area, and hides itself on the contact page (where the
 * calendar already is the action).
 */
export const MobileCtaBar = ({ href = '/contact', label = 'Book a call' }: MobileCtaBarProps) => {
  const reduceMotion = useReducedMotion();
  const { link } = useAudience();
  const onContact =
    typeof window !== 'undefined' && /\/contact\/?$/.test(window.location.pathname);
  if (onContact) return null;

  return (
    <motion.div
      initial={reduceMotion ? false : { y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
      className="lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 pt-4 pb-[max(14px,env(safe-area-inset-bottom))] bg-gradient-to-t from-paper via-paper/95 to-transparent"
    >
      <a
        href={link(href)}
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand px-6 text-[16px] font-medium text-white shadow-[0_10px_30px_-8px_rgba(15,90,57,0.5)] transition-colors active:bg-brand-deep"
      >
        {label}
        <span aria-hidden>→</span>
      </a>
    </motion.div>
  );
};
