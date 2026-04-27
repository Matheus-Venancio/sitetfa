import styled, { css } from 'styled-components'
import { packages } from '../data'
import { borderGlow } from '../styles'

const Section = styled.section`
  padding: 120px 0;
  background: var(--verde);
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(0,156,59,0.1) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 50%, rgba(26,115,231,0.08) 0%, transparent 55%);
    pointer-events: none;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px;`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo); margin-bottom: 20px; opacity: 0.85;
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 0.95;
  color: var(--branco); text-transform: uppercase; letter-spacing: 2px;
  span { color: var(--amarelo); }
`
const Sub = styled.p`font-size: 17px; color: rgba(255,255,255,0.6); font-weight: 300; margin-top: 20px; line-height: 1.7;`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px;
`
const Card = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
  padding: 52px 36px; border-radius: 20px;
  position: relative; display: flex; flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 117, 117, 0.15), transparent);
  }
  &:hover {
    transform: translateY(-12px);
    border-color: rgba(255,223,0,0.4);
    box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,223,0,0.1) inset;
    background: rgba(255,255,255,0.08);
  }
  ${p => p.$featured && css`
    box-shadow: 0 0 40px rgba(255,223,0,0.1);
    animation: ${borderGlow} 3s ease infinite;
    &::before { background: linear-gradient(90deg, transparent, rgba(255,223,0,0.5), transparent); }
  `}
`
const FeaturedBadge = styled.div`
  position: absolute; top: 20px; right: 20px;
  background: var(--amarelo); color: var(--primary-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;
  padding: 5px 12px; border-radius: 100px;
`
const PkgIcon = styled.div`font-size: 48px; margin-bottom: 28px; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));`
const PkgName = styled.h3`
  font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: var(--branco);
  margin-bottom: 16px; text-transform: uppercase; letter-spacing: 2px;
`
const PriceLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 12px; color: var(--amarelo);
  margin-bottom: 6px; text-transform: uppercase; letter-spacing: 3px; opacity: 0.85;
`
const Price = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 62px; color: var(--branco);
  line-height: 1; margin-bottom: 6px;
  span { font-size: 22px; vertical-align: top; margin-right: 4px; color: var(--amarelo); }
`
const PerPerson = styled.div`font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 36px; font-weight: 300; letter-spacing: 1px;`
const Separator = styled.div`
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin-bottom: 28px;
`
const FeatureList = styled.ul`list-style: none; margin-bottom: 40px; flex-grow: 1;`
const FeatureItem = styled.li`
  display: flex; align-items: center; gap: 12px;
  font-family: 'Barlow', sans-serif; font-size: 15px;
  color: rgba(255,255,255,0.75); padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 400;
  &::before { content: '✓'; color: var(--amarelo); font-weight: 700; flex-shrink: 0; font-size: 13px; }
`
const CardCTA = styled.a`
  display: block; text-align: center;
  background: ${p => p.$featured ? 'var(--amarelo)' : 'transparent'};
  color: ${p => p.$featured ? 'var(--primary-dark)' : 'var(--branco)'};
  border: 1px solid ${p => p.$featured ? 'var(--amarelo)' : 'rgba(255,255,255,0.2)'};
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900; font-size: 14px; letter-spacing: 2.5px; text-transform: uppercase;
  padding: 17px; border-radius: 8px; transition: all 0.3s ease;
  &:hover {
    background: var(--amarelo); color: var(--primary-dark);
    border-color: var(--amarelo); transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255,223,0,0.35);
  }
`

export default function PackagesSection() {
  return (
    <Section id="pacotes">
      <Container>
        <SectionHeader>
          <Label>Experiências sob medida</Label>
          <BigTitle>PACOTES PARA A<br /><span>COPA DO MUNDO 2026</span></BigTitle>
          <Sub>Escolha a experiência ideal para viver a Copa como você merece.</Sub>
        </SectionHeader>
        <Grid>
          {packages.map((pkg, i) => (
            <Card key={i} $featured={pkg.featured}>
              {pkg.featured && <FeaturedBadge>⭐ Mais Vendido</FeaturedBadge>}
              <PkgIcon>{pkg.icon}</PkgIcon>
              <PkgName>{pkg.name}</PkgName>
              <PriceLabel>{pkg.priceLabel}</PriceLabel>
              <Price><span>R$</span>{pkg.price.replace('R$', '').trim()}</Price>
              <PerPerson>{pkg.perPerson}</PerPerson>
              <Separator />
              <FeatureList>
                {pkg.features.map((f, j) => <FeatureItem key={j}>{f}</FeatureItem>)}
              </FeatureList>
              <CardCTA href="https://wa.me/5519982395282" target="_blank" rel="noreferrer" $featured={pkg.featured}>
                Solicitar Reserva →
              </CardCTA>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
