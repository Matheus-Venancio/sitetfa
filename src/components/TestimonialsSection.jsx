import styled, { css } from 'styled-components'
import { testimonials } from '../data'

const Section = styled.section`
  padding: 120px 0; background: var(--primary-dark);
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(0,156,59,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 72px;`
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
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px; margin-bottom: 64px;
`
const Card = styled.div`
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  padding: 44px; border-radius: 20px; display: flex; flex-direction: column;
  justify-content: space-between; transition: all 0.35s ease;
  position: relative; overflow: hidden;
  &::before {
    content: '"'; position: absolute; top: 20px; left: 30px;
    font-family: 'Bebas Neue', sans-serif; font-size: 100px; line-height: 1;
    color: rgba(255,223,0,0.07); pointer-events: none;
  }
  &:hover {
    border-color: rgba(255,223,0,0.3); transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.4); background: rgba(255,223,0,0.04);
  }
  ${p => p.$featured && css`border-color: rgba(255,223,0,0.3); background: rgba(255,223,0,0.04);`}
`
const Stars = styled.div`color: var(--amarelo); font-size: 14px; margin-bottom: 20px; letter-spacing: 3px;`
const Text = styled.p`
  font-family: 'Barlow', sans-serif; font-size: 16px; color: rgba(255,255,255,0.78);
  line-height: 1.8; font-weight: 300; margin-bottom: 36px; flex-grow: 1; position: relative; z-index: 1;
`
const Author = styled.div`display: flex; align-items: center; gap: 16px;`
const Avatar = styled.div`
  width: 52px; height: 52px; border-radius: 14px;
  background: ${p => p.$color}; display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', sans-serif; font-size: 26px; color: #fff; flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15);
`
const AuthorName = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 17px; font-weight: 700;
  letter-spacing: 1px; color: var(--branco); text-transform: uppercase;
`
const Role = styled.div`font-size: 13px; color: var(--amarelo); margin-top: 4px; opacity: 0.85; font-family: 'Barlow Condensed', sans-serif; letter-spacing: 1px;`
const BottomCTA = styled.div`
  text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.06);
`
const CTAText = styled.p`font-family: 'Barlow Condensed', sans-serif; font-size: 15px; letter-spacing: 1px; color: var(--cinza); margin-bottom: 20px;`
const CTALink = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,223,0,0.1); border: 1px solid rgba(255,223,0,0.35); color: var(--amarelo);
  font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;
  padding: 14px 32px; border-radius: 6px; transition: all 0.3s ease;
  &:hover { background: var(--amarelo); color: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,223,0,0.35); }
`

export default function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <Label>Quem já viajou com a TFA</Label>
          <BigTitle>DEPOIMENTOS<br /><span>REAIS</span></BigTitle>
        </SectionHeader>
        <Grid>
          {testimonials.map((t, i) => (
            <Card key={i} $featured={t.featured}>
              <div>
                <Stars>★★★★★</Stars>
                <Text>{t.text}</Text>
              </div>
              <Author>
                <Avatar $color={t.color}>{t.initial}</Avatar>
                <div><AuthorName>{t.name}</AuthorName><Role>{t.role}</Role></div>
              </Author>
            </Card>
          ))}
        </Grid>
        <BottomCTA>
          <CTAText>Mais de 9.400 clientes satisfeitos em todo o Brasil</CTAText>
          <CTALink href="https://wa.me/5511951415853" target="_blank" rel="noreferrer">
            💬 Falar com um Especialista
          </CTALink>
        </BottomCTA>
      </Container>
    </Section>
  )
}
