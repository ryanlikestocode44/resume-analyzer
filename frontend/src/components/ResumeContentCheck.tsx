// components/ResumeContentCheck.tsx
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface Props {
  education: string[];
  projects: string[];
  experience: string[];
}

const ResumeContentCheck: React.FC<Props> = ({
  education,
  projects,
  experience,
}) => {
  const { t } = useLanguage();

  return (
    <section id="content-check" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        {t.resume_content_check_title}
      </h2>
      <div id="education-section" className="mb-4">
        <h3 className="font-semibold">{t.education_section_title}</h3>
        {education.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{t.not_found}</p>
        )}
      </div>

      <div id="projects-section" className="mb-4">
        <h3 className="font-semibold">{t.projects_section_title}</h3>
        {projects.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {projects.map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{t.not_found}</p>
        )}
      </div>

      <div id="experiences-section">
        <h3 className="font-semibold">{t.experiences_section_title}</h3>
        {experience.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {experience.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">{t.not_found}</p>
        )}
      </div>
    </section>
  );
};

export default ResumeContentCheck;
