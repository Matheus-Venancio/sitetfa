import styled from 'styled-components'
import { useCounter } from '../hooks'
import { stats, partners } from '../data'

const Section = styled.section`position: relative; overflow: hidden;`
const BgWrap = styled.div`
  position: relative; padding: 120px 0;
  &::before {
    content: ''; position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1800&q=80');
    background-size: cover; background-position: center; background-attachment: fixed;
    filter: brightness(0.15) saturate(0.5); z-index: 0;
    @media (max-width: 768px) { background-attachment: scroll; }
  }
  &::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to bottom,
      rgba(0,16,51,0.75) 0%, rgba(0,39,118,0.5) 50%, rgba(0,16,51,0.75) 100%);
    z-index: 1;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  position: relative; z-index: 2;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 72px;`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo); margin-bottom: 16px; opacity: 0.85;
`
const BigTitle = styled.h2`
  font-size: clamp(44px, 5vw, 72px); line-height: 0.95;
  color: var(--branco); text-transform: uppercase; letter-spacing: 2px;
  span { color: var(--amarelo); }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px; margin-bottom: 80px;
`

function StatItem({ num, label }) {
  const [ref, count] = useCounter(num, 2000)
  const prefix = num.startsWith('+') ? '+' : ''
  const suffix = num.replace(/[+\d.]/g, '').trim()
  return (
    <ItemBox ref={ref}>
      <BigNum>{prefix}{count.toLocaleString('pt-BR')}{suffix}</BigNum>
      <Desc>{label}</Desc>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px); padding: 48px 28px; text-align: center;
  border-radius: 16px; transition: all 0.35s ease;
  &:hover {
    border-color: rgba(255,223,0,0.4); transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.5); background: rgba(255,223,0,0.05);
  }
`
const BigNum = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 68px; color: var(--amarelo);
  line-height: 1; margin-bottom: 12px; text-shadow: 0 0 40px rgba(255,223,0,0.3);
`
const Desc = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; letter-spacing: 3px;
  text-transform: uppercase; color: rgba(255,255,255,0.7); font-weight: 600;
`
const PartnerWrap = styled.div`border-top: 1px solid rgba(255,223,0,0.2); padding-top: 56px;`
const PartnerLabel = styled.div`
  text-align: center; font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,255,255,0.35); margin-bottom: 32px;
`
const PartnerLogos = styled.div`display: flex; flex-wrap: wrap; align-items: center; justify-content: center;`
const PartnerName = styled.span`
  font-family: 'Bebas Neue', sans-serif; font-size: 18px; letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,255,255,0.2); padding: 8px 24px;
  border-right: 1px solid rgba(255,255,255,0.06); transition: all 0.3s ease;
  &:last-child { border-right: none; }
  &:hover { color: var(--amarelo); }
`

export default function StatsSection() {
  return (
    <Section>
      <BgWrap>
        <Container>
          <SectionHeader>
            <Label>Números que falam por nós</Label>
            <BigTitle>CONFIANÇA <span>COMPROVADA</span></BigTitle>
          </SectionHeader>
          <Grid>
            {stats.map((s, i) => <StatItem key={i} num={s.num} label={s.label} />)}
          </Grid>
          <PartnerWrap>
            <PartnerLabel>Companhias parceiras</PartnerLabel>
            <PartnerLogos>
              {partners.map(p => <PartnerName key={p}>{p}</PartnerName>)}
            </PartnerLogos>
          </PartnerWrap>
        </Container>
      </BgWrap>
    </Section>
  )
}
