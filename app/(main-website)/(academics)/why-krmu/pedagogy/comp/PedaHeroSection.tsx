import { STRAPI_URL } from "@/app/constant";

type Props = {
  title: string;
  title2: string;
  desc: string;
  bgImg: string;
  content: string;
};

const PedaHeroSection = ({ title, title2, desc, content, bgImg }: Props) => {
  return (
    <section
      className="pt-32 md:pt-[9%] pb-[5%] px-4  bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${STRAPI_URL}${bgImg})`,
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full lg:flex items-center  gap-[3.84%]">
        <div className="w-full lg:w-1/2 text-white">
          <h1 className="text-4xl mb-5 sm:text-[64px] font-semibold">
            {title}
          </h1>
          <p className="text-white text-lg leading-[1.7] mb-5 ">{desc}</p>
        </div>
        <div className="w-full lg:w-1/2 text-white text-lg leading-[1.7]">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <h3 className="text-[28px] text-[#0060aa] my-5 leading-[1.2] sm:leading-[1.7] font-semibold">
            {title2}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PedaHeroSection;
