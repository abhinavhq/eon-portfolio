"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { GitHubActivitySection } from "@/components/sections/GitHubActivitySection";
import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  const handleOpenAi = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-eon-ai"));
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      <HeroSection onOpenAi={handleOpenAi} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <GitHubActivitySection />
      <AIAssistantSection onOpenModal={handleOpenAi} />
      <ContactSection />
    </main>
  );
}
