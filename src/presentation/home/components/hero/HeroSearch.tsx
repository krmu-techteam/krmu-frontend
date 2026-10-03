"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
    X,
    Search,
    Loader2,
    ArrowRight,
    BookOpen,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
    getAllProgrammesServer,
    getAllPhdProgrammesServer,
} from "@/app/(main-website)/(programmes)/programmesApi/api";

interface HeroSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

const zenithProgrammes = [
    {
        id: 9991,
        title: "BTech AI",
        programmeslug:
            "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026",
        degree: {
            name: "Undergraduate",
            slug: "undergraduate-programmes",
        },
        school_category: {
            name: "Zenith School of AI",
            slug: "zenith-ai",
        },
    },
];

// In-memory cache across modal toggles for instant zero-latency search
let cachedAllProgrammes: any[] | null = null;

function normalizeSearchString(text: string | null | undefined): string {
    if (!text) return "";
    return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const DEGREE_ALIASES = [
    {
        keys: ["btech", "bacheloroftechnology"],
        pattern: /b\.?\s*tech|bachelor\s+of\s+technology/i,
    },
    {
        keys: ["mtech", "masteroftechnology"],
        pattern: /m\.?\s*tech|master\s+of\s+technology/i,
    },
    {
        keys: ["bba", "bachelorofbusinessadministration"],
        pattern: /b\.?\s*b\.?\s*a|bachelor\s+of\s+business\s+administration/i,
    },
    {
        keys: ["mba", "masterofbusinessadministration"],
        pattern: /m\.?\s*b\.?\s*a|master\s+of\s+business\s+administration/i,
    },
    {
        keys: ["bca", "bachelorofcomputerapplications"],
        pattern: /b\.?\s*c\.?\s*a|bachelor\s+of\s+computer\s+applications/i,
    },
    {
        keys: ["mca", "masterofcomputerapplications"],
        pattern: /m\.?\s*c\.?\s*a|master\s+of\s+computer\s+applications/i,
    },
    {
        keys: ["llb", "law"],
        pattern: /ll\.?\s*b|b\.?a\.?\s*ll\.?\s*b|b\.?b\.?a\.?\s*ll\.?\s*b|law/i,
    },
    {
        keys: ["bpharm", "pharmacy"],
        pattern: /pharm/i,
    },
    {
        keys: ["phd", "doctorate"],
        pattern: /ph\.?\s*d|doctor/i,
    },
    {
        keys: ["cse", "computerscience"],
        pattern: /cse|computer\s+science/i,
    },
];

const POPULAR_SEARCHES = [
    "B.Tech",
    "CSE",
    "AI & ML",
    "MBA",
    "Law",
    "Pharmacy",
    "BBA",
    "MCA",
    "Ph.D.",
];

export const HeroSearch = ({ isOpen, onClose }: HeroSearchProps) => {
    const [mounted, setMounted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [allData, setAllData] = useState<any[]>(cachedAllProgrammes || []);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Load and cache all 110 programmes from the exact same API used on the programmes page
    useEffect(() => {
        if (!isOpen) return;

        const loadProgrammes = async () => {
            if (cachedAllProgrammes && cachedAllProgrammes.length > 0) {
                setAllData(cachedAllProgrammes);
                return;
            }

            try {
                const [schoolData, phdData] = await Promise.all([
                    getAllProgrammesServer(),
                    getAllPhdProgrammesServer(),
                ]);

                // 1 Zenith + 94 School + 15 PhD = 110 total programmes
                const combined = [
                    ...zenithProgrammes,
                    ...(schoolData || []),
                    ...(phdData || []),
                ];

                cachedAllProgrammes = combined;
                setAllData(combined);
            } catch (err) {
                console.error("Failed to load programmes for search", err);
            }
        };

        loadProgrammes();
    }, [isOpen]);

    // Live search filter across all 110 programmes
    useEffect(() => {
        const searchTerm = query.trim();
        if (searchTerm.length < 2) {
            setSuggestions([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);

        const timer = setTimeout(() => {
            const rawQuery = searchTerm.toLowerCase();
            const normQuery = normalizeSearchString(rawQuery);

            const matchingAliases = DEGREE_ALIASES.filter((alias) =>
                alias.keys.some(
                    (k) => normQuery.includes(k) || k.includes(normQuery)
                )
            );

            const filtered = allData.filter((item: any) => {
                const titleStr =
                    "title" in item ? item.title || "" : item.heading || "";
                const highlightStr =
                    "highlightitle" in item
                        ? (item as any).highlightitle || ""
                        : "";
                const fullTitle = `${titleStr} ${highlightStr}`
                    .replace(/\n/g, " ")
                    .trim();

                const degreeName =
                    ("degree" in item ? (item as any).degree?.name : "") ||
                    ("phdslug" in item ? "Doctoral PhD" : "");
                const schoolName =
                    ("school_category" in item
                        ? (item as any).school_category?.name
                        : "") || "";

                const slug = (
                    item.programmeslug ||
                    item.phdslug ||
                    ""
                ).toLowerCase();

                const normFullTitle = normalizeSearchString(fullTitle);
                const normDegree = normalizeSearchString(degreeName);
                const normSchool = normalizeSearchString(schoolName);
                const normSlug = normalizeSearchString(slug);

                // 1. Direct match on normalized title, slug, degree, or school
                if (
                    normFullTitle.includes(normQuery) ||
                    normSlug.includes(normQuery) ||
                    normDegree.includes(normQuery) ||
                    normSchool.includes(normQuery) ||
                    fullTitle.toLowerCase().includes(rawQuery)
                ) {
                    return true;
                }

                // 2. Keyword/Alias match (e.g. "btech" matches all B.Tech / Bachelor of Technology)
                for (const alias of matchingAliases) {
                    if (
                        alias.pattern.test(fullTitle) ||
                        alias.pattern.test(slug) ||
                        alias.pattern.test(degreeName)
                    ) {
                        return true;
                    }
                }

                return false;
            });

            // Sort: items starting with the query appear first
            filtered.sort((a: any, b: any) => {
                const titleA = normalizeSearchString(
                    a.title || a.heading || ""
                );
                const titleB = normalizeSearchString(
                    b.title || b.heading || ""
                );
                const aStarts = titleA.startsWith(normQuery);
                const bStarts = titleB.startsWith(normQuery);
                if (aStarts && !bStarts) return -1;
                if (!aStarts && bStarts) return 1;
                return 0;
            });

            setSuggestions(filtered);
            setIsSearching(false);
        }, 120);

        return () => clearTimeout(timer);
    }, [query, allData]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            inputRef.current?.focus();
            window.addEventListener("keydown", handleEsc);
        } else {
            setQuery("");
            setSuggestions([]);
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[999] flex items-start justify-center transition-all duration-300 overflow-hidden pt-20 md:pt-[15vh]">
            {/* Black Background Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
                onClick={onClose}
            />
            <div className="w-full max-w-2xl px-4 md:px-6 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200 ease-out relative z-10 pb-4">
                <div className="w-full bg-[#061623] border border-white/10 rounded-[6px] overflow-hidden flex flex-col shadow-2xl">
                    {/* Top Search Input */}
                    <div className="flex items-center px-4 md:px-6 py-4 w-full relative group overflow-hidden shrink-0 border-b border-white/5">
                        <Search
                            className="text-white/60 shrink-0"
                            size={22}
                            strokeWidth={1.5}
                        />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search programs (e.g. B.Tech, CSE, MBA, Law)..."
                            className="w-full bg-transparent font-poppins border-none text-white pl-4 pr-10 md:pr-14 text-[16px] md:text-[18px] focus:outline-none focus:ring-0 placeholder-white/40 tracking-wide"
                        />
                        {query.length > 0 && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setQuery("");
                                }}
                                className="cursor-pointer text-white/60 hover:text-white mr-2 text-sm"
                                title="Clear"
                            >
                                Clear
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onClose();
                            }}
                            className="cursor-pointer text-white/60 hover:text-white transition-colors"
                            title="Close"
                        >
                            <X size={22} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Popular Quick-search tags when query is empty */}
                    {query.trim().length < 2 && (
                        <div className="p-4 md:p-5 flex flex-col gap-2.5">
                            <div className="flex flex-wrap gap-2">
                                {POPULAR_SEARCHES.map((tag) => (
                                    <button
                                        type="button"
                                        key={tag}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setQuery(tag);
                                        }}
                                        className="text-[12.5px] px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors border border-white/10 cursor-pointer"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Results count header */}
                    {query.trim().length >= 2 &&
                        !isSearching &&
                        suggestions.length > 0 && (
                            <div className="px-5 py-2.5 flex items-center justify-between border-b border-white/5 bg-white/[0.02] text-[12px] text-white/60 tracking-wide font-medium shrink-0">
                                <span>
                                    {suggestions.length}{" "}
                                    {suggestions.length === 1
                                        ? "programme found"
                                        : "programmes found"}
                                </span>
                                <span className="text-[11px] text-white/40">
                                    Scroll down to view all {suggestions.length}
                                </span>
                            </div>
                        )}

                    {/* Suggestions or Loader - Fully Scrollable */}
                    {query.trim().length >= 2 && (
                        <div className="flex flex-col p-2 max-h-[58vh] md:max-h-[62vh] overflow-y-auto overscroll-contain pr-1.5 hero-search-scrollbar">
                            {isSearching ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-2">
                                    <Loader2
                                        className="animate-spin text-secondary"
                                        size={26}
                                    />
                                    <span className="text-xs text-white/40">
                                        Searching programmes...
                                    </span>
                                </div>
                            ) : suggestions.length > 0 ? (
                                suggestions.map((item: any, idx: number) => {
                                    const slug =
                                        item.programmeslug ||
                                        item.phdslug ||
                                        "";
                                    const isExternal = slug.startsWith("http");
                                    const href = isExternal
                                        ? slug
                                        : `/programs/${slug}`;

                                    const titleStr = (
                                        item.title
                                            ? item.title +
                                              (item.highlightitle
                                                  ? ` ${item.highlightitle}`
                                                  : "")
                                            : item.heading || ""
                                    )
                                        .replace(/\n/g, " ")
                                        .trim();

                                    const cleanTitle = titleStr.replace(
                                        /<[^>]*>?/gm,
                                        ""
                                    );

                                    const degreeName =
                                        item.degree?.name ||
                                        (item.phdslug ? "Doctoral" : "");
                                    const schoolName =
                                        item.school_category?.name || "";

                                    return (
                                        <Link
                                            key={`${item.id || idx}-${slug}`}
                                            href={href}
                                            target={
                                                isExternal
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                isExternal
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            onClick={onClose}
                                            title={cleanTitle}
                                            className="flex items-center gap-3.5 px-4 py-3 md:py-3.5 rounded-[4px] border border-transparent hover:border-white/10 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-150 group"
                                        >
                                            <div className="text-secondary shrink-0 transition-transform group-hover:scale-110">
                                                <BookOpen
                                                    size={22}
                                                    strokeWidth={1.75}
                                                />
                                            </div>
                                            <div className="flex flex-col flex-1 min-w-0">
                                                <span
                                                    className="text-[14.5px] md:text-[15.5px] font-poppins font-medium text-white/90 group-hover:text-white transition-colors tracking-wide truncate"
                                                    dangerouslySetInnerHTML={{
                                                        __html: titleStr,
                                                    }}
                                                />
                                                {(degreeName || schoolName) && (
                                                    <span className="text-[11.5px] text-white/50 group-hover:text-white/70 transition-colors truncate">
                                                        {schoolName}
                                                        {schoolName &&
                                                        degreeName
                                                            ? " • "
                                                            : ""}
                                                        {degreeName}
                                                    </span>
                                                )}
                                            </div>
                                            <ArrowRight
                                                size={18}
                                                className="text-white/60 group-hover:text-white transition-all duration-200 shrink-0 group-hover:translate-x-1"
                                                strokeWidth={1.5}
                                            />
                                        </Link>
                                    );
                                })
                            ) : (
                                <div className="py-12 text-center text-white/40 text-sm tracking-wide">
                                    No programmes found for &quot;{query}&quot;
                                </div>
                            )}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="border-t border-white/5 bg-white/[0.02] px-4 py-3 flex justify-between items-center text-[12px] text-white/40 font-medium tracking-wide">
                        <span>110 Programmes Available</span>
                        <span>
                            Press{" "}
                            <kbd className="px-1.5 py-0.5 bg-white/10 rounded-sm text-white/60 mx-1 border border-white/5 font-sans font-semibold">
                                ESC
                            </kbd>{" "}
                            to close
                        </span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
