"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/config/portfolio";
import { sound } from "@/lib/sound";
import { Terminal, Shield, Cpu, Code2, Database, Wrench } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Code2 key="0" size={16} />,
    <Cpu key="1" size={16} />,
    <Shield key="2" size={16} />,
    <Database key="3" size={16} />,
    <Terminal key="4" size={16} />,
    <Wrench key="5" size={16} />,
  ];

  return (
    <section id="skills" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="03 // CAPABILITIES"
        japanese="技術体系"
        title="Technical Stack & Engineering Disciplines"
        subtitle="Systems-level foundations, machine learning frameworks, and defensive security instruments."
      />

      {/* Category Selector Tabs */}
      <div className="flex items-center flex-wrap gap-2 mb-10 pb-6 border-b border-white/[0.08]">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={cat.title}
              onClick={() => {
                sound.playClick();
                setActiveTab(idx);
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                isActive
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  : "bg-surface-100/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              <span>{icons[idx]}</span>
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display */}
      <div className="rounded-2xl bg-surface-100/60 border border-white/10 p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">
              <span>{SKILL_CATEGORIES[activeTab].japaneseTitle}</span>
              <span>//</span>
              <span>DOMAIN ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              {SKILL_CATEGORIES[activeTab].title}
            </h3>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            {SKILL_CATEGORIES[activeTab].description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onMouseEnter={() => sound.playHover()}
              className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all hover:bg-black/60 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-semibold text-sm text-white group-hover:text-silver-200 transition-colors">
                  {skill.name}
                </span>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    skill.level === "Advanced"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : skill.level === "Proficient"
                      ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                      : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {skill.description && (
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
