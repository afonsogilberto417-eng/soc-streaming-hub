

## Plano: Script de exportação do site

Criar um script `export.sh` na raiz do projeto que automatiza o build e empacota tudo em um arquivo ZIP pronto para upload na Hostgator.

### Arquivo: `export.sh`
- Roda `npm run build`
- Compacta o conteúdo da pasta `dist/` em um arquivo `site-export.zip`
- O ZIP conterá todos os arquivos prontos para subir direto no `public_html`

### Arquivo: `export.bat` (para Windows)
- Mesmo processo, mas compatível com Windows (usando PowerShell para zipar)

Depois de rodar o script, basta subir o `site-export.zip` na Hostgator, extrair dentro de `public_html`, e o site estará funcionando.

