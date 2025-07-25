import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <Button variant="outline" onClick={toggleLang}>
      {language === "en" ? "ID" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
