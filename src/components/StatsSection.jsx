import styled from 'styled-components'
import { countUp } from '../styles'
import { useVisible } from '../hooks'
import { stats, partners } from '../data'

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #0d1a0f 0%, #080808 100%);
  border-top: 1px solid var(--preto-borda);
  border-bottom: 1px solid var(--preto-borda);
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2px; background: var(--preto-borda);
  border: 1px solid var(--preto-borda); border-radius: 4px; overflow: hidden;
  margin-bottom: 48px;
`
const Item = styled.div`
  background: var(--preto-card); padding: 40px 32px; text-align: center;
  animation: ${countUp} 0.6s ease forwards;
  animation-delay: ${p => p.$delay};
  animation-play-state: ${p => p.$visible ? 'running' : 'paused'};
  opacity: 0;
`
const BigNum = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 64px;
  color: var(--amarelo); line-height: 1;
`
const Desc = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px;
  letter-spacing: 2px; text-transform: uppercase; color: var(--cinza); margin-top: 8px;
`
const PartnerLogos = styled.div`
  display: flex; flex-wrap: wrap; gap: 24px;
  align-items: center; justify-content: center; opacity: 0.45;
`
const PartnerName = styled.span`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px;
  letter-spacing: 3px; text-transform: uppercase; color: var(--cinza);
`

export default function StatsSection() {
  const [ref, visible] = useVisible(0.3)
  return (
    <Section ref={ref}>
      <Container>
        <Grid>
          {stats.map((s, i) => (
            <Item key={i} $delay={`${i * 0.15}s`} $visible={visible}>
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
