import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

type Props = {
    title: string;
    content: string;
    imgUrl?: string;
};

const PedaMockInterview = ({ title, content, imgUrl }: Props) => {
    const cleanTitle = title
        ? title
              .trim()
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase())
        : "";
    const cleanContent = content?.trim() || "";
    const imageSrc = imgUrl?.startsWith("http")
        ? imgUrl
        : `${STRAPI_URL}${imgUrl || ""}`;

    return (
        <section className="relative px-8 py-8 md:py-16">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="bg-[#061623] rounded-[4px] p-6 md:p-10 lg:p-12">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-14">
                        <div className="w-full lg:w-1/2 text-white">
                            <div className="w-fit mb-4">
                                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2.5">
                                    {cleanTitle}
                                </h3>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#17433F] via-[#236860] to-transparent" />
                            </div>
                            <p className="font-poppins text-white/90 text-sm md:text-base leading-relaxed">
                                {cleanContent}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            {imgUrl && (
                                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden bg-slate-900/40">
                                    <Image
                                        src={imageSrc}
                                        alt={cleanTitle || "Mock Interviews"}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default PedaMockInterview;
