import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
  bgurl: StrapiMedia;
};

const VideoGalleryHero = ({ title, bgurl }: Props) => {
  return (
    <section
      className="pt-[100px] md:py-[10%] pb-[8%] bg-cover bg-no-repeat px-4"
      style={{
        background: `url(${STRAPI_URL}${bgurl?.url})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="text-xl md:text-6xl text-white text-center font-semibold my-5">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default VideoGalleryHero;
