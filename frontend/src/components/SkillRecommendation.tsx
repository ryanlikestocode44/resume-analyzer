import React from "react";

interface Course {
  title: string;
  url: string;
}

interface SkillRecommendationProps {
  userSkills?: string[];
  recommendedSkills?: string[];
  recommendedField?: string;
  recommendedCourses?: Course[];
}

const SkillRecommendation: React.FC<SkillRecommendationProps> = ({
  userSkills = [],
  recommendedSkills = [],
  recommendedField = "",
  recommendedCourses = [],
}) => {
  return (
    <section className="my-8 space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Skill & Course Recommendations
        </h3>
      </div>

      {userSkills.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-700">Detected Skills:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {userSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {recommendedField && (
        <div>
          <h4 className="text-green-600 font-medium">Recommended Field:</h4>
          <p className="text-gray-700">{recommendedField}</p>
        </div>
      )}

      {recommendedSkills.length > 0 && (
        <div>
          <h4 className="text-green-600 font-medium">
            Suggested Skills to Learn:
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {recommendedSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full border border-green-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {recommendedCourses.length > 0 && (
        <div>
          <h4 className="text-green-600 font-medium">Course Suggestions:</h4>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {recommendedCourses.map((course, idx) => (
              <li key={idx}>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SkillRecommendation;
