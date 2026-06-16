# InnovaSfera — Proposta Comercial (ERP Oficina & Autopeças)

Landing page de proposta comercial. Site estático, sem build step — HTML + CSS + JS puro, fontes e nada mais via CDN. Pronto para GitHub + Vercel.

## Stack

- HTML/CSS/JS vanilla (zero dependências de build)
- Fontes via Google Fonts CDN (Space Grotesk · Inter · JetBrains Mono)
- Animações em CSS + IntersectionObserver (scroll reveal)

## Identidade visual

| Cor | Hex |
|---|---|
| Lime | `#a2ef1b` |
| Navy | `#0f193a` |
| Cream | `#f9f1e4` |
| White | `#ffffff` |
| Black | `#060912` |

Signature: esfera em órbita (InnovaSfera).

## Estrutura

```
proposta-innovasfera/
├── index.html        # página única
├── styles.css        # estilos + animações
├── app.js            # nav sticky, scroll reveal, contagem de validade
├── vercel.json       # config de deploy (cleanUrls + cache de assets)
├── assets/
│   └── logo.svg      # logo InnovaSfera
└── README.md
```

## Rodar local

Abra `index.html` no navegador, ou sirva:

```bash
npx serve .
```

## Publicar no GitHub

```bash
cd proposta-innovasfera
git init
git add .
git commit -m "feat: proposta comercial InnovaSfera"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<repo>.git
git push -u origin main
```

## Publicar no Vercel

1. Acesse https://vercel.com/new
2. Importe o repositório do GitHub
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: `./`
4. Deploy

Ou via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```

> Se o repositório tiver mais pastas além desta, defina o **Root Directory** do projeto Vercel como `proposta-innovasfera`.
