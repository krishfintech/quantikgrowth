/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { FadeIn, CountUp } from './SharedComponents';
import { 
  ArrowRight, 
  Mail, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2,
  Linkedin,
  Twitter,
  ChevronRight,
  ExternalLink,
  Target,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Search,
  Video,
  Monitor,
  MessageSquare,
  BarChart3,
  Database,
  ArrowLeft
} from 'lucide-react';

// --- Helpers ---



// --- Article Components ---

const Callout = ({ children, type = 'default', label }: { children: React.ReactNode, type?: 'default' | 'green' | 'red', label: string }) => {
  const styles = {
    default: "bg-accent-terracotta/[0.04] border-l-3 border-accent-terracotta",
    green: "bg-success/[0.04] border-l-3 border-success",
    red: "bg-red-500/[0.04] border-l-3 border-red-500"
  };
  
  const labelStyles = {
    default: "text-accent-terracotta",
    green: "text-success",
    red: "text-red-500"
  };

  return (
    <div className={`${styles[type]} rounded-r-lg p-6 sm:p-8 my-8 sm:my-10`}>
      <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 font-mono ${labelStyles[type]}`}>
        {label}
      </div>
      <div className="text-[15px] sm:text-[16px] text-text-primary/60 leading-relaxed italic">
        {children}
      </div>
    </div>
  );
};

const StatCard = ({ number, label, suffix = "" }: { number: string, label: string, suffix?: string }) => {
  const num = parseFloat(number.replace(/[^0-9.]/g, ''));
  
  return (
    <div className="bg-secondary-surface/40 border border-text-primary/5 rounded-sm p-6 text-center">
      <div className="text-3xl sm:text-4xl font-serif italic text-accent-terracotta mb-2">
        <CountUp end={num} suffix={suffix} />
      </div>
      <div className="text-[11px] font-bold uppercase tracking-widest text-text-primary/40 leading-tight">
        {label}
      </div>
    </div>
  );
};



const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 my-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex gap-4 items-start text-[15px] text-text-primary/70 leading-relaxed">
        <CheckCircle2 className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ComparisonTable = () => (
  <div className="grid sm:grid-cols-2 gap-6 my-10">
    <div className="bg-secondary-surface/20 border border-red-500/20 rounded-sm p-6 sm:p-8">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/60 mb-6 font-mono">Most PMS Sites</div>
      <ul className="space-y-4">
        {[
          "Visitor lands, sees a wall of text and a PDF download",
          "No mobile optimisation — pinch and zoom on a ₹50L decision",
          "Contact: a generic form that emails a neglected inbox",
          "No trust signals, no proof, no next step",
          "Bounce rate: 70–80%"
        ].map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start text-[13px] text-text-primary/50 italic leading-snug">
            <span className="text-red-500 shrink-0">✕</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-accent-terracotta/[0.03] border border-accent-terracotta/20 rounded-sm p-6 sm:p-8">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-6 font-mono">A QuantikGrowth Build</div>
      <ul className="space-y-4">
        {[
          "Investor sees a clear offer, proof, and a booking button in 5 seconds",
          "Flawless on every device — designed mobile-first",
          "AI chatbot live, calendar booking embedded, CRM wired",
          "Performance track record, media mentions, SEBI credentials prominent",
          "Bounce rate: 30–40%"
        ].map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start text-[13px] text-text-primary/70 font-medium leading-snug">
            <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServiceCard = ({ icon, sub, title, desc, items }: { icon: string, sub: string, title: string, desc: string, items: string[] }) => (
  <div className="bg-secondary-surface/30 border border-text-primary/5 rounded-sm p-8 sm:p-10 my-10 group hover:border-accent-terracotta/20 transition-all duration-500">
    <div className="flex items-center gap-5 mb-8">
      <div className="w-14 h-14 bg-accent-terracotta/10 border border-accent-terracotta/20 rounded flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-terracotta font-mono mb-1">{sub}</div>
        <h3 className="text-xl font-serif italic text-text-primary tracking-tight">{title}</h3>
      </div>
    </div>
    <p className="text-[15px] text-text-primary/50 leading-relaxed mb-8 italic">
      {desc}
    </p>
    <Checklist items={items} />
  </div>
);

const ProcessStep = ({ number, title, body, isLast }: { number: string, title: string, body: string, isLast?: boolean }) => (
  <div className="flex gap-6 sm:gap-10">
    <div className="flex flex-col items-center shrink-0">
      <div className="w-10 h-10 rounded-full border border-accent-terracotta/30 flex items-center justify-center text-[11px] font-bold text-accent-terracotta font-mono bg-accent-terracotta/5">
        {number}
      </div>
      {!isLast && <div className="w-[1px] h-24 sm:h-20 bg-text-primary/10 mt-2" />}
    </div>
    <div className="pt-2 pb-10">
      <h4 className="text-[16px] font-bold text-text-primary mb-2 tracking-tight">{title}</h4>
      <p className="text-[14px] text-text-primary/50 leading-relaxed font-medium">
        {body}
      </p>
    </div>
  </div>
);

// --- Main Blog Page ---

const BlogPage = ({ onNavigateHome, onOpenModal }: { onNavigateHome: () => void, onOpenModal: () => void }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "website", label: "01 — The Foundation" },
    { id: "seo", label: "02 — SEO Engine" },
    { id: "newsletter", label: "03 — Lead Nurture" },
    { id: "chatbot", label: "04 — AI Infrastructure" },
    { id: "video", label: "05 — Video & Trust" },
    { id: "system", label: "06 — The Connection" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-primary-bg min-h-screen">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-text-primary/5 z-[100]">
        <motion.div 
          className="h-full bg-accent-terracotta origin-left"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Header */}
      <header className="pt-[100px] pb-16 sm:pb-24 border-b border-text-primary/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary/40 hover:text-text-primary mb-8 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>

            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary/40 mb-6">
              <span className="hover:text-text-primary cursor-pointer transition-colors" onClick={onNavigateHome}>QuantikGrowth</span>
              <ChevronRight className="w-3 h-3 opacity-30" />
              <span className="text-text-primary/20">The Client Acquisition Infrastructure</span>
            </div>

            <div className="inline-flex px-3 py-1 bg-accent-terracotta/[0.06] text-accent-terracotta border border-accent-terracotta/20 text-[10px] font-bold uppercase tracking-widest mb-8">
              ⚡ CLIENT ACQUISITION · STRATEGY
            </div>

            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-serif italic leading-[1.1] mb-8 max-w-5xl tracking-tighter">
              The Secret Infrastructure Behind India&apos;s <br />
              <span className="text-accent-terracotta">Fastest-Growing</span> PMS Firms
            </h1>

            <p className="text-lg sm:text-2xl text-text-primary/50 max-w-3xl leading-relaxed mb-12 font-medium italic">
              New-age fund managers are growing AUM at rates that make no sense on paper. Same returns. Same market. Completely different outcomes. This is not a coincidence — and it has nothing to do with performance.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 py-8 border-t border-text-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-text-primary border border-text-primary/10 flex items-center justify-center text-[10px] font-bold text-primary-bg">QG</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5">QuantikGrowth Team</div>
                  <div className="text-[10px] opacity-40 uppercase tracking-widest">Mumbai · May 2024</div>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-text-primary/5 hidden sm:block" />
              <div className="flex items-center gap-2 opacity-40">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">11 min read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          
          {/* Main Article Content */}
          <main className="max-w-3xl space-y-10 sm:space-y-16 text-[17px] sm:text-[18px] text-text-primary/70 leading-relaxed font-medium">
            <FadeIn>
              <p className="text-[20px] sm:text-[24px] text-text-primary font-serif italic mb-12 leading-relaxed tracking-tight border-l-4 border-accent-terracotta pl-8 bg-accent-terracotta/[0.02] py-6 rounded-r-lg">
                Look at the fund managers growing their AUM fastest in India right now. Look at their CAGR. Now look at the established value-based managers who have been compounding quietly for fifteen years. The returns are comparable. The AUM growth is not.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>What is the difference? It is not alpha. It is not team size. It is not even SEBI connections or legacy relationships. The difference is that one group has built a systematic, always-on client acquisition machine — and the other group is still waiting for the next referral over dinner.</p>

              <p>We have audited more than thirty SEBI-registered PMS firms&apos; digital presence in the past year. The pattern is identical every time. The firms growing fastest are not the best fund managers in the room. They are the best-marketed. They show up on Google. They have a website that converts. Their AI answers investor questions at 2am. Their newsletter lands in inboxes every week. Their fund manager&apos;s face is on video, building trust before the first call is ever booked.</p>

              <Callout label="The Core Insight">
                Without the infrastructure described in this article, these same firms would have grown AUM 80% slower. The fund performance is the same. The system around it is what compounds.
              </Callout>

              <p>This is the full playbook. Every component. How it works. Why it works. And how the pieces connect into a machine that runs while you are running portfolios.</p>
            </FadeIn>

            {/* SECTION 1 */}
            <FadeIn>
              <div id="website" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">01 / Foundation</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">Your Website Is Either Closing Clients or Losing Them. There Is No Middle Ground.</h2>
                
                <p>Every HNI investor who hears about your fund — through a referral, a LinkedIn post, an article, a podcast appearance, anything — does the same thing next. They open Google, search your firm name, and look at your website. This happens within minutes. Often within seconds. What they see in that moment determines whether the referral turns into a conversation or dies silently.</p>
                
                <p className="mt-6">Most PMS websites fail this test catastrophically. They are digital brochures from 2018. They load slowly on mobile. They have no clear value proposition above the fold. They have no way for a prospect to take immediate action — no booking link, no chatbot, no lead capture. The investor looks around for twenty seconds, finds nothing that pulls them forward, and closes the tab. The referral evaporates. You never knew they were there.</p>

                <ServiceCard 
                  icon="🖥️"
                  sub="What We Build"
                  title="A Conversion-Engineered Website on Antigravity"
                  desc="We design and build your complete website on Antigravity — India's most powerful no-code platform. Every section is reverse-engineered from how HNI investors actually make decisions."
                  items={[
                    "Above-the-fold value proposition that answers the investor's first three questions",
                    "SEBI-compliant copy — every claim approved within regulatory guardrails",
                    "Mobile-first, sub-2-second load time. Core Web Vitals score above 95.",
                    "Calendly booking integrated on three pages — zero friction",
                    "CRM connection so every lead is captured and routed automatically"
                  ]}
                />

                <ComparisonTable />
                
                <p className="mt-8 italic text-text-primary/50 text-[15px]">The website is not one of the components. It is the container for every other component. Everything else we build — blogs, chatbot, newsletter, video — drives traffic back to this one destination. It has to convert.</p>
              </div>
            </FadeIn>

            {/* SECTION 2 */}
            <FadeIn>
              <div id="seo" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">02 / Organic Growth</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">SEO Blog Content: The Marketing Asset That Pays You Back for Years</h2>
                
                <p>Paid ads stop working the moment you stop paying. Referrals dry up when the network gets saturated. Events are expensive, unpredictable, and you meet the same people. SEO is different. Every blog post you publish is a permanent asset that compounds — more authority over time, more traffic month over month, more investor inquiries from people who found you on Google and already trust you before the first call.</p>
                
                <p className="mt-6">Here is the reality of the Indian PMS search landscape right now: thousands of HNI investors — people with ₹50 lakh to ₹5 crore ready to deploy — search for PMS solutions on Google every single month. The vast majority of page one results are comparison aggregators and generic financial portals. The PMS firms themselves are almost entirely absent. This is a structural gap that we exploit for every client we work with.</p>

                <blockquote className="text-[22px] sm:text-[28px] font-serif italic text-text-primary border-y border-text-primary/5 py-12 my-12 relative px-8">
                  <span className="absolute -top-4 -left-2 text-[80px] text-accent-terracotta/20 font-serif leading-none">&quot;</span>
                  The firms that start building SEO today will own their category&apos;s search results in eighteen months. The firms that wait will pay aggregator fees forever to appear on someone else&apos;s list.
                </blockquote>

                <ServiceCard 
                  icon="✍️"
                  sub="What We Build"
                  title="A Permanent SEO Content Engine"
                  desc="We research, write, and publish high-authority SEO blog posts targeting the exact queries your ideal investors are searching. We handle everything — your team's only job is to approve."
                  items={[
                    "Full keyword research — 40+ target queries mapped and prioritised",
                    "Cornerstone articles (2,500+ words) targeting highest-value search terms",
                    "SEBI-compliant financial content — informative and safe",
                    "Internal linking architecture that pushes readers toward your fund strategy",
                    "Every post includes a lead magnet CTA — investment guides or booking prompts"
                  ]}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  <StatCard number="0" label="Organic visits, Month 1" />
                  <StatCard number="847" label="Monthly organic visits by Month 3" />
                  <StatCard number="3200" label="Visit projection, Month 6" suffix="+" />
                </div>

                <Callout type="green" label="Why This Matters for PMS">
                  An HNI investor who finds you through a search result arrives pre-educated. They have read your article. They understand your philosophy. They already trust your expertise before the first conversation. That is a fundamentally different — and far more convertible — lead than a cold referral.
                </Callout>
              </div>
            </FadeIn>

            {/* SECTION 3 */}
            <FadeIn>
              <div id="newsletter" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">03 / Lead Nurture</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">The Newsletter: Closing Investors Who Are Not Ready Yet — Automatically</h2>
                
                <p>Most HNI investors do not make a ₹50 lakh investment decision the first time they hear about a fund. They research. They compare. They sit with it. The average consideration window for a high-ticket financial investment is sixty to ninety days. During that window, the fund manager who stays in their inbox wins. The ones who rely on one referral call and nothing after lose.</p>
                
                <p className="mt-6">A newsletter is how you stay present without being pushy. Market commentary, investment philosophy deep-dives, educational content on PMS vs other structures — sent consistently to every prospect who has ever shown interest in your firm. By the time they are ready to move, you are the only name they remember because you have been providing value to them for three months.</p>

                <ServiceCard 
                  icon="📧"
                  sub="What We Build"
                  title="Complete Lead Nurturing Infrastructure"
                  desc="We design your newsletter template, write the first six months of content, and configure an automated welcome sequence. Your team gets a monthly send-ready draft."
                  items={[
                    "Custom newsletter template — dark, premium, reflects your brand",
                    "3-email automated welcome sequence sent on days 0, 3, and 7",
                    "Lead magnet design — 'The HNI Investment Guide: PMS Explained' — 12-page PDF",
                    "CRM tagging: prospects who open 3+ emails get flagged as hot leads",
                    "Newsletter signup embedded at 5 locations across your website"
                  ]}
                />

                <div className="space-y-2 my-12 bg-secondary-surface/20 p-8 sm:p-12 rounded-sm">
                  <ProcessStep 
                    number="01"
                    title="Investor discovers your firm — via Google or LinkedIn"
                    body="They land on the website. Not ready to invest yet. But they sign up for the newsletter in exchange for the free HNI Investment Guide."
                  />
                  <ProcessStep 
                    number="02"
                    title="Welcome sequence begins automatically"
                    body="Day 0: PDF delivered. Day 3: Strategy context. Day 7: CIO Philosophy. All pre-written, pre-scheduled, sent without manual effort."
                  />
                  <ProcessStep 
                    number="03"
                    title="Monthly newsletter keeps them warm for 3–6 months"
                    body="Market insights and portfolio commentary. You are in their inbox, providing value, while they research and compare alternatives."
                  />
                  <ProcessStep 
                    number="04"
                    title="They book a call. Already warm. Already trusting."
                    isLast
                    body="When they are finally ready, they book through your calendar. The meeting starts at a completely different temperature than a cold referral call."
                  />
                </div>
              </div>
            </FadeIn>

            {/* SECTION 4 */}
            <FadeIn>
              <div id="chatbot" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">04 / AI Infrastructure</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">The AI Agent: Your Best Relationship Manager — Working Around the Clock</h2>
                
                <p>Imagine you have a relationship manager who never sleeps, never takes a holiday, never forgets a detail about your fund, and handles every single investor inquiry — minimum ticket questions, SEBI registration queries, strategy explanations, booking requests — the moment it comes in. Day or night. On Sunday evening. During a market crash when everyone wants answers. At 2am when a Dubai-based NRI is browsing during their lunch break.</p>
                
                <p className="mt-6">That is what a trained AI chatbot does. And it is not science fiction — we have built and deployed them for PMS firms, and the results are not subtle. Fourteen qualified investor inquiries in the first thirty days of one deployment. Six of those progressed to discovery calls. Zero compliance flags across every single conversation.</p>

                <Callout type="red" label="The Problem Without It">
                  A serious HNI investor visits your site at 9pm on a Tuesday with a specific question. Nobody is available. They move on to the next PMS firm on their list — the one with the chatbot that answered in twelve seconds.
                </Callout>

                <ServiceCard 
                  icon="🤖"
                  sub="What We Build"
                  title="A Custom AI Trained on Your Fund's Documents"
                  desc="We train a custom AI chatbot on your strategy PDFs, performance fact sheets, SEBI disclosures, and fund commentary. It is an always-on investor concierge."
                  items={[
                    "Trained on 25–50 proprietary documents — strategy, performance, FAQs",
                    "SEBI-aware guardrails: no unapproved claims or guaranteed return language",
                    "Lead qualification built in: the chatbot asks size and timeline before routing",
                    "Full conversation transcript delivered to your CRM for RM handoff",
                    "WhatsApp integration and direct calendar booking into your founder's schedule"
                  ]}
                />

                <p className="mt-8">The compliance angle matters enormously here. Most PMS firms are afraid of any digital communication that could be construed as financial advice or unapproved advertising. We build the guardrails before training begins. The AI knows exactly what it can and cannot say — and it never deviates. Your compliance officer can review every conversation in the CRM dashboard.</p>
              </div>
            </FadeIn>

            {/* SECTION 5 */}
            <FadeIn>
              <div id="video" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">05 / Trust Infrastructure</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">Video: The Fastest Trust-Compression Medium in Financial Services</h2>
                
                <p>HNI investors do not invest in funds. They invest in the people running them. The CAGR matters. The Sharpe ratio matters. But before any of that gets evaluated, the investor has already decided whether they trust the person on the other side of the table. Video is how you establish that trust before the table ever exists.</p>
                
                <p className="mt-6">A four-minute fund manager story — shot well, scripted right, posted on your website&apos;s homepage — does the work of ten introductory calls. The investor watches it. They feel like they know you. They understand your conviction. They see your thought process. When they eventually book a call, you are not strangers. You are familiar. That is a completely different starting point.</p>

                <ServiceCard 
                  icon="🎬"
                  sub="What We Build"
                  title="Professional Video Production — Shot in Your City"
                  desc="We coordinate the entire shoot — scripting, location, crew, direction, and post-production. One day. Your city. Three to five final assets delivered."
                  items={[
                    "Fund manager story video (3–5 min) — philosophy and origin story",
                    "Strategy explainer (60–90 sec) — what you invest in and why",
                    "2–3 short-form educational clips for LinkedIn and YouTube",
                    "Professional shoot coordination: studio, lighting, audio, direction",
                    "Post-production: colour grade, captions, branded intros",
                    "Website integration: hero video embedded with silent-mode thumbnail"
                  ]}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  <StatCard number="4" label="Higher engagement with video" suffix="×" />
                  <StatCard number="67" label="HNIs influenced by video trust" suffix="%" />
                  <StatCard number="3" label="More likely to book a call" suffix="×" />
                </div>
              </div>
            </FadeIn>

            {/* SECTION 6 */}
            <FadeIn>
              <div id="system" className="pt-16 sm:pt-24 scroll-mt-24">
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-terracotta px-3 py-1 bg-accent-terracotta/5 border border-accent-terracotta/20 rounded font-mono">06 / The System</div>
                  <div className="h-[1px] bg-text-primary/5 grow" />
                </div>
                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight mb-8">How Everything Connects: One Machine, Five Moving Parts</h2>
                
                <p>Here is why this works so much better than any single component in isolation. Each piece feeds the others. The blog drives organic traffic to the website. The website captures leads into the newsletter. The newsletter warms leads until they book. The AI chatbot handles the ones who are ready immediately. The video builds the trust that makes all of it convert. Remove any one piece and the whole system underperforms. Keep all five and it compounds.</p>

                <Callout label="The Full Acquisition Loop">
                  SEO blog ranks on Google → HNI investor finds article → lands on website → chatbot answers their first question → they sign up for the newsletter → welcome sequence runs → monthly newsletter keeps them warm → 90 days later, they book a discovery call → the call converts at 3× the rate of a cold referral.
                </Callout>

                <p>The traditional PMS firm operates on hope and relationship management. The firms pulling away from the pack have built a machine. One that qualifies leads, nurtures them, builds trust, and books calls — without any human intervention until the investor is genuinely ready to move. That is not magic. That is infrastructure.</p>

                <div className="bg-success/[0.05] border border-success/20 p-8 sm:p-12 rounded-sm my-12">
                   <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-success mb-4 font-mono">What This Looks Like at Month 6</div>
                   <p className="text-[16px] text-text-primary/70 leading-relaxed font-medium italic">
                      2,800+ monthly website visitors. 300+ newsletter subscribers. 15–20 AI chatbot-qualified leads per month. 3 new SEO blog posts ranking in the top 5 for their target keywords. Your fund manager&apos;s video watched by 1,200+ people. And a booking calendar that fills from organic inbound traffic.
                   </p>
                </div>

                <h2 className="text-[28px] sm:text-[40px] font-serif italic text-text-primary leading-tight pt-12 mb-8">The Bottom Line</h2>
                
                <p>The PMS managers who will dominate client acquisition over the next five years are building this infrastructure right now. Not next quarter. Not after the next fund close. Now — while the SEO competition is still low, while early-mover advantage still exists, while the cost of building it is a fraction of what it will be in three years when everyone is doing it.</p>
                
                <p className="mt-6">The question is not whether your firm needs this. Every firm that wants to grow beyond its personal network does. The question is whether you build it now and compound for five years, or wait until catching up costs twice as much and delivers half the advantage.</p>
                
                <p className="mt-6">We built this infrastructure for a demonstration PMS firm from the ground up — website, AI chatbot, SEO engine, newsletter system, video assets, analytics — in six weeks. Every component is documented. Every result is tracked. And we are now ready to build it for three more SEBI-registered PMS firms who are serious about what their digital presence should be doing for their AUM.</p>
                
                <div className="flex flex-wrap gap-2 pt-16 pb-8 border-t border-text-primary/5 mt-16">
                  {["PMS Marketing", "HNI Acquisition", "SEO Strategy", "AI Chatbot", "SEBI Compliance", "Lead Nurture", "Video Production", "AUM Growth"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary-surface/40 border border-text-primary/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-text-primary/40">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Card */}
                <div className="bg-secondary-surface/30 border border-text-primary/5 p-8 sm:p-12 rounded-sm flex flex-col md:flex-row gap-10 items-center mt-12">
                  <div className="w-20 h-20 bg-text-primary border border-text-primary/10 rounded-full flex items-center justify-center font-serif italic text-2xl text-primary-bg shrink-0">QG</div>
                  <div>
                    <h4 className="text-xl font-serif italic text-text-primary mb-3">Written by QuantikGrowth Team</h4>
                    <p className="text-[14px] text-text-primary/50 leading-relaxed font-medium">
                      India&apos;s only full-stack digital growth studio built exclusively for SEBI-registered PMS firms. We design websites, train AI chatbots, build SEO engines, and produce video assets that turn portfolio management services into client acquisition machines.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </main>

          {/* Sidebar Column */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px] space-y-10">
              
              {/* Table of Contents */}
              <div className="bg-secondary-surface/20 border border-text-primary/5 rounded-sm p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-terracotta mb-6 font-mono">In This Article</div>
                <ul className="space-y-4">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className={`text-[13px] font-bold uppercase tracking-widest transition-all block ${
                          activeSection === section.id 
                            ? 'text-accent-terracotta translate-x-2' 
                            : 'text-text-primary/30 hover:text-text-primary'
                        }`}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Card */}
              <div className="bg-secondary-surface/20 border border-text-primary/5 rounded-sm p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-terracotta mb-4 font-mono">PMS Growth Letter</div>
                <p className="text-[13px] text-text-primary/50 leading-relaxed mb-6 font-medium">Monthly insights for SEBI-registered fund managers. No fluff.</p>
                {!isSubscribed ? (
                  <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}>
                    <input 
                      type="email" 
                      required 
                      placeholder="your@email.com" 
                      className="w-full bg-primary-bg border border-text-primary/5 rounded-md px-4 py-3 text-[12px] focus:outline-none focus:border-accent-terracotta/30 transition-colors"
                    />
                    <button className="w-full bg-text-primary text-primary-bg text-[10px] font-bold uppercase tracking-widest py-4 rounded-md hover:opacity-90 transition-opacity">Subscribe Free &rarr;</button>
                  </form>
                ) : (
                  <div className="text-success text-[12px] font-bold py-4 text-center">✓ Curated. Check your inbox.</div>
                )}
                <div className="text-[10px] text-text-primary/20 text-center mt-4 uppercase font-bold tracking-widest">Join 340+ portfolio managers</div>
              </div>

              {/* Audit Card */}
              <div className="bg-accent-terracotta text-white rounded-sm p-8 shadow-xl shadow-accent-terracotta/10 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-60 font-mono">Growth Audit</div>
                  <h4 className="text-xl font-serif italic mb-4 leading-tight">Is your PMS website costing you clients?</h4>
                  <p className="text-[13px] opacity-80 leading-relaxed mb-8">We&apos;ll show you exactly what to fix — free 30-min call.</p>
                  <button onClick={onOpenModal} className="w-full bg-white text-accent-terracotta text-[10px] font-bold uppercase tracking-widest py-4 rounded-md group-hover:scale-[1.02] transition-transform">Book Free Audit &rarr;</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32 border-t border-text-primary/5 bg-secondary-surface/20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#BC6C25_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent-terracotta mb-8 font-mono">Infrastructure</div>
            <h2 className="text-[36px] sm:text-[64px] font-serif italic leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tighter">
              Ready to Build Your <br />
              <span className="text-accent-terracotta">Client Acquisition Machine?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] text-text-primary/50 max-w-2xl mx-auto mb-12 font-medium">
              Book a free 30-minute Growth Audit. We will audit your current digital presence, show you what your competitors are doing better, and hand you a clear roadmap — no obligation.
            </p>
            <button 
              onClick={onOpenModal}
              className="inline-flex items-center gap-4 bg-text-primary text-primary-bg px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 active:scale-95 transition-all rounded shadow-2xl shadow-text-primary/10"
            >
              Book My Free Growth Audit <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-16">
              {[
                "🗓 30-min call, no obligation",
                "🔒 For SEBI-registered PMS firms only",
                "✅ Built for India's equity fund managers"
              ].map((trust, idx) => (
                <span key={idx} className="text-[11px] font-bold uppercase tracking-widest text-text-primary/30">
                  {trust}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
