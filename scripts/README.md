# Marketing-site scripts

## bump-foreman-skills.ps1

Sweep the entire marketing site to update Foreman AI's "**N+ skills across M
categories**" copy in one command.

### Usage

```powershell
# Dry run first - see what would change, no files written
pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18 -DryRun

# Apply the sweep
pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18

# Apply + npm run build + git commit + git push
pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18 -Commit
```

If you need to override the old values (e.g. some files drifted to a different
number), pass them explicitly:

```powershell
pwsh scripts/bump-foreman-skills.ps1 -OldSkills 100 -NewSkills 130 -OldCats 14 -NewCats 18
```

By default the script reads the old values from
[`scripts/foreman-skills.json`](./foreman-skills.json) — that file is the
canonical source of truth for what's currently live on the site.

### What it touches

- All `*.tsx`, `*.ts`, and `*.md` files under `src/`
- Stat-box entries like `{ num: "117+", label: "Purpose-built skills", ... }`
- Combined phrases: "X+ skills across Y categories"
- Standalone phrases: "X+ Foreman skills", "(X+ skills)", "X+ AI skills",
  "X+ skill definitions", "X+ skill schemas", etc.
- The chatbot knowledge file (`src/app/chatbot/knowledge.md`)
- Structured data (`StructuredData.tsx`) for SEO/schema.org

### What it does NOT touch

- **Historical blog posts** that document past milestone counts. Listed under
  `skipFiles` in `foreman-skills.json`:
  - `src/app/blog/foreman-ai-100-skills/page.tsx` (100-skills launch)
  - `src/app/blog/foreman-ai-83-skills/page.tsx` (83-skills launch)
  - `src/app/blog/page.tsx` (blog index excerpts about past milestones)
- **`110+ database tables`** stat boxes — that's a different metric, not skills.
  The script only matches when "skills" / "skill" / "Foreman" / "AI skills" /
  "purpose-built" appears with the count, never bare `110+`.

### Safety

- Detects and preserves UTF-8 BOMs per file (em-dashes, smart quotes, ™ stay
  intact — important because PowerShell's default text APIs will mangle them).
- Sanity-check after the sweep: any leftover `<old>+ skill` references print as
  a warning so you can extend the script's replacement table if a new phrasing
  shows up.
- `-DryRun` reports changes without writing.
- `-Commit` only commits if `npm run build` succeeds.

### When to update the script itself

If marketing introduces a new phrasing the script doesn't catch (e.g.
"Foreman ships X+ tools across Y verticals"), add a new pattern to the
`$replacements` table near the top of `bump-foreman-skills.ps1` and bump the
last "current = ..." in `foreman-skills.json` so the next run targets the right
baseline.
