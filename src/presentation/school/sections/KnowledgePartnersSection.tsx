import { StrapiMedia } from "@/lib/types/common";
import { KnowledgePartnerLogos } from "@/presentation/school/components";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionDivider from "@/components/common/SectionDivider";

import { SCHOOL_COE_MAP } from "@/features/school";

type Props = {
    title: string;
    logos: StrapiMedia[];
    slug?: string;
};

const getCoeImage = (slug?: string, index?: number, fallbackUrl?: string) => {
    if (
        fallbackUrl &&
        !fallbackUrl.includes("modules/school/knowledge-partner")
    ) {
        return fallbackUrl;
    }
    const idx = (index || 0) + 1;
    if (!slug)
        return fallbackUrl || "/images/school/knowledge-partner/soet-1.jpg";

    if (slug.includes("engineering"))
        return `/images/school/knowledge-partner/soet-${idx}.jpg`;
    if (slug.includes("management") || slug.includes("commerce"))
        return `/images/school/knowledge-partner/somc-${idx}.jpg`;
    if (slug.includes("legal") || slug.includes("law"))
        return `/images/school/knowledge-partner/sols-${idx}.jpg`;
    if (slug.includes("medical") || slug.includes("pharmacy"))
        return `/images/school/knowledge-partner/smas-${idx}.jpg`;
    if (slug.includes("physiotherapy"))
        return `/images/school/knowledge-partner/sprs-${idx}.jpg`;
    if (
        slug.includes("architecture") ||
        slug.includes("design") ||
        slug.includes("liberal")
    )
        return `/images/school/knowledge-partner/soad-${idx}.jpg`;
    if (slug.includes("basic") || slug.includes("applied"))
        return `/images/school/knowledge-partner/sbas-${idx}.jpg`;
    if (slug.includes("education"))
        return `/images/school/knowledge-partner/soed-${idx}.jpg`;

    return fallbackUrl || `/images/school/knowledge-partner/soet-${idx}.jpg`;
};

const KnowledgePartnersSection = ({ title, logos, slug }: Props) => {
    const coeList = (slug && SCHOOL_COE_MAP[slug]) || [];

    return (
        <section className="relative py-12 xl:py-20 font-poppins">
            <div className="">
                {/* Title */}
                <h2 className="text-center text-white font-serif text-3xl sm:text-4xl md:text-[44px] font-bold mb-6 lg:mb-12 tracking-tight">
                    {title || "Knowledge Partners"}
                </h2>

                {/* Top: Logos Row */}
                <div
                    className={`max-w-[1440px] mx-auto w-full lg:px-12 ${
                        coeList && coeList.length > 0 ? "mb-8 lg:mb-12" : "mb-0"
                    }`}
                >
                    <KnowledgePartnerLogos logos={logos} />
                </div>

                {/* Bottom Cards: Centered if single, 2-col Grid if multiple (only if exists) */}
                {coeList && coeList.length > 0 && (
                    <div
                        className={
                            coeList.length === 1
                                ? "flex justify-center max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12"
                                : "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12"
                        }
                    >
                        {coeList.map((coe, idx) => (
                            <Link
                                key={idx}
                                href={coe.link}
                                target={
                                    coe.link.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    coe.link.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className={`rounded-[4px] overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 ${
                                    coeList.length === 1
                                        ? "w-full max-w-[620px]"
                                        : "w-full"
                                }`}
                            >
                                {/* Separate Image Container - Full width, auto height */}
                                <div className="w-full relative overflow-hidden rounded-t-[4px]">
                                    <Image
                                        src={getCoeImage(slug, idx, coe.imgUrl)}
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
                                        {coe.subtitle && (
                                            <p className="text-gray-300 text-sm sm:text-base font-normal">
                                                {coe.subtitle}
                                            </p>
                                        )}
                                        <h3 className="text-white text-[16px] lg:text-xl font-medium tracking-wide mt-0.5">
                                            {coe.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className="text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default KnowledgePartnersSection;
