import { STRAPI_URL } from "@/app/constant";
import {
  INTCOLLABCARD,
  INTCOLLABFULLWIDTHCARD,
} from "@/lib/types/international-collab";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

type Props = {
  intCollabCard: INTCOLLABCARD[];
  intCollabFullWidthCard: INTCOLLABFULLWIDTHCARD[];
};

const InternationalCollabCards = ({
  intCollabCard,
  intCollabFullWidthCard,
}: Props) => {
  return (
    <section className="relative z-10 pb-16">
      <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 xl:px-16 2xl:px-0 relative z-10">
        
        {/* Main List Container */}
        <div className="w-full border-2 border-white/[0.08] rounded-xs p-6 md:p-10 lg:p-14 flex flex-col gap-10 lg:gap-12 shadow-2xl">
          
          {/* Card Items */}
          {intCollabCard &&
            intCollabCard.map((item) => (
              <div
                key={item?.id}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12 pb-10 lg:pb-12 border-b border-white/[0.08] last:border-b-0 last:pb-0"
              >
                {/* Left: Square White Logo Box */}
                <div className="w-[260px] h-[180px] flex-shrink-0 bg-white rounded-sm flex items-center justify-center p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={`${STRAPI_URL}${item?.int_collab_img?.url}`}
                    width={220}
                    height={140}
                    alt={item?.int_collab_img?.alternativeText || ""}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Right: Rich Text Content */}
                <div className="flex-1 text-white/80 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] font-poppins font-normal text-justify [&_p]:m-0 [&_a]:text-[#4A90E2] [&_a]:underline hover:[&_a]:text-[#357ABD] [&_a]:transition-colors">
                  <BlocksRenderer content={item?.int_collab_card_content} />
                </div>
              </div>
            ))}

          {/* Full Width Card Items */}
          {intCollabFullWidthCard &&
            intCollabFullWidthCard.map((item) => (
              <div
                key={item?.id}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12 pb-10 lg:pb-12 border-b border-white/[0.08] last:border-b-0 last:pb-0"
              >
                {/* Left: Square White Logo Box */}
                <div className="w-[260px] h-[180px] flex-shrink-0 bg-white rounded-sm flex items-center justify-center p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={`${STRAPI_URL}${item?.int_collab_full_width_card_img?.url}`}
                    width={220}
                    height={140}
                    alt={
                      item?.int_collab_full_width_card_img?.alternativeText ||
                      ""
                    }
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Right: Rich Text Content */}
                <div className="flex-1 text-white/80 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] font-poppins font-normal text-justify [&_p]:m-0 [&_a]:text-[#4A90E2] [&_a]:underline hover:[&_a]:text-[#357ABD] [&_a]:transition-colors">
                  <BlocksRenderer
                    content={item?.int_collab_full_width_content}
                  />
                </div>
              </div>
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default InternationalCollabCards;
