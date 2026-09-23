import { STRAPI_URL } from "@/app/constant";
import Image from "next/image";

type Props = {
    title: string;
    content: string;
    imgUrl?: string;
    className?: string;
};

const PedaCard = ({ title, content, imgUrl, className = "" }: Props) => {
    const cleanTitle = title?.trim() || "";
    const cleanContent = content?.trim() || "";
    const imageSrc = imgUrl?.startsWith("http")
        ? imgUrl
        : `${STRAPI_URL}${imgUrl || ""}`;

    return (
        <div
            className={`flex flex-col bg-[#061623] rounded-[4px] overflow-hidden h-full ${className}`}
        >
            {/* Card Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#061623]">
                {imgUrl ? (
                    <Image
                        src={imageSrc}
                        alt={cleanTitle || "Pedagogy"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No image
                    </div>
                )}

                {/* Wave shape transition */}
                <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                    <svg
                        viewBox="0 0 500 40"
                        preserveAspectRatio="none"
                        className="w-full h-7 sm:h-8 md:h-9 text-[#061623] fill-current"
                    >
                        <path
                            d="M 0,28 C 100,38 180,8 280,14 C 380,20 440,8 500,12"
                            fill="none"
                            stroke="#17433F"
                            strokeWidth="2.5"
                            className="opacity-90"
                        />
                        <path d="M 0,28 C 100,38 180,8 280,14 C 380,20 440,8 500,12 L 500,40 L 0,40 Z" />
                    </svg>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-7 pt-4 flex flex-col flex-1">
                <div className="w-fit mb-4">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2.5">
                        {cleanTitle}
                    </h3>
                    <div className="h-[2px] w-full bg-gradient-to-r from-[#17433F] via-[#236860] to-transparent" />
                </div>
                <p className="font-poppins text-[#fff]/90 text-sm md:text-[15px] leading-relaxed flex-1">
                    {cleanContent}
                </p>
            </div>
        </div>
    );
};

export default PedaCard;
