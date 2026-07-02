import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArticleFigure } from './ArticleFigures';

/**
 * Bespoke, one-per-article editorial graphics. Each is a unique concept,
 * composition and dataset — never reused across articles. All use the green
 * editorial tokens (brand #0F5A39, paper #FBFBF8, ink #13241C, line #E6E8E2,
 * brand-tint #EAF1EC), scale legibly to 360px, reveal gently on scroll, and
 * fall back to a static render under prefers-reduced-motion. Every <svg> carries
 * descriptive alt text via role="img" + aria-label.
 */

const VP = { once: true, margin: '-12% 0px' } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

/* Draws an SVG path on scroll; static (already drawn) under reduced motion. */
const useDraw = () => {
  const reduce = useReducedMotion();
  return (duration: number, delay = 0) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 } as const,
          whileInView: { pathLength: 1 } as const,
          viewport: VP,
          transition: { duration, delay, ease: EASE },
        };
};

/* ================================================================== */
/* GRAPHIC 1 — "The presence ceiling" (PMS · pms-growth-ceiling)        */
/* Two lines from a shared origin: returns alone plateaus at a ceiling; */
/* returns + presence keeps climbing past it.                          */
/* ================================================================== */

export const PresenceCeilingChart = () => {
  const draw = useDraw();
  return (
    <ArticleFigure caption="Performance earns growth. Presence decides whether you capture it.">
      <svg
        viewBox="0 0 360 212"
        className="w-full"
        role="img"
        aria-label="A line chart with two curves rising from a shared origin. The muted ‘returns alone’ line rises and then flattens into a horizontal plateau labelled the presence ceiling. The green ‘returns plus digital presence’ line keeps climbing past the ceiling."
      >
        {/* axes */}
        <line x1="44" y1="18" x2="44" y2="176" stroke="var(--color-line-strong)" strokeWidth="1" />
        <line x1="44" y1="176" x2="348" y2="176" stroke="var(--color-line-strong)" strokeWidth="1" />

        {/* the ceiling */}
        <line x1="150" y1="78" x2="346" y2="78" stroke="var(--color-line-strong)" strokeWidth="1" strokeDasharray="3 4" />
        <text x="346" y="70" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10.5">the presence ceiling</text>

        {/* returns alone — rises then plateaus */}
        <motion.path
          d="M44 172 C 92 132, 144 92, 196 82 C 242 73, 298 80, 346 80"
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
          {...draw(1.2)}
        />
        {/* returns + presence — keeps climbing past the ceiling */}
        <motion.path
          d="M44 172 C 104 134, 158 96, 208 76 C 264 53, 312 36, 346 18"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.6"
          strokeLinecap="round"
          {...draw(1.5, 0.15)}
        />

        <text x="346" y="14" textAnchor="end" className="fill-brand" fontSize="11" fontWeight="500">returns + presence</text>
        <text x="338" y="94" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10.5">returns alone</text>
        <text x="44" y="192" fill="var(--color-ink-soft)" fontSize="10">today</text>
        <text x="348" y="192" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10">AUM over time →</text>
      </svg>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 2 — "The HNI discovery journey" (PMS · invisible-to-...)     */
/* A 5-stage path with drop-off indicators; biggest losses at Website  */
/* and Trust signals.                                                  */
/* ================================================================== */

const JOURNEY = [
  { n: '1', label: ['Search'], drop: 12 },
  { n: '2', label: ['Website'], drop: 34 },
  { n: '3', label: ['Trust', 'signals'], drop: 27 },
  { n: '4', label: ['Conversation'], drop: 8 },
  { n: '5', label: ['Allocation'], drop: 0 },
];

export const DiscoveryJourney = () => {
  const reduce = useReducedMotion();
  const xs = [36, 108, 180, 252, 324];
  const cy = 60;
  return (
    <ArticleFigure caption="Most firms break the chain before the conversation ever starts.">
      <svg
        viewBox="0 0 360 150"
        className="w-full"
        role="img"
        aria-label="A five-stage discovery path — Search, Website, Trust signals, Conversation, Allocation — connected left to right. Downward drop-off markers between the stages show where firms lose prospects, with the largest drops at Website and Trust signals."
      >
        {/* connective path */}
        <line x1={xs[0]} y1={cy} x2={xs[4]} y2={cy} stroke="var(--color-brand-muted)" strokeWidth="2" />

        {/* drop-off indicators between stages */}
        {JOURNEY.slice(0, 4).map((s, i) => {
          const mx = (xs[i] + xs[i + 1]) / 2;
          const len = 8 + (s.drop / 34) * 22;
          return (
            <motion.g
              key={`drop-${i}`}
              initial={reduce ? false : { opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: EASE }}
            >
              <line x1={mx} y1={cy + 8} x2={mx} y2={cy + 8 + len} stroke="var(--color-ink-soft)" strokeWidth="1.5" strokeLinecap="round" />
              <path d={`M${mx - 3} ${cy + 4 + len} L${mx} ${cy + 9 + len} L${mx + 3} ${cy + 4 + len}`} fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x={mx} y={cy + 22 + len} textAnchor="middle" fill="var(--color-ink-soft)" fontSize="9.5">−{s.drop}%</text>
            </motion.g>
          );
        })}

        {/* nodes */}
        {JOURNEY.map((s, i) => (
          <motion.g
            key={s.n}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }}
            style={{ transformOrigin: `${xs[i]}px ${cy}px` }}
          >
            <circle cx={xs[i]} cy={cy} r="13" fill={i === 4 ? 'var(--color-brand)' : 'var(--color-brand-tint)'} stroke="var(--color-brand)" strokeWidth="1.5" />
            <text x={xs[i]} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill={i === 4 ? '#fff' : 'var(--color-brand)'}>{s.n}</text>
            {s.label.map((line, li) => (
              <text key={line} x={xs[i]} y={cy + 30 + li * 11} textAnchor="middle" fontSize="9.5" fill="var(--color-ink)">{line}</text>
            ))}
          </motion.g>
        ))}
      </svg>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 3 — "What a founder registers in five seconds" (VC · 5s)     */
/* A 0s→5s timeline with four markers, labels alternating above/below.  */
/* ================================================================== */

const SECONDS = [
  { t: '0–1s', at: 0.5, label: ['does this', 'look serious?'], above: true },
  { t: '1–2s', at: 1.5, label: ['what do', 'they believe?'], above: false },
  { t: '2–4s', at: 3, label: ['who have', 'they backed?'], above: true },
  { t: '4–5s', at: 4.5, label: ['are these my', 'kind of people?'], above: false },
];

export const FiveSecondsTimeline = () => {
  const reduce = useReducedMotion();
  const x0 = 30;
  const x1 = 342;
  const axisY = 96;
  const px = (s: number) => x0 + (s / 5) * (x1 - x0);
  return (
    <ArticleFigure caption="The meeting is half-decided before it’s booked.">
      <svg
        viewBox="0 0 360 192"
        className="w-full"
        role="img"
        aria-label="A five-second timeline of what a founder registers about a fund online: zero to one second, does this look serious; one to two seconds, what do they believe; two to four seconds, who have they backed; four to five seconds, are these my kind of people."
      >
        {/* base axis */}
        <line x1={x0} y1={axisY} x2={x1} y2={axisY} stroke="var(--color-line-strong)" strokeWidth="1.5" />
        {/* green progress */}
        <motion.line
          x1={x0}
          y1={axisY}
          x2={x1}
          y2={axisY}
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transformOrigin: `${x0}px ${axisY}px` }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VP}
          transition={{ duration: 1.3, ease: EASE }}
        />
        {/* second ticks */}
        {[0, 1, 2, 4, 5].map((s) => (
          <g key={s}>
            <line x1={px(s)} y1={axisY - 4} x2={px(s)} y2={axisY + 4} stroke="var(--color-line-strong)" strokeWidth="1" />
            <text x={px(s)} y={axisY + 18} textAnchor="middle" fill="var(--color-ink-soft)" fontSize="9.5">{s}s</text>
          </g>
        ))}
        {/* markers + labels */}
        {SECONDS.map((m, i) => {
          const x = px(m.at);
          // tick label sits next to the axis; the two-line description sits beyond it.
          const tickY = m.above ? axisY - 14 : axisY + 30;
          const descY0 = m.above ? axisY - 44 : axisY + 44;
          return (
            <motion.g
              key={m.t}
              initial={reduce ? false : { opacity: 0, y: m.above ? 6 : -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.18, ease: EASE }}
            >
              <line x1={x} y1={m.above ? tickY + 2 : tickY - 10} x2={x} y2={axisY} stroke="var(--color-brand-muted)" strokeWidth="1" />
              <circle cx={x} cy={axisY} r="3.5" fill="var(--color-brand)" />
              <text x={x} y={tickY} textAnchor="middle" fontSize="10" fontWeight="600" className="fill-brand">{m.t}</text>
              {m.label.map((line, li) => (
                <text key={line} x={x} y={descY0 + li * 12} textAnchor="middle" fontSize="10" fill="var(--color-ink)">{line}</text>
              ))}
            </motion.g>
          );
        })}
      </svg>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 4 — "Logo wall → story" (VC · portfolio-best-salesperson)    */
/* Left: a flat 3×3 grid of identical logo tiles. Right: one expanded   */
/* case-study card.                                                     */
/* ================================================================== */

export const LogoWallToStory = () => {
  const reduce = useReducedMotion();
  return (
    <ArticleFigure caption="A logo says you were there. A story proves your judgment.">
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1.25fr]">
        {/* left — the logo wall */}
        <div>
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">What most funds show</div>
          <div className="grid grid-cols-3 gap-2.5" aria-hidden>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex aspect-[3/2] items-center justify-center rounded-[8px] border border-line bg-paper">
                <span className="h-2 w-2 rounded-full bg-ink-soft/25" />
                <span className="ml-1 h-1.5 w-5 rounded-full bg-ink-soft/20" />
              </div>
            ))}
          </div>
        </div>

        {/* arrow */}
        <div className="flex items-center justify-center text-brand" aria-hidden>
          <span className="rotate-90 text-xl sm:rotate-0">→</span>
        </div>

        {/* right — the case study */}
        <motion.div
          className="rounded-[14px] border border-brand/25 bg-brand-tint p-5"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-brand">What actually convinces</div>
          <div className="rounded-[10px] border border-brand/20 bg-paper-soft p-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-brand" aria-hidden />
              <span className="font-display text-[1.05rem] tracking-[-0.01em] text-ink">Company name</span>
            </div>
            <p className="mt-2.5 text-[12.5px] leading-[1.45] text-ink-soft">
              The one-line thesis — what we saw before the round was obvious.
            </p>
            <div className="mt-3.5 flex items-baseline gap-2 border-t border-line pt-3">
              <span className="font-display text-[1.5rem] leading-none tracking-[-0.01em] text-brand">14×</span>
              <span className="text-[11.5px] text-ink-soft">from seed to the last mark</span>
            </div>
          </div>
        </motion.div>
      </div>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 5A — "The substance–presentation gap" (MEGA)                 */
