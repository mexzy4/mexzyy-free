@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Najpierw zainstaluj Node.js z https://nodejs.org i uruchom ten plik ponownie.
  pause
  exit /b
)
call npm install
call npm run build
echo.
echo Gotowe! Pliki .exe sa w folderze dist
pause
