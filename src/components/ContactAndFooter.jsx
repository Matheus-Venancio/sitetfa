import { useState } from 'react'
import styled from 'styled-components'
import { socialLinks } from '../data'

const ContactWrap = styled.section`
  padding: 120px 0;
  background: var(--preto);
  border-top: 1px solid var(--preto-borda);
  position: relative;
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px;`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--primary);
  margin-bottom: 20px;
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 1; color: var(--branco);
  span { color: var(--primary); }
  text-transform: uppercase;
`
const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 60px; }
`
const WABox = styled.a`
  display: flex; align-items: center; gap: 24px;
  background: linear-gradient(135deg, var(--primary-dark), #000);
  border: 1px solid rgba(26, 115, 231, 0.3); border-radius: 12px;
  padding: 32px; margin-bottom: 40px; transition: all 0.3s ease;
  
  &:hover { 
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 25px rgba(26, 115, 231, 0.2);
  }
`
const WAIcon = styled.div`font-size: 44px;`
const WATitle = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 2px; color: var(--branco);
`
const WASub = styled.div`font-size: 14px; color: var(--cinza); margin-top: 6px;`
const InfoList = styled.div`display: flex; flex-direction: column; gap: 32px;`
const InfoItem = styled.div`display: flex; align-items: flex-start; gap: 20px;`
const InfoIcon = styled.div`font-size: 28px; color: var(--primary); flex-shrink: 0;`
const InfoLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 12px;
  letter-spacing: 2px; text-transform: uppercase; color: var(--primary); margin-bottom: 6px;
`
const InfoValue = styled.div`font-size: 16px; color: var(--branco); font-weight: 300;`

/* Form */
const FormGroup = styled.div`margin-bottom: 24px;`
const FormLabel = styled.label`
  display: block; font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--cinza); margin-bottom: 10px;
`
const Input = styled.input`
  width: 100%; background: #0a0a0a;
  border: 1px solid var(--preto-borda); border-radius: 8px;
  padding: 16px 20px; color: var(--branco);
  font-family: 'Barlow', sans-serif; font-size: 15px;
  transition: all 0.3s ease;
  &:focus { outline: none; border-color: var(--primary); background: #0f0f0f; }
`
const Select = styled.select`
  width: 100%; background: #0a0a0a;
  border: 1px solid var(--preto-borda); border-radius: 8px;
  padding: 16px 20px; color: var(--branco);
  font-family: 'Barlow', sans-serif; font-size: 15px;
  transition: all 0.3s ease; cursor: pointer;
  &:focus { outline: none; border-color: var(--primary); background: #0f0f0f; }
`
const Textarea = styled.textarea`
  width: 100%; background: #0a0a0a;
  border: 1px solid var(--preto-borda); border-radius: 8px;
  padding: 16px 20px; color: var(--branco);
  font-family: 'Barlow', sans-serif; font-size: 15px;
  min-height: 140px; resize: vertical; transition: all 0.3s ease;
  &:focus { outline: none; border-color: var(--primary); background: #0f0f0f; }
`
const SubmitBtn = styled.button`
  width: 100%; background: var(--primary); color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 16px; letter-spacing: 3px;
  text-transform: uppercase; padding: 20px; border: none;
  border-radius: 8px; cursor: pointer; transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(26, 115, 231, 0.3);
  &:hover { background: #1a65cc; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(26, 115, 231, 0.5); }
`

/* Footer */
const FooterEl = styled.footer`
  background: #000; border-top: 1px solid var(--preto-borda); padding: 100px 0 50px;
`
const FooterGrid = styled.div`
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px;
  margin-bottom: 80px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; gap: 40px; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const FLogo = styled.div`
  font-family: 'Bebas Neue', sans-serif; font-size: 44px; letter-spacing: 4px; color: var(--branco);
  margin-bottom: 24px; span { color: var(--primary); }
`
const FDesc = styled.p`font-size: 15px; color: var(--cinza); line-height: 1.8; max-width: 320px; font-weight: 300;`
const FSocial = styled.div`display: flex; gap: 16px; margin-top: 32px;`
const SLink = styled.a`
  width: 44px; height: 44px; border-radius: 10px;
  background: #0d0d0d; border: 1px solid var(--preto-borda);
  display: flex; align-items: center; justify-content: center; font-size: 20px;
  transition: all 0.3s ease;
  &:hover { border-color: var(--primary); transform: translateY(-3px); color: var(--primary); }
