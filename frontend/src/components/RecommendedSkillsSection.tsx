import React from "react";
import { Badge } from "@/components/ui/badge";

interface RecommendedSkillsSectionProps {
  skills: string[];
}

const RecommendedSkillsSection: React.FC<RecommendedSkillsSectionProps> = ({
  skills,
}) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="recommended-skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        Skills yang Direkomendasikan
      </h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        Berdasarkan resume Anda, berikut adalah beberapa skill yang disarankan
        untuk dipelajari agar meningkatkan peluang di bidang yang sesuai.
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSkillsSection;
