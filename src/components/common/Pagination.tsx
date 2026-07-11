import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  loading?: boolean;
  onPageChange: (page: number) => void;
}

export const getPageNumbers = (
  page: number,
  totalPages: number,
  maxVisiblePages = 5,
) => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(1);

  let start = Math.max(2, page - 1);
  let end = Math.min(totalPages - 1, page + 1);

  if (page <= 3) end = 4;
  else if (page >= totalPages - 2) start = totalPages - 3;

  if (start > 2) pages.push("ellipsis-start");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("ellipsis-end");

  pages.push(totalPages);

  return pages;
};

const Pagination = ({
  page,
  totalPages,
  loading = false,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);

  return (
    <div className="flex justify-center items-center font-poppins gap-2 mt-12 select-none">
      {/* Previous */}
      <button
        disabled={page === 1 || loading}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/75 hover:text-white hover:border-brand-gold hover:bg-white/5 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {pages.map((item, index) => {
        if (typeof item === "string") {
          return (
            <span
              key={index}
              className="w-10 h-10 flex items-center justify-center text-white/40"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={item}
            disabled={loading}
            onClick={() => onPageChange(item)}
            className={`w-10 h-10 rounded-full cursor-pointer transition-all ${
              page === item
                ? "bg-brand-gold text-brand-navy-deep"
                : "text-white hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={page === totalPages || loading}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/75 hover:text-white hover:border-brand-gold hover:bg-white/5 cursor-pointer transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
