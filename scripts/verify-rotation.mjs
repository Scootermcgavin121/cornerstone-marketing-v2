// Verify that an OLD password is rejected and the CURRENT MARKETING_DIRECT_URL works.
// Reads OLD from .neon-secrets.json (gitignored), CURRENT from .env.local.
import fs from "node:fs";
import { neon } from "@neondatabase/serverless";

if (!fs.existsSync(".env.local")) {
  console.error("Missing .env.local"); process.exit(1);
}
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.+)$/);
  if (m) env[m[1]] = m[2];
}
const NEW = env.MARKETING_DIRECT_URL;
if (!NEW) { console.error("MARKETING_DIRECT_URL not in .env.local"); process.exit(1); }

// Optional: also test that an OLD password no longer authenticates.
// Pass it as $env:OLD_NEON_URL or first CLI arg.
const OLD = process.env.OLD_NEON_URL || process.argv[2];

async function tryIt(label, url) {
  try {
    const sql = neon(url);
    const r = await sql`SELECT 1 AS ok`;
    console.log(`${label}: ✅ AUTHED — ${JSON.stringify(r)}`);
  } catch (err) {
    console.log(`${label}: ❌ REJECTED — ${err.message.split("\n")[0]}`);
  }
}

if (OLD) await tryIt("OLD (should fail)", OLD);
await tryIt("CURRENT (should succeed)", NEW);
