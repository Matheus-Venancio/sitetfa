import { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import logo from '../img/logo.png'

const slideDown = keyframes`from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}`

const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px; height: 80px;
  background: ${p => p.$scrolled ? 'rgba(0,16,51,0.96)' : 'transparent'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${p => p.$scrolled ? '1px solid rgba(255,223,0,0.2)' : 'none'};
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 768px) { padding: 0 20px; }
`
const Logo = styled.a`
  display: flex; align-items: center; height: 100%; z-index: 2;
  img { height: 46px; width: auto; object-fit: contain; }
`
const Links = styled.div`
  display: flex; gap: 40px; align-items: center;
  position: absolute; left: 50%; transform: translateX(-50%); z-index: 1;
  @media (max-width: 1100px) { display: none; }
`
const Link = styled.a`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 14px; letter-spacing: 2.5px;
  text-transform: uppercase; color: var(--branco);
  transition: all 0.3s ease; position: relative; opacity: 0.75;
  &::after {
    content: ''; position: absolute; bottom: -5px; left: 0;
    width: 0; height: 2px;
    background: linear-gradient(90deg, var(--amarelo), var(--ouro-claro));
    transition: width 0.3s ease;
  }
  &:hover { opacity: 1; &::after { width: 100%; } }
`
const RightGroup = styled.div`display: flex; align-items: center; gap: 12px; z-index: 2;`
const Button = styled.a`
  background: var(--amarelo); color: var(--primary-dark);
  padding: 11px 26px; border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); white-space: nowrap;
  box-shadow: 0 4px 15px rgba(255,223,0,0.25);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255,223,0,0.45);
    background: var(--ouro-claro);
  }
  @media (max-width: 600px) { padding: 10px 16px; font-size: 11px; letter-spacing: 1px; }
`
const Hamburger = styled.button`
  display: none; flex-direction: column; justify-content: center; gap: 5px;
  width: 40px; height: 40px; background: none; border: none; cursor: pointer;
  padding: 6px; border-radius: 6px; transition: background 0.2s;
  &:hover { background: rgba(255,255,255,0.08); }
  @media (max-width: 1100px) { display: flex; }
`
const Bar = styled.span`
  display: block; height: 2px; border-radius: 2px;
  background: var(--branco); transition: all 0.3s ease;
  width: ${p => p.$mid ? '60%' : '100%'};
  ${p => p.$open && p.$top && css`transform: translateY(7px) rotate(45deg); width: 100%;`}
  ${p => p.$open && p.$mid && css`opacity: 0; transform: translateX(-10px);`}
  ${p => p.$open && p.$bot && css`transform: translateY(-7px) rotate(-45deg); width: 100%;`}
`
const MobileOverlay = styled.div`
  position: fixed; inset: 0; z-index: 998;
  background: rgba(0,16,51,0.98); backdrop-filter: blur(20px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: ${p => p.$open ? 1 : 0}; pointer-events: ${p => p.$open ? 'all' : 'none'};
  transition: opacity 0.35s ease;
`
const MobileLink = styled.a`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px; letter-spacing: 4px; color: var(--branco);
  padding: 20px 0; text-transform: uppercase;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  width: 100%; text-align: center; transition: color 0.2s;
  &:hover { color: var(--amarelo); }
`
const MobileWA = styled.a`
  margin-top: 40px; background: var(--amarelo); color: var(--primary-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900; font-size: 16px; letter-spacing: 2px; text-transform: uppercase;
  padding: 18px 48px; border-radius: 6px;
  box-shadow: 0 4px 20px rgba(255,223,0,0.35);
`

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  const close = () => setOpen(false)

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo href="#"><img src={logo} alt="TFA Viagens" /></Logo>
        <Links>
          <Link href="#sobre">Sobre</Link>
          <Link href="#copa">Serviços</Link>
          <Link href="#pacotes">Pacotes</Link>
          <Link href="#contato">Contato</Link>
        </Links>
        <RightGroup>
          <Button href="#quiz">Quero viver essa emoção</Button>
          <Hamburger onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Bar $top $open={open} /><Bar $mid $open={open} /><Bar $bot $open={open} />
          </Hamburger>
        </RightGroup>
      </Nav>
      <MobileOverlay $open={open}>
        <MobileLink href="#sobre" onClick={close}>Sobre</MobileLink>
        <MobileLink href="#copa" onClick={close}>Serviços</MobileLink>
        <MobileLink href="#pacotes" onClick={close}>Pacotes</MobileLink>
        <MobileLink href="#quiz" onClick={close}>Quiz</MobileLink>
        <MobileLink href="#contato" onClick={close}>Contato</MobileLink>
        <MobileWA href="https://wa.me/5511951415853" target="_blank" rel="noreferrer" onClick={close}>
          💬 Falar no WhatsApp
        </MobileWA>
      </MobileOverlay>
    </>
  )
}
