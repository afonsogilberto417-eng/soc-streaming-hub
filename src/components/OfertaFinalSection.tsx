import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const OfertaFinalSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            7 dias de teste apenas{" "}
            <span className="text-gradient-neon">R$ 9,99</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10">
            Experimente sem riscos.
          </p>

          <motion.a
            href="https://wa.me/message/H2QK6ZKW6EI6F1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-lg bg-primary font-display font-bold text-base sm:text-lg text-primary-foreground glow-green hover:glow-green-strong transition-shadow duration-300 mb-8"
          >
            <Shield className="w-5 h-5" />
            COMEÇAR TESTE POR R$ 9,99
          </motion.a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
      </div>
    </section>
  );
};

export default OfertaFinalSection;
