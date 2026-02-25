import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import depoimentoImg from "@/assets/depoimento-cliente.jpg";
import depoimentoVideo from "@/assets/depoimento-video.mp4";

const transcricao = `Oi… gente… eu nem costumo gravar essas coisas, tá?

Mas eu precisava falar… porque eu gostei mesmo.

Eu assinei o plano trimestral da Socialflix… peguei o de duas telas…

E, assim… o preço ficou bem bom, sabe? Compensou bastante aqui pra casa.

Agora tem desenho pras crianças…

Futebol pro maridão… ele ficou todo feliz 😅

E eu assisto minhas coisas tranquila… não travou, não ficou carregando… nada disso.

Ah… e o suporte…

Eu tive uma dúvida na hora de instalar… achei que não ia conseguir sozinha…

Mas eles me responderam rapidinho… me ajudaram mesmo.

É atendimento 24 horas, 7 dias por semana… isso dá uma segurança, né?

Então… se você tá pensando em assinar… pode ficar tranquilo.

Aqui em casa deu super certo.`;

const DepoimentoVideo = () => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
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
      className="max-w-md mx-auto mt-10"
    >
      <p className="text-center text-muted-foreground text-sm mb-3 font-display">
        🎬 Depoimento real de cliente
      </p>

      {/* Video-style card */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        {/* Video player */}
        <div className="relative aspect-[9/12] max-h-[420px] overflow-hidden cursor-pointer" onClick={handlePlay}>
          <video
            ref={videoRef}
            src={depoimentoVideo}
            poster={depoimentoImg}
            className="w-full h-full object-cover"
            playsInline
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          {/* Play button overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </div>
          )}
          {/* Duration badge */}
          {!isPlaying && (
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
              0:05
            </div>
          )}
          {/* WhatsApp forward badge */}
          <div className="absolute top-3 left-3 bg-[#00a884]/90 text-white text-[11px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Vídeo real
          </div>
        </div>

        {/* Transcript area */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img src={depoimentoImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Renata S.</p>
              <p className="text-[#8696a0] text-[11px]">Cliente desde Jan/2025</p>
            </div>
          </div>

          <div className={`relative ${!expanded ? "max-h-[100px] overflow-hidden" : ""}`}>
            <p className="text-[#d1d5db] text-[13px] leading-relaxed whitespace-pre-line">
              {transcricao}
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111] to-transparent" />
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-sm font-medium mt-2 hover:underline"
          >
            {expanded ? "Ver menos ▲" : "Ler transcrição completa ▼"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DepoimentoVideo;
