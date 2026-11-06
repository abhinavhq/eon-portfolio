"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  japanese: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  index,
  japanese,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`relative mb-14 md:mb-20 ${className}`}>
      {/* Background Japanese Watermark */}
      <span
        aria-hidden="true"
        className="absolute -top-10 -left-6 text-6xl md:text-8xl font-bold font-sans text-white/[0.025] select-none pointer-events-none tracking-widest"
      >
        {japanese}
      </span>

      <div className="flex items-center space-x-3 mb-2">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {index}
        </span>
        <div className="w-8 h-[1px] bg-white/20" />
        <span className="font-mono text-xs text-zinc-400 tracking-wider">
          {japanese}
        </span>
      </div>

      <motion.h2
        className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
