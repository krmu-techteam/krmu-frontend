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
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center lg:justify-between gap-5 sm:gap-6 pb-6">
          <div className="w-full lg:w-[55%] xl:w-2/3 text-white text-center lg:text-left container-1 sm:py-0 sm:px-5">
            <div className="p-5 sm:p-0 lg:max-w-[480px] xl:max-w-[600px] mx-auto lg:mx-0">
              <h1
                className="text-white font-semibold text-2xl md:text-2xl lg:text-3xl xl:text-5xl leading-[1.4] z-10 relative"
                dangerouslySetInnerHTML={{
                  __html: content || "",
                }}
                style={{
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)"
                }}
              />
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: desc || "",
              }}
               style={{
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)"
                }}
              className="hidden lg:block"
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

          <div className="w-full lg:w-[40%] xl:w-1/3 container-2 px-5 scroll-mt-40" id="apply-section">
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
