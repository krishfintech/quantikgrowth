import React from 'react';
import { motion } from 'motion/react';
import { useFadeUpVariants, viewportOnce } from './motion';
import { useAudience } from '../../audience';

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
  id?: string;
  className?: string;
}

export const SiteFooter = ({ tagline, columns, legalLeft, legalRight, id, className = '' }: SiteFooterProps) => {
  const fadeUp = useFadeUpVariants();
  const { link } = useAudience();

  return (
    <motion.footer
      id={id}
      className={`border-t border-line pt-16 pb-14 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="max-w-[1360px] mx-auto px-8 lg:px-12 flex flex-wrap items-start justify-between gap-10">
        <div>
          <a href={link('/')} className="font-sans font-semibold text-[21px] tracking-[-0.01em] text-ink">
            Quantik<span className="text-brand">growth</span>
          </a>
          <p className="mt-3.5 text-[15px] text-ink-soft max-w-[30ch]">{tagline}</p>
        </div>

        <div className="flex flex-wrap gap-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-[13px] text-ink-soft font-medium tracking-[0.02em] mb-4">{col.heading}</h2>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={link(l.href)}
                  className="block py-1.5 text-[15px] text-ink hover:text-brand transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-8 lg:px-12 mt-12 pt-6 border-t border-line flex flex-wrap justify-between gap-5 text-[13.5px] text-ink-soft">
        <span>{legalLeft}</span>
        <span>{legalRight}</span>
      </div>
    </motion.footer>
  );
};
