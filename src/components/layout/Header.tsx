"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
  Command,
  ArrowUpRight,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { PERSONAL_INFO } from "@/config/portfolio";

interface HeaderProps {
  onOpenAi: () => void;
  onOpenCommand: () => void;
}

export function Header({ onOpenAi, onOpenCommand }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setIsMuted(sound.getMuted());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on home page
      if (pathname === "/") {
        const sections = ["about", "projects", "skills", "journey", "contact"];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleSound = () => {
    const next = sound.toggleMute();
    setIsMuted(next);
  };

  const navLinks = [
    { name: "About", href: "/#about", section: "about" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Skills", href: "/#skills", section: "skills" },
    { name: "Journey", href: "/#journey", section: "journey" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050508]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="flex items-center space-x-2 group"
          >
            <span className="font-display font-bold text-xl tracking-tighter text-white group-hover:text-silver-300 transition-colors">
              EON
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1 border-l border-white/20">
              永遠
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section && pathname === "/";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => sound.playHover()}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-white animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center space-x-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenCommand();
              }}
              className="hidden lg:flex items-center space-x-2 px-2.5 py-1.5 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
              title="Quick Command Palette (Ctrl+K / Cmd+K)"
            >
              <Command size={12} />
              <span>K</span>
            </button>

            {/* AI Assistant Pill */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenAi();
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-all hover:scale-105 active:scale-95 group"
            >
              <Sparkles size={13} className="text-sky-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">EON AI</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              title={isMuted ? "Audio muted. Click to enable." : "Audio enabled. Click to mute."}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-emerald-400" />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#050508]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 md:hidden">
          <div className="flex flex-col space-y-6">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              // Navigation
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-2xl font-display font-medium text-zinc-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-600">→</span>
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAi();
              }}
              className="text-2xl font-display font-medium text-sky-400 flex items-center space-x-2 pt-4 border-t border-white/10"
            >
              <Sparkles size={20} />
              <span>EON AI Assistant</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-2">
            <span className="text-xs font-mono text-zinc-500">
              ABHINAV YADAV // BENGALURU, INDIA
            </span>
            <div className="flex space-x-4 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center"
              >
                GitHub <ArrowUpRight size={12} className="ml-1" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center"
              >
                LinkedIn <ArrowUpRight size={12} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
