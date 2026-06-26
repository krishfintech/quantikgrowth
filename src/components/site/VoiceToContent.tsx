import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

/**
 * The signature animation: a voicenote transformed into published content, stage
 * by stage. A robust scroll-reveal sequence — each of the five stages animates
 * as it enters view (no sticky pinning, so it can never blank out). Under
 * prefers-reduced-motion it renders a static, labelled five-stage diagram.
 *
 * Performance: a stage's infinite loops only run while it is on screen; one-shot
 * reveals use whileInView. Transform/opacity only → 60fps.
 */

interface Stage {
  n: string;
  label: string;
  caption: string;
}

const STAGES: Stage[] = [
  { n: '01', label: 'Voicenote', caption: 'You send a 5-minute voicenote.' },
  { n: '02', label: 'Transcription', caption: 'We transcribe and shape your thinking.' },
  { n: '03', label: 'Article', caption: 'It becomes a publish-ready article.' },
  { n: '04', label: 'Repurpose', caption: 'Then repurposed for every platform.' },
  { n: '05', label: 'Amplify', caption: 'Boosting your organic visibility everywhere.' },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: '-10% 0px' } as const;

interface VisualProps {
  /** Run infinite loops (only when the stage is on screen). */
  live: boolean;
  /** Play one-shot entrance reveals (off under reduced motion). */
  reveal: boolean;
}

/* --- Stage visuals ---------------------------------------------------------- */

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full w-full items-center justify-center rounded-[18px] border border-line bg-paper-soft p-6 shadow-[0_30px_80px_-50px_rgba(19,36,28,0.4)] sm:p-10">
    {children}
  </div>
);

const MicWave = ({ live }: VisualProps) => {
  const bars = [16, 30, 44, 24, 50, 34, 22, 46, 28, 40, 18];
  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <div className="flex h-[70px] items-center gap-[6px]" aria-hidden>
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="w-[5px] origin-center rounded-full bg-brand/70 will-change-transform"
            style={{ height: h }}
            animate={live ? { scaleY: [1, 0.45, 1] } : { scaleY: 1 }}
            transition={live ? { duration: 1, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' } : { duration: 0 }}
          />
        ))}
      </div>
      <div className="text-[13px] font-medium text-ink-soft">04:58 · partner voicenote</div>
    </div>
  );
};

const Transcribe = ({ live, reveal }: VisualProps) => {
  const words = ['The', 'energy', 'transition', 'rewards', 'the', 'firms', 'that', 'show', 'their', 'work', '—', 'early', 'and', 'often.'];
  return (
    <div className="grid w-full max-w-[460px] grid-cols-[auto_1fr] items-center gap-5">
      <div className="flex h-[64px] items-end gap-[3px]" aria-hidden>
        {[20, 34, 14, 40, 24, 30].map((h, i) => (
          <span key={i} className="w-[4px] rounded-full bg-brand/40" style={{ height: h }} />
        ))}
      </div>
      <p className="font-display text-[1.15rem] leading-[1.5] tracking-[-0.005em] text-ink">
        {words.map((w, i) => (
          <motion.span
            key={i}
            className="mr-[0.28em] inline-block will-change-transform"
            initial={reveal ? { opacity: 0, y: 6 } : false}
            whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
            viewport={VP}
            transition={reveal ? { delay: 0.1 + i * 0.05, duration: 0.3 } : undefined}
          >
            {w}
          </motion.span>
        ))}
        <motion.span
          className="inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-brand"
          animate={live ? { opacity: [1, 0, 1] } : { opacity: 1 }}
          transition={live ? { duration: 0.9, repeat: Infinity } : { duration: 0 }}
        />
      </p>
    </div>
  );
};

const ArticleCard = ({ reveal }: VisualProps) => (
  <div className="w-full max-w-[420px] rounded-[14px] border border-line bg-paper p-6">
    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand">Article · your site</div>
    <h4 className="mt-3 font-display text-[1.5rem] leading-[1.12] tracking-[-0.01em] text-ink">
      What the energy transition rewards
    </h4>
    <div className="mt-4 space-y-2.5">
      {[100, 96, 88, 92, 70].map((w, i) => (
        <motion.div
          key={i}
          className="h-2 origin-left rounded-full bg-line-strong/70 will-change-transform"
          style={{ width: `${w}%` }}
          initial={reveal ? { scaleX: 0 } : false}
          whileInView={reveal ? { scaleX: 1 } : undefined}
          viewport={VP}
          transition={reveal ? { duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE } : undefined}
        />
      ))}
    </div>
  </div>
);

