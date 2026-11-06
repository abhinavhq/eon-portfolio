"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURED_PROJECTS } from "@/config/portfolio";
import { Project } from "@/types";
import {
  Search,
  Github,
  ExternalLink,
  ArrowRight,
  GitBranch,
  Star,
  Activity,
  Layers,
} from "lucide-react";
import { sound } from "@/lib/sound";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Systems & Agents",
    "AI & ML",
    "Cybersecurity",
    "Full-Stack",
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === "All" || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="02 // SHOWCASE"
        japanese="主要プロジェクト"
        title="Featured Systems & Engineering Projects"
        subtitle="A curated portfolio of autonomous agent runtimes, defensive security suites, and deep technical prototypes."
      />

      {/* Control Bar: Search and Category Filtering */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-surface-100/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech or name..."
            className="w-full bg-surface-100/90 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
          <p className="text-sm font-mono text-zinc-500">
            No projects matched query "{searchQuery}" under "{selectedCategory}".
          </p>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-2xl bg-surface-100/80 border border-white/10 hover:border-white/25 flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      onMouseEnter={() => sound.playHover()}
    >
      {/* Subtle Japanese Watermark Header */}
      {project.japaneseTitle && (
        <span className="absolute top-4 right-4 text-xs font-mono text-zinc-600 select-none">
          {project.japaneseTitle}
        </span>
      )}

      <div>
        {/* Top Meta info */}
        <div className="flex items-center space-x-2 text-[11px] font-mono mb-3">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
            {project.category}
          </span>
          <span className="text-zinc-500">//</span>
          <span className="text-zinc-400">{project.status}</span>
        </div>

        {/* Title */}
        <Link
          href={`/projects/${project.slug}`}
          onClick={() => sound.playClick()}
          className="block group/link"
        >
          <h3 className="text-xl font-display font-bold text-white group-hover/link:text-silver-200 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight
              size={16}
              className="text-zinc-500 group-hover/link:text-white group-hover/link:translate-x-1 transition-all"
            />
          </h3>
        </Link>

        {/* Tagline */}
        <p className="text-xs font-mono text-zinc-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Summary Description */}
        <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Metrics Pill if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex items-center space-x-3 mb-4 p-2.5 rounded-lg bg-black/40 border border-white/5">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-[11px] font-mono">
                <span className="text-zinc-500">{m.label}: </span>
                <span className="text-white font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: GitHub Link & Details CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.playClick()}
          className="flex items-center space-x-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <Github size={14} />
          <span>Repository</span>
        </a>

        <Link
          href={`/projects/${project.slug}`}
          onClick={() => sound.playClick()}
          className="text-white hover:text-silver-300 font-medium flex items-center space-x-1"
        >
          <span>Deep Dive</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}
