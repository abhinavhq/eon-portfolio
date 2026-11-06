"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/config/portfolio";
import {
  Cpu,
  Shield,
  Layers,
  Globe,
  Terminal,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { sound } from "@/lib/sound";

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="01 // PROFILE"
        japanese="人物と理念"
        title="Engineering Beyond Conventional Boundaries"
        subtitle="Driven by first principles, autonomous agentic systems, and resilient security engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Personal narrative & international ambition */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed font-sans font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am <strong className="text-white font-medium">Abhinav Yadav</strong>,
              a Computer Science Engineering student based in the technological hub of{" "}
              <strong className="text-white font-medium">Bengaluru, India</strong>. My focus
              centers on artificial intelligence, autonomous multi-agent systems,
              defensive cybersecurity tooling, and scalable full-stack software.
            </p>

            <p>
              I believe software is most rewarding when tackling unconventional, high-friction
              domains: orchestrating cooperative LLM agents that reason over shared memory graphs,
              simulating stochastic emergency triage dynamics with reinforcement learning, or
              automating proactive security telemetry to safeguard modern networks.
            </p>

            <p className="text-sm md:text-base text-zinc-400 bg-white/[0.02] border-l-2 border-white/40 pl-4 py-2 italic font-mono">
              "Craftsmanship is the ruthless elimination of noise until only clarity, speed, and
              purpose remain."
            </p>
          </motion.div>

          {/* International Ambition Banner */}
          <motion.div
            className="rounded-xl p-6 bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 space-y-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <Globe size={14} />
              <span>International Engineering Vision</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {PERSONAL_INFO.ambition}
            </p>
          </motion.div>

          {/* Focus Areas list */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              // Core Interests & Exploration
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAL_INFO.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-100/60 border border-white/5 hover:border-white/15 transition-all flex items-center space-x-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-sky-400 transition-colors" />
                  <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Core Philosophies (Interactive cards) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            // Guiding Philosophies
          </div>

          <div className="space-y-3.5">
            {PERSONAL_INFO.philosophy.map((item, idx) => (
              <motion.div
                key={item.title}
                className="p-5 rounded-xl bg-surface-100/80 border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => sound.playHover()}
              >
                {/* Kanji watermark */}
                <span className="absolute top-2 right-3 text-2xl font-bold font-sans text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none">
                  {item.japanese}
                </span>

                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-2">
                  <span className="text-zinc-600 font-bold">0{idx + 1}</span>
                  <span>//</span>
                  <span className="text-zinc-200">{item.japanese}</span>
                </div>

                <h3 className="text-base font-display font-semibold text-white mb-1.5 group-hover:text-silver-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
