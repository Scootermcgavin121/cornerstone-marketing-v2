# Adds U+2122 (TRADE MARK SIGN) after every "Cornerstone PM" in user-visible
# marketing text. Skips technical/system files where the symbol could break
# things or look out of place.
#
# Skipped contexts (per-file):
#   - SMTP from-headers in src/app/api/**            (could trip SMTP libs)
#   - JSON-LD structured data "name" fields           (Google schema clean)
#   - chatbot/knowledge.md                            (system prompt, separate)
#
# Skipped substrings (per-line):
#   - "Cornerstone PM" already followed by U+2122 ™
#   - lines inside <Script id="..." type="application/ld+json"> JSON blocks
#     (handled by filename exclusion for StructuredData.tsx — it's pure JSON-LD)
#
# Everything else gets ™ appended. Marketing copy, page titles, headings,
# meta descriptions, alt text, paragraph copy, and so on.

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$tm = [char]0x2122   # ™
$target = "Cornerstone PM"
$replacement = "Cornerstone PM$tm"

# Files we will NOT touch (technical contexts)
$skipFiles = @(
  "src\components\StructuredData.tsx",
  "src\app\api\contact\route.ts",
  "src\app\chatbot\knowledge.md"
)

$skipFilesAbs = $skipFiles | ForEach-Object { Join-Path $repoRoot $_ }

$files = Get-ChildItem -Path src -Recurse -Include *.tsx, *.ts, *.md, *.mdx -File
$totalReplacements = 0
$filesChanged = 0
$skipped = 0

foreach ($file in $files) {
  if ($skipFilesAbs -contains $file.FullName) {
    Write-Host "  skip (excluded file): $($file.FullName.Substring($repoRoot.Length + 1))"
    $skipped++
    continue
  }

  $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
  if (-not $content) { continue }
  if ($content -notmatch [regex]::Escape($target)) { continue }

  # Build replacement using a regex that requires the trailing char NOT be ™
  $pattern = [regex]::new([regex]::Escape($target) + "(?!$tm)")
  $newContent = $pattern.Replace($content, $replacement)

  $count = ([regex]::Matches($content, [regex]::Escape($target) + "(?!$tm)")).Count

  if ($newContent -ne $content) {
    # Preserve UTF-8 without BOM
    [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
    $totalReplacements += $count
    $filesChanged++
    Write-Host "  +$count  $($file.FullName.Substring($repoRoot.Length + 1))"
  }
}

Write-Host ""
Write-Host "Files changed: $filesChanged"
Write-Host "Total replacements: $totalReplacements"
Write-Host "Files skipped (technical contexts): $skipped"
