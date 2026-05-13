# Captures first-use evidence for a single trademark mark (configurable
# via -Mark parameter). Searches across all 3 Cornerstone-family GitHub
# repos for the earliest commit referencing the mark. Saves to a
# timestamped subfolder of OneDrive Trademark Proof of Use.
#
# Usage:
#   powershell -File capture-mark-first-use.ps1 -Mark "Foreman AI"
#   powershell -File capture-mark-first-use.ps1 -Mark "Punchlist AI"

param(
  [Parameter(Mandatory = $true)]
  [string]$Mark
)

$ErrorActionPreference = "Continue"

$markSlug = ($Mark -replace "[^A-Za-z0-9]+", "-").ToLower().Trim("-")
$ts = Get-Date -Format "yyyy-MM-dd_HHmm"
$tsLong = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss zzz") + " (America/New_York)"

$baseDir = "$env:USERPROFILE\OneDrive\Cornerstone PM\Trademark Proof of Use"
$dir = Join-Path $baseDir "$ts-FIRST-USE-$markSlug"
New-Item -ItemType Directory -Path $dir -Force | Out-Null

Write-Host "Capturing first-use evidence for mark: '$Mark'"
Write-Host "Folder: $dir"
Write-Host ""

$repos = @(
  @{ name = "scott-alan-homes"; role = "App repo (Cornerstone PM platform)" },
  @{ name = "cornerstone-marketing"; role = "v1 marketing site (deprecated)" },
  @{ name = "cornerstone-marketing-v2"; role = "Current live marketing site (cornerstonepm.ai)" }
)

# URL-encode the mark for the search query
$markEnc = [System.Uri]::EscapeDataString('"' + $Mark + '"')

$allMatches = @()
foreach ($r in $repos) {
  Write-Host "  Searching $($r.name)..."
  $url = "search/commits?q=repo:Scootermcgavin121/" + $r.name + "+" + $markEnc + "&per_page=100&sort=author-date&order=asc"
  $result = gh api $url -H "Accept: application/vnd.github.cloak-preview+json" 2>$null | ConvertFrom-Json
  if ($result -and $result.items) {
    foreach ($c in $result.items) {
      $allMatches += [PSCustomObject]@{
        repo    = $r.name
        date    = $c.commit.author.date
        sha     = $c.sha
        message = ($c.commit.message -split "`n")[0]
      }
    }
  }
}

$sorted = $allMatches | Sort-Object date
$first = $sorted | Select-Object -First 1

# Commit history file
$historyLines = @()
$historyLines += "COMMITS REFERENCING '$Mark' ACROSS ALL CORNERSTONE-FAMILY REPOS"
$historyLines += ("=" * 70)
$historyLines += ""
$historyLines += "Total matches: $($allMatches.Count)"
$historyLines += ""

if ($first) {
  $historyLines += "EARLIEST commit referencing '$Mark':"
  $historyLines += ("  Date:    " + $first.date)
  $historyLines += ("  Repo:    " + $first.repo)
  $historyLines += ("  SHA:     " + $first.sha)
  $historyLines += ("  Message: " + $first.message)
  $historyLines += ""
  $historyLines += "All matches (chronological, earliest first):"
  foreach ($c in $sorted) {
    $historyLines += ("  " + $c.date + "  " + $c.sha.Substring(0, 7) + "  [" + $c.repo + "]  " + $c.message)
  }
}
Set-Content -Path (Join-Path $dir "mark-commit-history.txt") -Value $historyLines -Encoding UTF8

# JSON for programmatic use
$allMatches | Sort-Object date | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $dir "mark-commits.json") -Encoding UTF8

# Check Wayback for the mark's dedicated landing page if any exists
$markUrlSlug = $markSlug -replace "-ai$", "-ai"
$candidateUrls = @(
  "https://www.cornerstonepm.ai/$markUrlSlug",
  "https://www.cornerstonepm.ai/$markSlug"
) | Sort-Object -Unique