const Repurpose = ({ reveal }: VisualProps) => {
  const cards = [
    { k: 'Newsletter', v: 'To your list' },
    { k: 'LinkedIn', v: 'Two posts' },
    { k: 'X', v: 'One thread' },
  ];
  return (
    <div className="grid w-full max-w-[480px] grid-cols-3 gap-3">
      {cards.map((c, i) => (
        <motion.div
          key={c.k}
          className="rounded-[12px] border border-brand/25 bg-brand-tint p-4 will-change-transform"
          initial={reveal ? { opacity: 0, y: 14 } : false}
          whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
          viewport={VP}
          transition={reveal ? { duration: 0.45, delay: 0.08 + i * 0.1, ease: EASE } : undefined}
        >
          <div className="font-display text-[1.05rem] tracking-[-0.01em] text-brand-deep">{c.k}</div>
          <div className="mt-1 text-[12px] text-ink-soft">{c.v}</div>
          <div className="mt-3 space-y-1.5" aria-hidden>
            <div className="h-1.5 w-full rounded-full bg-brand/15" />
            <div className="h-1.5 w-3/4 rounded-full bg-brand/15" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Amplify = ({ live, reveal }: VisualProps) => {
  const marks = [
    { t: 'in', label: 'LinkedIn' },
    { t: 'X', label: 'X' },
    { t: '▶', label: 'YouTube' },
    { t: '◎', label: 'Instagram' },
  ];
  return (
    <div className="relative flex h-[220px] w-full max-w-[460px] items-center justify-center overflow-hidden">
      {live &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute h-24 w-24 rounded-full border border-brand/30 will-change-transform"
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 2.3, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
          />
        ))}
      <span className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-[11px] font-semibold uppercase tracking-wider text-white">
        You
      </span>
      <div className="absolute inset-0">
        {marks.map((m, i) => {
          const angle = (i / marks.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * 108;
          const y = Math.sin(angle) * 78;
          return (
            <motion.div
              key={m.label}
              className="absolute flex flex-col items-center gap-1 will-change-transform"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, x: '-50%', y: '-50%' }}
              initial={reveal ? { opacity: 0, scale: 0.6 } : false}
              whileInView={reveal ? { opacity: 1, scale: 1 } : undefined}
              viewport={VP}
              transition={reveal ? { duration: 0.4, delay: 0.15 + i * 0.1, ease: EASE } : undefined}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-[15px] font-semibold text-ink">
                {m.t}
              </span>
              <span className="text-[11px] text-ink-soft">{m.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const STAGE_VISUALS = [MicWave, Transcribe, ArticleCard, Repurpose, Amplify];

const StageVisual = ({ index, live, reveal }: { index: number } & VisualProps) => {
  const V = STAGE_VISUALS[index];
  return <V live={live} reveal={reveal} />;
};

/* --- Layout: robust scroll-reveal sequence ---------------------------------- */

const StageRow = ({ index, animate, flip }: { index: number; animate: boolean; flip: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const s = STAGES[index];

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16"
        initial={animate ? { opacity: 0, y: 28 } : false}
        whileInView={animate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: '-80px' }}
        transition={animate ? { duration: 0.6, ease: EASE } : undefined}
      >
        {/* text */}
        <div className={flip ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-tint font-display text-[1rem] text-brand">
              {s.n}
            </span>
            <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">{s.label}</span>
          </div>
          <p className="mt-5 max-w-[20ch] font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.12] tracking-[-0.01em] text-ink">
            {s.caption}
          </p>
        </div>

        {/* visual */}
        <div className={`aspect-[16/11] ${flip ? 'lg:order-1' : ''}`}>
          <Frame>
            <StageVisual index={index} live={animate && inView} reveal={animate} />
          </Frame>
        </div>
      </motion.div>

      {index < STAGES.length - 1 && (
        <div className="mx-auto my-8 h-10 w-px bg-line-strong sm:my-10 lg:my-12" aria-hidden />
      )}
    </div>
  );
};

export const VoiceToContent = ({ className = '' }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <div className={className}>
      {STAGES.map((_, i) => (
        <React.Fragment key={i}>
          <StageRow index={i} animate={animate} flip={i % 2 === 1} />
        </React.Fragment>
      ))}
    </div>
  );
};
