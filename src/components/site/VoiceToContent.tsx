import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';

/**
 * The signature animation: a voicenote transformed into published content, stage
 * by stage. Desktop pins and steps through the five stages on scroll; mobile is
 * a clean vertical stack with each stage's mini-animation. Under
 * prefers-reduced-motion it renders a static, labelled five-stage diagram.
 * Transform/opacity only.
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

/* --- Stage visuals ---------------------------------------------------------- */

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full w-full items-center justify-center rounded-[18px] border border-line bg-paper-soft p-6 shadow-[0_30px_80px_-50px_rgba(19,36,28,0.4)] sm:p-10">
    {children}
  </div>
);

const MicWave = ({ animate }: { animate: boolean }) => {
  const bars = [14, 26, 40, 22, 48, 30, 56, 36, 44, 20, 34, 50, 24, 40, 16];
  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <div className="flex h-[70px] items-center gap-[5px]" aria-hidden>
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="w-[5px] rounded-full bg-brand/70"
            style={{ height: h }}
            animate={animate ? { scaleY: [1, 0.4 + (i % 4) * 0.25, 1] } : undefined}
            transition={animate ? { duration: 1.1, repeat: Infinity, delay: i * 0.06, ease: 'easeInOut' } : undefined}
          />
        ))}
      </div>
      <div className="text-[13px] font-medium text-ink-soft">04:58 · partner voicenote</div>
    </div>
  );
};

const Transcribe = ({ animate }: { animate: boolean }) => {
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
            className="mr-[0.28em] inline-block"
            initial={animate ? { opacity: 0, y: 6 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={animate ? { delay: 0.15 + i * 0.07, duration: 0.3 } : undefined}
          >
            {w}
          </motion.span>
        ))}
        <motion.span
          className="inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-brand"
          animate={animate ? { opacity: [1, 0, 1] } : undefined}
          transition={animate ? { duration: 0.9, repeat: Infinity } : undefined}
        />
      </p>
    </div>
  );
};

const ArticleCard = ({ animate }: { animate: boolean }) => (
  <div className="w-full max-w-[420px] rounded-[14px] border border-line bg-paper p-6">
    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand">Article · your site</div>
    <motion.h4
      className="mt-3 font-display text-[1.5rem] leading-[1.12] tracking-[-0.01em] text-ink"
      initial={animate ? { opacity: 0, y: 8 } : false}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={animate ? { duration: 0.5, delay: 0.1 } : undefined}
    >
      What the energy transition rewards
    </motion.h4>
    <div className="mt-4 space-y-2.5">
      {[100, 96, 88, 92, 70].map((w, i) => (
        <motion.div
          key={i}
          className="h-2 rounded-full bg-line-strong/70"
          style={{ width: `${w}%` }}
          initial={animate ? { scaleX: 0, originX: 0 } : false}
          animate={animate ? { scaleX: 1 } : undefined}
          transition={animate ? { duration: 0.5, delay: 0.25 + i * 0.1, ease: EASE } : undefined}
        />
      ))}
    </div>
  </div>
);

const Repurpose = ({ animate }: { animate: boolean }) => {
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
          className="rounded-[12px] border border-brand/25 bg-brand-tint p-4"
          initial={animate ? { opacity: 0, y: 16, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 } : false}
          animate={animate ? { opacity: 1, y: 0, rotate: 0 } : undefined}
          transition={animate ? { duration: 0.5, delay: 0.1 + i * 0.12, ease: EASE } : undefined}
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

const Amplify = ({ animate }: { animate: boolean }) => {
  const marks = [
    { t: 'in', label: 'LinkedIn' },
    { t: 'X', label: 'X' },
    { t: '▶', label: 'YouTube' },
    { t: '◎', label: 'Instagram' },
  ];
  return (
    <div className="relative flex h-[220px] w-full max-w-[460px] items-center justify-center overflow-hidden">
      {/* reach pulse rings */}
      {animate &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute h-24 w-24 rounded-full border border-brand/30"
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 2.4, opacity: 0 }}
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
              className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1"
              style={{ x: '-50%', y: '-50%', left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              initial={animate ? { opacity: 0, scale: 0.6 } : false}
              animate={animate ? { opacity: 1, scale: 1 } : undefined}
              transition={animate ? { duration: 0.4, delay: 0.2 + i * 0.12, ease: EASE } : undefined}
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

const StageVisual = ({ index, animate }: { index: number; animate: boolean }) => {
  const V = STAGE_VISUALS[index];
  return <V animate={animate} />;
};

/* --- Progress rail ---------------------------------------------------------- */

const Rail = ({ active }: { active: number }) => (
  <ol className="flex items-center justify-center gap-2 sm:gap-3" aria-hidden>
    {STAGES.map((s, i) => (
      <li key={s.n} className="flex items-center gap-2 sm:gap-3">
        <span
          className={`flex h-7 items-center rounded-full px-2.5 text-[12px] font-medium transition-colors duration-300 ${
            i === active ? 'bg-brand text-white' : i < active ? 'text-brand' : 'text-ink-soft/50'
          }`}
        >
          {s.n}
        </span>
        {i < STAGES.length - 1 && <span className={`h-px w-4 sm:w-6 ${i < active ? 'bg-brand' : 'bg-line-strong'}`} />}
      </li>
    ))}
  </ol>
);

/* --- Layouts ---------------------------------------------------------------- */

const StageCard = ({ index, animate, reveal }: { index: number; animate: boolean; reveal: boolean }) => (
  <motion.div
    className="grid gap-5"
    initial={reveal ? { opacity: 0, y: 24 } : false}
    whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
    viewport={{ once: true, margin: '-60px' }}
    transition={reveal ? { duration: 0.6, ease: EASE } : undefined}
  >
    <div className="flex items-baseline gap-3">
      <span className="font-display text-[1.3rem] italic text-brand">{STAGES[index].n}</span>
      <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">{STAGES[index].label}</span>
    </div>
    <div className="aspect-[16/11]">
      <Frame>
        <StageVisual index={index} animate={animate} />
      </Frame>
    </div>
    <p className="font-display text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-ink">{STAGES[index].caption}</p>
  </motion.div>
);

const DesktopPinned = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(STAGES.length - 1, Math.max(0, Math.floor(v * STAGES.length)));
    setActive(i);
  });

  return (
    <div ref={ref} className="hidden lg:block relative" style={{ height: `${STAGES.length * 78}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center gap-8 px-8">
        <Rail active={active} />
        <div className="relative aspect-[16/9] w-full max-w-[760px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.985 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <Frame>
                <StageVisual index={active} animate />
              </Frame>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="h-[3.5rem] text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              className="font-display text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.25] tracking-[-0.01em] text-ink"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {STAGES[active].caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const StackedDiagram = ({ animate }: { animate: boolean }) => (
  <div className={`${animate ? 'lg:hidden' : ''} space-y-6`}>
    {STAGES.map((s, i) => (
      <div key={s.n} className="relative">
        <StageCard index={i} animate={animate} reveal={animate} />
        {i < STAGES.length - 1 && <div className="mx-auto mt-6 h-6 w-px bg-line-strong" aria-hidden />}
      </div>
    ))}
  </div>
);

export const VoiceToContent = ({ className = '' }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        <StackedDiagram animate={false} />
      </div>
    );
  }

  return (
    <div className={className}>
      <DesktopPinned />
      <StackedDiagram animate />
    </div>
  );
};
