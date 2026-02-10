// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Github,
  Shield,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Calendar,
  BookOpen,
  Clock,
  Shuffle,
  Lock,
  Server,
  Code,
  Container,
  Database,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      q: "Is my calendar data private?",
      a: "Yes. Kairos is designed to be local-first. Your schedule data is stored in your own self-hosted Appwrite instance. We do not have access to your calendar.",
    },
    {
      q: "Does it work with Outlook?",
      a: "Currently, we only support Google Calendar. Outlook support is on our roadmap for late 2026.",
    },
    {
      q: "Do I need to know Docker to use this?",
      a: "To run the self-hosted version, yes, basic Docker knowledge is helpful. However, we provide copy-paste commands in our documentation to get you started quickly.",
    },
    {
      q: "Is this free?",
      a: "Kairos is open-source software (OSS). You can freely run it yourself for free forever. We may offer a managed cloud version in the future for those who don't want to self-host.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
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
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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
          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Docs
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <a
              href="https://github.com/project-kairos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-40 pb-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System In Active Development
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl">
          Time Orchestration, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300">
            Not Time Management.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The autonomous agent that negotiates calendar conflicts, protects your
          deep work, and treats your time as a finite asset. Now with{" "}
          <strong>real-time dashboard</strong> and{" "}
          <strong>smart calendar sync</strong>.
        </p>

        {status === "success" ? (
          <div className="w-full max-w-md bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-20 flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2" />
            <h3 className="text-xl font-bold text-white">
              You're on the list.
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              We'll notify you when the repo goes public (Q2 2026).
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative"
          >
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
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stop Playing <br />
                <span className="text-indigo-400">Calendar Tetris.</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  You are not an administrative assistant. Yet, the average
                  knowledge worker spends{" "}
                  <strong className="text-white">8 hours a week</strong> just
                  scheduling, rescheduling, and negotiating times.
                </p>
                <p>
                  Existing tools are passive. They show you the empty slots, but
                  they don't understand <em>why</em> a slot should be filled.
                  Kairos is different. It understands "Deep Work" vs "Quick
                  Sync", and it aggressively defends your priorities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-950/80 border border-white/5 rounded-2xl flex flex-col gap-4">
                <Clock className="w-8 h-8 text-orange-400" />
                <h3 className="text-white font-semibold">Time Leakage</h3>
                <p className="text-xs text-slate-500">
                  How many 30-min gaps are wasted in your day?
                </p>
              </div>
              <div className="p-6 bg-slate-950/80 border border-white/5 rounded-2xl flex flex-col gap-4 mt-8">
                <Shuffle className="w-8 h-8 text-blue-400" />
                <h3 className="text-white font-semibold">Context Switching</h3>
                <p className="text-xs text-slate-500">
                  The cost of disjointed meetings is catastrophic.
                </p>
              </div>
              <div className="p-6 bg-slate-950/80 border border-white/5 rounded-2xl flex flex-col gap-4">
                <Lock className="w-8 h-8 text-emerald-400" />
                <h3 className="text-white font-semibold">No Defense</h3>
                <p className="text-xs text-slate-500">
                  Your open calendar is an invite to interruptions.
                </p>
              </div>
              <div className="p-6 bg-slate-950/80 border border-white/5 rounded-2xl flex flex-col gap-4 mt-8">
                <Brain className="w-8 h-8 text-purple-400" />
                <h3 className="text-white font-semibold">Decision Fatigue</h3>
                <p className="text-xs text-slate-500">
                  Scheduling shouldn't burn your mental energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-16">
            The Architecture of Autonomy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent z-0" />

            <div className="relative z-10 bg-slate-950 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6 border border-white/5 text-blue-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Connect</h3>
              <p className="text-sm text-slate-400">
                Kairos syncs locally with your Google Calendar. It pulls your
                history and current commitments into a private vector store.
              </p>
            </div>

            <div className="relative z-10 bg-slate-950 border border-indigo-500/30 shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] p-8 rounded-2xl transform md:-translate-y-4">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/20 text-indigo-400">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Analyze</h3>
              <p className="text-sm text-slate-400">
                Our local agentic core analyzes request urgency against your
                predefined priorities (e.g., "Health {">"} Deep Work {">"}{" "}
                Meetings").
              </p>
            </div>

            <div className="relative z-10 bg-slate-950 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6 border border-white/5 text-emerald-400">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                3. Orchestrate
              </h3>
              <p className="text-sm text-slate-400">
                The System executes the plan: rescheduling low-priority items,
                locking in focus blocks, and presenting you with a sane
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 py-24 bg-slate-900/40 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for Hackers
            </h2>
            <p className="text-slate-400">
              Fully open source. Self-hostable. No black boxes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Appwrite", icon: Database, desc: "Backend & Auth" },
              { name: "FastAPI", icon: Code, desc: "Python Core" },
              { name: "Next.js", icon: Container, desc: "React Frontend" },
              { name: "Docker", icon: Server, desc: "Containerized" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-6 bg-slate-950/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors"
              >
                <tech.icon className="w-8 h-8 text-slate-500 mb-3" />
                <h3 className="text-white font-medium">{tech.name}</h3>
                <p className="text-xs text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors"
            >
              <Code className="w-4 h-4 text-slate-400" />
              View Architecture Docs
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-900/30 border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-900/50 transition-colors cursor-pointer"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="text-white font-medium">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-slate-950 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Kairos"
              width={24}
              height={24}
              className="rounded-lg grayscale opacity-50"
            />
            <span className="font-bold text-slate-500 tracking-tight">
              Kairos
            </span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <a
              href="https://github.com/project-kairos"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            © 2026 Project Kairos. Open Source under MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}
