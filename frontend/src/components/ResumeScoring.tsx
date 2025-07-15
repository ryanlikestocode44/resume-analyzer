import React from "react";

const ResumeScoring = ({ contentScore = 0, experienceScore = 0 }) => {
  return (
    <div className="my-6">
      <div id="content-score" className="mb-6">
        <h4 className="text-lg font-medium text-green-700">
          Score Konten Resume
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          Estimated from resume sections like Education, Skills, Projects, etc.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${contentScore}%` }}
          ></div>
        </div>
        <p className="mt-1 font-semibold">{contentScore} / 100</p>
      </div>

      <div id="experience-score" className="mb-6">
        <h4 className="text-lg font-medium text-blue-700">Score Pengalaman</h4>
        <p className="text-sm text-gray-500 mb-2">
          Based on depth, clarity, and structure of job experience.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${(experienceScore / 30) * 100}%` }}
          ></div>
        </div>
        <p className="mt-1 font-semibold">{experienceScore} / 30</p>
      </div>
    </div>
  );
};

export default ResumeScoring;