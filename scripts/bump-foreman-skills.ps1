<#
.SYNOPSIS
  Bump Foreman AI skill count + category count across the marketing site.

.DESCRIPTION
  Replaces every "<oldSkills>+" skill reference with "<newSkills>+" and every
  "<oldCats> categories" reference with "<newCats> categories" across all live
  marketing pages, components, structured data, and chatbot knowledge.

  Skips historical blog posts that document past milestone counts.

  Single source of truth lives in scripts/foreman-skills.json. By default the
  script reads "current" from that file and uses your -NewSkills / -NewCats
  as the new values. After a successful sweep + build, it updates the JSON
  so the next run knows the latest baseline.

  Uses .NET File APIs with explicit UTF-8 + BOM preservation so smart quotes,
  em-dashes, and trademark symbols are not mangled.

.PARAMETER NewSkills
  New skill count, e.g. 117 or 130. Required.

.PARAMETER NewCats
  New category count, e.g. 17 or 18. Required.

.PARAMETER OldSkills
  Old skill count to search for. Defaults to current.skills from
  scripts/foreman-skills.json.

.PARAMETER OldCats
  Old category count to search for. Defaults to current.categories from
  scripts/foreman-skills.json.

.PARAMETER DryRun
  Report what would change without writing files.

.PARAMETER Commit
  After a successful sweep + build, stage, commit, and push the changes.

.EXAMPLE
  pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18

.EXAMPLE
  pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18 -DryRun

.EXAMPLE
  pwsh scripts/bump-foreman-skills.ps1 -NewSkills 130 -NewCats 18 -Commit
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)] [int] $NewSkills,
    [Parameter(Mandatory = $true)] [int] $NewCats,
    [int] $OldSkills = 0,
    [int] $OldCats = 0,
    [switch] $DryRun,
    [switch] $Commit
)

$ErrorActionPreference = 'Stop'

# Resolve repo root (parent of this script's directory)
$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $RepoRoot

$ConfigPath = Join-Path $PSScriptRoot 'foreman-skills.json'
if (-not (Test-Path $ConfigPath)) {
    throw "Config file not found: $ConfigPath"
}
$Config = Get-Content -Raw -Path $ConfigPath | ConvertFrom-Json

if ($OldSkills -eq 0) { $OldSkills = [int]$Config.current.skills }
if ($OldCats   -eq 0) { $OldCats   = [int]$Config.current.categories }

Write-Host ""
Write-Host "Foreman AI skill-count sweep" -ForegroundColor Cyan
Write-Host "  Old: $OldSkills+ skills / $OldCats categories"
Write-Host "  New: $NewSkills+ skills / $NewCats categories"
if ($DryRun) { Write-Host "  Mode: DRY RUN (no files written)" -ForegroundColor Yellow }
Write-Host ""

if ($NewSkills -eq $OldSkills -and $NewCats -eq $OldCats) {
    Write-Host "Nothing to do - new values match old." -ForegroundColor Yellow
    return
}

# -------------------------------------------------------------------------
# Files to skip (historical blog posts that document past milestone counts)
# -------------------------------------------------------------------------
$skipRelative = @($Config.skipFiles)
$skip = $skipRelative | ForEach-Object {
    $full = Join-Path $RepoRoot $_
    if (Test-Path $full) { (Resolve-Path $full).Path } else { $null }
} | Where-Object { $_ }

# -------------------------------------------------------------------------
# Build replacement table from the (oldSkills, oldCats) -> (newSkills, newCats) shift.
# Order matters: longest / most specific first.
# -------------------------------------------------------------------------
$skillRegex = '{0}\+' -f $OldSkills
$skillNew   = "{0}+" -f $NewSkills

$replacements = @(
    # Combined skill + category phrases
    @{ p = "$skillRegex skills across $OldCats categories";              r = "$skillNew skills across $NewCats categories" },
    @{ p = "$skillRegex Foreman AI skills across $OldCats categories";   r = "$skillNew Foreman AI skills across $NewCats categories" },
    @{ p = "$skillRegex purpose-built skills across $OldCats categories";r = "$skillNew purpose-built skills across $NewCats categories" },
    @{ p = "$skillRegex skills\. $OldCats categories\.";                  r = "$skillNew skills. $NewCats categories." },
    @{ p = "$OldCats categories\. $skillRegex skills\.";                  r = "$NewCats categories. $skillNew skills." },
    @{ p = "Across $OldCats categories";                                  r = "Across $NewCats categories" },

    # Generic skill-count bumps (skill context only - never touches "Database tables")
    @{ p = "$skillRegex purpose-built construction skills"; r = "$skillNew purpose-built construction skills" },
    @{ p = "$skillRegex purpose-built skills";              r = "$skillNew purpose-built skills" },
    @{ p = "$skillRegex Foreman AI skills";                 r = "$skillNew Foreman AI skills" },
    @{ p = "$skillRegex Foreman AI skill";                  r = "$skillNew Foreman AI skill" },
    @{ p = "$skillRegex Foreman skills";                    r = "$skillNew Foreman skills" },
    @{ p = "$skillRegex Foreman skill";                     r = "$skillNew Foreman skill" },
    @{ p = "$skillRegex AI skills";                         r = "$skillNew AI skills" },
    @{ p = "$skillRegex skill definitions";                 r = "$skillNew skill definitions" },
    @{ p = "$skillRegex skill schemas";                     r = "$skillNew skill schemas" },
    @{ p = "$skillRegex skill construction agent";          r = "$skillNew skill construction agent" },
    @{ p = "$skillRegex skills";                            r = "$skillNew skills" },
    @{ p = "$skillRegex skill";                             r = "$skillNew skill" },

    @{ p = "\($skillRegex skills\)";                        r = "($skillNew skills)" },
    @{ p = "Foreman AI -- $skillRegex skills";              r = "Foreman AI -- $skillNew skills" },
    @{ p = "Foreman AI $skillRegex skills";                 r = "Foreman AI $skillNew skills" },
    @{ p = "all $skillRegex skill";                         r = "all $skillNew skill" },

    # Stat box entries: { num: "<old>+", label: "Purpose-built skills", ... }
    @{ p = '\{ num: "' + $OldSkills + '\+", label: "Purpose-built skills", sub: "Not generic AI features" \}';
       r = '{ num: "' + $NewSkills + '+", label: "Purpose-built skills", sub: "Not generic AI features" }' },
    @{ p = '\{ num: "' + $OldSkills + '\+", label: "Purpose-built skills", sub: "Across ' + $OldCats + ' categories" \}';
       r = '{ num: "' + $NewSkills + '+", label: "Purpose-built skills", sub: "Across ' + $NewCats + ' categories" }' }
)

