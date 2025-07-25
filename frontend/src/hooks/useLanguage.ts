import { useContext } from "react";
import { LanguageContext } from "@/components/provider/language-provider";

export const useLanguage = () => useContext(LanguageContext);
