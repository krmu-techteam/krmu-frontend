import Image from "next/image";
import { HeroSectionProps } from "../types";

const HeroSection = ({ heroSection }: { heroSection: HeroSectionProps }) => {
  const { heading, description, descriptionTwo, imageUrl } = heroSection;
  return (
    <section className="bg-[url(/bg-gradient.webp)] font-poppins bg-no-repeat bg-cover pt-[140px] lg:pt-[12%] pb-[10%]">
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-center text-white gap-10 px-6 md:px-7 xl:px-16">
        <div className="lg:w-2/3">
          <h1 className="text-3xl md:text-[42px] font-bold mb-5 leading-[1.2] pr-16">
            {heading}
          </h1>
          <p>{description}</p>
          <br />
          <p>{descriptionTwo}</p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image src={imageUrl} width={211} height={211} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
