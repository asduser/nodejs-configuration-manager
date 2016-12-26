echo off

:: use '-def', '-full' or '-light'. If '-def' or '-light' selected, the second parameter is not required.
set mode=%1
:: use '-prod' or '-dev'
set env=%2

call :%mode%_case_mode
if errorlevel 1 call :incorrect_mode
exit /b

:-full_case_mode
    echo 'Full selected'
    call ts-node initializer -full %env%
    goto end_case_mode
:-light_case_mode
    echo 'Light selected'
    call ts-node initializer -light
    goto end_case_mode
:-def_case_mode
    echo 'Default selected'
    call ts-node initializer -def
    goto end_case_mode
:end_case_mode
    echo 'Complete with success.'
    goto :eof

:incorrect_mode
    echo 'Unknown mode - "%mode%"'
    exit /b