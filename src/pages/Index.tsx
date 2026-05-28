import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import FloatingTimer from "@/components/FloatingTimer";
import SocialProofPopup from "@/components/SocialProofPopup";

const JornadaSection = lazy(() => import("@/components/JornadaSection"));
const AcessoSection = lazy(() => import("@/components/AcessoSection"));
const PlanosSection = lazy(() => import("@/components/PlanosSection"));
const TesteSocialFlixSection = lazy(() => import("@/components/TesteSocialFlixSection"));
const GarantiaSection = lazy(() => import("@/components/GarantiaSection"));
const CompatibilidadeSection = lazy(() => import("@/components/CompatibilidadeSection"));
const AvaliacoesSection = lazy(() => import("@/components/AvaliacoesSection"));
const VideoProvaSocialSection = lazy(() => import("@/components/VideoProvaSocialSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContatoSection = lazy(() => import("@/components/ContatoSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <FloatingTimer />
      <SocialProofPopup />
      <HeroSection />
      
      <Suspense fallback={null}>
        <JornadaSection />
        <AcessoSection />
        <TesteSocialFlixSection />
        <PlanosSection />
        <GarantiaSection />
        <CompatibilidadeSection />
        <AvaliacoesSection />
        <VideoProvaSocialSection />
        <FAQSection />
        <ContatoSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
