import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

type Props = {
    title: string;
    subheading?: string;
    industry_connect_content: string;
    bgImgUrl?: string;
    imgUrl?: string;
};

const PedaIndustryConnect = ({
    title,
    subheading,
    industry_connect_content,
    bgImgUrl,
    imgUrl,
}: Props) => {
    const cleanTitle = title
        ? title
              .trim()
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase())
        : "";
    const cleanSubheading = subheading?.trim() || "";
    const chosenImg = imgUrl || bgImgUrl || "";
    const imageSrc = chosenImg.startsWith("http")
        ? chosenImg
        : `${STRAPI_URL}${chosenImg}`;

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
                            {cleanSubheading && (
                                <h4 className="font-serif text-lg md:text-xl font-medium text-white/95 mb-4">
                                    {cleanSubheading}
                                </h4>
                            )}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: industry_connect_content,
                                }}
                                className="font-poppins text-white/90 text-sm md:text-base leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            {chosenImg && (
                                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden bg-slate-900/40">
                                    <Image
                                        src={imageSrc}
                                        alt={cleanTitle || "Industry Connect"}
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
        </section>
    );
};

export default PedaIndustryConnect;
