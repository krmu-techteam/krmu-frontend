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
    <section className="prog-global-padding bg-[#f8f9fd]">
      <div className="max-w-[1440px] mx-auto w-full px-2.5 sm:px-4">
        <div className="common-prog-container !max-w-4xl">
          <h2 className="heading">
            {heading}{" "}{highlightheading} 
          </h2>
          <p className="sub-heading text-black/70">{description}</p>
        </div>

        {/* Points Layout */}
        <div className="mt-10 flex flex-col gap-6">
          {/* Row 1: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {points.slice(0, 4).map((point, index) => (
              <div
                key={index}
                className="p-5 font-medium text-base text-[#0a41a1] text-center rounded-sm flex items-center justify-center bg-white h-full transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                {point}
              </div>
            ))}
          </div>

          {/* Row 2: 3 Items Centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {points.slice(4).map((point, index) => (
              <div
                key={index + 4}
                className="p-5 font-medium text-base text-[#0a41a1] text-center rounded-sm flex items-center justify-center bg-white transition-all duration-300 hover:shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Logos Grid */}
        <div className="mt-16 flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-10 w-full sm:w-10/12">
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
