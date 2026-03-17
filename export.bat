@echo off
echo Fazendo build do site...
call npm run build

if %errorlevel% neq 0 (
  echo Erro no build. Verifique os erros acima.
  exit /b 1
)

echo Criando site-export.zip...
powershell -Command "Compress-Archive -Path 'dist\*' -DestinationPath 'site-export.zip' -Force"

echo Arquivo site-export.zip criado com sucesso!
echo Suba o conteudo do ZIP para o public_html da Hostgator.
pause
