import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Cornerstone PM\u2122",
  description:
    "Terms of Service for Cornerstone PM\u2122 \u2014 subscription terms, acceptable use, plan limits (including the 1,000 active customer record limit per organization), data ownership, and account policies.",
  alternates: { canonical: "https://www.cornerstonepm.ai/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | Cornerstone PM\u2122",
    description:
      "Subscription terms, acceptable use, plan limits, and data ownership for Cornerstone PM\u2122.",
    url: "https://www.cornerstonepm.ai/terms",
    type: "website",
  },
};

const LAST_UPDATED = "June 13, 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-slate-300 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10">
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Cornerstone PM&trade; (the
              &ldquo;Service&rdquo;), operated by Cornerstone PM. By creating an account, subscribing to a plan, or
              otherwise using the Service, you agree to be bound by these Terms. If you do not agree, do not use the
              Service.
            </p>
          </Section>

          <Section id="accounts" title="2. Accounts &amp; Organizations">
            <p>
              The Service is organized around organizations (&ldquo;orgs&rdquo;). Each org may invite users up to the
              seat count included in its plan. You are responsible for maintaining the confidentiality of your
              credentials and for all activity that occurs under your account and org.
            </p>
          </Section>

          <Section id="subscriptions" title="3. Subscriptions &amp; Billing">
            <p>
              The Service is provided on a monthly or annual subscription basis. Plans, pricing, and included features
              are described on our{" "}
              <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                pricing page
              </Link>
              . Subscriptions renew automatically unless cancelled. No long-term contract is required, and you may
              cancel at any time effective at the end of your current billing period.
            </p>
          </Section>

          <Section id="plan-limits" title="4. Plan Limits &amp; Acceptable Use">
            <p>
              Each plan includes defined usage limits (users/seats, AI usage allowances, active home counts, and other
              quotas). Current limits are described on the{" "}
              <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                pricing
              </Link>{" "}
              and{" "}
              <Link
                href="/usage-rates"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                usage rates
              </Link>{" "}
              pages. In addition, the following account-level limits apply:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-600">
              <li>Each organization is limited to 1,000 active customer records.</li>
              <li>
                Organizations approaching the limit (900 or more active customer records) will receive in-app warnings.
              </li>
              <li>
                Once the limit is reached, new customers cannot be added until existing customer records are deleted.
              </li>
              <li>
                Contact support for Enterprise plans with higher custom limits.
              </li>
            </ul>
            <p>
              You agree not to use the Service to violate any law, infringe any third party&rsquo;s rights, transmit
              malicious code, or attempt to circumvent usage limits, access controls, or security measures.
            </p>
          </Section>

          <Section id="data" title="5. Your Data &amp; Ownership">
            <p>
              You retain ownership of the data you put into the Service. You may export your data at any time (CSV or
              JSON). We maintain backups for operational continuity. We do not sell your data. Our handling of personal
              information is described in our{" "}
              <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="ai" title="6. AI Features">
            <p>
              The Service includes AI-assisted features (including Foreman AI&trade;, Blueprint AI, and Bid Import AI).
              AI output may contain errors and is provided as an aid, not a substitute for professional judgment. You
              are responsible for reviewing AI-generated output before relying on it. AI usage is subject to the
              monthly limits described on the{" "}
              <Link
                href="/usage-rates"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                usage rates
              </Link>{" "}
              page.
            </p>
          </Section>

          <Section id="termination" title="7. Suspension &amp; Termination">
            <p>
              We may suspend or terminate access for violation of these Terms, non-payment, or activity that risks the
              security or integrity of the Service. You may cancel your subscription at any time. Upon termination, you
              may export your data during the applicable retention window.
            </p>
          </Section>

          <Section id="warranty" title="8. Disclaimers &amp; Limitation of Liability">
            <p>
              The Service is provided &ldquo;as is&rdquo; without warranties of any kind, to the maximum extent
              permitted by law. To the extent permitted by law, Cornerstone PM will not be liable for indirect,
              incidental, or consequential damages arising from your use of the Service.
            </p>
          </Section>

          <Section id="changes" title="9. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Material changes will be reflected by updating the &ldquo;Last
              updated&rdquo; date above and, where appropriate, via in-app or email notice. Continued use of the Service
              after changes take effect constitutes acceptance.
            </p>
          </Section>

          <Section id="contact" title="10. Contact">
            <p>
              Questions about these Terms? Reach us through our{" "}
              <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                contact page
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
