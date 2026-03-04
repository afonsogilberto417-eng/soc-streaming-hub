import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GarantiaSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-10 flex flex-col items-center gap-6"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            Garantia de <span className="text-gradient-neon">7 dias</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Assine com tranquilidade. Você tem 7 dias de garantia para testar e aproveitar todo o conteúdo da SocialFlix.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GarantiaSection;
