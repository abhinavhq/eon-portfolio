import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_PROJECTS, PERSONAL_INFO } from "@/config/portfolio";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found | EON" };
  }
  return {
    title: `${project.title} | Abhinav Yadav — EON`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050508] text-white pt-32 pb-24 px-6">
      {/* Container */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/#projects"
            className="flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO ARCHIVE</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500">
            <span>{project.category}</span>
            <span>//</span>
            <span>{project.date}</span>
          </div>
        </div>

        {/* Hero Section of Project */}
        <div className="space-y-4">
          {project.japaneseTitle && (
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {project.japaneseTitle}
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Links & Status */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center space-x-2"
            >
              <Github size={15} />
              <span>Inspect Source on GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-colors flex items-center space-x-2"
              >
                <span>Live Demonstration</span>
                <ExternalLink size={13} />
              </a>
            )}

            <div className="px-3 py-2 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-zinc-400">
              STATUS: <span className="text-white font-medium">{project.status}</span>
            </div>
          </div>
        </div>

        {/* Metrics Banner if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-surface-100/60 border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">
                  {m.label}
                </div>
                <div className="text-2xl font-display font-bold text-white">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        <div className="p-8 rounded-2xl bg-surface-100/40 border border-white/10 space-y-4">
          <h2 className="text-lg font-display font-bold text-white flex items-center space-x-2">
            <Sparkles size={16} className="text-sky-400" />
            <span>Comprehensive Overview</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-sans leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-6 rounded-2xl bg-red-950/10 border border-red-500/20 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-red-400 uppercase tracking-wider">
              <AlertTriangle size={14} />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 size={14} />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="p-8 rounded-2xl bg-surface-100/60 border border-white/10 space-y-5">
          <h2 className="text-lg font-display font-bold text-white flex items-center space-x-2">
            <Layers size={16} className="text-purple-400" />
            <span>System Architecture & Components</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1"
              >
                <div className="text-[10px] font-mono text-zinc-500">
                  NODE 0{idx + 1}
                </div>
                <div className="text-xs font-mono text-zinc-200">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Engineering Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Features */}
          <div className="p-6 rounded-2xl bg-surface-100/40 border border-white/10 space-y-4">
            <h3 className="text-base font-display font-bold text-white">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2 text-xs text-zinc-300 font-sans leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="p-6 rounded-2xl bg-surface-100/40 border border-white/10 space-y-4">
            <h3 className="text-base font-display font-bold text-white">
              Engineering Challenges & Mitigations
            </h3>
            <ul className="space-y-2.5">
              {project.challenges.map((chal, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2 text-xs text-zinc-300 font-sans leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            // Technologies & Frameworks Utilized
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA to return */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center space-x-2 text-xs font-mono text-white hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>GitHub Repository</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </main>
  );
}
