import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  highlightheading: string;
  description: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
  point7: string;
  logos: StrapiMedia[];
};

const FinancialAssistance = ({
  heading,
  highlightheading,
  description,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  logos,
}: Props) => {
  const points = [point1, point2, point3, point4, point5, point6, point7].filter(Boolean);

  return (
    <section className="prog-global-padding py-8 md:p-6 lg:py-10 xl:py-10 2xl:py-16 px-4 lg:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container !max-w-7xl">
          <h2 className="heading-primary mb-2 2xl:mb-4">
            {heading}{" "}{highlightheading} 
          </h2>
          <p className="text-lg md:text-[17px] font-poppins text-white/90 px-36 text-center md:mb-4">{description}</p>
        </div>

        {/* Points Layout */}
        <div className="mt-4 lg:mt-6 2xl:mt-10 flex flex-col gap-8">
          {/* Row 1: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {points.slice(0, 4).map((point, index) => (
              <div
                key={index}
                className="p-4 font-normal text-base text-white font-poppins text-center rounded-sm flex items-center justify-center  h-full transition-all duration-300 border border-gray-300"
               
              >
                {point}
              </div>
            ))}
          </div>

          {/* Row 2: 3 Items Centered */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8">
            {points.slice(4).map((point, index) => (
              <div
                key={index + 4}
                className="p-4 font-normal text-base text-white font-poppins text-center rounded-sm flex items-center justify-center transition-all duration-300  w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] border border-gray-300"
               
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Logos Grid */}
        <div className="mt-4 lg:mt-12 2xl:mt-16 flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4 xl:gap-8 w-full sm:w-full">
            {logos &&
              logos.map((logo) => {
                return (
                  <div key={logo?.id} className="flex items-center justify-center border border-gray-200 p-4 rounded-sm bg-white hover:border-[#0a41a1] transition-all duration-300 group h-24">
                    <Image
                      src={`${STRAPI_URL}${logo?.url}`}
                      width={126}
                      height={41}
                      alt={logo?.alternativeText || "Financial Assistance Logo"}
                      className=" transition-all duration-300 pointer-events-none object-contain group-hover:scale-105"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistance;
