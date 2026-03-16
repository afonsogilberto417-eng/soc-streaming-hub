import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContatoSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Fale <span className="text-gradient-neon">Conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Em breve, mais informações de contato serão adicionadas aqui.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContatoSection;
