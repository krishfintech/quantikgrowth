import React from 'react';
import { motion } from 'motion/react';

/**
 * Reusable, on-brand inline graphics for articles. All green-palette, SVG/CSS,
 * transform/opacity only, and they reveal on scroll. Each is wrapped by
 * <ArticleFigure> which adds the frame + caption.
 */

const VP = { once: true, margin: '-12% 0px' } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

export const ArticleFigure = ({ children, caption }: { children: React.ReactNode; caption?: string }) => (
  <figure className="my-11">
    <div className="rounded-[18px] border border-line bg-paper-soft p-6 sm:p-8">{children}</div>
    {caption && <figcaption className="mt-4 text-[14px] leading-[1.5] text-ink-soft">{caption}</figcaption>}
  </figure>
);

/* Two-column comparison: the old way (muted) vs the better way (brand). */
export const CompareCols = ({
  left,
  right,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}) => (
  <div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-[14px] border border-line bg-paper p-5">
      <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">{left.title}</div>
      <ul className="mt-4 space-y-3">
        {left.items.map((t) => (
          <li key={t} className="flex gap-3 text-[14.5px] leading-[1.5] text-ink-soft">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/30" />
            {t}
          </li>
        ))}
      </ul>
    </div>
    <motion.div
      className="rounded-[14px] border border-brand/25 bg-brand-tint p-5"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-brand">{right.title}</div>
      <ul className="mt-4 space-y-3">
        {right.items.map((t) => (
          <li key={t} className="flex gap-3 text-[14.5px] leading-[1.5] text-brand-deep">
            <span className="mt-[7px] text-brand" aria-hidden>→</span>
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* A strip of big, conceptual stats. */
export const StatStrip = ({ items }: { items: { value: string; label: string }[] }) => (
  <motion.div
    className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
    initial="hidden"
    whileInView="visible"
    viewport={VP}
    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
  >
    {items.map((s) => (
      <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
        <div className="font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-none tracking-[-0.01em] text-brand">{s.value}</div>
        <div className="mt-2.5 text-[13.5px] leading-snug text-ink-soft">{s.label}</div>
      </motion.div>
    ))}
  </motion.div>
);

/* A left→right (or stacked) labelled flow. */
export const FlowDiagram = ({ steps }: { steps: { label: string; sub?: string }[] }) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
    {steps.map((s, i) => (
      <React.Fragment key={s.label}>
        <motion.div
          className="flex-1 rounded-[12px] border border-line bg-paper p-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
        >
          <div className="font-display text-[1.05rem] tracking-[-0.01em] text-brand-deep">{s.label}</div>
          {s.sub && <div className="mt-1 text-[12.5px] leading-snug text-ink-soft">{s.sub}</div>}
        </motion.div>
        {i < steps.length - 1 && (
          <div className="flex items-center justify-center text-brand" aria-hidden>
            <span className="rotate-90 sm:rotate-0">→</span>
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

/* Horizontal bar chart for conceptual/illustrative comparisons. value 0–100. */
export const BarsChart = ({ title, bars }: { title?: string; bars: { label: string; value: number; highlight?: boolean }[] }) => (
  <div>
    {title && <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">{title}</div>}
    <div className="space-y-4">
      {bars.map((b, i) => (
        <div key={b.label} className="grid grid-cols-[minmax(0,1fr)] gap-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <span className={`text-[14px] ${b.highlight ? 'font-medium text-brand-deep' : 'text-ink-soft'}`}>{b.label}</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
            <motion.div
              className={`h-full origin-left rounded-full ${b.highlight ? 'bg-brand' : 'bg-line-strong'}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: b.value / 100 }}
              viewport={VP}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* A highlighted takeaway / soft CTA callout. */
export const Callout = ({ children }: { children: React.ReactNode }) => (
  <motion.aside
    className="my-10 rounded-[16px] border border-brand/20 bg-brand-tint px-6 py-5"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VP}
    transition={{ duration: 0.5, ease: EASE }}
  >
    <div className="text-[15.5px] leading-[1.6] text-brand-deep">{children}</div>
  </motion.aside>
);
