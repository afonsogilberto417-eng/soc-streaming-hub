import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import depoimentoImg from "@/assets/depoimento-frame.jpg";
import depoimentoVideo from "@/assets/depoimento-video-longo.mp4";
import depoimentoDublagem from "@/assets/depoimento-dublagem.mp3";

const DepoimentoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (videoRef.current && audioRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Sync audio to video time
        audioRef.current.currentTime = videoRef.current.currentTime;
        videoRef.current.play();
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="max-w-sm mx-auto mt-10"
    >
      <p className="text-center text-muted-foreground text-sm mb-3 font-display">
        🎬 Depoimento real de cliente
      </p>

      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        <div
          className="relative aspect-[9/16] overflow-hidden cursor-pointer"
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src={depoimentoVideo}
            poster={depoimentoImg}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            onPlay={() => {
              setIsPlaying(true);
              if (audioRef.current) {
                audioRef.current.currentTime = videoRef.current?.currentTime || 0;
                audioRef.current.play();
              }
            }}
            onPause={() => {
              setIsPlaying(false);
              audioRef.current?.pause();
            }}
            onEnded={() => {
              setIsPlaying(false);
              audioRef.current?.pause();
            }}
            onSeeked={() => {
              if (audioRef.current && videoRef.current) {
                audioRef.current.currentTime = videoRef.current.currentTime;
              }
            }}
          />
          <audio ref={audioRef} src={depoimentoDublagem} loop />
          {/* Play/Pause overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </div>
          )}
          {/* Badge */}
          <div className="absolute top-3 left-3 bg-[#00a884]/90 text-white text-[11px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Vídeo real
          </div>
          {/* Name overlay */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30">
              <img src={depoimentoImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold drop-shadow-lg">Renata S.</p>
              <p className="text-white/70 text-[11px] drop-shadow-lg">Cliente SocialFlix</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepoimentoVideo;
