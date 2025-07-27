import React, { useEffect, useState } from "react";
import ResumePreview from "@/components/ResumePreview";
import ResumeScoring from "@/components/ResumeScoring";
import PersonalInfoSection from "@/components/PersonalInfoSection";
import DetectedSkillsSection from "@/components/DetectedSkillsSection";
import RecommendedFieldSection from "@/components/RecommendedFieldSection";
import ResumeContentCheck from "@/components/ResumeContentCheck";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import OverallScoreChart from "./OverallScoreChart";
import RecommendedSkillsSection from "./RecommendedSkillsSection";
import RecommendedCoursesSection from "./RecommendedCoursesSection";
import VideoSection from "./VideoSection";
import AnalysisFooter from "./AnalysisFooter";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";
import ResumeNotFound from "./ResumeNotFound";

const AnalysisPage: React.FC = () => {
  const [resumeData, setResumeData] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("personal-info");

  const { t } = useLanguage();

  const sections = [
    {
      id: "personal-info",
      label: t.personal_info,
    },
    {
      id: "detected-skills",
      label: t.detected_skills,
    },
    {
      id: "field-suggestion",
      label: t.field_suggestion,
    },
    {
      id: "content-check",
      label: t.content_check,
      children: [
        { id: "education-section", label: t.education_section },
        { id: "projects-section", label: t.projects_section },
        { id: "experiences-section", label: t.experiences_section },
      ],
    },
    {
      id: "resume-score",
      label: t.resume_score,
      children: [
        { id: "content-score", label: t.content_score },
        { id: "experience-score", label: t.experience_score },
      ],
    },
    {
      id: "recommended-skills",
      label: t.recommended_skills,
    },
    {
      id: "recommended-courses",
      label: t.recommended_courses,
    },
    {
      id: "resume-tutorial",
      label: t.resume_tutorial,
    },
    {
      id: "interview-tutorial",
      label: t.interview_tutorial,
    },
  ];

  useEffect(() => {
    const storedData = sessionStorage.getItem("resumeResult");
    if (storedData) {
      setResumeData(JSON.parse(storedData));
    }

    const storedUrl = sessionStorage.getItem("resumeDataUrl");
    if (storedUrl) {
      // buat File palsu dari base64 hanya untuk kompatibilitas
      const base64 = storedUrl.split(",")[1];
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length)
        .fill(0)
        .map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const fakeFile = new File([blob], "resume.pdf", {
        type: "application/pdf",
      });
      setFile(fakeFile);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections.flatMap((s) => s.children || [s])) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("resumeResult");
      sessionStorage.removeItem("resumeDataUrl");
    };
  }, []);

  if (!resumeData)
    return (
      <>
        <ResumeNotFound />
      </>
    );

  const contentScore = resumeData.content_score || 75;
  const experienceScore = resumeData.experience_score || 20;
  const overallScore = Math.round(
    (contentScore + (experienceScore / 30) * 100) / 2
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-800 shadow-md border-r sticky top-0 h-screen overflow-y-auto p-6">
        {/* Sidebar Score Keseluruhan */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">{t.overall_score}</h2>
          <OverallScoreChart score={overallScore} />
        </div>

        <nav className="space-y-2 text-sm">
          <p className="font-semibold mb-2">{t.analysis_navigation}</p>
          <ul className="space-y-1 text-slate-700 dark:text-slate-200">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() =>
                    document
                      .getElementById(sec.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full text-left transition hover:underline cursor-pointer ${
                    activeSection === sec.id
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  • {sec.label}
                </button>

                {sec.children && (
                  <ul className="ml-4 list-disc text-xs mt-1 space-y-1">
                    {sec.children.map((child) => (
                      <li key={child.id}>
                        <button
                          onClick={() =>
                            document
                              .getElementById(child.id)
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className={`hover:underline cursor-pointer ${
                            activeSection === child.id
                              ? "text-blue-600 font-semibold"
                              : ""
                          }`}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Konten Tengah */}
      <main className="flex-1 px-3 py-8 overflow-auto lg:mr-[33.33%]">
        <div className="absolute top-0 sm:right-0 lg:right-2/6 m-3 flex flex-col sm:flex-row gap-2 z-50">
          <ModeToggle />
          <LanguageToggle />
        </div>

        <section id="personal-info" className="mb-12">
          <PersonalInfoSection
            name={resumeData.name}
            email={resumeData.email}
            phone={resumeData.phone}
            linkedin={resumeData.linkedin}
            github={resumeData.github}
            pages={resumeData.no_of_pages}
          />
        </section>
        <section id="detected-skills" className="mb-12">
          <DetectedSkillsSection skills={resumeData.skills || []} />
        </section>
        <section id="field-suggestion" className="mb-12">
          <RecommendedFieldSection
            field={resumeData.recommended_field}
            matchPercent={Math.round(resumeData.field_match_percent)}
            matchedSkills={resumeData.matched_field_skills}
          />
        </section>
        <section id="resume-contents" className="mb-12">
          <ResumeContentCheck
            education={resumeData.education || []}
            projects={resumeData.projects || []}
            experience={resumeData.experience_items || []}
          />
        </section>
        <section id="resume-score" className="mb-12">
          <ResumeScoring
            contentScore={contentScore}
            experienceScore={experienceScore}
          />
        </section>
        <section id="recommended-skills" className="mb-12">
          <RecommendedSkillsSection
            skills={resumeData.recommended_skills || []}
          />
        </section>
        <section id="recommended-courses" className="mb-12">
          <RecommendedCoursesSection
            courses={resumeData.recommended_courses || []}
          />
        </section>
        <section className="mb-12">
          <VideoSection
            resumeVideo={resumeData.resume_video_url}
            interviewVideo={resumeData.interview_video_url}
          />
        </section>
        <AnalysisFooter />
      </main>

      {/* Preview Resume */}
      <aside className="hidden lg:block fixed right-0 top-0 w-1/3 h-screen border-l bg-white dark:bg-slate-950 shadow-inner z-30">
        <ResumePreview file={file} />
      </aside>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg w-[90%] max-w-md relative">
            <Button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-slate-500 hover:text-red-500"
              aria-label="Tutup pop-up"
            >
              <XIcon className="w-5 h-5" />
            </Button>

            <h2 className="text-xl font-bold mb-4 text-center">
              {t.your_resume_score}:{" "}
              <span className="text-green-600">{overallScore}/100</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 text-center">
              {t.resume_score_description}
            </p>
            <div className="text-center">
              <Button onClick={() => setShowModal(false)}>
                {t.see_more_details}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisPage;
