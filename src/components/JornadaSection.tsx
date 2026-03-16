import { motion } from "framer-motion";
import { Zap, Clock, Smartphone, Tv, Check } from "lucide-react";

const JornadaSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Sua jornada <span className="text-gradient-neon">começa agora</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experimente a SocialFlix gratuitamente por 4 horas e descubra a melhor experiência em streaming com qualidade 4K, Full HD, HD e SD, estabilidade e ativação imediata.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-glass rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-7 h-7 text-accent" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              ⚡ Teste Rápido – 4 Horas
            </h3>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-foreground">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              Acesso por 4 horas
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
              Acesso instantâneo ao nosso app exclusivo
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Tv className="w-5 h-5 text-primary flex-shrink-0" />
              Compatível com praticamente todos os aparelhos
            </li>
          </ul>

          <p className="text-muted-foreground mb-8 text-center">
            Ideal para conhecer a qualidade e estabilidade da SocialFlix.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="block text-center px-8 py-4 rounded-lg bg-primary font-display font-bold text-lg text-primary-foreground glow-green hover:glow-green-strong transition-shadow duration-300 mb-6"
          >
            👉 TESTAR APP EXCLUSIVO – ACESSO IMEDIATO
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> Acesso instantâneo
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> Conteúdo premium
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> App exclusivo SocialFlix
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JornadaSection;
