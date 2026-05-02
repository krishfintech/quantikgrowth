/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'motion/react';
import CaseStudyPage from './CaseStudyPage';
import BlogPage from './BlogPage';
import { StaggeredText, CountUp, FadeIn } from './SharedComponents';
import {
  ArrowUp,
  ArrowRight,
  CheckCircle2,
  X,
  Menu,
  Search,
  MessageSquare,
  Mail,
  Monitor,
  PenTool,
  Video,
  Award,
  Clock,
  AlertCircle,
  Ghost,
  Link2,
  ChevronRight,
  Target,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Layout,
  Star
} from 'lucide-react';

// --- Components & Helpers ---
const FloatingEngine = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
    <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(188,108,37,0.06)_0%,transparent_60%)] rounded-full" />
    <div className="absolute top-1/2 -right-1/4 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(188,108,37,0.05)_0%,transparent_60%)] rounded-full" />
    <div className="absolute inset-0 bg-[radial-gradient(rgba(188,108,37,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
  </div>
);



const ExperienceShowcase = () => {
  const [index, setIndex] = useState(0);
  const experiences = [
    {
      id: "01",
      title: "Conversion-Engineered Architecture",
      description: "Visualizing tactile layouts that prioritize client psychology and authority.",
      visual: (
        <div className="w-full h-full bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm relative overflow-hidden">
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-text-primary/10 rounded-full" />
            <div className="w-4 h-2 bg-text-primary/5 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <motion.div
              initial={{ height: 0 }} animate={{ height: 80 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-accent-lime/10 border border-accent-lime/20 rounded-md"
            />
            <div className="space-y-3">
              <div className="h-2 w-full bg-text-primary/5 rounded-full" />
              <div className="h-2 w-4/5 bg-text-primary/5 rounded-full" />
              <div className="h-2 w-full bg-text-primary/5 rounded-full" />
            </div>
          </div>
          <div className="absolute -right-4 bottom-8 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(188,108,37,0.05)_0%,transparent_70%)] rounded-full" />
        </div>
      )
    },
    {
      id: "02",
      title: "Tactile Engagement Loops",
      description: "Seamless newsletter signup flows that turn visitors into artifacts of trust.",
      visual: (
        <div className="w-full h-full bg-white rounded-lg p-8 flex flex-col items-center justify-center gap-6 shadow-sm">
          <div className="w-full space-y-4">
            <div className="h-10 w-full bg-text-primary/5 border border-text-primary/10 rounded-lg flex items-center px-4">
              <motion.div
                initial={{ width: 0 }} animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-2 bg-text-primary/20 rounded-full"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="h-10 w-full bg-text-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-widest"
            >
              Subscribe to Blueprint
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex items-center gap-2 text-success text-[10px] font-bold"
          >
            <CheckCircle2 className="w-3 h-3" /> SUCCESSFUL SUBSCRIPTION
          </motion.div>
        </div>
      )
    },
    {
      id: "03",
      title: "AI Curator Assistant",
      description: "Custom-trained models that handle HNIs with institutional-grade precision.",
      visual: (
        <div className="w-full h-full bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm relative border border-black/5">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center text-[8px] font-bold">AI</div>
            <div className="flex-1 bg-secondary-surface/50 rounded-2xl rounded-tl-none p-3 text-[10px] leading-relaxed">
              Welcome. Understanding your AUM goals is our priority. How can I assist?
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end mt-2">
            <div className="bg-text-primary text-white rounded-2xl rounded-tr-none p-3 text-[10px] leading-relaxed">
              What's the typical compliance lead time?
            </div>
          </div>
          <div className="flex gap-1 ml-9 opacity-50">
            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-accent-lime rounded-full" />)}
          </div>
        </div>
      )
    },
    {
      id: "04",
      title: "Authoritative Artifacts",
      description: "Content that establishes market leadership through design and data.",
      visual: (
        <div className="w-full h-full bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm overflow-hidden">
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-16 h-12 bg-text-primary/5 rounded-md overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-full bg-text-primary/10 rounded-full" />
                  <div className="h-2 w-2/3 bg-text-primary/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-black/5">
            <div className="text-[9px] font-bold text-accent-terracotta uppercase tracking-widest">Trending Insights</div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[650px] aspect-[4/3] lg:h-[550px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div className="bg-white rounded-3xl p-8 h-full shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-black/[0.03] flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-xs font-serif italic bg-secondary-surface">
                  {experiences[index].id}
                </div>
                <div className="h-[1px] w-8 bg-text-primary/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary/40">QuantikGrowth Experience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic leading-tight text-text-primary">
                {experiences[index].title}
              </h3>
              <p className="text-[13px] text-text-primary/60 leading-relaxed font-medium">
                {experiences[index].description}
              </p>
              <div className="flex gap-2 pt-4">
                {experiences.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[3px] transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-accent-lime' : 'w-2 bg-text-primary/10'}`}
                  />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 aspect-square lg:h-full bg-secondary-surface/40 rounded-2xl p-4 flex items-center justify-center">
              {experiences[index].visual}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative labels like in Dezerv screenshot */}
      <div className="absolute -bottom-10 left-12 flex items-center gap-10 opacity-30 pointer-events-none">
        <div className="text-[9px] font-mono">[ REALTIME_SYNC ]</div>
        <div className="text-[9px] font-mono uppercase">Version 4.0.2</div>
      </div>
    </div>
  );
};




// --- Homepage Content ---

const HomeContent = ({ onNavigateToCaseStudy, onNavigateToBlog, onOpenModal }: { onNavigateToCaseStudy: () => void, onNavigateToBlog: () => void, onOpenModal: () => void }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-[68px] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(200,240,74,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C8F04A_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-12 lg:py-0">
          {/* Left Column */}
          <div className="flex flex-col items-start pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-text-primary/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              Volume 04 / Exclusively for PMS
            </motion.div>

            <h1 className="text-[36px] sm:text-[56px] md:text-[80px] lg:text-[100px] font-serif leading-[1] lg:leading-[0.9] tracking-tighter mb-8 lg:mb-10 relative">
              <span className="absolute -top-16 lg:-top-20 -left-6 lg:-left-12 text-[140px] sm:text-[180px] lg:text-[240px] font-serif text-text-primary/[0.03] select-none z-0 pointer-events-none">01</span>
              {["We", "Don't", "Build"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 inline-block mr-3 will-change-transform transform-gpu"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40, skewX: -10 }}
                animate={{ opacity: 1, y: 0, skewX: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 block italic ml-4 sm:ml-12 will-change-transform transform-gpu"
              >
                Websites.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="relative z-10 block will-change-transform transform-gpu"
              >
                We Build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 block italic text-accent-terracotta ml-12 sm:ml-32 whitespace-nowrap text-glow will-change-transform transform-gpu"
              >
                AUM Engines.
              </motion.span>
            </h1>

            <p className="text-[13px] sm:text-[14px] text-text-primary/60 leading-relaxed max-w-[440px] mb-12">
              An exploration of digital presence for the modern financial elite. QuantikGrowth builds the tactile infrastructure that turns your fund into a 24/7 museum of client acquisition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="bg-text-primary text-primary-bg text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 hover:opacity-90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Enter Audit <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToCaseStudy}
                className="border border-text-primary/10 text-text-primary text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                The Blueprint <ArrowUp className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              {[
                { text: "SEBI-Compliant Copy", color: "text-success" },
                { text: "AMFI-Aware Strategy", color: "text-success" },
                { text: "India-First SEO", color: "text-success" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>{item.text}</span>
                  {i < 2 && <span className="hidden sm:inline opacity-30">•</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <ExperienceShowcase />
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section id="problem" className="py-24 border-t border-border-dim relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <div className="text-accent-lime text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em]">THE REAL PROBLEM</div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold max-w-[700px] mx-auto leading-tight px-4 sm:px-0 text-accent-terracotta">
              <StaggeredText text="Your Competitors Are Stealing Clients You Don't Even Know You're Losing" />
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-[600px] mx-auto opacity-80">
              Most PMS firms have great fund performance and zero digital presence. Here&apos;s what that costs you every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Link2 className="w-5 h-5 text-text-primary/40" />,
                title: "Legacy Esthetics",
                body: "HNI investors experience your brand before they ever pick up the phone. If your site reflects 2014, your fund feels like history."
              },
              {
                icon: <Ghost className="w-5 h-5 text-text-primary/40" />,
                title: "The lead Void",
                body: "Most PMS websites are digital brochures. Visitors arrive, observe, and leave. Your fund performance remains a silent gallery."
              },
              {
                icon: <Search className="w-5 h-5 text-text-primary/40" />,
                title: "Organic Invisibility",
                body: "When an HNI searches for wealth creation, your competitors command the frame. SEO is the curator of your digital authority."
              },
              {
                icon: <Clock className="w-5 h-5 text-text-primary/40" />,
                title: "The Opportunity Cost",
                body: "One month of poor presence is one month of lost management fees. This is not a website problem — it's an AUM artifact."
              }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group bg-secondary-surface/40 border border-text-primary/5 p-8 lg:p-10 rounded-2xl h-full hover:border-accent-terracotta/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
                >
                  <div className="mb-6 lg:mb-8">{card.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-serif mb-4 lg:mb-6 leading-tight group-hover:text-accent-terracotta transition-colors">{card.title}</h3>
                  <p className="text-[12px] lg:text-[13px] text-text-primary/60 leading-relaxed font-medium">{card.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 lg:mt-20 bg-accent-lime/[0.05] border-y border-accent-lime/10 py-6 lg:py-8 text-center">
            <p className="text-base sm:text-lg md:text-xl font-medium text-text-primary px-6">
              &quot;The firms winning in digital right now are not necessarily better fund managers. They just look better online.&quot;
              <span className="block mt-2 text-accent-lime font-bold">QuantikGrowth fixes that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-primary-bg overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 lg:mb-20">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">Infrastructure</div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif leading-tight mb-4 relative italic text-accent-terracotta">
              <StaggeredText text="The Growth Artifacts" />
              <span className="absolute -top-10 lg:-top-12 -left-6 lg:-left-8 text-[120px] sm:text-[160px] lg:text-[180px] font-serif text-text-primary/[0.02] select-none z-0 pointer-events-none">02</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] text-text-primary/60 max-w-sm font-medium">Not a website. Not a campaign. A tactile client acquisition experience.</p>
          </div>

          <div className="space-y-24 lg:space-y-40">
            {[
              {
                label: "FOUNDATION",
                title: "A conversion engineered gallery",
                body: "We design your PMS website as a tactile exploration of digital authority. Every section is reverse-engineered from the psychology of wealth. Sub-2s load times, compliance-aware narratives.",
                features: ["Tactile layout patterns", "Compliance-aware copy", "Authoritative experience", "Seamless booking flows"],
                stat: { label: "Bounce reduction:", val: "43%" },
                visual: (
                  <div className="relative aspect-[4/3] bg-[#082018] rounded-2xl overflow-hidden shadow-2xl border border-white/5 p-0">
                    {/* Background Texture/Grain */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,240,74,0.05)_0%,transparent_50%)]" />

                    <div className="relative p-6 sm:p-8 h-full flex flex-col justify-center">
                      <div className="grid grid-cols-[1fr_1.1fr] gap-6 items-center w-full">
                        <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                            <div className="w-1.5 h-1.5 bg-[#C8F04A] rounded-full" />
                            <span className="text-[7px] text-white/60 uppercase tracking-[0.2em] font-bold">Since 2018</span>
                          </div>

                          <h4 className="text-[28px] sm:text-[36px] font-serif text-white leading-[0.95] tracking-tighter">
                            Risk-<br />
                            Conscious<br />
                            <span className="italic text-[#C8F04A] font-light">investment</span><br />
                            leaders
                          </h4>

                          <p className="text-[8px] text-white/30 leading-relaxed max-w-[140px]">
                            Delivering alpha through disciplined fundamental research and construction.
                          </p>
                        </div>

                        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white">
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-[10px] font-serif font-bold text-[#082018]">Key Metrics</div>
                            <div className="text-[6px] text-[#082018]/40 uppercase tracking-widest font-bold">AS OF MAR 2025</div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between items-end pb-4 border-b border-[#082018]/5">
                              <div>
                                <div className="text-[6px] text-[#082018]/40 uppercase mb-1 font-bold">Assets Under Management</div>
                                <div className="text-[14px] sm:text-[18px] font-serif font-bold text-[#082018] leading-none">₹360cr+</div>
                              </div>
                              <div className="text-right">
                                <div className="text-[6px] text-[#082018]/40 uppercase mb-1 font-bold">1Yr Returns</div>
                                <div className="text-[14px] sm:text-[18px] font-serif font-bold text-[#082018] leading-none">42%</div>
                              </div>
                            </div>

                            <div className="flex justify-between items-end pb-4 border-b border-[#082018]/5">
                              <div>
                                <div className="text-[6px] text-[#082018]/40 uppercase mb-1 font-bold">Combined Experience</div>
                                <div className="text-[14px] sm:text-[18px] font-serif font-bold text-[#082018] leading-none">80yrs+</div>
                              </div>
                              <div className="text-right">
                                <div className="text-[6px] text-[#082018]/40 uppercase mb-1 font-bold">Alpha (5yr)</div>
                                <div className="text-[14px] sm:text-[18px] font-serif font-bold text-[#082018] leading-none">+15.6%</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-2 opacity-50">
                            <ShieldCheck className="w-3 h-3 text-[#082018]" />
                            <span className="text-[7px] font-medium text-[#082018] uppercase tracking-wider">SEBI Registered Portfolio Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: "AI-POWERED",
                title: "The Curator Assistant",
                body: "We train a custom AI curator on your fund documents. It answers with the precision of your most senior relationship manager, qualifying interest 24/7.",
                features: ["Document-trained model", "Regulated guardrails", "Lead qualification", "RM handoff interface"],
                visual: (
                  <div className="bg-secondary-surface/40 border border-text-primary/5 p-8 space-y-6 max-w-sm mx-auto">
                    <div className="flex justify-end">
                      <div className="bg-text-primary/5 text-text-primary/60 text-[10px] uppercase font-bold p-4 border border-text-primary/5 max-w-[80%]">Inquiry: Entry threshold?</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-text-primary text-primary-bg flex items-center justify-center font-bold text-[10px]">QG</div>
                      <div className="bg-text-primary/[0.02] border border-text-primary/5 text-text-primary/80 text-[11px] p-5 leading-relaxed max-w-[80%]">
                        Our threshold is ₹50 Lakhs. Would you like to schedule a call with the curator?
                        <div className="mt-4 flex gap-3">
                          <div className="px-4 py-1.5 border border-text-primary/20 text-text-primary text-[9px] font-bold uppercase tracking-widest">Book Call</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: "TRUST ARCHITECTURE",
                title: "The Trust Compounding Engine",
                body: "Authority isn't bought; it's grown. We build the content infrastructure — newsletters, professional blogs, and AI assistants — that compounds your audience's trust into AUM. Turn passive readers into high-intent artifacts of wealth.",
                features: [
                  "Professional editorial curation",
                  "Automated newsletter distribution",
                  "AI-driven audience engagement",
                  "Long-form authority artifacts"
                ],
                stat: { label: "TRUST INDEX GROWTH:", val: "88%" },
                visual: (
                  <div className="relative aspect-[4/3] bg-[#0A0A0F] rounded-2xl overflow-hidden border border-white/5 p-8 flex flex-col group/chart">
                    {/* Darker, mesh-style background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,240,74,0.03)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />

                    <div className="relative z-10 flex justify-between items-start mb-8">
                      <div className="space-y-1">
                        <div className="text-xl font-serif text-white italic tracking-tight">Digital Yield Curve</div>
                      </div>
                    </div>

                    <div className="relative flex-grow flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C8F04A" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#C8F04A" stopOpacity="0" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Shaded Area */}
                        <motion.path
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          d="M 0 110 C 100 110, 150 90, 200 70 S 300 30, 400 10 L 400 120 L 0 120 Z"
                          fill="url(#chartGlow)"
                        />

                        {/* Main Path */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                          d="M 0 110 C 100 110, 150 90, 200 70 S 300 30, 400 10"
                          stroke="#C8F04A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          filter="url(#glow)"
                        />

                        {/* Staggered Data Points */}
                        {[
                          { x: 100, y: 105 },
                          { x: 200, y: 70 },
                          { x: 300, y: 35 },
                          { x: 400, y: 10 }
                        ].map((p, i) => (
                          <motion.circle
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + (i * 0.4), duration: 0.5 }}
                            cx={p.x} cy={p.y} r="3" fill="#C8F04A"
                          />
                        ))}
                      </svg>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                        className="absolute top-0 right-0"
                      >
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFD700] mb-1 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">Market Authority</div>
                        <div className="w-16 h-[1.5px] bg-[#FFD700]/60 ml-auto rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                )
              }
            ].map((service, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative">
                  <FadeIn delay={0.2} y={40}>
                    {service.visual}
                  </FadeIn>
                </div>
                <div className="flex-1 space-y-10">
                  <FadeIn delay={0.1}>
                    <div className="text-text-primary/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                      {service.label}
                    </div>
                    <h3 className="text-4xl font-serif leading-tight mb-8 italic text-accent-terracotta">{service.title}</h3>
                    <p className="text-[15px] text-text-primary/60 mb-10 leading-relaxed max-w-md">
                      {service.body}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-1.5 h-[1px] bg-accent-terracotta" />
                          <span className="text-[13px] font-medium opacity-80">{feat}</span>
                        </div>
                      ))}
                    </div>
                    {service.stat && (
                      <div className="p-1 border-t border-text-primary/5 inline-block">
                        <div className="text-[10px] text-text-primary/40 uppercase tracking-widest mb-1">{service.stat.label}</div>
                        <div className="text-3xl font-serif text-accent-terracotta italic">{service.stat.val}</div>
                      </div>
                    )}
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-16 sm:py-24 bg-secondary-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-28 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Phase Strategy</div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif italic mb-4 text-accent-terracotta">
              <StaggeredText text="The 6-Week Curation" />
            </h2>
            <p className="text-[13px] sm:text-[14px] text-text-primary/60 max-w-sm mx-auto font-medium">A proven repeatable process engineered for elite firms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 relative">
            <span className="hidden lg:block absolute -top-16 left-0 text-[180px] font-serif text-text-primary/[0.02] select-none z-0 pointer-events-none">03</span>
            {[
              { week: "01", title: "Audit & Blueprint", body: "Deep-dive analysis of your artifacts and competitors." },
              { week: "02", title: "Narrative & Flow", body: "Visual mockups and compliance-aware copy curation." },
              { week: "03", title: "Material Science", body: "Development on tactile platforms and AI assistant training." },
              { week: "04", title: "Domain Indexing", body: "Publishing authoritative posts and analytics curation." },
              { week: "06", title: "The Handoff", body: "Boutique launch and artifact delivery." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="space-y-4 lg:space-y-6 relative group cursor-default p-6 border border-transparent hover:border-text-primary/5 hover:bg-primary-bg/50 rounded-sm transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-serif italic opacity-10 lg:opacity-10 group-hover:opacity-100 group-hover:text-accent-terracotta transition-all">{item.week}</div>
                  <h3 className="text-lg lg:text-xl font-serif italic tracking-tight leading-tight group-hover:text-accent-terracotta transition-colors">{item.title}</h3>
                  <p className="text-[11px] lg:text-[12px] text-text-primary/60 leading-relaxed font-medium uppercase tracking-widest">{item.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY BLUEPRINT SECTION (Home only) */}
      <section id="blueprint" className="py-16 sm:py-24 bg-primary-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-12 lg:mb-24">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">The Infrastructure</div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif italic mb-4 leading-tight text-accent-terracotta">The Growth Blueprint</h2>
            <p className="text-[13px] sm:text-[14px] text-text-primary/60 max-w-sm font-medium italic">
              Verification of the growth infrastructure on a functioning prototype.
            </p>
          </div>

          <div className="bg-secondary-surface/40 border border-text-primary/5 rounded-sm overflow-hidden grid lg:grid-cols-[1fr_1.2fr]">
            <div className="p-1 inset-0 flex items-center justify-center bg-primary-bg">
              <div className="w-full h-full min-h-[300px] lg:min-h-[400px] border border-text-primary/10 rounded-sm overflow-hidden relative">
                {/* Live Preview / Mockup of QuantikGrowth */}
                <div className="absolute inset-0 bg-[#0a2a1b] overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-8 bg-[#0a2a1b]/80 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between z-20">
                     <span className="text-white font-serif text-[10px] font-bold tracking-widest flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-[#C8F04A] rounded-full" />
                       QuantikGrowth
                     </span>
                     <div className="flex gap-4 opacity-50">
                       <div className="w-8 h-[2px] bg-white/40 rounded-full"></div>
                       <div className="w-6 h-[2px] bg-white/40 rounded-full"></div>
                     </div>
                  </div>
                  
                  {/* Content Mockup */}
                  <div className="relative p-6 lg:p-10 pt-16 lg:pt-20 space-y-6 lg:space-y-8 z-10 h-full flex flex-col justify-center">
                    <h1 className="text-white font-serif text-3xl lg:text-4xl leading-[1.1] tracking-tight">
                      Risk-Conscious<br/>
                      <span className="italic text-[#C8F04A]">investment</span> leaders
                    </h1>
                    
                    <div className="w-full p-4 lg:p-6 border border-white/10 rounded-sm bg-[radial-gradient(rgba(200,240,74,0.05)_1px,transparent_1px)] [background-size:12px_12px] flex justify-between items-center bg-black/20 backdrop-blur-sm">
                       <div>
                         <div className="text-[8px] text-white/40 uppercase font-bold tracking-[0.2em] mb-1">AUM</div>
                         <div className="text-white font-serif text-xl">₹360cr+</div>
                       </div>
                       <div className="h-8 w-[1px] bg-white/10"></div>
                       <div>
                         <div className="text-[8px] text-white/40 uppercase font-bold tracking-[0.2em] mb-1">1Yr Alpha</div>
                         <div className="text-white font-serif text-xl">42%</div>
                       </div>
                       <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
                       <div className="hidden sm:block">
                         <div className="text-[8px] text-white/40 uppercase font-bold tracking-[0.2em] mb-1">Experience</div>
                         <div className="text-white font-serif text-xl">80yrs+</div>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 lg:gap-4">
                       <div className="h-16 lg:h-20 border border-white/5 bg-white/[0.02] rounded-sm p-3 lg:p-4 flex flex-col justify-end hover:bg-white/[0.05] transition-colors">
                         <div className="text-[#C8F04A] text-[6px] lg:text-[7px] uppercase tracking-widest font-bold mb-1">Strategy 01</div>
                         <div className="text-white text-[9px] lg:text-[11px] font-serif">Growth Engine</div>
                       </div>
                       <div className="h-16 lg:h-20 border border-white/5 bg-white/[0.02] rounded-sm p-3 lg:p-4 flex flex-col justify-end hover:bg-white/[0.05] transition-colors">
                         <div className="text-[#C8F04A] text-[6px] lg:text-[7px] uppercase tracking-widest font-bold mb-1">Strategy 02</div>
                         <div className="text-white text-[9px] lg:text-[11px] font-serif">Alpha Leaders</div>
                       </div>
                       <div className="h-16 lg:h-20 border border-white/5 bg-white/[0.02] rounded-sm p-3 lg:p-4 flex flex-col justify-end hover:bg-white/[0.05] transition-colors">
                         <div className="text-[#C8F04A] text-[6px] lg:text-[7px] uppercase tracking-widest font-bold mb-1">Strategy 03</div>
                         <div className="text-white text-[9px] lg:text-[11px] font-serif">Value Catalyst</div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Subtle Background Effects */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,240,74,0.1)_0%,transparent_50%)]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#C8F04A]/30 shadow-[0_0_10px_rgba(200,240,74,0.5)] z-30 pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a1b] via-transparent to-transparent px-4 py-4 flex items-end z-20 pointer-events-none">
                  <div className="bg-[#C8F04A] text-[#0a2a1b] text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Link2 className="w-3 h-3" />
                    Infrastructure Demo: QuantikGrowth
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-16 lg:border-l border-text-primary/5 flex flex-col justify-center">
              <div className="mb-8 lg:mb-12">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">How We Build: QuantikGrowth Demo</div>
                <p className="text-xl lg:text-2xl font-serif italic text-text-primary leading-relaxed">
                  &quot;We build tactile acquisition engines for elite SEBI-Registered PMS firms — prioritizing digital authority to showcase your institutional expertise and AUM to the right investors.&quot;
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 lg:gap-12 mb-10 lg:mb-16">
                {[
                  { n: "3", l: "Strategic Systems" },
                  { n: "4", l: "Authority Pillars" },
                  { n: "40%+", l: "Alpha Benchmarks" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-3xl font-serif italic text-accent-terracotta leading-none mb-3 whitespace-nowrap">{stat.n}</div>
                    <div className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">{stat.l}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={onNavigateToCaseStudy}
                className="text-text-primary font-bold text-xs uppercase tracking-[0.20em] inline-flex items-center gap-6 group"
              >
                See how we build this <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ICP FILTER SECTION */}
      <section className="py-16 sm:py-24 bg-primary-bg border-t border-text-primary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-8">Qualification</div>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif italic mb-12 lg:mb-20 tracking-tighter text-accent-terracotta">Ideal Client Profile</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-secondary-surface/40 border-t-2 border-accent-terracotta p-8 lg:p-12 text-left rounded-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8 lg:mb-10">The Collector</div>
              <ul className="space-y-6 lg:space-y-8">
                {[
                  "SEBI-registered PMS or AIF entity",
                  "Scaling toward ₹100Cr+ AUM artifacts",
                  "Desire for digital tactile authority",
                  "Requirement for done-for-you curation",
                  "Aspiration for category leadership"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-[1px] bg-accent-terracotta mt-2 lg:mt-2.5" />
                    <span className="text-[14px] lg:text-[16px] text-text-primary leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-bg border border-text-primary/5 p-8 lg:p-12 text-left opacity-40 grayscale rounded-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8 lg:mb-10">The Outsider</div>
              <ul className="space-y-6 lg:space-y-8">
                {[
                  "Preference for templated artifacts",
                  "Desire for self-curation day one",
                  "Expectation of instant outcomes",
                  "Lack of regulatory credentials",
                  "Search for temporary fixes"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <X className="w-4 h-4 opacity-40 mt-0.5 lg:mt-1" />
                    <span className="text-[14px] lg:text-[16px] text-text-primary/60 italic leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 sm:py-24 bg-secondary-surface border-y border-text-primary/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-28 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Investment</div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif italic mb-4 relative leading-tight px-4 sm:px-0 text-accent-terracotta">
              The Growth Curations
              <span className="hidden md:block absolute -top-10 lg:-top-12 -left-6 lg:-left-8 text-[180px] font-serif text-text-primary/[0.02] select-none z-0 pointer-events-none">04</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] text-text-primary/60 max-w-sm mx-auto font-medium">Transparent, performance-aligned performance models.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-primary-bg border border-text-primary/10 p-8 lg:p-10 rounded-2xl relative flex flex-col h-full hover:border-accent-terracotta/20 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="text-text-primary/40 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] absolute top-6 right-6 lg:top-8 lg:right-8">Foundation</div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 text-accent-terracotta">Foundation Build</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl lg:text-3xl font-serif text-text-primary">1 Month Turnaround</span>
              </div>
              <div className="space-y-3 lg:space-y-4 mb-10 lg:mb-12 flex-grow">
                {["High-Converting Website Structure", "AI-Powered Support Curator", "Mobile-Optimized Experience", "Dynamic Media Showcase"].map((f, i) => (
                  <div key={i} className="flex gap-3 lg:gap-4 items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 h-4 text-accent-terracotta opacity-60" />
                    <span className="text-[13px] lg:text-[14px] font-medium opacity-80">{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onOpenModal}
                className="w-full bg-text-primary text-primary-bg text-xs font-bold uppercase tracking-[0.2em] py-5 hover:opacity-90 transition-all"
              >
                Enter Audit →
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-primary-bg border border-text-primary/10 p-8 lg:p-10 rounded-2xl relative flex flex-col h-full hover:border-accent-terracotta/20 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="text-accent-terracotta text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] absolute top-6 right-6 lg:top-8 lg:right-8">Scale</div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 text-accent-terracotta">Growth Engine</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl lg:text-3xl font-serif text-text-primary">Continuous Scaling</span>
              </div>
              <div className="space-y-3 lg:space-y-4 mb-10 lg:mb-12 flex-grow">
                {["Everything in Foundation", "SEO-Optimized Authority Blogs", "Conversion-Driven Newsletter Engine", "Cinematic Video Assets (Mumbai)"].map((f, i) => (
                  <div key={i} className="flex gap-3 lg:gap-4 items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 h-4 text-accent-terracotta opacity-60" />
                    <span className="text-[13px] lg:text-[14px] font-medium opacity-80">{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onOpenModal}
                className="w-full bg-accent-terracotta text-white text-xs font-bold uppercase tracking-[0.2em] py-5 hover:opacity-90 transition-all"
              >
                Scale Audit →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section id="blog" className="py-16 sm:py-24 bg-primary-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-secondary-surface/30 p-8 lg:p-20 border border-text-primary/5 rounded-sm">
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Intelligence</div>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 text-accent-terracotta">The PMS Growth Letter</h3>
              <p className="text-[14px] lg:text-[15px] text-text-primary/60 leading-relaxed font-medium">
                We document our curation process and share tactics for elite portfolio managers. Read our latest insights on SEO, AI, and digital authority.
              </p>
              <button
                onClick={onNavigateToBlog}
                className="text-text-primary font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center gap-4 group border-b border-text-primary/20 pb-1 hover:border-accent-terracotta transition-all"
              >
                Explore Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="max-w-xl w-full text-center space-y-6">
              {!isSubscribed ? (
                <form
                  className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden border border-text-primary/10"
                  onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}
                >
                  <input type="email" placeholder="Professional email" required className="flex-grow bg-primary-bg px-6 py-4 text-sm text-text-primary focus:outline-none" />
                  <button type="submit" className="bg-text-primary text-primary-bg font-bold px-8 py-4 hover:opacity-90 transition-all text-xs uppercase tracking-widest">Subscribe</button>
                </form>
              ) : (
                <div className="text-success font-bold py-4 text-lg">✓ Welcome to the curator list.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-secondary-surface">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-serif leading-tight mb-8 text-accent-terracotta">
              <StaggeredText text="Your AUM Should Reflect Your Performance." />
            </h2>
            <button
                onClick={onOpenModal}
                className="bg-text-primary text-primary-bg text-xs sm:text-sm font-bold uppercase tracking-[0.2em] px-10 sm:px-12 py-5 sm:py-6 hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto mt-4"
              >
                Enter the Boutique →
              </button>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

// --- App Root ---

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'case-study' | 'blog'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSubmitted, setIsModalSubmitted] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/case-study') setCurrentPage('case-study');
    if (path === '/blog') setCurrentPage('blog');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      if (window.scrollY > window.innerHeight && !sessionStorage.getItem('cta-closed')) setShowStickyCTA(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
    window.scrollTo(0, 0);
  };

  const navigateToCaseStudy = () => {
    setCurrentPage('case-study');
    window.history.pushState({}, '', '/case-study');
    window.scrollTo(0, 0);
  };

  const navigateToBlog = () => {
    setCurrentPage('blog');
    window.history.pushState({}, '', '/blog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen selection:bg-accent-terracotta/20 selection:text-text-primary overflow-x-hidden">

      <FloatingEngine />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 h-[68px] flex items-center transition-all duration-300 ${isScrolled ? 'glass' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div onClick={navigateToHome} className="flex items-center text-2xl font-serif tracking-tighter cursor-pointer">
            <span className="text-text-primary italic">Quantik</span>
            <span className="text-accent-terracotta ml-0.5">Growth</span>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Services', 'Process', 'Blueprint', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={item === 'Blueprint' ? '/case-study' : item === 'Blog' ? '/blog' : `#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => {
                    if (item === 'Blueprint') {
                      e.preventDefault();
                      navigateToCaseStudy();
                    } else if (item === 'Blog') {
                      e.preventDefault();
                      navigateToBlog();
                    } else {
                      if (currentPage !== 'home') {
                        e.preventDefault();
                        navigateToHome();
                        setTimeout(() => {
                          const el = document.getElementById(item.toLowerCase().replace(' ', '-'));
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }
                  }}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-opacity relative group px-4 py-2 ${(currentPage === 'case-study' && item === 'Blueprint') || (currentPage === 'blog' && item === 'Blog') ? 'text-text-primary' : 'text-text-primary/40'
                    } hover:text-text-primary`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-4 h-[1px] bg-text-primary transition-all duration-300 ${(currentPage === 'case-study' && item === 'Blueprint') || (currentPage === 'blog' && item === 'Blog') ? 'w-[calc(100%-32px)]' : 'w-0'
                    } group-hover:w-[calc(100%-32px)]`} />
                </a>
            ))}
          </div>

          <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-text-primary text-primary-bg text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 group"
              >
                Book Audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>

          <button className="lg:hidden text-text-primary p-2 -mr-2" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[100] bg-primary-bg flex flex-col p-6 lg:hidden"
            >
              <div className="flex justify-between items-center h-[68px] mb-12">
                <div onClick={() => { setIsMenuOpen(false); navigateToHome(); }} className="flex items-center text-2xl font-serif tracking-tighter">
                  <span className="text-text-primary italic">Quantik</span>
                  <span className="text-accent-terracotta ml-0.5">Growth</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-text-primary p-2 -mr-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-8 mb-auto">
                {['Services', 'Process', 'Blueprint', 'Blog'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item === 'Blueprint') navigateToCaseStudy();
                      else if (item === 'Blog') navigateToBlog();
                      else {
                        navigateToHome();
                        setTimeout(() => {
                          const el = document.getElementById(item.toLowerCase().replace(' ', '-'));
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="text-2xl font-serif italic text-left text-text-primary hover:text-accent-terracotta transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="pt-8 border-t border-text-primary/5 space-y-8">
                <button
                  onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
                  className="w-full bg-text-primary text-primary-bg text-sm font-bold uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-2"
                >
                  Book Growth Audit <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <p className="text-[10px] text-text-primary/40 uppercase tracking-widest font-bold mb-2">Connect with us</p>
                  <p className="text-accent-terracotta font-bold text-sm">contact@quantikgrowth.com</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HomeContent
                onNavigateToCaseStudy={navigateToCaseStudy}
                onNavigateToBlog={navigateToBlog}
                onOpenModal={() => setIsModalOpen(true)}
              />
            </motion.div>
          ) : currentPage === 'case-study' ? (
            <motion.div
              key="case-study"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CaseStudyPage onNavigateHome={navigateToHome} onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BlogPage onNavigateHome={navigateToHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary-bg pt-20 md:pt-32 pb-16 border-t border-text-primary/5">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          <div className="space-y-6 md:space-y-8 lg:col-span-2">
            <div onClick={navigateToHome} className="flex items-center text-xl md:text-2xl font-serif tracking-tighter cursor-pointer">
              <span className="text-text-primary italic">Quantik</span>
              <span className="text-accent-terracotta ml-0.5">Growth</span>
            </div>
            <p className="text-text-primary/60 text-[14px] leading-relaxed max-w-[240px]">
              India&apos;s only full-stack growth studio for SEBI-registered PMS firms.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mb-6 md:mb-8">Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {['About', 'Blueprint', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <span
                    onClick={link === 'Blueprint' ? navigateToCaseStudy : link === 'Blog' ? navigateToBlog : navigateToHome}
                    className="text-text-primary/60 hover:text-text-primary transition-colors text-[14px] cursor-pointer"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mb-6 md:mb-8">Contact</h4>
            <span className="text-accent-terracotta font-bold text-[14px] break-words">contact@quantikgrowth.com</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-bg/95 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-primary-bg border border-text-primary/10 w-full max-w-lg rounded-2xl p-6 sm:p-10 relative z-10"
            >
              <button className="absolute top-6 right-6 sm:top-8 sm:right-8 text-text-primary/40" onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></button>

              {!isModalSubmitted ? (
                <>
                  <h3 className="text-3xl sm:text-4xl font-serif mb-6 text-center italic">Inquiry Portal</h3>
                  <form className="space-y-4 sm:space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalSubmitted(true); setTimeout(() => { setIsModalOpen(false); setIsModalSubmitted(false); }, 3000); }}>
                    <input type="text" required placeholder="Identifier (Name)" className="w-full bg-secondary-surface/40 border border-text-primary/5 rounded-md px-5 py-4 text-sm sm:text-base focus:outline-none focus:border-accent-terracotta/30 transition-colors" />
                    <input type="email" required placeholder="Portal (Email)" className="w-full bg-secondary-surface/40 border border-text-primary/5 rounded-md px-5 py-4 text-sm sm:text-base focus:outline-none focus:border-accent-terracotta/30 transition-colors" />
                    <button type="submit" className="w-full bg-text-primary text-primary-bg font-bold py-5 hover:opacity-90 active:scale-95 transition-all text-sm sm:text-base">Confirm Inquiry</button>
                  </form>
                </>
              ) : (
                <div className="py-12 sm:py-20 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-success mx-auto" />
                  <h3 className="text-2xl font-serif italic">Inquiry Received</h3>
                  <p className="text-text-primary/60 text-sm">A growth curator will respond to your portal shortly.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 inset-x-6 z-40 lg:hidden"
          >
            <div className="bg-text-primary text-primary-bg p-4 flex items-center justify-between rounded-lg shadow-2xl">
              <div className="space-y-0.5">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none">Qualified PMS Firms</div>
                <div className="text-sm font-serif italic leading-none">Free Growth Audit</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-accent-terracotta text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded"
                >
                  Book Now
                </button>
                <button
                  onClick={() => {
                    setShowStickyCTA(false);
                    sessionStorage.setItem('cta-closed', 'true');
                  }}
                  className="p-1 opacity-40 hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
