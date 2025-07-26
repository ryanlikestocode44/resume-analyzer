import React from "react";
import { BookOpenIcon, ExternalLinkIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface Course {
  title: string;
  url: string;
}

interface RecommendedCoursesSectionProps {
  courses: Course[];
}

const RecommendedCoursesSection: React.FC<RecommendedCoursesSectionProps> = ({
  courses,
}) => {
  if (!courses || courses.length === 0) return null;

  const { t } = useLanguage();

  return (
    <section id="recommended-courses" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        {t.recommended_courses_title}
      </h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        {t.recommended_courses_description}
      </p>
      <ul className="space-y-3">
        {courses.map((course, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <BookOpenIcon className="w-5 h-5 text-blue-500 mt-1" />
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              {course.title}
              <ExternalLinkIcon className="w-4 h-4 inline" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedCoursesSection;
