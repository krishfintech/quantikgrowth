/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './HomePage';
import WorkIndexPage from './pages/WorkIndexPage';
import WorkCaseStudyPage from './pages/WorkCaseStudyPage';
import WritingIndexPage from './pages/WritingIndexPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// --- Routing -----------------------------------------------------------------
// Custom client router: useState for the current path + window.history.pushState,
// kept in sync with the back/forward buttons via popstate. A single delegated
// click listener turns every internal `<a href="/...">` (Nav, WorkLedger,
// ArticleRow, Buttons, etc.) into a pushState navigation — no react-router.

type Route =
  | { view: 'home' }
  | { view: 'work' }
  | { view: 'case-study'; slug: string }
  | { view: 'writing' }
  | { view: 'article'; slug: string }
  | { view: 'about' }
  | { view: 'contact' };

const trimSlug = (s: string) => s.replace(/[/?#].*$/, '').replace(/\/+$/, '');

// Legacy PMS-marketing URLs now redirect to their venture-era equivalents.
const LEGACY_REDIRECTS: Record<string, string> = {
  '/case-study': '/work',
  '/insights': '/writing',
  '/blog': '/writing',
};

const resolveRoute = (pathname: string): Route => {
  if (pathname.startsWith('/work/')) return { view: 'case-study', slug: trimSlug(pathname.slice('/work/'.length)) };
  if (pathname === '/work') return { view: 'work' };
  if (pathname.startsWith('/writing/')) return { view: 'article', slug: trimSlug(pathname.slice('/writing/'.length)) };
  if (pathname === '/writing') return { view: 'writing' };
  if (pathname === '/about') return { view: 'about' };
  if (pathname === '/contact') return { view: 'contact' };
  return { view: 'home' };
};

// --- App Root ---

const App = () => {
  const [path, setPath] = useState(() => window.location.pathname);

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

  // Delegated click interception: any internal "/..." anchor becomes SPA navigation.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      // Only intercept internal absolute paths ("/work", "/#services"); leave
      // pure hashes, mailto:, and external URLs to the browser.
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;

      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  const route = resolveRoute(path);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {route.view === 'home' && <HomePage />}
      {route.view === 'work' && <WorkIndexPage />}
      {route.view === 'case-study' && <WorkCaseStudyPage slug={route.slug} />}
      {route.view === 'writing' && <WritingIndexPage />}
      {route.view === 'article' && <ArticlePage slug={route.slug} />}
      {route.view === 'about' && <AboutPage />}
      {route.view === 'contact' && <ContactPage />}
    </div>
  );
};

export default App;
