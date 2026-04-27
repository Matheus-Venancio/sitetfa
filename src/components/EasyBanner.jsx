import styled from 'styled-components'
import { shimmer } from '../styles'

const Section = styled.section`
  background: var(--preto);
  padding: 80px 0; position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at center, rgba(255,223,0,0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const Label = styled.div`
  text-align: center; font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo); margin-bottom: 48px; opacity: 0.85;
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; overflow: hidden; position: relative;
  &::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,223,0,0.04) 50%, transparent 100%);
    background-size: 200% auto;
    animation: ${shimmer} 5s linear infinite;
    pointer-events: none; border-radius: 16px;
  }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`
const Item = styled.div`
  padding: 52px 40px; text-align: center;
  position: relative; background: rgba(0,24,82,0.5);
  transition: background 0.35s ease;
  &:hover { background: rgba(255,223,0,0.05); }
  &:not(:last-child)::after {
    content: ''; position: absolute; top: 20%; right: 0; bottom: 20%;
    width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
  }
  @media (max-width: 768px) {
    &:not(:last-child)::after { top: auto; right: 20%; bottom: 0; left: 20%; width: auto; height: 1px; }
    border-bottom: 1px solid rgba(255,255,255,0.06);
    &:last-child { border-bottom: none; }
  }
`
const IconBox = styled.div`
  width: 64px; height: 64px;
  background: rgba(255,223,0,0.08); border: 1px solid rgba(255,223,0,0.2);
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  font-size: 28px; margin: 0 auto 24px; transition: all 0.3s ease;
  ${Item}:hover & {
    background: rgba(255,223,0,0.16); border-color: var(--amarelo);
    transform: translateY(-4px); box-shadow: 0 8px 20px rgba(255,223,0,0.2);
  }
`
const ItemTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px; letter-spacing: 2px; color: var(--branco); text-transform: uppercase; margin-bottom: 12px;
`
const ItemText = styled.p`
  font-family: 'Barlow', sans-serif; font-size: 15px;
  color: rgba(255,255,255,0.6); line-height: 1.7; font-weight: 300;
`

const pillars = [
  { icon: '🛡️', title: 'Confiança Total',      text: 'Mais de 10 anos no mercado, certificados CADASTUR e IATA. Sua viagem nas mãos certas.' },
  { icon: '✈️', title: 'Experiência Exclusiva', text: 'Pacotes VIP, Business Class e hospitalidade premium para os maiores eventos do planeta.' },
  { icon: '💬', title: 'Facilidade & Suporte',  text: 'Do planejamento ao retorno, nossa equipe está disponível 24h para cuidar de tudo por você.' },
]

export default function EasyBanner() {
  return (
    <Section>
      <Container>
        <Label>Por que escolher a TFA Viagens</Label>
        <Grid>
          {pillars.map((p, i) => (
            <Item key={i}>
              <IconBox>{p.icon}</IconBox>
              <ItemTitle>{p.title}</ItemTitle>
              <ItemText>{p.text}</ItemText>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
