import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { PERSONAL_INFO } from "@/config/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhinav-yadav.vercel.app"),
  title: `${PERSONAL_INFO.name} — EON | Developer, AI Engineer & Builder`,
  description:
    "Personal developer portfolio of Abhinav Yadav. Exploring the intersections of autonomous AI agents, cybersecurity research, and futuristic software engineering.",
  keywords: [
    "Abhinav Yadav",
    "EON",
    "AI Engineer",
    "Autonomous Agents",
    "Multi-Agent OS",
    "Heimdall Cybersecurity",
    "Next.js",
    "Python",
    "Full-Stack Developer",
    "Bengaluru",
  ],
  authors: [{ name: "Abhinav Yadav", url: "https://github.com/abhinavhq" }],
  creator: "Abhinav Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhinav-yadav.vercel.app",
    title: `${PERSONAL_INFO.name} — EON | Personal Developer Portfolio`,
    description:
      "Exploring the intersection of intelligence, engineering, and imagination. Systems, AI agents, and cybersecurity.",
    siteName: "EON — Abhinav Yadav",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — EON`,
    description:
      "Building beyond the ordinary. AI agents, cybersecurity, and futuristic digital experiences.",
    creator: "@abhinavhq",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050508] text-[#ededf0] antialiased selection:bg-white selection:text-black">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
