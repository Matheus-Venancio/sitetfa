import { useState } from 'react'
import styled from 'styled-components'
import { socialLinks } from '../data'

const ContactWrap = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, var(--preto) 100%);
  border-top: 1px solid var(--preto-borda);
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 64px;`
const BigTitle = styled.h2`
  font-size: clamp(52px, 6vw, 88px); line-height: 0.95; color: var(--branco);
  span { color: var(--amarelo); }
`
const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 40px; }
`
const WABox = styled.a`
  display: flex; align-items: center; gap: 20px;
  background: linear-gradient(135deg, #003d1a, #00511f);
  border: 1px solid rgba(0,156,59,0.4); border-radius: 4px;
  padding: 24px; margin-bottom: 32px; transition: transform 0.2s;
  &:hover { transform: translateY(-2px); }
`
const WAIcon = styled.div`font-size: 40px;`
const WATitle = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 2px; color: var(--branco);
`
const WASub = styled.div`font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 4px;`
const InfoList = styled.div`display: flex; flex-direction: column; gap: 24px;`
const InfoItem = styled.div`display: flex; align-items: flex-start; gap: 16px;`
const InfoIcon = styled.div`font-size: 24px; flex-shrink: 0; margin-top: 2px;`
const InfoLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 11px;
  letter-spacing: 2px; text-transform: uppercase; color: var(--cinza); margin-bottom: 4px;
`
const InfoValue = styled.div`font-size: 14px; color: var(--branco);`

/* Form */
const FormGroup = styled.div`margin-bottom: 20px;`
const Label = styled.label`
  display: block; font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--cinza); margin-bottom: 8px;
`
const Input = styled.input`
  width: 100%; background: var(--preto-card);
  border: 1px solid var(--preto-borda); border-radius: 2px;
  padding: 12px 16px; color: var(--texto);
  font-family: 'Barlow', sans-serif; font-size: 14px;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: var(--verde); }
`
const Select = styled.select`
  width: 100%; background: var(--preto-card);
  border: 1px solid var(--preto-borda); border-radius: 2px;
  padding: 12px 16px; color: var(--texto);
  font-family: 'Barlow', sans-serif; font-size: 14px;
  transition: border-color 0.2s; cursor: pointer;
  &:focus { outline: none; border-color: var(--verde); }
`
const Textarea = styled.textarea`
  width: 100%; background: var(--preto-card);
  border: 1px solid var(--preto-borda); border-radius: 2px;
  padding: 12px 16px; color: var(--texto);
  font-family: 'Barlow', sans-serif; font-size: 14px;
  min-height: 120px; resize: vertical; transition: border-color 0.2s;
  &:focus { outline: none; border-color: var(--verde); }
`
const SubmitBtn = styled.button`
  width: 100%; background: var(--verde); color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 2px;
  text-transform: uppercase; padding: 16px; border: none;
  border-radius: 2px; cursor: pointer; transition: background 0.2s;
  &:hover { background: var(--verde-escuro); }
`

/* Footer */
const FooterEl = styled.footer`
  background: #040404; border-top: 1px solid var(--preto-borda); padding: 64px 0 40px;
`
const FooterGrid = styled.div`
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
  margin-bottom: 48px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; gap: 32px; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const FLogo = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 40px; letter-spacing: 4px; color: var(--branco);
  margin-bottom: 16px; span { color: var(--amarelo); }
`
const FDesc = styled.p`font-size: 14px; color: var(--cinza); line-height: 1.7; max-width: 280px;`
const FSocial = styled.div`display: flex; gap: 12px; margin-top: 24px;`
const SLink = styled.a`
  width: 40px; height: 40px; border-radius: 2px;
  background: var(--preto-card); border: 1px solid var(--preto-borda);
  display: flex; align-items: center; justify-content: center; font-size: 18px;
  transition: border-color 0.2s;
  &:hover { border-color: var(--amarelo); }
`
const FHeading = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase; color: var(--ouro);
  margin-bottom: 20px;
`
const FLink = styled.a`
  display: block; font-size: 14px; color: var(--cinza); margin-bottom: 10px;
  transition: color 0.2s; &:hover { color: var(--branco); }
`
const FooterBottom = styled.div`
  border-top: 1px solid var(--preto-borda); padding-top: 24px;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
`
const FCopy = styled.div`font-size: 12px; color: var(--cinza);`
const Certs = styled.div`display: flex; gap: 16px; flex-wrap: wrap;`
const CertBadge = styled.span`
  font-family: 'Barlow Condensed', sans-serif; font-size: 12px; letter-spacing: 1px;
  color: var(--cinza); background: var(--preto-card);
  border: 1px solid var(--preto-borda); padding: 4px 10px; border-radius: 2px;
