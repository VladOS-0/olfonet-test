@echo off
CD %~dp0

CALL build.bat && docker run -p 80:80 olfonet-test