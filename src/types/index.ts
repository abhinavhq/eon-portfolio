export interface Project {
  slug: string;
  title: string;
  japaneseTitle?: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  techStack: string[];
  category: "AI & ML" | "Cybersecurity" | "Systems & Agents" | "Full-Stack";
  githubUrl: string;
  liveDemoUrl?: string;
  stars?: number;
  forks?: number;
  featured: boolean;
  date: string;
  status: "Completed" | "Active Research" | "In Development" | "Prototype";
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: "Advanced" | "Proficient" | "Exploring";
  description?: string;
}

export interface SkillCategory {
  title: string;
  japaneseTitle: string;
  description: string;
  skills: SkillItem[];
}

export interface JourneyEntry {
  period: string;
  title: string;
  organization?: string;
  location?: string;
  category: "Education" | "Research & Projects" | "Hackathon & Achievement" | "Self-Study";
  description: string;
  keyLearnings: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}
