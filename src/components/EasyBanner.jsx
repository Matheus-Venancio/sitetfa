import styled from 'styled-components'

const Banner = styled.section`
  background: var(--primary);
  padding: 50px 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  
  /* Adicionando um leve brilho animado para dar premium feel */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: none;
    animation: shine 4s infinite linear;
  }

  @keyframes shine {
    to { left: 200%; }
  }
`

const Title = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(26px, 4.5vw, 52px);
  color: var(--branco);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 4px 15px rgba(0,0,0,0.2);
  line-height: 1.1;
`

export default function EasyBanner() {
  return (
    <Banner>
      <Title>Te levamos para a copa do mundo com facilidade</Title>
    </Banner>
  )
}
