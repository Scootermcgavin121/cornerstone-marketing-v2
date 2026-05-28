// Set Vercel env vars without PowerShell stdin newline issues.
// Spawns `vercel env add` and writes value via stdin (no trailing newline).
import { spawn } from "node:child_process";

const VARS = [
  { key: "MARKETING_DATABASE_URL",  val: "postgresql://neondb_owner:npg_t6MfX8auLwsR@ep-weathered-field-ap295xu0-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" },
  { key: "MARKETING_DIRECT_URL",    val: "postgresql://neondb_owner:npg_t6MfX8auLwsR@ep-weathered-field-ap295xu0.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" },
  { key: "NEXT_PUBLIC_POSTHOG_KEY", val: "phc_CXWf8cq6xBb8itxmy7xDhKvFDDKW8az3cuPbBjgC6wXQ" },
  { key: "NEXT_PUBLIC_POSTHOG_HOST",val: "https://us.i.posthog.com" },
  { key: "ADMIN_USERNAME",          val: "scooter" },
  { key: "ADMIN_PASSWORD",          val: "cqCfk3-ged^=jjTDpe^V@$FkV6MB" },
];

const ENVS = ["production", "preview", "development"];

function setOne(key, val, env) {
  return new Promise((resolve) => {
    const child = spawn("vercel", ["env", "add", key, env], {
      stdio: ["pipe", "pipe", "pipe"],
      shell: true,
    });
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => (out += d.toString()));
    child.stderr.on("data", (d) => (err += d.toString()));
    child.stdin.write(val); // no newline
    child.stdin.end();
    child.on("close", (code) => {
      const ok = code === 0;
      const line = `${ok ? "✓" : "✗"} ${key} (${env})`;
      console.log(line);
      if (!ok) {
        console.log("  stdout:", out.trim().split("\n").pop());
        console.log("  stderr:", err.trim().split("\n").pop());
      }
      resolve(ok);
    });
  });
}

for (const v of VARS) {
  for (const e of ENVS) {
    await setOne(v.key, v.val, e);
  }
}