$waybackResults = @()
foreach ($u in $candidateUrls) {
  try {
    Write-Host "  Wayback save: $u"
    $r = Invoke-WebRequest -Uri ("https://web.archive.org/save/" + $u) -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 90
    $finalUrl = $r.BaseResponse.ResponseUri.AbsoluteUri
    $waybackResults += "$u -> $finalUrl (status $($r.StatusCode))"
  }
  catch {
    $waybackResults += "$u -> FAILED: $($_.Exception.Message)"
  }
}
Set-Content -Path (Join-Path $dir "wayback-archive-urls.txt") -Value $waybackResults -Encoding UTF8

# Capture live HTML for any matching landing page
foreach ($u in $candidateUrls) {
  try {
    $r = Invoke-WebRequest -Uri ($u + "?_=" + (Get-Random)) -UseBasicParsing -TimeoutSec 30 -Headers @{"Cache-Control" = "no-cache" }
    if ($r.StatusCode -eq 200) {
      $fname = ($u -replace "https?://", "" -replace "[^A-Za-z0-9]+", "_") + ".html"
      $occ = ([regex]::Matches($r.Content, [regex]::Escape($Mark))).Count
      Set-Content -Path (Join-Path $dir $fname) -Value $r.Content -Encoding UTF8
      Write-Host ("  Live page: " + $u + " (" + $occ + " mark mentions, " + $r.Content.Length + " bytes)")
    }
  }
  catch {}
}

# README
$lines = @()
$lines += "FIRST-USE EVIDENCE: '" + $Mark + "'"
$lines += ("=" * 50)
$lines += ""
$lines += ("Capture timestamp: " + $tsLong)
$lines += "Owner:             Scott McGavin (Scootermcgavin121)"
$lines += ("Mark:              " + $Mark)
$lines += ""
$lines += "PURPOSE:"
$lines += "  Document the earliest verifiable date the mark above was used"
$lines += "  in commerce within the Cornerstone PM platform and its public"
$lines += "  marketing assets."
$lines += ""

if ($first) {
  $vis = "PRIVATE"
  if ($first.repo -ne "scott-alan-homes") { $vis = "PUBLIC" }
  $lines += "EARLIEST COMMIT REFERENCING THE MARK:"
  $lines += ("  Date:       " + $first.date)
  $lines += ("  Repo:       " + $first.repo + " (" + $vis + ")")
  $lines += ("  SHA:        " + $first.sha)
  $lines += ("  Message:    " + $first.message)
  $lines += ""
}

$lines += "TOTAL MATCHES ACROSS REPOS: $($allMatches.Count)"
$lines += ""
$lines += "REPOS SEARCHED:"
foreach ($r in $repos) {
  $lines += ("  - " + $r.name + "  (" + $r.role + ")")
}
$lines += ""
$lines += "INTEGRITY:"
$lines += "  SHA256SUMS.txt contains cryptographic hashes of every file."
$lines += "  Verify with: Get-FileHash <filename> -Algorithm SHA256"
$lines += ""
$lines += "FILES IN THIS FOLDER:"
foreach ($f in (Get-ChildItem -Path $dir -File | Sort-Object Name)) {
  $lines += ("  - " + $f.Name + "  (" + ("{0:N0}" -f $f.Length) + " bytes)")
}
Set-Content -Path (Join-Path $dir "README.txt") -Value $lines -Encoding UTF8

# SHA256
$files = Get-ChildItem -Path $dir -File | Where-Object { $_.Name -ne "SHA256SUMS.txt" }
$hashes = $files | Get-FileHash -Algorithm SHA256 |
  ForEach-Object { $_.Hash + "  " + (Split-Path $_.Path -Leaf) }
Set-Content -Path (Join-Path $dir "SHA256SUMS.txt") -Value $hashes -Encoding UTF8

Write-Host ""
if ($first) {
  Write-Host ("EARLIEST USE: " + $first.date + "  [" + $first.repo + "]  " + $first.message)
}
Write-Host ("Total matches: " + $allMatches.Count)
Write-Host ("Saved to: " + $dir)
