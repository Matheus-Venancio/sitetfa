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
      <Hero />
      <JuniorSection />
      <EasyBanner />
      <Quiz />
      <PackagesSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWA />
    </>
  )
}
