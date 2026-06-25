import React from 'react';
import { motion } from 'motion/react';
import { arrowHoverVariants, useFadeUpVariants, useStaggerVariants, viewportOnce } from './motion';

export interface WorkItem {
  index: string;
  company: string;
  thesis: string;
  sector: string;
  year: string;
  href?: string;
}

interface WorkLedgerProps {
  items: WorkItem[];
  className?: string;
}

const ROW_CLASSES =
  'group block py-[30px] border-b border-line cursor-pointer transition-colors duration-200 hover:bg-paper-soft';

const WorkRow = ({ item }: { item: WorkItem }) => {
  const content = (
    <>
      {/* Mobile layout */}
      <div className="flex items-start justify-between gap-3 md:hidden px-1.5">
        <span className="font-display italic text-[16px] text-ink-soft shrink-0">{item.index}</span>
        <span className="font-display text-[1.3rem] tracking-[-0.01em] flex-1">{item.company}</span>
        <motion.span variants={arrowHoverVariants(4)} transition={{ duration: 0.2, ease: 'easeOut' }} className="text-brand shrink-0">
          →
        </motion.span>
      </div>
      <div className="md:hidden px-1.5 mt-2 pl-[34px]">
        <p className="text-[15.5px] text-ink-soft leading-[1.45]">{item.thesis}</p>
        <p className="text-[13.5px] text-ink-soft mt-1.5">
          {item.sector} · {item.year}
        </p>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[46px_1fr_1.4fr_130px_40px] gap-x-5 items-center px-1.5">
        <span className="font-display italic text-[18px] text-ink-soft">{item.index}</span>
        <span className="font-display text-[1.55rem] tracking-[-0.01em]">{item.company}</span>
        <span className="text-[15.5px] text-ink-soft leading-[1.45]">{item.thesis}</span>
        <span className="text-[13.5px] text-ink-soft text-right">
          {item.sector}
          <br />
          {item.year}
        </span>
        <motion.span
          variants={arrowHoverVariants(4)}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="justify-self-end text-brand"
        >
          →
        </motion.span>
      </div>
    </>
  );

  if (item.href) {
    return (
      <motion.a href={item.href} initial="rest" whileHover="hover" animate="rest" className={ROW_CLASSES}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className={ROW_CLASSES}>
      {content}
    </motion.div>
  );
};

export const WorkLedger = ({ items, className = '' }: WorkLedgerProps) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div
      className={`border-t border-ink ${className}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {items.map((item) => (
        <motion.div key={item.company} variants={fadeUp}>
          <WorkRow item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};
