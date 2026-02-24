import { motion } from "framer-motion";
import WhatsAppChat from "./WhatsAppChat";

const conversations = [
  {
    name: "Carlos Henrique",
    messages: [
      { from: "client" as const, text: "Olá, tudo bem? Vi o anúncio de vocês e fiquei interessado. Eu uso bastante no Android aqui em casa, principalmente à noite. Queria saber se realmente roda liso ou se costuma travar.", time: "19:42" },
      { from: "atendimento" as const, text: "Oi, tudo bem! Pode ficar tranquilo, nosso sistema é otimizado para rodar estável no Android.", time: "19:44" },
      { from: "client" as const, text: "Olha, vou te falar… testei aqui em casa e rodou liso demais. A imagem em Full HD ficou excelente, não tive nenhum travamento e a ativação foi bem rápida.", time: "20:15" },
      { from: "atendimento" as const, text: "Ficamos muito felizes com seu feedback! Obrigado pela confiança 🙌", time: "20:16" },
    ],
  },
  {
    name: "Lucas Almeida",
    messages: [
      { from: "client" as const, text: "Boa noite. Eu gosto muito de assistir futebol ao vivo e já tive problema com outros serviços que travavam bem na hora do jogo. Queria saber se o de vocês aguenta bem.", time: "21:10" },
      { from: "atendimento" as const, text: "Boa noite! Sim, nossos servidores são preparados para eventos ao vivo.", time: "21:12" },
      { from: "client" as const, text: "Testei no jogo de ontem e não travou nenhuma vez. Qualidade muito boa, áudio limpo e imagem estável. Me surpreendeu.", time: "22:30" },
      { from: "atendimento" as const, text: "Que ótimo saber disso! Futebol sem travar faz toda diferença ⚽🔥", time: "22:31" },
    ],
  },
  {
    name: "Mariana Souza",
    messages: [
      { from: "client" as const, text: "Passei aqui só para agradecer mesmo. Peguei o teste de 7 dias e gostei bastante da estabilidade. Navegação simples, canais funcionando direitinho e os filmes bem atualizados.", time: "14:20" },
      { from: "atendimento" as const, text: "Agradecemos demais pelo retorno 💚", time: "14:22" },
    ],
  },
  {
    name: "Rafael Lima",
    messages: [
      { from: "client" as const, text: "Estou usando no celular e também na TV Box já tem alguns dias. O aplicativo é leve, abre rápido e até agora não tive nenhum problema.", time: "10:45" },
      { from: "atendimento" as const, text: "Ficamos muito felizes em saber disso!", time: "10:47" },
    ],
  },
  {
    name: "Juliana Martins",
    messages: [
      { from: "client" as const, text: "Mesmo com minha internet não sendo das melhores, a transmissão ficou estável. Testei inclusive no notebook e rodou super bem. Gostei bastante da qualidade.", time: "16:30" },
      { from: "atendimento" as const, text: "Muito obrigado pelo feedback 🙌", time: "16:32" },
    ],
  },
  {
    name: "Fernanda Rocha",
    messages: [
      { from: "client" as const, text: "Achei muito fácil de instalar. Não tenho muita prática com aplicativo, mas foi bem simples. A qualidade em HD e Full HD realmente faz diferença.", time: "11:05" },
      { from: "atendimento" as const, text: "Obrigado por compartilhar sua experiência 💚", time: "11:07" },
    ],
  },
  {
    name: "Bruno Oliveira",
    messages: [
      { from: "client" as const, text: "Gostei bastante da rapidez do sistema. A ativação foi praticamente imediata e o suporte respondeu rápido quando precisei tirar uma dúvida.", time: "09:15" },
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
      { from: "client" as const, text: "Usei em horário de pico para testar mesmo e continuou estável. A qualidade de imagem ficou excelente.", time: "21:50" },
      { from: "atendimento" as const, text: "Obrigado por compartilhar sua experiência!", time: "21:52" },
    ],
  },
  {
    name: "Gabriela Nunes",
    messages: [
      { from: "client" as const, text: "Estou satisfeita com a experiência até agora. Futebol e canais ao vivo estão funcionando bem aqui.", time: "17:35" },
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
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        >
          ⭐ O que estão dizendo sobre a{" "}
          <span className="text-gradient-neon">SocialFlix</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          Conversas reais de clientes satisfeitos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {conversations.map((conv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <WhatsAppChat
                name={conv.name}
                messages={conv.messages}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesSection;
