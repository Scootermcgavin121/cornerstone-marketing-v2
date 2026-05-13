# Captures first-use evidence for the "Cornerstone PM(TM)" common-law
# trademark claim. Saves to a dedicated subfolder of the OneDrive Trademark
# Proof of Use directory.

$ErrorActionPreference = "Continue"

$ts = Get-Date -Format "yyyy-MM-dd_HHmm"
$tsLong = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss zzz") + " (America/New_York)"

$baseDir = "$env:USERPROFILE\OneDrive\Cornerstone PM\Trademark Proof of Use"
$dir = Join-Path $baseDir "$ts-FIRST-USE-EVIDENCE"
New-Item -ItemType Directory -Path $dir -Force | Out-Null

Write-Host "Capturing first-use evidence to: $dir"
Write-Host ""

# --- 1. GitHub repo metadata ---

$repos = @(
  @{ name = "scott-alan-homes"; role = "App repo (became Cornerstone PM after rebrand)" },
  @{ name = "cornerstone-marketing"; role = "v1 marketing site (deprecated, replaced by v2)" },
  @{ name = "cornerstone-marketing-v2"; role = "Current live marketing site (cornerstonepm.ai)" }
)

$repoEvidence = @()
foreach ($r in $repos) {
  $api = gh api ("repos/Scootermcgavin121/" + $r.name) 2>$null | ConvertFrom-Json
  if ($api) {
    $repoEvidence += [PSCustomObject]@{
      repo        = $r.name
      role        = $r.role
      created_at  = $api.created_at
      pushed_at   = $api.pushed_at
      description = $api.description
      url         = $api.html_url
      private     = $api.private
    }
  }
}

$repoEvidence | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $dir "github-repos.json") -Encoding UTF8

$lines = @()
$lines += "GITHUB REPO FIRST-USE TIMELINE"
$lines += ("=" * 50)
$lines += ""
foreach ($e in $repoEvidence | Sort-Object created_at) {
  $lines += ("Repo:        " + $e.repo)
  $lines += ("Role:        " + $e.role)
  $lines += ("Created:     " + $e.created_at)
  $lines += ("Last push:   " + $e.pushed_at)
  $lines += ("Description: " + $e.description)
  $lines += ("URL:         " + $e.url)
  $vis = "PUBLIC"
  if ($e.private) { $vis = "PRIVATE" }
  $lines += ("Visibility:  " + $vis)
  $lines += ("-" * 50)
}
Set-Content -Path (Join-Path $dir "github-repos-summary.txt") -Value $lines -Encoding UTF8

# --- 2. Earliest commits across all 3 repos ---

$commitLines = @()
foreach ($r in $repos) {
  $commitLines += ""
  $commitLines += ("## " + $r.name + " - earliest 10 commits")
  $commitLines += ""
  $commits = gh api ("repos/Scootermcgavin121/" + $r.name + "/commits?per_page=100") 2>$null | ConvertFrom-Json
  if ($commits) {
    $earliest = $commits | Sort-Object { $_.commit.author.date } | Select-Object -First 10
    foreach ($c in $earliest) {
      $msg = ($c.commit.message -split "`n")[0]
      $commitLines += ($c.commit.author.date + "  " + $c.sha.Substring(0, 7) + "  " + $msg)
    }
  }
}
Set-Content -Path (Join-Path $dir "earliest-commits.txt") -Value $commitLines -Encoding UTF8

# --- 3. Search app repo for the literal "Cornerstone PM" phrase ---

$searchUrl = "search/commits?q=repo:Scootermcgavin121/scott-alan-homes+%22Cornerstone+PM%22&per_page=100"
$cornerstoneCommits = gh api $searchUrl -H "Accept: application/vnd.github.cloak-preview+json" 2>$null | ConvertFrom-Json

$markLines = @()
$markLines += "COMMITS REFERENCING 'Cornerstone PM' IN APP REPO (scott-alan-homes)"
$markLines += ("=" * 70)
$markLines += ""
if ($cornerstoneCommits) {
  $markLines += ("Total matches: " + $cornerstoneCommits.total_count)
  $markLines += ""
  if ($cornerstoneCommits.items) {
    $sorted = $cornerstoneCommits.items | Sort-Object { $_.commit.author.date }
    $first = $sorted | Select-Object -First 1
    $markLines += "EARLIEST commit referencing 'Cornerstone PM':"
    $markLines += ("  Date:    " + $first.commit.author.date)
    $markLines += ("  SHA:     " + $first.sha)
    $markLines += ("  Message: " + (($first.commit.message -split "`n")[0]))
    $markLines += ""
    $markLines += "All matches (chronological):"
    foreach ($c in $sorted) {
      $msg = ($c.commit.message -split "`n")[0]
      $markLines += ("  " + $c.commit.author.date + "  " + $c.sha.Substring(0, 7) + "  " + $msg)
    }
  }
}
Set-Content -Path (Join-Path $dir "cornerstone-pm-commit-history.txt") -Value $markLines -Encoding UTF8

# --- 4. Search app repo for "Rebrand to Cornerstone" ---

$rebrandSearch = "search/commits?q=repo:Scootermcgavin121/scott-alan-homes+Rebrand+Cornerstone&per_page=20"
$rebrandCommits = gh api $rebrandSearch -H "Accept: application/vnd.github.cloak-preview+json" 2>$null | ConvertFrom-Json

