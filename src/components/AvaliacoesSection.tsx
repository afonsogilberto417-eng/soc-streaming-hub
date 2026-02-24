import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WhatsAppChat from "./WhatsAppChat";

const conversations = [
  {
    name: "Carlos Henrique",
    messages: [
      { from: "client" as const, text: "Olá, tudo bem? Vi o anúncio de vocês e fiquei interessado. Eu uso bastante no Android aqui em casa. Queria saber se realmente roda liso ou se costuma travar.", time: "19:42" },
      { from: "atendimento" as const, text: "Oi, tudo bem! Pode ficar tranquilo, nosso sistema é otimizado para rodar estável no Android.", time: "19:44" },
      { from: "client" as const, text: "Testei aqui em casa e rodou liso demais. A imagem em Full HD ficou excelente, não tive nenhum travamento e a ativação foi bem rápida.", time: "20:15" },
      { from: "atendimento" as const, text: "Ficamos muito felizes com seu feedback! Obrigado pela confiança 🙌", time: "20:16" },
    ],
  },
  {
    name: "Lucas Almeida",
    messages: [
      { from: "client" as const, text: "Boa noite. Eu gosto de assistir futebol ao vivo e já tive problema com outros serviços. Queria saber se o de vocês aguenta bem.", time: "21:10" },
      { from: "atendimento" as const, text: "Boa noite! Sim, nossos servidores são preparados para eventos ao vivo.", time: "21:12" },
      { from: "client" as const, text: "Testei no jogo de ontem e não travou nenhuma vez. Qualidade muito boa, áudio limpo e imagem estável.", time: "22:30" },
      { from: "atendimento" as const, text: "Que ótimo saber disso! Futebol sem travar faz toda diferença ⚽🔥", time: "22:31" },
    ],
  },
  {
    name: "Mariana Souza",
    messages: [
      { from: "client" as const, text: "Passei aqui só para agradecer. Peguei o teste de 7 dias e gostei bastante da estabilidade. Navegação simples, canais funcionando e filmes atualizados.", time: "14:20" },
      { from: "atendimento" as const, text: "Agradecemos demais pelo retorno 💚", time: "14:22" },
    ],
  },
  {
    name: "Rafael Lima",
    messages: [
      { from: "client" as const, text: "Estou usando no celular e na TV Box já tem alguns dias. O aplicativo é leve, abre rápido e até agora não tive nenhum problema.", time: "10:45" },
      { from: "atendimento" as const, text: "Ficamos muito felizes em saber disso!", time: "10:47" },
    ],
  },
  {
    name: "Juliana Martins",
    messages: [
      { from: "client" as const, text: "Mesmo com minha internet não sendo das melhores, a transmissão ficou estável. Testei no notebook e rodou super bem. Gostei da qualidade.", time: "16:30" },
      { from: "atendimento" as const, text: "Muito obrigado pelo feedback 🙌", time: "16:32" },
    ],
  },
  {
    name: "Fernanda Rocha",
    messages: [
      { from: "client" as const, text: "Achei muito fácil de instalar. Não tenho muita prática com aplicativo, mas foi bem simples. A qualidade em HD e Full HD faz diferença.", time: "11:05" },
      { from: "atendimento" as const, text: "Obrigado por compartilhar sua experiência 💚", time: "11:07" },
    ],
  },
  {
    name: "Bruno Oliveira",
    messages: [
      { from: "client" as const, text: "Gostei bastante da rapidez do sistema. A ativação foi praticamente imediata e o suporte respondeu rápido.", time: "09:15" },
      { from: "atendimento" as const, text: "Agradecemos muito pela confiança!", time: "09:17" },
    ],
  },
  {
    name: "Camila Santos",
    messages: [
      { from: "client" as const, text: "Testei aquelas 4 horas antes de fechar e deu para avaliar bem a qualidade. Funcionou certinho e me deu segurança para continuar.", time: "15:40" },
      { from: "atendimento" as const, text: "Ficamos felizes que tenha gostado!", time: "15:42" },
    ],
  },
  {
    name: "Diego Costa",
    messages: [
      { from: "client" as const, text: "A qualidade em 4K me surpreendeu mesmo. A interface é organizada e fácil de navegar.", time: "20:00" },
      { from: "atendimento" as const, text: "Muito obrigado pelo feedback!", time: "20:02" },
    ],
  },
  {
    name: "André Luiz",
    messages: [
      { from: "client" as const, text: "Já utilizei outros serviços antes e esse me chamou atenção pela estabilidade e rapidez no carregamento.", time: "18:25" },
      { from: "atendimento" as const, text: "Que bom saber que superamos suas expectativas!", time: "18:27" },
    ],
  },
  {
    name: "Patrícia Fernandes",
    messages: [
      { from: "client" as const, text: "Tem bastante variedade de filmes e séries. O aplicativo é intuitivo e até agora não tive travamentos.", time: "13:10" },
      { from: "atendimento" as const, text: "Agradecemos demais pelo retorno!", time: "13:12" },
    ],
  },
  {
    name: "Eduardo Silva",
    messages: [
      { from: "client" as const, text: "Usei em horário de pico para testar e continuou estável. A qualidade de imagem ficou excelente.", time: "21:50" },
      { from: "atendimento" as const, text: "Obrigado por compartilhar sua experiência!", time: "21:52" },
    ],
  },
  {
    name: "Gabriela Nunes",
    messages: [
      { from: "client" as const, text: "Estou satisfeita com a experiência até agora. Futebol e canais ao vivo estão funcionando bem.", time: "17:35" },
      { from: "atendimento" as const, text: "Ficamos felizes com seu feedback!", time: "17:37" },
    ],
  },
  {
    name: "Thiago Ramos",
    messages: [
      { from: "client" as const, text: "O carregamento é rápido e a imagem bem limpa. Estou bem satisfeito com o serviço.", time: "12:20" },
      { from: "atendimento" as const, text: "Muito obrigado pela confiança!", time: "12:22" },
    ],
  },
  {
    name: "Larissa Mendes",
    messages: [
      { from: "client" as const, text: "Aplicativo bem otimizado, fácil de usar e não fica travando. Recomendo testar.", time: "19:00" },
      { from: "atendimento" as const, text: "Agradecemos pela recomendação 💚", time: "19:02" },
    ],
  },
];

const AvaliacoesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the section (0 = top visible, 1 = bottom leaving)
      const scrolled = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));

      const index = Math.min(
        conversations.length - 1,
        Math.floor(clamped * conversations.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section height = enough scroll distance for all conversations
  const sectionHeightVh = conversations.length * 40; // 40vh per conversation

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-section"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      {/* Sticky container */}
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

        {/* Counter */}
        <p className="text-center text-xs text-muted-foreground mb-4 font-display">
          {activeIndex + 1} / {conversations.length}
        </p>

        {/* Single Phone */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <WhatsAppChat
                name={conversations[activeIndex].name}
                messages={conversations[activeIndex].messages}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll hint */}
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
