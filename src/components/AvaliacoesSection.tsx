import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import avatarCarlos from "@/assets/avatar-carlos.jpg";
import avatarLucas from "@/assets/avatar-lucas.jpg";
import avatarMariana from "@/assets/avatar-mariana.jpg";
import avatarRafael from "@/assets/avatar-rafael.jpg";
import avatarJuliana from "@/assets/avatar-juliana.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarBruno from "@/assets/avatar-bruno.jpg";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarDiego from "@/assets/avatar-diego.jpg";
import avatarAndre from "@/assets/avatar-andre.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarEduardo from "@/assets/avatar-eduardo.jpg";
import avatarGabriela from "@/assets/avatar-gabriela.jpg";
import avatarThiago from "@/assets/avatar-thiago.jpg";
import avatarLarissa from "@/assets/avatar-larissa.jpg";
import tvCliente from "@/assets/tv-cliente.jpg";

interface Message {
  from: "client" | "atendimento";
  text: string;
  time: string;
  image?: string;
}

interface Conversation {
  name: string;
  avatar: string;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    name: "+55 11 9●●●●-●●48",
    avatar: avatarCarlos,
    messages: [
      { from: "client", text: "Oi! Vi o anúncio e fiquei interessado. Roda bem no Android?", time: "19:42" },
      { from: "atendimento", text: "Oi! Pode ficar tranquilo, nosso sistema é otimizado pra Android 😊", time: "19:44" },
      { from: "client", text: "Beleza! Vou testar agora então.", time: "19:45" },
      { from: "client", text: "Testei e rodou liso demais! Imagem Full HD excelente, sem travamento.", time: "20:15" },
      { from: "atendimento", text: "Que ótimo saber! Ficamos felizes 🙌", time: "20:16" },
      { from: "client", text: "Minha esposa adorou também 😂", time: "20:17" },
    ],
  },
  {
    name: "+55 21 9●●●●-●●15",
    avatar: avatarLucas,
    messages: [
      { from: "client", text: "Boa noite! Gosto de futebol ao vivo, o de vocês aguenta?", time: "21:10" },
      { from: "atendimento", text: "Boa noite! Sim, servidores preparados pra eventos ao vivo!", time: "21:12" },
      { from: "client", text: "Testei ontem no jogo e não travou. Qualidade top!", time: "22:30" },
      { from: "atendimento", text: "Show! Nossos clientes sempre elogiam os jogos ao vivo ⚽", time: "22:31" },
      { from: "client", text: "Vamos fechar! Qual a chave Pix? 💰", time: "22:32" },
      { from: "atendimento", text: "Vou te enviar agora! Obrigado pela confiança! 🙌", time: "22:33" },
    ],
  },
  {
    name: "+55 31 9●●●●-●●72",
    avatar: avatarMariana,
    messages: [
      { from: "client", text: "Vim agradecer! Peguei o teste e gostei muito.", time: "14:20" },
      { from: "atendimento", text: "Que bom! O que mais gostou? 😊", time: "14:21" },
      { from: "client", text: "Canais funcionando e filmes atualizados. Tá de parabéns!", time: "14:22" },
      { from: "client", text: "Já indiquei pra dois amigos 👍", time: "14:23" },
      { from: "atendimento", text: "Obrigado pelas indicações! Isso nos motiva muito 💚", time: "14:24" },
    ],
  },
  {
    name: "+55 41 9●●●●-●●36",
    avatar: avatarRafael,
    messages: [
      { from: "client", text: "Usando no celular e na TV Box. App leve e rápido!", time: "10:45" },
      { from: "atendimento", text: "Que bom que está gostando! Alguma dúvida?", time: "10:46" },
      { from: "client", text: "Aceita cartão também?", time: "10:47" },
      { from: "atendimento", text: "Aceitamos Pix, cartão e boleto! 😊", time: "10:48" },
      { from: "client", text: "Perfeito! Vou fazer pelo Pix. Manda os dados!", time: "10:49" },
      { from: "atendimento", text: "Enviando agora! 🎉", time: "10:50" },
    ],
  },
  {
    name: "+55 85 9●●●●-●●91",
    avatar: avatarJuliana,
    messages: [
      { from: "client", text: "Boa tarde! Minha internet é de 50 mega só.", time: "16:28" },
      { from: "atendimento", text: "Funciona bem! Nosso sistema é otimizado pra conexões variadas 😉", time: "16:29" },
      { from: "client", text: "Testei e ficou estável mesmo! No notebook rodou super bem.", time: "16:30" },
      { from: "client", text: "Até no 4G funcionou sem problema!", time: "16:31" },
      { from: "atendimento", text: "Muito obrigado pelo feedback! 🙌", time: "16:32" },
    ],
  },
  {
    name: "+55 71 9●●●●-●●54",
    avatar: avatarFernanda,
    messages: [
      { from: "client", text: "Oi! Achei muito fácil de instalar.", time: "11:05" },
      { from: "atendimento", text: "Que bom! Precisou de ajuda com algo?", time: "11:06" },
      { from: "client", text: "Não! Foi super simples. Qualidade HD top! 🎬", time: "11:07" },
      { from: "client", text: "Meus filhos adoraram os desenhos kkkk", time: "11:08" },
      { from: "atendimento", text: "Ficamos felizes que toda a família está curtindo 💚", time: "11:09" },
    ],
  },
  {
    name: "+55 48 9●●●●-●●27",
    avatar: avatarBruno,
    messages: [
      { from: "client", text: "Bom dia! Acabei de ativar e já queria elogiar.", time: "09:15" },
      { from: "atendimento", text: "Bom dia! O que achou? 😊", time: "09:16" },
      { from: "client", text: "Ativação imediata e suporte rápido. Nota 10!", time: "09:17" },
      { from: "client", text: "Já tô maratonando kkk 😅", time: "09:20" },
      { from: "atendimento", text: "Bom maratona! Qualquer dúvida estamos aqui 🍿", time: "09:21" },
    ],
  },
  {
    name: "+55 62 9●●●●-●●83",
    avatar: avatarCamila,
    messages: [
      { from: "client", text: "Testei as 4 horas grátis e gostei bastante!", time: "15:40" },
      { from: "atendimento", text: "Que bom! Funcionou tudo certinho? 😊", time: "15:41" },
      { from: "client", text: "Sim! Não travou nenhuma vez. Me deu segurança.", time: "15:42" },
      { from: "client", text: "Quero fechar o plano anual! 💪", time: "15:43" },
      { from: "atendimento", text: "Vou enviar os detalhes agora! 🎉", time: "15:44" },
    ],
  },
  {
    name: "+55 27 9●●●●-●●60",
    avatar: avatarDiego,
    messages: [
      { from: "client", text: "A qualidade em 4K me surpreendeu mesmo. Olha como ficou na minha TV! 👇", time: "20:00" },
      { from: "client", text: "", time: "20:01", image: tvCliente },
      { from: "atendimento", text: "Que imagem linda! Ficou perfeita na sua TV 🔥📺", time: "20:02" },
      { from: "client", text: "A interface é organizada e fácil de navegar. Estou muito satisfeito!", time: "20:03" },
      { from: "atendimento", text: "Muito obrigado pelo feedback!", time: "20:04" },
    ],
  },
  {
    name: "+55 51 9●●●●-●●45",
    avatar: avatarAndre,
    messages: [
      { from: "client", text: "Já usei outros serviços e sempre dava problema.", time: "18:25" },
      { from: "atendimento", text: "Entendemos! A gente prioriza estabilidade acima de tudo.", time: "18:26" },
      { from: "client", text: "Deu pra notar! Carregamento rápido, diferença absurda.", time: "18:27" },
      { from: "client", text: "Finalmente um serviço que presta! 👏", time: "18:28" },
      { from: "atendimento", text: "Obrigado pela confiança! 🙌", time: "18:29" },
    ],
  },
  {
    name: "+55 92 9●●●●-●●18",
    avatar: avatarPatricia,
    messages: [
      { from: "client", text: "Oi! Bastante variedade de filmes e séries.", time: "13:10" },
      { from: "atendimento", text: "Sim! Atualizamos o catálogo toda semana 🎬", time: "13:11" },
      { from: "client", text: "App intuitivo e sem travamentos. Muito bom!", time: "13:12" },
      { from: "client", text: "Minha mãe de 65 anos usa sozinha 😄", time: "13:13" },
      { from: "atendimento", text: "Que bom que é fácil pra toda a família! 💚", time: "13:14" },
    ],
  },
  {
    name: "+55 19 9●●●●-●●37",
    avatar: avatarEduardo,
    messages: [
      { from: "client", text: "Testei em horário de pico pra ver se aguentava.", time: "21:50" },
      { from: "atendimento", text: "E aí, o que achou? 😊", time: "21:51" },
      { from: "client", text: "Estável! Imagem excelente, sem pixelar.", time: "21:52" },
      { from: "client", text: "Assisti o jogo inteiro sem travar. Nota 10! ⚽", time: "21:55" },
      { from: "atendimento", text: "Nossos servidores são preparados pra isso! 🏆", time: "21:56" },
    ],
  },
  {
    name: "+55 61 9●●●●-●●02",
    avatar: avatarGabriela,
    messages: [
      { from: "client", text: "Boa tarde! Satisfeita com a experiência.", time: "17:35" },
      { from: "atendimento", text: "Boa tarde! Que bom ouvir isso! 😊", time: "17:36" },
      { from: "client", text: "Futebol ao vivo sem delay! Perfeito.", time: "17:37" },
      { from: "client", text: "Marido cancelou a outra assinatura 😂", time: "17:38" },
      { from: "atendimento", text: "Bem-vindos à família SocialFlix! 🎉", time: "17:39" },
    ],
  },
  {
    name: "+55 81 9●●●●-●●69",
    avatar: avatarThiago,
    messages: [
      { from: "client", text: "Carregamento rápido demais! Abre na hora.", time: "12:20" },
      { from: "atendimento", text: "Bom saber! Trabalhamos bastante nisso 💪", time: "12:21" },
      { from: "client", text: "Imagem limpa, sem pixelado. Ótimo serviço!", time: "12:22" },
      { from: "client", text: "Podem contar comigo como cliente fiel! 🤝", time: "12:23" },
      { from: "atendimento", text: "Obrigado pela confiança! É isso aí!", time: "12:24" },
    ],
  },
  {
    name: "+55 47 9●●●●-●●51",
    avatar: avatarLarissa,
    messages: [
      { from: "client", text: "Vim recomendar! App otimizado e sem travamento.", time: "19:00" },
      { from: "atendimento", text: "Obrigado! Testou em qual aparelho?", time: "19:01" },
      { from: "client", text: "Testei em 3 aparelhos, perfeito em todos!", time: "19:02" },
      { from: "client", text: "Vale muito a pena! 🔥", time: "19:03" },
      { from: "atendimento", text: "Feedback assim nos motiva muito 💚", time: "19:04" },
    ],
  },
];

