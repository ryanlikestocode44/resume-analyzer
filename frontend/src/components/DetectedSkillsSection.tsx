// src/components/DetectedSkillsSection.tsx
import React from "react";

interface DetectedSkillsSectionProps {
  skills: string[];
}

const DetectedSkillsSection: React.FC<DetectedSkillsSectionProps> = ({
  skills,
}) => {
  if (!skills || skills.length === 0) {
    return (
      <section id="detected-skills" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills yang Terdeteksi</h2>
        <p className="text-sm text-muted-foreground">
          Tidak ada skills terdeteksi.
        </p>
      </section>
    );
  }

  return (
    <section id="detected-skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills yang Terdeteksi</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default DetectedSkillsSection;
