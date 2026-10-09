import { STRAPI_URL } from "@/app/constant";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import Image from "next/image";

type Props = {
    item: ProgrammeAlumniData;
};

export const AlumniSliderCard = ({ item }: Props) => {
    const rawImg = item?.alumni_img?.url || item?.review_img?.url;
    const imageUrl = rawImg
        ? rawImg.startsWith("http")
            ? rawImg
            : `${STRAPI_URL}${rawImg}`
        : null;

    return (
        <div className="flex flex-col justify-between h-full w-full">
            <div className="flex-1 flex flex-col">
                {/* Top Header: Alumni Photo + Name & Qualification + Quote Watermark */}
                <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        {/* Photo in Home Page style (clean rounded-16px, subtle border, gold ring, no shadow) */}
                        <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-[14px] md:rounded-[16px] overflow-hidden border border-white/10 ring-1 ring-brand-gold/40 bg-[#04101A]">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    fill
                                    sizes="80px"
                                    alt={item?.name || "Alumni"}
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-white/5 text-brand-gold font-bold text-lg font-poppins">
                                    {item?.name?.[0] || "A"}
                                </div>
                            )}
                        </div>

                        {/* Author Details (Name & Qualification) */}
                        <div className="flex flex-col min-w-0">
                            <h4 className="text-brand-gold font-poppins font-bold text-base sm:text-lg md:text-[18px] leading-tight tracking-wide group-hover:text-[#F3CE72] transition-colors line-clamp-1">
                                {item?.name}
                            </h4>
                            <p className="text-white/70 font-poppins text-xs sm:text-sm font-light mt-1 line-clamp-1">
                                {item?.qualification}
                            </p>
                        </div>
                    </div>

                    {/* Watermark Quote Icon from Home Page */}
                    <div className="shrink-0 opacity-30 group-hover:opacity-50 transition-opacity">
                        <Image
                            src="/modules/home/testimonial/quote.webp"
                            alt="Quote Icon"
                            width={56}
                            height={45}
                            className="w-8 sm:w-10 md:w-11 h-auto object-contain brightness-0 invert"
                        />
                    </div>
                </div>

                {/* Home Page Signature Gold Divider Bar */}
                <div className="w-10 h-[2px] bg-brand-gold my-3 rounded-full opacity-80" />

                {/* Full Testimonial Content - Fully visible, elegant typography */}
                <div className="relative pt-1 flex-1">
                    <p className="italic text-white/90 text-sm sm:text-[15px] md:text-[15.5px] leading-relaxed font-light font-poppins relative z-10 text-left">
                        &ldquo;{item?.content}&rdquo;
                    </p>
                </div>
            </div>
        </div>
    );
};