`
const FHeading = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase; color: var(--branco);
  margin-bottom: 28px;
`
const FLink = styled.a`
  display: block; font-size: 15px; color: var(--cinza); margin-bottom: 14px;
  transition: all 0.2s ease; font-weight: 300;
  &:hover { color: var(--primary); padding-left: 5px; }
`
const FooterBottom = styled.div`
  border-top: 1px solid var(--preto-borda); padding-top: 40px;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px;
`
const FCopy = styled.div`font-size: 13px; color: var(--cinza); font-weight: 300;`
const Certs = styled.div`display: flex; gap: 16px; flex-wrap: wrap;`
const CertBadge = styled.span`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; letter-spacing: 1px;
  color: var(--cinza); background: #0d0d0d;
  border: 1px solid var(--preto-borda); padding: 6px 14px; border-radius: 6px;
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
          <Label>Atendimento Personalizado</Label>
          <BigTitle>FALE COM UM<br /><span>ESPECIALISTA</span></BigTitle>
          <p style={{ color: 'var(--cinza)', fontSize: 17, marginTop: 20, maxWidth: 600, margin: '20px auto 0', lineHeight: 1.6 }}>
            Nossa equipe está pronta para desenhar o seu roteiro perfeito para a Copa de 2026.
          </p>
        </SectionHeader>
        <Grid>
          <div>
            <WABox href="https://wa.me/5511951415853" target="_blank">
              <WAIcon>💬</WAIcon>
              <div>
                <WATitle>WHATSAPP CONCIERGE</WATitle>
                <WASub>Atendimento prioritário em instantes</WASub>
              </div>
            </WABox>
            <InfoList>
              <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <div>
                  <InfoLabel>E-mail Corporativo</InfoLabel>
                  <InfoValue>comercial@tfaviagens.com.br</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <div>
                  <InfoLabel>Central de Atendimento</InfoLabel>
                  <InfoValue>+55 (11) 95141-5853</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <div>
                  <InfoLabel>Siga a TFA</InfoLabel>
                  <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
                    {socialLinks.map(s => (
                      <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--cinza)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 1, textTransform: 'uppercase', transition: 'all 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
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
              <div style={{ textAlign: 'center', padding: '80px 0', background: '#0a0a0a', borderRadius: 16, border: '1px solid var(--primary)' }}>
                <div style={{ fontSize: 72, marginBottom: 24 }}>✨</div>
                <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48, color: 'var(--branco)', letterSpacing: 2 }}>SOLICITAÇÃO RECEBIDA!</h2>
                <p style={{ color: 'var(--cinza)', marginTop: 16, fontSize: 18 }}>Em breve, um de nossos especialistas entrará em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid style={{ gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '0' }}>
                  <FormGroup>
                    <FormLabel>Nome Completo</FormLabel>
                    <Input placeholder="Ex: João Silva" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>WhatsApp</FormLabel>
                    <Input placeholder="(11) 99999-9999" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} required />
                  </FormGroup>
                </Grid>
                <FormGroup>
                  <FormLabel>Destino ou Pacote</FormLabel>
                  <Select value={form.destino} onChange={e => setForm({ ...form, destino: e.target.value })} required>
                    <option value="">Selecione o seu interesse...</option>
                    <option>Pacote Copa 2026 - Completo</option>
                    <option>Pacote Voo + Hotel</option>
                    <option>Experiência VIP & Hospitality</option>
                    <option>Passagens Internacionais</option>
                    <option>Assessoria de Vistos/Emigração</option>
                    <option>Outros Serviços</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Detalhes Adicionais</FormLabel>
                  <Textarea placeholder="Como podemos tornar sua viagem inesquecível?" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
                </FormGroup>
                <SubmitBtn type="submit">Iniciar Consultoria Gratuita</SubmitBtn>
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
              Especialistas em experiências globais. Levamos você aos maiores eventos 
              do planeta com a segurança e o conforto que você merece.
            </FDesc>
            <FSocial>
              <SLink href="https://www.instagram.com/tfaviagens/" target="_blank">📷</SLink>
              <SLink href="http://facebook.com/tfaviagens/" target="_blank">👍</SLink>
              <SLink href="https://www.tiktok.com/@tfaviagensoficial" target="_blank">🎵</SLink>
            </FSocial>
          </div>
          <div>
            <FHeading>Copa 2026</FHeading>
            <FLink href="#pacotes">Pacote Completo</FLink>
            <FLink href="#pacotes">Hospitalidade VIP</FLink>
            <FLink href="#pacotes">Voo + Hotel</FLink>
            <FLink href="#pacotes">Hospedagem</FLink>
          </div>
          <div>
            <FHeading>Empresa</FHeading>
            <FLink href="#sobre">Sobre a TFA</FLink>
            <FLink href="#copa">Nossos Serviços</FLink>
            <FLink href="#contato">Trabalhe Conosco</FLink>
            <FLink href="#contato">Seja um Parceiro</FLink>
          </div>
          <div>
            <FHeading>Suporte</FHeading>
            <FLink href="https://wa.me/5511951415853">WhatsApp</FLink>
            <FLink href="mailto:comercial@tfaviagens.com.br">E-mail</FLink>
            <FLink href="#">Termos e Condições</FLink>
            <FLink href="#">Política de Privacidade</FLink>
          </div>
        </FooterGrid>
        <FooterBottom>
          <FCopy>© 2024/2025 TFA Viagens — CNPJ 36.746.205/0001-68 — Todos os direitos reservados.</FCopy>
          <Certs>
            <CertBadge>🛡️ SSL SECURE</CertBadge>
            <CertBadge>📋 CADASTUR</CertBadge>
            <CertBadge>✅ IATA MEMBER</CertBadge>
          </Certs>
        </FooterBottom>
      </Container>
    </FooterEl>
  )
}

