/**
 * Neon serverless database client for the marketing DB.
 *
 * Two flavors:
 *   - `sql`     — tagged-template fetch client for parameterized queries
 *                 (use this for ~everything: inserts, selects, etc.).
 *   - `pool`    — node-postgres style pool, only needed for transactions
 *                 or LISTEN/NOTIFY. Skip unless you actually need it.
 *
 * Both use the *pooled* connection string so cold starts stay fast.
 * Migrations / DDL should use MARKETING_DIRECT_URL via apply-schema.mjs.
 */
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

// Lazy-init the SQL client. During `next build`, this module is
// evaluated at server-component collection time when env vars may not
// be present (e.g. preview deploys without secrets set). Defer the
// neon() call until the first actual query so build doesn't crash.
let _sql: NeonQueryFunction<false, false> | null = null;
function getSql(): NeonQueryFunction<false, false> {
  if (_sql) return _sql;
  const url = process.env.MARKETING_DATABASE_URL;
  if (!url) {
    throw new Error("MARKETING_DATABASE_URL is not set. The marketing DB is unreachable.");
  }
  _sql = neon(url);
  return _sql;
}

// Proxy that delegates both tagged-template and .query() calls.
export const sql = new Proxy((() => {}) as unknown as NeonQueryFunction<false, false>, {
  apply(_t, _this, args) {
    // Tagged template invocation: sql`...`
    // First arg is TemplateStringsArray.
    return (getSql() as unknown as (...a: unknown[]) => unknown)(...args);
  },
  get(_t, prop) {
    const target = getSql() as unknown as Record<string | symbol, unknown>;
    const value = target[prop];
    return typeof value === "function" ? (value as Function).bind(target) : value;
  },
}) as NeonQueryFunction<false, false>;

// ────────────────────────────────────────────────────────────
// Types — mirror schema.sql. Keep these in sync manually for now.
// ────────────────────────────────────────────────────────────

export type Lead = {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  role: string | null;
  source_page: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  ip: string | null;
  user_agent: string | null;
  country: string | null;
  notes: string | null;
  unsubscribed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type LeadEvent = {
  id: string;
  lead_id: string | null;
  event_type: string;
  source_page: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  ip: string | null;
  user_agent: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

export type EmailEvent = {
  id: string;
  lead_id: string | null;
  email: string;
  subject: string;
  template: string | null;
  status: string;
  provider: string | null;
  provider_msg_id: string | null;
  error: string | null;
  metadata: Record<string, unknown> | null;
  sent_at: string | null;
  opened_at: string | null;
  clicked_at: string | null;
  created_at: string;
};

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────

/**
 * Upsert a lead by email (case-insensitive). Returns the row.
 * Does NOT touch `unsubscribed_at` — that's a separate flow.
 */
export async function upsertLead(input: {
  email: string;
  name?: string | null;
  company?: string | null;
  role?: string | null;
  source_page: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  referrer?: string | null;
  ip?: string | null;
  user_agent?: string | null;
}): Promise<Lead> {
  const rows = await sql`
    INSERT INTO marketing_leads (
      email, name, company, role, source_page,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      referrer, ip, user_agent
    )
    VALUES (
      ${input.email}, ${input.name ?? null}, ${input.company ?? null}, ${input.role ?? null}, ${input.source_page},
      ${input.utm_source ?? null}, ${input.utm_medium ?? null}, ${input.utm_campaign ?? null}, ${input.utm_content ?? null}, ${input.utm_term ?? null},
      ${input.referrer ?? null}, ${input.ip ?? null}::inet, ${input.user_agent ?? null}
    )
    ON CONFLICT (id) DO NOTHING
    RETURNING *
  ` as Lead[];

  if (rows[0]) return rows[0];

  // Email already exists — just return the existing lead and update
  // mutable fields (name/company/role) if provided.
  const existing = (await sql`
    UPDATE marketing_leads
       SET name        = COALESCE(${input.name ?? null}, name),
           company     = COALESCE(${input.company ?? null}, company),
           role        = COALESCE(${input.role ?? null}, role),
           source_page = ${input.source_page}
     WHERE lower(email) = lower(${input.email})
     RETURNING *
  `) as Lead[];
  return existing[0];
}

/** Record any lead event. Lead ID is optional (anonymous events welcome). */
export async function recordEvent(input: {
  lead_id?: string | null;
  event_type: string;
  source_page?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  referrer?: string | null;
  ip?: string | null;
  user_agent?: string | null;
  metadata?: Record<string, unknown> | null;
}): Promise<LeadEvent> {
  const rows = (await sql`
    INSERT INTO lead_events (
      lead_id, event_type, source_page,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      referrer, ip, user_agent, metadata
    )
    VALUES (
      ${input.lead_id ?? null}, ${input.event_type}, ${input.source_page ?? null},
      ${input.utm_source ?? null}, ${input.utm_medium ?? null}, ${input.utm_campaign ?? null}, ${input.utm_content ?? null}, ${input.utm_term ?? null},
      ${input.referrer ?? null}, ${input.ip ?? null}::inet, ${input.user_agent ?? null}, ${input.metadata ? JSON.stringify(input.metadata) : null}::jsonb
    )
    RETURNING *
  `) as LeadEvent[];
  return rows[0];
}

/** Record an outbound email send (status='sent' by default). */
export async function recordEmail(input: {
  lead_id?: string | null;
  email: string;
  subject: string;
  template?: string | null;
  status?: string;
  provider?: string | null;
  provider_msg_id?: string | null;
  error?: string | null;
  metadata?: Record<string, unknown> | null;
}): Promise<EmailEvent> {
  const status = input.status ?? "sent";
  const sentAt = status === "sent" ? new Date().toISOString() : null;
  const rows = (await sql`
    INSERT INTO email_events (
      lead_id, email, subject, template, status,
      provider, provider_msg_id, error, metadata, sent_at
    )
    VALUES (
      ${input.lead_id ?? null}, ${input.email}, ${input.subject}, ${input.template ?? null}, ${status},
      ${input.provider ?? null}, ${input.provider_msg_id ?? null}, ${input.error ?? null}, ${input.metadata ? JSON.stringify(input.metadata) : null}::jsonb, ${sentAt}
    )
    RETURNING *
  `) as EmailEvent[];
  return rows[0];
}
