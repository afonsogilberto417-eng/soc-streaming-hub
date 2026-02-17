import logo from "@/assets/socialflix-logo.png";
import { ShieldCheck, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <img src={logo} alt="SocialFlix" className="w-12 h-12 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6">
          <div className="card-glass rounded-xl px-5 py-3 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <div className="text-left">
              <span className="text-xs text-muted-foreground block">Certificado</span>
              <span className="text-sm font-display font-bold text-foreground">Compra Segura</span>
            </div>
          </div>
          <div className="card-glass rounded-xl px-5 py-3 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            <div className="text-left">
              <span className="text-xs text-muted-foreground block">Avaliado no</span>
              <span className="text-sm font-display font-bold text-foreground">Reclame Aqui</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialFlix. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
