import { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --primary: #017f8d;
    --secondary: #1a73e7;
    --contrast: #05ff00;
    --verde: #009c3b;
    --verde-escuro: #006d28;
    --amarelo: #FFDF00;
    --ouro: #C9A84C;
    --ouro-claro: #e8c96a;
    --preto: #080808;
    --preto-card: #111111;
    --preto-borda: #1e1e1e;
    --cinza: #8a8a8a;
    --branco: #f5f5f5;
    --texto: #e0e0e0;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--preto);
    color: var(--texto);
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.04em;
  }

  a { text-decoration: none; color: inherit; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--preto); }
  ::-webkit-scrollbar-thumb { background: var(--ouro); border-radius: 2px; }
`

export const fadeUp = keyframes`from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}`
export const fadeIn = keyframes`from{opacity:0}to{opacity:1}`
export const pulse = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.08)}`
export const glow = keyframes`0%,100%{box-shadow:0 0 20px #FFDF0040}50%{box-shadow:0 0 40px #FFDF0080}`
export const scanline = keyframes`0%{top:-10%}100%{top:110%}`
export const countUp = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`
export const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}`
