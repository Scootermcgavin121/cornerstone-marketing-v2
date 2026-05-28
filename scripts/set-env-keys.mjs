// Variant of set-env.mjs that only sets a specific subset of keys.
// Usage: node scripts/set-env-keys.mjs MARKETING_DATABASE_URL MARKETING_DIRECT_URL
import fs from "node:fs";
import { spawn } from "node:child_process";

if (!fs.existsSync(".env.local")) {
  console.error("Missing .env.local — populate it first (gitignored).");
  process.exit(1);
}
const ENV = {};
for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.+)$/);
  if (m) ENV[m[1]] = m[2];
}

const KEYS = process.argv.slice(2);
if (!KEYS.length) {
  console.error("Usage: node scripts/set-env-keys.mjs KEY1 KEY2 ...");
  process.exit(1);
}
const MISSING = KEYS.filter((k) => !ENV[k]);
if (MISSING.length) {
  console.error("Missing in .env.local:", MISSING.join(", "));
  process.exit(1);
}

const ENVS = ["production", "preview", "development"];
function setOne(key, val, env) {
  return new Promise((resolve) => {
    const child = spawn("vercel", ["env", "add", key, env], {
      stdio: ["pipe", "pipe", "pipe"],
      shell: true,
    });
    let out = "", err = "";
    child.stdout.on("data", (d) => (out += d.toString()));
    child.stderr.on("data", (d) => (err += d.toString()));
    child.stdin.write(val);
    child.stdin.end();
    child.on("close", (code) => {
      const ok = code === 0;
      console.log(`${ok ? "✓" : "✗"} ${key} (${env})`);
      if (!ok) {
        console.log("  stdout:", out.trim().split("\n").pop());
        console.log("  stderr:", err.trim().split("\n").pop());
      }
      resolve(ok);
    });
  });
}

for (const k of KEYS) {
  for (const e of ENVS) {
    await setOne(k, ENV[k], e);
  }
}
