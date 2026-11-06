"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Terminal,
  Volume2,
  VolumeX,
  Mail,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";
import { FEATURED_PROJECTS, PERSONAL_INFO } from "@/config/portfolio";
import { sound } from "@/lib/sound";
import { useRouter } from "next/navigation";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAi: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenAi,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        sound.playClick();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = FEATURED_PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleNavigate = (path: string) => {
    sound.playClick();
    onClose();
    router.push(path);
  };

  const handleAction = (action: () => void) => {
    sound.playClick();
    action();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-xl bg-[#0c0c14] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10"
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {/* Search Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10">
            <Search size={18} className="text-zinc-400 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, project, or section... (ESC to exit)"
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-white transition-colors ml-2"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {/* Quick Actions */}
            <div className="px-3 py-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              System Actions
            </div>

            <button
              onClick={() => handleAction(onOpenAi)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <Sparkles size={16} className="text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Ask EON AI Assistant</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">AI PROMPT</span>
            </button>

            <button
              onClick={() =>
                handleAction(() => {
                  sound.toggleMute();
                })
              }
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {sound.getMuted() ? (
                  <Volume2 size={16} className="text-emerald-400" />
                ) : (
                  <VolumeX size={16} className="text-amber-400" />
                )}
                <span>Toggle Sound Effects</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">AUDIO</span>
            </button>

            <button
              onClick={() =>
                handleAction(() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.email);
                  alert(`Copied ${PERSONAL_INFO.email} to clipboard!`);
                })
              }
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-zinc-400" />
                <span>Copy Abhinav's Email</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">{PERSONAL_INFO.email}</span>
            </button>

            {/* Navigation links */}
            <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              Navigation
            </div>

            {[
              { name: "About Abhinav", href: "#about" },
              { name: "Project Gallery", href: "#projects" },
              { name: "Tech Stack & Skills", href: "#skills" },
              { name: "Journey Timeline", href: "#journey" },
              { name: "GitHub Activity", href: "#github" },
              { name: "Contact Transmission", href: "#contact" },
            ].map((nav) => (
              <button
                key={nav.name}
                onClick={() => handleNavigate(nav.href)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Terminal size={14} className="text-zinc-500" />
                  <span>{nav.name}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">JUMP</span>
              </button>
            ))}

            {/* Projects */}
            <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              Featured Projects
            </div>

            {filteredProjects.map((proj) => (
              <button
                key={proj.slug}
                onClick={() => handleNavigate(`/projects/${proj.slug}`)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 truncate">
                  <FolderGit2 size={16} className="text-zinc-400 flex-shrink-0" />
                  <div className="flex flex-col text-left truncate">
                    <span className="truncate">{proj.title}</span>
                    <span className="text-[11px] text-zinc-500 truncate">
                      {proj.tagline}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 flex-shrink-0 ml-2">
                  {proj.category}
                </span>
              </button>
            ))}
          </div>

          {/* Footer info */}
          <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-t border-white/5 text-[11px] font-mono text-zinc-500">
            <span>COMMAND PALETTE</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
