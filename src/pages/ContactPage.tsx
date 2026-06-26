import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, Seo, SiteLayout, useFadeUpVariants, useStaggerVariants } from '../components/site';
import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL } from '../config';
import { breadcrumbSchema } from '../data/structuredData';
import { useAudience } from '../audience';

const ContactPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.06);
  const { link } = useAudience();

  return (
    <SiteLayout>
      <Seo
        title="Contact — book a call"
        description="Book a 30-minute intro call. We build a real first design of your new site before you commit — three revisions included, or you owe nothing."
        path={link('/contact')}
        image="/og/contact.png"
        imageAlt="Contact QuantikGrowth — book a 30-minute intro call."
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: link('/') },
          { name: 'Contact', path: link('/contact') },
        ])}
      />
      <section className="pt-[64px] pb-[48px] sm:pt-[104px] sm:pb-[80px]">
        <motion.div
          className="max-w-[1320px] mx-auto px-8 lg:px-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Contact</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5.4vw,3.8rem)] leading-[1.06] tracking-[-0.018em] max-w-[16ch]"
          >
            You see the design <em className="italic text-brand">before you pay.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[52ch] mt-[24px] leading-[1.6]"
          >
            Book a 30-minute intro call below. We'll talk through the firm, and if it's a fit we build a
            real first design of your new site before you commit a rupee — three revisions included, or you
            owe nothing.
          </motion.p>
        </motion.div>
      </section>

      {/* Booking calendar — the anchor of the page */}
      <section className="pb-[64px]">
        <motion.div
          className="max-w-[1320px] mx-auto px-8 lg:px-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden rounded-[18px] border border-line bg-paper-soft">
            <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
              <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Book an intro call
              </span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-brand hover:underline"
              >
                Open in a new tab ↗
              </a>
            </div>
            <iframe
              src={BOOKING_URL}
              title="Book a 30-minute intro call with QuantikGrowth"
              loading="lazy"
              className="h-[620px] w-full border-0 sm:h-[760px]"
            />
          </div>
        </motion.div>
      </section>

      {/* Secondary contact details */}
      <section className="pb-[110px]">
        <motion.div
          className="max-w-[1320px] mx-auto px-8 lg:px-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-10 text-[15px]">
            <div>
              <div className="text-ink-soft mb-1.5">Prefer email?</div>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Starting%20a%20project`}
                className="text-ink hover:text-brand transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <div className="text-ink-soft mb-1.5">LinkedIn</div>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-ink hover:text-brand transition-colors">
                /quantikgrowth
              </a>
            </div>
            <div>
              <div className="text-ink-soft mb-1.5">Based in</div>
              <span className="text-ink">Mumbai, India</span>
            </div>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
