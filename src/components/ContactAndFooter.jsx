import { useState } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import { socialLinks } from '../data'

/* ═══════════ CONTACT ═══════════ */
const ContactWrap = styled.section`
  padding: 120px 0; background: var(--verde-escuro);
  position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1800&q=80');
    background-size: cover; background-position: center; background-attachment: fixed;
    opacity: 0.06; z-index: 0;
    @media (max-width: 768px) { background-attachment: scroll; }
  }
  &::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,109,40,0.92) 0%, rgba(0,80,30,0.8) 50%, rgba(0,109,40,0.92) 100%);
    z-index: 1;
  }
`
const Container = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  position: relative; z-index: 2;
  @media (max-width: 768px) { padding: 0 20px; }
`
const SectionHeader = styled.div`text-align: center; margin-bottom: 80px;`
const Label = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 5px;
  text-transform: uppercase; color: var(--amarelo); margin-bottom: 20px; opacity: 0.9;
`
const BigTitle = styled.h2`
  font-size: clamp(48px, 6vw, 80px); line-height: 0.95;
  color: var(--branco); text-transform: uppercase; letter-spacing: 2px;
  span { color: var(--amarelo); }
`
const HeaderSub = styled.p`color: rgba(255,255,255,0.7); font-size: 17px; margin-top: 20px; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.7; font-weight: 300;`
const Grid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 60px; }
`
const WABox = styled.a`
  display: flex; align-items: center; gap: 20px;
  background: rgba(37,211,102,0.12); border: 1px solid rgba(37,211,102,0.3);
  border-radius: 14px; padding: 28px; margin-bottom: 36px; transition: all 0.3s ease;
  &:hover { transform: translateY(-4px); border-color: rgba(37,211,102,0.65); box-shadow: 0 12px 32px rgba(37,211,102,0.15); }
`
const WAIcon = styled.div`font-size: 40px; flex-shrink: 0;`
const WATitle = styled.div`font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 2px; color: var(--branco);`
const WASub = styled.div`font-size: 14px; color: rgba(255,255,255,0.65); margin-top: 4px;`
const InfoList = styled.div`display: flex; flex-direction: column; gap: 28px;`
const InfoItem = styled.div`
  display: flex; align-items: flex-start; gap: 18px;
  padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.08);
  &:last-child { border-bottom: none; padding-bottom: 0; }
`
const InfoIcon = styled.div`
  width: 44px; height: 44px; border-radius: 10px;
  background: rgba(255,223,0,0.12); border: 1px solid rgba(255,223,0,0.25);
  display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;
`
const InfoLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 11px;
  letter-spacing: 3px; text-transform: uppercase; color: var(--amarelo); margin-bottom: 6px; opacity: 0.9;
`
const InfoValue = styled.div`font-size: 16px; color: var(--branco); font-weight: 300;`
const SocialRow = styled.div`display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px;`
const SocialBtn = styled.a`
  display: flex; align-items: center; gap: 8px;
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase;
  color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  padding: 8px 16px; border-radius: 6px; transition: all 0.25s ease;
  &:hover { color: var(--amarelo); border-color: rgba(255,223,0,0.4); background: rgba(255,223,0,0.08); transform: translateY(-2px); }
`

/* Form */
const FormBox = styled.div`
  background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px; padding: 44px 40px; backdrop-filter: blur(12px);
  @media (max-width: 500px) { padding: 32px 20px; }
`
const FormTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif; font-size: 32px; color: var(--branco);
  letter-spacing: 2px; margin-bottom: 32px;
  span { color: var(--amarelo); }
`
const FormRow = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const FormGroup = styled.div`margin-bottom: 18px;`
const FormLabel = styled.label`
  display: block; font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
  color: rgba(255,255,255,0.55); margin-bottom: 8px;
`
const inputBase = `
  width: 100%; background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px; padding: 15px 18px;
  color: #fff; font-family: 'Barlow', sans-serif; font-size: 15px;
  transition: all 0.3s ease; outline: none;
  &::placeholder { color: rgba(255,255,255,0.3); }
  &:focus { border-color: var(--amarelo); background: rgba(255,255,255,0.1); box-shadow: 0 0 0 3px rgba(255,223,0,0.12); }
