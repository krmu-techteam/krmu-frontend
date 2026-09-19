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
    let result = formatted.replace(/\bMOU\b/gi, "MoU");

    // Format 'Pvt' as 'Pvt.' and 'Ltd' / 'Ldt' as 'Ltd.'
    result = result.replace(/\bPvt\b\.?/gi, "Pvt.");
    result = result.replace(/\b(?:Ltd|Ldt)\b\.?/gi, "Ltd.");
    result = result.replace(/Pvt\.\s*Ltd\./gi, "Pvt. Ltd.");

    return result;
}

export function formatBlocksContent(
    content: ParagraphBlock[]
): ParagraphBlock[] {
    if (!content || !Array.isArray(content)) return content;
    return content.map((block) => {
        if (!block || !Array.isArray(block.children)) return block;
        return {
            ...block,
            children: block.children.map((child: any) => {
                if (child && typeof child.text === "string") {
                    let text = child.text;
                    text = text.replace(/\bMOU\b/gi, "MoU");
                    text = text.replace(/\bPvt\b\.?/gi, "Pvt.");
                    text = text.replace(/\b(?:Ltd|Ldt)\b\.?/gi, "Ltd.");
                    text = text.replace(/Pvt\.\s*Ltd\./gi, "Pvt. Ltd.");
                    return { ...child, text };
                }
                return child;
            }),
        };
    });
}

const EventsAndExperienceCard = ({
    title,
    content,
    slug,
    featured_img_url,
}: Props) => {
    const displayTitle = formatCardTitle(title);
    const displayContent = formatBlocksContent(content);

    return (
        <div className="group cursor-pointer flex flex-col h-full w-full">
            <Link href={`/events-and-news/${slug}`} className="block">
                <div className="relative aspect-[3/2] rounded-sm overflow-hidden mb-5 bg-white/5">
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

            <div className="flex-1 flex flex-col justify-start">
                <Link href={`/events-and-news/${slug}`} className="block">
                    <h3
                        className="text-white font-serif text-lg md:text-xl font-medium leading-snug group-hover:text-brand-gold transition-colors line-clamp-2 min-h-[3.25rem] md:min-h-[3.5rem]"
                        dangerouslySetInnerHTML={{
                            __html: displayTitle || "",
                        }}
                    />
                </Link>

                {displayContent && (
                    <div className="text-white/80 text-sm mt-2 font-poppins font-normal leading-relaxed tracking-wide line-clamp-2">
                        <BlocksRenderer content={displayContent} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsAndExperienceCard;
