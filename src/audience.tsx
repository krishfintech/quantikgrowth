import { createContext, useContext } from 'react';

export type Audience = 'venture' | 'portfolio';

export const AUDIENCE_STORAGE_KEY = 'qg-audience';
export const DEFAULT_AUDIENCE: Audience = 'venture';

/**
 * Prefix an internal app path with its audience segment. Venture is canonical
 * and unprefixed (/, /approach, /work, …); portfolio lives under /portfolio/…
 * External links, mailto:, and bare hashes are returned untouched.
 */
export const audiencePath = (audience: Audience, path: string): string => {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (audience === 'venture') return path;
  return path === '/' ? '/portfolio' : `/portfolio${path}`;
};

/** Split a pathname into its audience and the within-track remainder. */
export const splitAudience = (pathname: string): { audience: Audience; rest: string } => {
  if (pathname === '/portfolio' || pathname.startsWith('/portfolio/')) {
    return { audience: 'portfolio', rest: pathname.slice('/portfolio'.length) || '/' };
  }
  if (pathname === '/venture' || pathname.startsWith('/venture/')) {
    return { audience: 'venture', rest: pathname.slice('/venture'.length) || '/' };
  }
  return { audience: 'venture', rest: pathname };
};

export interface AudienceContextValue {
  audience: Audience;
  /** Build an audience-aware internal link from a within-track path. */
  link: (path: string) => string;
  /** Switch audience: plays the cinematic transition, persists, and navigates. */
  switchAudience: (a: Audience) => void;
  /** True while the curtain transition is covering the viewport. */
  switching: boolean;
}

export const AudienceContext = createContext<AudienceContextValue>({
  audience: DEFAULT_AUDIENCE,
  link: (p) => p,
  switchAudience: () => {},
  switching: false,
});

export const useAudience = () => useContext(AudienceContext);
