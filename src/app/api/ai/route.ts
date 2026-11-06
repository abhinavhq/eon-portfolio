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
          "Systems nominal. You can review Abhinav's projects in the showcase section or view his GitHub repositories at https://github.com/abhinavhq.",
        provider: "fallback",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  }
}

function generateContextualReply(prompt: string): string {
  // Graph Agent
  if (
    prompt.includes("graph") ||
    prompt.includes("fraud") ||
    prompt.includes("kuzu") ||
    prompt.includes("mcp") ||
    prompt.includes("ring")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "graph-agent")!;
    return `### **Graph Agent — Financial Fraud Ring Detector**\n*${p.tagline}*\n\n- **Overview**: ${p.description}\n- **Architecture**: Employs an embedded **Kùzu Graph Database** paired with Model Context Protocol (**MCP**) tools and local **Ollama** LLMs to execute multi-hop graph traversals autonomously.\n- **Privacy**: 100% local execution ensuring zero financial data leaves the local boundary.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Pumpkin Search Engine
  if (
    prompt.includes("pumpkin") ||
    prompt.includes("search engine") ||
    prompt.includes("bm25") ||
    prompt.includes("hybrid search")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "pumpkin-search-engine")!;
    return `### **Pumpkin — AI Search Engine from Scratch**\n*${p.tagline}*\n\n- **Overview**: ${p.description}\n- **First-Principles Design**: Built with **zero third-party search APIs**. It implements custom tokenization, inverted indexing, BM25 relevance scoring, dense vector similarity, and Reciprocal Rank Fusion (RRF) with local Ollama RAG synthesis.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Multi-Agent OS
  if (
    prompt.includes("multi-agent") ||
    prompt.includes("multi agent") ||
    prompt.includes("orchestration") ||
    prompt.includes("planner") ||
    prompt.includes("coder")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "multi-agent-os")!;
    return `### **Multi-Agent OS**\n*${p.tagline}*\n\n- **Overview**: Autonomous multi-agent AI framework where specialized agents—**Planner, Researcher, Coder, Tester, and Reporter**—collaborate to solve complex engineering tasks using local Ollama LLMs.\n- **Architecture**: Features an iterative verification gate where the Tester agent automatically feeds unit-test syntax errors back to the Coder agent before generating the final report.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Nova Browser Agent
  if (
    prompt.includes("nova") ||
    prompt.includes("browser") ||
    prompt.includes("playwright")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "nova-automation")!;
    return `### **Nova — Autonomous Browser Agent**\n*${p.tagline}*\n\n- **Capabilities**: Translates natural language goals into autonomous multi-step browser actions (research, job hunting, shopping, data scraping) via **Playwright** and local LLM planning.\n- **Key Innovation**: Prunes massive DOM trees into compact semantic accessibility graphs to fit within token limits with 96%+ workflow reliability.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Vanta Fashion
  if (
    prompt.includes("vanta") ||
    prompt.includes("fashion") ||
    prompt.includes("luxury") ||
    prompt.includes("ecommerce")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "vanta-fashion")!;
    return `### **Vanta Fashion — Digital Luxury Platform**\n*${p.tagline}*\n\n- **Overview**: ${p.description}\n- **Live Deployment**: Hosted in production on Vercel at [vanta-fashion-two.vercel.app](https://vanta-fashion-two.vercel.app).\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Joe AI Assistant
  if (
    prompt.includes("joe") ||
    prompt.includes("voice") ||
    prompt.includes("companion")
  ) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "joe-ai-assistant")!;
    return `### **Joe AI — Next-Gen Personal Assistant**\n*${p.tagline}*\n\n- **Overview**: Combines natural spoken voice interaction, long-term memory across sessions, and local desktop task automations.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Vantage
  if (prompt.includes("vantage")) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "vantage-ai")!;
    return `### **Vantage AI — Dual-Mode Assistant**\n*${p.tagline}*\n\n- **Design**: Dynamically pivots between 'Fan Mode' (conversational attendee companion) and 'Ops Mode' (event operations & queue analytics).\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Evelyn Discord Bot
  if (prompt.includes("evelyn") || prompt.includes("discord")) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "evelyn-discord-bot")!;
    return `### **Evelyn Discord Bot**\n*${p.tagline}*\n\n- **Features**: Asynchronous Discord bot written in Python featuring economy, games, moderation, music streaming, and automated server utilities with 99.8% uptime.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Hospital Triage
  if (prompt.includes("hospital") || prompt.includes("triage") || prompt.includes("openenv")) {
    const p = FEATURED_PROJECTS.find((proj) => proj.slug === "hospital-triage-openenv")!;
    return `### **Hospital Triage OpenEnv**\n*${p.tagline}*\n\n- **Simulation**: Uses OpenEnv and local Ollama models to benchmark dynamic emergency triage decision-making under stochastic patient arrivals.\n- **Tech Stack**: ${p.techStack.join(", ")}.\n\nGitHub Repo: [${p.githubUrl}](${p.githubUrl})`;
  }

  // Identity & Overview
  if (
    prompt.includes("who is") ||
    prompt.includes("tell me about abhinav") ||
    prompt.includes("introduce") ||
    prompt.includes("background")
  ) {
    return `**Abhinav Yadav** is a Computer Science Engineering student and AI systems builder based in **Bengaluru, India**.\n\nHe specializes in **Graph Reasoning (Kùzu / MCP)**, **Search Engine Architecture (BM25 & Hybrid RAG from scratch)**, **Autonomous Multi-Agent Swarms (Multi-Agent OS)**, **Browser Agents (Nova)**, and **Full-Stack Engineering (Next.js/TypeScript)**.\n\nHe builds unconventional, deeply technical systems from first principles. Inspect his active repositories at [github.com/abhinavhq](${PERSONAL_INFO.githubUrl}).`;
  }

  // Skills & Tech Stack
  if (
    prompt.includes("skill") ||
    prompt.includes("technolog") ||
    prompt.includes("stack") ||
    prompt.includes("languages") ||
    prompt.includes("python")
  ) {
    const summary = SKILL_CATEGORIES.map(
      (c) =>
        `**${c.title}**: ${c.skills
          .slice(0, 4)
          .map((s) => s.name)
          .join(", ")}`
    ).join("\n- ");
    return `Abhinav's technical toolkit spans systems, AI, and modern web architectures:\n\n- ${summary}\n\nHe emphasizes **Python** for AI agents, graph reasoning, and search engineering, and **TypeScript / Next.js** for modern digital platforms.`;
  }

  // Collaboration / Hiring / Contact
  if (
    prompt.includes("collaborat") ||
    prompt.includes("hire") ||
    prompt.includes("contact") ||
    prompt.includes("reach") ||
    prompt.includes("email")
  ) {
    return `### **Collaborating with Abhinav**\n\nAbhinav is open for ambitious research projects, high-impact software engineering roles, and technical collaborations.\n\n- **Location**: Bengaluru, India (Open to remote and international roles)\n- **Direct Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n- **GitHub**: [github.com/abhinavhq](${PERSONAL_INFO.githubUrl})\n- **LinkedIn**: [${PERSONAL_INFO.linkedinUrl}](${PERSONAL_INFO.linkedinUrl})\n\nYou can also submit a direct message using the **Contact Section** on this website!`;
  }

  // Default
  return `I am **EON AI**, Abhinav Yadav's intelligent assistant.\n\nAbhinav builds from the ground up on GitHub:\n- **Graph Agent**: Multi-hop fraud ring detection with Kùzu and MCP\n- **Pumpkin**: Complete AI search engine with BM25 and hybrid RAG\n- **Multi-Agent OS**: Autonomous Planner/Coder/Tester swarms\n- **Nova**: Autonomous browser agent with Playwright\n- **Vanta Fashion**: Next.js luxury fashion platform live on Vercel\n\nWhat would you like to explore?`;
}
