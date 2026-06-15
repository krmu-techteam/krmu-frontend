import { StrapiMedia } from "@/lib/types/common";
import { adm2btn, Adm2FAQ } from "@/lib/types/admission2";
import { FAQAccordion } from "../components";
import SectionDivider from "@/components/common/SectionDivider";
import Button from "@/components/common/Button";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: Adm2FAQ[];
  tocimg?: StrapiMedia;
  tocbtn: adm2btn;
};

const FrequentlyAskedQuestionSection = ({
  heading,
  highlight,
  desc,
  tocfaqs,
  tocbtn,
}: Props) => {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-16 xl:py-20 px-6 md:px-8 lg:px-11 xl:px-16 relative z-10">
        <div className="flex items-center">
          <div className="w-full">
            <div className="mx-auto xl:max-w-[1440px] 2xl:max-w-7xl">
              {/* Header block */}
              <div className="text-center mb-8">
                <h3 className="heading-primary mb-3 lg:mb-4">
                  {heading} {highlight}
                </h3>
                <p className="text-sm md:text-base font-poppins font-normal text-white/65 max-w-3xl mx-auto leading-relaxed">{desc}</p>
              </div>
              
              {/* Tabs and Accordions block */}
              <div className="relative p-0 lg:p-0 overflow-hidden rounded-xl md:rounded-none">
                <div className="relative z-10 w-full">
                  <FAQAccordion tocfaqs={tocfaqs} tocbtn={tocbtn} />
                </div>
              </div>

              {/* Bottom centered dynamic button */}
              {tocbtn?.btn_link && (
                <div className="flex items-center justify-center mt-8 md:mt-12">
                  <Button
                    href={tocbtn?.btn_link || "#"}
                    variant="outline"
                    className="border font-poppins border-[#0055A4]/60 hover:bg-[#0055A4]/15 hover:border-[#0055A4] text-white transition-all duration-300 tracking-wide"
                  >
                    {tocbtn?.btn_text || "View All"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default FrequentlyAskedQuestionSection;
