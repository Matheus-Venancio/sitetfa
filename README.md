# TFA Viagens — Site Copa do Mundo 2026

Site institucional + campanha Copa do Mundo 2026 para a TFA Viagens.

## Stack
- **Vite** + **React 18**
- **styled-components v6**
- Fontes: Bebas Neue + Barlow Condensed + Barlow (Google Fonts)

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Visualizar build
npm run preview
```

Acesse: http://localhost:5173

## Estrutura

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component
├── styles.js             # GlobalStyle + keyframes
├── hooks.js              # useCountdown, useVisible
├── data.js               # Dados estáticos (pacotes, depoimentos, etc.)
└── components/
    ├── TFAViagens.jsx     # Componente principal
    ├── Navbar.jsx
    ├── CountdownBanner.jsx
    ├── Hero.jsx
    ├── JuniorSection.jsx
    ├── Quiz.jsx
    ├── PackagesSection.jsx
    ├── ServicesSection.jsx
    ├── StatsSection.jsx
    ├── TestimonialsSection.jsx
    ├── ContactAndFooter.jsx
    └── FloatingWA.jsx
```

## Personalizações rápidas

- **Número WhatsApp**: buscar `5519982395282` e substituir
- **Foto do Júnior**: em `JuniorSection.jsx`, trocar a URL no `background` do `JuniorImg`
- **Pacotes/preços**: editar `src/data.js`
- **Data da Copa**: em `hooks.js`, linha `const target = new Date('2026-06-11...')`
