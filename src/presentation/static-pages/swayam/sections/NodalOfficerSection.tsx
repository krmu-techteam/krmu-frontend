import React from "react";
import Image from "next/image";

export const NodalOfficerSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-auto md:h-[495px] py-10 md:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(101.86deg, #001732 57.77%, #002002 88.06%)",
      }}
    >
      <div className="container mx-auto max-w-[1260px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
        {/* Left Column: Portrait Image */}
        <div className="shrink-0">
          <div className="relative w-[200px] sm:w-[240px] md:w-[276px] max-w-full h-[202px] sm:h-[242px] md:h-[279px] rounded-[9px] overflow-hidden shadow-xl">
            <Image
              src="/swayam/swayam-nodal-officer.jpg"
              alt="Ms. Vidhi Gaur - SWAYAM Nodal Officer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Right Column: Exact Text Content matching Figma */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white space-y-3 sm:space-y-4">
          {/* Header Block */}
          <div>
            <h2 className="text-white text-[22px] sm:text-[26px] font-bold tracking-tight leading-tight">
              SWAYAM Nodal Officer
            </h2>
            <p className="text-white/90 text-sm sm:text-[16px] font-normal mt-0.5">
              K.R. Mangalam University
            </p>
          </div>

          {/* Officer Details Block */}
          <div className="space-y-0.5 text-white/90 text-sm sm:text-[16px]">
            <p className="text-white font-bold text-sm sm:text-[16px] mb-1">
              Ms. Vidhi Gaur
            </p>
            <p className="leading-snug">SWAYAM Nodal Officer</p>
            <p className="leading-snug">
              Assistant Dean – Online and Digital Learning
            </p>
            <p className="leading-snug">
              Member Secretary – LMS & E-Learning Committee
            </p>
          </div>

          {/* Contact Details Block */}
          <div className="space-y-0.5 text-white/90 text-sm sm:text-[16px] pt-1">
            <p>
              <span className=" text-white">Phone:</span> +91-8448390215
            </p>
            <p className="break-all sm:break-normal">
              <span className=" text-white">Email:</span>{" "}
              swayam-uno-0700@krmangalam.edu.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NodalOfficerSection;
