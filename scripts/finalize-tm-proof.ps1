# Finalizes the TM proof-of-use snapshot:
# 1. Captures Wayback Machine save (independent third-party timestamp)
# 2. Generates SHA256 hashes of all captured files
# 3. Writes a final summary

$ErrorActionPreference = "Continue"

$dir = (Get-ChildItem "$env:USERPROFILE\OneDrive\Cornerstone PM\Trademark Proof of Use" -Directory |
  Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName

Write-Host "Finalizing snapshot: $dir"
Write-Host ""

# 1) Try the Wayback Machine "Save Page Now" endpoint
$waybackUrls = @(
  "https://web.archive.org/save/https://www.cornerstonepm.ai/",
  "https://web.archive.org/save/https://www.cornerstonepm.ai/features",
  "https://web.archive.org/save/https://www.cornerstonepm.ai/punchlist-ai",
  "https://web.archive.org/save/https://www.cornerstonepm.ai/foreman"
)

$waybackResults = @()
foreach ($url in $waybackUrls) {
  try {
    Write-Host "  Wayback save: $url"
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 60
    $finalUrl = $r.BaseResponse.ResponseUri.AbsoluteUri
    $waybackResults += "$url -> $finalUrl (status $($r.StatusCode))"
  }
  catch {
    $waybackResults += "$url -> FAILED: $($_.Exception.Message)"
  }
}

Set-Content -Path (Join-Path $dir "wayback-archive-urls.txt") -Value $waybackResults -Encoding UTF8

# 2) SHA256 hash manifest for all files in the folder
$hashes = Get-ChildItem -Path $dir -File | Get-FileHash -Algorithm SHA256 |
  ForEach-Object { "{0}  {1}" -f $_.Hash, (Split-Path $_.Path -Leaf) }

Set-Content -Path (Join-Path $dir "SHA256SUMS.txt") -Value $hashes -Encoding UTF8

# 3) Final summary
$summary = @"

CAPTURE COMPLETE - $(Get-Date -Format "yyyy-MM-dd HH:mm:ss zzz") (America/New_York)

This folder contains contemporaneous evidence that "Cornerstone PM(TM)" was
in active public commercial use on the date and time of capture, at the URL
https://www.cornerstonepm.ai/

Files captured:
$(Get-ChildItem -Path $dir -File | ForEach-Object { "  - {0}  ({1:N0} bytes)" -f $_.Name, $_.Length } | Out-String)

To verify file integrity at any future date, run:
  Get-FileHash <filename> -Algorithm SHA256
and compare against SHA256SUMS.txt

To verify the public URL at the time of capture, see wayback-archive-urls.txt
for independent third-party Wayback Machine archives of the same pages.

"@

Add-Content -Path (Join-Path $dir "README.txt") -Value $summary -Encoding UTF8

Write-Host ""
Write-Host "Finalization complete. Files in snapshot folder:"
Get-ChildItem -Path $dir -File | Select-Object Name, Length, LastWriteTime | Format-Table
