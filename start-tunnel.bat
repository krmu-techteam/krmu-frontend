@echo off
title KRMU Local Live URL Tunnel
color 0A
echo ===================================================
echo     Starting KRMU Live Public Preview Tunnel...
echo ===================================================
echo.
echo Make sure 'npm run dev' is running in another terminal!
echo Generating your live HTTPS URL via Cloudflare...
echo.
npx --yes cloudflared tunnel --url http://127.0.0.1:3000
pause
