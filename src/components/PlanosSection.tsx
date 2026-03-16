import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const plans = [
  {
    emoji: "",
    name: "Essencial 1 Tela Mensal",
    oldPrice: "R$ 40,00",
    price: "R$ 34,99",
    features: [
      "1 tela simultânea",
      "+10.000 canais ao vivo",
      "+20.000 filmes e séries",
      "Qualidade SD, HD, Full HD e 4K",
      "Funciona em Smart TV, TV Box e celular",
      "Conteúdo atualizado diariamente",
    ],
    link: "https://pay.lowify.com.br/checkout?product_id=bsqsCn",
  },
  {
    emoji: "",
    name: "Plus 2 Telas Mensal",
    oldPrice: "R$ 50,00",
    price: "R$ 44,99",
    features: [
      "2 telas simultâneas",
      "+10.000 canais ao vivo",
      "+20.000 filmes e séries",
      "Canais de esportes e filmes lançamentos",
      "Qualidade SD, HD, Full HD e 4K",
      "Funciona em qualquer dispositivo",
    ],
    highlight: true,
    badge: "🔥 Plano mais escolhido pelos clientes",
    link: "https://pay.lowify.com.br/checkout?product_id=KGzUxY",
  },
  {
    emoji: "",
    name: "Trimestral 2 Telas",
    oldPrice: "R$ 120,00",
    price: "R$ 114,97",
    features: [
      "2 telas simultâneas",
      "+10.000 canais ao vivo",
      "+20.000 filmes e séries",
      "Qualidade SD, HD, Full HD e 4K",
      "Funciona em qualquer dispositivo",
    ],
    badge: "💰 Melhor custo-benefício",
    link: "https://pay.lowify.com.br/checkout?product_id=lr4iDx",
  },
];

const PlanosSection = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="planos" className="py-24 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-destructive animate-pulse" />
              <span className="text-destructive font-display font-bold text-base sm:text-lg tracking-wide">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-destructive/80 text-xs sm:text-sm font-medium">
              Oferta por tempo limitado!
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16"
        >
          Escolha seu <span className="text-gradient-neon">plano</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-glass rounded-2xl p-6 flex flex-col relative ${
                plan.highlight ? "border-primary/60 glow-green" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold font-display uppercase tracking-wider">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-display font-bold mb-2 text-foreground">{plan.emoji} {plan.name}</h3>
              <div className="mb-6">
                {plan.oldPrice && (
                  <span className="text-muted-foreground text-base line-through mr-2">{plan.oldPrice}</span>
                )}
                <span className="text-3xl font-display font-bold text-gradient-neon">{plan.price}</span>
              </div>

              {plan.badge && (
                <p className="text-xs font-bold text-primary mb-4">{plan.badge}</p>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href={plan.link || "#"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block text-center px-6 py-3 rounded-lg bg-primary font-display font-bold text-primary-foreground hover:glow-green-strong transition-shadow duration-300"
              >
                ASSINAR AGORA
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
