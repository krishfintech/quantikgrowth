import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

/**
 * The signature hero "artifact" — a self-cycling triptych that shows the three
 * services as live mini-mockups: a portfolio site, an SEO ranking climb, and the
 * voicenote→article→social content pipeline. A clean rebuild of the old site's
 * ExperienceShowcase, re-expressed in the green editorial palette.
 *
 * Auto-advances every 5s. Honors prefers-reduced-motion: no auto-advance, no
 * looping/transform animations — panels switch instantly and render static.
 */

const PANELS = [
  { id: 'i', label: 'Website design', caption: 'A portfolio that reads like a point of view.' },
  { id: 'ii', label: 'On-page SEO', caption: 'Found first when founders and LPs search.' },
  { id: 'iii', label: 'Content engine', caption: 'A voicenote becomes writing, everywhere.' },
] as const;

const ROTATE_MS = 5200;

// --- Panel 1: portfolio website preview -------------------------------------
const WebsitePanel = ({ animate }: { animate: boolean }) => {
  const item = (i: number) =>
    animate ? { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } : {};

  return (
    <div className="h-full w-full overflow-hidden rounded-[10px] border border-white/10 bg-brand-deep">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 rounded-[5px] bg-white/[0.06] px-3 py-1 text-[9px] font-medium tracking-wide text-white/40">
          northstar.vc
        </span>
      </div>
      <div className="flex h-[calc(100%-37px)] flex-col px-5 py-5">
        <motion.div {...item(0)} className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#9FD9B8]">
          Seed · climate & energy
        </motion.div>
        <motion.h4
          {...item(1)}
          className="mt-3 font-display text-[19px] leading-[1.12] tracking-[-0.01em] text-white"
        >
          We back founders before<br />the thesis is obvious.
        </motion.h4>
        <div className="mt-auto grid grid-cols-3 gap-2">
          {['Voltreon', 'Cropline', 'Hearth'].map((name, i) => (
            <motion.div
              {...item(2 + i)}
              key={name}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2.5"
            >
              <div className="font-display text-[12px] text-white">{name}</div>
              <div className="mt-1 text-[8px] leading-snug text-white/45">Series A · led</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Panel 2: SEO ranking climb ---------------------------------------------
const SeoPanel = ({ animate }: { animate: boolean }) => {
  // The firm's result starts mid-list and rises to #1.
  const results = [
    { name: 'Northstar Ventures', ours: true },
    { name: 'Generic VC directory', ours: false },
    { name: 'A competing fund', ours: false },
    { name: 'An aggregator page', ours: false },
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-[10px] border border-line bg-paper-soft p-5">
      <div className="flex items-center gap-2.5 rounded-full border border-line-strong bg-paper px-3.5 py-2">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0 text-ink-soft">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-[11px] text-ink-soft">venture firm for climate founders</span>
      </div>

      <div className="relative mt-4 flex-1">
        {results.map((r, i) => (
          <motion.div
            key={r.name}
            initial={animate ? { opacity: 0 } : false}
            animate={{ opacity: 1, y: animate && r.ours ? [38, 38, 0] : 0 }}
            transition={animate ? { opacity: { duration: 0.4, delay: i * 0.08 }, y: { duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] } } : {}}
            className={`mb-2 flex items-center gap-3 rounded-md border px-3 py-2.5 ${
              r.ours ? 'border-brand/30 bg-brand-tint' : 'border-line bg-paper'
            }`}
          >
            <span className={`font-display text-[13px] ${r.ours ? 'text-brand' : 'text-ink-soft/60'}`}>
              {r.ours ? '01' : String(i + 2).padStart(2, '0')}
            </span>
            <div className="flex-1">
              <div className={`h-2 rounded-full ${r.ours ? 'bg-brand/70' : 'bg-line-strong'}`} style={{ width: r.ours ? '72%' : `${52 - i * 6}%` }} />
              <div className={`mt-1.5 text-[10px] ${r.ours ? 'font-medium text-brand-deep' : 'text-ink-soft/55'}`}>{r.name}</div>
            </div>
            {r.ours && <span className="rounded-full bg-brand px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-white">You</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Panel 3: content engine pipeline ---------------------------------------
const ContentPanel = ({ animate }: { animate: boolean }) => {
  const node = (i: number) =>
    animate ? { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + i * 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } : {};
  const connector = (i: number) =>
    animate ? { initial: { scaleX: 0 }, animate: { scaleX: 1 }, transition: { delay: 0.46 + i * 0.28, duration: 0.3, ease: 'easeOut' as const } } : {};

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 rounded-[10px] border border-line bg-paper-soft px-5 py-5">
      {/* voicenote */}
      <motion.div {...node(0)} className="flex items-center gap-3 rounded-lg border border-line bg-paper px-3.5 py-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </span>
        <div className="flex flex-1 items-center gap-[3px]">
          {[10, 18, 8, 22, 14, 26, 12, 20, 9, 16, 24, 11, 19, 7].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-brand/35" style={{ height: h }} />
          ))}
        </div>
        <span className="text-[9px] font-medium text-ink-soft">2:14</span>
      </motion.div>

      <motion.div {...connector(0)} className="ml-[26px] h-4 w-px origin-top bg-line-strong" />

      {/* article */}
      <motion.div {...node(1)} className="rounded-lg border border-brand/25 bg-brand-tint px-3.5 py-3">
        <div className="text-[8px] font-medium uppercase tracking-[0.2em] text-brand">Article · your site</div>
        <div className="mt-1.5 font-display text-[13px] leading-tight text-brand-deep">What the energy transition rewards</div>
        <div className="mt-2 space-y-1">
          <div className="h-1.5 w-full rounded-full bg-brand/15" />
          <div className="h-1.5 w-[80%] rounded-full bg-brand/15" />
        </div>
      </motion.div>

      <motion.div {...connector(1)} className="ml-[26px] h-4 w-px origin-top bg-line-strong" />

      {/* social repurpose */}
      <motion.div {...node(2)} className="flex gap-2">
        {[
          { tag: 'in', label: 'LinkedIn post' },
          { tag: 'X', label: 'X thread' },
          { tag: '▶', label: 'Short clip' },
        ].map((s) => (
          <div key={s.tag} className="flex-1 rounded-lg border border-line bg-paper px-2.5 py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-ink text-[9px] font-semibold text-paper">{s.tag}</span>
            <div className="mt-1.5 text-[8.5px] leading-snug text-ink-soft">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const PANEL_COMPONENTS = [WebsitePanel, SeoPanel, ContentPanel];

export const HeroArtifact = ({ className = '' }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % PANELS.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const Panel = PANEL_COMPONENTS[index];

  return (
    <div className={className}>
      <div className="relative aspect-[4/3.05] w-full rounded-[18px] border border-line bg-paper-soft p-4 shadow-[0_30px_70px_-30px_rgba(19,36,28,0.25)]">
        {/* top bar */}
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              {!reduceMotion && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">{PANELS[index].label}</span>
          </div>
          <span className="font-display text-[12px] italic text-ink-soft">{PANELS[index].id}</span>
        </div>

        {/* rotating panel */}
        <div className="relative h-[calc(100%-58px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Panel animate={!reduceMotion} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* caption + dots */}
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="max-w-[70%] text-[11px] leading-tight text-ink-soft">{PANELS[index].caption}</span>
          <div className="flex items-center gap-0.5">
            {PANELS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`Show ${p.label}`}
                onClick={() => setIndex(i)}
                className="group flex h-9 items-center px-1.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-brand' : 'w-1.5 bg-line-strong group-hover:bg-ink-soft/40'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
