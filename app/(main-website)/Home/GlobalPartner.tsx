import { StrapiMedia } from "@/lib/types/common";
import HomeGlobalCarousel from "../components/Carousels/HomeGlobalCarousel";

interface GlobalPartenerProp {
  title: string;
  desc: string;
  logoSliderHeading: string;
  globalLogos: StrapiMedia[]
}
 
const GlobalPartner = ({
  title,
  desc,
  logoSliderHeading,
  globalLogos
}: GlobalPartenerProp) => {
  return (
    <>
      <section className="py-10 xl:py-20 px-4">
        <div className="flex flex-col gap-5 xl:gap-10 xl:flex-row xl:max-w-7xl 2xl:max-w-[1664px] mx-auto w-full">
          <div className="w-full xl:w-1/2 text-center lg:text-left">
            <h5 className="text-2xl md:text-4xl xl:text-5xl leading-tight font-semibold mt-2.5 mb-4 ">
              {title}
            </h5>
            <p className="text-lg">{desc}</p>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="text-center">
              <h4 className="text-2xl sm:text-4xl xl:text-5xl leading-tight mt-2.5 mb-4 font-semibold">
                {logoSliderHeading}
              </h4>
            </div>
            <div>
              <HomeGlobalCarousel logos={globalLogos} /> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalPartner;
