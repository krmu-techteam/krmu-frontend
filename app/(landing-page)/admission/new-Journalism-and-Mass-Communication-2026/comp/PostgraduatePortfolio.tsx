import React from "react";
import { ArrowRightCircle } from "lucide-react";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import Link from "next/link";

const portfolioItems = [
  "Long form feature stories, investigations and explainers",
  "Short films, OTT pilots and documentary projects",
  "Multimedia news packages for web, TV and mobile",
  "Audio series, podcasts and radio shows",
  "Data driven stories, charts and visual explainers",
  "Integrated campaigns and brand communication decks",
  "Community and creator economy projects with growth metrics",
  "A dissertation or capstone project that connects research with real media practice",
];

export default function PostgraduatePortfolio({
  heroSection,
}: {
  heroSection: any;
}) {
  return (
    <section className="w-full bg-[#f3f0f4] py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 lg:mb-15 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-[52px] leading-tight font-serif font-normal text-[#131B2E]">
            See what our postgraduates create
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-[20px] text-[#000000] leading-6">
            The MA programme is designed so that every semester adds to your
            portfolio and your research profile.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[487px_1fr] gap-10 xl:gap-24 items-start">
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src="/new-Programmes-Hero/See_what_our_postgraduates.png"
              alt="Reporter"
              className="
                w-full
                max-w-[487px]
                h-[420px]
                sm:h-[520px]
                md:h-[598px]
                object-cover
                object-top
                rounded-xl
                shadow-md
              "
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000000] mb-8 sm:mb-10">
              Your portfolio may include:
            </h2>
            <div className="space-y-5 sm:space-y-6">
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <ArrowRightCircle
                    size={20}
                    className="mt-1 text-black shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                  />

                  <p className="text-sm sm:text-base md:text-[16px] font-normal text-[#000000] leading-6 sm:leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 bg-[#f7f7f7] rounded-xl px-5 sm:px-8 md:px-14 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-[22px] leading-tight font-semibold text-[#000A4D]">
                By the time you graduate, you are not just carrying a
                postgraduate degree
              </h2>

              <p className="mt-4 text-base sm:text-lg md:text-[18px] text-[#000000] leading-6">
                you are carrying work you can show to editors, hiring managers,
                collaborators and investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* <button
                className="
                w-full sm:w-auto
                bg-[#E21F21]
                hover:bg-[#db3123]
                transition-all duration-300
                font-semibold
                cursor-pointer
                text-white
                text-sm sm:text-md
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-[3px]
                sm:min-w-[220px]
              "
              > */}
              <NpfPopup
                formId="31c1452015d32698095f833b3e7eb9c5"
                btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} rounded-md w-full sm:w-auto
                bg-[#E21F21]
                hover:bg-[#db3123]
                transition-all duration-300
                font-semibold
                cursor-pointer
                text-white
                text-sm sm:text-md
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-[3px]
                sm:min-w-[220px]`}
                btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                showIcon={true}
              />
              {/* </button> */}
              <button
                className="
                w-full sm:w-auto
                border border-gray-300
                hover:border-black
                transition-all duration-300
                font-semibold
                cursor-pointer
                text-black
                text-sm sm:text-md
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-[3px]
                sm:min-w-[220px]
              "
              >
                <Link
                  href="https://www.krmangalam.edu.in/pdfs/handbooks/majmc-handbook-2025-27.pdf"
                  target="_blank"
                >
                  Download Brochure
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
