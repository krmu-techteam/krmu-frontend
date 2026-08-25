import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getWordImageById } from "@/lib/api/common";
import { NewsEventDomain } from "@/features/home";

interface EventAndNewsCardProps {
    data: NewsEventDomain;
}

export const EventAndNewsCard: React.FC<EventAndNewsCardProps> = async ({
    data,
}) => {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const getImgUrl = await getWordImageById(data?.featuredMediaId);

    return (
        <div className="group cursor-pointer">
            <Link href={`/events-and-news/${data.slug}`} className="block">
                <div className="relative aspect-[3/2] rounded-[4px] overflow-hidden mb-6 bg-white/5">
                    {getImgUrl && (
                        <Image
                            src={getImgUrl}
                            alt={data.title || ""}
                            fill
                            className="object-fill group-hover:scale-105 transition-transform duration-1000"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <span className="text-white text-[12px] font-normal tracking-wide flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            Read Full Story{" "}
                            <ArrowUpRight
                                size={14}
                                className="text-brand-gold"
                            />
                        </span>
                    </div>
                </div>
            </Link>

            <p className="text-white/90 text-[15px] md:text-[16px] tracking-wide font-normal mb-1">
                Published On: {formattedDate}
            </p>

            <Link href={`/events-and-news/${data.slug}`} className="block">
                <h3
                    className="text-white font-serif text-[20px] md:text-xl font-semibold tracking-wide leading-snug group-hover:text-brand-gold transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{
                        __html: data.title || "",
                    }}
                />
            </Link>
        </div>
    );
};
