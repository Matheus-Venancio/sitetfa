import styled, { css } from 'styled-components'
import { testimonials } from '../data'

const Section = styled.section`
  padding: 120px 0;
  background: var(--branco);
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
  font-size: clamp(48px, 6vw, 80px); line-height: 1; color: var(--primary);
  span { color: var(--verde-escuro); }
  text-transform: uppercase;
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;
`
const Card = styled.div`
  background: var(--amarelo);
  padding: 48px; border-radius: 16px;
  transition: all 0.3s ease;
  display: flex; flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  }

  ${(p) => p.$featured && css`
   
  `}
`
const Stars = styled.div`
  color: var(--ouro); font-size: 16px; margin-bottom: 24px; letter-spacing: 4px;
`
const Text = styled.p`
  font-family: 'Barlow', sans-serif; font-size: 17px; color: var(--verde-escuro);
  line-height: 1.8; font-weight: 500; margin-bottom: 32px;
  position: relative;
  
  &::before {
    content: '"'; position: absolute; top: -20px; left: -20px;
    font-size: 60px; color: var(--primary); opacity: 0.2; font-family: serif;
  }
`
const Author = styled.div`display: flex; align-items: center; gap: 16px;`
const Avatar = styled.div`
  width: 52px; height: 52px; border-radius: 12px;
  background: ${(p) => p.$color}; display: flex; align-items: center; justify-content: center;
  font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: #fff; flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`
const AuthorInfo = styled.div``
const AuthorName = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700;
  letter-spacing: 1px; color: var(--verde-escuro); text-transform: uppercase;
`
const Role = styled.div`font-size: 13px; color: var(--verde); margin-top: 2px;`

export default function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <Label>Experiência de quem já viajou</Label>
          <BigTitle>DEPOIMENTOS<br /><span>TFA VIAGENS</span></BigTitle>
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
                <AuthorInfo>
                  <AuthorName>{t.name}</AuthorName>
                  <Role>{t.role}</Role>
                </AuthorInfo>
              </Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
