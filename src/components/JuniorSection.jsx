import styled from 'styled-components'
import ingressosImg from '../img/INGRESSOS.jpg'

const Section = styled.section`
  width: 100%;
  background: var(--preto);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  /* Garantindo que a imagem seja apresentada de forma premium */
  box-shadow: 0 0 50px rgba(0,0,0,0.5);
`

export default function JuniorSection() {
  return (
    <Section id="sobre">
      <Img src={ingressosImg} alt="Ingressos Copa do Mundo 2026" />
    </Section>
  )
}