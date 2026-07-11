import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";

interface KrmuCommitteeSectionProps {
  aboutData?: {
    krmucommittee?: {
      title?: string | null;
      description?: BlocksContent | null;
      committeebtn?: {
        buttonlink?: string | null;
        buttontext?: string | null;
        buttonclass?: string | null;
      } | null;
    } | null;
    [key: string]: unknown;
  };
}

const KrmuCommitteeSection = ({ aboutData }: KrmuCommitteeSectionProps) => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 xl:py-16 px-6 sm:px-8 lg:px-12 xl:px-16 relative">
      <div className="max-w-[1530px] mx-auto w-full relative flex flex-col lg:block">
        {/* Main Background Image Container */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[760px] 2xl:h-[890px] relative overflow-hidden flex items-center justify-center lg:rounded-[3px] rounded-t-[3px]">
          <Image
            src="/modules/about/krmu-committe/krmu-committe.jpg"
            fill
            className=" object-cover object-center lg:rounded-[3px] rounded-t-[3px]"
            alt="KRMU Committee"
            unoptimized
          />
        </div>
          
        {/* White Card overlapping bottom-left */}
        <div className="relative lg:absolute bottom-0 left-0 lg:bottom-12 lg:left-12 z-10 w-full lg:w-[420px] 2xl:w-[500px] bg-white p-6 md:p-8 text-[#061623] shadow-xl lg:rounded-[3px] rounded-b-[3px]">
            <h4 className="text-3xl md:text-[36px] font-serif font-semibold mb-5 leading-[1.2]">
              {aboutData?.krmucommittee?.title || "KRMU Committee"}
            </h4>
            <div className="text-[14px] sm:text-[16px] leading-relaxed text-black/80 mb-8 font-poppins font-medium">
              <BlocksRenderer
                content={aboutData?.krmucommittee?.description || []}
              />
            </div>
            
            {(aboutData?.krmucommittee?.committeebtn?.buttonlink ||
              aboutData?.krmucommittee?.committeebtn?.buttonclass) && (
              <Link
                href={aboutData?.krmucommittee?.committeebtn?.buttonlink || "#"}
                className="inline-block text-[14px] font-poppins font-medium text-black tracking-wide hover:text-black/90 hover:border-black/90 transition-colors border-b border-black/90 duration-300 uppercase"
              >
                {aboutData?.krmucommittee?.committeebtn?.buttontext || "KNOW MORE"}
              </Link>
            )}
          </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default KrmuCommitteeSection;
