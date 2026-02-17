import HeroSection from "@/components/HeroSection";
import JornadaSection from "@/components/JornadaSection";
import AcessoSection from "@/components/AcessoSection";
import PlanosSection from "@/components/PlanosSection";
import CompatibilidadeSection from "@/components/CompatibilidadeSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <JornadaSection />
      <AcessoSection />
      <PlanosSection />
      <CompatibilidadeSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default Index;
