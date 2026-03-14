import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "1173468505", title: "Depoimento 1" },
  { id: "1173461380", title: "Depoimento 2" },
  { id: "1173465376", title: "Depoimento 3" },
];

const VideoProvaSocialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goPrev = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % videos.length);

  // Observe visibility — autoplay when in view, stop when out
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build iframe src based on visibility
  const iframeSrc = `https://player.vimeo.com/video/${videos[current].id}?autoplay=${isVisible ? 1 : 0}&muted=1&loop=1&title=0&byline=0&portrait=0&background=0`;

  return (
    <section ref={sectionRef} className="relative bg-gradient-section py-16 md:py-24">
      <div className="flex flex-col items-center justify-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold text-center mb-2"
        >
          🎥 Veja o que nossos clientes dizem
        </motion.h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Depoimentos reais em vídeo
        </p>

        <div className="relative flex items-center justify-center gap-3 md:gap-6 w-full max-w-2xl">
          <button
            onClick={goPrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.4)]">
              <div className="aspect-[9/16] w-full">
                {isVisible ? (
                  <iframe
                    key={videos[current].id}
                    src={iframeSrc}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )}
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3 font-display">
              {current + 1} / {videos.length}
            </p>
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoProvaSocialSection;
