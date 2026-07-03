import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, Seo, SiteLayout, useFadeUpVariants, useStaggerVariants, viewportOnce } from '../components/site';
import { CONTACT_EMAIL, LINKEDIN_URL } from '../config';
import { breadcrumbSchema } from '../data/structuredData';
import { useAudience } from '../audience';

const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Booking a call')}`;

const ContactCard = ({
  href,
  external,
  label,
  value,
  hint,
  cta,
  icon,
}: {
  href: string;
  external?: boolean;
  label: string;
  value: string;
  hint: string;
  cta: string;
  icon: React.ReactNode;
}) => {
  const fadeUp = useFadeUpVariants();
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="group flex flex-col rounded-[18px] border border-line bg-paper-soft p-8 shadow-card transition-colors duration-300 ease-gentle hover:border-brand/50 sm:p-10"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand">
        {icon}
      </span>
      <span className="mt-7 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">{label}</span>
      <span className="mt-2 font-display text-[clamp(1.35rem,2.4vw,1.7rem)] leading-[1.15] tracking-[-0.01em] text-ink transition-colors group-hover:text-brand">
        {value}
      </span>
      <span className="mt-3 text-[15px] leading-[1.5] text-ink-soft">{hint}</span>
      <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand">
        {cta}
        <span className="transition-transform duration-300 ease-gentle group-hover:translate-x-1" aria-hidden>→</span>
      </span>
    </motion.a>
  );
};

const ContactPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.06);
  const cardStagger = useStaggerVariants(0.1);
  const { link } = useAudience();

  return (
    <SiteLayout>
      <Seo
        title="Contact — begin with a conversation"
        description="Two ways to reach a founder-led studio for investment firms: email us to book a call, or send a message on LinkedIn."
        path={link('/contact')}
        image="/og/contact.png"
        imageAlt="Contact QuantikGrowth — begin with a conversation."
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: link('/') },
          { name: 'Contact', path: link('/contact') },
        ])}
      />

      <section className="pt-hero-t pb-hero-b">
        <motion.div
          className="max-w-[1360px] mx-auto px-8 lg:px-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Contact</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5.4vw,3.8rem)] leading-[1.06] tracking-[-0.018em] max-w-[15ch]"
          >
            Begin with a <em className="italic text-brand">conversation.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-[24px] max-w-[52ch] text-[clamp(1.05rem,1.6vw,1.28rem)] leading-[1.6] text-ink-soft"
          >
            If your firm’s presence isn’t yet carrying the weight of your work, we should talk. Two simple
            ways to reach us — whichever suits you.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-section">
        <motion.div
          className="max-w-[1360px] mx-auto px-8 lg:px-12"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <ContactCard
              href={MAILTO}
              label="Email"
              value={CONTACT_EMAIL}
              hint="Tell us a little about the firm, and we’ll set up a call."
              cta="Email to book a call"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <ContactCard
              href={LINKEDIN_URL}
              external
              label="LinkedIn"
              value="Message us on LinkedIn"
              hint="Prefer a DM? Reach the studio directly on LinkedIn."
              cta="Open LinkedIn"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9V9Z" />
                </svg>
              }
            />
          </div>

          <motion.p variants={fadeUp} className="mt-10 text-[14px] text-ink-soft">
            Founder-led, from Mumbai, India.
          </motion.p>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
