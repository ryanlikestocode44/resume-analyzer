// components/RecommendedFieldSection.tsx
import React from "react";

interface Props {
  field: string;
  matchPercent: number;
  matchedSkills?: string[];
}

const RecommendedFieldSection: React.FC<Props> = ({
  field,
  matchPercent,
  matchedSkills,
}) => {
  return (
    <section id="field-suggestion" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Bidang Pekerjaan Disarankan</h2>
      <p className="mb-2">
        <strong>{field}</strong> cocok untuk Anda dengan tingkat kecocokan{" "}
        <strong>{matchPercent}%</strong> berdasarkan skill berikut:
      </p>
      <ul className="list-disc ml-6 text-sm text-slate-700 dark:text-slate-300">
        {(matchedSkills || []).map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedFieldSection;
