import fs from "node:fs";
import { neon } from "@neondatabase/serverless";
if (fs.existsSync(".env.local")) {
  for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.+)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
const sql = neon(process.env.MARKETING_DIRECT_URL);
const events = await sql`SELECT event_type, source_page, created_at, metadata FROM lead_events ORDER BY created_at DESC LIMIT 10`;
console.log("Last 10 events:");
console.log(JSON.stringify(events, null, 2));
const lc = await sql`SELECT COUNT(*)::int AS c FROM marketing_leads`;
const ec = await sql`SELECT COUNT(*)::int AS c FROM lead_events`;
const em = await sql`SELECT COUNT(*)::int AS c FROM email_events`;
console.log(`marketing_leads: ${lc[0].c}`);
console.log(`lead_events:     ${ec[0].c}`);
console.log(`email_events:    ${em[0].c}`);
