# Captures a timestamped Proof-of-Use snapshot for common-law trademark
# protection of "Cornerstone PM(TM)". Output goes to OneDrive.

$ErrorActionPreference = "Stop"

$ts = Get-Date -Format "yyyy-MM-dd_HHmm"
$tsLong = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss zzz") + " (America/New_York)"
$tsIso = (Get-Date).ToString("o")

$dir = "$env:USERPROFILE\OneDrive\Cornerstone PM\Trademark Proof of Use\$ts-trademark-symbol-rollout"
New-Item -ItemType Directory -Path $dir -Force | Out-Null

$repoRoot = "C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2"
Push-Location $repoRoot

# Git fingerprint
$sha = git rev-parse HEAD
$branch = git rev-parse --abbrev-ref HEAD
$firstCommit = git log --reverse --format="%h %ai %s" | Select-Object -First 1

# Count mark occurrences in repo
$tm = [char]0x2122
$markCount = (Get-ChildItem -Path src -Recurse -Include *.tsx, *.ts, *.md, *.mdx |
  Select-String -Pattern ("Cornerstone PM" + $tm) -SimpleMatch |
  Measure-Object).Count

Pop-Location

# README manifest
$manifest = @"
CORNERSTONE PM(TM) - COMMON-LAW TRADEMARK PROOF OF USE
=======================================================

Capture timestamp (local): $tsLong
Capture timestamp (ISO):   $tsIso
Owner:                     Scott McGavin (Scootermcgavin121)
Mark in use:               Cornerstone PM(TM)
Public website URL:        https://www.cornerstonepm.ai

EARLIEST COMMIT IN MARKETING REPO (evidence of first use):
  $firstCommit

ACTION TAKEN ON THIS DATE:
  - Trade Mark sign (U+2122) appended to every public marketing mention
    of "Cornerstone PM" on the cornerstonepm.ai marketing website.
  - Total occurrences of the marked phrase in repo source: $markCount
  - Commit SHA at time of capture: $sha
  - Branch: $branch
  - Remote: https://github.com/Scootermcgavin121/cornerstone-marketing-v2
  - Deploy: Vercel auto-deploy on push to master, serves www.cornerstonepm.ai

LEGAL NOTE (informational, not legal advice):
  Use of the Trade Mark symbol (TM) is a public claim of common-law
  trademark rights in the mark "Cornerstone PM" in connection with
  construction project management software for home builders. No
  federal registration has been filed as of this capture date. Common-
  law rights accrue automatically in the geographic area and channels
  of commerce where the mark is used. This document and the associated
  HTML/JSON snapshots are intended as contemporaneous evidence of
  public use of the mark on the date shown.

FILES IN THIS FOLDER:
  - README.txt                this file
  - homepage.html             live HTML of https://www.cornerstonepm.ai
  - features.html             live HTML of /features
  - punchlist-ai.html         live HTML of /punchlist-ai
  - foreman.html              live HTML of /foreman
  - footer-snippet.html       footer HTML showing mark
  - git-log.txt               git commit history of marketing repo
  - file-listing.txt          list of repo source files containing the mark
  - tm-occurrences.txt        every file:line where the mark appears
"@

$readmePath = Join-Path $dir "README.txt"
Set-Content -Path $readmePath -Value $manifest -Encoding UTF8
Write-Host "Wrote README to: $readmePath"

# Git log dump
Push-Location $repoRoot
git log --oneline --all --decorate=short > (Join-Path $dir "git-log.txt")

# File listing of every source file containing the mark
$listing = Get-ChildItem -Path src -Recurse -Include *.tsx, *.ts, *.md, *.mdx |
  Select-String -Pattern ("Cornerstone PM" + $tm) -SimpleMatch |
  Group-Object Path |
  Sort-Object Name |
  ForEach-Object { "{0}    ({1} occurrences)" -f $_.Name.Replace($repoRoot + "\", ""), $_.Count }
Set-Content -Path (Join-Path $dir "file-listing.txt") -Value $listing -Encoding UTF8

# Every file:line where the mark appears
$occurrences = Get-ChildItem -Path src -Recurse -Include *.tsx, *.ts, *.md, *.mdx |
  Select-String -Pattern ("Cornerstone PM" + $tm) -SimpleMatch |
  ForEach-Object { "{0}:{1}  {2}" -f $_.Path.Replace($repoRoot + "\", ""), $_.LineNumber, $_.Line.Trim() }
Set-Content -Path (Join-Path $dir "tm-occurrences.txt") -Value $occurrences -Encoding UTF8

Pop-Location

Write-Host ""
Write-Host "Manifest, git log, and file listings saved. Snapshot dir:"
Write-Host "  $dir"
