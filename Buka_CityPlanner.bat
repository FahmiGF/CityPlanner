@echo off
chcp 65001 >nul
title CityPlanner — Urban Planning & Architecture Studio (Port 8003)

echo =====================================================================
echo           CityPlanner — Urban Planning & Architecture Studio
echo            2D Masterplan, 3D View, Blueprint CAD & Walk Mode
echo =====================================================================
echo.

cd /d "%~dp0"

:: 1. Cek apakah Python terpasang di sistem
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Python tidak terdeteksi di PATH sistem.
    echo [*] Membuka CityPlanner langsung via browser (Offline Mode)...
    start "" "%~dp0index.html"
    echo [v] CityPlanner berhasil dibuka.
    pause
    exit /b 0
)

:: 2. Jalankan server melalui run.py
:: run.py secara cerdas akan:
:: - Mengecek port 8003
:: - Membuka browser hanya setelah server siap merespon (mencegah black screen / error koneksi)
:: - Menggunakan FastAPI jika ada, atau otomatis fallback ke native Python HTTP server
echo [*] Memulai server CityPlanner di http://localhost:8003 ...
echo [*] Browser akan terbuka otomatis ketika server sudah siap.
echo.
python run.py

if %errorlevel% neq 0 (
    echo.
    echo [!] Server mengalami kendala. Membuka versi offline langsung...
    start "" "%~dp0index.html"
)

pause
