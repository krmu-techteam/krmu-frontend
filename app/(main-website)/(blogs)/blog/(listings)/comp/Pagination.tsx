"use client";

import { useState, useEffect } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (loading) return;

    if (page < 1 || page > totalPages) return;

    if (page === currentPage) return;

    setLoading(true);

    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const query = params.toString();

    router.push(query ? `${pathname}?${query}` : pathname);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

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
      {/* Previous */}
      {currentPage > 1 && (
        <button
          type="button"
          disabled={loading}
          onClick={() =>
            handlePageChange(currentPage - 1)
          }
          className={`${btnBase} hover:bg-gray-100 ${
            loading ? disabledStyle : ""
          }`}
        >
          &lt; Prev
        </button>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((num, idx) => {
        if (num === "…") {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="px-3 py-1"
            >
              …
            </span>
          );
        }

        const pageNumber = Number(num);

        return (
          <button
            type="button"
            key={pageNumber}
            disabled={
              loading || pageNumber === currentPage
            }
            onClick={() =>
              handlePageChange(pageNumber)
            }
            className={`${btnBase} ${
              pageNumber === currentPage
                ? "bg-[#cb000d] text-white border-[#cb000d]"
                : "bg-white text-black hover:bg-gray-100"
            } ${
              loading ? disabledStyle : ""
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next */}
      {currentPage < totalPages && (
        <button
          type="button"
          disabled={loading}
          onClick={() =>
            handlePageChange(currentPage + 1)
          }
          className={`${btnBase} hover:bg-gray-100 ${
            loading ? disabledStyle : ""
          }`}
        >
          Next &gt;
        </button>
      )}
    </div>
  );
}