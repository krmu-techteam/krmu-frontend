import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";

type Props = {
  title: string;
  bgImage: StrapiMedia;
};

const MagazineHero = ({ title, bgImage }: Props) => {
  return (
    <>
      <section
        id="magazine_reflection_hero"
        className="pt-[140px] pb-20 px-4 md:py-[20%]"
        style={{
          background: `url(${STRAPI_URL}${bgImage?.url})`,
        }}
      >
        <div className="max-w-[1664px] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl lg:text-[108px] text-white font-extrabold">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default MagazineHero;
