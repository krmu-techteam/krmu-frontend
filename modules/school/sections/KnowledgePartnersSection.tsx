import { StrapiMedia } from "@/lib/types/common";
import { KnowledgePartnerLogos } from "@/modules/school";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { splitTitleByFor } from "@/modules/school/utils";

type Props = {
  title: string;
  logos: StrapiMedia[];
};

const KnowledgePartnersSection = ({ title, logos }: Props) => {
  const { boldText, normalText } = splitTitleByFor(title || "Knowledge Partners");

  return (
    <section className="py-10 sm:py-20 px-4">
      <div className="max-w-[1530px] mx-auto w-full">
        <h4 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          {boldText} {normalText && <span className="font-normal">{normalText}</span>}
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side: Logos */}
          <div className="w-full">
            <KnowledgePartnerLogos logos={logos} />
          </div>

        {/* Right Side: Image and CoE Cards */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full relative rounded-sm overflow-hidden">
            <Image
              src="/modules/school/knowledge-partner.jpg"
              alt="Knowledge Partners"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Box 1 */}
            <div className="bg-gradient-to-r from-[#061623] to-[#05345B] hover:opacity-90 transition-opacity rounded-sm p-5 sm:p-6 flex items-center justify-between group cursor-pointer border border-[#1a3353]">
              <div>
                <p className="text-gray-300 text-sm sm:text-base font-light">Centre of Excellence in</p>
                <h5 className="text-white text-lg sm:text-xl font-bold mt-1 tracking-wide">Robotics and Automation</h5>
              </div>
              <ArrowUpRight className="text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            {/* Box 2 */}
            <div className="bg-gradient-to-r from-[#061623] to-[#05345B] hover:opacity-90 transition-opacity rounded-sm p-5 sm:p-6 flex items-center justify-between group cursor-pointer border border-[#1a3353]">
              <div>
                <p className="text-gray-300 text-sm sm:text-base font-light">Centre of Excellence</p>
                <h5 className="text-white text-lg sm:text-xl font-bold mt-1 tracking-wide">Artificial Intelligence</h5>
              </div>
              <ArrowUpRight className="text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgePartnersSection;
