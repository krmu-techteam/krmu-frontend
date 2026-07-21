"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  pageNumbers: (number | string)[];
};

export default function Pagination({
  currentPage,
  totalPages,
  pageNumbers,
}: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (loading || page < 1 || page > totalPages) return;

    setLoading(true);
    router.push(`?page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-4 my-10 sm:my-14 font-poppins select-none ${
        loading ? "opacity-75" : ""
      }`}
    >
      {/* Prev Button */}
      <button
        disabled={currentPage <= 1 || loading}
        onClick={() => handlePageChange(currentPage - 1)}
        className="w-10 h-10 rounded-[8px] bg-[#0c1e30] border border-[#1b3854] hover:bg-[#14324f] transition-all flex items-center justify-center text-white disabled:opacity-35 disabled:cursor-not-allowed shadow-sm"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5 text-white/90" />
      </button>

      {/* Page Numbers List */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {pageNumbers.map((num, idx) =>
          num === "…" || num === "..." ? (
            <span
              key={idx}
              className="text-white/70 font-poppins text-sm px-2 tracking-widest"
            >
              . . .
            </span>
          ) : (
            <button
              key={idx}
              disabled={loading}
              onClick={() => handlePageChange(Number(num))}
              className={
                Number(num) === currentPage
                  ? "w-9 h-9 rounded-full bg-[#031322] border border-[#14304d] text-white font-medium text-sm flex items-center justify-center shadow-inner"
                  : "text-white/80 hover:text-white font-poppins text-sm px-2.5 py-1 font-normal transition-colors cursor-pointer"
              }
            >
              {num}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        disabled={currentPage >= totalPages || loading}
        onClick={() => handlePageChange(currentPage + 1)}
        className="w-10 h-10 rounded-[8px] bg-[#0c1e30] border border-[#1b3854] hover:bg-[#14324f] transition-all flex items-center justify-center text-white disabled:opacity-35 disabled:cursor-not-allowed shadow-sm"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5 text-white/90" />
      </button>
    </div>
  );
}
