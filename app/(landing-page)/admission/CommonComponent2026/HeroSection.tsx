import Image from "next/image";
import { HeroMarqueeSection } from "../law-2026/contentype";
import HeroMarquee from "./HeroMarquee";
import NoPaperFormsWidget from "./NoPaperFormsWidget";
type Props = {
  formId: string;
  content?: string;
  desc?: string;
  marqueeData: HeroMarqueeSection;
  heroBg?: string;
  middleImg?: string;
  mobileImg?: string;
  lpclName?: string;
};

const HeroSection = ({
  formId,
  content,
  desc,
  marqueeData,
  heroBg,
  middleImg,
  mobileImg,
  lpclName,
}: Props) => {
  return (
    <>
      <section className={`pb-10 sm:py-20 md:pt-14 md:pb-14 ${lpclName || ""}`}>
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-5 sm:gap-10">
          <div className="w-full xl:w-2/3 text-white text-center md:text-left container-1 sm:py-0 sm:px-5">
            <div className="p-5 sm:p-0">
              <h1
                className="text-white font-semibold text-2xl md:text-5xl leading-[1.4] z-10 relative"
                dangerouslySetInnerHTML={{
                  __html: content || "",
                }}
              />
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: desc || "",
              }}
              className="hidden sm:block"
            />
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
          {/* <div className="w-1/3 hidden xl:block">
            {middleImg && (
              <Image
                src={middleImg}
                width={570}
                height={735}
                alt="Hero"  
                className="-mb-28"
              />
            )}
          </div> */}

          <div className="w-full xl:w-1/3 container-2 px-5 scroll-mt-40" id="apply-section">
            {formId && (
              <>
                <div className="heroBannerForm__form">
                  <div className="heroBannerForm-header">
                    <h3 className="mb-0">
                      <strong>
                        Apply Today for{" "}
                        <span className="uppercase">
                          K.R. Mangalam University
                        </span>
                      </strong>
                    </h3>
                  </div>
                  <NoPaperFormsWidget widgetId={formId} height="500px" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <HeroMarquee data={marqueeData} />
    </>
  );
};

export default HeroSection;
