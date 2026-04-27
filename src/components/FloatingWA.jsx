import styled from 'styled-components'
import { pulse } from '../styles'

const Btn = styled.a`
  position: fixed; bottom: 32px; right: 32px; z-index: 997;
  width: 60px; height: 60px; border-radius: 50%;
  background: #25d366; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  animation: ${pulse} 2s ease infinite; transition: transform 0.2s;
  &:hover { transform: scale(1.1); }
  @media (max-width: 768px) { bottom: 20px; right: 20px; width: 52px; height: 52px; font-size: 24px; }
`

export default function FloatingWA() {
  return (
    <Btn href="https://wa.me/5519982395282" target="_blank" title="Fale conosco no WhatsApp">
      💬
    </Btn>
  )
}