// Preload all images
const preloadImages = () => {
  conversations.forEach((conv) => {
    const img = new Image();
    img.src = conv.avatar;
    conv.messages.forEach((msg) => {
      if (msg.image) {
        const img2 = new Image();
        img2.src = msg.image;
      }
    });
  });
};

// Chat card component for each conversation
const ChatCard = ({ conv, isActive }: { conv: Conversation; isActive: boolean }) => (
  <div
    className="absolute inset-0 transition-all duration-300 ease-out flex flex-col"
    style={{
      opacity: isActive ? 1 : 0,
      transform: isActive ? "translateY(0)" : "translateY(40px)",
    }}
  >
    {/* WhatsApp Header with avatar */}
    <div className="bg-[#075e54] px-3 py-2.5 flex items-center gap-2.5">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      <div className="w-10 h-10 rounded-full bg-[#dfe5e7] flex items-center justify-center overflow-hidden flex-shrink-0">
        <img src={conv.avatar} alt={conv.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-[15px] font-medium truncate line-through decoration-[#ff4444]/70 decoration-2">{conv.name}</p>
        <p className="text-[#a8d8cc] text-[12px]">online</p>
      </div>
      <div className="flex items-center gap-5 text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </div>
    </div>

    {/* Chat messages */}
    <div
      className="flex-1 px-3 py-4 space-y-2 overflow-y-auto"
      style={{
        background: "#0b2618",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3Cpattern id='bg' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5c1.5 0 2.5 1 2.5 2.5S31.5 10 30 10s-2.5-1-2.5-2.5S28.5 5 30 5z' fill='%231a4a30' opacity='0.3'/%3E%3Cpath d='M10 25c1 0 2 .8 2 2s-1 2-2 2-2-.8-2-2 1-2 2-2z' fill='%231a4a30' opacity='0.2'/%3E%3Cpath d='M50 35c1.2 0 2 1 2 2s-.8 2-2 2-2-1-2-2 .8-2 2-2z' fill='%231a4a30' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='%230b2618'/%3E%3Crect width='400' height='400' fill='url(%23bg)'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="flex justify-center mb-2">
        <span className="bg-[#0d3320] text-[#8696a0] text-[11px] px-3 py-1 rounded-lg shadow-sm font-medium">HOJE</span>
      </div>
      {conv.messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.from === "atendimento" ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-[1.45] relative shadow-sm ${
            msg.from === "client" ? "bg-[#1a3a2a] text-[#e0e0e0] rounded-tl-none" : "bg-[#005c4b] text-[#e0e0e0] rounded-tr-none"
          }`}>
            {msg.from === "client" && i === 0 && (
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-[#1a3a2a] border-r-[8px] border-r-transparent" />
            )}
            {msg.from === "atendimento" && (
              <div className="absolute -right-2 top-0 w-0 h-0 border-t-[8px] border-t-[#005c4b] border-l-[8px] border-l-transparent" />
            )}
            {msg.from === "client" && (
              <p className="text-[#35cd96] text-[12px] font-semibold mb-0.5"><span className="line-through decoration-[#ff4444]/70 decoration-1">~ {conv.name}</span></p>
            )}
            {msg.from === "atendimento" && (
              <p className="text-[#6cb4ee] text-[12px] font-semibold mb-0.5">SocialFlix Suporte</p>
            )}
            {msg.image && <img src={msg.image} alt="Foto enviada" className="rounded-md mb-1 w-full" />}
            {msg.text && <p className="whitespace-pre-line">{msg.text}</p>}
            <span className="text-[10px] text-[#8696a0] float-right mt-1 ml-2 flex items-center gap-0.5">
              {msg.time}
              {msg.from === "atendimento" && (
                <svg width="16" height="11" viewBox="0 0 16 11" fill="#4fc3f7">
                  <path d="M11.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 00-.336-.148.457.457 0 00-.343.151.544.544 0 00-.14.366c0 .134.047.248.14.341l2.737 2.592a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z"/>
                  <path d="M14.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-1.2-1.136-.849 1.047 1.713 1.618a.48.48 0 00.343.141.457.457 0 00.343-.151l6.536-8.07a.504.504 0 00.14-.35.457.457 0 00-.14-.312z" opacity=".7"/>
                </svg>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AvaliacoesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => { preloadImages(); }, []);

  // Autoplay carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conversations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % conversations.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + conversations.length) % conversations.length);

  return (
    <section className="relative bg-gradient-section py-16 md:py-24">
      <div className="flex flex-col items-center justify-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-center mb-2"
        >
          ⭐ O que estão dizendo sobre a{" "}
          <span className="text-gradient-neon">SocialFlix</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-4 text-sm">
          Conversas reais de clientes satisfeitos
        </p>
        <p className="text-center text-xs text-muted-foreground mb-4 font-display">
          {activeIndex + 1} / {conversations.length}
        </p>

        {/* Phone + navigation buttons */}
        <div
          className="relative flex items-center justify-center gap-3 md:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left button */}
          <button
            onClick={goPrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Phone frame */}
          <div className="relative mx-auto" style={{ width: 340 }}>
            <div className="rounded-[3rem] border-[4px] border-[#1a1a1a] bg-[#000] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              {/* Notch */}
              <div className="bg-[#000] flex justify-center pt-2 pb-0">
                <div className="w-28 h-6 bg-[#1a1a1a] rounded-b-2xl" />
              </div>

              {/* Status bar */}
              <div className="bg-[#075e54] flex items-center justify-between px-5 pt-1 pb-1">
                <span className="text-white text-[12px] font-semibold">12:30</span>
                <div className="flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M2 22h20V2z" opacity="0.3"/><path d="M2 22h20V2zm18-2H4V4.8L20 20z"/></svg>
                  <svg width="18" height="12" viewBox="0 0 28 14" fill="white"><rect x="0" y="1" width="22" height="12" rx="2.5" ry="2.5" stroke="white" strokeWidth="1.2" fill="none"/><rect x="2" y="3" width="16" height="8" rx="1" fill="white"/><path d="M24 5v4a2 2 0 000-4z"/></svg>
                </div>
              </div>

              {/* Dynamic content area */}
              <div className="relative" style={{ height: 520 }}>
                {conversations.map((conv, i) => (
                  <ChatCard key={i} conv={conv} isActive={i === activeIndex} />
                ))}
              </div>

              {/* Static input bar */}
              <div className="bg-[#f0f0f0] px-2.5 py-2 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-[14px] text-[#999] flex items-center gap-3 shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#919191" stroke="none"/><circle cx="15" cy="10" r="1" fill="#919191" stroke="none"/></svg>
                  <span className="flex-1">Mensagem</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeLinecap="round"/></svg>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                </div>
              </div>

              {/* Home indicator */}
              <div className="bg-[#f0f0f0] h-5 flex items-center justify-center pb-1">
                <div className="w-28 h-1 bg-[#333] rounded-full" />
              </div>
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={goNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesSection;
