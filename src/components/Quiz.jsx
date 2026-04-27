import { useState } from 'react'
import styled, { css } from 'styled-components'
import { quizData } from '../data'
import { fadeUp, glow } from '../styles'
import { BtnPrimary } from './Hero'

const QuizSection = styled.section`
  background: linear-gradient(180deg, var(--preto) 0%, #001a50 50%, var(--verde) 100%);
  padding: 120px 0; position: relative;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,223,0,0.3), transparent);
  }
`
const Box = styled.div`max-width: 900px; margin: 0 auto; padding: 0 24px; text-align: center;`

const Options = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; margin-top: 50px;
`
const Option = styled.button`
  background: rgba(255,255,255,0.05);
  border: 1px solid ${p => p.$selected ? 'var(--amarelo)' : 'rgba(255,255,255,0.1)'};
  border-radius: 12px; padding: 32px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); color: var(--branco);
  backdrop-filter: blur(10px);
  &:hover {
    border-color: var(--amarelo);
    background: rgba(255,223,0,0.08);
    transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  div  { font-size: 44px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
  strong {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px; letter-spacing: 1px; color: var(--branco); text-transform: uppercase;
  }
  span { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.5; font-weight: 300; }
  ${p => p.$selected && css`
    border-color: var(--amarelo);
    background: rgba(255,223,0,0.1);
    box-shadow: 0 0 20px rgba(255,223,0,0.2);
  `}
`
const Result = styled.div`
  margin-top: 64px; padding: 48px;
  background: rgba(0,39,118,0.6);
  border: 1px solid rgba(255,223,0,0.35); border-radius: 20px;
  animation: ${fadeUp} 0.5s ease-out;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4); backdrop-filter: blur(12px);
`

export default function Quiz() {
  const [answer, setAnswer] = useState(null)
  return (
    <QuizSection id="quiz">
      <Box>
        <div style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700,
          letterSpacing: 5, textTransform: 'uppercase', color: 'var(--amarelo)',
          marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 15, opacity: 0.85,
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--amarelo)', display: 'block', opacity: 0.45 }} />
          Planeje sua Torcida
          <span style={{ width: 32, height: 1, background: 'var(--amarelo)', display: 'block', opacity: 0.45 }} />
        </div>

        <h2 style={{
          fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(48px, 6vw, 72px)',
          color: 'var(--branco)', marginBottom: 16, letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          QUAL O SEU <span style={{ color: 'var(--amarelo)' }}>PERFIL DE CAMPEÃO?</span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.6, maxWidth: 600, margin: '0 auto', fontWeight: 300 }}>
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
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 36,
              color: 'var(--branco)', marginBottom: 16, letterSpacing: 2,
            }}>
              ESTRATÉGIA <span style={{ color: 'var(--amarelo)' }}>DEFINIDA!</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 19, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
              {quizData.options[answer].result}
            </p>
            <BtnPrimary
              href="https://wa.me/5511951415853"
              target="_blank"
              style={{ display: 'inline-flex', padding: '20px 56px', fontSize: '16px', borderRadius: '8px' }}
            >
              🚀 Garantir minha vaga agora
            </BtnPrimary>
          </Result>
        )}
      </Box>
    </QuizSection>
  )
}
