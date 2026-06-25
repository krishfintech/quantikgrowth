import React from 'react';
import { motion } from 'motion/react';
import { useFadeUpVariants, useStaggerVariants, viewportOnce } from './motion';

export interface ServiceItem {
  numeral: string;
  title: string;
  body: string;
  pilotLabel?: string;
}

interface ServiceTrioProps {
  items: ServiceItem[];
  className?: string;
}

export const ServiceTrio = ({ items, className = '' }: ServiceTrioProps) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants();

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-3 border-t border-line ${className}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="pt-10 pb-12 px-0 md:px-[34px] border-t border-line first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 md:first:pl-0 md:last:pr-0"
        >
          <div className="font-display italic text-[15px] text-brand mb-[18px]">{item.numeral}</div>
          <h3 className="font-display font-medium text-[1.4rem] leading-tight tracking-[-0.01em] mb-3.5">
            {item.title}
          </h3>
          <p className="text-[16px] text-ink-soft leading-relaxed">{item.body}</p>
          {item.pilotLabel && (
            <span className="inline-block mt-4 text-[13px] text-brand bg-brand-tint px-[11px] py-1 rounded-full">
              {item.pilotLabel}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
