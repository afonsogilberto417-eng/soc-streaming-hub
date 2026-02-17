import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Carlos Henrique", city: "Rio Branco (AC)", text: "Testei pelo Android aqui em casa e rodou liso demais. A imagem em Full HD ficou excelente e não tive travamentos. A ativação foi rápida e o app é bem organizado." },
  { name: "Mariana Souza", city: "Maceió (AL)", text: "Peguei o teste de 7 dias e gostei muito da estabilidade. Navegação simples, canais funcionando e filmes atualizados. Valeu a experiência." },
  { name: "Rafael Lima", city: "Macapá (AP)", text: "Uso no celular e na TV Box. O aplicativo é leve e carrega rápido. Até agora funcionando perfeitamente." },
  { name: "Juliana Martins", city: "Manaus (AM)", text: "Mesmo com internet média aqui, a transmissão ficou estável. Gostei da qualidade e da organização dos canais." },
  { name: "Lucas Almeida", city: "Salvador (BA)", text: "Futebol ao vivo sem travar. Qualidade muito boa e áudio limpo. Já virou meu principal app." },
  { name: "Fernanda Rocha", city: "Fortaleza (CE)", text: "Achei muito fácil de instalar. A qualidade HD e Full HD realmente faz diferença." },
  { name: "Bruno Oliveira", city: "Brasília (DF)", text: "Sistema rápido, ativação imediata e bom suporte. Experiência bem profissional." },
  { name: "Camila Santos", city: "Vitória (ES)", text: "Teste de 4 horas funcionou certinho. Consegui avaliar bem a qualidade antes de decidir." },
  { name: "Diego Costa", city: "Goiânia (GO)", text: "Qualidade 4K surpreendeu. Interface organizada e fácil de navegar." },
  { name: "André Luiz", city: "São Paulo (SP)", text: "Já usei outros serviços e esse me surpreendeu pela estabilidade e rapidez no carregamento." },
  { name: "Patrícia Fernandes", city: "Belo Horizonte (MG)", text: "Muita variedade de filmes e séries. O app é intuitivo e não trava." },
  { name: "Eduardo Silva", city: "Porto Alegre (RS)", text: "Mesmo em horário de pico ficou estável. Excelente qualidade de imagem." },
  { name: "Gabriela Nunes", city: "Recife (PE)", text: "Gostei bastante da experiência. Futebol e canais ao vivo funcionando bem." },
  { name: "Thiago Ramos", city: "Curitiba (PR)", text: "Carregamento rápido e imagem limpa. Muito satisfeito." },
  { name: "Larissa Mendes", city: "Rio de Janeiro (RJ)", text: "Aplicativo bem otimizado e fácil de usar. Recomendo testar." },
];

const AvaliacoesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
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
          Avaliações reais de clientes em todo o Brasil
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{review.text}"</p>
              <div className="mt-auto pt-2 border-t border-border/30">
                <span className="font-display font-bold text-sm text-foreground">{review.name}</span>
                <span className="block text-xs text-muted-foreground">{review.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesSection;
