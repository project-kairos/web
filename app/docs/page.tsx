import { Brain, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Introduction</h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Kairos is an open-source, autonomous time orchestration system. Unlike
          traditional calendars that act as passive grids for your time, Kairos
          actively manages your schedule, negotiates conflicts, and protects
          your focus blocks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
          <Brain className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Agentic Logic
          </h3>
          <p className="text-sm text-slate-400">
            Powered by local LLMs (and cloud fallbacks), Kairos understands
            context. It knows that "Deep Work" is movable but "Board Meeting" is
            not.
          </p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
          <Shield className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Privacy First
          </h3>
          <p className="text-sm text-slate-400">
            Your data lives locally or in your self-hosted Appwrite instance. We
            don't sell your schedule to advertisers.
          </p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Core Philosophy</h2>
        <p className="text-slate-400 mb-4">
          Time is a finite resource, yet we treat it as infinite. We accept
          every meeting invite, overbook our days, and wonder why we burn out.
        </p>
        <p className="text-slate-400 mb-4">
          Kairos flips this model. You define your priorities, and the system
          builds your schedule around them. It treats your time as a resource
          allocation problem, optimized for your well-being and productivity.
        </p>
      </div>

      <div className="flex justify-end pt-8 border-t border-white/5">
        <Link
          href="/docs/installation"
          className="group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
        >
          Next: Installation
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
