import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const FloatingTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center gap-2 bg-destructive/20 border border-destructive/40 rounded-full px-4 sm:px-5 py-1.5 sm:py-2">
        <Clock className="w-4 h-4 text-destructive animate-pulse" />
        <span className="text-destructive font-display font-bold text-sm sm:text-base tracking-wide">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
        <span className="text-destructive/80 text-xs sm:text-sm font-medium">
          Oferta por tempo limitado!
        </span>
      </div>
    </div>
  );
};

export default FloatingTimer;
