import styled from 'styled-components'
import { services } from '../data'

const Bg = styled.section`
  background: var(--branco);
  padding: 120px 0;
  position: relative;
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px; color: var(--verde-escuro);`
const SectionLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo);
  margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 12px;
  
  &::before, &::after {
    content: ''; width: 30px; height: 1px; background: var(--amarelo); opacity: 0.5;
  }
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 1; color: var(--primary);
  span { color: var(--verde-escuro); }
  text-transform: uppercase;
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;
`
const Card = styled.div`
  background: var(--amarelo);
  padding: 48px 40px; border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative; overflow: hidden;
  
  &::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
    background: var(--primary); transform: scaleX(0); transition: transform 0.4s;
    transform-origin: left;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(26, 115, 231, 0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    &::before { transform: scaleX(1); }
  }
`
const SvcIcon = styled.div`
  font-size: 44px; margin-bottom: 28px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SvcTitle = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 24px; font-weight: 700; color: var(--verde-escuro); 
  margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;
`
const SvcText = styled.p`
  font-size: 16px; color: var(--verde); line-height: 1.7; font-weight: 500;
`

export default function ServicesSection() {
  return (
    <Bg id="copa">
      <Container>
        <SectionHeader>
          <SectionLabel>Soluções Premium</SectionLabel>
          <BigTitle>ALÉM DA<br /><span>COPA DO MUNDO</span></BigTitle>
        </SectionHeader>
        <Grid>
          {services.map((s, i) => (
            <Card key={i}>
              <SvcIcon>{s.icon}</SvcIcon>
              <SvcTitle>{s.title}</SvcTitle>
              <SvcText>{s.text}</SvcText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Bg>
  )
}