`

export function ContactSection() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', destino: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Ola! Sou ${form.nome}. Tenho interesse em: ${form.destino}. ${form.mensagem}`
    window.open(`https://wa.me/5511951415853?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  return (
    <ContactWrap id="contato">
      <Container>
        <SectionHeader>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--verde)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>Vamos juntos</div>
          <BigTitle>FALE COM<br /><span>A TFA</span></BigTitle>
          <p style={{ color: 'var(--cinza)', fontSize: 15, marginTop: 12 }}>
            Nossos agentes respondem em minutos — pelo WhatsApp ou pelo formulario abaixo.
          </p>
        </SectionHeader>
        <Grid>
          <div>
            <WABox href="https://wa.me/5511951415853" target="_blank">
              <WAIcon>💬</WAIcon>
              <div>
                <WATitle>FALAR NO WHATSAPP</WATitle>
                <WASub>Clique e fale agora com um agente TFA</WASub>
              </div>
            </WABox>
            <InfoList>
              <InfoItem>
                <InfoIcon>📧</InfoIcon>
                <div>
                  <InfoLabel>E-mail</InfoLabel>
                  <InfoValue>comercial@tfaviagens.com.br</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📱</InfoIcon>
                <div>
                  <InfoLabel>WhatsApp</InfoLabel>
                  <InfoValue>+55 (11) 95141-5853</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>🌐</InfoIcon>
                <div>
                  <InfoLabel>Redes Sociais</InfoLabel>
                  <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
                    {socialLinks.map(s => (
                      <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--cinza)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 1, textTransform: 'uppercase', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--amarelo)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--cinza)'}
                      >
                        {s.icon} {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </InfoItem>
            </InfoList>
          </div>
          <div>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
                <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40, color: 'var(--branco)' }}>MENSAGEM ENVIADA!</h2>
                <p style={{ color: 'var(--cinza)', marginTop: 12 }}>Um agente TFA vai te responder em instantes pelo WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Seu Nome</Label>
                  <Input placeholder="Como podemos te chamar?" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                </FormGroup>
                <FormGroup>
                  <Label>WhatsApp</Label>
                  <Input placeholder="(11) 99999-9999" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} required />
                </FormGroup>
                <FormGroup>
                  <Label>Interesse</Label>
                  <Select value={form.destino} onChange={e => setForm({ ...form, destino: e.target.value })} required>
                    <option value="">Selecione um pacote...</option>
                    <option>Pacote Copa Completo</option>
                    <option>Pacote Voo + Hotel</option>
                    <option>Pacote VIP</option>
                    <option>Passagem Nacional</option>
                    <option>Viagem Internacional</option>
                    <option>Assessoria de Emigracao</option>
                    <option>Outro</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Mensagem</Label>
                  <Textarea placeholder="Conte mais sobre o que voce precisa..." value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
                </FormGroup>
                <SubmitBtn type="submit">💬 Enviar pelo WhatsApp</SubmitBtn>
              </form>
            )}
          </div>
        </Grid>
      </Container>
    </ContactWrap>
  )
}

export function Footer() {
  return (
    <FooterEl>
      <Container>
        <FooterGrid>
          <div>
            <FLogo>TFA<span>.</span></FLogo>
            <FDesc>
              Ha mais de 10 anos conectando Brasileiros ao mundo. Especialistas em passagens,
              pacotes, emigracao e agora — na maior Copa do Mundo da historia.
            </FDesc>
            <FSocial>
              <SLink href="https://www.instagram.com/tfaviagens/" target="_blank">📷</SLink>
              <SLink href="http://facebook.com/tfaviagens/" target="_blank">👍</SLink>
              <SLink href="https://www.tiktok.com/@tfaviagensoficial" target="_blank">🎵</SLink>
            </FSocial>
          </div>
          <div>
            <FHeading>Pacotes Copa</FHeading>
            <FLink href="#pacotes">Pacote Completo</FLink>
            <FLink href="#pacotes">Voo + Hotel</FLink>
            <FLink href="#pacotes">Hospedagem</FLink>
            <FLink href="#pacotes">Pacote VIP</FLink>
          </div>
          <div>
            <FHeading>Servicos</FHeading>
            <FLink href="#copa">Passagens Nacionais</FLink>
            <FLink href="#copa">Viagens Internacionais</FLink>
            <FLink href="#copa">Europa & Oriente Medio</FLink>
            <FLink href="#copa">Seguro Viagem</FLink>
            <FLink href="#copa">Emigracao</FLink>
          </div>
          <div>
            <FHeading>Contato</FHeading>
            <FLink href="https://wa.me/5511951415853">WhatsApp</FLink>
            <FLink href="mailto:comercial@tfaviagens.com.br">E-mail</FLink>
            <FLink href="https://linktr.ee/tfaviagenofc">Agentes</FLink>
          </div>
        </FooterGrid>
        <FooterBottom>
          <FCopy>© 2024/2025 TFA Viagens — CNPJ 36.746.205/0001-68 — Todos os direitos reservados.</FCopy>
          <Certs>
            <CertBadge>🛡️ SSL Seguro</CertBadge>
            <CertBadge>📋 Cadastur</CertBadge>
            <CertBadge>✅ IATA</CertBadge>
          </Certs>
        </FooterBottom>
      </Container>
    </FooterEl>
  )
}
