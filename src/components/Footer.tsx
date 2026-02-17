import logo from "@/assets/socialflix-logo.png";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <img src={logo} alt="SocialFlix" className="w-12 h-12 rounded-full" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialFlix. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
