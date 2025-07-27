import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import LanguageToggle from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const usageSteps = [
  {
    img_url: "https://i.ibb.co/G3fzNL1Z/tutor1.jpg",
    desc: "Unggah resume PDF Anda ke platform CVision.",
    align: "left",
  },
  {
    img_url: "https://i.ibb.co/LhHGfDv6/tutor2.jpg",
    desc: "CVision menganalisis resume Anda secara otomatis.",
    align: "right",
  },
  {
    img_url: "https://i.ibb.co/RpFQD0PN/tutor3.jpg",
    desc: "Dapatkan rekomendasi skill dan penilaian resume.",
    align: "left",
  },
  {
    img_url: "https://i.ibb.co/kgxMQXj6/tutor4.jpg",
    desc: "Tonton video pembelajaran yang relevan untuk meningkatkan skill.",
    align: "right",
  },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col min-h-screen relative">
      {/* Theme & Language Switch */}
      <div className="absolute top-0 right-0 m-3 flex flex-col sm:flex-row gap-2 z-50">
        <ModeToggle />
        <LanguageToggle />
      </div>

      {/* Back to Home */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Kembali ke Halaman Utama</span>
        </Link>
      </div>

      {/* About Section */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">
          About CVision
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          <strong>CVision</strong> adalah aplikasi web analisis resume cerdas
          yang dibangun dengan teknologi web modern seperti React, Flask, dan
          NLP. CVision membantu melakukan ekstraksi informasi resume melalui
          rekomendasi skill, penilaian, dan sumber video relevan.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Aplikasi ini memanfaatkan pemrosesan bahasa alami dan rule-based
          matching untuk mengekstrak informasi dari resume PDF yang diunggah dan
          memberikan insight berdasarkan standar serta tren industri.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Dikembangkan menyelesaikan tugas akhir dan sebagai alat untuk
          mahasiswa, fresh graduate, dan profesional yang ingin melihat dan
          mengevaluasi resume-nya berdasarkan ekstraksi informasi dari CVision.
        </p>
      </section>

      {/* Usage Steps */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-6 text-center">
          Cara Menggunakan CVision
        </h2>
        <div className="flex flex-col gap-10">
          {usageSteps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                step.align === "right" ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <img
                src={step.img_url}
                alt={`Langkah ${idx + 1}`}
                className="rounded shadow-md w-32 h-32 object-cover"
              />
              <div className="text-gray-700 dark:text-gray-200 text-base">
                <span className="font-semibold mr-2">Langkah {idx + 1}:</span>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} CVision. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
