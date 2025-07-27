// src/pages/Home.tsx
import React, { useState } from "react";
import ResumeUploader from "@/components/ResumeUploader";
import ResumePreview from "@/components/ResumePreview";
import ResumeScoring from "@/components/ResumeScoring";
import SkillRecommendation from "@/components/SkillRecommendation";
import VideoSection from "@/components/VideoSection";
import AnalysisFooter from "@/components/AnalysisFooter";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "react-router-dom";

interface ResumeData {
  resume_score?: number;
  experience_score?: number;
  skills?: string[];
  recommended_skills?: string[];
  recommended_field?: string;
  recommended_courses?: { title: string; url: string }[];
  resume_video_url?: string;
  interview_video_url?: string;
}

const Home: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const handleUploadSuccess = (data: ResumeData, file: File) => {
    setResumeData(data);
    setResumeFile(file);
  };

  const { t } = useLanguage();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-800">CVision</h1>
        <p className="text-lg text-gray-400 mt-2">{t.subtitle}</p>
        <div className="absolute top-0 right-0 m-3 flex flex-col sm:flex-row gap-2">
          <ModeToggle />
          <LanguageToggle />
          <Link
            to="/about"
            className="text-sm px-3 py-1 rounded-md text-blue-700 dark:text-blue-300 hover:underline"
          >
            {t.about_link}
          </Link>
        </div>
      </section>

      <section>
        <ResumeUploader onUploadSuccess={handleUploadSuccess} />
      </section>

      <AnalysisFooter />

      {resumeFile && (
        <section>
          <ResumePreview file={resumeFile} />
        </section>
      )}

      {resumeData && (
        <>
          <section>
            <ResumeScoring
              contentScore={resumeData.resume_score || 0}
              experienceScore={resumeData.experience_score || 0}
            />
          </section>

          <section>
            <SkillRecommendation
              userSkills={resumeData.skills || []}
              recommendedSkills={resumeData.recommended_skills || []}
              recommendedField={resumeData.recommended_field || ""}
              recommendedCourses={resumeData.recommended_courses || []}
            />
          </section>

          <section>
            <VideoSection
              resumeVideo={resumeData.resume_video_url || ""}
              interviewVideo={resumeData.interview_video_url || ""}
            />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
