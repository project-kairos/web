"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Book,
  Code,
  Server,
  Calendar,
  CheckSquare,
  Terminal,
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
  Cpu,
  Settings,
  Puzzle,
} from "lucide-react";
import { useState } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Getting Started",
      items: [
        { href: "/docs", label: "Introduction", icon: Book },
        { href: "/docs/installation", label: "Installation", icon: Terminal },
        { href: "/docs/configuration", label: "Configuration", icon: Settings },
      ],
    },
    {
      title: "Integrations",
      items: [
        {
          href: "/docs/integrations/google",
          label: "Google Calendar",
          icon: Calendar,
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [{ href: "/docs/architecture", label: "Architecture", icon: Cpu }],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-8xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-slate-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="docs-sidebar"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Back to Home
              </span>
              <span className="text-sm font-medium sm:hidden">Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-tight text-white hidden sm:block">
              Kairos Docs
            </span>
            <span className="font-mono text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
              v0.1.0-alpha
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-8xl mx-auto pt-16 flex relative z-10">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed inset-y-0 left-0 bg-slate-950 border-r border-white/5 w-72 pt-20 pb-10 px-6 transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="space-y-8">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
                  {section.title}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-indigo-500/10 text-indigo-300 font-medium"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-slate-500"}`}
                        />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-4 py-12 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
