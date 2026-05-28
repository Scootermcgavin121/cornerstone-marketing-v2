-- Cornerstone Marketing DB — schema v1
-- Run with: psql "$MARKETING_DIRECT_URL" -f src/lib/db/schema.sql
-- Idempotent: safe to re-run.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ───────────────────────────────────────────────────────────────
-- Leads — primary table. One row per email captured from any
-- form (agent-architecture, contact, future landing pages).
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS marketing_leads (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email           text NOT NULL,
  name            text,
  company         text,
  role            text,
  source_page     text NOT NULL,         -- e.g. /agent-architecture, /contact, /
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  utm_content     text,
  utm_term        text,
  referrer        text,
  ip              inet,
  user_agent      text,
  country         text,
  notes           text,
  unsubscribed_at timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS marketing_leads_email_idx        ON marketing_leads (lower(email));
CREATE INDEX IF NOT EXISTS marketing_leads_source_page_idx  ON marketing_leads (source_page);
CREATE INDEX IF NOT EXISTS marketing_leads_utm_campaign_idx ON marketing_leads (utm_campaign);
CREATE INDEX IF NOT EXISTS marketing_leads_created_at_idx   ON marketing_leads (created_at DESC);

-- ───────────────────────────────────────────────────────────────
-- Lead events — touch log. Every page visit, PDF download, email
-- open / click that we can attribute to a lead. Anonymous events
-- (no lead_id) are still useful as funnel signals.
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS lead_events (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id        uuid REFERENCES marketing_leads(id) ON DELETE CASCADE,
  event_type     text NOT NULL,          -- form_submit, pdf_download, page_view, email_open, email_click
  source_page    text,
  utm_source     text,
  utm_medium     text,
  utm_campaign   text,
  utm_content    text,
  utm_term       text,
  referrer       text,
  ip             inet,
  user_agent     text,
  metadata       jsonb,                  -- free-form, e.g. {pdf: 'agent-architecture'}
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lead_events_lead_id_idx     ON lead_events (lead_id);
CREATE INDEX IF NOT EXISTS lead_events_event_type_idx  ON lead_events (event_type);
CREATE INDEX IF NOT EXISTS lead_events_created_at_idx  ON lead_events (created_at DESC);

-- ───────────────────────────────────────────────────────────────
-- Email events — outbound email tracking. One row per email we
-- send (welcome, follow-up, broadcast). Status updated when we
-- receive SMTP success/failure or webhook bounce.
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS email_events (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id        uuid REFERENCES marketing_leads(id) ON DELETE CASCADE,
  email          text NOT NULL,
  subject        text NOT NULL,
  template       text,                   -- e.g. agent-architecture-welcome
  status         text NOT NULL DEFAULT 'queued',  -- queued, sent, failed, bounced, opened, clicked
  provider       text,                   -- e.g. gmail-smtp, postmark, resend
  provider_msg_id text,
  error          text,
  metadata       jsonb,
  sent_at        timestamptz,
  opened_at      timestamptz,
  clicked_at     timestamptz,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS email_events_lead_id_idx    ON email_events (lead_id);
CREATE INDEX IF NOT EXISTS email_events_status_idx     ON email_events (status);
CREATE INDEX IF NOT EXISTS email_events_created_at_idx ON email_events (created_at DESC);

-- ───────────────────────────────────────────────────────────────
-- updated_at trigger for marketing_leads
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS marketing_leads_set_updated_at ON marketing_leads;
CREATE TRIGGER marketing_leads_set_updated_at
  BEFORE UPDATE ON marketing_leads
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
