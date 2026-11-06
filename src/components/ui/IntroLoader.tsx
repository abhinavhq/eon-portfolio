"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, FastForward } from "lucide-react";
import { sound } from "@/lib/sound";

export function IntroLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(sound.getMuted());

    // Check if intro was already seen in this session
    const seen = sessionStorage.getItem("eon_intro_seen");
    if (seen === "true") {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem("eon_intro_seen", "true");
            onComplete?.();
          }, 350);
          return 100;
        }
        // Swift, non-annoying loading curve
        const step = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sound.playClick();
    setProgress(100);
    setIsDone(true);
    sessionStorage.setItem("eon_intro_seen", "true");
    onComplete?.();
  };

  const handleSoundToggle = () => {
    const nextState = sound.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-white px-6 select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Top status bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
              <span>SYS.INIT // BENGALURU_NODE</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleSoundToggle}
                className="flex items-center space-x-1.5 px-3 py-1 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
                title="Toggle UI audio effects"
              >
                {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{isMuted ? "AUDIO: OFF" : "AUDIO: ON"}</span>
              </button>

              <button
                onClick={handleSkip}
                className="flex items-center space-x-1 px-3 py-1 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              >
                <span>SKIP</span>
                <FastForward size={13} />
              </button>
            </div>
          </div>

          {/* Central Monogram and Japanese Kanji */}
          <div className="flex flex-col items-center text-center">
            {/* Japanese aesthetic watermark */}
            <motion.div
              className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              永遠への序曲 // PRELUDE TO EON
            </motion.div>

            {/* Main Brand glyph */}
            <motion.div
              className="relative my-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-silver-200 to-zinc-500">
                EON
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.4em] text-zinc-400">
                ABHINAV YADAV
              </div>
            </motion.div>

            {/* Progress metric */}
            <div className="w-56 mt-8 flex flex-col items-center">
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="h-full bg-white transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="w-full flex justify-between items-center text-[11px] font-mono text-zinc-500 mt-3">
                <span>INITIALIZING</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom subtitle */}
          <div className="absolute bottom-8 text-center text-xs font-mono text-zinc-600">
            <span>EXPLORING INTELLIGENCE, ENGINEERING & IMAGINATION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
