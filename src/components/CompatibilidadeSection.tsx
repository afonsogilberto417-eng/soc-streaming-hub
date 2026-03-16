import { motion } from "framer-motion";
import {
  Tv, Smartphone, Laptop, Monitor, Tablet
} from "lucide-react";

const devices = [
  { icon: Tv, label: "Smart TVs LG" },
  { icon: Monitor, label: "Roku" },
  { icon: Tv, label: "Philco" },
  { icon: Tv, label: "Samsung" },
  { icon: Monitor, label: "Android TV" },
  { icon: Monitor, label: "TV Box" },
  { icon: Laptop, label: "Notebook" },
  { icon: Laptop, label: "MacBook" },
  { icon: Smartphone, label: "Celulares Android" },
  { icon: Smartphone, label: "iPhones" },
];

const CompatibilidadeSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-center mb-10 sm:mb-16"
        >
          Compatível com <span className="text-gradient-neon">todos os seus dispositivos</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {devices.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass rounded-xl p-5 flex flex-col items-center gap-3 text-center hover:border-primary/50 transition-colors"
            >
              <d.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">{d.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatibilidadeSection;
