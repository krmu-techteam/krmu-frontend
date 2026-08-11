"use client";
import React from "react";
import { SchoolCategoryType } from "@/lib/types/school-programme";

type Props = {
  schoolCat: SchoolCategoryType;
};

export const ActionCards = ({ schoolCat }: Props) => {
  const brochureLinks: Record<string, string> = {
    soet: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOET_Print2_2174445457.pdf",
    somc: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOMC_a992b7ec7f.pdf",
    sols: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLS_Print_399f0d11d3.pdf",
    smas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SMAS_Print_ec7f43f883.pdf",
    sprs: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SPRS_Print_3_17f374576b.pdf",
    sola: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLA_Print2_d64c6893cd.pdf",
    soad: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAD_Print_bede034fe7.pdf",
    sbas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SBAS_Print_e7613fb246.pdf",
    semce:
      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SJMC_Print2_dadeaa8143.pdf",
    soed: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOED_Print2_ea2b3a76ee.pdf",
    soas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAS_Print_d94bbd699d.pdf",
  };

  const brochureLink = brochureLinks[schoolCat?.slug] || "#";

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement =
      document.getElementById("apply-form") ||
      document.getElementById("hero-form") ||
      document.getElementById("apply-form-mobile") ||
      document.querySelector(".heroBannerForm__form");

    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Card 1: Apply Now */}
          <div
            onClick={handleApplyClick}
            className="bg-[#CAE2F0] rounded-[5px] p-6 sm:p-7 h-[253px] flex flex-col justify-between items-start text-left w-full cursor-pointer hover:shadow-md transition-all duration-300"
          >
            <div>
              <h3 className="font-serif text-3xl sm:text-[42px] font-bold text-[#000000] tracking-tight leading-tight mb-3">
                Apply Now
              </h3>
              <p className="text-sm sm:text-[14px] text-[#000000] font-poppins leading-relaxed">
                Login to your application page to start your application and
                reserve your place in the class of 2026.
              </p>
            </div>
            <button
              type="button"
              onClick={handleApplyClick}
              className="inline-flex items-center font-poppins justify-center px-6 py-2.5 bg-white text-[#000000] text-sm font-semibold rounded-[4px] hover:bg-white/90 transition-all duration-200 cursor-pointer"
            >
              Apply Now
            </button>
          </div>

          {/* Card 2: Connect */}
          <div className="bg-[#E7C268] rounded-[5px] p-6 sm:p-7 h-[253px] flex flex-col justify-between items-start text-left w-full">
            <div>
              <h3 className="font-serif text-3xl sm:text-[42px] font-bold text-[#000000] tracking-tight leading-tight mb-3">
                Connect
              </h3>
              <p className="text-sm sm:text-[14px] text-[#000000] font-poppins leading-relaxed">
                If you would like to speak to an admission counselor please
                connect with us.
              </p>
            </div>
            <a
              href="tel:9311411717"
              className="inline-flex items-center font-poppins justify-center px-6 py-2.5 bg-white text-[#000000] text-sm font-semibold rounded-[4px] hover:bg-white/90 transition-all duration-200"
            >
              Talk Now
            </a>
          </div>

          {/* Card 3: Brochure */}
          <div className="bg-white rounded-[5px] p-6 sm:p-7 h-[253px] flex flex-col justify-between items-start text-left w-full">
            <div>
              <h3 className="font-serif text-3xl sm:text-[42px] font-bold text-[#000000] tracking-tight leading-tight mb-3">
                Brochure
              </h3>
              <p className="text-sm sm:text-[14px] text-[#000000] font-poppins leading-relaxed">
                Download our latest prospectus for a detailed look at our
                program offerings.
              </p>
            </div>
            <a
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-poppins justify-center px-6 py-2.5 bg-[#CAE2F0] text-[#000000] text-sm font-semibold rounded-[4px] hover:bg-[#CAE2F0]/80 transition-all duration-200"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCards;
