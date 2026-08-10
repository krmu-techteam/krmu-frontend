import React from "react";
import { TbAirConditioning, TbSoup } from "react-icons/tb";

const HostelKeyFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      visual: (
        <div className="flex items-baseline text-white">
          <span className="font-serif text-5xl lg:text-6xl font-bold tracking-tight">
            24
          </span>
          <span className="font-serif text-2xl lg:text-3xl font-semibold -translate-y-4">
            x
          </span>
          <span className="font-serif text-5xl lg:text-6xl font-bold tracking-tight">
            7
          </span>
        </div>
      ),
      title: "High Speed",
      subtitle: "Wifi",
    },
    {
      id: 2,
      visual: (
        <TbAirConditioning className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
      ),
      title: "Fully Air",
      subtitle: "Conditioned",
    },
    {
      id: 3,
      visual: (
        <div className="flex items-baseline text-white">
          <span className="font-serif text-5xl lg:text-6xl font-bold tracking-tight">
            1
          </span>
          <span className="font-serif text-xl lg:text-2xl font-semibold -translate-y-5">
            st
          </span>
        </div>
      ),
      title: "Grade Security",
      subtitle: "Measures",
    },
    {
      id: 4,
      visual: <TbSoup className="w-12 h-12 lg:w-14 lg:h-14 text-white" />,
      title: "Nutritious",
      subtitle: "Meals",
    },
  ];

  return (
    <section className="w-full font-poppins py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-4 sm:gap-6 py-4 md:py-2 px-4"
            >
              {/* Visual / Icon */}
              <div className="shrink-0  text-white flex items-center justify-center min-w-[70px]">
                {item.visual}
              </div>

              {/* Text Labels */}
              <div className="flex flex-col text-left">
                <span className="font-poppins text-base sm:text-lg lg:text-[20px] font-light text-white leading-snug">
                  {item.title}
                </span>
                <span className="font-poppins text-base sm:text-lg lg:text-[20px] font-light text-white leading-snug">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostelKeyFeatures;
