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
    name: "Carlos Henrique",
    avatar: avatarCarlos,
    messages: [
      { from: "client", text: "Olá, tudo bem? Vi o anúncio de vocês e fiquei interessado. Eu uso bastante no Android aqui em casa. Queria saber se realmente roda liso ou se costuma travar.", time: "19:42" },
      { from: "atendimento", text: "Oi, tudo bem! Pode ficar tranquilo, nosso sistema é otimizado para rodar estável no Android.", time: "19:44" },
      { from: "client", text: "Testei aqui em casa e rodou liso demais. A imagem em Full HD ficou excelente, não tive nenhum travamento e a ativação foi bem rápida.", time: "20:15" },
      { from: "atendimento", text: "Ficamos muito felizes com seu feedback! Obrigado pela confiança 🙌", time: "20:16" },
    ],
  },
  {
    name: "Lucas Almeida",
    avatar: avatarLucas,
    messages: [
      { from: "client", text: "Boa noite. Eu gosto de assistir futebol ao vivo e já tive problema com outros serviços. Queria saber se o de vocês aguenta bem.", time: "21:10" },
      { from: "atendimento", text: "Boa noite! Sim, nossos servidores são preparados para eventos ao vivo.", time: "21:12" },
      { from: "client", text: "Testei no jogo de ontem e não travou nenhuma vez. Qualidade muito boa, áudio limpo e imagem estável.", time: "22:30" },
      { from: "client", text: "Vamos fechar! Qual a chave Pix? 💰", time: "22:32" },
      { from: "atendimento", text: "Que ótimo! Vou te enviar os dados por aqui. Obrigado pela confiança! 🙌", time: "22:33" },
    ],
  },
  {
    name: "Mariana Souza",
    avatar: avatarMariana,
    messages: [
      { from: "client", text: "Passei aqui só para agradecer. Peguei o teste de 7 dias e gostei bastante da estabilidade. Navegação simples, canais funcionando e filmes atualizados.", time: "14:20" },
      { from: "atendimento", text: "Agradecemos demais pelo retorno 💚", time: "14:22" },
    ],
  },
  {
    name: "Rafael Lima",
    avatar: avatarRafael,
    messages: [
      { from: "client", text: "Estou usando no celular e na TV Box já tem alguns dias. O aplicativo é leve, abre rápido e até agora não tive nenhum problema.", time: "10:45" },
      { from: "client", text: "Qual a forma de pagamento? Aceita cartão também?", time: "10:46" },
      { from: "atendimento", text: "Aceitamos Pix, cartão de crédito e boleto! Fica à sua escolha 😊", time: "10:47" },
      { from: "client", text: "Perfeito! Vou fazer pelo Pix mesmo. Manda os dados!", time: "10:48" },
      { from: "atendimento", text: "Enviando agora! Ficamos felizes em saber disso! 🎉", time: "10:49" },
    ],
  },
  {
    name: "Juliana Martins",
    avatar: avatarJuliana,
    messages: [
      { from: "client", text: "Mesmo com minha internet não sendo das melhores, a transmissão ficou estável. Testei no notebook e rodou super bem. Gostei da qualidade.", time: "16:30" },
      { from: "atendimento", text: "Muito obrigado pelo feedback 🙌", time: "16:32" },
    ],
  },
  {
    name: "Fernanda Rocha",
    avatar: avatarFernanda,
    messages: [
      { from: "client", text: "Achei muito fácil de instalar. Não tenho muita prática com aplicativo, mas foi bem simples. A qualidade em HD e Full HD faz diferença.", time: "11:05" },
      { from: "atendimento", text: "Obrigado por compartilhar sua experiência 💚", time: "11:07" },
    ],
  },
  {
    name: "Bruno Oliveira",
    avatar: avatarBruno,
    messages: [
      { from: "client", text: "Gostei bastante da rapidez do sistema. A ativação foi praticamente imediata e o suporte respondeu rápido.", time: "09:15" },
      { from: "atendimento", text: "Agradecemos muito pela confiança!", time: "09:17" },
    ],
  },
  {
    name: "Camila Santos",
    avatar: avatarCamila,
    messages: [
      { from: "client", text: "Testei aquelas 4 horas antes de fechar e deu para avaliar bem a qualidade. Funcionou certinho e me deu segurança para continuar.", time: "15:40" },
      { from: "atendimento", text: "Ficamos felizes que tenha gostado!", time: "15:42" },
    ],
  },
  {
    name: "Diego Costa",
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
    name: "André Luiz",
    avatar: avatarAndre,
    messages: [
      { from: "client", text: "Já utilizei outros serviços antes e esse me chamou atenção pela estabilidade e rapidez no carregamento.", time: "18:25" },
      { from: "atendimento", text: "Que bom saber que superamos suas expectativas!", time: "18:27" },
    ],
  },
  {
    name: "Patrícia Fernandes",
    avatar: avatarPatricia,
    messages: [
      { from: "client", text: "Tem bastante variedade de filmes e séries. O aplicativo é intuitivo e até agora não tive travamentos.", time: "13:10" },
      { from: "atendimento", text: "Agradecemos demais pelo retorno!", time: "13:12" },
    ],
  },
  {
    name: "Eduardo Silva",
    avatar: avatarEduardo,
    messages: [
      { from: "client", text: "Usei em horário de pico para testar e continuou estável. A qualidade de imagem ficou excelente.", time: "21:50" },
      { from: "atendimento", text: "Obrigado por compartilhar sua experiência!", time: "21:52" },
    ],
  },
  {
    name: "Gabriela Nunes",
    avatar: avatarGabriela,
    messages: [
      { from: "client", text: "Estou satisfeita com a experiência até agora. Futebol e canais ao vivo estão funcionando bem.", time: "17:35" },
      { from: "atendimento", text: "Ficamos felizes com seu feedback!", time: "17:37" },
    ],
  },
  {
    name: "Thiago Ramos",
    avatar: avatarThiago,
    messages: [
      { from: "client", text: "O carregamento é rápido e a imagem bem limpa. Estou bem satisfeito com o serviço.", time: "12:20" },
      { from: "atendimento", text: "Muito obrigado pela confiança!", time: "12:22" },
    ],
  },
  {
    name: "Larissa Mendes",
    avatar: avatarLarissa,
    messages: [
      { from: "client", text: "Aplicativo bem otimizado, fácil de usar e não fica travando. Recomendo testar.", time: "19:00" },
      { from: "atendimento", text: "Agradecemos pela recomendação 💚", time: "19:02" },
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
        <p className="text-white text-[15px] font-medium truncate">{conv.name}</p>
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
        background: "#e5ddd5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3Cpattern id='bg' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5c1.5 0 2.5 1 2.5 2.5S31.5 10 30 10s-2.5-1-2.5-2.5S28.5 5 30 5z' fill='%23c9bfb0' opacity='0.15'/%3E%3Cpath d='M10 25c1 0 2 .8 2 2s-1 2-2 2-2-.8-2-2 1-2 2-2z' fill='%23c9bfb0' opacity='0.12'/%3E%3Cpath d='M50 35c1.2 0 2 1 2 2s-.8 2-2 2-2-1-2-2 .8-2 2-2z' fill='%23c9bfb0' opacity='0.12'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='%23e5ddd5'/%3E%3Crect width='400' height='400' fill='url(%23bg)'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="flex justify-center mb-2">
        <span className="bg-[#d9f2fa] text-[#4a9cc2] text-[11px] px-3 py-1 rounded-lg shadow-sm font-medium">HOJE</span>
      </div>
      {conv.messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.from === "atendimento" ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-[1.45] relative shadow-sm ${
            msg.from === "client" ? "bg-white text-[#303030] rounded-tl-none" : "bg-[#dcf8c6] text-[#303030] rounded-tr-none"
          }`}>
            {msg.from === "client" && i === 0 && (
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent" />
            )}
            {msg.from === "atendimento" && (
              <div className="absolute -right-2 top-0 w-0 h-0 border-t-[8px] border-t-[#dcf8c6] border-l-[8px] border-l-transparent" />
            )}
            {msg.from === "client" && (
              <p className="text-[#35cd96] text-[12px] font-semibold mb-0.5">~ {conv.name}</p>
            )}
            {msg.from === "atendimento" && (
              <p className="text-[#6cb4ee] text-[12px] font-semibold mb-0.5">SocialFlix Suporte</p>
            )}
            {msg.image && <img src={msg.image} alt="Foto enviada" className="rounded-md mb-1 w-full" />}
            {msg.text && <p className="whitespace-pre-line">{msg.text}</p>}
            <span className="text-[10px] text-[#999] float-right mt-1 ml-2 flex items-center gap-0.5">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { preloadImages(); }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) { ticking = false; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrolled = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
        const clamped = Math.max(0, Math.min(1, scrolled));
        const index = Math.min(conversations.length - 1, Math.floor(clamped * conversations.length));
        setActiveIndex(index);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHeightVh = conversations.length * 35;

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-section"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
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

        {/* Static phone frame - content scrolls inside */}
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

            {/* Dynamic content area - header + messages swap here */}
            <div className="relative" style={{ height: 440 }}>
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

        <motion.p
          className="text-muted-foreground text-xs mt-4 flex items-center gap-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓ Role para ver mais depoimentos
        </motion.p>
      </div>
    </section>
  );
};

export default AvaliacoesSection;
