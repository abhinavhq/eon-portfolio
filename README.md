# EON // 永遠 — Personal Developer Portfolio

> **"Building beyond the ordinary."**  
> An award-winning, Japanese-inspired, dark futuristic personal developer portfolio engineered for **Abhinav Yadav**.

![EON Portfolio Architecture](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

---

## ✦ System Overview

**EON** is an immersive digital experience built with **Next.js (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It embodies a monochromatic dark futuristic aesthetic with Japanese minimalism, atmospheric canvas particle systems, audio synthesis, live GitHub API integrations, and an intelligent context-aware personal assistant (**EON AI**).

---

## ✦ Architecture & Technology Stack

- **Framework**: Next.js 14+ (App Router, Server Components & Static Site Generation)
- **Styling**: Tailwind CSS with custom design tokens, dark futuristic palette, obsidian voids & silver typography
- **Animations**: Framer Motion for layout transitions, micro-interactions, magnetic physics & canvas particles
- **Audio Engine**: Zero-dependency procedural Web Audio API synthesizer for tactile UI feedback
- **AI Core**: Real backend endpoint (`/api/ai`) supporting OpenAI, Groq, or internal high-precision reasoning engine fallback
- **GitHub Integration**: Dynamic GitHub REST API pipeline with caching for user `@abhinavhq`
- **Contact Dispatch**: Secure validated endpoint (`/api/contact`) with rate limiting and honeypot protection

---

## ✦ Featured Flagship Systems

1. **Multi-Agent OS**: Distributed orchestration kernel for cooperative autonomous LLM agents with shared memory graphs.
2. **Heimdall Sentinel**: Automated defensive cybersecurity suite for network asset discovery, TLS auditing, and CVE mapping.
3. **Hospital Triage OpenEnv**: OpenAI Gymnasium-compliant RL environment modeling emergency department triage under stochastic surges.
4. **Iris AI Multimodal**: Lightweight edge-filtered vision assistant fusing real-time camera streams with conversational LLMs.
5. **Joi AI Companion**: *Blade Runner 2049*-inspired desktop companion with persistent episodic memory and OS automation hooks.
6. **Vantage Smart Stadium**: IoT and computer vision crowd-flow analytics platform tracking footfall density and queue wait-times.
7. **Evelyn Discord Bot**: High-uptime modular Discord bot with autonomous moderation and AI assistance.
8. **Nova Automation**: Resilient browser automation and workflow engine with self-healing retry mechanics.

---

## ✦ Local Development

Ensure you have **Node.js 18+** and **pnpm** installed.

```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Production Build & Verification

```bash
# Compile and build production bundles
pnpm run build

# Start production server
pnpm run start
```

---

## ✦ Configuration & Customization

All personal details, projects, skills, journey entries, and AI system instructions are centralized in a single configuration file:

```
src/config/portfolio.ts
```

Simply update this file to modify descriptions, add new repositories, or edit your social links without touching component code.

---

## ✦ Deployment to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for EON portfolio"
   git branch -M main
   git remote add origin https://github.com/abhinavhq/eon-portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. The framework preset will automatically be detected as **Next.js**.
4. (Optional) Add your environment variables (`OPENAI_API_KEY`, `GITHUB_TOKEN`, `RESEND_API_KEY`) under Settings → Environment Variables.
5. Click **Deploy**.

---

## ✦ License

Crafted with first-principles precision by **Abhinav Yadav** (@abhinavhq).  
MIT License.
