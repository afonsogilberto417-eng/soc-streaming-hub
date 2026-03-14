import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "1173468505", title: "Depoimento 1" },
  { id: "1173461380", title: "Depoimento 2" },
  { id: "1173465376", title: "Depoimento 3" },
];

const VideoProvaSocialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

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

  const getIframeSrc = (videoId: string, index: number) => {
    const shouldAutoplay = isVisible && index === selectedIndex ? 1 : 0;
    return `https://player.vimeo.com/video/${videoId}?autoplay=${shouldAutoplay}&muted=0&loop=1&title=0&byline=0&portrait=0&badge=0&dnt=1&controls=1&transparent=0&quality_selector=0&fullscreen=0&settings=0`;
  };

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
            onClick={() => emblaApi?.scrollPrev()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-lg overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {videos.map((video, index) => (
                <div key={video.id} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.4)] relative">
                    <div className="aspect-[9/16] w-full relative">
                      {isVisible ? (
                        <iframe
                          key={`${video.id}-${index === selectedIndex}`}
                          src={getIframeSrc(video.id, index)}
                          className="w-full h-full"
                          allow="autoplay; picture-in-picture"
                          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-black" />
                      )}
                      <div
                        className="absolute top-0 left-0 right-0 h-12 z-10"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div
                        className="absolute bottom-0 right-0 w-32 h-10 z-10"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all flex-shrink-0 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary scale-110"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProvaSocialSection;
