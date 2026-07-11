import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
  bgimage: StrapiMedia;
};
const GalleryPageHero = ({ title, bgimage }: Props) => {
  return (
    <section
      className="pt-[150px] pb-[50px] md:py-[150px] text-center lg:py-0 lg:h-[800px] bg-cover bg-no-repeat px-4"
      style={{
        background: `url(${STRAPI_URL}${bgimage?.url})`,
      }}
    >
      <div className="max-w-[800px] mx-auto w-full h-full text-white text-2xl md:text-4xl lg:text-6xl font-semibold flex items-center justify-center">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default GalleryPageHero;
