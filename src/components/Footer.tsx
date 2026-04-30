import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon.png" alt="Cornerstone PM" className="w-12 h-12 object-contain" />
              <span className="font-bold text-white">
                Cornerstone <span className="text-cyan-400">PM</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-4">
              Construction management software for small-to-mid home builders.
              Built by builders, priced for builders.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cornerstone_pm_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "/features" },
                { label: "Foreman AI", href: "/foreman" },
                { label: "API Access", href: "/api-access" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Beta Access", href: "/beta" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "AI for Home Builders", href: "/ai-for-home-builders" },
                { label: "Home Builder PM Software", href: "/home-builder-project-management-software" },
                { label: "AI Construction Management", href: "/ai-construction-management" },
                { label: "AI Scheduling", href: "/ai-scheduling" },
                { label: "AI New Home Sales", href: "/ai-new-home-sales" },
                { label: "AI Purchasing", href: "/ai-construction-purchasing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Alternatives</h4>
            <ul className="space-y-2">
              {[
                { label: "Buildertrend Alternative", href: "/buildertrend-alternative" },
                { label: "NEWSTAR Alternative", href: "/newstar-alternative" },
                { label: "BuildPro Alternative", href: "/buildpro-alternative" },
                { label: "JobTread Alternative", href: "/blog/jobtread-alternative" },
                { label: "Compare All", href: "/compare" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Cornerstone PM. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
