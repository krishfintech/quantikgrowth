import React from 'react';

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

export const Nav = ({ links, ctaLabel, ctaHref, onCtaClick, className = '' }: NavProps) => (
  <header
    className={`sticky top-0 z-50 bg-paper/[86%] backdrop-blur-[8px] border-b border-line ${className}`}
  >
    <div className="max-w-[1120px] mx-auto px-8 flex items-center justify-between h-[74px]">
      <a href="#" className="font-sans font-semibold text-[19px] tracking-[-0.01em] text-ink">
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

      <a
        href={ctaHref}
        onClick={onCtaClick}
        className="inline-flex text-[15px] text-brand border border-line-strong rounded-full px-[18px] py-[9px] transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
      >
        {ctaLabel}
      </a>
    </div>
  </header>
);