`
const Input = styled.input`${inputBase}`
const Select = styled.select`${inputBase} cursor: pointer; option { background: #003d12; color: #fff; }`
const Textarea = styled.textarea`${inputBase} min-height: 130px; resize: vertical;`
const SubmitBtn = styled.button`
  width: 100%; background: var(--amarelo); color: var(--primary-dark);
  font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 15px; letter-spacing: 3px;
  text-transform: uppercase; padding: 19px; border: none; border-radius: 8px;
  cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(255,223,0,0.25); margin-top: 8px;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255,223,0,0.45); background: var(--ouro-claro); }
`
const SuccessBox = styled.div`text-align: center; padding: 72px 24px;`
const SuccessIcon = styled.div`font-size: 72px; margin-bottom: 24px;`
const SuccessTitle = styled.h2`font-family: 'Bebas Neue', sans-serif; font-size: 44px; color: var(--branco); letter-spacing: 2px;`
const SuccessSub = styled.p`color: rgba(255,255,255,0.7); margin-top: 14px; font-size: 17px; line-height: 1.6;`

export function ContactSection() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', destino: '', mensagem: '' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Olá! Sou ${form.nome}. Tenho interesse em: ${form.destino}. ${form.mensagem}`
    window.open(`https://wa.me/5511915396612?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }
  return (
    <ContactWrap id="contato">
      <Container>
        <SectionHeader>
          <Label>Atendimento Personalizado</Label>
          <BigTitle>FALE COM UM<br /><span>ESPECIALISTA</span></BigTitle>
          <HeaderSub>Nossa equipe está pronta para desenhar o seu roteiro perfeito para a Copa de 2026.</HeaderSub>
        </SectionHeader>
        <Grid>
          <div>
            <WABox href="https://wa.me/5511915396612" target="_blank" rel="noreferrer">
              <WAIcon>💬</WAIcon>
              <div><WATitle>WHATSAPP CONCIERGE</WATitle><WASub>Atendimento prioritário — resposta em instantes</WASub></div>
            </WABox>
            <InfoList>
              <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <div><InfoLabel>E-mail Corporativo</InfoLabel><InfoValue>comercial@tfaviagens.com.br</InfoValue></div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <div><InfoLabel>Central de Atendimento</InfoLabel><InfoValue>+55 (11) 95141-5853</InfoValue></div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📲</InfoIcon>
                <div>
                  <InfoLabel>Siga a TFA Viagens</InfoLabel>
                  <SocialRow>
                    {socialLinks.map(s => (
                      <SocialBtn key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.icon} {s.label}</SocialBtn>
                    ))}
                  </SocialRow>
                </div>
              </InfoItem>
            </InfoList>
          </div>
          <FormBox>
            {sent ? (
              <SuccessBox>
                <SuccessIcon>🏆</SuccessIcon>
                <SuccessTitle>SOLICITAÇÃO RECEBIDA!</SuccessTitle>
                <SuccessSub>Em breve um especialista TFA entrará em contato com você.</SuccessSub>
              </SuccessBox>
            ) : (
              <form onSubmit={handleSubmit}>
                <FormTitle>Monte sua <span>consultoria gratuita</span></FormTitle>
                <FormRow>
                  <FormGroup>
                    <FormLabel>Nome completo</FormLabel>
                    <Input type="text" placeholder="Ex: João Silva" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>WhatsApp</FormLabel>
                    <Input type="tel" placeholder="(11) 99999-9999" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} required />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <FormLabel>Destino ou Pacote de Interesse</FormLabel>
                  <Select value={form.destino} onChange={e => setForm({ ...form, destino: e.target.value })} required>
                    <option value="">Selecione o seu interesse...</option>
                    <option>Pacote Copa 2026 — Completo</option>
                    <option>Pacote Voo + Hotel</option>
                    <option>Experiência VIP &amp; Hospitality</option>
                    <option>Passagens Internacionais</option>
                    <option>Assessoria de Vistos / Emigração</option>
                    <option>Outros Serviços</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Detalhes adicionais</FormLabel>
                  <Textarea placeholder="Como podemos tornar sua viagem inesquecível?" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
                </FormGroup>
                <SubmitBtn type="submit">✨ Iniciar Consultoria Gratuita</SubmitBtn>
              </form>
            )}
          </FormBox>
        </Grid>
      </Container>
    </ContactWrap>
  )
}

/* ═══════════ FOOTER ═══════════ */
const FooterEl = styled.footer`background: #00091e; border-top: 1px solid rgba(255,255,255,0.06); padding: 80px 0 44px;`
const FooterContainer = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 0 40px;
  @media (max-width: 768px) { padding: 0 20px; }
`
const FooterGrid = styled.div`
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 56px; margin-bottom: 64px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; gap: 40px; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const FLogo = styled.div`margin-bottom: 20px;`
const FLogoImg = styled.img`height: 132px; width: auto; object-fit: contain; display: block;`
const FDesc = styled.p`font-size: 15px; color: var(--cinza); line-height: 1.8; max-width: 300px; font-weight: 300;`
const FSocial = styled.div`display: flex; gap: 10px; margin-top: 28px;`
const SLink = styled.a`
  width: 42px; height: 42px; border-radius: 10px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; font-size: 18px;
  transition: all 0.3s ease; color: var(--amarelo);
  &:hover { border-color: var(--amarelo); background: rgba(255,223,0,0.1); transform: translateY(-3px); }
`
const FHeading = styled.div`
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase; color: var(--branco);
  margin-bottom: 24px; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.07);
`
const FLink = styled.a`
  display: block; font-size: 14px; color: var(--cinza); margin-bottom: 12px; transition: all 0.2s ease; font-weight: 300;
  &:hover { color: var(--amarelo); padding-left: 4px; }
`
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.05); padding-top: 32px;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
`
const FCopy = styled.div`font-size: 13px; color: rgba(255,255,255,0.25); font-weight: 300;`
const Certs = styled.div`display: flex; gap: 10px; flex-wrap: wrap;`
const CertBadge = styled.span`
  font-family: 'Barlow Condensed', sans-serif; font-size: 11px; letter-spacing: 1.5px;
  color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06); padding: 5px 12px; border-radius: 4px;
