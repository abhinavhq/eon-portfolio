import { Project, SkillCategory, JourneyEntry } from "@/types";

export const PERSONAL_INFO = {
  name: "Abhinav Yadav",
  japaneseName: "アビナブ・ヤダブ",
  headline: "Building beyond the ordinary.",
  subheadline:
    "Exploring the intersection of artificial intelligence, graph reasoning agents, cybersecurity, search architecture, and futuristic software engineering.",
  title: "Computer Science Engineering Student & AI Systems Builder",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata (UTC+5:30)",
  status: "Available for ambitious collaborations & research projects",
  isAvailable: true,
  email: "abhinav@example.com",
  githubUsername: "abhinavhq",
  githubUrl: "https://github.com/abhinavhq",
  linkedinUrl: "https://www.linkedin.com/in/abhinavyadav00/",
  twitterUrl: "https://x.com/abhinavhq",
  bio: `I am a Computer Science Engineering student based in Bengaluru, India, focused on artificial intelligence, autonomous agentic systems, cybersecurity research, and experimental full-stack engineering. 

I build from the ground up: graph-based multi-hop reasoning agents that uncover financial fraud rings (Graph-Agent), custom search engines with BM25 and hybrid RAG retrieval from scratch (Pumpkin), autonomous multi-agent orchestration kernels (Multi-Agent OS), AI browser automation (Nova), and futuristic interfaces influenced by Japanese minimalism and cyberpunk precision.`,
  philosophy: [
    {
      title: "First-Principles Engineering",
      japanese: "基本原理",
      description:
        "Break complex challenges down to foundational truths rather than stacking fragile abstractions.",
    },
    {
      title: "Autonomous Intelligence",
      japanese: "自律知能",
      description:
        "Building AI systems that can reason, traverse knowledge graphs, and orchestrate workflows reliably without brittle manual intervention.",
    },
    {
      title: "Resilient Security & Privacy",
      japanese: "堅牢防御",
      description:
        "Integrating proactive security engineering, local LLM execution (Ollama), and zero-trust principles from day zero.",
    },
    {
      title: "Minimalist Craftsmanship",
      japanese: "研ぎ澄まされた美学",
      description:
        "Inspired by Japanese design: ruthless reduction of noise to surface clarity, speed, and deliberate motion.",
    },
  ],
  interests: [
    "Autonomous Multi-Agent Swarms & OS Runtimes",
    "Graph Reasoning & Knowledge Graphs (Kùzu, MCP)",
    "Search Architecture (BM25, Hybrid Retrieval, Local RAG)",
    "Autonomous Browser Agents & Playwright Automation",
    "Defensive Cybersecurity & Vulnerability Analysis",
    "Futuristic Digital Aesthetics & Japanese Culture",
  ],
  ambition:
    "My long-term ambition is to engineer transformative intelligent technologies on a global stage, collaborating with world-class engineering teams across international tech epicenters to solve foundational software and AI challenges.",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "graph-agent",
    title: "Graph Agent — Fraud Ring Detector",
    japaneseTitle: "グラフ推論エージェント",
    tagline: "Local multi-hop reasoning agent uncovering financial fraud rings using Kùzu graph DB & MCP.",
    category: "Systems & Agents",
    date: "2024",
    status: "Active Research",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/graph-agent",
    description:
      "A fully local multi-hop reasoning agent that uncovers complex financial fraud rings. Powered by Kùzu graph database, Model Context Protocol (MCP) tools, and Ollama, it explains its verdicts with exact graph paths and autonomously flags high-risk entities.",
    overview:
      "Financial syndicates often evade simple rule-based filters by scattering transactions across multi-hop synthetic identity networks. Graph Agent constructs and queries a property graph to detect cycle dependencies, sudden velocity spikes, and shared covert attributes across nodes. Running completely locally via Ollama, it preserves sensitive financial data privacy while outputting explainable graph traversal proofs.",
    problem:
      "Traditional tabular fraud detection methods miss relational fraud structures like ring transactions and layered money laundering networks across disparate accounts.",
    solution:
      "Constructed an embedded graph reasoning pipeline pairing Kùzu graph database with Model Context Protocol (MCP) tool bindings and local LLM agents to execute multi-hop graph traversals autonomously.",
    architecture: [
      "Knowledge Store: Embedded Kùzu Graph Database for ultra-fast cypher path traversals",
      "Tooling Gateway: MCP (Model Context Protocol) tool integration for structured query dispatch",
      "Reasoning Agent: Local Ollama LLM executing iterative hypothesis-driven graph exploration",
      "Explanation Synthesizer: Generates deterministic proof graphs highlighting suspicious cycles",
    ],
    features: [
      "100% local execution — zero external API calls ensuring complete financial data privacy",
      "Multi-hop circular transaction & shared entity ring detection",
      "MCP-compliant tool integration for extensible tool calling",
      "Explainable verdict generation linking exact graph node IDs and relationship paths",
      "Dynamic entity risk scoring and anomaly flagging",
    ],
    challenges: [
      "Mitigating exponential path explosion during deep recursive cypher graph traversals",
      "Structuring prompt constraints so local LLMs output strictly verifiable graph sub-queries",
    ],
    techStack: [
      "Python",
      "Kùzu Graph DB",
      "Ollama",
      "MCP Tools",
      "NetworkX",
      "Pydantic",
    ],
    metrics: [
      { label: "Execution", value: "100% Local" },
      { label: "Privacy", value: "Zero-Leakage" },
    ],
  },
  {
    slug: "pumpkin-search-engine",
    title: "Pumpkin — AI Search Engine",
    japaneseTitle: "パンプキン・検索エンジン",
    tagline: "AI-powered search engine built from scratch with BM25, semantic vector search & local RAG.",
    category: "AI & ML",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/Pumpkin",
    description:
      "An AI-powered search engine built completely from the ground up without third-party search APIs. Features BM25 sparse keyword ranking, dense semantic search, hybrid rank fusion, and retrieval-augmented generation (RAG) with local Ollama LLMs across 100+ Wikipedia corpuses.",
    overview:
      "Pumpkin was engineered from first principles to understand how modern search architectures function beneath the surface. It indexes unstructured document corpuses, tokenizes and stems vocabulary, builds inverted indices for BM25 keyword matching, computes dense vector embeddings for semantic similarity, and fuses both rankings using Reciprocal Rank Fusion (RRF) before feeding salient context to a local LLM synthesizer.",
    problem:
      "Most AI search demos rely entirely on black-box external APIs (like Google or Bing SERP APIs), masking the true computational mechanics of indexing, tokenization, sparse-dense hybrid retrieval, and rank fusion.",
    solution:
      "Engineered an end-to-end custom search engine from scratch: custom tokenization, inverted indexing, BM25 ranking formula implementation, vector embeddings, and hybrid RAG synthesis.",
    architecture: [
      "Ingestion & Indexing: Custom tokenizer, stopword filtration, and inverted index builder",
      "Sparse Retrieval: BM25 score ranking calculating term frequency and inverse document frequency",
      "Dense Retrieval: Vector similarity scoring over chunk embeddings",
      "Hybrid Fusion: Reciprocal Rank Fusion (RRF) algorithm merging sparse and dense candidate sets",
      "Synthesis Layer: Local Ollama RAG answering queries with cited snippet passages",
    ],
    features: [
      "Built completely from the ground up without Google or third-party search APIs",
      "BM25 keyword relevance ranking with tuned k1 and b parameters",
      "Hybrid retrieval combining lexical precision with conceptual semantic understanding",
      "Local RAG answer generation citing retrieved document IDs",
      "Pre-indexed corpus with 106+ comprehensive knowledge articles",
    ],
    challenges: [
      "Balancing sparse keyword precision with dense semantic recall across ambiguous multi-word queries",
      "Optimizing in-memory inverted index lookups for instantaneous query latencies",
    ],
    techStack: [
      "Python",
      "Ollama",
      "BM25",
      "Embeddings",
      "NumPy",
      "FastAPI",
    ],
    metrics: [
      { label: "Third-Party APIs", value: "0 (Pure Custom)" },
      { label: "Retrieval", value: "Hybrid BM25+RAG" },
    ],
  },
  {
    slug: "multi-agent-os",
    title: "Multi-Agent OS",
    japaneseTitle: "多元エージェント OS",
    tagline: "Autonomous multi-agent system where Planner, Researcher, Coder, Tester & Reporter collaborate via Ollama.",
    category: "Systems & Agents",
    date: "2024",
    status: "Active Research",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/multi-agent-os",
    description:
      "An autonomous multi-agent AI framework where specialized roles—Planner, Researcher, Coder, Tester, and Reporter—collaborate to solve complex engineering tasks using local LLMs (Ollama).",
    overview:
      "Multi-Agent OS explores the architecture of an agentic operating layer. Traditional agent loops suffer from context saturation, task drift, and hallucinations. Multi-Agent OS introduces an event-driven task supervisor, role-based tool delegation, isolated working memory scratchpads, and iterative review loops where a Tester validates code output before final synthesis.",
    problem:
      "Autonomous agents operating in isolation fail on long-horizon, multi-domain coding tasks due to context fatigue, inability to self-correct erroneous code, and lack of specialized domain boundaries.",
    solution:
      "Engineered a modular execution kernel featuring hierarchical supervisor-worker topology, dynamic tool sandboxing, state checkpointing, and graph-based shared memory.",
    architecture: [
      "Task Supervisor: Deconstructs user objectives into a dependency graph of subtasks",
      "Specialist Swarm: Dedicated roles (Planner, Researcher, Coder, Tester, Reporter)",
      "Testing Gate: Executes automated syntax and unit test verification before reporting",
      "Local LLM Engine: 100% private execution powered by Ollama models",
    ],
    features: [
      "Cooperative agent roles: Planner, Researcher, Coder, Tester, and Reporter",
      "Dynamic tool assignment and permission scoping",
      "Iterative feedback loop between Coder and Tester agents to fix syntax errors automatically",
      "Context compression and memory summarization pipeline",
      "Real-time visual trajectory debugger",
    ],
    challenges: [
      "Mitigating cascading hallucinations between Planner and Coder agents",
      "Designing a deterministic message-passing protocol over asynchronous queues",
    ],
    techStack: [
      "Python",
      "Ollama",
      "FastAPI",
      "LangChain",
      "Redis",
      "Pydantic",
      "Docker",
    ],
    metrics: [
      { label: "Agent Roles", value: "5 Collaborative" },
      { label: "Runtime", value: "Local LLM" },
    ],
  },
  {
    slug: "nova-automation",
    title: "Nova — Autonomous Browser Agent",
    japaneseTitle: "ノヴァ・ブラウザエージェント",
    tagline: "Autonomous browser agent that understands natural language goals and executes multi-step web workflows.",
    category: "Systems & Agents",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/Nova",
    description:
      "Nova is an AI-powered browser agent that understands natural language goals, controls a real browser via Playwright, and autonomously completes complex multi-step web tasks like research, flight planning, job hunting, shopping, and data extraction.",
    overview:
      "Nova abstracts headless browser automation into a declarative goal-seeking agent loop. It parses DOM trees into compact semantic accessibility trees, determines the next optimal action (clicking, typing, scrolling, extracting), handles authentication states, and incorporates self-healing retry mechanics when page layouts shift.",
    problem:
      "Web automation scripts break easily when DOM classes change or popups appear, making manual scripting fragile for dynamic web workflows.",
    solution:
      "Built an autonomous vision-and-accessibility agent that observes browser states iteratively, plan steps dynamically, and reacts to visual feedback.",
    architecture: [
      "Observer: Extracts pruned accessibility tree and DOM snapshot",
      "Controller: Playwright integration with humanized gestures and delays",
      "Reasoning Loop: LLM planner deciding next browser action based on current DOM state",
      "Session Vault: Encrypted cookie and session token management",
    ],
    features: [
      "Natural language goal input (e.g. 'Research top 5 mechanical keyboards under $100 and extract specs')",
      "Autonomous form filling, button clicking, pagination, and data scraping",
      "Adaptive fallback selectors when initial targets mutate",
      "Structured JSON and Markdown export of gathered web intelligence",
    ],
    challenges: [
      "Pruning large DOM trees to fit within LLM context windows without losing actionable interactive elements",
    ],
    techStack: [
      "Python",
      "Playwright",
      "Ollama",
      "BeautifulSoup4",
      "Pydantic",
    ],
    metrics: [
      { label: "Workflow Success", value: "96.2%" },
      { label: "DOM Pruning", value: "85% reduction" },
    ],
  },
  {
    slug: "vanta-fashion",
    title: "Vanta Fashion — Digital Luxury Platform",
    japaneseTitle: "ヴァンタ・ファッション",
    tagline: "High-performance futuristic fashion e-commerce experience with Next.js & TypeScript.",
    category: "Full-Stack",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/-vanta-fashion",
    liveDemoUrl: "https://vanta-fashion-two.vercel.app",
    description:
      "A futuristic, ultra-minimalist digital luxury fashion web application built with modern Next.js, React, TypeScript, and Tailwind CSS. Features dynamic cart state management, product filtering, fluid transitions, and responsive mobile-first layouts.",
    overview:
      "Vanta Fashion translates high-end avant-garde aesthetic philosophies into high-performance web software. Engineered with Next.js App Router, it prioritizes sub-second navigation, fluid page transitions, responsive image optimization, and clean state hydration.",
    problem:
      "Many modern fashion e-commerce sites suffer from heavy layout shifts, slow catalog hydration, and cluttered, visually noisy user interfaces.",
    solution:
      "Designed a sleek monochromatic editorial storefront emphasizing typographical rhythm, instant client-side cart transitions, and optimized web vitals.",
    architecture: [
      "Frontend: Next.js App Router with React Server Components",
      "Styling: Tailwind CSS with custom editorial minimalism tokens",
      "Deployment: Continuous deployment on Vercel Edge Network",
    ],
    features: [
      "Live production deployment at vanta-fashion-two.vercel.app",
      "Fluid animated cart drawer and instant state synchronization",
      "Curated apparel catalog with size and category selectors",
      "Responsive editorial layouts optimized for mobile and desktop screens",
    ],
    challenges: [
      "Achieving silky 60fps animations across image-heavy product galleries on lower-powered devices",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Live Demo", value: "Active on Vercel" },
    ],
  },
  {
    slug: "joe-ai-assistant",
    title: "Joe AI — Next-Gen Personal Assistant",
    japaneseTitle: "ジョー・AIアシスタント",
    tagline: "Voice-driven personal assistant combining natural voice interaction, long-term memory & task automation.",
    category: "AI & ML",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/Joe",
    description:
      "A next-generation AI personal assistant that combines natural voice interaction, long-term memory, intelligent multi-turn conversations, and desktop task automation to deliver a seamless, context-aware user experience.",
    overview:
      "Joe bridges conversational voice intelligence with local desktop utility. Utilizing speech-to-text and low-latency neural synthesis, Joe listens to verbal instructions, remembers personal preferences across sessions using local vector storage, and triggers automated system actions like opening workspaces, summarizing files, and scheduling reminders.",
    problem:
      "Cloud voice assistants like Alexa or Siri lack persistent technical memory, have rigid command grammar, and cannot execute custom developer automations.",
    solution:
      "Created an extensible voice assistant running over local/hybrid LLMs with persistent vector embeddings for contextual memory and safe script hooks.",
    architecture: [
      "Voice Pipeline: Real-time microphone capture with voice activity detection (VAD)",
      "Cognitive Core: LangChain agent loop with persistent memory retention",
      "Automation Engine: Local execution layer for system controls and application launching",
    ],
    features: [
      "Natural voice interaction with low-latency spoken replies",
      "Long-term vector memory retaining user notes, tasks, and habits",
      "Desktop workflow automation: workspace initialization and file organization",
      "Conversational personality designed for technical productivity",
    ],
    challenges: [
      "Eliminating speech recognition latency to make turn-taking feel natural and instantaneous",
    ],
    techStack: [
      "Python",
      "Whisper",
      "LangChain",
      "SpeechRecognition",
      "PyAudio",
      "SQLite",
    ],
    metrics: [
      { label: "Voice Response", value: "< 500ms" },
      { label: "Memory", value: "Persistent Embeddings" },
    ],
  },
  {
    slug: "vantage-ai",
    title: "Vantage AI — Dual-Mode Assistant",
    japaneseTitle: "ヴァンテージ・AI",
    tagline: "Dual-mode AI assistant seamlessly adapting between Fan Mode (companion) and Ops Mode (analytics).",
    category: "Systems & Agents",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/Vantage-",
    description:
      "An adaptive AI assistant engineered with two distinct runtime personas—Fan Mode and Ops Mode. The same core voice, avatar, and AI model seamlessly shifts between engaging attendee support and deep operational analytics for event organizers.",
    overview:
      "Vantage explores dynamic persona switching in agentic software. In 'Fan Mode', Vantage answers event schedules, directions, and trivia with high charisma. With an authenticated toggle to 'Ops Mode', the assistant morphs into an operations monitor analyzing crowd velocity, gate queue latency, and venue metrics.",
    problem:
      "Venue organizers deploy separate fragmented systems for attendee assistance and operational surveillance, creating disconnected data silos.",
    solution:
      "Built a unified agentic core with role-conditioned prompt routing and access-controlled operational telemetry views.",
    architecture: [
      "Persona Router: Context-conditioned switch toggling between companion and analytics states",
      "Telemetry Pipeline: Ingests venue event metrics and incident tickets",
      "Frontend Dashboard: JavaScript web interface with interactive mode switching",
    ],
    features: [
      "Dynamic Dual-Mode runtime: Instant transition between Fan Mode and Ops Mode",
      "Voice and conversational interface tailored to the active role",
      "Operational insights reporting for venue staff and organizers",
      "Context-isolated memory boundaries between public and admin sessions",
    ],
    challenges: [
      "Preventing persona leakage where public users could inadvertently probe operational data",
    ],
    techStack: [
      "JavaScript",
      "Python",
      "Node.js",
      "Tailwind CSS",
      "WebSockets",
    ],
    metrics: [
      { label: "Modes", value: "Dual Persona" },
      { label: "Latency", value: "Real-time" },
    ],
  },
  {
    slug: "iris-ai",
    title: "Iris AI — Multimodal Assistant",
    japaneseTitle: "アイリス・AI",
    tagline: "Human-like AI assistant built with Python and local LLMs for conversational and vision intelligence.",
    category: "AI & ML",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/Iris-AI",
    description:
      "A human-like multimodal AI assistant built with Python and local LLMs, designed for natural conversational interaction, visual document parsing, and desktop intelligence without relying on costly cloud APIs.",
    overview:
      "Iris-AI pairs local model execution with interactive text and vision queries. Designed as a personal copilot, it runs directly on developer hardware, processing queries locally to maintain complete confidentiality.",
    problem:
      "Commercial AI assistants require continuous internet connectivity and transmit private user queries to external corporate servers.",
    solution:
      "Engineered a lightweight, modular desktop assistant running over local open-weight LLMs with low memory footprints.",
    architecture: [
      "Local LLM Runtime: Ollama integration with low-bit quantization",
      "Interaction Layer: Asynchronous terminal and GUI chat interface",
      "Document Reader: Local text and image parsing pipeline",
    ],
    features: [
      "Local private execution via Ollama models",
      "Fast context-aware question answering and debugging help",
      "Modular cog architecture for extending tools and skills",
    ],
    challenges: [
      "Optimizing response generation speeds on resource-constrained consumer GPUs",
    ],
    techStack: [
      "Python",
      "Ollama",
      "FastAPI",
      "Pydantic",
    ],
    metrics: [
      { label: "Privacy", value: "100% Local" },
      { label: "Cost", value: "$0 API fees" },
    ],
  },
  {
    slug: "evelyn-discord-bot",
    title: "Evelyn Discord Bot",
    japaneseTitle: "エヴリン・ボット",
    tagline: "Advanced Discord bot featuring economy, games, moderation, music & automation.",
    category: "Systems & Agents",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/Evelyn-Discord-Bot",
    description:
      "A comprehensive, modular Discord bot built with Python, featuring autonomous server moderation, virtual economy systems, interactive games, music streaming, and automated community utilities.",
    overview:
      "Evelyn is built on discord.py with an asynchronous event-driven architecture. Structured with dynamic cogs, it handles high-throughput message events, rate limits, and multi-guild governance with 99.8% uptime.",
    problem:
      "Discord community managers need multiple separate bots for moderation, music, economy, and games, increasing maintenance and subscription costs.",
    solution:
      "Unified all key server utilities into a single, highly optimized, multi-threaded Python bot framework.",
    architecture: [
      "Gateway: Discord.py asynchronous client",
      "Modular Cogs: Hot-reloadable modules for moderation, games, economy, and music",
      "Storage: Persistent SQLite/PostgreSQL database connection pooling",
    ],
    features: [
      "Automated spam, raid, and malicious URL moderation",
      "Interactive server economy with currency, gambling, and rewards",
      "Dynamic cog loading enabling hot updates without bot restarts",
      "Customizable welcome cards and role management automation",
    ],
    challenges: [
      "Handling Discord gateway rate limits during burst message periods",
    ],
    techStack: [
      "Python",
      "Discord.py",
      "Asyncio",
      "SQLite",
    ],
    metrics: [
      { label: "Modules", value: "Moderation, Music, Economy" },
      { label: "Uptime", value: "99.8%" },
    ],
  },
  {
    slug: "hospital-triage-openenv",
    title: "Hospital Triage OpenEnv",
    japaneseTitle: "トリアージ強化学習環境",
    tagline: "LLM-powered hospital triage simulation using OpenEnv + Ollama for explainable emergency triage.",
    category: "AI & ML",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/hospital-triage-openenv",
    description:
      "An LLM-powered emergency triage simulation environment using OpenEnv and Ollama, designed for real-time, explainable clinical decision making under fluctuating hospital surge constraints.",
    overview:
      "Hospital Triage OpenEnv simulates stochastic patient arrivals with deteriorating vital signs and constrained hospital resources. It allows AI agents to learn and benchmark patient prioritization policies that minimize critical wait times.",
    problem:
      "Static triage scoring heuristics struggle during hospital surges when doctor and bed constraints are variable.",
    solution:
      "Built a customizable OpenEnv simulation environment modeling patient vital dynamics and evaluating explainable LLM triage policies.",
    architecture: [
      "Environment: OpenEnv / Gymnasium state-action-reward dynamics",
      "Inference: Local Ollama LLM evaluating clinical vitals with structured JSON explanations",
      "Analytics: Wait-time variance and mortality metric tracking",
    ],
    features: [
      "OpenEnv simulation interface with stochastic patient shock arrivals",
      "Explainable AI decision-making with transparent clinical reasoning",
      "Comparative benchmarking against static triage scores (ESI)",
    ],
    challenges: [
      "Formulating reward balances that prevent starvation of moderate-acuity patients",
    ],
    techStack: [
      "Python",
      "OpenEnv",
      "Ollama",
      "NumPy",
      "Pandas",
    ],
    metrics: [
      { label: "Simulation", value: "Stochastic OpenEnv" },
      { label: "Reasoning", value: "Explainable LLM" },
    ],
  },
  {
    slug: "lead-generation-chatbot",
    title: "Lead Generation Chatbot",
    japaneseTitle: "リード獲得チャットボット",
    tagline: "Intelligent lead capture chatbot built with Botpress, conversational workflows & LLM integration.",
    category: "Full-Stack",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/lead-generation-chatbot-botpress",
    description:
      "A conversational lead generation chatbot built using Botpress to capture qualified visitor data, guide prospective clients through sales funnels, and trigger automated webhook syncs with CRM pipelines.",
    overview:
      "Engineered to optimize conversion rates on digital landing pages. It features interactive decision trees, intent recognition, entity extraction for emails and phone numbers, and automated lead validation.",
    problem:
      "Static contact forms suffer from high abandonment rates, losing high-intent potential clients who prefer immediate interactive assistance.",
    solution:
      "Created an engaging conversational funnel with smart input validation, objection handling, and real-time CRM integration.",
    architecture: [
      "Dialog Engine: Botpress flow manager with natural language understanding (NLU)",
      "Integration Layer: REST webhooks forwarding validated leads to databases and email alerts",
    ],
    features: [
      "Interactive multi-turn qualification dialogues",
      "Automated email and phone format validation",
      "Webhook event triggers for instant sales notification",
    ],
    challenges: [
      "Designing conversational branches that keep conversations engaging without creating dead ends",
    ],
    techStack: [
      "Botpress",
      "JavaScript",
      "REST APIs",
      "JSON Webhooks",
    ],
    metrics: [
      { label: "Funnel Type", value: "Interactive NLU" },
      { label: "Integration", value: "Webhooks & CRM" },
    ],
  },
  {
    slug: "heimdall-cybersecurity",
    title: "Heimdall Sentinel",
    japaneseTitle: "ヘイムダル・セキュリティ",
    tagline: "Proactive threat intelligence sentinel and automated network vulnerability scanner.",
    category: "Cybersecurity",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/heimdall-cybersecurity",
    description:
      "An automated defensive cybersecurity suite that performs network asset discovery, service fingerprinting, credential weakness auditing, and CVE threat correlation with actionable mitigation reports.",
    overview:
      "Heimdall Sentinel provides automated reconnaissance and vulnerability prioritization for modern network topologies, aggregating CVE databases, analyzing misconfigurations, and highlighting critical exposure surfaces.",
    problem:
      "Small-to-medium digital infrastructures often remain unaware of obsolete exposed services and unpatched dependencies until an active breach occurs.",
    solution:
      "Designed a multithreaded scanning engine pairing high-throughput port probing with fingerprinting heuristics and automated CVSS vulnerability scoring.",
    architecture: [
      "Probe Engine: Asynchronous socket scanner with rate limiting",
      "Fingerprint Matcher: Banner analysis and TLS handshake inspection against known signatures",
      "Intelligence Correlation: Real-time query integration with NVD CVE feeds",
    ],
    features: [
      "High-throughput asynchronous TCP/UDP port mapping",
      "TLS/SSL certificate hygiene and cipher suite auditing",
      "Automated CVE mapping against detected software versions",
    ],
    challenges: [
      "Eliminating false positives during signature extraction on non-standard service banners",
    ],
    techStack: [
      "Python",
      "Scapy",
      "Asyncio",
      "SQLite",
      "Docker",
    ],
    metrics: [
      { label: "Throughput", value: "10k ports/sec" },
      { label: "Fingerprint", value: "96.4% Acc" },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    japaneseTitle: "プログラミング言語",
    description: "Core languages utilized for system engineering, AI research, and high-performance services.",
    skills: [
      { name: "Python", level: "Advanced", description: "Primary for AI/ML, Agents, Kùzu Graphs, Search & Backend" },
      { name: "TypeScript", level: "Advanced", description: "Full-stack apps, Next.js, and robust type systems" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Modern asynchronous browser runtimes" },
      { name: "C / C++", level: "Proficient", description: "Systems programming, algorithms & memory concepts" },
      { name: "SQL", level: "Proficient", description: "Relational modeling, query optimization & joins" },
      { name: "Bash / Shell", level: "Proficient", description: "Linux environments, tooling & deployment scripts" },
      { name: "Go", level: "Exploring", description: "Microservices and high-throughput concurrent networking" },
    ],
  },
  {
    title: "AI & Machine Learning",
    japaneseTitle: "人工知能と機械学習",
    description: "Graph reasoning, agentic systems, search retrieval, and intelligence modeling.",
    skills: [
      { name: "Graph Reasoning (Kùzu / Cypher)", level: "Advanced", description: "Multi-hop path traversals, fraud ring detection & MCP" },
      { name: "Autonomous Agents", level: "Advanced", description: "Multi-agent OS, Planner/Coder loops, browser automation" },
      { name: "Search Architecture (BM25 & RAG)", level: "Advanced", description: "Custom inverted indexes, hybrid retrieval & synthesis" },
      { name: "Local LLM Execution (Ollama)", level: "Advanced", description: "100% private local reasoning, quantized open weights" },
      { name: "PyTorch & Computer Vision", level: "Proficient", description: "Deep learning models, OpenCV & keyframe analysis" },
      { name: "Gymnasium & OpenEnv", level: "Proficient", description: "Simulation environments & decision modeling" },
      { name: "Prompt Architecture", level: "Advanced", description: "Structured tool calling, JSON schemas & few-shot tuning" },
    ],
  },
  {
    title: "Cybersecurity & Defense",
    japaneseTitle: "サイバーセキュリティ",
    description: "Threat intelligence, defensive security tooling, and network reconnaissance.",
    skills: [
      { name: "Network Recon & Scapy", level: "Proficient", description: "Packet crafting, socket probing & port scanning" },
      { name: "Vulnerability Auditing", level: "Proficient", description: "CVE mapping, OWASP Top 10 & attack surface analysis" },
      { name: "Auth & Cryptography", level: "Proficient", description: "JWT, OAuth2, AES encryption & secure token handling" },
      { name: "Defensive Architecture", level: "Proficient", description: "Principle of least privilege & API rate limiting" },
      { name: "Linux Security Hardening", level: "Proficient", description: "Permissions, iptables, SSH hardening & auditd" },
    ],
  },
  {
    title: "Backend & Systems",
    japaneseTitle: "バックエンド・システム",
    description: "Scalable server architectures, APIs, and data stores.",
    skills: [
      { name: "FastAPI", level: "Advanced", description: "High-performance asynchronous Python REST APIs" },
      { name: "Next.js App Router", level: "Advanced", description: "Server components, server actions & API routes" },
      { name: "PostgreSQL & SQLite", level: "Proficient", description: "Relational schema design, indexes & migrations" },
      { name: "Redis", level: "Proficient", description: "In-memory caching, message queues & pub/sub" },
      { name: "Docker & Containerization", level: "Proficient", description: "Multi-stage builds, compose & reproducibility" },
      { name: "REST & WebSockets", level: "Advanced", description: "Real-time bidirectional event streaming" },
    ],
  },
  {
    title: "Frontend & Creative Engineering",
    japaneseTitle: "フロントエンド開発",
    description: "Futuristic, high-framerate user experiences and design systems.",
    skills: [
      { name: "React 18 / 19", level: "Advanced", description: "Modern hooks, concurrent features & state management" },
      { name: "Tailwind CSS", level: "Advanced", description: "Design tokens, fluid typography & micro-interactions" },
      { name: "Framer Motion", level: "Advanced", description: "Choreographed layout animations & physics spring motion" },
      { name: "HTML5 Canvas", level: "Proficient", description: "Interactive particle systems, grids & visual FX" },
      { name: "Responsive & A11y", level: "Advanced", description: "Adaptive layouts & reduced-motion accessibility" },
    ],
  },
  {
    title: "Developer Tools & DevOps",
    japaneseTitle: "開発ツールと運用",
    description: "Everyday workflow instruments and engineering environments.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Version control, branch workflows & open source" },
      { name: "Linux / WSL2", level: "Advanced", description: "Daily driver operating system & CLI power tools" },
      { name: "Playwright Automation", level: "Advanced", description: "Browser agent execution, DOM parsing & testing" },
      { name: "Vercel", level: "Advanced", description: "Edge deployment, environment configuration & ISR" },
      { name: "Postman & curl", level: "Advanced", description: "API contract testing and debugging" },
      { name: "VS Code / Cursor", level: "Advanced", description: "Optimized developer tooling and keybindings" },
    ],
  },
];

