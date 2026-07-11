"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";
import { Skeleton } from "@/components/ui/skeleton";

import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsCardSkeleton = () => {
  return (
    <div className="p-2 space-y-4">
      {/* Image Skeleton */}
      <div className="relative aspect-[3/2] rounded-sm overflow-hidden bg-white/5">
        <Skeleton className="w-full h-full bg-white/10" />
      </div>
      {/* Date Skeleton */}
      <Skeleton className="h-4 w-[40%] bg-white/10 rounded" />
      {/* Title Skeletons */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-full bg-white/10 rounded" />
        <Skeleton className="h-5 w-[85%] bg-white/10 rounded" />
      </div>
    </div>
  );
};

const NewsAndEventsCards = () => {
  const [news, setNews] = useState<NewsEventItem[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await getNewsEventsWP(page, pageSize);

        setNews(res.data);
        setTotalPages(res.pagination.totalPages);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [page, pageSize]);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);

      if (page <= 3) {
        end = 4;
      } else if (page >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) {
        pages.push("ellipsis-start");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("ellipsis-end");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section>
      <div className="max-w-[1530px] mx-auto px-6 md:px-7 xl:px-16 w-full py-10">
        {/* News Cards or Skeleton Loaders */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: pageSize }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))
            : news.map((item, i) => (
                <NewsCard
                  key={i}
                  title={item.title.rendered}
                  slug={item.slug}
                  firstImage={item?.featured_media}
                  publishedAt={item.date}
                />
              ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 select-none">
            {/* Previous Page Button */}
            <button
              disabled={page === 1 || loading}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/75 hover:text-white hover:border-brand-gold hover:bg-white/5 disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:bg-transparent disabled:hover:text-white/75 disabled:cursor-not-allowed transition-all duration-300 group cursor-pointer mr-2"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((pageNum, index) => {
              if (pageNum === "ellipsis-start" || pageNum === "ellipsis-end") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="w-10 h-10 flex items-center justify-center text-white/40 font-poppins text-sm"
                  >
                    ...
                  </span>
                );
              }

              const isCurrent = pageNum === page;
              return (
                <button
                  key={pageNum}
                  disabled={loading}
                  onClick={() => setPage(pageNum as number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-poppins text-sm transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-brand-gold text-brand-navy-deep font-semibold shadow-lg shadow-brand-gold/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Page Button */}
            <button
              disabled={page === totalPages || loading}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/75 hover:text-white hover:border-brand-gold hover:bg-white/5 disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:bg-transparent disabled:hover:text-white/75 disabled:cursor-not-allowed transition-all duration-300 group cursor-pointer ml-2"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsAndEventsCards;
