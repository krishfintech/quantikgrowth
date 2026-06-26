import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/** Render the app at a given path to an HTML string (body markup, with the
 *  <Seo> metadata tags rendered inline). Used by scripts/prerender.mjs. */
export function render(path: string): string {
  return renderToString(<App initialPath={path} />);
}
