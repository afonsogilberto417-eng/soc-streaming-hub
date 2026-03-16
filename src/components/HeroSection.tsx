import { motion } from "framer-motion";
import logo from "@/assets/socialflix-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero px-5 md:px-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <img
          src={logo}
          alt="SocialFlix"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 glow-accent"
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-center mb-4 sm:mb-6">
          CONHEÇA A{" "}
          <span className="text-gradient-neon">SOCIALFLIX</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl text-center mb-8 sm:mb-10 leading-relaxed px-2">
          Plataforma completa de streaming com mais de 500 canais, filmes, séries e futebol ao vivo. Qualidade 4K, Full HD, HD e SD, estabilidade e ativação imediata.
        </p>

      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
