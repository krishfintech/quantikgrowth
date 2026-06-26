import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  onCtaClick?: () => void;
  className?: string;
}

export const Nav = ({ links, ctaLabel, ctaHref, onCtaClick, className = '' }: NavProps) => {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Lock background scroll while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 bg-paper/[86%] backdrop-blur-[8px] border-b border-line ${className}`}>
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[68px] sm:h-[74px]">
        <a href="/" className="font-sans font-semibold text-[19px] tracking-[-0.01em] text-ink">
          Quantik<span className="text-brand">growth</span>
        </a>

        <nav className="hidden md:flex items-center gap-[34px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] text-ink-soft hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Header CTA pill — hidden on the smallest screens; the sticky bottom
              bar + menu carry the action there. */}
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="hidden sm:inline-flex text-[15px] text-brand border border-line-strong rounded-full px-[18px] py-[10px] transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
          >
            {ctaLabel}
          </a>

          {/* Mobile menu toggle — 44x44 tap target */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-11 w-11 -mr-2 items-center justify-center text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-paper flex flex-col"
          >
            {/* menu header */}
            <div className="flex items-center justify-between h-[68px] px-6 border-b border-line">
              <a href="/" onClick={() => setOpen(false)} className="font-sans font-semibold text-[19px] tracking-[-0.01em] text-ink">
                Quantik<span className="text-brand">growth</span>
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 -mr-2 items-center justify-center text-ink"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* links */}
            <nav className="flex flex-col px-6 pt-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.08 + i * 0.05, duration: 0.3 }}
                  className="flex items-center justify-between py-4 border-b border-line font-display text-[1.7rem] tracking-[-0.01em] text-ink"
                >
                  {link.label}
                  <span className="text-brand text-[1.1rem]" aria-hidden>→</span>
                </motion.a>
              ))}
            </nav>

            {/* booking CTA pinned to the bottom, safe-area aware */}
            <div className="mt-auto px-6 pt-6 pb-[max(24px,env(safe-area-inset-bottom))]">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-brand px-6 text-[16px] font-medium text-white transition-colors active:bg-brand-deep"
              >
                Book a call <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:krish@quantikgrowth.in"
                className="mt-4 block text-center text-[15px] text-ink-soft"
              >
                krish@quantikgrowth.in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
