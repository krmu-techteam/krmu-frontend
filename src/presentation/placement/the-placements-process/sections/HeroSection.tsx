import Image from "next/image";
import { HERO_DATA } from "@/features/placement/the-placements-process";

const HeroSection = () => {
  return (
    <section className="pt-[25%] sm:pt-[15%] lg:pb-[9%] bg-[url(/programmes/InternationalCollaborationsBannerBackground.webp)] lg:bg-[url(/programmes/placebanner.jpg)] px-4">
      <div className="text-white max-w-[1530px] mx-auto w-full">
        <div className="max-w-3xl my-[2.5] ">
          {HERO_DATA.map((hero) => {
            return (
              <div key={hero.title}>
                <h1 className="text-2xl sm:text-4xl font-bold md:text-5xl mt-2.5 mb-3.5">
                  {hero.title}
                </h1>
                <p className="font-poppins">{hero.description}</p>
                <div className="flex justify-center">
                  <Image
                    src={hero.imageUrl}
                    width={442}
                    height={367}
                    alt="mob banner image"
                    className="lg:hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
