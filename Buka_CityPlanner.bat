@echo off
chcp 65001 >nul
title CityPlanner — Urban Planning & Architecture Studio (Port 8003)

echo =====================================================================
echo           CityPlanner — Urban Planning & Architecture Studio
echo            2D Masterplan, 3D View, Blueprint CAD & Walk Mode
echo =====================================================================
echo.

cd /d "%~dp0"

echo [1/2] Membuka antarmuka CityPlanner di browser...
start http://localhost:8003

echo [2/2] Menjalankan server CityPlanner di http://localhost:8003 ...
echo.
echo =====================================================================
echo   CityPlanner berjalan di port 8003.
echo   Buka di browser: http://localhost:8003
echo   Tekan Ctrl+C untuk menghentikan server.
echo =====================================================================
echo.

python run.py
pause
