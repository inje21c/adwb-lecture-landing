import { Linkedin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 section-padding bg-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg font-semibold text-primary-foreground/90 mb-4">{t.footer.tagline}</p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="https://www.linkedin.com/in/cheolmin-hyun-90852568/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <Link to="/design" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors" aria-label="Design Document">
            <FileText className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-sm text-primary-foreground/40">{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
