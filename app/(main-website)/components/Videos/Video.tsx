import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";


 
 interface VideoProps {
  video: StrapiMedia | null;
  className?: string;
}

const Video = ({ video, className }: VideoProps) => {
  if (!video) return null;

  const videoUrl = `${STRAPI_URL}${video.url}`;

  return (
    <>
      <video
        className={className || "w-auto min-w-full min-h-[600px] lg:min-h-screen max-w-none"}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;