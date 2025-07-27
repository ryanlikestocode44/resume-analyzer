import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const ResumeNotFound: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
      <div className="text-center">
        {/* SVG Resume Warning */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-4 w-48 h-48"
          viewBox="0 0 64 64"
          fill="none"
        >
          {/* Document Outline */}
          <rect
            x="12"
            y="8"
            width="40"
            height="48"
            rx="2"
            className="fill-gray-300 dark:fill-gray-600"
          />
          <line
            x1="18"
            y1="18"
            x2="46"
            y2="18"
            className="stroke-gray-500 dark:stroke-gray-400"
            strokeWidth="2"
          />
          <line
            x1="18"
            y1="26"
            x2="46"
            y2="26"
            className="stroke-gray-500 dark:stroke-gray-400"
            strokeWidth="2"
          />
          <line
            x1="18"
            y1="34"
            x2="38"
            y2="34"
            className="stroke-gray-500 dark:stroke-gray-400"
            strokeWidth="2"
          />

          {/* Warning Triangle */}
          <path d="M32 42 L24 56 H40 L32 42 Z" className="fill-red-500" />
          <circle cx="32" cy="52" r="1.5" fill="white" />
          <rect x="31" y="45" width="2" height="5" rx="1" fill="white" />
        </svg>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t.resume_not_found_title}
        </h2>

        {/* Deskripsi */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-6">
          {t.resume_not_found_desc}
        </p>

        {/* Tombol Kembali */}
        <Button variant="default" onClick={() => navigate("/")}>
          {t.resume_not_found_btn}
        </Button>
      </div>
    </div>
  );
};

export default ResumeNotFound;
