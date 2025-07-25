import React, { createContext, useState, useEffect } from "react";
import id from "@/locales/id";
import en from "@/locales/en";

type Language = "en" | "id";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("lang") as Language) || "en";
  });

  const [t, setT] = useState<Translations>(language === "id" ? id : en);

  useEffect(() => {
    localStorage.setItem("lang", language);
    setT(language === "id" ? id : en);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
