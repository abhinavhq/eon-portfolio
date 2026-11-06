import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050508] text-white flex flex-col items-center justify-center px-6 text-center select-none">
      <div className="space-y-4 max-w-md">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          エラー 404 // TRANSMISSION VOID
        </div>

        <h1 className="text-7xl sm:text-9xl font-display font-bold tracking-tighter text-white">
          404
        </h1>

        <p className="text-sm font-mono text-zinc-400">
          The requested coordinate does not exist in the EON neural registry.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO BASE STATION</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
