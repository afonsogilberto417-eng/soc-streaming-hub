import HeroSection from "@/components/HeroSection";

import JornadaSection from "@/components/JornadaSection";
import AcessoSection from "@/components/AcessoSection";
import PlanosSection from "@/components/PlanosSection";
import CompatibilidadeSection from "@/components/CompatibilidadeSection";
import AvaliacoesSection from "@/components/AvaliacoesSection";
import FAQSection from "@/components/FAQSection";
import ContatoSection from "@/components/ContatoSection";

import Footer from "@/components/Footer";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialProofPopup />
      <HeroSection />
      
      <JornadaSection />
      <AcessoSection />
      <PlanosSection />
      <CompatibilidadeSection />
      <AvaliacoesSection />
      <FAQSection />
      <ContatoSection />
      
      <Footer />
    </div>
  );
};

export default Index;
