import { useState, useEffect } from 'react'
import { GlobalStyle } from '../styles'
import { useCountdown } from '../hooks'
import Navbar from './Navbar'
import CountdownBanner from './CountdownBanner'
import Hero from './Hero'
import JuniorSection from './JuniorSection'
import Quiz from './Quiz'
import PackagesSection from './PackagesSection'
import ServicesSection from './ServicesSection'
import StatsSection from './StatsSection'
import TestimonialsSection from './TestimonialsSection'
import { ContactSection, Footer } from './ContactAndFooter'
import FloatingWA from './FloatingWA'
import EasyBanner from './EasyBanner'
import ParallaxDivider from './ParallaxDivider'

/* Imagens de Copa do Mundo / Futebol via Unsplash */
const IMG_STADIUM   = 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1800&q=80'
const IMG_FIELD     = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1800&q=80'
const IMG_CROWD     = 'https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?w=1800&q=80'

export default function TFAViagens() {
  const [scrolled, setScrolled] = useState(false)
  const countdown = useCountdown()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar scrolled={scrolled} />
      <CountdownBanner countdown={countdown} />

      {/* ── Hero ─────────────────────────────── */}
      <Hero />

      {/* ── Sobre / Ingressos ────────────────── */}
      <JuniorSection />

      {/* ── Por que TFA (3 pilares) ──────────── */}
      <EasyBanner />

      {/* ── Divider 1: Estádio ───────────────── */}
      <ParallaxDivider
        image={IMG_STADIUM}
        height="420px"
        label="Copa do Mundo 2026"
        title="ONDE OS CAMPEÕES SE ENCONTRAM"
        titleAccent="CAMPEÕES"
        subtitle="México · Canadá · Estados Unidos — 3 países, 16 cidades, 1 sonho."
      />

      {/* ── Quiz ─────────────────────────────── */}
      <Quiz />

      {/* ── Pacotes ──────────────────────────── */}
      <PackagesSection />

      {/* ── Divider 2: Campo ─────────────────── */}
      <ParallaxDivider
        image={IMG_FIELD}
        height="380px"
        overlay="linear-gradient(135deg, rgba(0,109,40,0.75) 0%, rgba(5,5,5,0.7) 100%)"
        label="Soluções TFA"
        title="MUITO ALÉM DA COPA DO MUNDO"
        titleAccent="COPA DO MUNDO"
        subtitle="Passagens nacionais, internacionais, roteiros na Europa e muito mais."
      />

      {/* ── Serviços ─────────────────────────── */}
      <ServicesSection />

      {/* ── Stats ────────────────────────────── */}
      <StatsSection />

      {/* ── Divider 3: Torcida ───────────────── */}
      <ParallaxDivider
        image={IMG_CROWD}
        height="360px"
        overlay="linear-gradient(135deg, rgba(5,5,5,0.8) 0%, rgba(0,109,40,0.5) 100%)"
        label="9.400+ clientes satisfeitos"
        title="VIVA ESSA EMOÇÃO COM A TFA"
        titleAccent="TFA"
        subtitle="Confie em quem já levou milhares de brasileiros para os maiores eventos do planeta."
      />

      {/* ── Depoimentos ──────────────────────── */}
      <TestimonialsSection />

      {/* ── Contato ──────────────────────────── */}
      <ContactSection />

      {/* ── Footer ───────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────── */}
      <FloatingWA />
    </>
  )
}
