import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "1173468505", title: "Depoimento 1" },
  { id: "1173461380", title: "Depoimento 2" },
  { id: "1173465376", title: "Depoimento 3" },
];

const WATCH_THRESHOLD = 5; // seconds – if watched more than this, resume; otherwise reset

const VideoProvaSocialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const watchTimeRef = useRef<number[]>([0, 0, 0]);
  const hasInitializedRef = useRef(false);

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

  const durationRef = useRef<number[]>([0, 0, 0]);

  // Listen for Vimeo messages: track time, pause others on play, loop before end screen
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);

        // Store duration when available
        if (data.event === "ready") {
          iframeRefs.current.forEach((iframe) => {
            if (iframe?.contentWindow) {
              iframe.contentWindow.postMessage(JSON.stringify({ method: "getDuration" }), "*");
            }
          });
        }

        if (data.method === "getDuration" && data.value) {
          iframeRefs.current.forEach((iframe, idx) => {
            if (iframe && e.source === iframe.contentWindow) {
              durationRef.current[idx] = data.value;
            }
          });
        }

        if (data.event === "timeupdate" && data.data) {
          iframeRefs.current.forEach((iframe, idx) => {
            if (iframe && e.source === iframe.contentWindow) {
              const seconds = data.data.seconds || 0;
              watchTimeRef.current[idx] = seconds;
              const duration = durationRef.current[idx];
              // 2 seconds before end: reset to start and pause
              if (duration > 0 && seconds >= duration - 2) {
                iframe.contentWindow!.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
                iframe.contentWindow!.postMessage(JSON.stringify({ method: "pause" }), "*");
              }
            }
          });
        }

        // When one video starts playing, pause the others
        if (data.event === "play") {
          iframeRefs.current.forEach((iframe) => {
            if (iframe && e.source !== iframe.contentWindow && iframe.contentWindow) {
              iframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
            }
          });
        }
      } catch {}
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // On first visible: autoplay briefly then pause. On re-visible: resume or reset.
  useEffect(() => {
    if (!isVisible) return;

    if (!hasInitializedRef.current) {
      // First time: autoplay, then pause after 1.5s
      hasInitializedRef.current = true;
      const timer = setTimeout(() => {
        iframeRefs.current.forEach((iframe) => {
          if (iframe?.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
            iframe.contentWindow.postMessage(JSON.stringify({ method: "setVolume", value: 0.5 }), "*");
            iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "timeupdate" }), "*");
            iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "play" }), "*");
            iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "ready" }), "*");
            iframe.contentWindow.postMessage(JSON.stringify({ method: "getDuration" }), "*");
          }
        });
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Re-entering: check each video's watch time
      iframeRefs.current.forEach((iframe, idx) => {
        if (!iframe?.contentWindow) return;
        const watched = watchTimeRef.current[idx];
        if (watched < WATCH_THRESHOLD) {
          // Reset to beginning
          iframe.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
          iframe.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
          watchTimeRef.current[idx] = 0;
        }
        // If watched >= threshold, do nothing (keeps current position)
      });
    }
  }, [isVisible]);

  const getIframeSrc = (videoId: string, index: number) => {
    const startTime = index === 2 ? "1s" : "0s";
    return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=0&title=0&byline=0&portrait=0&badge=0&dnt=1&controls=1&transparent=0&quality_selector=0&fullscreen=0&settings=0&pip=0&airplay=0&cc=0&outro=0&api=1#t=${startTime}`;
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
                {isVisible ? (
                  <iframe
                    ref={(el) => { iframeRefs.current[index] = el; }}
                    key={video.id}
                    src={getIframeSrc(video.id, index)}
                    className="w-full h-full"
                    allow="autoplay; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-background" />
                )}
                {/* Block top bar (Vimeo logo / links) */}
                <div
                  className="absolute top-0 left-0 right-0 h-12 z-10"
                  style={{ pointerEvents: "auto" }}
                  onClick={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProvaSocialSection;
