"use client";

/**
 * PostHog client-side provider.
 *
 * Wraps the app in <Suspense> so the inner `usePathname/useSearchParams`
 * pageview tracker is allowed to read the URL. PostHog itself is lazily
 * initialized once per browser session.
 *
 * Capture conventions used elsewhere in the app:
 *   - posthog.capture("agent_architecture_view",   { utm_* })
 *   - posthog.capture("agent_architecture_submit", { utm_*, source_page })
 *   - posthog.capture("pdf_download",              { source_page, slug })
 *   - posthog.identify(email, { email, name, company, role })
 */
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!pathname) return;
    const url = `${window.origin}${pathname}${searchParams?.toString() ? "?" + searchParams.toString() : ""}`;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);
  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    if (!key) return;
    if (posthog.__loaded) return; // already initialized

    posthog.init(key, {
      api_host: host,
      capture_pageview: false,         // we capture manually in PageviewTracker
      capture_pageleave: true,
      person_profiles: "identified_only",
      session_recording: {
        maskAllInputs: true,           // never record what users type
        maskTextSelector: "[data-ph-mask]",
      },
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug();
      },
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
