import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Cornerstone PM™",
  description:
    "Privacy Policy for Cornerstone PM™ — what data we collect, how we use it, third-party integrations (including the QuickBooks Online accounting sync), data retention, security, and your rights.",
  alternates: { canonical: "https://www.cornerstonepm.ai/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Cornerstone PM™",
    description:
      "How Cornerstone PM™ collects, uses, and protects your data, including the QuickBooks Online integration.",
    url: "https://www.cornerstonepm.ai/privacy",
    type: "website",
  },
};

const LAST_UPDATED = "July 2, 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-slate-300 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
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

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10">
          <Section id="intro" title="Overview">
            <p>
              Cornerstone Builder Software LLC (“Cornerstone PM,” “we,” “us,” or
              “our”) operates Cornerstone PM™ (the “Service”), a scheduling, CRM, and
              project-management platform for home builders. This Privacy Policy explains what information we collect,
              how we use it, who we share it with, and the choices and rights you have. By using the Service, you agree
              to the practices described here.
            </p>
          </Section>

          <Section id="collect" title="1. Information We Collect">
            <p>
              <strong className="text-white">Account &amp; organization information.</strong> When you create an
              account or are invited to an organization, we collect your name, email address, phone number, company
              name, and role. Vendor and subcontractor records may additionally include business address, insurance
              details, and W-9 / tax information supplied by you or your organization.
            </p>
            <p>
              <strong className="text-white">Project &amp; CRM data.</strong> As you use the Service, we store the
              content you and your organization put into it — homes and lots, schedules and tasks, buyer/customer
              records, selections and budgets, purchase orders, bids, vendors, documents, photos, and messages. Images
              may be automatically compressed for storage efficiency.
            </p>
            <p>
              <strong className="text-white">QuickBooks integration data.</strong> If your organization connects
              QuickBooks Online, we receive OAuth authorization tokens and the QuickBooks company (realm) identifier
              needed to sync accounting records. See{" "}
              <Link href="#quickbooks" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                Section 5
              </Link>{" "}
              for details on how that integration works.
            </p>
            <p>
              <strong className="text-white">Usage &amp; device data.</strong> We collect standard analytics such as
              pages visited, features used, browser type, and IP address to operate and improve the Service.
            </p>
            <p>
              <strong className="text-white">AI interactions.</strong> When you use AI-assisted features (including
              Foreman AI™, Blueprint AI, and Bid Import AI), the relevant messages or documents are sent to our AI
              provider for processing. We do not use your content or AI conversations to train AI models.
            </p>
          </Section>

          <Section id="use" title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-600">
              <li>To provide, operate, and secure the Cornerstone PM platform.</li>
              <li>To send transactional messages (task notifications, vendor invites, scheduling alerts).</li>
              <li>To power AI-assisted features you choose to use.</li>
              <li>To sync accounting records to QuickBooks Online when you enable that integration.</li>
              <li>To improve the Service based on aggregate usage patterns.</li>
              <li>To communicate about your account, billing, or service updates.</li>
            </ul>
            <p>
              <strong className="text-white">We do not</strong> sell your data, use your data for advertising, share
              your data with third parties for their own marketing, or use your content to train AI models.
            </p>
          </Section>

          <Section id="sharing" title="3. How We Share Information">
            <p>We share data only with service providers who help us operate the Service, namely:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-600">
              <li>
                <strong className="text-white">Hosting &amp; infrastructure providers</strong> — to host the
                application and database.
              </li>
              <li>
                <strong className="text-white">AI provider(s)</strong> — to power AI-assisted features.
              </li>
              <li>
                <strong className="text-white">Email / notification provider</strong> — to deliver transactional
                messages.
              </li>
              <li>
                <strong className="text-white">Intuit / QuickBooks Online</strong> — to sync accounting records
                when your organization connects the integration (see{" "}
                <Link
                  href="#quickbooks"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  Section 5
                </Link>
                ).
              </li>
            </ul>
            <p>
              Each provider is bound by its own privacy policy and by data-processing terms. We may also disclose
              information if required by law or to protect the rights, safety, and security of our users and the
              Service.
            </p>
          </Section>

          <Section id="security" title="4. Data Storage &amp; Security">
            <p>
              Your data is stored on secure, encrypted infrastructure hosted in the United States. Data is transmitted
              over HTTPS/TLS and database connections use SSL. We apply industry-standard safeguards including hashed
              passwords, role-based access controls, organization-level data isolation, and session management. No
              method of transmission or storage is perfectly secure, but we work to protect your information using
              commercially reasonable measures.
            </p>
          </Section>

          <Section id="quickbooks" title="5. QuickBooks Online Integration">
            <p>
              Cornerstone PM offers an optional integration with QuickBooks Online, provided by Intuit Inc. The
              integration is enabled only when an authorized user in your organization connects it through Intuit’s
              OAuth 2.0 authorization flow. We never see or store your Intuit login credentials.
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-600">
              <li>
                <strong className="text-white">Push-based sync with limited read-back.</strong> The integration
                primarily pushes accounting records <em>from Cornerstone PM to QuickBooks Online</em> (for example,
                vendors, customers, and purchase/expense records). Cornerstone PM remains the system of record for your
                project data. It reads a limited set of data back from QuickBooks — namely bill/payment status (to mark
                the matching purchase order paid) and vendor field changes — to keep the two systems consistent. It does
                not perform full two-way accounting mutation.
              </li>
              <li>
                <strong className="text-white">Accounting scope only.</strong> We request only the accounting scope
                (<code className="text-emerald-300">com.intuit.quickbooks.accounting</code>) required to create and
                update these records. We do not request payroll or unrelated scopes.
              </li>
              <li>
                <strong className="text-white">What we store.</strong> To maintain the connection we store the OAuth
                access and refresh tokens and your QuickBooks company (realm) ID. Tokens are used solely to perform the
                sync you authorized.
              </li>
              <li>
                <strong className="text-white">Disconnecting.</strong> You can disconnect the integration at any time
                from within Cornerstone PM or from your Intuit account. On disconnect, we stop syncing and delete the
                stored QuickBooks tokens for your organization.
              </li>
            </ul>
            <p>
              Data you send into QuickBooks Online is thereafter also governed by{" "}
              <a
                href="https://www.intuit.com/privacy/statement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Intuit’s Privacy Statement
              </a>
              .
            </p>
          </Section>

          <Section id="retention" title="6. Data Retention">
            <p>
              We retain your data for as long as your account and organization are active. Upon account deletion, we
              permanently remove your data within 30 days, and backups containing your data are purged within 90 days.
              QuickBooks OAuth tokens are deleted when the integration is disconnected. We may retain limited records
              where required to comply with legal, tax, or accounting obligations.
            </p>
          </Section>

          <Section id="rights" title="7. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-slate-600">
              <li>
                <strong className="text-white">Access</strong> — request a copy of the data we hold about you.
              </li>
              <li>
                <strong className="text-white">Correction</strong> — update inaccurate information in your profile
                settings.
              </li>
              <li>
                <strong className="text-white">Deletion</strong> — request deletion of your account and associated
                data.
              </li>
              <li>
                <strong className="text-white">Export / portability</strong> — download your data in a standard
                format (CSV or JSON).
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@cornerstonepm.ai"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                privacy@cornerstonepm.ai
              </a>
              .
            </p>
          </Section>

          <Section id="cookies" title="8. Cookies">
            <p>
              We use essential cookies for authentication and session management. We do not use third-party advertising
              or cross-site tracking cookies.
            </p>
          </Section>

          <Section id="children" title="9. Children’s Privacy">
            <p>
              Cornerstone PM is a business tool and is not directed to children under 13. We do not knowingly collect
              personal information from children.
            </p>
          </Section>

          <Section id="changes" title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes will be reflected by updating the
              “Last updated” date above and, where appropriate, via in-app or email notice. Continued use of
              the Service after changes take effect constitutes acceptance.
            </p>
          </Section>

          <Section id="contact" title="11. Contact">
            <p>
              Questions about this Privacy Policy or our data practices? Email us at{" "}
              <a
                href="mailto:privacy@cornerstonepm.ai"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                privacy@cornerstonepm.ai
              </a>{" "}
              or reach us through our{" "}
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