/* 2×2 quadrant: a cluster sits in high-substance / low-presence; one   */
/* target dot in high / high.                                          */
/* ================================================================== */

const CLUSTER = [
  [78, 70], [96, 92], [70, 110], [110, 74], [88, 124], [124, 104], [64, 86], [104, 132], [134, 88],
];

export const SubstancePresentationGap = () => {
  const reduce = useReducedMotion();
  return (
    <ArticleFigure caption="The gap isn’t talent. It’s how little of it is visible.">
      <svg
        viewBox="0 0 360 296"
        className="w-full"
        role="img"
        aria-label="A two-by-two quadrant chart. The horizontal axis is digital presence from low to high; the vertical axis is investment substance from low to high. A dense cluster of muted dots sits in the high-substance, low-presence quadrant, labelled where most investment firms are today. A single highlighted green dot sits in the high-substance, high-presence quadrant, labelled where the firm should be."
      >
        {/* axes frame */}
        <line x1="46" y1="20" x2="46" y2="252" stroke="var(--color-line-strong)" strokeWidth="1" />
        <line x1="46" y1="252" x2="344" y2="252" stroke="var(--color-line-strong)" strokeWidth="1" />
        {/* quadrant dividers */}
        <line x1="195" y1="20" x2="195" y2="252" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="46" y1="136" x2="344" y2="136" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="3 4" />

        {/* cluster — high substance, low presence */}
        {CLUSTER.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="5"
            fill="var(--color-ink-soft)"
            fillOpacity="0.34"
            initial={reduce ? false : { opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
        <text x="60" y="44" fill="var(--color-ink-soft)" fontSize="10.5">where most firms</text>
        <text x="60" y="57" fill="var(--color-ink-soft)" fontSize="10.5">are today</text>

        {/* target — high / high */}
        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          style={{ transformOrigin: '288px 70px' }}
        >
          <circle cx="288" cy="70" r="13" fill="none" stroke="var(--color-brand)" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="288" cy="70" r="6.5" fill="var(--color-brand)" />
          <text x="288" y="100" textAnchor="middle" className="fill-brand" fontSize="10.5" fontWeight="600">where the firm</text>
          <text x="288" y="113" textAnchor="middle" className="fill-brand" fontSize="10.5" fontWeight="600">should be</text>
        </motion.g>

        {/* axis labels */}
        <text x="195" y="278" textAnchor="middle" fill="var(--color-ink-soft)" fontSize="10">digital presence  (low → high)</text>
        <text x="16" y="136" textAnchor="middle" fill="var(--color-ink-soft)" fontSize="10" transform="rotate(-90 16 136)">substance (low → high)</text>
      </svg>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 5B — "How investors actually evaluate a firm online" (MEGA)  */
/* A vertical numbered six-step flow with a brand connective line.      */
/* ================================================================== */

const EVAL_STEPS = [
  'Search the firm',
  'Judge the first impression',
  'Look for a clear thesis',
  'Read the people',
  'Test how it talks about risk',
  'Decide whether to reach out',
];

export const EvaluationFlow = () => {
  const reduce = useReducedMotion();
  return (
    <ArticleFigure caption="Trust is built or lost here — before you ever speak.">
      <ol className="relative ml-1">
        {/* connective line */}
        <span className="absolute left-[15px] top-3 bottom-3 w-px bg-brand/30" aria-hidden />
        {EVAL_STEPS.map((step, i) => (
          <motion.li
            key={step}
            className="relative flex items-center gap-4 py-2.5"
            initial={reduce ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
          >
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-semibold text-white">
              {i + 1}
            </span>
            <span className="text-[15px] leading-snug text-ink">{step}</span>
          </motion.li>
        ))}
      </ol>
    </ArticleFigure>
  );
};

/* ================================================================== */
/* GRAPHIC 5C — "The content engine" (MEGA)                            */
/* Voicenote → Article → {Newsletter · LinkedIn · X} → {YouTube · IG}. */
/* A left-to-right flow that fans out at the repurposing stage.        */
/* ================================================================== */

export const ContentEnginePipeline = () => {
  const draw = useDraw();
  const reduce = useReducedMotion();
  const trio = [
    { y: 36, label: 'Newsletter' },
    { y: 100, label: 'LinkedIn' },
    { y: 164, label: 'X' },
  ];
  const platforms = [
    { y: 70, label: 'YouTube' },
    { y: 130, label: 'Instagram' },
  ];
  return (
    <ArticleFigure caption="One unstructured thought becomes a week of authority, everywhere.">
      <svg
        viewBox="0 0 360 200"
        className="w-full"
        role="img"
        aria-label="A content-engine pipeline flowing left to right: a voicenote becomes an article, which fans out into a newsletter, a LinkedIn post and an X post, and from there radiates to YouTube and Instagram reach."
      >
        {/* flow lines: voicenote → article */}
        <motion.line x1="76" y1="100" x2="120" y2="100" stroke="var(--color-brand)" strokeWidth="1.6" {...draw(0.5)} />
        {/* article → trio (fan out) */}
        {trio.map((t, i) => (
          <motion.path
            key={t.label}
            d={`M186 100 C 205 100, 205 ${t.y + 11}, 222 ${t.y + 11}`}
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="1.4"
            {...draw(0.6, 0.3 + i * 0.08)}
          />
        ))}
        {/* trio → platforms (radiate) */}
        {trio.map((t) =>
          platforms.map((p) => (
            <motion.path
              key={`${t.label}-${p.label}`}
              d={`M296 ${t.y + 11} C 312 ${t.y + 11}, 312 ${p.y + 9}, 324 ${p.y + 9}`}
              fill="none"
              stroke="var(--color-brand-muted)"
              strokeWidth="1"
              {...draw(0.5, 0.6)}
            />
          )),
        )}

        {/* node: voicenote */}
        <Node x={10} y={88} w={66} h={24} label="Voicenote" filled reduce={reduce} />
        {/* node: article */}
        <Node x={120} y={88} w={66} h={24} label="Article" filled reduce={reduce} delay={0.15} />
        {/* trio pills */}
        {trio.map((t, i) => (
          <Node key={t.label} x={222} y={t.y} w={74} h={22} label={t.label} delay={0.4 + i * 0.08} reduce={reduce} />
        ))}
        {/* platform marks */}
        {platforms.map((p, i) => (
          <Node key={p.label} x={324} y={p.y} w={30} h={18} label={p.label} small delay={0.7 + i * 0.1} reduce={reduce} />
        ))}
      </svg>
    </ArticleFigure>
  );
};

/* Small rounded-rect node used by the content-engine pipeline. */
const Node = ({
  x,
  y,
  w,
  h,
  label,
  filled,
  small,
  delay = 0,
  reduce,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  filled?: boolean;
  small?: boolean;
  delay?: number;
  reduce?: boolean | null;
  key?: React.Key;
}) => (
  <motion.g
    initial={reduce ? false : { opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={VP}
    transition={{ duration: 0.45, delay, ease: EASE }}
    style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
  >
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={h / 2}
      fill={filled ? 'var(--color-brand)' : 'var(--color-brand-tint)'}
      stroke={filled ? 'none' : 'var(--color-brand)'}
      strokeWidth="1.2"
      strokeOpacity="0.4"
    />
    <text
      x={x + w / 2}
      y={y + h / 2 + 3.5}
      textAnchor="middle"
      fontSize={small ? '8.5' : '10'}
      fontWeight={filled ? 600 : 500}
      fill={filled ? '#fff' : 'var(--color-brand-deep)'}
    >
      {label}
    </text>
  </motion.g>
);

/* ================================================================== */
/* GRAPHIC 5D — "Linear vs compounding" (MEGA)                         */
/* The old way: a flat sawtooth that resets. The new way: a smooth     */
/* compounding curve.                                                  */
/* ================================================================== */

export const LinearVsCompounding = () => {
  const draw = useDraw();
  return (
    <ArticleFigure caption="Campaigns evaporate. Infrastructure compounds.">
      <svg
        viewBox="0 0 360 200"
        className="w-full"
        role="img"
        aria-label="Two curves from a shared origin. The muted ‘campaigns and referrals’ line is a flat sawtooth that spikes and resets, never accumulating. The green ‘infrastructure and content’ line is a smooth curve that compounds steadily upward."
      >
        <line x1="42" y1="16" x2="42" y2="170" stroke="var(--color-line-strong)" strokeWidth="1" />
        <line x1="42" y1="170" x2="348" y2="170" stroke="var(--color-line-strong)" strokeWidth="1" />

        {/* sawtooth — campaigns + referrals */}
        <motion.path
          d="M42 168 L78 126 L92 162 L128 122 L142 160 L178 120 L192 158 L228 122 L242 158 L278 124 L292 156 L328 126"
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
          {...draw(1.3)}
        />
        {/* compounding — infrastructure + content */}
        <motion.path
          d="M42 168 C 150 160, 240 120, 346 22"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.6"
          strokeLinecap="round"
          {...draw(1.5, 0.2)}
        />

        <text x="346" y="18" textAnchor="end" className="fill-brand" fontSize="11" fontWeight="500">infrastructure + content</text>
        <text x="330" y="140" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10.5">campaigns + referrals</text>
        <text x="42" y="186" fill="var(--color-ink-soft)" fontSize="10">start</text>
        <text x="348" y="186" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10">years →</text>
      </svg>
    </ArticleFigure>
  );
};
