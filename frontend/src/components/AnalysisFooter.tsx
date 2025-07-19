import React from "react";

const AnalysisFooter: React.FC = () => {
  return (
    <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 px-4 py-8 border-t border-slate-200 dark:border-slate-700">
      <p className="mb-2">
        Resume Analyzer memberikan rekomendasi berdasarkan hasil ekstraksi
        otomatis.
      </p>
      <p>
        Harap verifikasi hasil analisis secara manual. Aplikasi ini dapat
        membuat kesalahan. 🤖
      </p>
      <p className="mt-4 text-xs opacity-70">
        © {new Date().getFullYear()} CVision Resume Analyzer by Ryan Nicholas
        Purba
      </p>
    </footer>
  );
};

export default AnalysisFooter;
