"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JOURNEY_TIMELINE } from "@/config/portfolio";
import { Calendar, MapPin, CheckCircle2, Milestone } from "lucide-react";
import { sound } from "@/lib/sound";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="04 // EVOLUTION"
        japanese="歩みと研鑽"
        title="Engineering Journey & Milestones"
        subtitle="The progression of academic rigor, independent research, open-source building, and competitive hackathons."
      />

      <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
        {JOURNEY_TIMELINE.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => sound.playHover()}
            className="relative group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#050508] border border-white/30 group-hover:border-white group-hover:scale-125 transition-all flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-sky-400 transition-colors" />
            </div>

            {/* Time Period Tag on left (desktop) */}
            <div className="md:absolute md:-left-44 md:top-1 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 md:mb-0">
              {item.period}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                  {item.category}
                </span>

                {item.location && (
                  <div className="flex items-center space-x-1 text-xs font-mono text-zinc-500">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1">
                {item.title}
              </h3>

              {item.organization && (
                <div className="text-xs font-mono text-zinc-400 mb-3">
                  {item.organization}
                </div>
              )}

              <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Key learnings */}
              {item.keyLearnings.length > 0 && (
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    // Key Takeaways & Competencies
                  </div>
                  {item.keyLearnings.map((learning, lIdx) => (
                    <div
                      key={lIdx}
                      className="flex items-start space-x-2 text-xs text-zinc-400 font-mono"
                    >
                      <CheckCircle2 size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
