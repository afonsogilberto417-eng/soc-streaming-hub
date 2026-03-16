import { motion } from "framer-motion";
import { Rocket, Tv, Smartphone, Clock, Check } from "lucide-react";
import DepoimentoVideo from "./DepoimentoVideo";

const TesteSocialFlixSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            🔥 Teste <span className="text-gradient-neon">SocialFlix</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experimente a SocialFlix por 4 horas e descubra a melhor experiência em streaming. Exclusivo para Android.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-glass rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-7 h-7 text-accent" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              🚀 Teste Rápido – 4 Horas
            </h3>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-foreground">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              Acesso completo por 4 horas
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
              Disponível apenas para sistema Android
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Tv className="w-5 h-5 text-primary flex-shrink-0" />
              Teste todos os recursos sem compromisso
            </li>
          </ul>

          <p className="text-muted-foreground mb-8 text-center">
            Ideal para explorar tudo antes de escolher seu plano.
          </p>

          <motion.a
            href="https://web.whatsapp.com/send?phone=558596483469&text=Ol%C3%A1%2C%20quero%20fazer%20o%20teste%20da%20SocialFlix!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                "0 0 0 0 hsl(var(--primary) / 0.4)",
                "0 0 0 12px hsl(var(--primary) / 0)",
                "0 0 0 0 hsl(var(--primary) / 0)"
              ]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="block text-center px-8 py-4 rounded-lg bg-primary font-display font-bold text-lg text-primary-foreground glow-green hover:glow-green-strong transition-shadow duration-300 mb-6"
          >
            👉 COMEÇAR TESTE DE 4 HORAS
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> Acesso completo
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> Sem taxas ocultas
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" /> Sem fidelidade
            </span>
          </div>
        </motion.div>

        <DepoimentoVideo />
      </div>
    </section>
  );
};

export default TesteSocialFlixSection;
