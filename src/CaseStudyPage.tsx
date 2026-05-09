import React, { useEffect, useState, useRef } from 'react';
import { StaggeredText, CountUp, FadeIn } from './SharedComponents';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Search,
  ChevronRight,
  TrendingUp,
  User,
  Monitor,
  Video,
  Mail,
  Award,
  Globe,
  Youtube,
  Database,
  Rocket
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

// --- Infrastructure Blueprint Page Component ---


const CaseStudyPage = ({ onNavigateHome, onOpenModal }: { onNavigateHome: () => void, onOpenModal: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary-bg text-text-primary font-sans selection:bg-accent-terracotta/20">

      {/* SECTION 1 — INFRASTRUCTURE HERO */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-6">
        <div className="container mx-auto">
          <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">
            <span className="cursor-pointer hover:text-text-primary transition-colors" onClick={onNavigateHome}>QuantikGrowth</span>
            <ChevronRight className="w-2.5 h-2.5" />
            <span>Blueprint</span>
            <ChevronRight className="w-2.5 h-2.5" />
            <span className="text-accent-terracotta">Demo</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-accent-terracotta/5 border border-accent-terracotta/10 px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 bg-accent-terracotta rounded-full animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-accent-terracotta">
              Infrastructure Roadmap · Demo
            </span>
          </div>

          <h1 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-serif leading-[1.1] tracking-tighter mb-6 sm:mb-8 max-w-[860px] italic text-accent-terracotta">
            <StaggeredText text="How We Can Help You Build a Complete Client Acquisition Engine — A Walkthrough" />
          </h1>

          <p className="text-[14px] sm:text-[15px] md:text-[17px] text-text-primary/60 max-w-[640px] mb-12 sm:mb-16 leading-relaxed font-medium">
            Most PMS firms have enviable performance but their digital presence is a liability. This demo walks you through the exact infrastructure we will build for you — a system designed to turn your website from a static brochure into a 24/7 AUM engine.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 border-y border-text-primary/10">
            {[
              { label: "ENGAGEMENT TYPE", val: "Full Build" },
              { label: "TIMELINE", val: "6 Weeks" },
              { label: "COMPONENTS", val: "7 Systems" },
              { label: "CLIENT TYPE", val: "PMS Firm" }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{item.label}</div>
                <div className="text-[12px] sm:text-[14px] font-bold tracking-tight">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE SITUATION */}
      <section className="py-16 sm:py-24 px-6 bg-secondary-surface/30">
        <div className="container mx-auto grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          <FadeIn delay={0.1}>
            <div className="bg-primary-bg border border-text-primary/5 p-6 sm:p-10 rounded-sm shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-terracotta/[0.03] rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-serif italic mb-1">Your Current State</h3>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 sm:mb-8">The Static Brochure Trap</div>

                <div className="w-full h-[1px] bg-text-primary/10 mb-6 sm:mb-8" />

                <div className="space-y-5 sm:space-y-6">
                  {[
                    { l: "Typical AUM Range", v: "₹10Cr – ₹250Cr" },
                    { l: "Digital Status", v: "Static brochure, no conversion" },
                    { l: "Lead Generation", v: "Exclusively Referrals" },
                    { l: "Opportunity Cost", v: "Invisible to searching HNIs" }
                  ].map((row, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 bg-accent-terracotta mt-1.5 rounded-full shrink-0" />
                      <div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-40 leading-none mb-1.5">{row.l}</div>
                        <div className="text-[12px] sm:text-[13px] font-medium leading-tight">{row.v}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10 inline-block px-3 py-1 bg-accent-terracotta/10 border border-accent-terracotta/20 text-accent-terracotta rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">
                  THE INITIAL AUDIT
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-terracotta">THE SITUATION</div>
              <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-serif italic leading-[1.1] tracking-tighter text-accent-terracotta">Strong Fund Returns. Static Digital Presence. Invisible to the Investors Who Matter.</h2>
              <div className="space-y-4 sm:space-y-6 text-[14px] sm:text-[15px] md:text-[16px] text-text-primary/70 leading-relaxed font-medium">
                <p>
                  You likely deliver consistent, enviable market returns — a track record most fund managers would be proud to share. But if your digital presence is limited to a &quot;static brochure&quot; website from 2018, that value isn&apos;t reaching the right people. You are competing with firms that look institutional, even if their performance doesn&apos;t match yours.
                </p>
                <p>
                  If every new client comes through a referral, your growth is capped by your personal network and your existing clients&apos; dinner-party conversations. This &quot;Referral Trap&quot; is common, but it leaves you vulnerable to competitors who are actively capturing the HNI segment online.
                </p>
                <p>
                  Your firm needs more than just a website. You need a system that proves your authority, validates your expertise, and qualifies investors while your team is focused on managing portfolios. <span className="italic text-text-primary">QuantikGrowth builds that system.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BUILT */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-32">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">THE BLUEPRINT</div>
            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-serif italic mb-8 text-accent-terracotta">6 Systems we will build for you.</h2>
            <p className="text-[15px] md:text-[16px] text-text-primary/60 max-w-[580px] mx-auto font-medium leading-relaxed">
              We do not build websites. We build integrated infrastructure. This is the exact 6-system growth engine we will deploy for your firm.
            </p>
          </div>

          <div className="space-y-40">
            {/* 01 WEBSITE */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1}>
                {/* Visual LEFT: Demo Website Home */}
                <div className="relative w-full aspect-video bg-primary-bg border border-text-primary/10 rounded-sm overflow-hidden shadow-sm">
                  <div className="absolute inset-x-0 top-0 h-8 bg-secondary-surface border-b border-text-primary/10 flex items-center px-4 gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                    <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                    <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                    <div className="ml-4 flex-grow bg-primary-bg h-4 rounded-sm border border-text-primary/5 flex items-center px-3">
                      <div className="text-[8px] opacity-30 font-bold uppercase tracking-widest">quantikgrowth.com</div>
                    </div>
                  </div>
                  <div className="absolute top-8 left-0 right-0 bottom-0 bg-[#0a2a1b] overflow-hidden">
                    <iframe
                      src="https://pms-demo-one.vercel.app/"
                      className="absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left pointer-events-none border-none"
                      style={{ transform: 'scale(0.5)', width: '200%', height: '200%' }}
                      title="QuantikGrowth Site Preview"
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">01 / WEBSITE ARCHITECTURE</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">Your New Conversion-Engineered Home</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>The foundation of everything. We will rebuild your website on a platform designed for speed and authority. Every section is reverse-engineered from the psychology of the HNI investor decision journey.</p>
                    <p>Your new site will communicate AUM performance and SEBI registration in the first 5 seconds. We ensure your fund strategy is explained with institutional clarity while remaining strictly within compliance guardrails.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "8-page core architecture",
                      "A/B tested value props",
                      "SEBI-compliant copy",
                      "98 PageSpeed score",
                      "Zoho CRM lead routing",
                      "Embedded booking flows"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-1 border-l-2 border-accent-terracotta pl-6 italic">
                    <div className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1">Conversion Efficiency</div>
                    <div className="text-[14px] font-medium leading-relaxed">Benchmark Goal: <span className="text-accent-terracotta">7–9% completion</span> based on financial layout benchmarks.</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 02 AI CHATBOT */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1} className="lg:order-2">
                <div className="relative w-full max-w-[320px] mx-auto aspect-[9/18] bg-secondary-surface border-[8px] border-text-primary rounded-[40px] overflow-hidden shadow-2xl">
                  <div className="absolute top-0 inset-x-0 h-10 bg-text-primary flex items-center justify-center">
                    <div className="w-16 h-1 rounded-full bg-white/10" />
                  </div>
                  <div className="absolute inset-0 mt-10 p-4 space-y-4 text-left">
                    <div className="flex gap-2 items-center mb-4 border-b border-text-primary/5 pb-2">
                      <div className="w-8 h-8 rounded-full bg-accent-terracotta/10 flex items-center justify-center text-accent-terracotta font-bold text-[10px]">AI</div>
                      <div>
                        <div className="text-[9px] font-bold tracking-tight">Your Digital Assistant</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-success" />
                          <div className="text-[8px] opacity-40 font-bold uppercase">Ready</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-text-primary/5 text-text-primary/80 border border-text-primary/5 rounded-2xl rounded-tr-none py-2 px-3 text-[10px] font-medium max-w-[85%]">
                        What is your minimum investment?
                      </div>
                    </div>

                    <div className="flex justify-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent-terracotta shrink-0" />
                      <div className="bg-white border border-text-primary/5 rounded-2xl rounded-tl-none py-3 px-4 text-[10px] font-medium max-w-[85%] shadow-sm leading-relaxed">
                        The minimum is ₹50 Lakhs. Our fund strategy focuses on concentrated Alpha. Should I send the PDF?
                      </div>
                    </div>

                    <div className="flex justify-start gap-2">
                      <div className="w-6 h-6 shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="w-full bg-primary-bg border border-accent-terracotta/20 text-accent-terracotta text-[9px] font-bold uppercase tracking-widest text-center py-2">Request Audit →</div>
                        <div className="w-full bg-primary-bg border border-text-primary/10 text-text-primary/40 text-[9px] font-bold uppercase tracking-widest text-center py-2">Get Document</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                  {["Document-Trained", "SEBI-Aware", "24/7 Presence"].map(t => (
                    <div key={t} className="px-3 py-1 bg-secondary-surface text-text-primary/40 text-[9px] font-bold uppercase tracking-widest">{t}</div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">02 / AI CHATBOT</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">An AI That Knows Your Fund Strategy Inside Out</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>We will train a custom large-language-model chatbot on your specific fund documents: strategy PDFs, reports, and regulatory disclosures. It will live on your site as a permanent digital relationship manager.</p>
                    <p>In an industry where most firms are afraid to say anything digital, an AI trained to represent your expertise 24/7 is a serious competitive advantage.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "Trained on your strategies",
                      "SEBI-aware guardrails",
                      "Direct lead capturing",
                      "RM handoff protocols",
                      "Full transparency logs",
                      "Instant qualification"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-1 border-l-2 border-accent-terracotta pl-6 italic">
                    <div className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1">Projected Engagement</div>
                    <div className="text-[14px] font-medium leading-relaxed">Targeting <span className="text-accent-terracotta">10–15 qualified inquiries</span> per month based on similar PMS builds.</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 03 SEO BLOG ENGINE */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1}>
                {/* Visual: SEO Dashboard Mockup */}
                <div className="bg-primary-bg border border-text-primary/5 rounded-sm p-6 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-text-primary/5 pb-4">
                    <div className="w-4 h-4 rounded-full border-2 border-text-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-text-primary/20 rounded-full" />
                    </div>
                    <div className="text-[10px] font-bold opacity-30 tracking-wide">best pms fund for long term wealth india</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 border border-accent-terracotta/20 bg-accent-terracotta/[0.02] shadow-sm relative overflow-hidden group hover:border-accent-terracotta/40 transition-colors">
                      <div className="absolute inset-y-0 left-0 w-1 bg-accent-terracotta" />
                      <div className="w-24 h-16 bg-[#0a2a1b] shrink-0 rounded-sm flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-shimmer" />
                        <div className="text-[#C8F04A] text-[8px] font-bold uppercase tracking-widest relative z-10">Article</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[9px] text-text-primary/40 font-bold uppercase tracking-widest mb-1.5">quantikgrowth.com/insights</div>
                        <div className="text-[15px] font-serif text-accent-terracotta italic font-bold mb-1.5 leading-tight">PMS vs Mutual Funds: Which is Right for HNIs?</div>
                        <div className="text-[11px] text-text-primary/60 leading-relaxed font-medium line-clamp-2">If you have over ₹50 Lakhs to invest, here is why a SEBI-registered PMS may outperform traditional mutual funds in capturing structural growth...</div>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-text-primary/5 hover:border-text-primary/20 transition-colors group opacity-80">
                      <div className="w-24 h-16 bg-secondary-surface shrink-0 rounded-sm flex items-center justify-center border border-text-primary/5 group-hover:scale-105 transition-transform">
                        <div className="text-text-primary/30 text-[8px] font-bold uppercase tracking-widest">Article</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[9px] text-text-primary/40 font-bold uppercase tracking-widest mb-1.5">quantikgrowth.com/insights</div>
                        <div className="text-[15px] font-serif font-bold mb-1.5 leading-tight text-text-primary/90">Understanding The Growth Engine Strategy</div>
                        <div className="text-[11px] text-text-primary/60 leading-relaxed font-medium line-clamp-2">Deep dive into how our alpha leaders capitalize on structural growth across small and midcap segments...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">03 / SEO BLOQ ENGINE</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">Permanent Authority That Compounds Over Time</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>Paid ads stop when you stop paying. SEO artifacts compound. Every piece of content we curate for you is a permanent asset that will rank on Google, attracting high-intent investors month after month.</p>
                    <p>We identify the exact queries your ideal HNI investors are searching for, building a multi-month roadmap to secure your firm&apos;s authority on page one.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "High-intent keyword mapping",
                      "Cornerstone content curotions",
                      "Editorial roadmap deployment",
                      "Schema markup optimization",
                      "Internal authority architecture",
                      "Google Console integration"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-1 border-l-2 border-accent-terracotta pl-6 italic">
                    <div className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1">Growth Trajectory</div>
                    <div className="text-[14px] font-medium leading-relaxed">Month 1: 0 visits. Month 3: 847/mo. <span className="text-accent-terracotta">Month 6 projection: 3,200+ visits.</span></div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 04 NEWSLETTER */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1} className="lg:order-2">
                <div className="bg-primary-bg border border-text-primary/5 rounded-sm p-4 shadow-xl overflow-hidden relative">
                  {/* Email Client Header */}
                  <div className="flex items-center gap-3 bg-secondary-surface px-5 py-3 rounded-t-sm border border-text-primary/5 mb-0">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                      <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                      <div className="w-2 h-2 rounded-full bg-text-primary/10" />
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-text-primary/30 ml-2">Inbox — QuantikGrowth Insights</div>
                  </div>

                  {/* Newsletter Signup Bar */}
                  <div className="bg-accent-terracotta/5 border border-accent-terracotta/15 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <div className="text-[11px] font-bold text-text-primary mb-0.5">The QuantikGrowth Letter</div>
                      <div className="text-[9px] text-text-primary/40 font-medium">Weekly insights for SEBI-registered fund managers</div>
                    </div>
                    <div className="bg-text-primary text-primary-bg px-4 py-1.5 text-[8px] font-bold uppercase tracking-widest rounded-sm shadow-sm shrink-0">Subscribed ✓</div>
                  </div>

                  {/* Email List */}
                  <div className="divide-y divide-text-primary/5">
                    {[
                      { from: "QuantikGrowth Insights", subject: "Market Volatility & The Alpha Opportunity", time: "Just Now", unread: true },
                      { from: "QuantikGrowth Weekly", subject: "Your Q3 Performance Update — AUM +18.2%", time: "2 Days Ago", unread: true },
                      { from: "QuantikGrowth Team", subject: "Welcome to The Growth Engine Newsletter", time: "1 Week Ago", unread: false }
                    ].map((email, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.3 + 0.2, duration: 0.4 }}
                        className={`flex gap-3 items-start px-5 py-4 ${email.unread ? 'bg-accent-terracotta/[0.02]' : 'opacity-50'} hover:bg-secondary-surface/30 transition-colors cursor-pointer`}
                      >
                        <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${email.unread ? 'bg-accent-terracotta' : 'border border-text-primary/20'}`} />
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-center mb-1">
                            <div className={`text-[10px] ${email.unread ? 'font-bold' : 'font-medium'}`}>{email.from}</div>
                            <div className="text-[8px] opacity-40 font-bold shrink-0 ml-2">{email.time}</div>
                          </div>
                          <div className={`text-[11px] font-serif ${email.unread ? 'italic text-text-primary/80' : 'text-text-primary/50'} truncate`}>{email.subject}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">04 / NURTURE SYSTEM</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">Turn Anonymous Visitors Into Ready-to-Invest Leads</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>Most HNI investors are not ready to commit the first time they see your artifact. They are researching. We will design a narrative system that stays present in their inbox, building trust over weeks and months.</p>
                    <p>Your new nurture sequence will educate prospects on your unique philosophy and regulatory structure automatically, so they reach out when their conviction is high.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "Boutique curated templates",
                      "Welcome automation setup",
                      "High-value HNI guides",
                      "Lead capture strategies",
                      "Strategic content calendar",
                      "CRM integration & tagging"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-1 border-l-2 border-accent-terracotta pl-6 italic">
                    <div className="text-[10px] uppercase font-bold opacity-40 tracking-widest mb-1">Boutique Benchmarks</div>
                    <div className="text-[14px] font-medium leading-relaxed">Targeting <span className="text-accent-terracotta">60%+ open rates</span> and consistent inquiry flow from the nurture sequence.</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 05 FEATURED IN */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1}>
                <div className="bg-primary-bg p-8 border border-text-primary/5 space-y-8 rounded-sm shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#BC6C25_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />
                  <div className="relative z-10 border-b border-text-primary/5 pb-4 mb-4 flex justify-between items-end">
                    <div>
                      <div className="text-[14px] font-serif italic text-accent-terracotta">Press & Media</div>
                      <div className="text-[9px] font-bold opacity-40 uppercase tracking-widest">Institutional Coverage</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full border border-text-primary/10 flex items-center justify-center"><ArrowRight className="w-3 h-3 rotate-180 opacity-40" /></div>
                      <div className="w-6 h-6 rounded-full border border-text-primary/10 flex items-center justify-center"><ArrowRight className="w-3 h-3 opacity-40" /></div>
                    </div>
                  </div>

                  <div className="relative z-10 grid gap-4">
                    {[
                      { source: "Economic Times", title: "Why QuantikGrowth is leading the PMS revolution", date: "Oct 2023" },
                      { source: "Moneycontrol", title: "Top 5 SEBI-Registered Funds to watch out for", date: "Aug 2023" },
                      { source: "Mint", title: "The Alpha Generation Strategies of 2024", date: "Jan 2024" }
                    ].map((media, i) => (
                      <div key={i} className="flex gap-4 items-center p-4 bg-secondary-surface/50 border border-text-primary/5 hover:border-accent-terracotta/20 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 bg-text-primary/5 rounded-sm flex items-center justify-center shrink-0">
                          <div className="text-[8px] font-black uppercase rotate-[-45deg] opacity-20">{media.source.substring(0, 3)}</div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <div className="text-[9px] font-bold text-accent-terracotta uppercase tracking-widest">{media.source}</div>
                            <div className="text-[8px] font-bold opacity-40">{media.date}</div>
                          </div>
                          <div className="text-[13px] font-serif font-medium group-hover:text-accent-terracotta transition-colors">{media.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">05 / MEDIA ARTIFACTS</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">All Your Institutional Media Artifacts In One Place</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>HNI investors do not trust self-promotion. They trust institutions saying you&apos;re worth paying attention to. We build the architecture to showcase your firm&apos;s third-party validations and media appearances.</p>
                    <p>We will also curate a professional media artifact — a dedicated press dashboard that makes it dramatically easier for financial journalists to highlight your fund&apos;s unique strategy and for prospective clients to verify your credibility.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "Dynamic CMS press section",
                      "Professional media artifact",
                      "Targeted pitch curation",
                      "Awards showcase design",
                      "Structured Google News data",
                      "Institutional credibility bar"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 06 VIDEO PRODUCTION */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn delay={0.1} className="lg:order-2">
                <div className="relative h-[300px] flex items-center justify-center">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="absolute bg-primary-bg border border-text-primary/10 rounded-sm aspect-video w-[320px] transition-transform hover:z-20 hover:scale-105 shadow-xl flex flex-col overflow-hidden"
                      style={{
                        transform: `rotate(${(i - 2) * 5}deg) translateX(${(i - 2) * 40}px) translateY(${(i - 2) * -10}px)`,
                        zIndex: 10 + i
                      }}
                    >
                      <div className="flex-grow bg-secondary-surface flex items-center justify-center group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-accent-terracotta flex items-center justify-center pl-1 shadow-lg shadow-accent-terracotta/20 group-hover:scale-110 transition-transform">
                          <Rocket className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="p-4 bg-primary-bg flex justify-between items-center border-t border-text-primary/5">
                        <div>
                          <div className="text-[9px] font-bold uppercase opacity-40">Website Hero</div>
                          <div className="text-[11px] font-bold tracking-tight">Strategy Explanation</div>
                        </div>
                        <div className="text-[9px] opacity-30">4:32</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  {["Mumbai Studio", "1-Day Shoot", "3 Final Artifacts"].map(t => (
                    <div key={t} className="px-3 py-1 bg-accent-terracotta/5 text-accent-terracotta text-[9px] font-bold uppercase tracking-widest">{t}</div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-text-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">06 / VIDEO STRATEGY</div>
                  <h3 className="text-4xl font-serif italic leading-tight text-accent-terracotta">Investors Invest in People. Video Is Your Virtual Handshake.</h3>
                  <div className="space-y-6 text-[15px] text-text-primary/70 leading-relaxed font-medium">
                    <p>Before an HNI investor moves capital, they decide if they trust the person managing it. Video collapses that distance, allowing you to showcase your expertise at scale.</p>
                    <p>We will help you produce cinematic assets — scripts, coordination, and distribution — that humanize your fund without sounding like a disclaimer.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-text-primary/10">
                    {[
                      "Narrative script curation",
                      "Studio shoot coordination",
                      "Cinematic post-production",
                      "Multi-channel distribution",
                      "Short-form social edits",
                      "Institutional video branding"
                    ].map(f => (
                      <div key={f} className="flex gap-3 items-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-[13px] font-bold opacity-80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>


          </div>
        </div>
      </section>

      {/* SECTION 4 — THE PROJECTED OUTCOME */}
      <section className="py-16 sm:py-24 px-6 bg-secondary-surface">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24 max-w-2xl mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">THE POTENTIAL ALPHA</div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-serif italic mb-6 sm:mb-8 text-accent-terracotta">Target Growth Milestones</h2>
            <p className="text-[13px] sm:text-[14px] text-text-primary/60 font-medium leading-relaxed italic">
              Estimated benchmarks based on categories averages for PMS firms implementing integrated digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-24 text-center">
            {[
              { val: 2500, l: "Traffic", d: "AUM Visibility" },
              { val: 6.5, l: "Conv. Rate", d: "Best Practice", suffix: "%" },
              { val: 12, l: "Leads/mo", d: "Pipeline Goal" },
              { val: 50, l: "Seed Subs", d: "60-Day Target" },
              { val: 250, l: "Nurture Pool", d: "Month 6" },
              { val: 3, l: "Rankings", d: "Authority Hubs" }
            ].map((m, i) => (
              <div key={i} className="space-y-2 lg:space-y-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-accent-terracotta leading-none">
                  <CountUp end={m.val} suffix={m.suffix} duration={2} />
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">{m.l}</div>
                <div className="text-[8px] sm:text-[10px] text-success font-bold uppercase tracking-widest">{m.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { phase: "Weeks 1–6", title: "Build Phase", d: ["Artifact Curation", "Infra Deployment", "AI Training"] },
              { phase: "Months 2–3", title: "Growth Phase", d: ["Content Compounding", "Indexing artifacts", "Signal Tuning"] },
              { phase: "Months 4–6", title: "Compounding", d: ["Organic Dominion", "AUM Pipeline", "Boutique Scale"] }
            ].map((p, i) => (
              <div key={i} className="bg-primary-bg border border-text-primary/5 p-8 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif italic text-4xl group-hover:text-accent-terracotta group-hover:opacity-100 transition-all">0{i + 1}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{p.phase}</div>
                <h4 className="text-xl font-serif italic mb-6">{p.title}</h4>
                <ul className="space-y-3">
                  {p.d.map(item => (
                    <li key={item} className="flex gap-3 items-center text-[10px] font-bold uppercase tracking-widest opacity-40">
                      <div className="w-1 h-1 bg-accent-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE VISION */}
      <section className="py-32 px-6">
        <div className="container mx-auto flex justify-center">
          <div className="max-w-3xl w-full bg-secondary-surface/40 border border-text-primary/5 p-16 rounded-sm relative text-center">
            <div className="absolute top-8 left-8 text-7xl font-serif italic opacity-10 text-accent-terracotta select-none">&ldquo;</div>
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-12 text-text-primary/80">
              The goal is simple: an infrastructure that works while you are in a portfolio review. One that turns your fund management talent into a tactile digital authority that HNIs can actually find.
            </p>
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-terracotta">Your QuantikGrowth Build</div>
              <div className="text-[10px] font-bold opacity-40 tracking-widest">Built for SEBI-Registered PMS Boutiques</div>
            </div>
            <div className="absolute bottom-8 right-8 text-7xl font-serif italic opacity-10 text-accent-terracotta select-none rotate-180">&ldquo;</div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT YOUR BUILD COULD LOOK LIKE */}
      <section className="py-24 px-6 border-t border-text-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">YOUR TURN</div>
            <h2 className="text-[44px] font-serif italic leading-tight mb-4">The Infrastructure Principles Are Constant.</h2>
            <p className="text-[14px] text-text-primary/60 max-w-sm mx-auto font-medium">Applying the system to your fund&apos;s specific growth stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                t: "Foundation Tier",
                AUM: "Under ₹100Cr",
                body: "Priority: credibility artifacts (website, AI assistant) that make you look like a ₹500Cr boutique. Your brand needs to signal institutional scale before your AUM reaches it."
              },
              {
                t: "Growth engine",
                AUM: "₹100Cr–₹500Cr",
                body: "Compounding digital artifacts — SEO content, video trust-building, and newsletter nurturing — are your move to building a sustainable inbound pipeline."
              },
              {
                t: "Institution Tier",
                AUM: "₹500Cr+",
                body: "Custom scale engagement. We build press-worthy sites, produce cinimatic video, and curate thought leadership positioning your fund managers as India&apos;s leading category voices."
              }
            ].map((card, i) => (
              <div key={i} className="bg-primary-bg border border-text-primary/5 p-12 hover:border-accent-terracotta/20 transition-all rounded-sm group">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">{card.t}</div>
                <div className="text-2xl font-serif italic mb-6 text-accent-terracotta">{card.AUM} AUM</div>
                <p className="text-[13px] text-text-primary/60 leading-relaxed font-medium mb-10">{card.body}</p>
                <div className="w-12 h-[1px] bg-text-primary/10 group-hover:w-full group-hover:bg-accent-terracotta transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — BOTTOM CTA */}
      <section className="py-20 sm:py-24 md:py-40 px-6 relative overflow-hidden bg-secondary-surface">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(188,108,37,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-[28px] sm:text-[40px] md:text-[64px] font-serif italic mb-6 sm:mb-8 leading-tight text-accent-terracotta">
            Ready to Build Your Own <br className="hidden md:block" /> Growth Engine?
          </h2>
          <p className="text-[14px] sm:text-[16px] text-text-primary/60 max-w-[520px] mx-auto mb-10 sm:mb-16 leading-relaxed font-medium">
            Request a free 30-minute Strategy Session. We curate a tactile roadmap for your firm&apos;s digital infrastructure and benchmark your presence against Category Leaders.
          </p>
          <button
            onClick={onOpenModal}
            className="bg-text-primary text-primary-bg text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] px-10 sm:px-14 py-5 sm:py-6 hover:opacity-90 active:scale-95 transition-all mb-12 sm:mb-16 w-full sm:w-auto"
          >
            Request Free Strategy Audit →
          </button>
          <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-40">
            30-min call · No obligation · For SEBI-registered PMS firms only
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyPage;
