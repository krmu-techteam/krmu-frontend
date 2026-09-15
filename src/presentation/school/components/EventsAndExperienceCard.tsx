import { STRAPI_URL } from "@/app/constant";
import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    content: ParagraphBlock[];
    slug: string;
    featured_img_url: string;
};

const LOWERCASE_EXCEPTIONS = new Set([
    "a",
    "an",
    "on",
    "the",
    "in",
    "by",
    "for",
    "from",
    "and",
    "at",
]);

export function formatCardTitle(title: string): string {
    if (!title) return "";
    const formatted = title.replace(
        /\b[a-zA-Z]+(?:'[a-zA-Z]+)?\b/g,
        (word, offset, fullStr) => {
            const lower = word.toLowerCase();

            // First word of the title
            const isFirstWord =
                offset === 0 || !/[a-zA-Z]/.test(fullStr.slice(0, offset));
            // First word after delimiters like ": ", "- ", "– "
            const isAfterDelimiter =
                offset > 1 && /[:\-–—]\s*$/.test(fullStr.slice(0, offset));

            if (
                !isFirstWord &&
                !isAfterDelimiter &&
                LOWERCASE_EXCEPTIONS.has(lower)
            ) {
                return lower;
            }

            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    );

    // Keep 'o' lowercase in 'MoU'
    return formatted.replace(/\bMOU\b/gi, "MoU");
}

const EventsAndExperienceCard = ({
    title,
    content,
    slug,
    featured_img_url,
}: Props) => {
    const displayTitle = formatCardTitle(title);

    return (
        <div className="group cursor-pointer">
            <Link href={`/events-and-news/${slug}`} className="block">
                <div className="relative aspect-[3/2] rounded-sm overflow-hidden mb-6 bg-white/5">
                    {featured_img_url && (
                        <Image
                            src={`${STRAPI_URL}${featured_img_url}`}
                            alt={displayTitle || ""}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
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

            <Link href={`/events-and-news/${slug}`} className="block">
                <h3
                    className="text-white font-serif text-lg md:text-xl font-medium leading-snug group-hover:text-brand-gold transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{
                        __html: displayTitle || "",
                    }}
                />
            </Link>

            {content && (
                <div className="text-white/80 text-sm mt-2 font-poppins font-normal leading-relaxed tracking-wide line-clamp-2">
                    <BlocksRenderer content={content} />
                </div>
            )}
        </div>
    );
};

export default EventsAndExperienceCard;
