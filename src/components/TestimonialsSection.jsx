import styled, { css } from 'styled-components'
import { testimonials } from '../data'

const Section = styled.section`padding: 100px 0;`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 64px;`
const BigTitle = styled.h2`
  font-size: clamp(52px, 6vw, 88px); line-height: 0.95; color: var(--branco);
  span { color: var(--amarelo); }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2px;
  background: var(--preto-borda); border: 1px solid var(--preto-borda);
  border-radius: 4px; overflow: hidden;
`
const Card = styled.div`
  background: var(--preto-card); padding: 40px 32px;
  ${(p) => p.$featured && css`
    background: linear-gradient(135deg, rgba(0,156,59,0.12), rgba(0,0,0,0.8));
    border-left: 3px solid var(--verde);
  `}
`
const Stars = styled.div`color: var(--amarelo); font-size: 14px; margin-bottom: 16px; letter-spacing: 3px;`
const Text = styled.p`
  font-family: 'Barlow', sans-serif; font-size: 15px; color: var(--texto);
  line-height: 1.7; font-style: italic; margin-bottom: 24px;
`
const Author = styled.div`display: flex; align-items: center; gap: 12px;`
const Avatar = styled.div`
  width: 44px; height: 44px; border-radius: 50%;
  background: ${(p) => p.$color}; display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', sans-serif; font-size: 20px; color: #fff; flex-shrink: 0;
`
const AuthorName = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 16px; font-weight: 700;
  letter-spacing: 1px; color: var(--branco);
`
const Role = styled.div`font-size: 12px; color: var(--cinza); margin-top: 2px;`

export default function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--verde)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>Quem ja voou com a TFA</div>
          <BigTitle>O QUE DIZEM<br /><span>DA TFA</span></BigTitle>
        </SectionHeader>
        <Grid>
          {testimonials.map((t, i) => (
            <Card key={i} $featured={t.featured}>
              <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
              <Text>"{t.text}"</Text>
              <Author>
                <Avatar $color={t.color}>{t.initial}</Avatar>
                <div>
                  <AuthorName>{t.name}</AuthorName>
                  <Role>{t.role}</Role>
                </div>
              </Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
