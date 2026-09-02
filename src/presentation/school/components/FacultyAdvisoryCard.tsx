"use client";

import { getFacultyBySlug } from "@/lib/api/faculty";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import * as cheerio from "cheerio";
import { Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
    name: string;
    desg: string;
    slug: string;
    qual: string;
    imgURL: string;
};

type SocialItem = {
    type: "email" | "linkedin";
    value: string;
};

export const FacultyAdvisoryCard = ({
    name,
    desg,
    slug,
    qual,
    imgURL,
}: Props) => {
    const [facultyContent, setFacultyContent] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        let mounted = true;

        const fetchFaculty = async () => {
            try {
                const res = await getFacultyBySlug(slug);

                if (!mounted) return;

                setFacultyContent(res?.[0]?.content?.rendered || "");
            } catch (error) {
                console.error("Error fetching faculty:", error);

                if (mounted) {
                    setFacultyContent("");
                }
            }
        };

        fetchFaculty();

        return () => {
            mounted = false;
        };
    }, [slug]);

    const socialItems = useMemo<SocialItem[]>(() => {
        if (facultyContent === null) return [];

        const $ = cheerio.load(facultyContent);

        const items: SocialItem[] = [];

        $(".fusion-checklist li a").each((_, el) => {
            const href = $(el).attr("href")?.trim();

            if (!href) return;

            // LINKEDIN
            if (href.includes("linkedin.com")) {
                items.push({
                    type: "linkedin",
                    value: href,
                });
            }

            // EMAIL
            else if (href.startsWith("mailto:")) {
                items.push({
                    type: "email",
                    value: href.replace("mailto:", ""),
                });
            }
        });

        // LinkedIn first
        return items.sort((a, b) =>
            a.type === "linkedin" ? -1 : b.type === "linkedin" ? 1 : 0
        );
    }, [facultyContent]);

    const isLoading = facultyContent === null;

    return (
        <div className="overflow-hidden bg-[#061623] transition-all duration-300 ease-in-out group flex flex-col font-poppins h-full w-full">
            {/* IMAGE SECTION */}
            <div className="relative flex h-[240px] sm:h-[280px] w-full items-end justify-center overflow-hidden bg-[#ffffff]">
                {/* SOCIAL ICONS (Floating Top Right) */}
                <div className="absolute top-3 right-3 z-30">
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-7 w-7 rounded bg-gray-300" />
                            <Skeleton className="h-7 w-7 rounded bg-gray-300" />
                        </div>
                    ) : socialItems.length > 0 ? (
                        <ul className="flex items-center gap-1.5">
                            {socialItems.map((item, index) => {
                                const isLinkedin = item.type === "linkedin";

                                return (
                                    <li key={`${item.type}-${index}`}>
                                        <Link
                                            href={
                                                isLinkedin
                                                    ? item.value
                                                    : `mailto:${item.value}`
                                            }
                                            target={
                                                isLinkedin
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                isLinkedin
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className={`flex items-center justify-center rounded p-1.5 transition-opacity hover:opacity-90 ${
                                                isLinkedin
                                                    ? "bg-[#0077b5]"
                                                    : "bg-[#001732]"
                                            }`}
                                        >
                                            {isLinkedin ? (
                                                <Image
                                                    src="/linkedin.svg"
                                                    width={14}
                                                    height={14}
                                                    alt="LinkedIn"
                                                    className="h-4 w-4"
                                                />
                                            ) : (
                                                <Mail
                                                    size={16}
                                                    color="#fff"
                                                    strokeWidth={2}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </div>

                {/* FACULTY IMAGE */}
                <Link
                    href={`/faculty/${slug}`}
                    className="w-full h-full flex items-end justify-center"
                >
                    <Image
                        src={imgURL}
                        width={272}
                        height={295}
                        alt={name}
                        priority={false}
                        className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                </Link>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-5 bg-[#061623]">
                <Link
                    href={`/faculty/${slug}`}
                    target="_blank"
                    className="inline-block text-white font-bold leading-snug text-[16px] sm:text-[18px] mb-1.5"
                >
                    <h3 className="inline-block text-white font-bold leading-snug text-[16px] sm:text-[18px]">
                        {name}
                    </h3>
                </Link>

                <p
                    className="uppercase text-[#09b] text-[12px] sm:text-[13px] font-medium leading-relaxed mb-1.5"
                    dangerouslySetInnerHTML={{
                        __html: desg,
                    }}
                />

                <p
                    className="font-semibold text-white text-[14px] sm:text-[13px] leading-snug"
                    dangerouslySetInnerHTML={{
                        __html: qual,
                    }}
                />
            </div>
        </div>
    );
};
