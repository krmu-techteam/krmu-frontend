"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import CommonBlogCard from "./CommonBlogCard";
import Pagination from "./Pagination";
import BlogListingInfoBar from "./BlogListingInfoBar";
import { BlogCardSkeleton } from "@/app/(main-website)/components/Skeleton/BlogCardSkeleton";

type Props = {
    initialBlogs: MainBlogs[];
    initialTotalPages: number;
    initialTotalBlogs: number;
    initialCurrentPage: number;
    initialBlogsPerPage: number;
    slug?: string;
    mainBlogClass: string;
};

type CacheEntry = {
    blogs: MainBlogs[];
    totalPages: number;
    totalBlogs: number;
};

export default function CommonBlogContainer({
    initialBlogs,
    initialTotalPages,
    initialTotalBlogs,
    initialCurrentPage,
    initialBlogsPerPage,
    slug,
    mainBlogClass,
}: Props) {
    const [currentPage, setCurrentPage] = useState(initialCurrentPage);
    const [blogsPerPage, setBlogsPerPage] = useState(initialBlogsPerPage);
    const [currentCategorySlug, setCurrentCategorySlug] = useState<
        string | undefined
    >(slug);
    const [blogs, setBlogs] = useState<MainBlogs[]>(initialBlogs);
    const [totalPages, setTotalPages] = useState(initialTotalPages);
    const [totalBlogs, setTotalBlogs] = useState(initialTotalBlogs);
    const [isLoading, setIsLoading] = useState(false);
    const [targetLoadingPage, setTargetLoadingPage] = useState<
        number | "prev" | "next" | null
    >(null);

    // In-memory cache across pages and categories
    const cacheRef = useRef<Map<string, CacheEntry>>(new Map());

    const getCacheKey = useCallback(
        (page: number, perPage: number, catSlug?: string) => {
            const s = catSlug !== undefined ? catSlug : currentCategorySlug;
            return `${s || "all"}_${perPage}_${page}`;
        },
        [currentCategorySlug]
    );

    // Seed cache with initial SSR data
    useEffect(() => {
        const key = getCacheKey(initialCurrentPage, initialBlogsPerPage, slug);
        if (!cacheRef.current.has(key)) {
            cacheRef.current.set(key, {
                blogs: initialBlogs,
                totalPages: initialTotalPages,
                totalBlogs: initialTotalBlogs,
            });
        }
    }, [
        initialBlogs,
        initialTotalPages,
        initialTotalBlogs,
        initialCurrentPage,
        initialBlogsPerPage,
        slug,
        getCacheKey,
    ]);

    // Only scroll if user is scrolled past the listing (prevents jitter if already at the top)
    const scrollToBlogTop = () => {
        const el = document.getElementById("blog-listing");
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            if (window.scrollY > top + 150) {
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    const updateUrl = (page: number, perPage: number, catSlug?: string) => {
        const s = catSlug !== undefined ? catSlug : currentCategorySlug;
        const basePath = s ? `/blog/all-categories/${s}` : "/blog";
        const url = new URL(basePath, window.location.origin);

        if (page > 1) {
            url.searchParams.set("page", String(page));
        }

        if (perPage !== 12) {
            url.searchParams.set("per_page", String(perPage));
        }

        window.history.pushState(
            { page, perPage, slug: s },
            "",
            url.toString()
        );
    };

    // Fast Page Change with Smooth Small Loading Feedback
    const handlePageChange = async (
        newPage: number,
        triggerType?: "prev" | "next" | number
    ) => {
        if (newPage === currentPage || newPage < 1 || newPage > totalPages)
            return;

        // Smooth scroll only if needed
        scrollToBlogTop();

        // Update browser URL
        updateUrl(newPage, blogsPerPage);

        const cacheKey = getCacheKey(newPage, blogsPerPage);
        if (cacheRef.current.has(cacheKey)) {
            // Instant render from memory cache
            const cached = cacheRef.current.get(cacheKey)!;
            setBlogs(cached.blogs);
            setTotalPages(cached.totalPages);
            setTotalBlogs(cached.totalBlogs);
            setCurrentPage(newPage);
            setTargetLoadingPage(null);
            return;
        }

        // Small smooth loading indicator
        setIsLoading(true);
        setTargetLoadingPage(triggerType || newPage);

        try {
            const query = new URLSearchParams({
                page: String(newPage),
                per_page: String(blogsPerPage),
            });
            if (currentCategorySlug) query.set("slug", currentCategorySlug);

            const res = await fetch(`/api/blogs?${query.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");

            const data: CacheEntry = await res.json();
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
            setTotalBlogs(data.totalBlogs);
            setCurrentPage(newPage);
            cacheRef.current.set(cacheKey, data);
        } catch (error) {
            console.error("Error loading page:", error);
        } finally {
            setIsLoading(false);
            setTargetLoadingPage(null);
        }
    };

    // Fast Category Switch with Smooth Instant Feedback
    const handleCategorySwitch = async (newSlug?: string) => {
        const targetSlug = newSlug || undefined;
        setCurrentCategorySlug(targetSlug);
        scrollToBlogTop();

        const cacheKey = getCacheKey(1, blogsPerPage, targetSlug);
        if (cacheRef.current.has(cacheKey)) {
            const cached = cacheRef.current.get(cacheKey)!;
            setBlogs(cached.blogs);
            setTotalPages(cached.totalPages);
            setTotalBlogs(cached.totalBlogs);
            setCurrentPage(1);
            setTargetLoadingPage(null);
            return;
        }

        setIsLoading(true);
        setCurrentPage(1);

        try {
            const query = new URLSearchParams({
                page: "1",
                per_page: String(blogsPerPage),
            });
            if (targetSlug) query.set("slug", targetSlug);

            const res = await fetch(`/api/blogs?${query.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");

            const data: CacheEntry = await res.json();
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
            setTotalBlogs(data.totalBlogs);
            cacheRef.current.set(cacheKey, data);
        } catch (error) {
            console.error("Error switching category:", error);
        } finally {
            setIsLoading(false);
            setTargetLoadingPage(null);
        }
    };

    // Listen to custom category change events from CategoryPills
    useEffect(() => {
        const onCategoryChange = (e: Event) => {
            const customEvent = e as CustomEvent<{ slug?: string }>;
            handleCategorySwitch(customEvent.detail?.slug);
        };
        window.addEventListener("krmu:category-change", onCategoryChange);
        return () =>
            window.removeEventListener(
                "krmu:category-change",
                onCategoryChange
            );
    }, [blogsPerPage]);

    // Change Per Page with Smooth Small Loading Feedback
    const handlePerPageChange = async (newPerPage: number) => {
        if (newPerPage === blogsPerPage) return;

        scrollToBlogTop();
        updateUrl(1, newPerPage);

        const cacheKey = getCacheKey(1, newPerPage);
        if (cacheRef.current.has(cacheKey)) {
            const cached = cacheRef.current.get(cacheKey)!;
            setBlogs(cached.blogs);
            setTotalPages(cached.totalPages);
            setTotalBlogs(cached.totalBlogs);
            setBlogsPerPage(newPerPage);
            setCurrentPage(1);
            setTargetLoadingPage(null);
            return;
        }

        setIsLoading(true);
        setBlogsPerPage(newPerPage);
        setCurrentPage(1);

        try {
            const query = new URLSearchParams({
                page: "1",
                per_page: String(newPerPage),
            });
            if (currentCategorySlug) query.set("slug", currentCategorySlug);

            const res = await fetch(`/api/blogs?${query.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch");

            const data: CacheEntry = await res.json();
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
            setTotalBlogs(data.totalBlogs);
            cacheRef.current.set(cacheKey, data);
        } catch (error) {
            console.error("Error changing per page:", error);
        } finally {
            setIsLoading(false);
            setTargetLoadingPage(null);
        }
    };

    // Background prefetch next page for 0ms transitions
    useEffect(() => {
        if (currentPage >= totalPages) return;
        const nextPage = currentPage + 1;
        const nextKey = getCacheKey(nextPage, blogsPerPage);

        if (cacheRef.current.has(nextKey)) return;

        const timer = setTimeout(async () => {
            try {
                const query = new URLSearchParams({
                    page: String(nextPage),
                    per_page: String(blogsPerPage),
                });
                if (currentCategorySlug) query.set("slug", currentCategorySlug);

                const res = await fetch(`/api/blogs?${query.toString()}`);
                if (res.ok) {
                    const data: CacheEntry = await res.json();
                    cacheRef.current.set(nextKey, data);
                }
            } catch {
                // Ignore prefetch errors
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [
        currentPage,
        totalPages,
        blogsPerPage,
        currentCategorySlug,
        getCacheKey,
    ]);

    // Handle browser Back / Forward buttons
    useEffect(() => {
        const handlePopState = () => {
            const params = new URLSearchParams(window.location.search);
            const p = Number(params.get("page")) || 1;
            const pp = Number(params.get("per_page")) || 12;

            const pathname = window.location.pathname;
            let popSlug: string | undefined = undefined;
            if (pathname.includes("/all-categories/")) {
                popSlug =
                    pathname.split("/all-categories/")[1]?.split("/")[0] ||
                    undefined;
            }

            if (popSlug !== currentCategorySlug) {
                handleCategorySwitch(popSlug);
            } else {
                handlePageChange(p);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [getCacheKey, currentCategorySlug]);

    // Helper to generate page numbers with ellipses
    const getPageNumbers = (
        total: number,
        current: number,
        delta: number = 2
    ) => {
        const range: (number | string)[] = [];
        const rangeWithDots: (number | string)[] = [];
        let l: number | undefined;

        for (let i = 1; i <= total; i++) {
            if (
                i === 1 ||
                i === total ||
                (i >= current - delta && i <= current + delta)
            ) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (Number(i) - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (Number(i) - l !== 1) {
                    rangeWithDots.push("…");
                }
            }
            rangeWithDots.push(i);
            l = Number(i);
        }

        return rangeWithDots;
    };

    const pageNumbers = getPageNumbers(totalPages, currentPage);

    return (
        <div className="flex flex-col gap-5">
            {/* Info Bar */}
            <BlogListingInfoBar
                totalBlogs={totalBlogs}
                totalPages={totalPages}
                currentPage={currentPage}
                blogsPerPage={blogsPerPage}
                onPageChange={handlePageChange}
                onPerPageChange={handlePerPageChange}
                isLoading={isLoading}
            />

            {/* Cards Grid with subtle smooth transition & small floating loader */}
            <div className="relative min-h-[350px]">
                {/* Small Smooth Loading Indicator Pill */}
                {isLoading && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#071726]/95 border border-[#23425B] shadow-2xl backdrop-blur-md">
                            <span className="w-3.5 h-3.5 border-2 border-[#E7C268] border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-poppins font-medium text-white/90 tracking-wide">
                                Loading...
                            </span>
                        </div>
                    </div>
                )}

                {/* Cards Container with smooth opacity */}
                <div
                    className={`${
                        mainBlogClass ||
                        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    } transition-opacity duration-300 ${
                        isLoading
                            ? "opacity-35 pointer-events-none"
                            : "opacity-100"
                    }`}
                >
                    {blogs && blogs.length > 0 ? (
                        blogs.map((blog: MainBlogs, i: number) => (
                            <CommonBlogCard
                                key={blog?.id || i}
                                title={blog?.title?.rendered}
                                excerpt={blog?.excerpt?.rendered}
                                slug={blog?.slug}
                                imgId={blog?.featured_media}
                                imageUrl={
                                    blog?._embedded?.["wp:featuredmedia"]?.[0]
                                        ?.source_url
                                }
                                date={blog?.date_gmt || blog?.date}
                                categoryName={
                                    blog?._embedded?.["wp:term"]?.[0]?.[0]
                                        ?.name || "KRMU Blog"
                                }
                                authorName={blog?._embedded?.author?.[0]?.name}
                                authorSlug={blog?._embedded?.author?.[0]?.slug}
                                authorAvatarUrl={
                                    blog?._embedded?.author?.[0]?.avatar_urls?.[
                                        "48"
                                    ] ||
                                    blog?._embedded?.author?.[0]?.avatar_urls?.[
                                        "24"
                                    ]
                                }
                                authorImgId={
                                    blog?._embedded?.author?.[0]?.acf
                                        ?.profile_image
                                }
                            />
                        ))
                    ) : (
                        <div className={mainBlogClass}>
                            {Array.from({ length: blogsPerPage || 9 }).map(
                                (_, i) => (
                                    <BlogCardSkeleton key={i} />
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageNumbers={pageNumbers}
                onPageChange={handlePageChange}
                isLoading={isLoading}
                targetLoadingPage={targetLoadingPage}
            />
        </div>
    );
}
