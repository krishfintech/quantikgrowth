/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HomePage from './HomePage';
import ApproachPage from './pages/ApproachPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import WritingIndexPage from './pages/WritingIndexPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import {
  AudienceContext,
  AUDIENCE_STORAGE_KEY,
  audiencePath,
  splitAudience,
  type Audience,
} from './audience';
import { IntroOverlay } from './components/site/IntroOverlay';

// --- Routing -----------------------------------------------------------------
// Custom client router: useState for the current path + window.history.pushState,
// kept in sync with the back/forward buttons via popstate. A single delegated
// click listener turns every internal `<a href="/...">` into a pushState
// navigation — no react-router. Each path carries an optional audience segment
// (/portfolio/…); venture is canonical and unprefixed.

type View = 'home' | 'approach' | 'work' | 'writing' | 'article' | 'about' | 'contact';
type Route = { view: View; slug?: string };

const trimSlug = (s: string) => s.replace(/[/?#].*$/, '').replace(/\/+$/, '');

// Legacy PMS-marketing URLs now redirect to their venture-era equivalents.
const LEGACY_REDIRECTS: Record<string, string> = {
  '/case-study': '/work',
  '/insights': '/writing',
  '/blog': '/writing',
};

// Resolve the within-audience remainder to a view.
const resolveRoute = (rest: string): Route => {
  if (rest === '/work') return { view: 'work' };
  if (rest.startsWith('/writing/')) return { view: 'article', slug: trimSlug(rest.slice('/writing/'.length)) };
  if (rest === '/writing') return { view: 'writing' };
  if (rest === '/approach') return { view: 'approach' };
  if (rest === '/about') return { view: 'about' };
  if (rest === '/contact') return { view: 'contact' };
  return { view: 'home' };
};

const renderView = (route: Route) => {
  switch (route.view) {
    case 'approach':
      return <ApproachPage />;
    case 'work':
      return <HowWeWorkPage />;
    case 'writing':
      return <WritingIndexPage />;
    case 'article':
      return <ArticlePage slug={route.slug!} />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
};

// --- App Root ---

const App = ({ initialPath }: { initialPath?: string } = {}) => {
  const reduceMotion = useReducedMotion();
  const [path, setPath] = useState(
    () => initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/'),
  );
  const [switching, setSwitching] = useState(false);
  const pendingDest = useRef<string | null>(null);

  const { audience, rest } = splitAudience(path);

  // Programmatic navigation: pushState + state update, with optional hash scroll.
  const navigate = useCallback((to: string, replace = false) => {
    const hashIndex = to.indexOf('#');
    const pathname = hashIndex === -1 ? to : to.slice(0, hashIndex) || '/';
    const hash = hashIndex === -1 ? '' : to.slice(hashIndex + 1);

    window.history[replace ? 'replaceState' : 'pushState']({}, '', to);
    setPath(pathname);

    if (hash) {
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 60);
    } else if (!replace) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Audience switch: the signature cinematic transition. The green curtain wipes
  // across; we swap the route while it's covered, then it reveals the new track.
  const switchAudience = useCallback(
    (target: Audience) => {
      if (target === audience) return;
      try {
        localStorage.setItem(AUDIENCE_STORAGE_KEY, target);
      } catch {
        /* private mode — ignore */
      }
      const dest = audiencePath(target, rest);
      if (reduceMotion) {
        navigate(dest);
        return;
      }
      pendingDest.current = dest;
      setSwitching(true);
    },
    [audience, rest, navigate, reduceMotion],
  );

  // First visit: a returning portfolio reader who lands on the bare root is sent
  // to their track (sticky), while crawlers/first-timers keep the canonical / .
  useEffect(() => {
    if (window.location.pathname !== '/') return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(AUDIENCE_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored === 'portfolio') navigate('/portfolio', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Redirect legacy PMS-marketing URLs to the new structure (preserves inbound links).
  useEffect(() => {
    const target = LEGACY_REDIRECTS[window.location.pathname];
    if (target) navigate(target, true);
  }, [navigate]);

  // Keep state in sync with the browser back/forward buttons.
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Delegated click interception: any internal "/..." anchor becomes SPA
  // navigation, resolved within the current audience unless already qualified.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;

      e.preventDefault();
      const qualified = href.startsWith('/portfolio') || href.startsWith('/venture');
      navigate(qualified ? href : audiencePath(audience, href));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate, audience]);

  const route = resolveRoute(rest);
  const link = useCallback((p: string) => audiencePath(audience, p), [audience]);
  const routeKey = `${audience}:${route.view}:${route.slug ?? ''}`;

  return (
    <AudienceContext.Provider value={{ audience, link, switchAudience, switching }}>
      <div className="relative min-h-screen overflow-x-clip">
        {/* Once-per-session cinematic intro — client-only overlay, never SSR'd. */}
        <IntroOverlay />

        {/* Keyed so each navigation (and the audience switch) re-mounts the page
            and replays its entrance reveal — the hero rises into place on arrival. */}
        <div key={routeKey}>{renderView(route)}</div>

        {/* Signature audience-switch transition: a single green curtain that wipes
            across the viewport. Content swaps while it's covered. */}
        <AnimatePresence>
          {switching && (
            <motion.div
              key="audience-curtain"
              className="fixed inset-0 z-[100] bg-brand pointer-events-none"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => {
                // Curtain fully covers the screen — swap the route, then reveal.
                if (pendingDest.current) {
                  navigate(pendingDest.current);
                  pendingDest.current = null;
                }
                setSwitching(false);
              }}
              aria-hidden
            />
          )}
        </AnimatePresence>
      </div>
    </AudienceContext.Provider>
  );
};

export default App;
