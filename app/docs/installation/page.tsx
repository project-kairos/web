import Link from "next/link";
import {
  ChevronRight,
  Terminal,
  CheckSquare,
  Server,
  Code,
} from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Installation</h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          Get your local instance of Kairos running in minutes. The stack
          consists of a self-hosted Appwrite backend, a Python FastAPI service
          (Cortex), and a Next.js frontend (Prism).
        </p>

        {/* Reusing the Prerequisites Section */}
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <CheckSquare className="w-5 h-5 text-emerald-400" />
            Prerequisites
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Docker
              Desktop (running)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Node.js
              18.x or later
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Python
              3.11+
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Git
            </li>
          </ul>
        </div>
      </div>

      {/* Step 1: Appwrite */}
      <section id="appwrite" className="scroll-mt-24 space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="p-1.5 bg-pink-500/10 rounded text-pink-400">
            <Server className="w-5 h-5" />
          </div>
          1. Appwrite Backend
        </h2>
        <p className="text-slate-400">
          Run the following command to start Appwrite in Docker. This handles
          database, auth, and realtime events.
        </p>
        <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden group">
          <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">Terminal</span>
          </div>
          <div className="p-4 font-mono text-sm text-slate-300 overflow-x-auto whitespace-pre">
            {`docker run -it --rm \\
  --volume /var/run/docker.sock:/var/run/docker.sock \\
  --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \\
  --entrypoint="install" \\
  appwrite/appwrite:1.5.7`}
          </div>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-sm text-amber-200/80">
          <strong>Important:</strong> After installation, go to{" "}
          <a
            href="http://localhost:80"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:80
          </a>{" "}
          to create your admin account and project.
        </div>
      </section>

      {/* Step 2: Cortex */}
      <section
        id="cortex"
        className="scroll-mt-24 space-y-4 pt-8 border-t border-white/5"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="p-1.5 bg-emerald-500/10 rounded text-emerald-400">
            <Code className="w-5 h-5" />
          </div>
          2. Cortex Service
        </h2>
        <p className="text-slate-400">
          The Python backend that powers the agentic logic and Google Sync.
        </p>
        <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            git clone https://github.com/project-kairos/cortex.git
            <br />
            cd cortex
            <br />
            python3 -m venv venv
            <br />
            source venv/bin/activate
            <br />
            pip install -r requirements.txt
          </div>
        </div>
      </section>

      {/* Step 3: Prism */}
      <section
        id="prism"
        className="scroll-mt-24 space-y-4 pt-8 border-t border-white/5"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="p-1.5 bg-purple-500/10 rounded text-purple-400">
            <Terminal className="w-5 h-5" />
          </div>
          3. Prism Frontend
        </h2>
        <p className="text-slate-400">The Next.js dashboard interface.</p>
        <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            git clone https://github.com/project-kairos/prism.git
            <br />
            cd prism
            <br />
            npm install
            <br />
            npm run dev
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-12 mt-8 border-t border-white/5">
        <Link
          href="/docs/configuration"
          className="group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
        >
          Next: Configuration
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
