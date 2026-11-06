import { GitHubProfile, GitHubRepo } from "@/types";
import { FEATURED_PROJECTS } from "@/config/portfolio";

const GITHUB_USERNAME = "abhinavhq";

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "EON-Portfolio",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      return getFallbackProfile();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return getFallbackProfile();
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=40`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "EON-Portfolio",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 1800 },
      }
    );

    if (!res.ok) {
      return getFallbackRepos();
    }

    const repos: GitHubRepo[] = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      return getFallbackRepos();
    }

    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return getFallbackRepos();
  }
}

function getFallbackProfile(): GitHubProfile {
  return {
    login: GITHUB_USERNAME,
    name: "Abhinav Yadav",
    avatar_url: `https://avatars.githubusercontent.com/u/226014955?v=4`,
    bio: "Building in silence. AI agents, graph reasoning, search architecture & systems.",
    public_repos: 16,
    followers: 12,
    following: 15,
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    location: "Bengaluru, India",
  };
}

function getFallbackRepos(): GitHubRepo[] {
  return FEATURED_PROJECTS.map((proj, idx) => ({
    id: 1000 + idx,
    name: proj.title,
    full_name: `${GITHUB_USERNAME}/${proj.slug}`,
    description: proj.tagline,
    html_url: proj.githubUrl,
    homepage: proj.liveDemoUrl || null,
    stargazers_count: 1,
    forks_count: 0,
    language: proj.techStack[0] || "Python",
    topics: proj.techStack.map((t) => t.toLowerCase().replace(/[^a-z0-9]/g, "")),
    updated_at: new Date(Date.now() - idx * 86400000 * 3).toISOString(),
    fork: false,
  }));
}
