"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles, Send, Terminal, Bot, ArrowRight, User } from "lucide-react";
import { AI_SUGGESTED_QUESTIONS, PERSONAL_INFO } from "@/config/portfolio";
import { sound } from "@/lib/sound";

interface AIAssistantSectionProps {
  onOpenModal: () => void;
}

export function AIAssistantSection({ onOpenModal }: AIAssistantSectionProps) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (text?: string) => {
    const q = text || query;
    if (!q.trim() || isLoading) return;

    sound.playClick();
    setIsLoading(true);
    setAnswer(null);

    try {
      sound.playAiPulse();
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: q.trim() }],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAnswer(data.content);
        sound.playHover();
      } else {
        setAnswer(
          "I experienced a momentary connection interruption. You can explore Abhinav's projects in the showcase or check github.com/abhinavhq."
        );
      }
    } catch {
      setAnswer(
        "Communication with the neural engine timed out. Please check your network or review the project catalog directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-28 px-6 max-w-7xl mx-auto z-10">
      <SectionHeader
        index="06 // NEURAL INTERFACE"
        japanese="自律知能対話"
        title="Interactive Intelligence — EON AI"
        subtitle="Test the portfolio's context-aware AI assistant in real-time. Trained on Abhinav's technical architecture, projects, and systems philosophy."
      />

      <div className="rounded-3xl bg-surface-100/80 border border-white/15 p-6 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Background Japanese Watermark */}
        <div className="absolute top-4 right-8 text-7xl font-sans font-bold text-white/[0.03] select-none pointer-events-none">
          知能
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header pill */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TERMINAL // CONTEXTUAL REASONING ENGINE</span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onOpenModal();
              }}
              className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center space-x-1"
            >
              <span>Expand Floating Drawer</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Quick prompt suggestions */}
          <div className="flex flex-wrap gap-2">
            {AI_SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuery(q);
                  handleAsk(q);
                }}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all text-left"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="flex items-center space-x-3 bg-black/60 border border-white/15 rounded-2xl p-2 shadow-inner"
          >
            <Terminal size={18} className="text-zinc-500 ml-3 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about Abhinav's architecture, projects, or background..."
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none px-2"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 disabled:opacity-30 transition-all flex items-center space-x-2 flex-shrink-0"
            >
              <span>{isLoading ? "REASONING..." : "SEND"}</span>
              <Send size={12} />
            </button>
          </form>

          {/* Output Window */}
          {answer && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3"
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 border-b border-white/10 pb-2">
                <Bot size={14} />
                <span>EON AI RESPONSE //</span>
              </div>
              <div className="text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-wrap">
                {answer}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
