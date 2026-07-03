import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Cinematic once-per-session intro. One gesture: the wordmark rises from behind
 * a baseline mask (the site's signature reveal), a single green hairline draws
 * beneath it, the tagline breathes in, a held beat, then the dark field lifts
 * like a curtain onto the settled page.
 *
 * Behaviour contract:
 * - Plays only on the homepage ('/' or '/portfolio'), once per session
 *   (sessionStorage 'qg-intro-seen'), never for prefers-reduced-motion.
 * - Never SSR'd: prerendered HTML is untouched; this is a client overlay.
 *   A tiny inline bootstrap in index.html holds a matching dark field from
 *   first paint (class `qg-intro-hold`) so hydration never flashes the page;
 *   we release that class the moment this component's own field is up. The
 *   bootstrap self-clears via CSS failsafe if the bundle never arrives.
 * - Any pointer, key, wheel or touch dismisses it instantly; a Skip control
 *   is there for discoverability.
 * - Transform/opacity only. Colour is set, not animated.
 */

const KEY = 'qg-intro-seen';

/** Bespoke curves for the intro only: a long, weighted settle and a firm lift. */
const SETTLE = [0.22, 1, 0.36, 1] as const;
const LIFT = [0.83, 0, 0.17, 1] as const;

/* Beats, in seconds from the start of play (after the stillness/font wait). */
const T_WORD = 0.2; // wordmark begins to rise
const T_LINE = 1.15; // hairline draws
const T_TAG = 1.45; // tagline breathes in
const T_EXIT_MS = 2650; // held stillness ends; exit begins

const isHome = () => {
  const p = window.location.pathname.replace(/\/+$/, '') || '/';
  return p === '/' || p === '/portfolio';
};

const releaseBootstrapHold = () => {
  document.documentElement.classList.remove('qg-intro-hold');
};

type Phase = 'idle' | 'still' | 'playing' | 'leaving' | 'skipped' | 'done';

export const IntroOverlay = () => {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('idle');
  const decided = useRef(false);

  // Decide once per page load whether to play.
  useEffect(() => {
    if (decided.current) return;
    decided.current = true;

    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === '1';
    } catch {
      /* private mode — treat as unseen */
    }

    if (seen || reduceMotion || !isHome()) {
      releaseBootstrapHold();
      setPhase('done');
      return;
    }

    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }

    // Our field is up from this render on — the pre-paint hold can go.
    setPhase('still');
    requestAnimationFrame(releaseBootstrapHold);

    // The opening stillness doubles as a font wait, capped so it stays a beat.
    let cancelled = false;
    const begin = () => {
      if (!cancelled) setPhase((p) => (p === 'still' ? 'playing' : p));
    };
    const fonts = document.fonts?.load('600 4rem "Inter Tight"').catch(() => undefined);
    const cap = new Promise((r) => setTimeout(r, 650));
    Promise.race([fonts ?? cap, cap]).then(() => setTimeout(begin, 250));

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Held moment, then the composed exit.
  useEffect(() => {
    if (phase !== 'playing') return;
    const t = setTimeout(() => setPhase('leaving'), T_EXIT_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // Any intent to interact dismisses it instantly.
  useEffect(() => {
    if (phase !== 'still' && phase !== 'playing') return;
    const skip = () => setPhase('skipped');
    window.addEventListener('keydown', skip);
    window.addEventListener('wheel', skip, { passive: true });
    window.addEventListener('touchmove', skip, { passive: true });
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchmove', skip);
    };
  }, [phase]);

  if (phase === 'idle' || phase === 'done') return null;

  const playing = phase === 'playing' || phase === 'leaving' || phase === 'skipped';
  const leaving = phase === 'leaving';
  const skipped = phase === 'skipped';

  return (
    // The field: the site's darkest ink, lifting away like a curtain at the end.
    <motion.div
      className="fixed inset-0 z-[110] bg-ink will-change-transform"
      role="presentation"
      onPointerDown={() => setPhase('skipped')}
      initial={false}
      animate={
        skipped
          ? { opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }
          : leaving
            ? { y: '-100%', transition: { duration: 0.85, delay: 0.3, ease: LIFT } }
            : { y: '0%', opacity: 1 }
      }
      onAnimationComplete={() => {
        if (leaving || skipped) setPhase('done');
      }}
    >
      <div className="flex h-full w-full items-center justify-center" aria-hidden>
        <motion.div
          className="flex flex-col items-center px-6 will-change-transform"
          animate={leaving ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: LIFT }}
        >
          {/* Wordmark, rising from behind its baseline mask */}
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              className="block font-sans font-semibold tracking-[-0.015em] text-[clamp(2.1rem,7vw,3.6rem)] leading-[1.1] text-[#F4F3EC] will-change-transform"
              initial={{ y: '112%' }}
              animate={{ y: playing ? '0%' : '112%' }}
              transition={{ duration: 1.05, delay: T_WORD, ease: SETTLE }}
            >
              Quantik<span className="text-[#9FD9B8]">growth</span>
            </motion.span>
          </span>

          {/* The one green accent: a hairline drawing itself beneath the name */}
          <motion.span
            className="mt-[22px] h-px w-[min(180px,38vw)] origin-center bg-[#3E8E67] will-change-transform"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={playing ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: T_LINE, ease: SETTLE }}
          />

          {/* Tagline, a half-beat later */}
          <motion.span
            className="mt-[22px] font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-white/50 sm:text-[12px] sm:tracking-[0.26em] will-change-transform"
            initial={{ opacity: 0, y: 10 }}
            animate={playing ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: T_TAG, ease: SETTLE }}
          >
            A boutique studio for investment firms
          </motion.span>
        </motion.div>
      </div>

      {/* Quiet skip affordance */}
      <motion.button
        type="button"
        aria-label="Skip intro"
        onClick={() => setPhase('skipped')}
        className="absolute bottom-[max(28px,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'playing' ? 1 : 0 }}
        transition={{ duration: 0.6, delay: phase === 'playing' ? 1.6 : 0 }}
      >
        Skip
      </motion.button>
    </motion.div>
  );
};
