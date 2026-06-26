import React, { useState } from 'react';
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

  return (
    <header className={`sticky top-0 z-50 bg-paper/[86%] backdrop-blur-[8px] border-b border-line ${className}`}>
      <div className="max-w-[1120px] mx-auto px-8 flex items-center justify-between h-[74px]">
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

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="inline-flex text-[15px] text-brand border border-line-strong rounded-full px-[18px] py-[9px] transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
          >
            {ctaLabel}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 -mr-2 items-center justify-center text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-line bg-paper"
          >
            <div className="max-w-[1120px] mx-auto px-8 py-4 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[17px] text-ink border-b border-line last:border-b-0 hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
