import { StrapiMedia } from "@/lib/types/common";
import { KnowledgePartnerLogos } from "@/presentation/school/components";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
  title: string;
  logos: StrapiMedia[];
};

const DEFAULT_COE = [
  {
    subtitle: "Centre of Excellence in",
    title: "Robotics and Automation",
    imgUrl: "/modules/school/knowledge-partner.jpg",
    link: "https://www.krmangalam.edu.in/centre-of-excellence-in-robotics-and-automation",
  },
  {
    subtitle: "Centre of Excellence in",
    title: "Artificial Intelligence",
    imgUrl: "/modules/school/knowledge-partner.jpg",
    link: "https://www.krmangalam.edu.in/centre-of-excellence-artificial-intelligence",
  },
];

const KnowledgePartnersSection = ({ title, logos }: Props) => {
  return (
    <section className="relative py-12 xl:py-20 font-poppins">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-white font-serif text-3xl sm:text-4xl md:text-[44px] font-bold mb-8 sm:mb-12 tracking-tight">
          {title || "Knowledge Partners"}
        </h2>

        {/* Top: Logos Row */}
        <div className="mb-10 sm:mb-12">
          <KnowledgePartnerLogos logos={logos} />
        </div>

        {/* Bottom: 2 Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {DEFAULT_COE.map((coe, idx) => (
            <Link
              key={idx}
              href={coe.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[4px] overflow-hidden flex flex-col group cursor-pointer transition-all duration-300"
            >
              {/* Separate Image Container - Full width, auto height */}
              <div className="w-full relative overflow-hidden rounded-t-[4px]">
                <Image
                  src={coe.imgUrl}
                  alt={coe.title}
                  width={602}
                  height={360}
                  className="w-full h-auto object-cover block"
                  unoptimized
                />
              </div>

              {/* Separate Gradient Background Bar overlapping 1px to prevent white gaps */}
              <div className="bg-gradient-to-r from-[#061623] to-[#05345B] hover:opacity-95 transition-opacity p-5 sm:px-7 sm:py-3 flex items-center justify-between -mt-1 relative z-10 rounded-b-[4px]">
                <div>
                  <p className="text-gray-300 text-sm sm:text-base font-normal">
                    {coe.subtitle}
                  </p>
                  <h3 className="text-white text-lg sm:text-xl font-medium tracking-wide mt-0.5">
                    {coe.title}
                  </h3>
                </div>
                <ArrowUpRight className="text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default KnowledgePartnersSection;
