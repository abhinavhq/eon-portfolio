"use client";

import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { IntroLoader } from "@/components/ui/IntroLoader";
import { CommandPalette } from "./CommandPalette";
import { EonAIFloating } from "@/components/ai/EonAIFloating";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleOpenAi = () => setIsAiOpen(true);
    const handleOpenCmd = () => setIsCommandOpen(true);

    window.addEventListener("open-eon-ai", handleOpenAi);
    window.addEventListener("open-eon-command", handleOpenCmd);

    return () => {
      window.removeEventListener("open-eon-ai", handleOpenAi);
      window.removeEventListener("open-eon-command", handleOpenCmd);
    };
  }, []);

  return (
    <>
      {/* Intro cinematic loader */}
      <IntroLoader />

      {/* Atmospheric canvas & particle background */}
      <AtmosphericBackground />

      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Header Navigation */}
      <Header
        onOpenAi={() => setIsAiOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>

      {/* Floating Interactive AI Assistant Drawer */}
      <EonAIFloating isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

      {/* Command Palette (Ctrl/Cmd + K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenAi={() => setIsAiOpen(true)}
      />
    </>
  );
}