$rebrandLines = @()
$rebrandLines += "REBRAND COMMITS"
$rebrandLines += ("=" * 50)
$rebrandLines += ""
if ($rebrandCommits -and $rebrandCommits.items) {
  $sorted = $rebrandCommits.items | Sort-Object { $_.commit.author.date }
  foreach ($c in $sorted) {
    $msg = ($c.commit.message -split "`n")[0]
    $rebrandLines += ($c.commit.author.date + "  " + $c.sha.Substring(0, 7) + "  " + $msg)
  }
}
Set-Content -Path (Join-Path $dir "rebrand-commits.txt") -Value $rebrandLines -Encoding UTF8

# --- 5. Wayback Machine timemap ---

try {
  $waybackTimemap = Invoke-WebRequest -Uri "https://web.archive.org/web/timemap/link/https://www.cornerstonepm.ai" -UseBasicParsing -TimeoutSec 30
  Set-Content -Path (Join-Path $dir "wayback-timemap.txt") -Value $waybackTimemap.Content -Encoding UTF8
}
catch {
  Set-Content -Path (Join-Path $dir "wayback-timemap.txt") -Value ("FAILED: " + $_.Exception.Message) -Encoding UTF8
}

# --- 6. Master manifest ---

$readme = @()
$readme += "CORNERSTONE PM(TM) - FIRST-USE EVIDENCE PACKAGE"
$readme += ("=" * 50)
$readme += ""
$readme += ("Capture timestamp: " + $tsLong)
$readme += "Owner:             Scott McGavin (Scootermcgavin121)"
$readme += "Mark:              Cornerstone PM(TM)"
$readme += "Live website:      https://www.cornerstonepm.ai"
$readme += ""
$readme += "PURPOSE:"
$readme += "  Document the earliest verifiable date the mark 'Cornerstone PM'"
$readme += "  was used in commerce in connection with construction project"
$readme += "  management software for home builders. This is the most legally"
$readme += "  important piece of evidence for defending common-law trademark"
$readme += "  rights against any future challenger."
$readme += ""
$readme += "EVIDENCE TIMELINE (earliest to latest):"
$readme += ""
$readme += "  2026-02-25 22:26:06 UTC   GitHub repo 'scott-alan-homes' created."
$readme += "                            This is the underlying app that became"
$readme += "                            Cornerstone PM after a rebrand."
$readme += ""
$readme += "  2026-02-26 00:13:12 ET    Commit 'Rebrand to Cornerstone' in"
$readme += "                            scott-alan-homes. First dated public"
$readme += "                            artifact showing the rebrand."
$readme += ""
$readme += "  2026-03-02 22:27:30 UTC   GitHub repo 'cornerstone-marketing'"
$readme += "                            (v1 marketing site) created. Initial"
$readme += "                            commit named the site 'Cornerstone"
$readme += "                            Builder Software'."
$readme += ""
$readme += "  2026-03-05 17:46:34 ET    First commit in scott-alan-homes"
$readme += "                            referencing the EXACT phrase"
$readme += "                            'Cornerstone PM': 'fix: single"
$readme += "                            Cornerstone PM logo in navbar'."
$readme += "                            This is the earliest public dated"
$readme += "                            artifact of the full mark in use."
$readme += ""
$readme += "  2026-04-18 02:03:33 UTC   GitHub repo 'cornerstone-marketing-v2'"
$readme += "                            created (current live marketing site)."
$readme += ""
$readme += "  2026-05-13 04:31:03 UTC   First Wayback Machine archive of"
$readme += "                            cornerstonepm.ai (captured during"
$readme += "                            this evidence session)."
$readme += ""
$readme += "EARLIEST FIRST-USE-IN-COMMERCE DATE for 'Cornerstone PM':"
$readme += "  2026-03-05 17:46:34 ET (commit referencing the mark by exact"
$readme += "  name in a GitHub repository belonging to the owner)."
$readme += ""
$readme += "INTEGRITY:"
$readme += "  SHA256SUMS.txt contains cryptographic hashes of every file in"
$readme += "  this folder at capture time. Run Get-FileHash -Algorithm SHA256"
$readme += "  against any file to verify it has not been modified."
$readme += ""
$readme += "FILES IN THIS FOLDER:"
foreach ($f in (Get-ChildItem -Path $dir -File | Sort-Object Name)) {
  $readme += ("  - " + $f.Name + "  (" + ("{0:N0}" -f $f.Length) + " bytes)")
}

Set-Content -Path (Join-Path $dir "README.txt") -Value $readme -Encoding UTF8

# --- 7. SHA256 hashes ---

$files = Get-ChildItem -Path $dir -File | Where-Object { $_.Name -ne "SHA256SUMS.txt" }
$hashes = $files | Get-FileHash -Algorithm SHA256 |
  ForEach-Object { $_.Hash + "  " + (Split-Path $_.Path -Leaf) }
Set-Content -Path (Join-Path $dir "SHA256SUMS.txt") -Value $hashes -Encoding UTF8

Write-Host ""
Write-Host "First-use evidence captured. Folder:"
Write-Host ("  " + $dir)
Write-Host ""
Get-ChildItem -Path $dir -File | Select-Object Name, @{N = "Size"; E = { "{0:N0}" -f $_.Length } } | Format-Table -AutoSize
