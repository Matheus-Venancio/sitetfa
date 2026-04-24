import { useState } from 'react'
import styled from 'styled-components'
import { quizData } from '../data'
import { fadeUp, glow } from '../styles'
import { BtnPrimary } from './Hero'

const QuizSection = styled.section`
  background: linear-gradient(180deg, #ffffffff 0%, #ddfdfdff 35%, #248c97ff 100%);
  padding: 120px 0;
  position: relative;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(11, 221, 245, 0.2), transparent);
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
  background: ${p => p.$selected ? 'rgba(1, 127, 141, 0.15)' : 'rgba(255,255,255,0.03)'};
  border: 1px solid ${p => p.$selected ? 'var(--contrast)' : 'rgba(255,255,255,0.1)'};
  border-radius: 8px; padding: 32px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); color: var(--texto);
  backdrop-filter: blur(10px);
  background-color: var(--secondary);
  opacity: 0.8;
  
  &:hover { 
    border-color: var(--primary); 
    background: rgba(1, 127, 141, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  
  div { font-size: 40px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
  strong { 
    font-family: 'Barlow Condensed', sans-serif; 
    font-size: 18px; letter-spacing: 1px; color: var(--branco);
    text-transform: uppercase;
  }
  span { font-size: 13px; color: var(--amarelo); line-height: 1.5; }
`
const Result = styled.div`
  margin-top: 48px; padding: 40px;
  background: linear-gradient(135deg, rgba(1, 127, 141, 0.2), rgba(26, 115, 231, 0.1));
  border: 1px solid var(--primary); border-radius: 12px;
  animation: ${fadeUp} 0.5s ease-out;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
`

export default function Quiz() {
  const [answer, setAnswer] = useState(null)
  return (
    <QuizSection id="quiz">
      <Box>
        <div style={{ 
          fontFamily: "'Barlow Condensed',sans-serif", 
          fontSize: 13, fontWeight: 700, letterSpacing: 5, 
          textTransform: 'uppercase', color: 'var(--primary)', 
          marginBottom: 20, display: 'flex', alignItems: 'center', 
          justifyContent: 'center', gap: 15 
        }}>
          <span style={{ width: 30, height: 2, background: 'var(--verde)' }}></span>
          Planeje sua Torcida
          <span style={{ width: 30, height: 2, background: 'var(--amarelo)' }}></span>
        </div>
        <h2 style={{ 
          fontFamily: "'Bebas Neue',sans-serif", 
          fontSize: "clamp(48px, 6vw, 72px)", 
          color: "var(--verde)", 
          marginBottom: 16,
          letterSpacing: '2px',
          textShadow: '0 4px 12px rgba(0, 62, 3, 0.3)'
        }}>
          QUAL É O SEU <span style={{ color: 'var(--verde)' }}>PERFIL DE CAMPEÃO?</span>
        </h2>
        <p style={{ color: "var(--verde)", fontSize: 17, lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>⚽</div>
            <div style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: 32, color: "var(--branco)", 
              marginBottom: 12, letterSpacing: 2, fontWeight: 800 
            }}>
              ESTRATÉGIA <span style={{ color: 'var(--amarelo)' }}>DEFINIDA!</span>
            </div>
            <p style={{ color: "var(--texto)", fontSize: 18, lineHeight: 1.6, marginBottom: 32, fontWeight: 300 }}>
              {quizData.options[answer].result}
            </p>
            <BtnPrimary 
              href="https://wa.me/5511951415853" 
              target="_blank" 
              style={{ 
                display: "inline-flex", 
                background: 'var(--amarelo)', 
                color: '#000',
                padding: '18px 48px',
                fontSize: '16px'
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
