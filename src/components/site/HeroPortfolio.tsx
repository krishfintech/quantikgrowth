import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './motion';

/**
 * Portfolio (PMS) hero animation — a different metaphor entirely: a firm rising
 * from invisible to inevitable. An AUM/standing line lifts past a perceived
 * ceiling as trust signals lock into place around it.
 *
 * Transform/opacity + SVG pathLength only → 60fps. Under prefers-reduced-motion
 * it renders the finished chart, static.
 */

const CEILING_Y = 92;
const LINE_PATH = 'M 12 190 C 70 184, 104 176, 146 156 S 228 96, 262 62 C 284 40, 300 32, 312 24';

const SIGNALS = [
  { label: 'SEBI-registered', delay: 1.2 },
  { label: 'Found first', delay: 1.45 },
  { label: 'Cited by AI', delay: 1.7 },
];

export const HeroPortfolio = ({ className = '' }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <div className={className}>
      <div className="relative aspect-[4/3.05] w-full rounded-[18px] border border-line bg-paper-soft p-4 shadow-float">
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              {animate && <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-brand/60" />}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">Your standing</span>
          </div>
          <span className="font-display text-[12px] italic text-ink-soft">i</span>
        </div>

        <div className="relative h-[calc(100%-58px)] overflow-hidden rounded-[10px] border border-line bg-paper">
          <svg viewBox="0 0 320 210" className="h-full w-full" fill="none" aria-hidden preserveAspectRatio="none">
            <defs>
              <linearGradient id="aum-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* perceived ceiling */}
            <motion.line
              x1="0"
              y1={CEILING_Y}
              x2="320"
              y2={CEILING_Y}
              stroke="var(--color-line-strong)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              initial={animate ? { opacity: 0 } : false}
              animate={animate ? { opacity: 1 } : {}}
              transition={animate ? { duration: 0.5, delay: 0.2 } : undefined}
            />

            {/* area under the growth line */}
            <motion.path
              d={`${LINE_PATH} L 312 210 L 12 210 Z`}
              fill="url(#aum-fill)"
              initial={animate ? { opacity: 0 } : false}
              animate={animate ? { opacity: 1 } : {}}
              transition={animate ? { duration: 0.8, delay: 1.1 } : undefined}
            />

            {/* growth line breaking past the ceiling */}
            <motion.path
              d={LINE_PATH}
              stroke="var(--color-brand)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={animate ? { pathLength: 0 } : false}
              animate={animate ? { pathLength: 1 } : {}}
              transition={animate ? { duration: 1.5, delay: 0.4, ease: EASE } : undefined}
            />

            {/* endpoint */}
            <motion.circle
              cx="312"
              cy="24"
              r="4.5"
              fill="var(--color-brand)"
              initial={animate ? { scale: 0 } : false}
              animate={animate ? { scale: 1 } : {}}
              style={{ transformOrigin: '312px 24px' }}
              transition={animate ? { duration: 0.4, delay: 1.9, ease: EASE } : undefined}
            />
          </svg>

          {/* ceiling label */}
          <motion.span
            className="absolute left-3 text-[9px] font-medium uppercase tracking-[0.16em] text-ink-soft/70"
            style={{ top: `calc(${(CEILING_Y / 210) * 100}% - 14px)` }}
            initial={animate ? { opacity: 0 } : false}
            animate={animate ? { opacity: 1 } : {}}
            transition={animate ? { duration: 0.5, delay: 0.5 } : undefined}
          >
            Perceived ceiling
          </motion.span>

          {/* trust signals locking in */}
          <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
            {SIGNALS.map((s) => (
              <motion.span
                key={s.label}
                className="inline-flex items-center gap-1 rounded-full border border-brand/25 bg-brand-tint px-2.5 py-1 text-[10px] font-medium text-brand-deep"
                initial={animate ? { opacity: 0, y: 8 } : false}
                animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={animate ? { duration: 0.4, delay: s.delay, ease: EASE } : undefined}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {s.label}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-3 px-1">
          <span className="text-[11px] leading-tight text-ink-soft">From invisible to inevitable, as trust locks in.</span>
        </div>
      </div>
    </div>
  );
};
