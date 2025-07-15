// components/ResumeContentCheck.tsx
import React from "react";

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
  return (
    <section id="resume-contents" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Check Konten Resume</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Pendidikan</h3>
        {education.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">Tidak ditemukan.</p>
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Project</h3>
        {projects.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {projects.map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">Tidak ditemukan.</p>
        )}
      </div>

      <div>
        <h3 className="font-semibold">Pengalaman Kerja</h3>
        {experience.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {experience.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">Tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default ResumeContentCheck;
