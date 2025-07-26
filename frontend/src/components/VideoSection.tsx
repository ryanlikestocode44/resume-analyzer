import React from "react";
import { LightbulbIcon, MicIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Ubah URL YouTube menjadi versi embed
 */
const toEmbedUrl = (url: string): string => {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

interface VideoSectionProps {
  resumeVideo?: string;
  interviewVideo?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  resumeVideo,
  interviewVideo,
}) => {
  if (!resumeVideo && !interviewVideo) return null;

  const { t } = useLanguage();

  return (
    <section className="mb-12 space-y-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        {t.video_section_title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        {t.video_section_description}
      </p>

      <div className="space-y-6">
        {resumeVideo && (
          <div
            id="resume-tutorial"
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <LightbulbIcon className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {t.resume_tutorial_tip}
              </h3>
            </div>
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-md">
              <iframe
                src={toEmbedUrl(resumeVideo)}
                title="Resume Tips"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        )}

        {interviewVideo && (
          <div
            id="interview-tutorial"
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <MicIcon className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {t.interview_tutorial_tip}
              </h3>
            </div>
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-md">
              <iframe
                src={toEmbedUrl(interviewVideo)}
                title="Interview Tips"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
