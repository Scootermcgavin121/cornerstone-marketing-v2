import fs from "node:fs";
import { neon } from "@neondatabase/serverless";
if (fs.existsSync(".env.local")) {
  for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.+)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
const sql = neon(process.env.MARKETING_DIRECT_URL);
const leads = await sql`SELECT id, email, name, company, role, source_page, utm_source, utm_medium, utm_campaign, utm_content, referrer, user_agent, ip, created_at FROM marketing_leads ORDER BY created_at DESC LIMIT 3`;
console.log("LEADS:");
console.log(JSON.stringify(leads, null, 2));

const emails = await sql`SELECT lead_id, email, subject, template, status, provider, sent_at FROM email_events ORDER BY created_at DESC LIMIT 5`;
console.log("\nEMAIL_EVENTS:");
console.log(JSON.stringify(emails, null, 2));
