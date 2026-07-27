"use client";

import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { ButtonType } from "@/lib/types/common";
import { EligibilityItem, HeroSection } from "@/lib/types/school-programme";
import {
  ArrowRight,
  Calendar,
  IndianRupee,
  LaptopMinimalCheck,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { getTruncatedText } from "@/features/programs";
import { EligibilityCard, EligibilityVideoLayout } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  elgibilities: EligibilityItem[];
  mobherobtn: ButtonType;
  formId?: string; // dynamic form id
  allowedFormSlugs: string[];
  slug: string;
  heroSection?: HeroSection;
  enableDownloadPros?: boolean;
  prospectusBtn?: ButtonType;
};

const EligibilitySection = ({
  elgibilities,
  mobherobtn,
  formId,
  allowedFormSlugs,
  heroSection,
  slug,
  enableDownloadPros,
  prospectusBtn,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const { isLong, displayTitle } = getTruncatedText(
    elgibilities[2]?.title || "",
    expanded,
    50,
  );

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const visibleForm = Array.from(
      document.querySelectorAll(".heroBannerForm__form"),
    ).find((el) => el.getBoundingClientRect().height > 0);
    if (visibleForm) {
      visibleForm.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isFormAvailable = allowedFormSlugs.includes(slug);

  const isNewSectionSlug =
    slug === "bsc-hons-agriculture" ||
    slug === "b-tech-cse" ||
    slug === "bachelor-of-education-b-ed" ||
    slug === "bhmct-hotel-management" ||
    slug === "bjmc-hons-research" ||
    slug === "bjmc" ||
    slug === "bachelor-of-design-b-des-fashion-design" ||
    slug === "barch-architecture" ||
    slug === "bfa-fine-arts";

  return (
    <>
      <section
        className={`pb-8 md:pb-6 pt-0 lg:pb-10 xl:pb-20  relative z-10 border-gray-100`}
      >
        <div className={`max-w-[1530px] w-full mx-auto px-6 md:px-8 xl:px-16`}>
          {heroSection?.imgvideo === "Video" ? (
            <EligibilityVideoLayout
              elgibilities={elgibilities}
              heroSection={heroSection}
              enableDownloadPros={enableDownloadPros}
              prospectusBtn={prospectusBtn}
              formId={formId}
              handleApplyClick={handleApplyClick}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-8 w-full">
              {/* Card 1: Duration */}
              <EligibilityCard
                icon={Calendar}
                subtitle={elgibilities[0]?.subtitle || "Duration"}
                title={elgibilities[0]?.title}
                bgColor="#081D2D"
              />

              {/* Card 2: Fee */}
              <EligibilityCard
                icon={IndianRupee}
                subtitle={elgibilities[1]?.subtitle || "Program Fee / Year"}
                title={elgibilities[1]?.title}
                bgColor="#0D2131"
              />

              {/* Card 3: Requirements */}
              <EligibilityCard
                icon={LaptopMinimalCheck}
                subtitle={elgibilities[2]?.subtitle || "Eligibility"}
                title={elgibilities[2]?.title}
                bgColor="#182C3C"
                isRequirements={true}
                expanded={expanded}
                onToggleExpand={() => setExpanded(!expanded)}
                displayTitle={displayTitle}
                isLong={isLong}
              />
            </div>
          )}

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

          {[
            "bba-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk",
            "bba-hons-hons-with-research-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk",
          ].includes(slug) && (
            <p className="my-5 italic">
              *In addition to the regular programme fee at KRMU, students will
              be required to pay an additional tuition fee of GBP 6500 for the
              semester at UEA.
            </p>
          )}
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default EligibilitySection;
