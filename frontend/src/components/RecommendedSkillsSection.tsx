import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

interface RecommendedSkillsSectionProps {
  skills: string[];
}

const RecommendedSkillsSection: React.FC<RecommendedSkillsSectionProps> = ({
  skills,
}) => {
  if (!skills || skills.length === 0) return null;

  const { t } = useLanguage();

  return (
    <section id="recommended-skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        {t.recommended_skills_title}
      </h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        {t.recommended_skills_description}
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
