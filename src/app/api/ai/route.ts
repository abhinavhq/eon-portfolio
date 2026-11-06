import { NextRequest, NextResponse } from "next/server";
import {
  AI_SYSTEM_PROMPT,
  PERSONAL_INFO,
  FEATURED_PROJECTS,
  SKILL_CATEGORIES,
} from "@/config/portfolio";

// Simple in-memory rate limiter per IP: max 20 requests per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
    return true;
  }
  if (record.count >= 20) {
    return false;
  }
  record.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local-client";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please wait a moment before sending more queries.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid payload: 'messages' array required." },
        { status: 400 }
      );
    }

    const latestMessage = messages[messages.length - 1];
    if (!latestMessage?.content || typeof latestMessage.content !== "string") {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    if (latestMessage.content.length > 2000) {
      return NextResponse.json(
        { error: "Message length exceeds the 2000 character limit." },
        { status: 400 }
      );
    }

    // Check for configured external LLM providers
    const openaiKey = process.env.OPENAI_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;

    if (openaiKey) {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: process.env.OPENAI_MODEL || "gpt-4o-mini",
            messages: [
              { role: "system", content: AI_SYSTEM_PROMPT },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role,
                content: m.content,
              })),
            ],
            temperature: 0.7,
            max_tokens: 650,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const assistantReply = data.choices[0]?.message?.content;
          if (assistantReply) {
            return NextResponse.json({
              role: "assistant",
              content: assistantReply,
              provider: "openai",
              timestamp: new Date().toISOString(),
            });
          }
        }
      } catch (err) {
        console.warn("OpenAI API call failed, falling back to EON Neural Engine:", err);
      }
    }

    if (groqKey) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: AI_SYSTEM_PROMPT },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role,
                content: m.content,
              })),
            ],
            temperature: 0.6,
            max_tokens: 650,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const assistantReply = data.choices[0]?.message?.content;
          if (assistantReply) {
            return NextResponse.json({
              role: "assistant",
              content: assistantReply,
              provider: "groq",
              timestamp: new Date().toISOString(),
            });
          }
        }
      } catch (err) {
        console.warn("Groq API call failed, falling back to EON Neural Engine:", err);
      }
    }

    // Built-in intelligent context-aware engine fallback
    // Provides immediate, deterministic, accurate answers about Abhinav's projects, skills & background
    const userPrompt = latestMessage.content.toLowerCase();
    const reply = generateContextualReply(userPrompt);

    return NextResponse.json({
      role: "assistant",
      content: reply,
      provider: "eon-neural-engine",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("AI assistant route error:", error);
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "Systems nominal, but I experienced a momentary transmission anomaly. You can also explore Abhinav's projects directly in the Projects section or view his GitHub repositories at https://github.com/abhinavhq.",
        provider: "fallback",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  }
}

