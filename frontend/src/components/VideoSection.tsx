import React from "react";

interface VideoSectionProps {
  resumeVideo?: string;
  interviewVideo?: string;
}

/**
 * Convert YouTube URL (watch?v= or youtu.be) to embeddable URL
 */
const toEmbedUrl = (url: string): string => {
  if (!url) return "";

  // Support both long (watch?v=...) and short (youtu.be/...) formats
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const VideoSection: React.FC<VideoSectionProps> = ({
  resumeVideo,
  interviewVideo,
}) => {
  return (
    <section className="my-8 space-y-8">
      <h3 className="text-xl font-semibold text-gray-800">Tips & Resources</h3>

      {resumeVideo && (
        <div>
          <h4 className="text-lg font-medium text-purple-700 mb-2">
            Resume Writing Tips 💡
          </h4>
          <iframe
            width="100%"
            height="315"
            src={toEmbedUrl(resumeVideo)}
            title="Resume Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      {interviewVideo && (
        <div>
          <h4 className="text-lg font-medium text-purple-700 mb-2">
            Interview Tips 🎤
          </h4>
          <iframe
            width="100%"
            height="315"
            src={toEmbedUrl(interviewVideo)}
            title="Interview Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          />
        </div>
      )}
    </section>
  );
};

export default VideoSection;
