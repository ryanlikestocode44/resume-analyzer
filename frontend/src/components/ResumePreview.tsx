// src/components/ResumePreview.tsx
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface ResumePreviewProps {
  file: File | null;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ file }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const { t } = useLanguage();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setFileUrl(result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setFileUrl(null); // Reset jika tidak ada file
    }
  }, [file]);

  if (!fileUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
        {t.resume_preview_loading}
      </div>
    );
  }

  return (
    <iframe
      title="PDF Preview"
      src={fileUrl}
      className="w-full h-full border-none"
    />
  );
};

export default ResumePreview;
