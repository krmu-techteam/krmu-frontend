"use client";

import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { ButtonType } from "@/lib/types/common";
import { EligibilityItem, HeroSection } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NpfPopup from "../../components/NpfPopup";
import NoPaperForm from "@/lib/constants/NoPaperForm";

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
        className={`${slug === "b-tech-cse" ? "bg-[#f9f9ff] pt-5 pb-10 md:pb-0 px-5" : "px-4"}`}
      >
        <div className="max-w-[1664px] w-full mx-auto sm:flex sm:pb-12 px-2.5 md:px-4 sm:mt-12 md:mt-0">
          <div className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6] p-2.5 sm:p-5 bg-white">
            <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
              {elgibilities[0]?.title}
            </h2>
            <p className="mb-2.5">{elgibilities[0]?.subtitle}</p>
          </div>

          <div
            className="w-full sm:w-1/3 lg:w-1/4 sm:px-3 border-r sm:border-r border-[#dee2e6] p-2.5 sm:p-5 bg-white"
            id="mob-npf-form"
          >
            <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2">
              {elgibilities[1]?.title}
            </h2>
            <p className="mb-2.5">{elgibilities[1]?.subtitle}</p>
          </div>

          {/* Third column with Read More */}
          <div className="w-full sm:w-1/3 lg:w-2/4 sm:px-3 p-2.5 sm:p-5 bg-white">
            <h2 className="text-2xl leading-[1.2] text-[#0060aa] font-semibold mb-2 inline-block">
              {displayTitle}
              {isLong && !expanded && " "}
            </h2>{" "}
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xl leading-[1.2] text-[#0060aa] font-semibold mb-2 cursor-pointer"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
            <p className="mb-2.5">{elgibilities[2]?.subtitle}</p>
          </div>

          {/* {isFormAvailable && (
          <div className="border mt-5 sm:hidden mob_prog_form">
            <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
                <h3 className="text-white">ADMISSIONS OPEN 2026-27</h3>
              </div>
            <NoPaperForm formId={formId} height="500px" />
          </div>
        )} */}
          {slug === "b-tech-cse" && (
            <div className="max-w-lg mt-10 w-full sm:hidden">
              <iframe
                className="aspect-video rounded-3xl w-full"
                src={videoSrc}
              ></iframe>
            </div>
          )}

          {!isFormAvailable && (
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
              <NoPaperForm formId={formId} height="500px" />
            </div>
          ) : (
            <div className="border border-gray-300 mt-5 sm:hidden mob_prog_form overflow-hidden">
              <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
                <h3 className="text-white text-center">ADMISSIONS OPEN 2026-27</h3>
              </div>
              <div className="p-2">
                <NoPaperForm formId={formId} height="700px" />
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Eligibility;
