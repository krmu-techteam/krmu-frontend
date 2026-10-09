"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams, useRouter } from "next/navigation";
import { ChevronDown, Search, X, Layers, Loader2 } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { krmBlogURL } from "@/app/constant";

export type CategoryItem = {
    id?: number | string;
    name: string;
    slug: string;
    count?: number;
};

type Props = {
    categories: CategoryItem[];
    title?: string;
    className?: string;
    activeSlug?: string;
    totalBlogsCount?: number;
};

interface WPPost {
    id: number;
    slug: string;
    date?: string;
    title: { rendered: string };
    yoast_head_json?: {
        og_image?: Array<{ url: string }>;
    };
    _embedded?: {
        ["wp:featuredmedia"]?: Array<{
            source_url: string;
        }>;
    };
}

const CategoryPills = ({
    categories,
    title = "Categories",
    className = "",
    activeSlug,
    totalBlogsCount: totalBlogsCountProp,
}: Props) => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();

    // Category dropdown state
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const categoryContainerRef = useRef<HTMLDivElement>(null);

    // Search state
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<WPPost[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // Determine active category from prop, route params (slug), or pathname
    const paramSlug =
        typeof params?.slug === "string"
            ? params.slug
            : Array.isArray(params?.slug)
              ? params.slug[0]
              : "";

    const currentActiveSlug =
        activeSlug ||
        paramSlug ||
        (pathname && pathname.includes("/all-categories/")
            ? pathname.split("/").filter(Boolean).pop()
            : "");

    // Total blogs count across categories (matching the exact WordPress total count)
    const totalBlogsCount = useMemo(() => {
        if (
            typeof totalBlogsCountProp === "number" &&
            totalBlogsCountProp > 0
        ) {
            return totalBlogsCountProp;
        }
        return (categories || []).reduce(
            (acc, cat) => acc + (cat.count || 0),
            0
        );
    }, [categories, totalBlogsCountProp]);

    // Active category object
    const activeCategory = useMemo(() => {
        if (!currentActiveSlug) return null;
        return (categories || []).find(
            (c) => c.slug.toLowerCase() === currentActiveSlug.toLowerCase()
        );
    }, [categories, currentActiveSlug]);

    const [isSwitchingCategory, setIsSwitchingCategory] = useState(false);
    const [selectedCatOverride, setSelectedCatOverride] = useState<
        CategoryItem | null | undefined
    >(undefined);

    const displayedCategory =
        selectedCatOverride !== undefined
            ? selectedCatOverride
            : activeCategory;

    const handleCategoryClick = (cat: CategoryItem | null) => {
        setIsCategoryOpen(false);
        setSelectedCatOverride(cat);
        setIsSwitchingCategory(true);

        const targetSlug = cat ? cat.slug : "";
        const targetUrl = targetSlug
            ? `/blog/all-categories/${targetSlug}`
            : "/blog";

        window.dispatchEvent(
            new CustomEvent("krmu:category-change", {
                detail: { slug: targetSlug },
            })
        );

        window.history.pushState({ slug: targetSlug }, "", targetUrl);

        setTimeout(() => {
            setIsSwitchingCategory(false);
        }, 500);
    };

    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            let slugFromPath = "";
            if (path.includes("/all-categories/")) {
                slugFromPath =
                    path.split("/all-categories/")[1]?.split("/")[0] || "";
            }
            if (!slugFromPath) {
                setSelectedCatOverride(null);
            } else {
                const found = (categories || []).find(
                    (c) => c.slug.toLowerCase() === slugFromPath.toLowerCase()
                );
                setSelectedCatOverride(found || null);
            }
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [categories]);

    // Convert HTML entities for clean labels & titles
    const decodeHTML = (html: string) => {
        if (!html) return "";
        return html
            .replace(/&amp;/g, "&")
            .replace(/&#038;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&#8217;/g, "'")
            .replace(/&#8216;/g, "'")
            .replace(/&#8220;/g, '"')
            .replace(/&#8221;/g, '"');
    };

    // Live search debounced fetch
    useEffect(() => {
        const queryTrimmed = searchQuery.trim();
        if (queryTrimmed.length < 2) {
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        const timer = setTimeout(async () => {
            setIsSearching(true);
            try {
                const baseUrl =
                    krmBlogURL || "https://wp.krmangalam.edu.in/blog";
                // Don't include restrictive _fields so WordPress properly resolves _embed media
                const res = await fetch(
                    `${baseUrl}/wp-json/wp/v2/posts?search=${encodeURIComponent(
                        queryTrimmed
                    )}&_embed&per_page=6`
                );

                if (res.ok) {
                    const data = await res.json();
                    setSearchResults(Array.isArray(data) ? data : []);
                } else {
                    setSearchResults([]);
                }
            } catch (err) {
                console.error("Blog search error:", err);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        }, 350);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Close dropdowns on click outside or Escape
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                categoryContainerRef.current &&
                !categoryContainerRef.current.contains(target)
            ) {
                setIsCategoryOpen(false);
            }
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(target)
            ) {
                setShowResults(false);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsCategoryOpen(false);
                setShowResults(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    if (!categories || categories.length === 0) return null;

    // Dark sleek scrollbar utility class
    const customScrollbarClass =
        "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#071726] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#E7C268] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_#071726]";

    return (
        <div
            className={`w-full bg-[#061623] font-poppins rounded-[8px] p-3 sm:p-4 relative z-30 transition-colors ${className}`}
        >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                {/* Left Side: Live Blog Search with Dropdown Results */}
                <div
                    ref={searchContainerRef}
                    className="relative flex-1 sm:max-w-[340px] w-full"
                >
                    <div className="relative flex items-center">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/50">
                            <Search size={16} />
                        </div>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowResults(true);
                            }}
                            onFocus={() => {
                                if (searchQuery.trim().length >= 2) {
                                    setShowResults(true);
                                }
                                setIsCategoryOpen(false);
                            }}
                            placeholder="Search blogs..."
                            className="w-full bg-[#071726] border border-white/20 hover:border-[#E7C268]/60 text-white text-[13.5px] sm:text-[14.5px] font-normal rounded-[8px] py-2.5 pl-9 pr-9 focus:outline-none focus:ring-1 focus:ring-[#E7C268] focus:border-[#E7C268] placeholder-white/40 transition-colors"
                        />

                        {/* Clear Search Button */}
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSearchResults([]);
                                    setShowResults(false);
                                }}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white cursor-pointer transition-colors"
                                title="Clear search"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>

                    {/* Live Search Results Dropdown List */}
                    {showResults && searchQuery.trim().length >= 2 && (
                        <div
                            className={`absolute left-0 right-0 top-full mt-2 z-50 bg-[#071726] border border-[#23425B] rounded-[8px] overflow-hidden max-h-[360px] overflow-y-auto ${customScrollbarClass}`}
                        >
                            {isSearching && (
                                <div className="p-4 text-center text-xs sm:text-sm text-white/70 flex items-center justify-center gap-2">
                                    <Loader2
                                        size={16}
                                        className="animate-spin text-[#E7C268]"
                                    />
                                    <span>Searching blogs...</span>
                                </div>
                            )}

                            {!isSearching && searchResults.length === 0 && (
                                <div className="p-4 text-center text-xs sm:text-sm text-white/60">
                                    No blogs found for &ldquo;{searchQuery}
                                    &rdquo;
                                </div>
                            )}

                            {!isSearching && searchResults.length > 0 && (
                                <div className="divide-y divide-white/10">
                                    {searchResults.map((post) => {
                                        const thumbnail =
                                            post._embedded?.[
                                                "wp:featuredmedia"
                                            ]?.[0]?.source_url ||
                                            post.yoast_head_json?.og_image?.[0]
                                                ?.url;

                                        const dateStr = post.date
                                            ? new Date(
                                                  post.date
                                              ).toLocaleDateString("en-US", {
                                                  month: "short",
                                                  day: "numeric",
                                                  year: "numeric",
                                              })
                                            : "";

                                        return (
                                            <Link
                                                key={post.id}
                                                href={`/blog/${post.slug}`}
                                                onClick={() => {
                                                    setShowResults(false);
                                                }}
                                                className="flex items-center gap-3 p-3 hover:bg-[#132737] transition-colors group cursor-pointer"
                                            >
                                                {thumbnail ? (
                                                    <div className="relative w-11 h-11 rounded-[6px] overflow-hidden shrink-0 bg-white/5">
                                                        <Image
                                                            src={thumbnail}
                                                            alt={decodeHTML(
                                                                post.title
                                                                    .rendered
                                                            )}
                                                            fill
                                                            sizes="44px"
                                                            className="object-cover"
                                                            unoptimized
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-11 h-11 rounded-[6px] bg-white/5 shrink-0 flex items-center justify-center text-white/30 text-[10px]">
                                                        Blog
                                                    </div>
                                                )}

                                                <div className="flex-1 min-w-0">
                                                    <h5
                                                        dangerouslySetInnerHTML={{
                                                            __html: post.title
                                                                .rendered,
                                                        }}
                                                        className="text-white text-xs sm:text-[13.5px] font-medium leading-snug group-hover:text-[#E7C268] transition-colors line-clamp-2"
                                                    />
                                                    {dateStr && (
                                                        <span className="text-[11px] text-white/50 mt-0.5 block font-light">
                                                            {dateStr}
                                                        </span>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Side: Custom Category Select with Counts */}
                <div
                    ref={categoryContainerRef}
                    className="flex items-center justify-end gap-2.5 sm:gap-3 flex-1 min-w-0"
                >
                    <div className="relative flex-1 min-w-[200px] max-w-full sm:max-w-[340px]">
                        {/* Custom Select Trigger Button */}
                        <button
                            type="button"
                            onClick={() => {
                                setIsCategoryOpen((prev) => !prev);
                                setShowResults(false);
                            }}
                            className="w-full flex items-center justify-between bg-[#071726] border border-white/20 hover:border-[#E7C268]/60 text-white text-[13.5px] sm:text-[14.5px] font-medium rounded-[8px] py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-[#E7C268] transition-colors cursor-pointer text-left gap-2"
                            aria-expanded={isCategoryOpen}
                            aria-haspopup="listbox"
                        >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                <Layers
                                    size={17}
                                    className="text-[#E7C268] shrink-0"
                                />
                                <span className="truncate">
                                    {displayedCategory
                                        ? `${decodeHTML(displayedCategory.name)} ${
                                              typeof displayedCategory.count ===
                                              "number"
                                                  ? `(${displayedCategory.count})`
                                                  : ""
                                          }`
                                        : `All Categories ${
                                              totalBlogsCount > 0
                                                  ? `(${totalBlogsCount})`
                                                  : ""
                                          }`}
                                </span>
                            </div>

                            {isSwitchingCategory ? (
                                <Loader2
                                    size={16}
                                    className="text-[#E7C268] shrink-0 animate-spin"
                                />
                            ) : (
                                <ChevronDown
                                    size={16}
                                    className={`text-white/60 shrink-0 transition-transform duration-200 ${
                                        isCategoryOpen
                                            ? "rotate-180 text-[#E7C268]"
                                            : ""
                                    }`}
                                />
                            )}
                        </button>

                        {/* Custom Dark Dropdown Menu (No white scrollbar) */}
                        {isCategoryOpen && (
                            <div
                                className={`absolute left-0 right-0 top-full mt-2 z-50 bg-[#071726] border border-[#23425B] rounded-[8px] overflow-hidden max-h-[340px] overflow-y-auto ${customScrollbarClass}`}
                                role="listbox"
                            >
                                {/* Option: All Categories */}
                                <button
                                    type="button"
                                    onClick={() => handleCategoryClick(null)}
                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-[13.5px] transition-colors border-b border-white/5 cursor-pointer ${
                                        !displayedCategory
                                            ? "bg-[#132737] text-[#E7C268] font-semibold"
                                            : "text-white/90 hover:bg-[#132737] hover:text-[#E7C268]"
                                    }`}
                                    role="option"
                                    aria-selected={!displayedCategory}
                                >
                                    <span>All Categories</span>
                                    {totalBlogsCount > 0 && (
                                        <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/70 font-medium">
                                            {totalBlogsCount}
                                        </span>
                                    )}
                                </button>

                                {/* List of all categories */}
                                {categories.map((cat) => {
                                    const isSelected =
                                        Boolean(displayedCategory) &&
                                        displayedCategory?.slug?.toLowerCase() ===
                                            cat.slug.toLowerCase();

                                    return (
                                        <button
                                            key={cat.id || cat.slug}
                                            type="button"
                                            onClick={() =>
                                                handleCategoryClick(cat)
                                            }
                                            className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-[13.5px] transition-colors border-b border-white/5 last:border-none cursor-pointer ${
                                                isSelected
                                                    ? "bg-[#132737] text-[#E7C268] font-semibold"
                                                    : "text-white/85 hover:bg-[#132737] hover:text-[#E7C268]"
                                            }`}
                                            role="option"
                                            aria-selected={isSelected}
                                        >
                                            <span className="truncate pr-2">
                                                {decodeHTML(cat.name)}
                                            </span>
                                            {typeof cat.count === "number" && (
                                                <span
                                                    className={`text-[11px] px-2 py-0.5 rounded shrink-0 font-medium ${
                                                        isSelected
                                                            ? "bg-[#E7C268]/20 text-[#E7C268]"
                                                            : "bg-white/10 text-white/60"
                                                    }`}
                                                >
                                                    {cat.count}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Reset Filter Button */}
                    {displayedCategory && (
                        <button
                            type="button"
                            onClick={() => handleCategoryClick(null)}
                            className="text-xs sm:text-[13px] text-[#E7C268] hover:text-white transition-colors underline whitespace-nowrap shrink-0 font-medium cursor-pointer"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPills;
