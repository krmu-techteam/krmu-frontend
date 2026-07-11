import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  bgImageUrl: string;
};

const DeanHonorHero = ({ title, bgImageUrl }: Props) => {
  return (
    <section
      className="pt-[140px] md:pt-[15%] pb-[5%] bg-cover bg-no-repeat bg-center px-4"
      style={{
        background: `url(${STRAPI_URL}${bgImageUrl})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <h1 className="leading-[1.2] mb-10 text-white text-[26px] md:text-[64px] font-semibold text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default DeanHonorHero;
