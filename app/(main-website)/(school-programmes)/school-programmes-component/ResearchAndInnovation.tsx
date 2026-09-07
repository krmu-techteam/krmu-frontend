import { Poppins } from "next/font/google";
import React from "react";
import { researchAndInnovationData } from "../programs/progdata/researchAndInnovationData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Props = {
  slug: string;
};

const ResearchAndInnovation = ({ slug }: Props) => {
  const data = researchAndInnovationData[slug];
  return (
    <section
      id="Research-and-Innovation"
      className="relative h-full lg:h-[800px]  py-16 md:py-20 lg:py-12 px-4 lg:px-10 xl:px-16 2xl:px-0 z-10 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        />
        {/* Dark Blue-Black Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(169.86deg,#001732_18.16%,#00469800_68.05%,#FFFFFF_100%)] opacity-[0.9]" />
      </div>

      <div className="relative z-10 max-w-[1319px] h-full mx-auto flex flex-col justify-between items-center">
        <div>
          {/* Title */}
          <h2
            className={`${poppins.className} font-heading text-center text-3xl md:text-[40px] lg:text-[35px] font-bold leading-tight text-white mb-4`}
          >
            {data.title}
          </h2>

          {/* Subtitle / Description */}
          <p
            className={`${poppins.className} text-center text-sm md:text-base lg:text-[16px] text-white max-w-[792px] mx-auto mb-25 lg:mb-16`}
          >
            {data.description}
          </p>
        </div>

        {/* Stats Container */}
        <div className=" relative  flex flex-col lg:flex-row  justify-center items-center w-full rounded-[10px] bg-[linear-gradient(55deg,#DE0000_-1.50%,#001732_4.57%)]  p-6 md:p-8 lg:py-4 lg:px-4 gap-6 lg:gap-0 overflow-hidden shadow-2xl">
          {/* Subtle Red/Coral Glow in bottom left corner */}
          {/* <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#b81d24] rounded-full blur-[80px] opacity-70 pointer-events-none" /> */}

          {data.stats.map((stat, index) => (
            <div
              key={index}
              className="relative font-poppins  flex flex-col items-center justify-center text-center px-4 lg:px-6  py-4 w-full lg:w-auto "
            >
              {index < data.stats.length - 1 && (
                <div className="absolute right-0 top-[10%] h-[80%] vertical-line lg:block" />
              )}
              <span className="block  font-semibold text-[18px]  text-white">
                {stat.title}
              </span>

              <span className="block  text-[18px] text-white font-normal leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAndInnovation;
