import { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  position: relative; overflow: hidden;
  height: ${p => p.$height || '480px'};
  display: flex; align-items: center; justify-content: center;
`
const BgImg = styled.div`
  position: absolute; top: -20%; left: 0;
  width: 100%; height: 140%;
  background-image: url('${p => p.$src}');
  background-size: cover; background-position: center;
  will-change: transform; z-index: 0;
`
const Overlay = styled.div`
  position: absolute; inset: 0;
  background: ${p => p.$overlay || 'linear-gradient(135deg, rgba(141, 151, 2, 0.82) 0%, rgba(0, 118, 63, 0.65) 100%)'};
  z-index: 1;
`
const GoldLineTop = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--amarelo), transparent); z-index: 3;
`
const GoldLineBot = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--amarelo), transparent); z-index: 3;
`
const Content = styled.div`
  position: relative; z-index: 2; text-align: center; padding: 0 24px; max-width: 900px;
`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px; letter-spacing: 5px; text-transform: uppercase;
  color: var(--amarelo); margin-bottom: 20px; opacity: 0.9;
`
const Title = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(40px, 6vw, 80px); line-height: 0.95;
  color: var(--branco); text-transform: uppercase; letter-spacing: 2px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
  span { color: var(--amarelo); }
`
const Sub = styled.p`
  font-size: clamp(15px, 1.8vw, 18px); color: rgba(255,255,255,0.7);
  font-weight: 300; margin-top: 16px; line-height: 1.7;
  max-width: 600px; margin-left: auto; margin-right: auto;
`

export default function ParallaxDivider({ image, label, title, subtitle, height, overlay, titleAccent }) {
  const bgRef  = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current && wrapRef.current) {
            const rect = wrapRef.current.getBoundingClientRect()
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              bgRef.current.style.transform = `translateY(${rect.top * 0.25}px)`
            }
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Wrap ref={wrapRef} $height={height}>
      <BgImg ref={bgRef} $src={image} />
      <Overlay $overlay={overlay} />
      <GoldLineTop />
      <GoldLineBot />
      {(label || title || subtitle) && (
        <Content>
          {label && <Label>{label}</Label>}
          {title && (
            <Title dangerouslySetInnerHTML={{
              __html: titleAccent
                ? title.replace(titleAccent, `<span>${titleAccent}</span>`)
                : title,
            }} />
          )}
          {subtitle && <Sub>{subtitle}</Sub>}
        </Content>
      )}
    </Wrap>
  )
}
