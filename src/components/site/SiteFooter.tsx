import React from 'react';
import { motion } from 'motion/react';
import { useFadeUpVariants, viewportOnce } from './motion';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface SiteFooterProps {
  tagline: string;
  columns: FooterColumn[];
  legalLeft: string;
  legalRight: string;
  className?: string;
}

export const SiteFooter = ({ tagline, columns, legalLeft, legalRight, className = '' }: SiteFooterProps) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.footer
      className={`border-t border-line pt-16 pb-14 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap items-start justify-between gap-10">
        <div>
          <a href="#" className="font-sans font-semibold text-[21px] tracking-[-0.01em] text-ink">
            Quantik<span className="text-brand">growth</span>
          </a>
          <p className="mt-3.5 text-[15px] text-ink-soft max-w-[30ch]">{tagline}</p>
        </div>

        <div className="flex flex-wrap gap-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[13px] text-ink-soft font-medium tracking-[0.02em] mb-4">{col.heading}</h4>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] text-ink mb-2.5 hover:text-brand transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-8 mt-12 pt-6 border-t border-line flex flex-wrap justify-between gap-5 text-[13.5px] text-ink-soft">
        <span>{legalLeft}</span>
        <span>{legalRight}</span>
      </div>
    </motion.footer>
  );
};
