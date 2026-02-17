import HeroSection from "@/components/HeroSection";
import TesteSocialFlixSection from "@/components/TesteSocialFlixSection";
import JornadaSection from "@/components/JornadaSection";
import AcessoSection from "@/components/AcessoSection";
import PlanosSection from "@/components/PlanosSection";
import CompatibilidadeSection from "@/components/CompatibilidadeSection";
import AvaliacoesSection from "@/components/AvaliacoesSection";
import ContatoSection from "@/components/ContatoSection";
import OfertaFinalSection from "@/components/OfertaFinalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TesteSocialFlixSection />
      <JornadaSection />
      <AcessoSection />
      <PlanosSection />
      <CompatibilidadeSection />
      <AvaliacoesSection />
      <ContatoSection />
      <OfertaFinalSection />
      <Footer />
    </div>
  );
};

export default Index;
