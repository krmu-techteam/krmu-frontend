
import { StrapiMedia } from "@/lib/types/common";
import Video from "../components/Videos/Video";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  video: StrapiMedia | null 
} 
const HeroSection = ({title, subtitle, video}: HeroSectionProps) => {
  return (
    <>
      <section className="relative overflow-hidden">
        <Video video={video} />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center text-white px-4 md:px-0">
          <p className="text-xl md:text-2xl font-light">
            {subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