`

export function Footer() {
  return (
    <FooterEl>
      <FooterContainer>
        <FooterGrid>
          <div>
            <FLogo><FLogoImg src={logo} alt="TFA Viagens" /></FLogo>
            <FDesc>Especialistas em experiências globais. Levamos você aos maiores eventos do planeta com a segurança e o conforto que você merece.</FDesc>
            <FSocial>
              <SLink href="https://www.instagram.com/tfaviagens/" target="_blank" rel="noreferrer">📷</SLink>
              <SLink href="http://facebook.com/tfaviagens/" target="_blank" rel="noreferrer">👍</SLink>
              <SLink href="https://www.tiktok.com/@tfaviagensoficial" target="_blank" rel="noreferrer">🎵</SLink>
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
            <FLink href="https://wa.me/5511915396612">WhatsApp</FLink>
            <FLink href="mailto:comercial@tfaviagens.com.br">E-mail</FLink>
            <FLink href="#">Termos e Condições</FLink>
            <FLink href="#">Política de Privacidade</FLink>
          </div>
        </FooterGrid>
        <FooterBottom>
          <FCopy>© 2026 TFA Viagens — CNPJ 36.746.205/0001-68 — Todos os direitos reservados.</FCopy>
          <Certs>
            <CertBadge>🛡️ SSL SECURE</CertBadge>
            <CertBadge>📋 CADASTUR</CertBadge>
            <CertBadge>✅ IATA MEMBER</CertBadge>
          </Certs>
        </FooterBottom>
      </FooterContainer>
    </FooterEl>
  )
}
