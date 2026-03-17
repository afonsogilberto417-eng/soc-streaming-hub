import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { name: "Ricardo Mendes", state: "SP", action: "assinou o Plano Essencial" },
  { name: "Aline Ferreira", state: "MG", action: "assinou o Plano Plus" },
  { name: "Gustavo Santos", state: "BA", action: "assinou o Plano Trimestral" },
  { name: "Bruna Almeida", state: "PR", action: "assinou o Plano Essencial" },
  { name: "Felipe Rocha", state: "CE", action: "assinou o Plano Essencial" },
  { name: "Larissa Costa", state: "PE", action: "assinou o Plano Plus" },
  { name: "Thiago Martins", state: "GO", action: "assinou o Plano Trimestral" },
  { name: "Camila Nogueira", state: "RS", action: "assinou o Plano Essencial" },
  { name: "Diego Carvalho", state: "RJ", action: "assinou o Plano Plus" },
  { name: "Vanessa Lima", state: "DF", action: "assinou o Plano Essencial" },
  { name: "Eduardo Barros", state: "AM", action: "assinou o Plano Essencial" },
  { name: "Patrícia Souza", state: "PA", action: "assinou o Plano Trimestral" },
  { name: "André Oliveira", state: "ES", action: "assinou o Plano Essencial" },
  { name: "Juliana Freitas", state: "AL", action: "assinou o Plano Plus" },
  { name: "Marcelo Ribeiro", state: "SC", action: "assinou o Plano Trimestral" },
  { name: "Daniela Moura", state: "MS", action: "assinou o Plano Essencial" },
  { name: "Rafael Pires", state: "MT", action: "assinou o Plano Essencial" },
  { name: "Mariana Teixeira", state: "PB", action: "assinou o Plano Plus" },
  { name: "Lucas Andrade", state: "RN", action: "assinou o Plano Plus" },
  { name: "Fernanda Batista", state: "MA", action: "assinou o Plano Trimestral" },
  { name: "Henrique Costa", state: "SE", action: "assinou o Plano Essencial" },
  { name: "Isabela Rodrigues", state: "TO", action: "assinou o Plano Plus" },
  { name: "Bruno Cavalcante", state: "RO", action: "assinou o Plano Trimestral" },
  { name: "Carla Mendes", state: "RR", action: "assinou o Plano Essencial" },
  { name: "Rodrigo Lopes", state: "AC", action: "assinou o Plano Plus" },
  { name: "Tatiane Gomes", state: "AP", action: "assinou o Plano Essencial" },
  { name: "Alexandre Dias", state: "PI", action: "assinou o Plano Trimestral" },
];

const timeLabels = ["Agora mesmo", "Há poucos minutos"];

const SocialProofPopup = () => {
  const [current, setCurrent] = useState<typeof notifications[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [lastIndex, setLastIndex] = useState(-1);

  const showNext = useCallback(() => {
    let idx: number;
    do {
      idx = Math.floor(Math.random() * notifications.length);
    } while (idx === lastIndex);
    setLastIndex(idx);
    setCurrent(notifications[idx]);
    setVisible(true);

    setTimeout(() => setVisible(false), 6000);
  }, [lastIndex]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNext();
    }, 5000);

    const interval = setInterval(() => {
      showNext();
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [showNext]);

  const timeLabel = timeLabels[Math.floor(Math.random() * timeLabels.length)];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="pointer-events-auto bg-card/90 backdrop-blur-lg border border-border/50 rounded-xl px-5 py-4 shadow-lg shadow-primary/10 max-w-[320px] sm:max-w-sm"
          >
            <div className="flex items-start gap-3">
              {/* Pulsing dot */}
              <span className="relative mt-1 flex-shrink-0">
                <span className="block w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-75" />
              </span>

              <div className="min-w-0">
                <p className="text-sm text-foreground leading-snug">
                  <span className="font-bold">{current.name}</span>
                  <span className="text-muted-foreground"> – {current.state}</span>
                </p>
                <p className="text-sm text-primary font-semibold">{current.action}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{timeLabel}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofPopup;
