import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { ko, en, type Locale } from "@/locales";

type Lang = "ko" | "en";

interface LanguageContextType {
  lang: Lang;
  t: Locale;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLang(): Lang {
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang");
  if (paramLang === "en" || paramLang === "ko") return paramLang;
  return "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const toggle = () => {
    setLang(prev => {
      const next = prev === "ko" ? "en" : "ko";
      const url = new URL(window.location.href);
      if (next === "ko") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", next);
      }
      window.history.replaceState({}, "", url.toString());
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = lang === "ko" ? ko : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
