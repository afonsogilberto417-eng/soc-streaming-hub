

## Problema

Quando você faz `npm run build` e sobe os arquivos da pasta `dist/` para a Hostgator, duas coisas dão errado:

1. **Roteamento SPA**: O Apache não sabe redirecionar rotas para o `index.html`, então qualquer rota diferente de `/` dá erro 404.
2. **Caminhos dos assets**: Dependendo de onde você coloca os arquivos, os caminhos de CSS/JS podem não funcionar.

## Plano

### 1. Criar arquivo `.htaccess` na raiz do projeto (para ser copiado no build)

Criar um arquivo `public/.htaccess` que será incluído automaticamente na pasta `dist/` após o build. Ele configura o Apache da Hostgator para redirecionar todas as rotas para `index.html`:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 2. Garantir `base` correta no Vite config

Adicionar `base: "./"` no `vite.config.ts` para que todos os caminhos de assets (JS, CSS, imagens) sejam relativos, funcionando em qualquer subdiretório da Hostgator.

---

**Resumo**: São apenas 2 alterações simples — um arquivo `.htaccess` novo e uma linha no `vite.config.ts`. Depois disso, basta rodar `npm run build` novamente e subir o conteúdo da pasta `dist/` para o `public_html` da Hostgator.

