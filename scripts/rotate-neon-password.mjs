// One-shot: reset the neondb_owner password and emit the new connection strings.
// Uses the local Neon CLI's OAuth token (from ~/.config/neonctl/credentials.json).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const credsPath = path.join(os.homedir(), ".config", "neonctl", "credentials.json");
if (!fs.existsSync(credsPath)) {
  console.error("Missing", credsPath, "— run `npx neonctl auth` first.");
  process.exit(1);
}
const creds = JSON.parse(fs.readFileSync(credsPath, "utf8"));
const token = creds.access_token;
if (!token) {
  console.error("No access_token in credentials file.");
  process.exit(1);
}

const PROJECT_ID = "cool-glade-60615342";
const BRANCH_ID  = "br-gentle-cell-apysamns"; // production branch
const ROLE_NAME  = "neondb_owner";

const url = `https://console.neon.tech/api/v2/projects/${PROJECT_ID}/branches/${BRANCH_ID}/roles/${ROLE_NAME}/reset_password`;
const res = await fetch(url, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json",
  },
});
if (!res.ok) {
  console.error(`HTTP ${res.status} ${res.statusText}`);
  console.error(await res.text());
  process.exit(1);
}
const body = await res.json();
const newPass = body?.role?.password;
if (!newPass) {
  console.error("No password in response:", JSON.stringify(body, null, 2));
  process.exit(1);
}

const host        = "ep-weathered-field-ap295xu0.c-7.us-east-1.aws.neon.tech";
const pooledHost  = "ep-weathered-field-ap295xu0-pooler.c-7.us-east-1.aws.neon.tech";
const params      = "sslmode=require&channel_binding=require";
const pooledUri   = `postgresql://${ROLE_NAME}:${newPass}@${pooledHost}/neondb?${params}`;
const directUri   = `postgresql://${ROLE_NAME}:${newPass}@${host}/neondb?${params}`;

console.log("\n=== NEW NEON CREDENTIALS ===\n");
console.log("Password:", newPass);
console.log();
console.log("Pooled:", pooledUri);
console.log();
console.log("Direct:", directUri);
console.log();

// Also write a SECRETS file (gitignored) so set-env.mjs etc. can read it.
const secretsPath = path.join(process.cwd(), ".neon-secrets.json");
fs.writeFileSync(secretsPath, JSON.stringify({
  password: newPass,
  pooled: pooledUri,
  direct: directUri,
  rotated_at: new Date().toISOString(),
}, null, 2));
console.log("Wrote", secretsPath, "(gitignored)");