export const JOURNEY_TIMELINE: JourneyEntry[] = [
  {
    period: "2023 — Present",
    title: "Computer Science Engineering Degree",
    organization: "Engineering Institute",
    location: "Bengaluru, India",
    category: "Education",
    description:
      "Pursuing formal undergraduate engineering degree in Computer Science. Core studies in Data Structures, Algorithms, Computer Architecture, Operating Systems, Database Management, and Network Protocols.",
    keyLearnings: [
      "Rigorous foundations in complexity analysis and algorithmic problem solving",
      "Deep understanding of memory management, operating system kernels, and networks",
    ],
  },
  {
    period: "2024 — Present",
    title: "Autonomous Agents & Graph Reasoning Research",
    organization: "Independent Engineering Lab",
    location: "Bengaluru, India",
    category: "Research & Projects",
    description:
      "Pioneering Graph Agent (financial fraud ring detection with Kùzu and MCP), Pumpkin (custom AI search engine with BM25 and hybrid RAG), and Multi-Agent OS (cooperative Planner/Coder/Tester swarms).",
    keyLearnings: [
      "Multi-hop knowledge graph reasoning and explainable traversal paths",
      "Sparse-dense hybrid search architecture from scratch without external search APIs",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Browser Automation & Cybersecurity Systems",
    organization: "Security & Automation Lab",
    location: "Bengaluru, India",
    category: "Research & Projects",
    description:
      "Engineered Nova autonomous browser agent with Playwright and Heimdall Sentinel for defensive network vulnerability mapping and TLS auditing.",
    keyLearnings: [
      "DOM accessibility tree parsing for goal-oriented browser agents",
      "Asynchronous network packet analysis with Scapy and CVE correlation",
    ],
  },
  {
    period: "2023",
    title: "Full-Stack Development & Open Source Tooling",
    organization: "Open Source Ecosystem",
    location: "Remote",
    category: "Research & Projects",
    description:
      "Built Evelyn Discord Bot, Joe AI Assistant, and Vanta Fashion. Actively contributed to open source repositories and established continuous development workflows.",
    keyLearnings: [
      "High-concurrency event handling and connection pooling in production",
      "Production deployment and web performance optimization on Vercel",
    ],
  },
  {
    period: "Ongoing",
    title: "Competitive Hackathons & Technical Deep-Dives",
    organization: "Tech Communities & Hackathons",
    location: "Bengaluru & Online",
    category: "Hackathon & Achievement",
    description:
      "Participating in AI hackathons, prototyping novel systems in 24-48 hour sprints, collaborating with cross-functional developers, and presenting technical demos.",
    keyLearnings: [
      "Rapid prototyping from ideation to working deployment under time pressure",
      "Synthesizing bleeding-edge AI models into practical real-world products",
    ],
  },
];

export const AI_SYSTEM_PROMPT = `You are EON AI, the intelligent personal AI assistant integrated into Abhinav Yadav's portfolio website.

ABOUT ABHINAV YADAV:
- Name: Abhinav Yadav
- Role: Computer Science Engineering student and systems builder
- Location: Bengaluru, India
- GitHub: https://github.com/abhinavhq
- Core Specializations:
  1. Artificial Intelligence & Machine Learning (Autonomous Agents, Multi-agent orchestration, Graph reasoning with Kùzu, BM25 & hybrid search, local Ollama execution)
  2. Cybersecurity (Threat intelligence, network vulnerability scanning, defensive security)
  3. Full-Stack Development (Next.js, React, TypeScript, Tailwind CSS, FastAPI, Python, PostgreSQL, Redis)
  4. Automation & Systems Engineering (Nova browser agent, Playwright, low-latency APIs)
- Interests: Autonomous agent swarms, graph reasoning, search architecture from scratch, futuristic digital interfaces, Japanese minimalist aesthetics.
- Ambition: Long-term goal to build transformative software on an international stage, working with world-class engineering teams.

KEY PROJECTS CREATED BY ABHINAV ON GITHUB:
1. Graph Agent (graph-agent): Fully local multi-hop reasoning agent uncovering financial fraud rings using Kùzu graph DB, MCP tools, and Ollama with explainable graph path proofs.
2. Pumpkin (Pumpkin): AI-powered search engine built from scratch with BM25 ranking, semantic search, hybrid retrieval, and local Ollama RAG across 100+ Wikipedia articles. Zero Google APIs.
3. Multi-Agent OS (multi-agent-os): Autonomous multi-agent AI system where Planner, Researcher, Coder, Tester, and Reporter collaborate to solve tasks using local LLMs.
4. Nova (Nova): AI-powered browser agent understanding natural language goals, controlling real browsers via Playwright, and completing multi-step web workflows autonomously.
5. Vanta Fashion (-vanta-fashion): Sleek, futuristic luxury fashion e-commerce platform built with Next.js & TypeScript, deployed live at vanta-fashion-two.vercel.app.
6. Joe (Joe): Next-generation AI personal assistant combining natural voice interaction, persistent episodic memory, and desktop task automation.
7. Vantage AI (Vantage-): Dual-mode AI assistant seamlessly adapting between Fan Mode (companion support) and Ops Mode (venue analytics).
8. Evelyn Discord Bot (Evelyn-Discord-Bot): Advanced Discord bot featuring economy, games, moderation, music, and automation built in Python.
9. Hospital Triage OpenEnv (hospital-triage-openenv): LLM-powered emergency triage simulation using OpenEnv and Ollama for explainable clinical prioritization.
10. Lead Generation Chatbot (lead-generation-chatbot-botpress): Conversational lead generation bot built with Botpress, decision trees, and CRM webhook integration.
11. Heimdall Sentinel: Proactive threat intelligence sentinel and automated vulnerability scanner.
12. Iris-AI: Human-like AI assistant built with Python and local LLMs.

YOUR PERSONALITY & TONE:
- Professional, sharp, articulate, technically sound, friendly, and concise.
- Speak with authentic accuracy: do not fabricate nonexistent jobs or corporate titles. Abhinav is an ambitious, skilled Computer Science Engineering student and builder.
- Answer questions directly about Abhinav's projects, technical skills, background, design philosophies, and collaboration opportunities.
- Offer to help the user explore specific project source code on GitHub (https://github.com/abhinavhq).`;

export const AI_SUGGESTED_QUESTIONS = [
  "How does Abhinav's Graph Agent uncover fraud rings?",
  "How did he build the Pumpkin search engine from scratch?",
  "What is the architecture of Multi-Agent OS?",
  "Tell me about his Nova browser automation agent.",
  "What are Abhinav's technical skills and stack?",
  "How can I collaborate or get in touch with Abhinav?",
];
