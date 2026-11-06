"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GitHubProfile, GitHubRepo } from "@/types";
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  Users,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { sound } from "@/lib/sound";

export function GitHubActivitySection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setProfile(data.profile);
          setRepos(data.repos || []);
        }
      } catch (err) {
        console.error("Failed to fetch live GitHub metrics:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Compute language distribution from repos
  const languageCounts: { [key: string]: number } = {};
  repos.forEach((r) => {
    if (r.language) {
      languageCounts[r.language] = (languageCounts[r.language] || 0) + 1;
    }
  });

  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <section id="github" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="05 // TELEMETRY"
        japanese="公開リポジトリ"
        title="Live GitHub Open Source Activity"
        subtitle="Live telemetry and repositories pulled directly from GitHub (abhinavhq)."
      />

      {/* GitHub Profile Banner Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Profile Card */}
        <div className="lg:col-span-5 rounded-2xl bg-surface-100/80 border border-white/10 p-6 backdrop-blur-sm space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.name || "Abhinav Yadav"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500 font-mono text-xl">
                  AY
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-white flex items-center space-x-2">
                <span>{profile?.name || "Abhinav Yadav"}</span>
              </h3>
              <a
                href={profile?.html_url || "https://github.com/abhinavhq"}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>@{profile?.login || "abhinavhq"}</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            {profile?.bio ||
              "Computer Science student & systems developer exploring AI agents, cybersecurity, and futuristic software engineering."}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-lg font-mono font-bold text-white">
                {profile?.public_repos ?? 14}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">
                Repositories
              </div>
            </div>

            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-lg font-mono font-bold text-white">
                {profile?.followers ?? 24}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">
                Followers
              </div>
            </div>

            <div className="p-2 rounded bg-black/40 border border-white/5">
              <div className="text-lg font-mono font-bold text-emerald-400">
                Active
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">
                Status
              </div>
            </div>
          </div>

          <a
            href={profile?.html_url || "https://github.com/abhinavhq"}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-semibold hover:bg-zinc-200 transition-colors"
          >
            <Github size={14} />
            <span>View Full GitHub Profile</span>
          </a>
        </div>

        {/* Language distribution & Top repos */}
        <div className="lg:col-span-7 space-y-6">
          {/* Language Breakdown */}
          <div className="rounded-2xl bg-surface-100/80 border border-white/10 p-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-between">
              <span>// Repository Language Breakdown</span>
              <Code2 size={14} />
            </h4>

            <div className="space-y-3">
              {topLanguages.map(([lang, count]) => {
                const total = repos.length || 1;
                const pct = Math.round((count / total) * 100);
                return (
                  <div key={lang} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-300">{lang}</span>
                      <span className="text-zinc-500">{pct}% ({count} repos)</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity highlight note */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3 text-xs font-mono text-zinc-400">
            <Sparkles size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
            <p>
              GitHub metrics update automatically via server-side cached API requests.
              Abhinav's codebases are structured with continuous integration, unit tests, and
              modular directory layouts.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Repositories Grid */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          // Recent Public Repositories (Auto-Discovered)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.slice(0, 6).map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-5 rounded-xl bg-surface-100/60 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-zinc-400 group-hover:text-white transition-colors">
                    <FolderGit2 size={16} />
                    <span className="font-display font-semibold text-sm text-white truncate max-w-[200px]">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400" />
                </div>

                <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed mb-4">
                  {repo.description || "Public repository engineering."}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                <span className="text-zinc-400">{repo.language || "Code"}</span>

                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Star size={11} />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitBranch size={11} />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
