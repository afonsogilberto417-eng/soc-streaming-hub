import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos PIX (com liberação automática) e cartão de crédito. O acesso é liberado rapidamente após a confirmação do pagamento.",
  },
  {
    question: "Preciso de antena?",
    answer: "Não! O sistema funciona 100% via internet. Você só precisa de uma conexão estável.",
  },
  {
    question: "Tem fidelidade?",
    answer: "Não. Você pode cancelar ou pausar quando quiser, sem multas ou burocracia.",
  },
  {
    question: "Funciona em Smart TV antiga?",
    answer: "Sim, funciona. Porém, recomendamos o uso de TV Box para melhor desempenho e estabilidade.",
  },
  {
    question: "Qual a velocidade mínima?",
    answer: "Recomendamos no mínimo:\n• 10 Mbps para qualidade HD\n• 20 Mbps para qualidade 4K\n\nQuanto melhor sua internet, melhor será a experiência.",
  },
  {
    question: "Posso testar antes?",
    answer: "Sim! Entre em contato pelo WhatsApp e solicite seu teste gratuito para avaliar qualidade e estabilidade antes de assinar.",
  },
  {
    question: "Suporte nos finais de semana?",
    answer: "Sim. Nossa equipe trabalha 7 dias por semana para garantir suporte sempre que você precisar.",
  },
  {
    question: "Posso usar em duas casas?",
    answer: "Sim, você pode assistir em dispositivos diferentes ao mesmo tempo, conforme o plano contratado.",
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-[900px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-center mb-3"
        >
          ❓ Perguntas{" "}
          <span className="text-gradient-neon">Frequentes</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Tire suas dúvidas antes de começar
        </p>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.has(index);
            return (
              <div
                key={index}
                className={`border-b border-white/10 last:border-b-0 transition-colors duration-300 ${isOpen ? "bg-[#0a1f14]" : "bg-[#111111]"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 md:px-7 py-5 text-left gap-4 hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <span className="text-[15px] md:text-base font-medium text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="text-primary text-xl font-bold flex-shrink-0 w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-5 md:px-7 pb-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
