import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import LanguageToggle from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const usageSteps = [
    {
      img_url: "https://i.ibb.co/G3fzNL1Z/tutor1.jpg",
      desc: t.usage_step_1,
      align: "left",
    },
    {
      img_url: "https://i.ibb.co/LhHGfDv6/tutor2.jpg",
      desc: t.usage_step_2,
      align: "right",
    },
    {
      img_url: "https://i.ibb.co/RpFQD0PN/tutor3.jpg",
      desc: t.usage_step_3,
      align: "left",
    },
    {
      img_url: "https://i.ibb.co/kgxMQXj6/tutor4.jpg",
      desc: t.usage_step_4,
      align: "right",
    },
  ];

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
          <span>{t.home_link}</span>
        </Link>
      </div>

      {/* About Section */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">
          {t.about_title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          <strong>CVision</strong> {t.about_description}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {t.about_usage}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.about_developed_for}
        </p>
      </section>

      {/* Usage Steps */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-6 text-center">
          {t.about_steps_title}
        </h2>
        <div className="flex flex-col gap-10">
          {usageSteps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                step.align === "right" ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className="flex-1">
                <img
                  src={step.img_url}
                  alt={`Langkah ${idx + 1}`}
                  className="rounded shadow-md w-full max-w-sm md:max-w-md object-contain mx-auto"
                />
              </div>
              <div className="flex-1 text-gray-700 dark:text-gray-200 text-base text-center md:text-left">
                <span className="font-semibold block mb-1">
                  {t.about_step} {idx + 1}:
                </span>
                <span>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} {t.footer_copyright}
      </footer>
    </div>
  );
};

export default About;
