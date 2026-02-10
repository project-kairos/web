import Link from "next/link";
import { Cpu, RefreshCw, Database } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Architecture</h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          A deep dive into how Kairos manages state, synchronization, and
          agentic decision making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
          <div className="bg-purple-500/10 w-fit p-2 rounded-lg mb-4 text-purple-400">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Local-First Logic
          </h3>
          <p className="text-sm text-slate-400">
            The frontend (Prism) always reads from the local Appwrite database
            first for instant load times, then syncs in the background.
          </p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
          <div className="bg-blue-500/10 w-fit p-2 rounded-lg mb-4 text-blue-400">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Two-Way Sync</h3>
          <p className="text-sm text-slate-400">
            Cortex acts as the bridge. It pulls from Google, normalizes to our
            schema, and pushes updates back up.
          </p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
          <div className="bg-pink-500/10 w-fit p-2 rounded-lg mb-4 text-pink-400">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Unified Schema</h3>
          <p className="text-sm text-slate-400">
            Regardless of the source (Google, Outlook, etc.), all events are
            stored in a normalized Appwrite collection.
          </p>
        </div>
      </div>

      {/* Data Flow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Data Flow</h2>
        <div className="bg-slate-950 border border-white/10 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu className="w-32 h-32" />
          </div>

          <div className="space-y-8 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-32 font-mono text-sm text-indigo-300">
                Phase 1: Read
              </div>
              <div className="flex-1 text-slate-400 text-sm">
                Prism queries Appwrite DB. If data is stale, it triggers a
                background sync job via Cortex.
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-32 font-mono text-sm text-emerald-300">
                Phase 2: Sync
              </div>
              <div className="flex-1 text-slate-400 text-sm">
                Cortex fetches the latest delta from Google Calendar APIs,
                updates the Appwrite DB, and emits a Realtime event.
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-32 font-mono text-sm text-pink-300">
                Phase 3: React
              </div>
              <div className="flex-1 text-slate-400 text-sm">
                Prism receives the Realtime event and instantly updates the UI
                without a page reload.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
