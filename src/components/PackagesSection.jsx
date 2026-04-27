import styled, { css } from 'styled-components'
import { packages } from '../data'

const Section = styled.section`
  padding: 120px 0;
  background: var(--verde-escuro);
  position: relative;
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px;`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo);
  margin-bottom: 20px;
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 1; color: var(--branco);
  span { color: var(--amarelo); }
  text-transform: uppercase;
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;
`
const Card = styled.div`
  background: var(--verde);
  padding: 56px 40px; border-radius: 20px;

  position: relative; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }

  ${p => p.$featured && css`
    border-color: rgba(26, 115, 231, 0.4);
   
    
    &::before {
      content: 'MAIS EXCLUSIVO';
      position: absolute; top: 24px; right: 24px;
      background: var(--primary); color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 11px; font-weight: 700; letter-spacing: 2px;
      padding: 6px 12px; border-radius: 6px;
    }
  `}
`
const PkgIcon = styled.div`font-size: 48px; margin-bottom: 32px;`
const PkgName = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 32px; font-weight: 700; color: var(--branco); 
  margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;
`
const PriceLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; color: var(--amarelo); margin-bottom: 8px;
  text-transform: uppercase; letter-spacing: 2px;
`
const Price = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px; color: var(--branco); line-height: 1; margin-bottom: 8px;
  span { font-size: 24px; vertical-align: top; margin-right: 4px; }
`
const PerPerson = styled.div`
  font-size: 14px; color: var(--amarelo); margin-bottom: 40px;
  font-weight: 300;
`
const FeatureList = styled.ul`list-style: none; margin-bottom: 48px; flex-grow: 1; color: var(--amarelo);`
const FeatureItem = styled.li`
  display: flex; align-items: center; gap: 14px;
  font-family: 'Barlow', sans-serif; font-size: 16px; color: var(--texto);
  padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  font-weight: 600;
  
  &::before {
    content: '→'; color: var(--primary); font-weight: 700;
  }
`
const CardCTA = styled.a`
  display: block; text-align: center;
  background: var(--amarelo); color: var(--verde-escuro);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 16px; letter-spacing: 2px; text-transform: uppercase;
  padding: 18px; border-radius: 10px; transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(26, 115, 231, 0.3);
  
  &:hover {
    background: var(--branco);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 115, 231, 0.5);
  }
`

export default function PackagesSection() {
  return (
    <Section id="pacotes">
      <Container>
        <SectionHeader>
          <Label>Experiências sob medida</Label>
          <BigTitle>PACOTES PARA A<br /><span>COPA DO MUNDO 2026</span></BigTitle>
        </SectionHeader>
        <Grid>
          {packages.map((pkg, i) => (
            <Card key={i} $featured={pkg.featured}>
              <PkgIcon>{pkg.icon}</PkgIcon>
              <PkgName>{pkg.name}</PkgName>
              <PriceLabel>{pkg.priceLabel}</PriceLabel>
              <Price><span>R$</span>{pkg.price.replace('R$', '')}</Price>
              <PerPerson>{pkg.perPerson}</PerPerson>
              <FeatureList>
                {pkg.features.map((f, j) => <FeatureItem key={j}>{f}</FeatureItem>)}
              </FeatureList>
              <CardCTA href="https://wa.me/5511951415853" target="_blank">
                Solicitar Reserva
              </CardCTA>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
