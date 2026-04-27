import styled from 'styled-components'
import { countUp } from '../styles'
import { useVisible } from '../hooks'
import { stats, partners } from '../data'

const Section = styled.section`
  padding: 100px 0;
  background: var(--preto);
  border-top: 1px solid var(--preto-borda);
  border-bottom: 1px solid var(--preto-borda);
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px; margin-bottom: 64px;
`
const Item = styled.div`
  background: var(--preto-card); padding: 48px 32px; text-align: center;
  border-radius: 16px; border: 1px solid var(--preto-borda);
  animation: ${countUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${p => p.$delay};
  animation-play-state: ${p => p.$visible ? 'running' : 'paused'};
  opacity: 0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  }
`
const BigNum = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 72px;
  color: var(--primary); line-height: 1;
  margin-bottom: 12px;
`
const Desc = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 14px;
  letter-spacing: 3px; text-transform: uppercase; color: var(--cinza); font-weight: 700;
`
const PartnerLogos = styled.div`
  display: flex; flex-wrap: wrap; gap: 32px;
  align-items: center; justify-content: center; opacity: 0.3;
  padding-top: 48px; border-top: 1px solid var(--preto-borda);
`
const PartnerName = styled.span`
  font-family: 'Barlow Condensed', sans-serif; font-size: 14px;
  letter-spacing: 4px; text-transform: uppercase; color: var(--cinza);
  transition: all 0.3s ease;
  &:hover { opacity: 1; color: var(--primary); }
`

export default function StatsSection() {
  const [ref, visible] = useVisible(0.3)
  return (
    <Section ref={ref}>
      <Container>
        <Grid>
          {stats.map((s, i) => (
            <Item key={i} $delay={`${i * 0.1}s`} $visible={visible}>
              <BigNum>{s.num}</BigNum>
              <Desc>{s.label}</Desc>
            </Item>
          ))}
        </Grid>
        <PartnerLogos>
          {partners.map(p => <PartnerName key={p}>{p}</PartnerName>)}
        </PartnerLogos>
      </Container>
    </Section>
  )
}
