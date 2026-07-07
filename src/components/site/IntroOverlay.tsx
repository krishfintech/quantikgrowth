import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Cinematic once-per-session intro. One gesture: a fine line draws the Q
 * monogram, the serif wordmark rises from behind its baseline mask (the site's
 * signature reveal) with "growth" in true italic green, the tagline breathes
 * in, a held beat, then the dark field lifts like a curtain onto the settled
 * page.
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
const T_MARK = 0.1; // the Q monogram begins to draw itself
const T_TAIL = 1.0; // its tail completes the letter
const T_WORD = 0.85; // wordmark rises while the tail lands
const T_TAG = 1.6; // tagline breathes in
const T_EXIT_MS = 2900; // held stillness ends; exit begins

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

    // Review override: ?intro=replay (or #intro-replay) forces a play-through,
    // bypassing the session flag and — because it is an explicit request to
    // watch the animation — the reduced-motion skip as well.
    const forced =
      /[?&]intro=replay\b/.test(window.location.search) || window.location.hash === '#intro-replay';

    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === '1';
    } catch {
      /* private mode — treat as unseen */
    }

    if (!forced && (seen || reduceMotion || !isHome())) {
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
    // No cleanup cancellation here: under dev StrictMode the first effect's
    // cleanup would cancel the one-and-only start timer (the `decided` ref
    // makes the re-run a no-op) and the intro would hang on the dark field.
    // `begin` is idempotent via the phase check, and this component lives at
    // the App root, so it never legitimately unmounts mid-wait.
    const begin = () => setPhase((p) => (p === 'still' ? 'playing' : p));
    const fonts = document.fonts
      ? Promise.all([
          document.fonts.load('500 4rem "Newsreader"'),
          document.fonts.load('italic 500 4rem "Newsreader"'),
        ]).catch(() => undefined)
      : undefined;
    const cap = new Promise((r) => setTimeout(r, 650));
    Promise.race([fonts ?? cap, cap]).then(() => setTimeout(begin, 250));
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
      {/* pb lifts the lockup slightly above true centre — the visual centre. */}
      <div className="flex h-full w-full items-center justify-center pb-[7vh]" aria-hidden>
        <motion.div
          className="flex flex-col items-center px-6 will-change-transform"
          animate={leaving ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: LIFT }}
        >
          {/* The monogram: a fine line drawing the Q, tail landing last */}
          <svg
            viewBox="0 0 96 96"
            fill="none"
            className="h-[66px] w-[66px] sm:h-[84px] sm:w-[84px]"
          >
            <motion.circle
              cx="48"
              cy="48"
              r="34"
              stroke="#9FD9B8"
              strokeWidth="1.75"
              strokeLinecap="round"
              transform="rotate(-90 48 48)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={playing ? { pathLength: 1, opacity: 1 } : {}}
              transition={{
                pathLength: { duration: 1.0, delay: T_MARK, ease: SETTLE },
                opacity: { duration: 0.25, delay: T_MARK },
              }}
            />
            <motion.line
              x1="66"
              y1="66"
              x2="82"
              y2="82"
              stroke="#9FD9B8"
              strokeWidth="1.75"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={playing ? { pathLength: 1, opacity: 1 } : {}}
              transition={{
                pathLength: { duration: 0.35, delay: T_TAIL, ease: SETTLE },
                opacity: { duration: 0.15, delay: T_TAIL },
              }}
            />
          </svg>

          {/* Wordmark in the site's editorial voice, rising from its baseline mask.
              Horizontal padding (undone by the negative margin) keeps the italic
              overhang and the g's descender clear of the mask edges. */}
          <span className="mt-[30px] -mx-[0.12em] block overflow-hidden px-[0.12em] pb-[0.16em]">
            <motion.span
              className="block font-display font-medium tracking-[-0.02em] text-[clamp(2.5rem,8.5vw,4.4rem)] leading-[1.05] text-[#F4F3EC] [font-optical-sizing:auto] will-change-transform"
              initial={{ y: '118%' }}
              animate={{ y: playing ? '0%' : '118%' }}
              transition={{ duration: 1.0, delay: T_WORD, ease: SETTLE }}
            >
              Quantik<em className="italic ml-[0.02em] text-[#9FD9B8]">growth</em>
            </motion.span>
          </span>

          {/* Tagline, a half-beat later. -mr rebalances the tracking's trailing space. */}
          <motion.span
            className="mt-[26px] -mr-[0.26em] font-sans text-[10.5px] font-medium uppercase tracking-[0.26em] text-white/45 sm:-mr-[0.3em] sm:text-[13px] sm:tracking-[0.3em] will-change-transform"
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
