import { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    /* Azuis Brasil + TFA */
    --primary: #1a73e7;
    --primary-dark: #002776;
    --secondary: #003899;

    /* Verdes Brasil */
    --verde: #009c3b;
    --verde-escuro: #006d28;

    /* Amarelo Brasil */
    --amarelo: #FFDF00;
    --ouro: #FFDF00;
    --ouro-claro: #FFE94D;
    --ouro-escuro: #D4B800;

    /* Fundos azul-escuro (substitui o preto) */
    --preto: #001033;
    --preto-card: #001852;
    --preto-borda: #0a3080;

    /* Neutros */
    --cinza: #9ca3af;
    --branco: #ffffff;
    --texto: #f3f4f6;

    /* Glass azul */
    --glass-bg: rgba(0,24,102,0.4);
    --glass-border: rgba(255,255,255,0.1);
    --ouro-glass: rgba(255,223,0,0.1);
    --ouro-border: rgba(255,223,0,0.3);
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
  ::-webkit-scrollbar-thumb { background: var(--amarelo); border-radius: 2px; }
`

export const fadeUp = keyframes`from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}`
export const fadeIn = keyframes`from{opacity:0}to{opacity:1}`
export const pulse = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.08)}`
export const glow = keyframes`0%,100%{box-shadow:0 0 20px #FFDF0040}50%{box-shadow:0 0 40px #FFDF0080}`
export const glowOuro = keyframes`0%,100%{box-shadow:0 0 20px rgba(255,223,0,0.25)}50%{box-shadow:0 0 50px rgba(255,223,0,0.6)}`
export const glowBlue = keyframes`0%,100%{box-shadow:0 0 20px rgba(26,115,231,0.25)}50%{box-shadow:0 0 50px rgba(26,115,231,0.55)}`
export const scanline = keyframes`0%{top:-10%}100%{top:110%}`
export const countUp = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`
export const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}`
export const shimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`
export const slideInLeft = keyframes`from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}`
export const slideInRight = keyframes`from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}`
export const zoomIn = keyframes`from{opacity:0;transform:scale(0.88)}to{opacity:1;transform:scale(1)}`
export const rotateSlowly = keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`
export const scrollIndicator = keyframes`0%{transform:translateY(0);opacity:1}100%{transform:translateY(14px);opacity:0}`
export const borderGlow = keyframes`0%,100%{border-color:rgba(255,223,0,0.3)}50%{border-color:rgba(255,223,0,0.85)}`
export const textShimmer = keyframes`0%{background-position:-200% center}100%{background-position:200% center}`
