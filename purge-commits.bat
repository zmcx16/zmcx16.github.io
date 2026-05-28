@echo off

REM === Define paths to purge (only edit here) ===
set FOLDERS=plugin-react stock-data forecast-data ai-analysis
set FILES=indusrty-table.json zmcx16_investment-formula-trade-data.json zmcx16_investment-formula-trade-data_readable.json zmcx16_investment-stocks-trade-data.json zmcx16_investment-stocks-trade-data_readable.json

set BACKUP_DIR=%TEMP%\git_backup_%RANDOM%
mkdir "%BACKUP_DIR%"

REM Backup
for %%F in (%FOLDERS%) do if exist "%%F\" xcopy /E /I /Y "%%F" "%BACKUP_DIR%\%%F"
for %%F in (%FILES%)   do if exist "%%F"  copy /Y "%%F" "%BACKUP_DIR%\"

REM Purge specified paths from commit history
for %%F in (%FOLDERS%) do git filter-repo --path "%%F/" --invert-paths --force
for %%F in (%FILES%)   do git filter-repo --path "%%F"  --invert-paths --force

REM Restore files from backup
for %%F in (%FOLDERS%) do if exist "%BACKUP_DIR%\%%F\" xcopy /E /I /Y "%BACKUP_DIR%\%%F" "%%F"
for %%F in (%FILES%)   do if exist "%BACKUP_DIR%\%%F"  copy /Y "%BACKUP_DIR%\%%F" .

REM Clean up temp backup
rmdir /S /Q "%BACKUP_DIR%"

REM Commit only the restored files back into the repo
for %%F in (%FOLDERS%) do if exist "%%F\" git add "%%F/"
for %%F in (%FILES%)   do if exist "%%F"  git add "%%F"
git commit -m "Restore files after history purge"

git remote add origin git@github.com:zmcx16/zmcx16.github.io.git