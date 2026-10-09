"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Loader2 } from "lucide-react";
import { useState, useRef, useEffect, useTransition } from "react";

type Props = {
    totalBlogs: number;
    totalPages: number;
    currentPage: number;
    blogsPerPage: number;
    onPageChange?: (page: number) => void;
    onPerPageChange?: (count: number) => void;
    isLoading?: boolean;
};

export default function BlogListingInfoBar({
    totalBlogs,
    totalPages,
    currentPage,
    blogsPerPage,
    onPageChange,
    onPerPageChange,
    isLoading = false,
}: Props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const [isPageOpen, setIsPageOpen] = useState(false);
    const [isPerPageOpen, setIsPerPageOpen] = useState(false);

    const pageDropdownRef = useRef<HTMLDivElement>(null);
    const perPageDropdownRef = useRef<HTMLDivElement>(null);
    const activePageItemRef = useRef<HTMLButtonElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (
                pageDropdownRef.current &&
                !pageDropdownRef.current.contains(target)
            ) {
                setIsPageOpen(false);
            }
            if (
                perPageDropdownRef.current &&
                !perPageDropdownRef.current.contains(target)
            ) {
                setIsPerPageOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Auto-scroll to selected page when page dropdown opens
    useEffect(() => {
        if (isPageOpen && activePageItemRef.current) {
            activePageItemRef.current.scrollIntoView({
                block: "nearest",
            });
        }
    }, [isPageOpen]);

    if (totalBlogs <= 0) return null;

    const startCount = (currentPage - 1) * blogsPerPage + 1;
    const endCount = Math.min(currentPage * blogsPerPage, totalBlogs);

    const scrollToBlogTop = () => {
        const el = document.getElementById("blog-listing");
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            if (window.scrollY > top + 150) {
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    const handlePageSelect = (page: number) => {
        setIsPageOpen(false);
        if (page === currentPage) return;

        if (onPageChange) {
            onPageChange(page);
            return;
        }

        const params = new URLSearchParams(searchParams.toString());
        if (page <= 1) {
            params.delete("page");
        } else {
            params.set("page", String(page));
        }

        scrollToBlogTop();
        startTransition(() => {
            router.push(
                params.toString()
                    ? `${pathname}?${params.toString()}`
                    : pathname,
                { scroll: false }
            );
        });
    };

    const handlePerPageSelect = (count: number) => {
        setIsPerPageOpen(false);
        if (count === blogsPerPage) return;

        if (onPerPageChange) {
            onPerPageChange(count);
            return;
        }

        const params = new URLSearchParams(searchParams.toString());
        if (count === 12) {
            params.delete("per_page");
        } else {
            params.set("per_page", String(count));
        }
        // Always reset to page 1 when changing items per page
        params.delete("page");

        scrollToBlogTop();
        startTransition(() => {
            router.push(
                params.toString()
                    ? `${pathname}?${params.toString()}`
                    : pathname,
                { scroll: false }
            );
        });
    };

    return (
        <div
            className={`flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/80 font-poppins px-1 transition-opacity ${
                isPending ? "opacity-60" : "opacity-100"
            }`}
        >
            {/* Left: Showing count */}
            <div className="flex items-center gap-1.5 font-normal">
                <span>Showing</span>
                <span className="font-semibold text-white">
                    {startCount}–{endCount}
                </span>
                <span>of</span>
                <span className="font-semibold text-white">{totalBlogs}</span>
                <span>blogs</span>
            </div>

            {/* Right: Custom Select Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                {/* Custom Per Page Dropdown */}
                <div
                    className="flex items-center gap-1.5 relative"
                    ref={perPageDropdownRef}
                >
                    <span className="text-white/80">Show:</span>
                    <button
                        type="button"
                        onClick={() => {
                            setIsPerPageOpen((prev) => !prev);
                            setIsPageOpen(false);
                        }}
                        aria-label="Blogs per page"
                        className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#23425B] hover:border-[#386488] focus:border-[#E7C268] rounded-[8px] pl-3 pr-2 py-1 flex items-center gap-2 transition-all   cursor-pointer select-none"
                    >
                        <span>{blogsPerPage}</span>
                        <ChevronDown
                            className={`w-3.5 h-3.5 text-[#93B9D9] transition-transform duration-200 ${
                                isPerPageOpen ? "rotate-180 text-[#E7C268]" : ""
                            }`}
                        />
                    </button>
                    <span className="text-white/80 hidden xs:inline">
                        per page
                    </span>

                    {/* Per Page Dropdown Menu */}
                    {isPerPageOpen && (
                        <div className="absolute right-0 top-full mt-1.5 z-50 w-24 bg-[#071726] border border-[#23425B] rounded-[8px] overflow-hidden">
                            {[12, 24, 36, 48].map((count) => {
                                const isSelected = count === blogsPerPage;
                                return (
                                    <button
                                        type="button"
                                        key={count}
                                        onClick={() =>
                                            handlePerPageSelect(count)
                                        }
                                        className={`w-full text-left px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                                            isSelected
                                                ? "bg-[#152e46] text-[#E7C268]"
                                                : "text-white/80 hover:bg-[#0e2233] hover:text-white"
                                        }`}
                                    >
                                        <span>{count}</span>
                                        {isSelected && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E7C268]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Custom Page Jump Dropdown with Dark Sleek Scrollbar */}
                {totalPages > 1 && (
                    <div
                        className="flex items-center gap-1.5 relative"
                        ref={pageDropdownRef}
                    >
                        <span className="text-white/80">Page:</span>
                        <button
                            type="button"
                            onClick={() => {
                                setIsPageOpen((prev) => !prev);
                                setIsPerPageOpen(false);
                            }}
                            aria-label="Select page"
                            className="bg-transparent text-white text-xs sm:text-sm font-semibold border border-[#23425B] hover:border-[#386488] focus:border-[#E7C268] rounded-[8px] pl-3 pr-2 py-1 flex items-center gap-2 transition-all cursor-pointer select-none"
                        >
                            <span>{currentPage}</span>
                            {isLoading ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E7C268]" />
                            ) : (
                                <ChevronDown
                                    className={`w-3.5 h-3.5 text-[#93B9D9] transition-transform duration-200 ${
                                        isPageOpen
                                            ? "rotate-180 text-[#E7C268]"
                                            : ""
                                    }`}
                                />
                            )}
                        </button>
                        <span className="text-white/80">of {totalPages}</span>

                        {/* Page Numbers Dropdown Menu with Dark Themed Scrollbar */}
                        {isPageOpen && (
                            <div
                                className="absolute right-0 top-full mt-1.5 z-50 w-24 max-h-56 overflow-y-auto bg-[#071726] border border-[#23425B] rounded-[8px]    text-xs sm:text-sm"
                                style={{
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#23425B #071726",
                                }}
                            >
                                <style jsx>{`
                                    div::-webkit-scrollbar {
                                        width: 6px;
                                    }
                                    div::-webkit-scrollbar-track {
                                        background: #071726;
                                        border-radius: 4px;
                                    }
                                    div::-webkit-scrollbar-thumb {
                                        background: #23425b;
                                        border-radius: 4px;
                                    }
                                    div::-webkit-scrollbar-thumb:hover {
                                        background: #386488;
                                    }
                                `}</style>

                                {Array.from({ length: totalPages }).map(
                                    (_, i) => {
                                        const pageNum = i + 1;
                                        const isSelected =
                                            pageNum === currentPage;
                                        return (
                                            <button
                                                type="button"
                                                key={pageNum}
                                                ref={
                                                    isSelected
                                                        ? activePageItemRef
                                                        : undefined
                                                }
                                                onClick={() =>
                                                    handlePageSelect(pageNum)
                                                }
                                                className={`w-full text-left px-3 py-1.5 font-medium transition-colors flex items-center justify-between cursor-pointer ${
                                                    isSelected
                                                        ? "bg-[#152e46] text-[#E7C268] font-semibold"
                                                        : "text-white/80 hover:bg-[#0e2233] hover:text-white"
                                                }`}
                                            >
                                                <span>{pageNum}</span>
                                                {isSelected && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7C268]" />
                                                )}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
