import styled, { css } from 'styled-components'
import { packages } from '../data'

const Section = styled.section`
  padding: 100px 0; position: relative;
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`
  text-align: center; margin-bottom: 64px;
`
const SectionLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 4px;
  text-transform: uppercase; color: var(--verde);
  margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 12px;
  &::before { content: ''; width: 32px; height: 2px; background: var(--verde); }
`
const BigTitle = styled.h2`
  font-size: clamp(52px, 6vw, 88px); line-height: 0.95;
  color: var(--branco);
  span { color: var(--amarelo); }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2px; background: var(--preto-borda);
  border: 1px solid var(--preto-borda); border-radius: 4px; overflow: hidden;
`
const Card = styled.div`
  background: var(--preto-card); padding: 40px 32px;
  position: relative; transition: background 0.3s; cursor: pointer;
  &:hover { background: #161616; }
  ${p => p.$featured && css`
    background: linear-gradient(135deg, #001a0a, #002d12);
    &::before {
      content: 'MAIS VENDIDO';
      position: absolute; top: 16px; right: 16px;
      background: var(--amarelo); color: var(--preto);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 10px; font-weight: 700; letter-spacing: 2px; padding: 4px 10px; border-radius: 2px;
    }
  `}
`
const PkgIcon = styled.div`font-size: 36px; margin-bottom: 20px;`
const PkgName = styled.h3`font-size: 28px; color: var(--branco); margin-bottom: 8px;`
const PriceLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; color: var(--cinza); margin-bottom: 4px;
`
const Price = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px; color: var(--amarelo); line-height: 1; margin-bottom: 4px;
`
const PerPerson = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 12px; color: var(--cinza);
  margin-bottom: 28px;
`
const FeatureList = styled.ul`list-style: none; margin-bottom: 32px;`
const FeatureItem = styled.li`
  display: flex; align-items: center; gap: 10px;
  font-family: 'Barlow', sans-serif; font-size: 14px; color: var(--texto);
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
  &::before { content: '✓'; color: var(--verde); font-weight: 700; font-size: 12px; }
`
const CardCTA = styled.a`
  display: block; text-align: center;
  background: var(--verde); color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;
  padding: 14px; border-radius: 2px; transition: background 0.2s;
  &:hover { background: var(--verde-escuro); }
`

export default function PackagesSection() {
  return (
    <Section id="pacotes">
      <Container>
        <SectionHeader>
          <SectionLabel>Copa do Mundo 2026</SectionLabel>
          <BigTitle>ESCOLHA SEU<br /><span>PACOTE COPA</span></BigTitle>
        </SectionHeader>
        <Grid>
          {packages.map((pkg, i) => (
            <Card key={i} $featured={pkg.featured}>
              <PkgIcon>{pkg.icon}</PkgIcon>
              <PkgName>{pkg.name}</PkgName>
              <PriceLabel>{pkg.priceLabel}</PriceLabel>
              <Price>{pkg.price}</Price>
              <PerPerson>{pkg.perPerson}</PerPerson>
              <FeatureList>
                {pkg.features.map((f, j) => <FeatureItem key={j}>{f}</FeatureItem>)}
              </FeatureList>
              <CardCTA href="https://wa.me/5511951415853" target="_blank">
                💬 {pkg.cta}
              </CardCTA>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
