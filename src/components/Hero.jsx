import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { fadeUp, glow, scrollIndicator } from '../styles'
import videoBg from '../img/VIDEO SITE TFA VIAGEM.mp4'

export const BtnPrimary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--amarelo); color: var(--primary-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; padding: 18px 40px; border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
  animation: ${glow} 3s ease infinite;
  &:hover { background: var(--ouro-claro); transform: translateY(-3px); box-shadow: 0 12px 30px rgba(255,223,0,0.35); }
`
export const BtnSecondary = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; padding: 18px 40px; border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.3); transition: all 0.25s;
  &:hover { border-color: var(--amarelo); color: var(--amarelo); transform: translateY(-3px); }
`

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  background: #001033;
`
const VideoBg = styled.video`
  position: absolute;
  top: -10%; left: 0;
  width: 100%; height: 120%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;
  will-change: transform;
`
const HeroBg = styled.div`
  position: absolute; inset: 0;
  
  z-index: 1;
`
const GoldLine = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--amarelo), transparent);
  z-index: 3;
`
const ScrollIndicator = styled.button`
  position: absolute; bottom: 36px; left: 50%;
  transform: translateX(-50%); z-index: 2;
  background: none; border: none; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,0.38); transition: color 0.3s;
  &:hover { color: var(--amarelo); }
  &::after {
    content: '';
    width: 1px; height: 52px;
    background: linear-gradient(to bottom, rgba(255,223,0,0.7), transparent);
    animation: ${scrollIndicator} 1.6s ease infinite;
  }
`

export default function Hero() {
  const videoRef = useRef(null)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeroSection id="home">
      <VideoBg ref={videoRef} src={videoBg} autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&q=80" />
      <HeroBg />
      <GoldLine />

      <ScrollIndicator onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
        Explore
      </ScrollIndicator>
    </HeroSection>
  )
}
