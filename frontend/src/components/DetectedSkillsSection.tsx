import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

interface DetectedSkillsSectionProps {
  skills: string[];
}

const DetectedSkillsSection: React.FC<DetectedSkillsSectionProps> = ({
  skills,
}) => {
  const [skillList, setSkillList] = useState<string[]>(skills || []);
  const [newSkill, setNewSkill] = useState<string>("");

  const handleAddSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !skillList.includes(trimmed)) {
      setSkillList([...skillList, trimmed]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkillList(skillList.filter((skill) => skill !== skillToRemove));
  };

  const { t } = useLanguage();

  return (
    <section id="detected-skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{t.detected_skills}</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {skillList.length > 0 ? (
          skillList.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900 dark:text-blue-100 flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-1 text-red-500 hover:text-red-700 font-bold"
                aria-label={`Hapus ${skill}`}
              >
                ×
              </button>
            </span>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            {t.no_skills_detected}.
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
          placeholder={t.add_other_skill}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm w-64 bg-white dark:bg-slate-800 text-black dark:text-white"
        />
        <Button
          onClick={handleAddSkill}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {t.add_skill_btn}
        </Button>
      </div>
    </section>
  );
};

export default DetectedSkillsSection;
