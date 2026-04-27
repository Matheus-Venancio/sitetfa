import styled from 'styled-components'


import logo from '../img/logo.png'

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 80px;
  background: ${p => p.$scrolled ? 'rgba(8, 8, 8, 0.95)' : 'transparent'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${p => p.$scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 768px) { padding: 0 20px; }
`
const Logo = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 2;
  img {
    height: 48px;
    width: auto;
    object-fit: contain;
  }
`
const Links = styled.div`
  display: flex; 
  gap: 40px; 
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  @media (max-width: 1100px) { display: none; }
`
const Link = styled.a`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; color: var(--branco);
  transition: all 0.3s ease;
  position: relative;
  opacity: 0.8;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0; width: 0; height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover { 
    color: var(--branco);
    opacity: 1;
    &::after { width: 100%; }
  }
`

const Button = styled.a`
  background: var(--primary);
  color: var(--branco);
  padding: 12px 28px;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 14px; letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--primary);
  white-space: nowrap;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(26, 115, 231, 0.3);
  
  &:hover {
    background: transparent;
    color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 115, 231, 0.4);
  }

  @media (max-width: 600px) {
    padding: 10px 16px;
    font-size: 11px;
    letter-spacing: 1px;
  }
`

export default function Navbar({ scrolled }) {
  return (
    <Nav $scrolled={scrolled}>
      <Logo href="#">
        <img src={logo} alt="TFA Viagens" />
      </Logo>
      
      <Links>
        <Link href="#sobre">Sobre</Link>
        <Link href="#copa">Copa</Link>
        <Link href="#pacotes">Pacotes</Link>
        <Link href="#contato">Contato</Link>
      </Links>

      <Button href="#quiz">
        Quero viver essa emoção
      </Button>
    </Nav>
  )
}

