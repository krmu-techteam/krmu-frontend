import { ChevronRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCTA, ImageType } from "../admission/PGType";
import NoPaperFormsWidget from "../admission/CommonComponent2026/NoPaperFormsWidget";
import ScrollButton from "../admission/CommonComponent2026/ScrollButton";

type Props = {
  title: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  image: ImageType;
  bgImage: string;
  formId: string;
  ugHeroClsName: string;
};

const HeroSection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  bgImage,
  formId,
  ugHeroClsName,
}: Props) => {
  return (
    <section
      className={`pb-10 sm:pb-16 md:pb-14 lg:py-20 ${ugHeroClsName || ""}`}
      // style={{
      //   background: `url(${bgImage})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="max-w-[1440px] lg:px-4 mx-auto w-full flex flex-col lg:flex-row items-center lg:justify-between gap-8 md:gap-10 lg:gap-16 pb-6">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] xl:w-2/3 text-white text-center lg:text-left  container-1  sm:py-0 sm:px-5">
          <div className="relative p-5 sm:p-0 lg:max-w-[540px] xl:max-w-[720px] h-fit top-0 md:top-[600px] lg:top-0  mx-auto lg:mx-0">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-semibold leading-tight lg:leading-[1.3] mb-4"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />

            {/* <p className="text-[#9ba2ac] text-base sm:text-lg mb-6"> */}
            <p
              className="hidden lg:block font-medium"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>

          <div className="hidden sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center lg:justify-start">
            {/* Primary CTA */}
            {/* <ScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="flex items-center justify-between w-full sm:max-w-[280px] py-1 px-2 gap-2 border border-white rounded-full"
            >
              <span className="w-4/5 text-center text-white text-sm sm:text-base">
                {primaryCta.label}
              </span>
              <div className="bg-white p-2 sm:p-3 rounded-full">
                <MoveUpRight className="text-[#0060aa]" size={24} />
              </div>
            </ScrollButton> */}
            {/* <Link
              href={primaryCta.href}
              className="flex items-center justify-between w-full sm:max-w-[280px] py-1 px-2 gap-2 border border-white rounded-full"
            >
              <span className="w-4/5 text-center text-white text-sm sm:text-base">
                {primaryCta.label}
              </span>
              <div className="bg-white p-2 sm:p-3 rounded-full">
                <MoveUpRight className="text-[#0060aa]" size={24} />
              </div>
            </Link> */}

            {/* <ScrollButton
              targetId="apply-section"
              highlightClass="flash-border"
              btnClass="text-white text-sm sm:text-base flex items-center gap-2 sm:gap-4"
            >
              {secondaryCta.label}
              <ChevronRight size={18} />
            </ScrollButton> */}
            {/* Secondary CTA */}
            {/* <Link
              href={secondaryCta.href}
              className="text-white text-sm sm:text-base flex items-center gap-2 sm:gap-4"
            >
              {secondaryCta.label}
              <ChevronRight size={18} />
            </Link> */}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:hidden text-center text-white">
          <div className="border-r border-white p-2.5">
            <h3 className="text-xl font-semibold ">56.6 LPA</h3>
            <p className="text-xs">Highest Package </p>
          </div>
          <div className="p-2.5">
            <h3 className="text-xl font-semibold">Upto 27Cr</h3>
            <p className="text-xs">Scholarship </p>
          </div>
          <div className="border-t border-r border-white p-2.5">
            <h3 className="text-xl font-semibold">92%</h3>
            <p className="text-xs">Placement Record</p>
          </div>
          <div className="p-2.5 border-t border-white">
            <h3 className="text-xl font-semibold">800+</h3>
            <p className="text-xs">Recruiters </p>
          </div>
        </div>

        {/* <div className="flex sm:hidden flex-col items-center gap-4 sm:gap-8 justify-center lg:justify-start container-2"> */}
        {/* Primary CTA */}

        {/* <Link
            href={primaryCta.href}
            className="flex items-center justify-between w-full sm:max-w-[280px] py-1 px-2 gap-2 border border-white rounded-full"
          >
            <span className="w-4/5 text-center text-white text-sm sm:text-base">
              {primaryCta.label}
            </span>
            <div className="bg-white p-2 sm:p-3 rounded-full">
              <MoveUpRight className="text-[#0060aa]" size={24} />
            </div>
          </Link> */}
        {/* <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="flex items-center justify-between w-full sm:max-w-[280px] py-1 px-2 gap-2 border border-white rounded-full"
          >
            <span className="w-4/5 text-center text-white text-sm sm:text-base">
              {primaryCta.label}
            </span>
            <div className="bg-white p-2 sm:p-3 rounded-full">
              <MoveUpRight className="text-[#0060aa]" size={24} />
            </div>
          </ScrollButton> */}

        {/* Secondary CTA */}
        {/* <Link
            href={secondaryCta.href}
            className="text-white text-sm sm:text-base flex items-center gap-2 sm:gap-4"
          >
            {secondaryCta.label}
            <ChevronRight size={18} />
          </Link> */}

        {/* <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="text-white text-sm sm:text-base flex items-center gap-2 sm:gap-4"
          >
            {secondaryCta.label}
            <ChevronRight size={18} />
          </ScrollButton>
        </div> */}

        {/* Right Image */}
        <div className="w-full max-w-[520px] md:max-w-[560px] lg:max-w-none lg:w-[40%] xl:w-1/3 mx-auto mt-0 md:mt-[200px] lg:mt-0 lg:mx-0 container-2 px-5 scroll-mt-40">
          {/* {image.src && (
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              priority
              className="w-full h-auto max-w-[500px] lg:max-w-full mx-auto"
            />
          )} */}
          {formId && (
            <div
              className="heroBannerForm__form scroll-mt-40"
              id="apply-section"
            >
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for{" "}
                    <span className="uppercase">K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>

              <NoPaperFormsWidget widgetId={formId} height="480px" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
