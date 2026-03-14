import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import thumbVideo1 from "@/assets/thumb-video-1.png";
import thumbVideo2 from "@/assets/thumb-video-2.png";
import thumbVideo3 from "@/assets/thumb-video-3.png";

const videos = [
  { id: "1173468505", title: "Depoimento 1", thumb: thumbVideo1 },
  { id: "1173461380", title: "Depoimento 2", thumb: thumbVideo2 },
  { id: "1173465376", title: "Depoimento 3", thumb: thumbVideo3 },
];

const VideoProvaSocialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePlayers, setActivePlayers] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const durationRef = useRef<number[]>([0, 0, 0]);
  const hasInitializedRef = useRef(false);

  const getStartTime = (index: number) => (index === 2 ? 1 : 0);

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

  // Listen for Vimeo messages
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);
        const currentIndex = iframeRefs.current.findIndex(
          (iframe) => iframe?.contentWindow === e.source
        );
        if (currentIndex === -1) return;
        const currentIframe = iframeRefs.current[currentIndex];
        if (!currentIframe?.contentWindow) return;

        if (data.method === "getDuration" && typeof data.value === "number") {
          durationRef.current[currentIndex] = data.value;
        }

        if (data.event === "play") {
          currentIframe.contentWindow.postMessage(
            JSON.stringify({ method: "setVolume", value: 0.5 }),
            "*"
          );
          iframeRefs.current.forEach((iframe, idx) => {
            if (idx !== currentIndex && iframe?.contentWindow) {
              iframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
            }
          });
        }

        if (data.event === "timeupdate" && data.data) {
          const seconds = Number(data.data.seconds ?? 0);
          const duration = durationRef.current[currentIndex];
          const startTime = getStartTime(currentIndex);
          if (duration > 0 && seconds >= duration - 0.25) {
            currentIframe.contentWindow.postMessage(
              JSON.stringify({ method: "setCurrentTime", value: startTime }),
              "*"
            );
            currentIframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
          }
        }

        if (data.event === "ended") {
          const startTime = getStartTime(currentIndex);
          currentIframe.contentWindow.postMessage(
            JSON.stringify({ method: "setCurrentTime", value: startTime }),
            "*"
          );
          currentIframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
        }
      } catch {}
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Register Vimeo event listeners
  useEffect(() => {
    if (!isVisible || hasInitializedRef.current) return;
    hasInitializedRef.current = true;
    const timer = setTimeout(() => {
      iframeRefs.current.forEach((iframe) => {
        if (!iframe?.contentWindow) return;
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "timeupdate" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "play" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "ended" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "getDuration" }), "*");
      });
    }, 600);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleThumbnailClick = (index: number) => {
    setActivePlayers((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });

    // Small delay to let iframe mount, then play
    setTimeout(() => {
      const iframe = iframeRefs.current[index];
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({ method: "play" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "setVolume", value: 0.5 }), "*");

        // Pause others
        iframeRefs.current.forEach((other, idx) => {
          if (idx !== index && other?.contentWindow) {
            other.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
          }
        });

        // Register events for this new iframe
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "timeupdate" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "play" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "ended" }), "*");
        iframe.contentWindow.postMessage(JSON.stringify({ method: "getDuration" }), "*");
      }
    }, 800);
  };

  const getIframeSrc = (videoId: string, index: number) => {
    const startTime = index === 2 ? "1s" : "0s";
    return `https://player.vimeo.com/video/${videoId}?autoplay=0&muted=0&loop=0&title=0&byline=0&portrait=0&badge=0&dnt=1&controls=1&transparent=0&quality_selector=0&fullscreen=0&settings=0&pip=0&airplay=0&cc=0&outro=0&api=1#t=${startTime}`;
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-border/50 bg-card/40 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:border-primary/40 hover:shadow-[0_0_30px_hsl(145_80%_50%/0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[9/16] w-full relative">
                {activePlayers[index] ? (
                  <>
                    <iframe
                      ref={(el) => { iframeRefs.current[index] = el; }}
                      key={video.id}
                      src={getIframeSrc(video.id, index)}
                      className="w-full h-full"
                      allow="autoplay; picture-in-picture"
                      sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                      referrerPolicy="no-referrer"
                    />
                    {/* Block top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-12 z-10"
                      style={{ pointerEvents: "auto" }}
                      onClick={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    {/* Block bottom-right buttons */}
                    <div
                      className="absolute bottom-0 right-0 w-[45%] h-12 z-10"
                      style={{ pointerEvents: "auto" }}
                      onClick={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </>
                ) : (
                  /* Custom thumbnail overlay */
                  <div
                    className="w-full h-full relative group"
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg shadow-primary/30">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProvaSocialSection;
