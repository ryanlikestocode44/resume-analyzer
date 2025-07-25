import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { TriangleAlertIcon, Loader2Icon, UploadIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface ResumeUploaderProps {
  onUploadSuccess: (data: any, file: File) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    setFile(selected || null);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError(t.choose_file);
      return;
    }

    if (!file.name.endsWith(".pdf")) {
      setError(t.pdf_only);
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Simpan hasil analisis
      sessionStorage.setItem("resumeResult", JSON.stringify(response.data));
      // Jika perlu: simpan juga nama file
      sessionStorage.setItem("resumeFilename", file.name);
      onUploadSuccess(response.data, file);

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          sessionStorage.setItem("resumeDataUrl", result);
        }
      };
      reader.readAsDataURL(file);

      navigate("/result");
    } catch (err: any) {
      const msg = err.response?.data?.error || err.message || t.upload_error;
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className="max-w-md mx-auto p-6 border rounded-xl bg-white dark:bg-slate-950 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
          {t.upload}
        </h2>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <TriangleAlertIcon className="h-5 w-5" />
            <AlertTitle>{t.upload_failed}</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Input
          type="file"
          accept="application/pdf"
          onChange={handleChange}
          className="mb-4"
        />

        <Button onClick={handleUpload} disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              {t.uploading}
            </>
          ) : (
            <>
              <UploadIcon className="mr-2 h-4 w-4" />
              {t.upload_btn}
            </>
          )}
        </Button>
      </div>

      {/* Fullscreen loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg font-medium">{t.analyzing}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
