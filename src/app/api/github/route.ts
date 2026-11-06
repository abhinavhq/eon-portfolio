import { NextResponse } from "next/server";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";

export async function GET() {
  try {
    const [profile, repos] = await Promise.all([
      getGitHubProfile(),
      getGitHubRepos(),
    ]);

    return NextResponse.json(
      { profile, repos },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("GitHub API route error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve GitHub metrics" },
      { status: 500 }
    );
  }
}
