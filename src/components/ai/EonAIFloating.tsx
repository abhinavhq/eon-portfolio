"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  X,
  RotateCcw,
  Copy,
  Check,
  Bot,
  User,
  ArrowRight,
  Minimize2,
  Terminal,
} from "lucide-react";
import { ChatMessage } from "@/types";
import { AI_SUGGESTED_QUESTIONS, PERSONAL_INFO } from "@/config/portfolio";
import { sound } from "@/lib/sound";

interface EonAIFloatingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EonAIFloating({ isOpen, onClose }: EonAIFloatingProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      role: "assistant",
      content: `Hello! I am **EON AI**, Abhinav Yadav's intelligent portfolio assistant.\n\nI can explain his architecture on projects like **Multi-Agent OS** and **Heimdall Sentinel**, break down his technical skill set, or guide you on collaboration. How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    sound.playClick();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      sound.playAiPulse();
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error("Transmission interrupted");
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          data.content ||
          "Systems nominal. You can review Abhinav's projects in the showcase section.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      sound.playHover();
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: "assistant",
          content:
            "I experienced a momentary connection interruption. However, all of Abhinav's projects and contact channels remain fully available on this site or at [github.com/abhinavhq](https://github.com/abhinavhq).",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setMessages([
      {
        id: "reset-1",
        role: "assistant",
        content: `Conversation reset. I am ready to answer your questions regarding Abhinav's software projects, skills, and background.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const copyToClipboard = (text: string, id: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 pointer-events-none">
        {/* Backdrop for mobile */}
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* AI Panel Window */}
        <motion.div
          className="relative w-full sm:w-[480px] h-[90vh] sm:h-[650px] bg-[#0c0c14]/95 border border-white/20 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto backdrop-blur-xl"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Sparkles size={15} />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-display font-bold text-white tracking-wide">
                    EON AI
                  </h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                    ASSISTANT
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE // CONTEXT-AWARE</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleReset}
                className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Reset conversation"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`flex items-start space-x-2.5 max-w-[88%] ${
                    msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs flex-shrink-0 mt-1 ${
                      msg.role === "user"
                        ? "bg-zinc-700 text-white"
                        : "bg-sky-950/80 border border-sky-400/30 text-sky-300"
                    }`}
                  >
                    {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`rounded-xl px-4 py-3 text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-white text-black font-medium"
                        : "bg-white/5 border border-white/10 text-zinc-200"
                    }`}
                  >
                    {renderFormattedMessage(msg.content)}
                  </div>
                </div>

                {/* Footer stats / copy */}
                <div className="flex items-center space-x-2 px-9 mt-1 text-[10px] font-mono text-zinc-500">
                  <span>{msg.timestamp}</span>
                  {msg.role === "assistant" && (
                    <button
                      onClick={() => copyToClipboard(msg.content, msg.id)}
                      className="hover:text-zinc-300 transition-colors flex items-center space-x-1"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check size={10} className="text-emerald-400" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy size={10} />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 px-3 py-2 bg-white/5 border border-white/10 rounded-lg w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.3s]" />
                <span className="ml-2 text-[11px] text-zinc-500">EON AI IS REASONING...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5">
              {AI_SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-[11px] font-mono text-left px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors flex items-center space-x-1 group"
                >
                  <span className="truncate max-w-[260px]">{q}</span>
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-black/60 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Abhinav's projects, architecture, skills..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 disabled:opacity-40 disabled:hover:bg-white transition-all active:scale-95 flex items-center justify-center"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Simple parser for bold text, headers, and bullet points
function renderFormattedMessage(content: string) {
  const lines = content.split("\n");
  return lines.map((line, idx) => {
    if (line.startsWith("### ")) {
      return (
        <span key={idx} className="block font-bold text-white text-sm mt-1 mb-1">
          {line.replace("### ", "")}
        </span>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <span key={idx} className="block pl-2 text-zinc-300">
          • {formatInlineText(line.replace("- ", ""))}
        </span>
      );
    }
    return (
      <span key={idx} className="block">
        {formatInlineText(line)}
      </span>
    );
  });
}

function formatInlineText(text: string) {
  // Replace bold **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
