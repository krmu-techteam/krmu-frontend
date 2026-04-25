"use client";

import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { ButtonType } from "@/lib/types/common";
import { EligibilityItem, HeroSection } from "@/lib/types/school-programme";
import { ArrowRight, Calendar, IndianRupee, LaptopMinimalCheck } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NpfPopup from "../../components/NpfPopup";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import YoutubePopup from "./YoutubePopup";

type Props = {
  elgibilities: EligibilityItem[];
  mobherobtn: ButtonType;
  formId?: string; // dynamic form id
  allowedFormSlugs: string[];
  slug: string;
  heroSection?: HeroSection;
};

const Eligibility = ({
  elgibilities,
  mobherobtn,
  formId,
  allowedFormSlugs,
  heroSection,
  slug,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  // const btnRef = useRef<HTMLButtonElement>(null);

  // limit characters for h2
  const maxChars = 50;
  const longTitle = elgibilities[2]?.title || "";
  const isLong = longTitle.length > maxChars;
  const displayTitle = expanded ? longTitle : longTitle.slice(0, maxChars);

  const isFormAvailable = allowedFormSlugs.includes(slug);
  const iframe = heroSection?.videofield;
  const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];

  // useEffect(() => {
  //   if (!formId || !btnRef.current) return;

  //   loadNpfScript()
  //     .then(() => {
  //       // @ts-expect-error - test
  //       new NpfWidgetsInit({
  //         widgetId: formId,
  //         baseurl: "widgets.nopaperforms.com",
  //         formTitle: "Apply Now",
  //         titleColor: "#FF0033",
  //         backgroundColor: "#ddd",
  //         iframeHeight: "500px",
  //         buttonTextColor: "#FFF",
  //         target: btnRef.current,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error("Failed to load NPF script:", err);
  //     });
  // }, [formId, mobherobtn?.buttontext]);

  return (
    <>
      <section
        className={`${slug === "b-tech-cse" ? " pt-5 pb-10 md:pb-0 px-4 sm:px-0" : "px-4"} relative z-20 md:mt-[-64px] mb-10`}
      >
        <div
          className={`${slug === "b-tech-cse" ? "max-w-[1440px]" : "max-w-[1664px] md:px-4"} w-full mx-auto`}
        >
          {slug === "b-tech-cse" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full -mt-[2%]">
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <Calendar size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 capitalize leading-tight tracking-wide">{elgibilities[0]?.subtitle}</p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">
                    {elgibilities[0]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <IndianRupee size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">{elgibilities[1]?.subtitle}</p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">  
                    {elgibilities[1]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md px-6 py-4 flex items-start gap-5">
                <LaptopMinimalCheck size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">{elgibilities[2]?.subtitle}</p>
                  <div className="flex flex-col mt-1">
                    <p className="text-md md:text-lg font-semibold text-black leading-tight">
                      {displayTitle}
                      {isLong && !expanded && " "}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-[#0060aa] font-bold mt-1 text-left"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5">
                <Calendar size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[13px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[0]?.subtitle}</p>
                  <p className="text-[20px] font-extrabold text-black leading-tight mt-1">
                    {elgibilities[0]?.title}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5" id="mob-npf-form">
                <IndianRupee size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[14px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[1]?.subtitle}</p>
                  <p className="text-[20px] font-extrabold text-black leading-tight mt-1">
                    {elgibilities[1]?.title}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5">
                <LaptopMinimalCheck size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[13px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[2]?.subtitle}</p>
                  <div className="flex flex-col mt-1">
                    <p className="text-[18px] md:text-[20px] font-extrabold text-black leading-tight">
                      {displayTitle}
                      {isLong && !expanded && " "}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-[#0060aa] font-bold mt-1 text-left"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* {isFormAvailable && (
          <div className="border mt-5 sm:hidden mob_prog_form">
            <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
                <h3 className="text-white">ADMISSIONS OPEN 2026-27</h3>
              </div>
            <NoPaperForm formId={formId} height="500px" />
          </div>
        )} */}
          <YoutubePopup
            videoUrl="https://www.youtube.com/watch?v=tIfNUgSn2dw"
            thumbnail="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
            ytClassName="max-w-sm w-full h-[200px] mt-5 sm:hidden"
          />

          {isFormAvailable && slug !== "b-tech-cse" && (
            <div className="">
              {formId ? (
                <NpfPopup
                  formId={formId}
                  btnClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white gap-2 rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                  btnText={`${mobherobtn?.buttontext || ""}`}
                  showIcon={true}
                />
              ) : (
                <Link
                  href={"#"}
                  className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                >
                  {mobherobtn?.buttontext} <ArrowRight />
                </Link>
              )}
            </div>
          )}

          {/* 
        {(mobherobtn?.buttonclass || mobherobtn?.buttonlink) && (
          <Link
            href={mobherobtn?.buttonlink}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <span>{mobherobtn?.buttontext}</span> <ArrowRight />
          </Link>
        )} */}
          {/* {mobherobtn && (
          <>
            {mobherobtn.buttonclass === "progPopup" ? (
              <Popup
                buttonText={mobherobtn.buttontext || "Apply Now"}
                buttonClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                buttonIcon={<ArrowRight />}
              >
                <p>This is the content inside the popup.</p>
              </Popup>
            ) : mobherobtn.buttonlink ? (
              <Link
                href={mobherobtn.buttonlink}
                className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${
                  mobherobtn.buttonclass || ""
                }`}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <span>{mobherobtn.buttontext}</span> <ArrowRight />
              </Link>
            ) : null}
          </>
        )} */}

          {/* {formId ? (
          <NpfPopup
            formId={formId}
            btnClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
            btnText={`${mobherobtn?.buttontext || ""}`}
          />
        ) : (
          <Link
            href={"#"}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </Link>
        )} */}

          {/* {formId ? (
          <button
            ref={btnRef}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </button>
        ) : (
          <Link
            href={"#"}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </Link>
        )} */}
        </div>
        {isFormAvailable &&
          (slug === "b-tech-cse" ? (
            <div className="heroBannerForm__form max-w-md mx-auto mt-5 lg:hidden">
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for{" "}
                    <span className="uppercase">K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>
              <NoPaperForm formId={formId} height="700px" />
            </div>
          ) : (
            ""
            // <div className="border border-gray-300 mt-5 sm:hidden mob_prog_form overflow-hidden hidden">
            //   <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
            //     <h3 className="text-white text-center">ADMISSIONS OPEN 2026-27</h3>
            //   </div>
            //   <div className="p-2">
            //     <NoPaperForm formId={formId} height="700px" />
            //   </div>
            // </div>
          ))}
      </section>
    </>
  );
};

export default Eligibility;
