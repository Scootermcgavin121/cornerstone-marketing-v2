// Apply src/lib/db/schema.sql to MARKETING_DIRECT_URL.
// Usage: node scripts/apply-schema.mjs
import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

const url = process.env.MARKETING_DIRECT_URL || process.env.MARKETING_DATABASE_URL;
if (!url) {
  console.error("Missing MARKETING_DIRECT_URL (or MARKETING_DATABASE_URL).");
  process.exit(1);
}
const sql = neon(url);
const schemaPath = path.resolve("src/lib/db/schema.sql");
const ddl = fs.readFileSync(schemaPath, "utf8");

// Neon HTTP driver doesn't support multi-statement transactions, so
// split on semicolons at the top level. SQL strings here are simple
// CREATE / DROP / etc. — no semicolons inside literals, no dollar
// quotes other than the function body which we treat specially.
const statements = [];
let buf = "";
let inDollar = false;
for (const line of ddl.split(/\r?\n/)) {
  if (line.includes("$$")) inDollar = !inDollar;
  buf += line + "\n";
  if (!inDollar && line.trim().endsWith(";")) {
    statements.push(buf.trim());
    buf = "";
  }
}
if (buf.trim()) statements.push(buf.trim());

console.log(`Applying ${statements.length} statements to ${new URL(url).hostname}...`);
for (const stmt of statements) {
  // Strip leading comment lines but keep the SQL after them
  const lines = stmt.split(/\r?\n/);
  while (lines.length && (lines[0].trim().startsWith("--") || lines[0].trim() === "")) {
    lines.shift();
  }
  const sqlOnly = lines.join("\n").trim();
  if (!sqlOnly) continue;
  const preview = sqlOnly.replace(/\s+/g, " ").slice(0, 80);
  try {
    await sql.query(sqlOnly);
    console.log(`  ✓ ${preview}`);
  } catch (err) {
    console.error(`  ✗ ${preview}`);
    console.error(`    ${err.message}`);
    process.exit(1);
  }
}
console.log("✓ Schema applied.");
