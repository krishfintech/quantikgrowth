import React from 'react';
import { Nav } from './Nav';
import { SiteFooter } from './SiteFooter';
import { MobileCtaBar } from './MobileCtaBar';
import type { NavLink } from './Nav';

export const SITE_NAV_LINKS: NavLink[] = [
  { label: 'Approach', href: '/approach' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

interface SiteLayoutProps {
  children: React.ReactNode;
}

/**
 * Shared chrome for the multi-page, new-design pages (work, case study, writing,
 * article). HomePage keeps its own inline Nav/Footer with in-page hash links;
 * everything else routes through real paths intercepted by App's pushState router.
 */
export const SiteLayout = ({ children }: SiteLayoutProps) => (
  <div className="bg-paper">
    <Nav links={SITE_NAV_LINKS} ctaLabel="Start a project" ctaHref="/contact" />

    <main>{children}</main>

    <SiteFooter
      tagline="Digital infrastructure for venture & private equity firms — with select PMS pilots. Based in Mumbai."
      columns={[
        {
          heading: 'Explore',
          links: [
            { label: 'Approach', href: '/approach' },
            { label: 'Work', href: '/work' },
            { label: 'Writing', href: '/writing' },
            { label: 'About', href: '/about' },
          ],
        },
        {
          heading: 'Get in touch',
          links: [
            { label: 'krish@quantikgrowth.in', href: 'mailto:krish@quantikgrowth.in' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Start a project', href: '/contact' },
          ],
        },
      ]}
      legalLeft="© 2026 QuantikGrowth"
      legalRight="Mumbai, India"
    />

    {/* Spacer so the sticky mobile CTA never covers the footer's last line. */}
    <div className="h-[88px] lg:hidden" aria-hidden />
    <MobileCtaBar />
  </div>
);
