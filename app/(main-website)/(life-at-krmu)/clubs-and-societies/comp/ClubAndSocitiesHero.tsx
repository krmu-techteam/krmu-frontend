import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
  title: string;
  featured_image_url: string;
};

export const ClubAndSocitiesHero = ({ title, featured_image_url }: Props) => {
  return (
    <section className="relative h-[280px] sm:h-[400px] md:h-[600px] w-full flex items-end justify-center overflow-hidden pb-8 md:pb-24">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${STRAPI_URL}${featured_image_url}`}
          fill
          alt={title}
          className="object-cover object-[center_15%] md:object-center"
          priority
        />
        {/* Professional Multi-layered Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
      </div>

      {/* Content Layer - Positioned at bottom to avoid faces */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center text-white">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold leading-[1.1] tracking-tight drop-shadow-2xl">
          {title}
        </h1>
      </div>
    </section>
  );
};
