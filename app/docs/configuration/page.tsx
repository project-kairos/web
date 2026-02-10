import Link from "next/link";
import { ChevronRight, Settings, Key, Database } from "lucide-react";

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Configuration</h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          Configure the environment variables and database schema required for
          Kairos to function.
        </p>
      </div>

      {/* Database Schema */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="p-1.5 bg-pink-500/10 rounded text-pink-400">
            <Database className="w-5 h-5" />
          </div>
          Database Structure
        </h2>
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
          <p className="text-slate-400 mb-4">
            In your Appwrite Console, create a database named{" "}
            <strong>"core"</strong>. Then create the following collections:
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-slate-700 pl-4">
              <h3 className="font-mono text-white font-medium">
                users_metadata
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Stores user tokens and preferences.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "user_id (string)",
                  "refresh_token (string)",
                  "write_calendar_id (string)",
                  "read_calendar_ids (string[] or string)",
                ].map((cloud) => (
                  <span
                    key={cloud}
                    className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-white/5"
                  >
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-l-2 border-slate-700 pl-4">
              <h3 className="font-mono text-white font-medium">events</h3>
              <p className="text-sm text-slate-500 mb-2">
                Local cache of calendar events.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "event_id (string)",
                  "user_id (string)",
                  "summary (string)",
                  "start_time (string)",
                  "end_time (string)",
                  "status (string)",
                ].map((cloud) => (
                  <span
                    key={cloud}
                    className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-white/5"
                  >
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Env Vars */}
      <section className="space-y-4 pt-8 border-t border-white/5">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="p-1.5 bg-amber-500/10 rounded text-amber-400">
            <Key className="w-5 h-5" />
          </div>
          Environment Variables
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Internal: Cortex */}
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs text-slate-400 font-mono">
              cortex/.env
            </div>
            <div className="p-4 font-mono text-sm text-amber-200/80 overflow-x-auto">
              APPWRITE_ENDPOINT=http://localhost/v1
              <br />
              APPWRITE_PROJECT_ID=65c...
              <br />
              APPWRITE_API_KEY=...
              <br />
              <br />
              # Google OAuth
              <br />
              GOOGLE_CLIENT_ID=...
              <br />
              GOOGLE_CLIENT_SECRET=...
            </div>
          </div>

          {/* Internal: Prism */}
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs text-slate-400 font-mono">
              prism/.env.local
            </div>
            <div className="p-4 font-mono text-sm text-purple-200/80 overflow-x-auto">
              NEXT_PUBLIC_APPWRITE_ENDPOINT=http://localhost/v1
              <br />
              NEXT_PUBLIC_APPWRITE_PROJECT_ID=65c...
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-12 mt-8 border-t border-white/5">
        <Link
          href="/docs/integrations/google"
          className="group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
        >
          Next: Google Integration
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
