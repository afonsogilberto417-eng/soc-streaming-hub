import { motion } from "framer-motion";
import { Play } from "lucide-react";

const JornadaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Sua jornada <span className="text-gradient-neon">começa agora</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experimente a SocialFlix gratuitamente por 4 horas e descubra a melhor experiência em streaming com qualidade 4K, Full HD, HD e SD, estabilidade e ativação imediata.
          </p>
          <motion.a
            href="#planos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg bg-primary font-display font-bold text-lg text-primary-foreground glow-green hover:glow-green-strong transition-shadow duration-300"
          >
            <Play className="w-5 h-5" />
            COMEÇAR TESTE GRÁTIS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default JornadaSection;
