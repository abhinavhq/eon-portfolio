"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  Circle,
  ExternalLink,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { sound } from "@/lib/sound";

interface HeroSectionProps {
  onOpenAi: () => void;
}

export function HeroSection({ onOpenAi }: HeroSectionProps) {
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "eon init --target autonomous-intelligence --node bengaluru";

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      if (current <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, current));
        current++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    sound.playClick();
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    sound.playClick();
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
      {/* Top Meta Bar */}
      <motion.div
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400 border-b border-white/[0.08] pb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <MapPin size={13} className="text-zinc-500" />
          <span>{PERSONAL_INFO.location.toUpperCase()}</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-500">12.9716° N, 77.5946° E</span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-300 uppercase tracking-wider text-[11px]">
            {PERSONAL_INFO.status}
          </span>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <span className="text-zinc-500">//</span>
              <span>COMPUTER SCIENCE & SYSTEMS ENGINEER</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white uppercase leading-[0.92]">
              Abhinav <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-silver-200 to-zinc-500">
                Yadav
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-zinc-400 max-w-xl font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white font-normal">Building beyond the ordinary.</span>{" "}
            Exploring the intersection of artificial intelligence, autonomous agentic runtimes,
            cybersecurity research, and futuristic digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs font-mono uppercase tracking-wider hover:bg-silver-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center space-x-2"
            >
              <span>Explore Projects</span>
              <ChevronRight size={14} />
            </MagneticButton>

            <button
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white tracking-wider uppercase transition-all flex items-center space-x-2 group interactive"
            >
              <Sparkles size={14} className="text-sky-400 group-hover:rotate-12 transition-transform" />
              <span>Ask EON AI</span>
            </button>

            <div className="flex items-center space-x-2 pl-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-full border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
                title="GitHub: abhinavhq"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-full border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Distinctive Interactive Telemetry HUD */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Futuristic HUD Card */}
          <div className="relative rounded-2xl bg-surface-100/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Japanese Kanji Corner Watermark */}
            <div className="absolute top-4 right-4 text-3xl font-sans font-bold text-white/[0.05] select-none pointer-events-none">
              未来
            </div>

            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                EON-KERNEL v2.4 // ACTIVE
              </span>
            </div>

            {/* Live CLI Shell Preview */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-zinc-500">
                $ <span className="text-zinc-200">{typedCommand}</span>
                <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse align-middle" />
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-2 text-[11px]">
                <div className="flex justify-between text-zinc-400">
                  <span>SUBSYSTEM</span>
                  <span className="text-zinc-200">STATUS</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Autonomous Swarm (Multi-Agent OS)</span>
                  <span className="text-emerald-400 font-semibold">ONLINE</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Defensive Sentinel (Heimdall)</span>
                  <span className="text-sky-400 font-semibold">PATROLLING</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>RL Environment (Hospital Triage)</span>
                  <span className="text-purple-400 font-semibold">OPTIMIZING</span>
                </div>
              </div>

              {/* Focus tags */}
              <div className="pt-2">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                  // Core Vector Priorities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Agentic Runtimes",
                    "Defensive Security",
                    "Computer Vision",
                    "Low-Latency Systems",
                    "Full-Stack TypeScript",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Telemetry pulse */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>LATENCY: 12ms</span>
              <span>MEMORY: 100% NOMINAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="flex items-center justify-between pt-8 text-xs font-mono text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={scrollToProjects}
          className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        </button>

        <span className="hidden sm:inline-block">
          ABHINAV YADAV // 2024 PORTFOLIO
        </span>
      </motion.div>
    </section>
  );
}
