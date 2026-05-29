/**
 * Shared admin shell — top nav between Leads + Analytics.
 *
 * Auth is enforced upstream in src/middleware.ts (HTTP Basic, matcher `/admin/:path*`).
 * This layout just provides nav + chrome; it does NOT re-check credentials.
 */
import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">⬢</span>
            <span className="text-slate-200 font-semibold">Cornerstone Admin</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <AdminNavLink href="/admin/analytics" label="📊 Analytics Hub" />
            <AdminNavLink href="/admin/leads" label="📥 Leads" />
            <Link
              href="/"
              className="ml-2 px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-900"
              target="_blank"
            >
              View site ↗
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

function AdminNavLink({ href, label }: { href: string; label: string }) {
  // Server component — no active-route highlighting (would require client hooks).
  // Keep it simple; the page heading is the source of truth for "where am I".
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
    >
      {label}
    </Link>
  );
}
