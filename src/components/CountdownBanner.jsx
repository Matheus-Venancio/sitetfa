import styled from 'styled-components'

const Banner = styled.div`
  position: fixed;
  top: 72px; left: 0; right: 0;
  z-index: 998;
  background: linear-gradient(90deg, var(--verde-escuro), var(--verde), var(--verde-escuro));
  padding: 7px 0;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: #fff;
  display: flex; align-items: center; justify-content: center; gap: 24px;
  flex-wrap: wrap;
`
const Unit = styled.span`
  background: rgba(0,0,0,0.3);
  padding: 2px 10px; border-radius: 2px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px; letter-spacing: 3px; color: var(--amarelo);
`

export default function CountdownBanner({ countdown }) {
  const { d, h, m, s } = countdown
  return (
    <Banner>
      <span>⚽ Copa do Mundo 2026 começa em</span>
      <Unit>{String(d).padStart(3, '0')} dias</Unit>
      <Unit>{String(h).padStart(2, '0')}h</Unit>
      <Unit>{String(m).padStart(2, '0')}m</Unit>
      <Unit>{String(s).padStart(2, '0')}s</Unit>
      <span>— Garanta seu pacote!</span>
    </Banner>
  )
}
