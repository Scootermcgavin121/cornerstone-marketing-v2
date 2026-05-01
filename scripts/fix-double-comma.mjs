import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const dir = path.join(repoRoot, "src", "app", "blog");

let fixed = 0;
for (const slug of fs.readdirSync(dir)) {
  const f = path.join(dir, slug, "page.tsx");
  if (!fs.existsSync(f)) continue;
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  // Replace `",,` (with optional whitespace) with `",`
  s = s.replace(/",\s*,/g, '",');
  if (s !== before) {
    fs.writeFileSync(f, s);
    console.log("fixed", slug);
    fixed++;
  }
}
console.log(`Total: ${fixed}`);
