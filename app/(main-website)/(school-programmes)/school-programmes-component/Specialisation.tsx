"use client";

import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { SpecialisationCard } from "@/lib/types/school-programme";
import Image from "next/image";

type Props = {
  heading: string;
  highlightheading: string;
  specialisations: SpecialisationCard[];
};

const Specialisation = ({
  heading,
  highlightheading,
  specialisations,
}: Props) => {
  const [showAll, setShowAll] = useState(false);

  // Staging / Testing Image Overrides to avoid hitting live Strapi for test data
  const getSpecialisationImage = (title: string, currentUrl: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes("robotics")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_robotics_and_ai_b9b24da4a4.jpeg";
    }
    if (lowerTitle.includes("ai") || lowerTitle.includes("machine learning")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_ai_and_ml_b0fc013bcb.png";
    }
    if (lowerTitle.includes("cyber security")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_cyber_security_c32ad8f7f8.jpeg";
    }
    if (lowerTitle.includes("data science")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_data_science_ff14ce5505.jpeg";
    }
    if (lowerTitle.includes("full stack")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_full_stack_development_aade4f5abe.png";
    }
    if (lowerTitle.includes("ux") || lowerTitle.includes("ui")) {
      return "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_ux_ui_00fecef876.jpeg";
    }

    return currentUrl ? `${STRAPI_URL}${currentUrl}` : "/programmes/specialisation.webp";
  };

  const displayedSpecialisations = showAll 
    ? specialisations 
    : specialisations?.slice(0, 4);

  return (
    <section className="prog-global-padding py-8 md:py-16 px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight mb-2">
            {heading}{" "}{highlightheading} 
          </h2>
        </div>

        {/* New Product Card Grid: */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {displayedSpecialisations &&
            displayedSpecialisations.map((specialisation) => {
              const displayImage = getSpecialisationImage(
                specialisation?.title || "",
                specialisation?.specialisationimg?.url || ""
              );

              return (
                <div
                  key={specialisation?.id}
                  className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col group h-full"
                >
                  <div className="relative w-full aspect-[17/14] bg-white flex items-center justify-center overflow-hidden border-b border-gray-50">
                    <Image
                      fill
                      src={displayImage}
                      alt={specialisation?.title}
                      className="object-contain group-hover:scale-105 transition-transform duration-700 p-1"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col items-center justify-center text-center bg-white z-10">
                    <a
                      href={specialisation?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:no-underline"
                    >
                      <h5 className="text-lg font-semibold text-[#0a41a1]/80 group-hover:text-[#0a41a1] transition-colors duration-300 leading-tight">
                        {specialisation?.title}
                      </h5>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {specialisations && specialisations.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#0a41a1] text-white rounded-md font-semibold hover:bg-[#0a41a1]/90 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialisation;
