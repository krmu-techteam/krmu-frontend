import Image from "next/image";
import { HeroSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  const { heading, descriptions, imageUrl } = heroSection;
  return (
    <section className="bg-[url(/bg-gradient.webp)] font-poppins bg-no-repeat bg-cover pt-[140px] lg:pt-[10%] pb-[3%]">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center text-white px-6 md:px-8 xl:px-16">
        <div className="lg:w-2/3">
          <h1
            className="text-3xl md:text-[40px] font-bold mb-5 leading-[1.2]"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          {descriptions?.map((desc, idx) => {
            return (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: desc }}
                className="mb-5"
              />
            );
          })}
        </div>
        <div className="lg:w-1/3 flex justify-end">
          <Image src={imageUrl} width={352} height={352} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
