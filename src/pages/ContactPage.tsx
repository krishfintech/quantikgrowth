import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, Seo, SiteLayout, useFadeUpVariants, useStaggerVariants } from '../components/site';

const EMAIL = 'krish@quantikgrowth.in';
const LINKEDIN_URL = 'https://www.linkedin.com/company/quantikgrowth';

const ContactPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.06);

  return (
    <SiteLayout>
      <Seo
        title="Contact — start a project"
        description="Tell us about the firm. We build a real first design of your new site before you commit — love it and we continue with three revisions; if you don't, you owe nothing."
        path="/contact"
      />
      <section className="pt-[104px] pb-[120px]">
        <motion.div
          className="max-w-[760px] mx-auto px-6"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Contact</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5.4vw,3.8rem)] leading-[1.06] tracking-[-0.018em]"
          >
            You see the design <em className="italic text-brand">before you pay.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[52ch] mt-[24px] leading-[1.6]"
          >
            We build a real first design of your new site. If you love it, we continue — three revisions
            included. If you don't, you owe nothing. Tell us about the firm and we'll take it from there.
          </motion.p>

          {/* One clear action */}
          <motion.div variants={fadeUp} className="mt-[44px]">
            <a
              href={`mailto:${EMAIL}?subject=Starting%20a%20project`}
              className="inline-flex items-center gap-3 bg-brand text-white rounded-full px-[28px] py-[16px] text-[1.05rem] font-medium hover:bg-brand-deep transition-colors"
            >
              {EMAIL}
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Secondary contact */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-line flex flex-wrap gap-x-12 gap-y-4 text-[15px]"
          >
            <div>
              <div className="text-ink-soft mb-1">Email</div>
              <a href={`mailto:${EMAIL}`} className="text-ink hover:text-brand transition-colors">
                {EMAIL}
              </a>
            </div>
            <div>
              <div className="text-ink-soft mb-1">LinkedIn</div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-brand transition-colors"
              >
                /quantikgrowth
              </a>
            </div>
            <div>
              <div className="text-ink-soft mb-1">Based in</div>
              <span className="text-ink">Mumbai, India</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
