import React from "react";
import { BookOpenIcon } from "lucide-react";

interface RecommendedCoursesSectionProps {
  courses: string[];
}

const RecommendedCoursesSection: React.FC<RecommendedCoursesSectionProps> = ({
  courses,
}) => {
  if (!courses || courses.length === 0) return null;

  return (
    <section id="recommended-courses" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        Kursus yang Disarankan
      </h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        Berikut ini adalah daftar kursus online yang direkomendasikan untuk
        meningkatkan skill Anda pada bidang yang sesuai dengan resume Anda.
      </p>
      <ul className="space-y-3">
        {courses.map((course, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <BookOpenIcon className="w-5 h-5 text-blue-500 mt-1" />
            <span className="text-slate-700 dark:text-slate-200">{course}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedCoursesSection;