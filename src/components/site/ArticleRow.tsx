import React from 'react';
import { motion } from 'motion/react';
import { useFadeUpVariants, useStaggerVariants, viewportOnce } from './motion';

export interface ArticleItem {
  slug: string;
  title: string;
  date: string;
  readingMinutes: number;
  excerpt: string;
  tag: string;
  audiences: ('venture' | 'portfolio')[];
}

interface ArticleRowProps {
  articles: ArticleItem[];
  className?: string;
}

export const ArticleRow = ({ articles, className = '' }: ArticleRowProps) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      {articles.map((article, i) => (
        <motion.a
          key={article.slug}
          href={`/writing/${article.slug}`}
          variants={fadeUp}
          className={`group grid grid-cols-[1fr_auto] gap-6 items-baseline py-6 border-b border-line pl-0 hover:pl-[10px] transition-[padding-left] duration-200 ${
            i === 0 ? 'border-t border-line' : ''
          }`}
        >
          <span className="font-display text-[1.45rem] font-normal tracking-[-0.005em] leading-[1.25] group-hover:text-brand transition-colors duration-200">
            {article.title}
          </span>
          <span className="text-[13.5px] text-ink-soft whitespace-nowrap">
            {article.date} · {article.readingMinutes} min read
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};
