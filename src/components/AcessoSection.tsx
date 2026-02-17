import { motion } from "framer-motion";
import {
  Tv, Film, Clapperboard, Dribbble, Baby, Lock,
  MonitorPlay, Eye, Wifi, Zap, ScreenShare, CheckCircle
} from "lucide-react";

const items = [
  { icon: Tv, label: "Mais de 500 canais" },
  { icon: Film, label: "Filmes atualizados" },
  { icon: Clapperboard, label: "Séries completas" },
  { icon: Dribbble, label: "Futebol ao vivo" },
  { icon: Baby, label: "Canais infantis" },
  { icon: Lock, label: "Conteúdo adulto" },
  { icon: MonitorPlay, label: "Qualidade 4K" },
  { icon: Eye, label: "Full HD" },
  { icon: ScreenShare, label: "HD" },
  { icon: CheckCircle, label: "SD" },
  { icon: Wifi, label: "Estabilidade máxima" },
  { icon: Zap, label: "Ativação imediata" },
];

const AcessoSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-16"
        >
          O que você <span className="text-gradient-neon">tem acesso</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-8 h-8 text-primary" />
              <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcessoSection;
