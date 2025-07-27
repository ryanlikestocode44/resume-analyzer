import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import LanguageToggle from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";

const usageSteps = [
  {
    img: "/images/step1-upload.png",
    desc: "Unggah resume PDF Anda ke platform CVision.",
    align: "left",
  },
  {
    img: "/images/step2-analysis.png",
    desc: "CVision menganalisis resume Anda secara otomatis.",
    align: "right",
  },
  {
    img: "/images/step3-recommend.png",
    desc: "Dapatkan rekomendasi skill dan penilaian resume.",
    align: "left",
  },
  {
    img: "/images/step4-video.png",
    desc: "Tonton video pembelajaran yang relevan untuk meningkatkan skill.",
    align: "right",
  },
];

const About = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-10 flex flex-col min-h-screen space-y-10">
      {/* Theme + Language Toggle */}
      <div className="absolute top-4 right-4 flex flex-col sm:flex-row gap-2 z-50">
        <ModeToggle />
        <LanguageToggle />
      </div>

      {/* Link Back */}
      <div className="mb-4">
        <Link
          to="/"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Kembali ke Halaman Utama</span>
        </Link>
      </div>

      {/* Section 1: About CVision */}
      <section>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Tentang CVision
        </h1>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>CVision</strong> adalah platform analisis resume berbasis web
          yang dibangun dengan React, Flask, dan Natural Language Processing
          (NLP).
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          CVision membantu pencari kerja dalam meningkatkan resume mereka
          melalui rekomendasi skill, penilaian konten, dan saran video
          pembelajaran yang relevan.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dibuat dengan ❤️ untuk mahasiswa, fresh graduate, dan profesional yang
          ingin meningkatkan peluang karier mereka.
        </p>
      </section>

      {/* Section 2: How to Use */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
          Cara Menggunakan CVision
        </h2>
        <div className="flex flex-col gap-8">
          {usageSteps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center ${
                step.align === "right" ? "flex-row-reverse" : "flex-row"
              } gap-6`}
            >
              <img
                src={step.img}
                alt={`Langkah ${idx + 1}`}
                className="w-32 h-32 object-cover rounded shadow"
              />
              <div className="text-gray-800 text-base">
                <span className="font-bold">Langkah {idx + 1}:</span>{" "}
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} CVision. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
