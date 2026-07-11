import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  bgImgUrl: string;
};

const ExaminationHero = ({ title, bgImgUrl }: Props) => {
  return (
    <section
      className="pt-28 sm:pt-[24%] pb-[14%] px-4 bg-[url(/examination/examination-banner.webp)] rounded-b-[50px] overflow-hidden
    relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000080]"
      style={{
        background: `url(${STRAPI_URL}${bgImgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <h1 className="text-2xl md:text-5xl lg:text-[80px] font-semibold text-white z-10 relative">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ExaminationHero;
