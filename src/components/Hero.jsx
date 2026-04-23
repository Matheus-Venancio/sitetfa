import styled from 'styled-components'
import { fadeUp, glow } from '../styles'
import videoBg from '../img/VIDEO SITE TFA VIAGEM.mp4'

const HeroSection = styled.section`
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; background: #000;
`
const VideoBg = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1; /* Maximized visibility as requested */
  z-index: 0;
`
const HeroBg = styled.div`
  position: absolute; inset: 0;
  background: 
    linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 15%, transparent 50%),
    linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 30%);
  z-index: 1;
`

/* Restoring exports used by other components */
export const BtnPrimary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--amarelo); color: var(--preto);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; padding: 16px 36px; border-radius: 2px;
  transition: all 0.2s;
  animation: ${glow} 3s ease infinite;
  &:hover { background: var(--ouro-claro); transform: translateY(-2px); }
`
export const BtnSecondary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; padding: 16px 36px; border-radius: 2px;
  border: 1px solid rgba(255,255,255,0.2); transition: all 0.2s;
  &:hover { border-color: var(--amarelo); color: var(--amarelo); }
`

export default function Hero() {
  return (
    <HeroSection id="home">
      <VideoBg 
        src={videoBg} 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&q=80"
      />
      <HeroBg />
      {/* Content removed to focus on video as requested */}
    </HeroSection>
  )
}
