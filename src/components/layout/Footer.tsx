"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { sound } from "@/lib/sound";

export function Footer() {
  const [bengaluruTime, setBengaluruTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setBengaluruTime(timeStr);
      } catch {
        setBengaluruTime("19:55:00");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/[0.08] text-white pt-16 pb-12 overflow-hidden z-10">
      {/* Subtle Japanese Watermark */}
      <div className="absolute -bottom-10 right-4 text-8xl md:text-9xl font-bold text-white/[0.02] select-none pointer-events-none font-sans">
        技術と知能
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-2xl tracking-tighter">
                EON
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2 border-l border-white/20">
                ABHINAV YADAV
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-sans">
              Computer Science Engineering student and systems developer based in
              Bengaluru, India. Exploring the intersections of autonomous agents,
              cybersecurity, and futuristic software engineering.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ACTIVE // BENGALURU, IN: {bengaluruTime} IST</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              // Index
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link
                  href="/#about"
                  onClick={() => sound.playHover()}
                  className="hover:text-white transition-colors"
                >
                  About Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  onClick={() => sound.playHover()}
                  className="hover:text-white transition-colors"
                >
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  onClick={() => sound.playHover()}
                  className="hover:text-white transition-colors"
                >
                  Skill Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/#journey"
                  onClick={() => sound.playHover()}
                  className="hover:text-white transition-colors"
                >
                  Development Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={() => sound.playHover()}
                  className="hover:text-white transition-colors"
                >
                  Transmission / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              // Network
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Github size={14} />
                  <span>github.com/abhinavhq</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => sound.playClick()}
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Mail size={14} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} ABHINAV YADAV. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-1.5 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
