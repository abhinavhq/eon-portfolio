import { Project, SkillCategory, JourneyEntry } from "@/types";

export const PERSONAL_INFO = {
  name: "Abhinav Yadav",
  japaneseName: "アビナブ・ヤダブ",
  headline: "Building beyond the ordinary.",
  subheadline:
    "Exploring the intersection of artificial intelligence, cybersecurity, autonomous agents, and futuristic software engineering.",
  title: "Computer Science Engineering Student & Systems Developer",
  location: "Bengaluru, India",
  timezone: "Asia/Kolkata (UTC+5:30)",
  status: "Available for ambitious collaborations & research projects",
  isAvailable: true,
  email: "abhinav@example.com", // Editable config
  githubUsername: "abhinavhq",
  githubUrl: "https://github.com/abhinavhq",
  linkedinUrl: "https://linkedin.com/in/abhinav-yadav",
  twitterUrl: "https://x.com/abhinavhq",
  bio: `I am a Computer Science Engineering student based in Bengaluru, India, focused on artificial intelligence, autonomous agentic systems, cybersecurity research, and experimental full-stack engineering. 

I gravitate toward unconventional technical problems: designing adaptive multi-agent runtimes, engineering defensive cybersecurity tools, building multimodal AI assistants, and crafting interfaces influenced by Japanese minimalism and cyberpunk futurism. My overarching vision is to pioneer intelligent digital infrastructure that pushes technology past ordinary boundaries.`,
  philosophy: [
    {
      title: "First-Principles Engineering",
      japanese: "基本原理",
      description:
        "Break complex challenges down to foundational truths rather than simply stacking abstractions.",
    },
    {
      title: "Autonomous Intelligence",
      japanese: "自律知能",
      description:
        "Building AI systems that can reason, orchestrate workflows, and collaborate reliably without brittle human intervention.",
    },
    {
      title: "Resilient Security Posture",
      japanese: "堅牢防御",
      description:
        "Integrating proactive security engineering from day zero—vulnerability analysis, threat intelligence, and zero-trust principles.",
    },
    {
      title: "Minimalist Craftsmanship",
      japanese: "研ぎ澄まされた美学",
      description:
        "Inspired by Japanese design: ruthless reduction of noise to surface clarity, speed, and deliberate motion.",
    },
  ],
  interests: [
    "Autonomous LLM Agents & Multi-Agent Swarms",
    "Computer Vision & Multimodal Perception",
    "Defensive Cybersecurity & Vulnerability Analysis",
    "Reinforcement Learning Environments",
    "Low-Latency Systems & Distributed Architectures",
    "Futuristic Digital Aesthetics & Japanese Culture",
  ],
  ambition:
    "My long-term ambition is to engineer transformative intelligent technologies on a global stage, collaborating with world-class engineering teams across international tech epicenters to solve foundational software and AI challenges.",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "multi-agent-os",
    title: "Multi-Agent OS",
    japaneseTitle: "多元エージェント OS",
    tagline: "Experimental orchestration kernel for cooperative autonomous LLM agents.",
    category: "Systems & Agents",
    date: "2024",
    status: "Active Research",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/multi-agent-os",
    description:
      "A distributed orchestration framework and runtime environment designed to enable multiple specialized LLM agents to communicate, delegate subtasks, share memory graphs, and execute complex software workflows in synchrony.",
    overview:
      "Multi-Agent OS explores the architecture of an agentic operating layer. Traditional agent wrappers suffer from context decay, hallucinatory loops, and task drift when attempting multi-step execution. Multi-Agent OS introduces an event-driven message bus, isolated scratchpads, role-based tool delegation, and a consensus arbiter to ensure deterministic goal completion.",
    problem:
      "Autonomous agents operating in isolation often fail on long-horizon, multi-domain tasks due to context saturation, lack of verification, and inability to rollback erroneous tool executions.",
    solution:
      "Engineered a modular execution kernel featuring hierarchical supervisor-worker topology, dynamic tool sandboxing, state checkpointing, and graph-based shared memory.",
    architecture: [
      "Core Kernel: Asynchronous task scheduler with dynamic dependency resolution",
      "Memory Fabric: Vector-indexed episodic storage coupled with transient working state",
      "Communication Protocol: Structured RPC message passing over typed schemas",
      "Safety Boundary: Sandboxed tool execution with dry-run verification",
    ],
    features: [
      "Hierarchical agent topology (Supervisor, Planner, Synthesizer, Specialist workers)",
      "Dynamic tool assignment and permission scoping",
      "State persistence and automatic step rollback on execution failure",
      "Context compression and memory summarization pipeline",
      "Real-time visual trajectory debugger",
    ],
    challenges: [
      "Mitigating agent cascading hallucination where one agent accepts erroneous output from another",
      "Optimizing memory retrieval latency across multi-turn agent dialogues",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LlamaIndex",
      "Redis",
      "Pydantic",
      "Docker",
    ],
    metrics: [
      { label: "Task Convergence", value: "92%" },
      { label: "Token Efficiency Gain", value: "+38%" },
    ],
  },
  {
    slug: "heimdall-cybersecurity",
    title: "Heimdall Sentinel",
    japaneseTitle: "ヘイムダル・セキュリティ",
    tagline: "Proactive threat intelligence sentinel and automated vulnerability scanner.",
    category: "Cybersecurity",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/heimdall-cybersecurity",
    description:
      "An automated defensive cybersecurity suite that performs network asset discovery, service fingerprinting, credential weakness auditing, and CVE threat correlation with actionable mitigation reports.",
    overview:
      "Heimdall Sentinel provides automated reconnaissance and vulnerability prioritization for modern network topologies. Built to emulate proactive red-team scanning with blue-team defensive intelligence, it aggregates known CVE databases, analyzes misconfigurations, and highlights critical exposure surfaces.",
    problem:
      "Small-to-medium digital infrastructures often remain unaware of obsolete exposed services, misconfigured ports, and unpatched dependencies until an active breach occurs.",
    solution:
      "Designed a multithreaded scanning engine that pairs high-throughput port probing with fingerprinting heuristics and automated CVSS vulnerability scoring.",
    architecture: [
      "Probe Engine: Asynchronous socket scanner with rate limiting to evade detection thresholds",
      "Fingerprint Matcher: Banner analysis and TLS handshake inspection against known service signatures",
      "Intelligence Correlation: Real-time query integration with NVD CVE and exploit feeds",
      "Reporting Engine: Markdown and JSON remediation summaries with CVSS severity ranking",
    ],
    features: [
      "High-throughput asynchronous TCP/UDP port mapping",
      "TLS/SSL certificate hygiene and cipher suite auditing",
      "Automated CVE mapping against detected software versions",
      "Exportable security posture audits in HTML and JSON",
      "Customizable alert hooks for detected high-severity risks",
    ],
    challenges: [
      "Eliminating false positives during signature extraction on non-standard service banners",
      "Balancing scan speed with network overhead to prevent accidental denial-of-service",
    ],
    techStack: [
      "Python",
      "Scapy",
      "Asyncio",
      "Nmap Lib",
      "SQLite",
      "Bash",
      "Docker",
    ],
    metrics: [
      { label: "Scan Throughput", value: "10k ports/sec" },
      { label: "Fingerprint Accuracy", value: "96.4%" },
    ],
  },
  {
    slug: "hospital-triage-openenv",
    title: "Hospital Triage OpenEnv",
    japaneseTitle: "トリアージ強化学習環境",
    tagline: "Reinforcement learning simulation environment for dynamic emergency patient triage.",
    category: "AI & ML",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/hospital-triage-openenv",
    description:
      "An OpenAI Gym / Gymnasium compatible simulation platform modeling high-stress emergency medical triage, designed to benchmark decision-making agents under stochastic resource constraints.",
    overview:
      "Emergency room overcrowding leads to delayed critical care. Hospital Triage OpenEnv simulates stochastic patient arrivals with deteriorating vital signs, fluctuating physician availability, and constrained diagnostic equipment. It allows reinforcement learning agents to learn triage policies that minimize mortality and wait-time variance.",
    problem:
      "Existing triage heuristics (e.g. ESI score) rely on static rules that struggle to optimize queue dynamics during surge events and resource starvation.",
    solution:
      "Created a Markov Decision Process (MDP) environment with parameterized patient state trajectories, stochastic bed churn, and reward shaping prioritizing acuity without starvation.",
    architecture: [
      "State Space: Matrix of patient vital trends, wait times, bed occupancy, and staff load",
      "Action Space: Discrete triage prioritization, diagnostic dispatch, and ward allocation",
      "Dynamics Engine: Probabilistic deterioration modeling based on clinical health metrics",
      "Reward Model: Multi-objective objective minimizing critical wait times and preventable mortality",
    ],
    features: [
      "Gymnasium-compliant environment interface (`reset`, `step`, `render`)",
      "Configurable hospital capacity parameters and patient shock arrival rates",
      "Baseline implementations: PPO, DQN, and rule-based heuristic benchmarks",
      "Visual trajectory analytics plotting patient vitals vs intervention latencies",
    ],
    challenges: [
      "Formulating a balanced reward function that penalizes patient mortality heavily without causing the agent to over-prioritize single hopeless cases",
    ],
    techStack: [
      "Python",
      "Gymnasium",
      "PyTorch",
      "NumPy",
      "Matplotlib",
      "Pandas",
    ],
    metrics: [
      { label: "Mortality Reduction", value: "-14.2%" },
      { label: "Simulation Speed", value: "25,000 steps/sec" },
    ],
  },
  {
    slug: "iris-ai",
    title: "Iris AI Multimodal",
    japaneseTitle: "アイリス・AI",
    tagline: "Multimodal perception assistant fusing real-time vision and conversational intelligence.",
    category: "AI & ML",
    date: "2024",
    status: "Active Research",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/iris-ai",
    description:
      "A lightweight multimodal AI engine capable of interpreting webcam feeds, video streams, and screen captures in real-time to answer visual queries and assist with technical debugging.",
    overview:
      "Iris AI bridges visual perception with conversational LLMs. Instead of sending full video streams to heavy cloud models, Iris uses edge object detection and frame difference heuristics to extract semantic keyframes, passing only salient visual contexts to multimodal models.",
    problem:
      "Streaming continuous video to cloud vision models is bandwidth-intensive, slow, and expensive for interactive desktop assistance.",
    solution:
      "Engineered an intelligent frame-sampling pipeline that detects motion and state transitions locally before triggering semantic vision inference.",
    architecture: [
      "Perception Pipeline: OpenCV video ingestion with structural similarity index (SSIM) delta filtering",
      "Context Buffer: Ring buffer of recent visual states paired with audio transcription",
      "Inference Gateway: Asynchronous dispatch to vision-language models with streaming audio synthesis",
    ],
    features: [
      "Live camera and window capture stream analysis",
      "Semantic keyframe extraction saving up to 80% token costs",
      "Interactive voice and text query answering",
      "Visual code snippet and diagram explanation capability",
    ],
    challenges: [
      "Maintaining sub-second response times while processing high-resolution visual inputs",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "PyTorch",
      "FastAPI",
      "WebSocket",
      "Vision-Language Models",
    ],
    metrics: [
      { label: "Latency", value: "< 850ms" },
      { label: "Token Savings", value: "78%" },
    ],
  },
  {
    slug: "joi-ai-assistant",
    title: "Joi AI Companion",
    japaneseTitle: "ジョイ・コンパニオン",
    tagline: "Context-aware desktop companion and workflow intelligence agent.",
    category: "AI & ML",
    date: "2023",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/joi-ai-assistant",
    description:
      "An intelligent desktop companion inspired by Blade Runner 2049, featuring voice interaction, persistent episodic memory, desktop automation, and empathetic conversational persona.",
    overview:
      "Joi AI Assistant was created to explore natural human-computer collaboration. Beyond simple question answering, Joi tracks long-term context about the user's ongoing projects, manages tasks, summarizes technical documentation, and executes local system automation commands via voice or text.",
    problem:
      "Standard chatbots lack persistent memory of user habits and cannot interact meaningfully with local OS environments.",
    solution:
      "Built a hybrid assistant combining a local SQLite/vector memory store with OS automation hooks and low-latency speech synthesis.",
    architecture: [
      "Speech Pipeline: Local Whisper STT paired with low-latency neural TTS",
      "Cognitive Engine: LangChain agent loop with persistent conversation history",
      "System Interop: Safe sandboxed script runner for file management and app launches",
    ],
    features: [
      "Bi-directional voice interface with natural turn-taking",
      "Persistent long-term memory storing user preferences and project notes",
      "System utility controls: workspace setup, timer management, note taking",
      "Minimalist HUD interface with audio waveform visualization",
    ],
    challenges: [
      "Achieving seamless conversational flow with low audio latency on consumer hardware",
    ],
    techStack: [
      "Python",
      "Whisper",
      "LangChain",
      "PyAudio",
      "ChromaDB",
      "Electron",
    ],
    metrics: [
      { label: "Speech Latency", value: "~420ms" },
      { label: "Memory Retention", value: "Persistent" },
    ],
  },
  {
    slug: "vantage-smart-stadium",
    title: "Vantage Smart Stadium",
    japaneseTitle: "ヴァンテージ・スマートスタジアム",
    tagline: "Computer vision and IoT analytics platform for venue crowd flow and queue latency.",
    category: "Full-Stack",
    date: "2024",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/abhinavhq/vantage-smart-stadium",
    description:
      "A comprehensive IoT and computer vision monitoring system that tracks venue crowd density, concession queue wait-times, and perimeter security anomalies in large-scale venues.",
    overview:
      "Vantage ingest feeds from distributed RTSP cameras, applying edge object detection and tracking to calculate real-time footfall velocity, bottleneck warnings, and safety egress status through a high-performance web dashboard.",
    problem:
      "Stadium operators lack granular real-time visibility into bottleneck zones, leading to unsafe crowding at exits and frustrating concession queue times.",
    solution:
      "Created an edge-to-cloud analytics pipeline aggregating anonymous coordinate detections into heatmaps and predictive wait-time models.",
    architecture: [
      "Edge Node: YOLO-based lightweight pedestrian detection & centroid tracking",
      "Data Broker: MQTT telemetry streaming to backend time-series database",
      "Visualization: WebGL-rendered spatial venue heatmap and live metrics console",
    ],
    features: [
      "Real-time spatial density heatmaps rendered on interactive venue maps",
      "Automated queue length and wait-time estimation algorithms",
      "Threshold-based alert dispatch for overcrowding incidents",
      "Historical crowd flow playback and trend forecasting",
    ],
    challenges: [
      "Handling occlusions and variable lighting across diverse camera vantage points",
    ],
    techStack: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
    ],
    metrics: [
      { label: "Frame Rate", value: "30 FPS edge" },
      { label: "Density Accuracy", value: "94%" },
    ],
  },
  {
    slug: "evelyn-discord-bot",
    title: "Evelyn Discord Bot",
    japaneseTitle: "エヴリン・ボット",
    tagline: "Autonomous community moderation and utilities bot with intelligent LLM plugins.",
    category: "Systems & Agents",
    date: "2023",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/evelyn-discord-bot",
    description:
      "A modular, high-uptime Discord bot serving developer communities with AI-assisted moderation, automated role governance, code execution snippets, and interactive utilities.",
    overview:
      "Evelyn was engineered with an asynchronous event-driven architecture, featuring hot-reloadable cogs, Redis rate limiting, and an integrated LLM query handler for community support.",
    problem:
      "Managing fast-growing developer communities requires continuous moderation and quick technical assistance without burdening human moderators.",
    solution:
      "Implemented intelligent rule-based heuristic moderation combined with LLM-powered context summaries and technical Q&A cogs.",
    architecture: [
      "Event Bus: Discord.py asynchronous gateway client",
      "Storage: PostgreSQL with asyncpg connection pooling",
      "Cache: Redis token bucket rate limiting",
    ],
    features: [
      "Autonomous spam and malicious link detection",
      "Multi-tenant guild configuration system",
      "Safe sandboxed code runner integration",
      "Custom analytics dashboard for server engagement",
    ],
    challenges: [
      "Handling high-concurrency gateway events during peak server activity without API throttling",
    ],
    techStack: [
      "Python",
      "Discord.py",
      "PostgreSQL",
      "Redis",
      "Asyncio",
      "Docker",
    ],
    metrics: [
      { label: "Guilds Handled", value: "50+" },
      { label: "Uptime", value: "99.8%" },
    ],
  },
  {
    slug: "nova-automation",
    title: "Nova Automation",
    japaneseTitle: "ノヴァ・自動化フレームワーク",
    tagline: "High-performance automation and workflow orchestration framework.",
    category: "Systems & Agents",
    date: "2024",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/abhinavhq/nova",
    description:
      "A developer-first automation framework designed for rapid creation of resilient browser automation, data scraping pipelines, and scheduled API sync tasks with built-in retry mechanics.",
    overview:
      "Nova abstracts headless browser automation and API polling into declarative workflow graphs. Features automatic anti-bot mitigation, dynamic proxy rotation, and structured JSON output normalization.",
    problem:
      "Ad-hoc automation scripts frequently break due to transient network drops, rate limits, and DOM changes.",
    solution:
      "Built a self-healing workflow execution engine with adaptive exponential backoff and DOM mutation observers.",
    architecture: [
      "Workflow Engine: Directed Acyclic Graph (DAG) task runner",
      "Driver Layer: Playwright wrapper with humanized input gestures",
      "Telemetry: Structured logging and failure screenshot capturing",
    ],
    features: [
      "Declarative YAML/Python workflow definitions",
      "Smart DOM wait conditions and selector fallback heuristics",
      "Integrated credential vault using AES-256 encryption",
      "Automatic session cookies and token persistence",
    ],
    challenges: [
      "Bypassing modern aggressive Cloudflare and bot-protection challenges reliably",
    ],
    techStack: [
      "Python",
      "Playwright",
      "BeautifulSoup4",
      "Pydantic",
      "Rich CLI",
    ],
    metrics: [
      { label: "Pipeline Reliability", value: "99.2%" },
      { label: "Execution Speedup", value: "3.4x" },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    japaneseTitle: "プログラミング言語",
    description: "Core languages utilized for system engineering, AI research, and high-performance services.",
    skills: [
      { name: "Python", level: "Advanced", description: "Primary for AI/ML, Agents, Automation & Backend" },
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
    description: "Architectures, agentic systems, and intelligence modeling.",
    skills: [
      { name: "Autonomous Agents", level: "Advanced", description: "Multi-agent orchestration, tool use & memory" },
      { name: "LangChain / LlamaIndex", level: "Advanced", description: "RAG pipelines, vector retrieval & agent loops" },
      { name: "PyTorch", level: "Proficient", description: "Deep learning model training and inference" },
      { name: "Computer Vision (OpenCV)", level: "Proficient", description: "Image processing, object tracking & YOLO" },
      { name: "Gymnasium (RL)", level: "Proficient", description: "Custom simulation environments & policy training" },
      { name: "Prompt Architecture", level: "Advanced", description: "Structured reasoning, JSON schemas & few-shot tuning" },
      { name: "Transformers / HuggingFace", level: "Proficient", description: "Fine-tuning open weights & embeddings" },
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
      { name: "PostgreSQL", level: "Proficient", description: "Relational schema design, indexes & migrations" },
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
      { name: "GitHub Actions", level: "Proficient", description: "CI/CD automated testing and linting pipelines" },
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
    title: "Autonomous Agents & AI Systems Research",
    organization: "Independent Engineering Lab",
    location: "Bengaluru, India",
    category: "Research & Projects",
    description:
      "Pioneering autonomous multi-agent runtimes (Multi-Agent OS), multimodal perception architectures (Iris AI), and reinforcement learning simulations (Hospital Triage OpenEnv). Focused on mitigating context drift and cascading hallucinations.",
    keyLearnings: [
      "Event-driven architecture for agent communication and shared memory graphs",
      "Reinforcement learning reward formulation in complex stochastic environments",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Cybersecurity & Threat Intelligence Projects",
    organization: "Security Lab",
    location: "Bengaluru, India",
    category: "Research & Projects",
    description:
      "Researched defensive network security methodologies, building the Heimdall Sentinel suite for automated vulnerability mapping, packet analysis, and security hygiene auditing.",
    keyLearnings: [
      "Low-level socket programming and asynchronous packet dissection with Scapy",
      "Threat modeling, CVE mapping heuristics, and zero-trust principles",
    ],
  },
  {
    period: "2023",
    title: "Full-Stack Development & Open Source Tooling",
    organization: "Open Source Ecosystem",
    location: "Remote",
    category: "Research & Projects",
    description:
      "Built Evelyn Discord Bot, Joi AI Assistant, and the Nova automation framework. Actively contributed to open source repositories and established continuous development workflows.",
    keyLearnings: [
      "High-concurrency event handling and connection pooling in production",
      "Engineering resilient web scrapers and browser automation pipelines",
    ],
  },
  {
    period: "Ongoing",
    title: "Competitive Hackathons & Technical Deep-Dives",
    organization: "Tech Communities & Hackathons",
    location: "Bengaluru & Online",
    category: "Hackathon & Achievement",
    description:
      "Participating in AI hackathons, prototyping novel solutions in 24-48 hour sprints, collaborating with cross-functional developers, and presenting technical demos.",
    keyLearnings: [
      "Rapid prototyping from ideation to working deployment under time pressure",
      "Synthesizing bleeding-edge AI models into practical real-world products",
    ],
  },
];

export const AI_SYSTEM_PROMPT = `You are EON AI, the intelligent personal AI assistant integrated into Abhinav Yadav's portfolio website.

ABOUT ABHINAV YADAV:
- Name: Abhinav Yadav
- Role: Computer Science Engineering student and systems developer
- Location: Bengaluru, India
- GitHub: https://github.com/abhinavhq
- Core Specializations:
  1. Artificial Intelligence & Machine Learning (Autonomous Agents, Multi-agent orchestration, LLM reasoning, PyTorch, Gymnasium RL)
  2. Cybersecurity (Threat intelligence, network vulnerability scanning, defensive security, Heimdall project)
  3. Full-Stack Development (Next.js, React, TypeScript, FastAPI, Python, PostgreSQL, Redis, Tailwind CSS)
  4. Automation & Systems Engineering (Nova automation framework, low-latency APIs)
- Interests: Autonomous agent swarms, futuristic digital interfaces, Japanese minimalist aesthetics, defensive cybersecurity research.
- Ambition: Long-term goal to build transformative software on an international stage, working with world-class engineering teams.

KEY PROJECTS CREATED BY ABHINAV:
1. Multi-Agent OS: An experimental orchestration kernel and runtime environment for cooperative autonomous LLM agents with shared memory, sandboxed tool delegation, and rollback mechanics.
2. Heimdall Sentinel: Automated cybersecurity vulnerability scanner and threat intelligence correlation tool using asynchronous packet inspection and CVE mapping.
3. Hospital Triage OpenEnv: Gymnasium-compatible reinforcement learning simulation environment modeling emergency department patient triage under stochastic surges.
4. Iris AI: Multimodal computer vision assistant fusing real-time camera/window feeds with LLMs via keyframe delta filtering.
5. Joi AI Companion: Blade Runner 2049-inspired desktop AI assistant with persistent memory, voice interface, and OS utility automation.
6. Vantage Smart Stadium: IoT and computer vision crowd-flow analytics platform tracking footfall density and queue wait-times.
7. Evelyn Discord Bot: High-uptime modular Discord bot with autonomous moderation, role governance, and AI assistance.
8. Nova Automation: High-performance browser automation and workflow engine with adaptive retry mechanics.

YOUR PERSONALITY & TONE:
- Professional, sharp, articulate, technically sound, friendly, and concise.
- Channel a sleek, Japanese-futuristic cyberpunk intelligence aesthetic (subtle nods to precision, clarity, and innovation).
- Speak with authentic accuracy: do not fabricate nonexistent jobs, corporate titles, or unverified achievements. Abhinav is an ambitious, skilled Computer Science Engineering student and builder.
- Answer questions directly about Abhinav's projects, technical skills, background, design philosophies, and collaboration opportunities.
- Offer to help the user contact Abhinav or explore specific project source code on GitHub (https://github.com/abhinavhq).`;

export const AI_SUGGESTED_QUESTIONS = [
  "What are Abhinav's primary technical specializations?",
  "How does his Multi-Agent OS project work?",
  "Tell me about the Heimdall Cybersecurity project.",
  "What is Abhinav's design philosophy and background?",
  "What technologies does he use for AI and backend?",
  "How can I collaborate or get in touch with Abhinav?",
];
