import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

const AnalysisFooter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 px-4 py-8 border-t border-slate-200 dark:border-slate-700">
      <p className="mb-2">{t.resume_analyzer_info}</p>
      <p>
        {t.result_warning}{" "}
        <span role="img" aria-label="robot">
          🤖
        </span>
      </p>
      <p className="mt-4 text-xs opacity-70">
        © {new Date().getFullYear()} {t.footer_copyright}
      </p>
    </footer>
  );
};

export default AnalysisFooter;
