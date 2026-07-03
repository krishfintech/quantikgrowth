import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE } from './motion';

/**
 * Venture hero animation — a deal-flow / first-impression metaphor. Scattered
 * portfolio companies resolve into a constellation of stories: dots settle into
 * place, lines draw between them, and the firm reads as a single point of view.
 *
 * Transform/opacity + SVG pathLength only → 60fps. Under prefers-reduced-motion
 * it renders the finished constellation, static.
 */

// Constellation of portfolio companies. A few carry a short story label.
const NODES = [
  { x: 66, y: 68, r: 5, label: 'Seed · climate' },
  { x: 150, y: 44, r: 6, label: 'Series A · fintech' },
  { x: 244, y: 78, r: 5, label: 'Seed · dev tools' },
  { x: 108, y: 138, r: 4 },
  { x: 210, y: 158, r: 5, label: 'Series B · health' },
  { x: 158, y: 104, r: 7 }, // bright centre
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [3, 0],
  [4, 2],
];

export const HeroVenture = ({ className = '' }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <div className={className}>
      <div className="relative aspect-[4/3.05] w-full rounded-[18px] border border-line bg-brand-deep p-4 shadow-float">
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              {animate && <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-[#9FD9B8]/60" />}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#9FD9B8]" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">Your portfolio</span>
          </div>
          <span className="font-display text-[12px] italic text-white/45">i</span>
        </div>

        <div className="relative h-[calc(100%-58px)] overflow-hidden rounded-[10px] border border-white/10 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(159,217,184,0.10),transparent_60%)]">
          <svg viewBox="0 0 320 220" className="h-full w-full" fill="none" aria-hidden preserveAspectRatio="xMidYMid meet">
            {/* links */}
            {LINKS.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="#9FD9B8"
                strokeOpacity={0.4}
                strokeWidth={1}
                initial={animate ? { pathLength: 0, opacity: 0 } : false}
                animate={animate ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={animate ? { duration: 0.7, delay: 0.5 + i * 0.09, ease: EASE } : undefined}
              />
            ))}

            {/* nodes */}
            {NODES.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={i === 5 ? '#EAF1EC' : '#9FD9B8'}
                initial={animate ? { scale: 0, opacity: 0 } : false}
                animate={
                  animate
                    ? { scale: 1, opacity: i === 5 ? 1 : [0.55, 1, 0.55] }
                    : {}
                }
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                transition={
                  animate
                    ? {
                        scale: { duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE },
                        opacity:
                          i === 5
                            ? { duration: 0.5, delay: 0.1 + i * 0.08 }
                            : { duration: 3.2, repeat: Infinity, delay: 1 + i * 0.3, ease: 'easeInOut' },
                      }
                    : undefined
                }
              />
            ))}

            {/* story labels */}
            {NODES.map((n, i) =>
              n.label ? (
                <motion.text
                  key={`t-${i}`}
                  x={n.x + n.r + 6}
                  y={n.y + 3}
                  fill="#CFE3D7"
                  fontSize="9"
                  fontFamily="Inter Tight, sans-serif"
                  initial={animate ? { opacity: 0 } : false}
                  animate={animate ? { opacity: 0.9 } : {}}
                  transition={animate ? { duration: 0.5, delay: 1.1 + i * 0.12 } : undefined}
                >
                  {n.label}
                </motion.text>
              ) : null,
            )}
          </svg>
        </div>

        <div className="mt-3 px-1">
          <span className="text-[11px] leading-tight text-white/55">
            Every company you’ve backed, told as one point of view.
          </span>
        </div>
      </div>
    </div>
  );
};
