import styled from 'styled-components'
import { services } from '../data'

const Bg = styled.section`
  background: linear-gradient(180deg, #0d0d0d 0%, var(--preto) 100%);
  padding: 100px 0;
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 64px;`
const SectionLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 4px;
  text-transform: uppercase; color: var(--verde);
  margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 12px;
`
const BigTitle = styled.h2`
  font-size: clamp(52px, 6vw, 88px); line-height: 0.95; color: var(--branco);
  span { color: var(--amarelo); }
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2px;
  background: var(--preto-borda); border: 1px solid var(--preto-borda); border-radius: 4px; overflow: hidden;
`
const Card = styled.div`
  background: var(--preto-card); padding: 40px 32px; transition: background 0.3s;
  &:hover { background: #161616; }
`
const SvcIcon = styled.div`font-size: 36px; margin-bottom: 20px;`
const SvcTitle = styled.h3`font-size: 22px; color: var(--branco); margin-bottom: 12px;`
const SvcText = styled.p`font-size: 14px; color: var(--cinza); line-height: 1.6;`

export default function ServicesSection() {
  return (
    <Bg id="copa">
      <Container>
        <SectionHeader>
          <SectionLabel>Além da Copa</SectionLabel>
          <BigTitle>NOSSOS<br /><span>SERVIÇOS</span></BigTitle>
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
