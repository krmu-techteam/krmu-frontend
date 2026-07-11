"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  pageNumbers: (number | string)[];
};

export default function Pagination({ currentPage, totalPages, pageNumbers }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (loading) return; // ⭐ prevent multiple clicks

    setLoading(true);
    router.push(`?page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  const btnBase =
    "px-3 py-1 border rounded transition";

  const disabledStyle =
    "opacity-50 pointer-events-none cursor-not-allowed";

  return (
    <div
      className={`flex items-center gap-2 mt-8 flex-wrap ${
        loading ? "opacity-70" : ""
      }`}
    >
      {/* Prev */}
      {currentPage > 1 && (
        <button
          disabled={loading}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`${btnBase} hover:bg-gray-100 ${
            loading ? disabledStyle : ""
          }`}
        >
          &lt; Prev
        </button>
      )}

      {/* Numbers */}
      {pageNumbers.map((num, idx) =>
        num === "…" ? (
          <span key={idx} className="px-3 py-1">
            …
          </span>
        ) : (
          <button
            key={idx}
            disabled={loading}
            onClick={() => handlePageChange(Number(num))}
            className={`${btnBase} ${
              num === currentPage
                ? "#cb000d text-white border-red-600"
                : "bg-white text-black hover:bg-gray-100"
            } ${loading ? disabledStyle : ""}`}
          >
            {num}
          </button>
        )
      )}

      {/* Next */}
      {currentPage < totalPages && (
        <button
          disabled={loading}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`${btnBase} hover:bg-gray-100 ${
            loading ? disabledStyle : ""
          }`}
        >
          Next &gt;
        </button>
      )}

      {/* Loader */}
      {/* {loading && (
        <Image
          src="/preloader/preloader.gif"
          width={18}
          height={18}
          alt="Preloader"
        />
      )} */}
    </div>                        
  );
}
