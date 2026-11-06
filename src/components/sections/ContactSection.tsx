"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/config/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { sound } from "@/lib/sound";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: "success",
          message:
            "Transmission logged successfully. Abhinav will review your message shortly.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botField: "",
        });
        sound.playChime();
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to transmit message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network transmission error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="07 // TRANSMISSION"
        japanese="連絡と交信"
        title="Initiate Contact & Collaboration"
        subtitle="Open for research collaborations, high-impact systems engineering roles, and innovative technical projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct info & Copy email */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-surface-100/80 border border-white/10 space-y-6">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">
                // Direct Dispatch
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Connect Directly
              </h3>
            </div>

            <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
              Whether you're developing agentic AI systems, engineering robust software,
              or looking to discuss technical architecture, I am always keen to connect.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3 truncate mr-2">
                <Mail size={16} className="text-zinc-400 flex-shrink-0" />
                <span className="text-xs font-mono text-white truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center space-x-1.5 transition-colors flex-shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Response Rate */}
            <div className="space-y-3 pt-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <MapPin size={13} className="text-zinc-500" />
                <span>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>EXPECTED RESPONSE: &lt; 24 HOURS</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-white/10 flex space-x-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center space-x-2 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={11} className="text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center space-x-2 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="text-zinc-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-surface-100/80 border border-white/10 backdrop-blur-md space-y-5"
          >
            {/* Honeypot hidden input */}
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={(e) =>
                setFormData({ ...formData, botField: e.target.value })
              }
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="alex@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Collaboration / Project Inquiry"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Message Content *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Describe your project, question, or opportunity..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {/* Submission status feedback */}
            {status.type === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center space-x-2"
              >
                <Check size={14} />
                <span>{status.message}</span>
              </motion.div>
            )}

            {status.type === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 flex items-center space-x-2"
              >
                <AlertCircle size={14} />
                <span>{status.message}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-white text-black text-xs font-mono font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-[0.99] disabled:opacity-40 flex items-center justify-center space-x-2"
            >
              <span>{isSubmitting ? "TRANSMITTING..." : "DISPATCH TRANSMISSION"}</span>
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
