#!/bin/bash
echo "🔨 Fazendo build do site..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Erro no build. Verifique os erros acima."
  exit 1
fi

echo "📦 Criando site-export.zip..."
cd dist
zip -r ../site-export.zip ./*
cd ..

echo "✅ Arquivo site-export.zip criado com sucesso!"
echo "📤 Suba o conteúdo do ZIP para o public_html da Hostgator."
