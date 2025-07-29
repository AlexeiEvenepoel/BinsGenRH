@echo off
echo ====================================================================
echo                    MUNDO BINS RH PRO - JavaScript Edition
echo                           BY: @RealHackRH_593
echo ====================================================================
echo.

echo [1/3] Instalando dependencias del backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Error instalando dependencias del backend
    pause
    exit /b 1
)

echo.
echo [2/3] Instalando dependencias del frontend...
cd ../frontend
call npm install
if %errorlevel% neq 0 (
    echo Error instalando dependencias del frontend
    pause
    exit /b 1
)

echo.
echo [3/3] Iniciando servidores...
echo.

echo Iniciando servidor backend en puerto 3000...
cd ../backend
start "Backend Server" cmd /k "npm start"

timeout /t 3 /nobreak >nul

echo Iniciando servidor frontend en puerto 8080...
cd ../frontend
call npm install
start "Frontend Server" cmd /k "npm start"

timeout /t 2 /nobreak >nul

echo.
echo ====================================================================
echo                        SERVIDORES INICIADOS
echo ====================================================================
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:8080
echo ====================================================================
echo.
echo Presiona cualquier tecla para abrir la aplicacion en el navegador...
pause >nul

start http://localhost:8080

echo.
echo Aplicacion iniciada exitosamente!
echo Para detener los servidores, cierra las ventanas de comando.
echo.
pause