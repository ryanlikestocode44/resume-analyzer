import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Progress } from "@/components/ui/progress";

const ResumeScoring = ({ contentScore = 0, experienceScore = 0 }) => {
  const { t } = useLanguage();

  return (
    <div className="my-6">
      <h2 id="resume-score" className="text-2xl font-bold mb-4">
        {t.resume_scoring_title}
      </h2>

      <div id="content-score" className="mb-6">
        <h4 className="text-lg font-medium text-green-700">
          {t.content_score_title}
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          {t.content_score_description}
        </p>
        <Progress value={contentScore} className="w-full" />
        <p className="mt-1 font-semibold">{contentScore} / 100</p>
      </div>

      <div id="experience-score" className="mb-6">
        <h4 className="text-lg font-medium text-blue-700">
          {t.experience_score_title}
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          {t.experience_score_description}
        </p>
        <Progress value={(experienceScore / 30) * 100} className="w-full" />
        <p className="mt-1 font-semibold">{experienceScore} / 30</p>
      </div>
    </div>
  );
};

export default ResumeScoring;