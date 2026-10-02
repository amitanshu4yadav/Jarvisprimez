@echo off
title Building JarvisPrimez Installer
where node >nul 2>nul || (echo Install Node.js LTS from https://nodejs.org first & pause & exit /b)
call npm install && call npm run dist
echo.
echo Done! Installer: dist\JarvisPrimez-Setup.exe
pause
