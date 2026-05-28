$ErrorActionPreference = "Stop"

$env_vars = @(
    @{ key = "MARKETING_DATABASE_URL";   val = "postgresql://neondb_owner:npg_t6MfX8auLwsR@ep-weathered-field-ap295xu0-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" },
    @{ key = "MARKETING_DIRECT_URL";     val = "postgresql://neondb_owner:npg_t6MfX8auLwsR@ep-weathered-field-ap295xu0.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" },
    @{ key = "NEXT_PUBLIC_POSTHOG_KEY";  val = "phc_CXWf8cq6xBb8itxmy7xDhKvFDDKW8az3cuPbBjgC6wXQ" },
    @{ key = "NEXT_PUBLIC_POSTHOG_HOST"; val = "https://us.i.posthog.com" },
    @{ key = "ADMIN_USERNAME";           val = "scooter" },
    @{ key = "ADMIN_PASSWORD";           val = "cqCfk3-ged^=jjTDpe^V@`$FkV6MB" }
)

foreach ($v in $env_vars) {
    foreach ($envName in @("production", "preview", "development")) {
        Write-Host "Setting $($v.key) in $envName..."
        # Use a temp file to avoid PowerShell stdin newline issues
        $tmp = [System.IO.Path]::GetTempFileName()
        [System.IO.File]::WriteAllText($tmp, $v.val)
        Get-Content -Raw $tmp | vercel env add $v.key $envName 2>&1 | Out-Null
        Remove-Item $tmp
    }
}

Write-Host "Done. Listing current env vars:"
vercel env ls
