import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useAudience, type Audience } from '../../audience';

interface Option {
  value: Audience;
  short: string;
  full: string;
  aria: string;
}

const OPTIONS: Option[] = [
  { value: 'venture', short: 'Venture', full: 'Venture firms', aria: 'For venture & PE firms' },
  { value: 'portfolio', short: 'Portfolio', full: 'Portfolio managers', aria: 'For portfolio managers (PMS)' },
];

interface AudienceSwitcherProps {
  /** compact = nav bar; full = wider labels for the mobile menu. */
  variant?: 'compact' | 'full';
  /** Unique id so the sliding-pill layout animation doesn't collide across instances. */
  idKey?: string;
  className?: string;
}

export const AudienceSwitcher = ({ variant = 'compact', idKey = 'aud', className = '' }: AudienceSwitcherProps) => {
  const { audience, switchAudience } = useAudience();
  const reduceMotion = useReducedMotion();
  const full = variant === 'full';

  return (
    <div
      role="group"
      aria-label="Choose what you're here for"
      className={`inline-flex w-full items-center rounded-full border border-line-strong bg-paper p-1 ${className}`}
    >
      {OPTIONS.map((o) => {
        const active = audience === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            aria-label={o.aria}
            title={o.aria}
            onClick={() => switchAudience(o.value)}
            className={`relative flex-1 rounded-full text-center font-medium transition-colors duration-200 ${
              full ? 'px-4 py-2.5 text-[14px]' : 'px-3.5 py-1.5 text-[13px]'
            } ${active ? 'text-white' : 'text-ink-soft hover:text-ink'}`}
          >
            {active && (
              <motion.span
                layoutId={`${idKey}-pill`}
                className="absolute inset-0 rounded-full bg-brand"
                transition={
                  reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }
                }
              />
            )}
            <span className="relative z-10">{full ? o.full : o.short}</span>
          </button>
        );
      })}
    </div>
  );
};