function generateContextualReply(prompt: string): string {
  // Identity & Overview
  if (
    prompt.includes("who is") ||
    prompt.includes("tell me about abhinav") ||
    prompt.includes("introduce") ||
    prompt.includes("background")
  ) {
    return `**Abhinav Yadav** is a Computer Science Engineering student and systems builder based in **Bengaluru, India**.\n\nHe specializes in **Artificial Intelligence & Machine Learning**, **Autonomous Agentic Systems**, **Cybersecurity**, and **Full-Stack Development**. He is driven by first-principles engineering and exploring unconventional technical problems—from distributed agent orchestration to defensive network security tools.\n\nHis overarching ambition is to engineer transformative software on an international stage. You can inspect his open-source work at [github.com/abhinavhq](${PERSONAL_INFO.githubUrl}).`;
  }

  // Multi-Agent OS
  if (
    prompt.includes("multi-agent") ||
    prompt.includes("multi agent") ||
    prompt.includes("orchestration") ||
    prompt.includes("kernel")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "multi-agent-os")!;
    return `### **Multi-Agent OS**\n*${p.tagline}*\n\n- **Overview**: ${p.description}\n- **Architecture**: Features a hierarchical supervisor-worker topology, asynchronous event-driven task scheduler, graph-based shared memory fabric, and sandboxed tool delegation with rollback mechanics.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n- **Status**: ${p.status}.\n\nInspect the source code: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Heimdall
  if (
    prompt.includes("heimdall") ||
    prompt.includes("cybersecurity") ||
    prompt.includes("security") ||
    prompt.includes("vulnerability")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "heimdall-cybersecurity")!;
    return `### **Heimdall Sentinel**\n*${p.tagline}*\n\n- **Purpose**: Automated defensive cybersecurity suite designed for high-throughput network asset discovery, TLS/SSL hygiene auditing, and real-time CVE threat correlation.\n- **Key Mechanics**: Combines asynchronous socket scanning with signature fingerprinting to map exposure surfaces with minimal false positives.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore repository: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Hospital Triage OpenEnv
  if (
    prompt.includes("hospital") ||
    prompt.includes("triage") ||
    prompt.includes("openenv") ||
    prompt.includes("reinforcement learning") ||
    prompt.includes("gym")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "hospital-triage-openenv")!;
    return `### **Hospital Triage OpenEnv**\n*${p.tagline}*\n\n- **Overview**: An OpenAI Gymnasium-compliant simulation platform modeling high-stress emergency medical triage under stochastic resource constraints.\n- **RL Architecture**: Formulates patient prioritization as an MDP, evaluating PPO and DQN policies against static heuristic baselines (like ESI).\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Iris AI
  if (
    prompt.includes("iris") ||
    prompt.includes("computer vision") ||
    prompt.includes("multimodal") ||
    prompt.includes("webcam")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "iris-ai")!;
    return `### **Iris AI Multimodal**\n*${p.tagline}*\n\n- **Innovation**: Bridges visual perception with conversational LLMs using edge keyframe filtering (SSIM delta heuristics), saving up to 78% in token costs compared to naive video streaming.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Joi AI Companion
  if (
    prompt.includes("joi") ||
    prompt.includes("joe") ||
    prompt.includes("companion") ||
    prompt.includes("blade runner")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "joi-ai-assistant")!;
    return `### **Joi AI Companion**\n*${p.tagline}*\n\n- **Concept**: Inspired by *Blade Runner 2049*, Joi is a desktop assistant featuring low-latency speech synthesis, persistent vector memory across sessions, and local OS automation hooks.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Vantage Smart Stadium
  if (
    prompt.includes("vantage") ||
    prompt.includes("stadium") ||
    prompt.includes("crowd")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "vantage-smart-stadium")!;
    return `### **Vantage Smart Stadium**\n*${p.tagline}*\n\n- **Overview**: Computer vision and IoT analytics platform tracking venue crowd density, concession wait times, and bottleneck alerts using YOLO edge detection and Next.js spatial dashboards.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Evelyn Discord Bot
  if (prompt.includes("evelyn") || prompt.includes("discord")) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "evelyn-discord-bot")!;
    return `### **Evelyn Discord Bot**\n*${p.tagline}*\n\n- **Features**: Modular asynchronous Discord bot serving developer communities with AI-assisted moderation, role governance, sandboxed code execution, and high uptime.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Nova
  if (prompt.includes("nova") || prompt.includes("automation")) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "nova-automation")!;
    return `### **Nova Automation**\n*${p.tagline}*\n\n- **Features**: Declarative browser automation and workflow orchestration framework with self-healing retry mechanics, Playwright integration, and credential vaulting.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nExplore: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Skills & Tech Stack
  if (
    prompt.includes("skill") ||
    prompt.includes("technolog") ||
    prompt.includes("stack") ||
    prompt.includes("languages") ||
    prompt.includes("python") ||
    prompt.includes("react")
  ) {
    const summary = SKILL_CATEGORIES.map(
      (c) =>
        `**${c.title}**: ${c.skills
          .slice(0, 4)
          .map((s) => s.name)
          .join(", ")}`
    ).join("\n- ");
    return `Abhinav's technical toolkit spans across systems, AI, and modern web architectures:\n\n- ${summary}\n\nHe prioritizes **Python** for machine learning and agentic workflows, **TypeScript / Next.js** for full-stack engineering, and **C/C++** for core systems comprehension.`;
  }

  // Collaboration / Hiring / Contact
  if (
    prompt.includes("collaborat") ||
    prompt.includes("hire") ||
    prompt.includes("contact") ||
    prompt.includes("reach") ||
    prompt.includes("email") ||
    prompt.includes("work with")
  ) {
    return `### **Collaborating with Abhinav**\n\nAbhinav is open for ambitious research projects, high-impact software engineering roles, and technical collaborations.\n\n- **Location**: Bengaluru, India (Open to remote and international opportunities)\n- **Direct Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n- **GitHub**: [github.com/abhinavhq](${PERSONAL_INFO.githubUrl})\n- **LinkedIn**: [${PERSONAL_INFO.linkedinUrl}](${PERSONAL_INFO.linkedinUrl})\n\nYou can also submit a direct message using the **Contact Section** on this website!`;
  }

  // Philosophy / Japanese aesthetic
  if (
    prompt.includes("philosophy") ||
    prompt.includes("japanese") ||
    prompt.includes("design") ||
    prompt.includes("aesthetic")
  ) {
    return `Abhinav's engineering and design philosophies are deeply grounded in:\n\n1. **First-Principles Engineering (基本原理)** — Deconstruct problems to their core constraints.\n2. **Autonomous Intelligence (自律知能)** — Build systems that reason and orchestrate without fragile reliance on manual oversight.\n3. **Resilient Security Posture (堅牢防御)** — Security as an architectural foundation, not an afterthought.\n4. **Minimalist Craftsmanship (研ぎ澄まされた美学)** — Ruthless reduction of noise, inspired by Japanese minimalism and cyberpunk precision.`;
  }

  // General default response
  return `I am **EON AI**, Abhinav Yadav's intelligent assistant.\n\nAbhinav is a Bengaluru-based Computer Science Engineering student and systems builder specializing in **Autonomous AI Agents**, **Cybersecurity (Heimdall)**, and **Full-Stack Development**.\n\nFeel free to ask me about:\n- His flagship projects like **Multi-Agent OS**, **Heimdall Sentinel**, or **Hospital Triage OpenEnv**\n- His technical skills and engineering architecture\n- How to collaborate or get in touch`;
}
