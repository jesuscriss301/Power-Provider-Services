@echo off
cd /d "%~dp0"
echo ============================================
echo  Power Provider Services - servidor local
echo ============================================
echo.
if exist node_modules (
  echo Borrando node_modules (version Linux, incompatible con Windows)...
  rmdir /s /q node_modules
)
echo Instalando dependencias (usa tu conexion real, puede tardar 1-2 min)...
call npm install
if errorlevel 1 (
  echo.
  echo Algo fallo en npm install. Revisa que tengas Node.js instalado ^(node -v^).
  pause
  exit /b 1
)
echo.
echo Dependencias listas. Iniciando Vite...
echo Cuando veas "ready", abre http://localhost:5173 en tu navegador.
echo (Deja esta ventana abierta mientras navegas el sitio.)
echo.
npm run dev
pause
