import { Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 section-padding bg-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg font-semibold text-primary-foreground/90 mb-4">
          기술은 도구이고, 사람이 중심입니다.
        </p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-primary-foreground/40">
          © 2026. AI-Driven Working Backwards Methodology.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
