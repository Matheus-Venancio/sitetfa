import styled from 'styled-components'
import { services } from '../data'

const Bg = styled.section`
  background: var(--verde-escuro);
  padding: 120px 0; position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: ${p => p.$overlay || 'linear-gradient(135deg, rgba(141, 151, 2, 0.82) 0%, rgba(0, 118, 63, 0.65) 100%)'};
    background: radial-gradient(ellipse at 50% 0%, rgba(26,115,231,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px;`
const SectionLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo); margin-bottom: 20px; opacity: 0.9;
  display: flex; align-items: center; justify-content: center; gap: 14px;
  &::before, &::after { content: ''; width: 32px; height: 1px; background: var(--amarelo); opacity: 0.45; }
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 0.95;
  color: var(--branco); text-transform: uppercase; letter-spacing: 2px;
  span { color: var(--amarelo); }
`
const Sub = styled.p`font-size: 17px; color: rgba(255,255,255,0.6); font-weight: 300; margin-top: 20px; line-height: 1.7;`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;
`
const Card = styled.div`
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 44px 36px; border-radius: 16px;
  position: relative; overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--amarelo), var(--primary));
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
  }
  &::after {
    content: ''; position: absolute; top: 0; right: 0;
    width: 80px; height: 80px;
    background: radial-gradient(circle at top right, rgba(255,223,0,0.12), transparent);
    opacity: 0; transition: opacity 0.4s;
  }
  &:hover {
    border-color: rgba(255,223,0,0.25); transform: translateY(-10px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.4); background: rgba(0,0,0,0.35);
    &::before { transform: scaleX(1); }
    &::after { opacity: 1; }
  }
`
const SvcIconWrap = styled.div`
  width: 72px; height: 72px;
  background: rgba(255,223,0,0.1); border: 1px solid rgba(255,223,0,0.25);
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  font-size: 32px; margin-bottom: 28px; transition: all 0.35s ease;
  ${Card}:hover & {
    background: rgba(255,223,0,0.18); border-color: rgba(255,223,0,0.6);
    transform: rotate(-3deg) scale(1.05); box-shadow: 0 8px 24px rgba(255,223,0,0.2);
  }
`
const SvcTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif; font-size: 26px; color: var(--branco);
  margin-bottom: 14px; text-transform: uppercase; letter-spacing: 2px;
`
const SvcText = styled.p`font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.75; font-weight: 300;`
const SvcLink = styled.a`
  display: inline-flex; align-items: center; gap: 6px; margin-top: 24px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--amarelo); opacity: 0; transform: translateX(-8px); transition: all 0.3s ease;
  ${Card}:hover & { opacity: 1; transform: translateX(0); }
`

export default function ServicesSection() {
  return (
    <Bg id="copa">
      <Container>
        <SectionHeader>
          <SectionLabel>Soluções Premium</SectionLabel>
          <BigTitle>ALÉM DA<br /><span>COPA DO MUNDO</span></BigTitle>
          <Sub>Uma gama completa de serviços para cada etapa da sua viagem.</Sub>
        </SectionHeader>
        <Grid>
          {services.map((s, i) => (
            <Card key={i}>
              <SvcIconWrap>{s.icon}</SvcIconWrap>
              <SvcTitle>{s.title}</SvcTitle>
              <SvcText>{s.text}</SvcText>
              <SvcLink href="https://wa.me/5511915396612" target="_blank" rel="noreferrer">Saiba mais →</SvcLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Bg>
  )
}
