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
  height: 72px;
  background: ${p => p.$scrolled ? 'rgba(8,8,8,0.97)' : 'transparent'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${p => p.$scrolled ? '1px solid #1e1e1e' : 'none'};
  transition: all 0.4s ease;
  @media (max-width: 768px) { padding: 0 20px; }
`
const Logo = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 45px;
    width: auto;
    object-fit: contain;
  }
`
const Links = styled.div`
  display: flex; gap: 48px; align-items: center;
  margin: 0 auto; /* Center the links */
  @media (max-width: 900px) { display: none; }
`
const Link = styled.a`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 3px;
  text-transform: uppercase; color: var(--branco);
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0; width: 0; height: 2px;
    background: var(--amarelo);
    transition: width 0.3s ease;
  }
  
  &:hover { 
    color: var(--amarelo);
    &::after { width: 100%; }
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
      <div style={{ width: '45px' }} /> {/* Spacer to keep logo centered if needed, but margin: auto handles it */}
    </Nav>
  )
}
