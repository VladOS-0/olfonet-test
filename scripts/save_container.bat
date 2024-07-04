@echo off
CD %~dp0
IF NOT EXIST ..\docker MKDIR ..\docker
CALL build.bat && docker save olfonet-test > ..\docker\output_container.tar