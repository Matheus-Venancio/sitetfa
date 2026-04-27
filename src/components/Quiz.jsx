import { useState } from 'react'
import styled from 'styled-components'
import { quizData } from '../data'
import { fadeUp, glow } from '../styles'
import { BtnPrimary } from './Hero'

const QuizSection = styled.section`
  background: linear-gradient(180deg, #FFFFFF 0%, #f3f7fa 20%, #006d28 100%);
  padding: 120px 0;
  position: relative;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(26, 231, 53, 0.2), transparent);
  }
`
const Box = styled.div`
  max-width: 900px; margin: 0 auto; padding: 0 24px; text-align: center;
`
const Options = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; 
  margin-top: 50px;
`
const Option = styled.button`
  background: ${p => p.$selected ? 'rgba(26, 115, 231, 0.1)' : 'rgba(255,255,255,0.03)'};
  border: 1px solid ${p => p.$selected ? 'var(--primary)' : 'rgba(0,0,0,0.1)'};
  border-radius: 12px; padding: 32px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); color: var(--preto);
  backdrop-filter: blur(10px);
  
  &:hover { 
    border-color: var(--primary); 
    background: rgba(26, 115, 231, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  div { font-size: 44px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1)); }
  strong { 
    font-family: 'Barlow Condensed', sans-serif; 
    font-size: 20px; letter-spacing: 1px; color: #0a2147;
    text-transform: uppercase;
  }
  span { font-size: 14px; color: var(--cinza); line-height: 1.5; font-weight: 300; }

  ${p => p.$selected && css`
    color: var(--primary);
    span { color: var(--primary); opacity: 0.8; }
  `}
`
const Result = styled.div`
  margin-top: 64px; padding: 48px;
  background: linear-gradient(135deg, var(--primary-dark), #000);
  border: 1px solid var(--primary); border-radius: 20px;
  animation: ${fadeUp} 0.5s ease-out;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);
`

export default function Quiz() {
  const [answer, setAnswer] = useState(null)
  return (
    <QuizSection id="quiz">
      <Box>
        <div style={{ 
          fontFamily: "'Barlow Condensed',sans-serif", 
          fontSize: 14, fontWeight: 700, letterSpacing: 5, 
          textTransform: 'uppercase', color: 'var(--verde)', 
          marginBottom: 20, display: 'flex', alignItems: 'center', 
          justifyContent: 'center', gap: 15 
        }}>
          <span style={{ width: 30, height: 1, background: 'var(--amarelo)', opacity: 0.5 }}></span>
          Planeje sua Torcida
          <span style={{ width: 30, height: 1, background: 'var(--amarelo)', opacity: 0.5 }}></span>
        </div>
        <h2 style={{ 
          fontFamily: "'Bebas Neue',sans-serif", 
          fontSize: "clamp(48px, 6vw, 72px)", 
          color: 'var(--verde)' , 
          marginBottom: 16,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          QUAL O SEU <span style={{ color: 'var(--primary)' }}>PERFIL DE CAMPEÃO?</span>
        </h2>
        <p style={{ color: "var(--primary)", fontSize: 18, lineHeight: 1.6, maxWidth: 600, margin: '0 auto', fontWeight: 300 }}>
          Escolha seu estilo e nós montamos o roteiro perfeito para você viver a Copa do Mundo 2026.
        </p>
        <Options>
          {quizData.options.map((opt, i) => (
            <Option key={i} $selected={answer === i} onClick={() => setAnswer(i)}>
              <div>{opt.emoji}</div>
              <strong>{opt.label}</strong>
              <span>{opt.desc}</span>
            </Option>
          ))}
        </Options>
        {answer !== null && (
          <Result>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🏅</div>
            <div style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: 36, color: "var(--branco)", 
              marginBottom: 16, letterSpacing: 2 
            }}>
              ESTRATÉGIA <span style={{ color: 'var(--primary)' }}>DEFINIDA!</span>
            </div>
            <p style={{ color: "var(--texto)", fontSize: 19, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
              {quizData.options[answer].result}
            </p>
            <BtnPrimary 
              href="https://wa.me/5511951415853" 
              target="_blank" 
              style={{ 
                display: "inline-flex", 
                background: 'var(--primary)', 
                color: '#fff',
                padding: '20px 56px',
                fontSize: '16px',
                borderRadius: '8px'
              }}
            >
              🚀 Garantir minha vaga agora
            </BtnPrimary>
          </Result>
        )}
      </Box>
    </QuizSection>
  )
}
