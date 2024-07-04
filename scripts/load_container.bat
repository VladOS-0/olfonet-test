@echo off
CD %~dp0
IF NOT EXIST ..\docker ECHO NO CONTAINER DETECTED && exit
IF NOT EXIST ..\docker\output_container.tar ECHO NO CONTAINER DETECTED && exit
docker load < ..\docker\output_container.tar