# -------------------------------------------------------------------------
# Sweep
# -------------------------------------------------------------------------
$files = Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts,*.md |
    Where-Object { $skip -notcontains $_.FullName }

$utf8NoBom   = New-Object System.Text.UTF8Encoding($false)
$utf8WithBom = New-Object System.Text.UTF8Encoding($true)

$totalFiles = 0
$totalReplacements = 0
$changedFiles = @()

foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $hasBom = ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF)

    $orig = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $new = $orig
    $fileChanges = 0

    foreach ($r in $replacements) {
        $matches = [regex]::Matches($new, $r.p)
        if ($matches.Count -gt 0) {
            $new = [regex]::Replace($new, $r.p, $r.r)
            $fileChanges += $matches.Count
        }
    }

    if ($new -ne $orig) {
        if (-not $DryRun) {
            $enc = if ($hasBom) { $utf8WithBom } else { $utf8NoBom }
            [System.IO.File]::WriteAllText($f.FullName, $new, $enc)
        }
        $totalFiles++
        $totalReplacements += $fileChanges
        $changedFiles += $f.FullName
        $rel = $f.FullName.Replace($RepoRoot + '\', '')
        Write-Host ("  {0,-70} {1,3} repl  (BOM={2})" -f $rel, $fileChanges, $hasBom)
    }
}

Write-Host ""
Write-Host "Files changed: $totalFiles" -ForegroundColor Green
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green

if ($DryRun) {
    Write-Host ""
    Write-Host "Dry run - no files written. Re-run without -DryRun to apply." -ForegroundColor Yellow
    return
}

# -------------------------------------------------------------------------
# Sanity check: any leftover stale references? (excluding historical blogs)
# -------------------------------------------------------------------------
$pattern = "$OldSkills\+ (skill|Foreman|AI skill|purpose)|\($OldSkills\+ skill"
$leftover = Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts,*.md |
    Where-Object { $skip -notcontains $_.FullName } |
    Select-String -Pattern $pattern

if ($leftover) {
    Write-Host ""
    Write-Host "WARNING: leftover '$OldSkills+ skill' references found:" -ForegroundColor Red
    $leftover | ForEach-Object {
        $rel = $_.Path.Replace($RepoRoot + '\', '')
        Write-Host "  $rel`:L$($_.LineNumber): $($_.Line.Trim())"
    }
    Write-Host ""
    Write-Host "Inspect manually or extend the script's replacement table." -ForegroundColor Yellow
}

# -------------------------------------------------------------------------
# Update foreman-skills.json
# -------------------------------------------------------------------------
$Config.previous = $Config.current
$Config.current = [PSCustomObject]@{
    skills      = $NewSkills
    categories  = $NewCats
    updatedAt   = (Get-Date -Format 'yyyy-MM-dd')
}
$json = $Config | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText($ConfigPath, $json, $utf8NoBom)
Write-Host ""
Write-Host "Updated $ConfigPath to current=$NewSkills+/$NewCats" -ForegroundColor Cyan

# -------------------------------------------------------------------------
# Optional: build + commit + push
# -------------------------------------------------------------------------
if ($Commit) {
    Write-Host ""
    Write-Host "Running npm run build..." -ForegroundColor Cyan
    $buildOutput = & npm run build 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed - NOT committing." -ForegroundColor Red
        $buildOutput | Select-Object -Last 30
        exit 1
    }
    Write-Host "Build succeeded." -ForegroundColor Green

    git add -A | Out-Null
    $msg = "chore: bump Foreman AI to $NewSkills+ skills across $NewCats categories"
    git commit -m $msg
    if ($LASTEXITCODE -eq 0) {
        git push
        Write-Host "Pushed to origin." -ForegroundColor Green
    } else {
        Write-Host "Nothing to commit." -ForegroundColor Yellow
    }
}
