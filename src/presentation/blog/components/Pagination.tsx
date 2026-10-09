"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

type Props = {
    currentPage: number;
    totalPages: number;
    pageNumbers: (number | string)[];
    onPageChange?: (
        page: number,
        triggerType?: "prev" | "next" | number
    ) => void;
    isLoading?: boolean;
    targetLoadingPage?: number | "prev" | "next" | null;
};

export default function Pagination({
    currentPage,
    totalPages,
    pageNumbers,
    onPageChange,
    isLoading = false,
    targetLoadingPage = null,
}: Props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (Number(pageNumber) <= 1) {
            params.delete("page");
        } else {
            params.set("page", pageNumber.toString());
        }
        const queryString = params.toString();
        return queryString ? `${pathname}?${queryString}` : pathname;
    };

    const scrollToBlogTop = () => {
        const el = document.getElementById("blog-listing");
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetPage: number,
        triggerType?: "prev" | "next" | number
    ) => {
        if (isLoading) {
            e.preventDefault();
            return;
        }
        if (onPageChange) {
            e.preventDefault();
            onPageChange(targetPage, triggerType);
        } else {
            scrollToBlogTop();
        }
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-end gap-3 sm:gap-4 my-10 font-poppins select-none">
            {/* Prev Button - Pure text, NO background, NO border with small smooth loader */}
            {currentPage <= 1 ? (
                <span
                    aria-disabled="true"
                    className="text-white/30 text-xs sm:text-sm font-medium cursor-not-allowed select-none px-2 py-1"
                    aria-label="Previous Page"
                >
                    Previous
                </span>
            ) : (
                <Link
                    href={createPageURL(currentPage - 1)}
                    onClick={(e) => handleClick(e, currentPage - 1, "prev")}
                    scroll={false}
                    prefetch={false}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors select-none px-2 py-1 ${
                        isLoading && targetLoadingPage === "prev"
                            ? "text-[#E7C268] cursor-wait"
                            : "text-white/80 hover:text-[#E7C268] cursor-pointer"
                    }`}
                    aria-label="Previous Page"
                >
                    {isLoading && targetLoadingPage === "prev" && (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E7C268]" />
                    )}
                    <span>Previous</span>
                </Link>
            )}

            {/* Page Numbers List - Pure text, NO background, NO border */}
            <div className="flex items-center gap-1 sm:gap-1.5">
                {pageNumbers.map((num, idx) => {
                    if (num === "…" || num === "...") {
                        return (
                            <span
                                key={`ellipsis-${idx}`}
                                className="text-white/40 font-poppins text-xs sm:text-sm px-1.5 tracking-widest select-none"
                            >
                                . . .
                            </span>
                        );
                    }

                    const pageNum = Number(num);
                    const isActive = pageNum === currentPage;
                    const isTargetLoading =
                        isLoading && targetLoadingPage === pageNum;

                    if (isActive && !isTargetLoading) {
                        return (
                            <span
                                key={`page-${pageNum}`}
                                aria-current="page"
                                className="text-[#E7C268] font-bold text-xs sm:text-sm px-2.5 py-1 cursor-default select-none"
                            >
                                {pageNum}
                            </span>
                        );
                    }

                    return (
                        <Link
                            key={`page-${pageNum}`}
                            href={createPageURL(pageNum)}
                            onClick={(e) => handleClick(e, pageNum, pageNum)}
                            scroll={false}
                            prefetch={false}
                            className={`inline-flex items-center gap-1 font-poppins text-xs sm:text-sm px-2.5 py-1 select-none transition-colors ${
                                isTargetLoading
                                    ? "text-[#E7C268] font-semibold cursor-wait"
                                    : "text-white/70 hover:text-[#E7C268] font-normal cursor-pointer"
                            }`}
                        >
                            <span>{pageNum}</span>
                            {isTargetLoading && (
                                <Loader2 className="w-3 h-3 animate-spin text-[#E7C268]" />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button - Pure text, NO background, NO border with small smooth loader */}
            {currentPage >= totalPages ? (
                <span
                    aria-disabled="true"
                    className="text-white/30 text-xs sm:text-sm font-medium cursor-not-allowed select-none px-2 py-1"
                    aria-label="Next Page"
                >
                    Next
                </span>
            ) : (
                <Link
                    href={createPageURL(currentPage + 1)}
                    onClick={(e) => handleClick(e, currentPage + 1, "next")}
                    scroll={false}
                    prefetch={false}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors select-none px-2 py-1 ${
                        isLoading && targetLoadingPage === "next"
                            ? "text-[#E7C268] cursor-wait"
                            : "text-white/80 hover:text-[#E7C268] cursor-pointer"
                    }`}
                    aria-label="Next Page"
                >
                    <span>Next</span>
                    {isLoading && targetLoadingPage === "next" && (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E7C268]" />
                    )}
                </Link>
            )}
        </div>
    );
}
