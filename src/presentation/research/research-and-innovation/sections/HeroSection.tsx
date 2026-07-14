import Image from "next/image";
import { HeroSectionProps } from "@/features/research/research-and-innovation/types";
import { CustomLink } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  const { title, description, imageUrl, links } = heroSection;
  return (
    <section className="relative pt-[140px] sm:pt-32 pb-6 px-4">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:mt-5 px-6 md:px-7 xl:px-16">
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white md:text-[64px] md:mt-12 md:mb-8 leading-[1.2] font-semibold mb-5">
            {title}
          </h1>
          <p className="text-xl leading-[1.4] text-justify text-white font-poppins mb-5">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 font-poppins">
            {links &&
              links?.map((link, index) => {
                return <CustomLink link={link} key={index} index={index} />;
              })}
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={imageUrl}
            width={768}
            height={768}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default HeroSection;
