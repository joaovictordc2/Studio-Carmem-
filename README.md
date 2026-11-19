# Studio Carmen Bastos — Bio Site

Site estático (HTML, CSS e JS puros, sem build) do **Studio Carmen Bastos**, Barueri — SP.
Método Lisos Sofisticados · Alisamentos · Tratamentos · Cortes · Mechas · Design de Sobrancelhas.

## Estrutura

```
index.html            página única com todas as seções
assets/css/style.css  estilos (cores e fontes nas variáveis do topo)
assets/js/main.js     menu mobile, cabeçalho e animações de entrada
assets/img/           fotos reais da Carmen e logos (.jpg + .webp), imagem de compartilhamento
favicon.png, apple-touch-icon.png   ícones gerados da logo rosé
robots.txt, sitemap.xml
_headers              cabeçalhos de cache/segurança do Cloudflare Pages
```

## Publicar no Cloudflare Pages

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Escolha o repositório `Studio-Carmem-`, branch `main`.
3. Configuração de build:
   - **Framework preset:** None
   - **Build command:** (deixe vazio)
   - **Build output directory:** `/`
4. **Save and Deploy**. Cada novo commit na `main` publica automaticamente.

## Domínio

Os links de SEO e compartilhamento usam `https://studiocarmenbastos.pages.dev/`.
Se o projeto no Cloudflare tiver outro nome, ou se for usado um domínio próprio,
troque esse endereço em `index.html` (canonical, `og:url`, `og:image`, JSON-LD),
`robots.txt` e `sitemap.xml`.

## Atualizar conteúdo

- **Textos:** edite direto no `index.html` (cada seção está comentada).
- **Fotos:** coloque o arquivo em `assets/img/` e troque o caminho nas tags `<source>` e `<img>`.
- **WhatsApp:** os links usam `https://wa.me/5511944969632?text=...` com a mensagem codificada.
- **Cores:** variáveis em `:root` no início de `style.css`.

Regras do projeto: usar apenas fotos reais da Carmen e dos resultados dela, sem filtros
que alterem cor de cabelo ou resultado; não inventar preços, endereço ou horários.
