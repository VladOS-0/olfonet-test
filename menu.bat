@echo off
cls

:start
CD %~dp0
ECHO.
ECHO 1. Build container
ECHO 2. Deploy (build and run) container
ECHO 3. Save container to .\docker folder
ECHO 4. Load container from .\docker folder
ECHO 5. Exit
set choice=
set /p "choice=Type number of command."
rem if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto build
if '%choice%'=='2' goto deploy
if '%choice%'=='3' goto save
if '%choice%'=='4' goto load
if '%choice%'=='5' exit
ECHO "%choice%" is not valid, try again
ECHO.
goto start

:build
CALL .\scripts\build.bat && goto start

:deploy
CALL .\scripts\deploy.bat && goto start

:save
CALL .\scripts\save_container.bat && goto start

:load
CALL .\scripts\load_container.bat && goto start