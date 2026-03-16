import HeroSection from "@/components/HeroSection";
import FloatingTimer from "@/components/FloatingTimer";
import JornadaSection from "@/components/JornadaSection";
import AcessoSection from "@/components/AcessoSection";
import PlanosSection from "@/components/PlanosSection";
import GarantiaSection from "@/components/GarantiaSection";
import CompatibilidadeSection from "@/components/CompatibilidadeSection";
import AvaliacoesSection from "@/components/AvaliacoesSection";
import VideoProvaSocialSection from "@/components/VideoProvaSocialSection";
import FAQSection from "@/components/FAQSection";
import ContatoSection from "@/components/ContatoSection";

import Footer from "@/components/Footer";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <FloatingTimer />
      <SocialProofPopup />
      <HeroSection />
      
      <JornadaSection />
      <AcessoSection />
      <PlanosSection />
      <GarantiaSection />
      <CompatibilidadeSection />
      <AvaliacoesSection />
      <VideoProvaSocialSection />
      <FAQSection />
      <ContatoSection />
      
      <Footer />
    </div>
  );
};

export default Index;
