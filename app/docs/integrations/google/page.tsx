import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Settings,
  ShieldCheck,
  Link as LinkIcon,
} from "lucide-react";

export default function GoogleIntegrationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">
          Google Calendar Integration
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          Enable 2-way synchronization between Kairos and Google Calendar using
          the Google Cloud Platform (GCP).
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why Google Cloud?
        </h2>
        <p className="text-slate-400 mb-6">
          Kairos uses the official Google Calendar API to ensure reliability and
          security. You need to create your own OAuth credentials so that you
          own the connection, and no third-party service sits between you and
          your data.
        </p>
      </div>

      {/* Step 1: Create Project */}
      <section className="space-y-4 pt-8 border-t border-white/5">
        <h3 className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
            <Settings className="w-5 h-5" />
          </div>
          1. Create GCP Project
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-slate-400 ml-4">
          <li>
            Go to the{" "}
            <a
              href="https://console.cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google Cloud Console
            </a>
            .
          </li>
          <li>Create a new project (e.g., "Kairos Personal").</li>
          <li>
            Navigate to <strong>APIs & Services</strong> →{" "}
            <strong>Library</strong>.
          </li>
          <li>
            Search for and enable the <strong>Google Calendar API</strong>.
          </li>
        </ol>
      </section>

      {/* Step 2: OAuth Consent */}
      <section className="space-y-4 pt-8 border-t border-white/5">
        <h3 className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="p-1.5 bg-emerald-500/10 rounded text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          2. Configure Consent Screen
        </h3>
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 space-y-4">
          <p className="text-slate-400">
            Go to <strong>APIs & Services</strong> →{" "}
            <strong>OAuth consent screen</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>
              <strong>User Type</strong>: External (unless you have a Workspace
              organization).
            </li>
            <li>
              <strong>App Name</strong>: Kairos
            </li>
            <li>
              <strong>User Support Email</strong>: Your email.
            </li>
            <li>
              <strong>Test Users</strong>: Add your own email address here
              (crucial for External apps).
            </li>
          </ul>
          <div className="bg-slate-950 p-4 rounded-lg border border-white/5">
            <h4 className="text-sm font-semibold text-white mb-2">
              Required Scopes
            </h4>
            <div className="flex gap-2 flex-wrap">
              <code className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                .../auth/calendar
              </code>
              <code className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                .../auth/userinfo.email
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Credentials */}
      <section className="space-y-4 pt-8 border-t border-white/5">
        <h3 className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="p-1.5 bg-purple-500/10 rounded text-purple-400">
            <LinkIcon className="w-5 h-5" />
          </div>
          3. Create OAuth Credentials
        </h3>
        <p className="text-slate-400">
          Go to <strong>Credentials</strong> →{" "}
          <strong>Create Credentials</strong> → <strong>OAuth Client ID</strong>
          .
        </p>
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6">
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex flex-col sm:flex-row justify-between gap-2 border-b border-white/5 pb-2">
              <span className="font-semibold text-white">Application Type</span>
              <span>Web application</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between gap-2 border-b border-white/5 pb-2">
              <span className="font-semibold text-white">
                Authorized JavaScript Origins
              </span>
              <code className="text-emerald-400">http://localhost:3000</code>
            </li>
            <li className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="font-semibold text-white">
                Authorized Redirect URIs
              </span>
              <code className="text-emerald-400">
                http://localhost:8000/auth/callback
              </code>
            </li>
          </ul>
        </div>
        <p className="text-slate-400 mt-4">
          Copy the <strong>Client ID</strong> and <strong>Client Secret</strong>{" "}
          into your{" "}
          <code className="bg-white/10 px-1 rounded">cortex/.env</code> file.
        </p>
      </section>

      <div className="flex justify-end pt-12 mt-8 border-t border-white/5">
        <Link
          href="/docs/architecture"
          className="group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
        >
          Next: Architecture
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
