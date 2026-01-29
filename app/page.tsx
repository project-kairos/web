"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Shield, Brain, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Kairos"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="font-bold tracking-tight text-lg text-white">
              Kairos
            </span>
          </div>
          <a
            href="https://github.com/project-kairos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System In Active Development
        </div>

        {/* Hero Typography */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white drop-shadow-2xl">
          Time Orchestration, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-emerald-300">
            Not Time Management.
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The autonomous agent that negotiates calendar conflicts, protects your
          deep work, and treats your time as a finite asset.
        </p>

        {/* CONDITIONAL FORM RENDERING */}
        {status === "success" ? (
          <div className="w-full max-w-md bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-20 flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2" />
            <h3 className="text-xl font-bold text-white">You're on the list.</h3>
            <p className="text-slate-400 text-sm mt-1">
              We'll notify you when the repo goes public (Q2 2026).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-20 relative">
            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono text-sm backdrop-blur-sm disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-wait text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-900/20 whitespace-nowrap"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
              {status !== "loading" && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            
            {status === "error" && (
              <p className="absolute -bottom-8 left-0 w-full text-center text-red-400 text-xs font-mono">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all group backdrop-blur-sm hover:bg-slate-800/40">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors text-slate-400">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Conflict Negotiator
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When meetings clash, Kairos calculates priorities and proposes the
              optimal reschedule.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all group backdrop-blur-sm hover:bg-slate-800/40">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors text-slate-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Focus Defense
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aggressively blocks hours for deep work. Your calendar is no
              longer a free-for-all.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all group backdrop-blur-sm hover:bg-slate-800/40">
            <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors text-slate-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">
              Natural Language
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="font-mono text-xs bg-black/30 px-1 py-0.5 rounded text-indigo-300">
                "Book sync with Matt"
              </span>{" "}
              <br />
              Just type what you need. The agent handles the logistics.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-slate-600 text-sm">
        <p className="mb-2">© 2026 Project Kairos. All rights reserved.</p>
        <p className="font-mono text-xs opacity-50">License: CC BY-NC-SA 4.0</p>
      </footer>
    </div>
  );
}
