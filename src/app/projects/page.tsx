import React from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/config/portfolio";
import { ArrowLeft, Github, ArrowRight, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Archive | Abhinav Yadav — EON",
  description:
    "Comprehensive repository and system archive: autonomous AI agents, defensive cybersecurity, reinforcement learning, and full-stack software.",
};

export default function ProjectsArchivePage() {
  return (
    <main className="min-h-screen bg-[#050508] text-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>RETURN HOME</span>
          </Link>
          <span className="text-xs font-mono text-zinc-500">
            SYSTEM ARCHIVE // 8 REPOSITORIES
          </span>
        </div>

        <div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">
            全プロジェクトアーカイブ // COMPLETE CATALOG
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white">
            Engineering Projects Archive
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-sans mt-3 max-w-2xl">
            Complete inventory of technical systems, autonomous runtimes, and
            open-source projects built by Abhinav Yadav.
          </p>
        </div>

        {/* Project Table / Detailed Rows */}
        <div className="space-y-4">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.slug}
              className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-white/25 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-500">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                    {proj.category}
                  </span>
                  <span>//</span>
                  <span>{proj.date}</span>
                  <span>//</span>
                  <span className="text-emerald-400">{proj.status}</span>
                </div>

                <Link
                  href={`/projects/${proj.slug}`}
                  className="block text-2xl font-display font-bold text-white hover:text-silver-200 transition-colors"
                >
                  {proj.title}
                </Link>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {proj.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3 flex-shrink-0">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={16} />
                </a>

                <Link
                  href={`/projects/${proj.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-colors flex items-center space-x-1"
                >
                  <span>Architecture</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
