import fs from "node:fs";
import { neon } from "@neondatabase/serverless";
if (fs.existsSync(".env.local")) {
  for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.+)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
const sql = neon(process.env.MARKETING_DIRECT_URL);
const deleted = await sql`
  DELETE FROM marketing_leads
   WHERE email IN ('smoketest@cornerstonepm.ai', 'smoketest+contact@cornerstonepm.ai')
   RETURNING id, email
`;
console.log("Deleted leads (cascade deletes events + emails):", deleted);

// Also nuke the orphan anonymous pdf_download events from earlier verification
const orphans = await sql`
  DELETE FROM lead_events
   WHERE lead_id IS NULL AND event_type = 'pdf_download'
   RETURNING id, created_at
`;
console.log("Deleted anonymous pdf_download events:", orphans);

const counts = await sql`SELECT
  (SELECT COUNT(*)::int FROM marketing_leads) AS leads,
  (SELECT COUNT(*)::int FROM lead_events) AS events,
  (SELECT COUNT(*)::int FROM email_events) AS emails`;
console.log("Remaining:", counts[0]);
