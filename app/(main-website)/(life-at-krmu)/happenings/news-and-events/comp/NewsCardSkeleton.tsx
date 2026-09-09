"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";

const NewsCardSkeleton = () => (
  <div
    className="rounded-3xl overflow-hidden animate-pulse "
    style={{
      background: `linear-gradient(180deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.12) 100%)`,
      backdropFilter: "blur(13.410955429077px)",
    }}
  >
    <div className="w-full xl:h-[265px] h-[246px] rounded-t-3xl bg-white/10" />
    <div className="pt-5 pl-[30px] pr-[20px]">
      <div className="h-3 w-32 bg-white/10 rounded" />
      <div className="mt-3 mb-[15px] space-y-2">
        <div className="h-5 w-4/5 bg-white/10 rounded" />
        <div className="h-5 w-3/5 bg-white/10 rounded" />
      </div>
      <div className="h-3 w-20 bg-white/10 rounded mb-[29px]" />
    </div>
  </div>
);

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

  return (
    <div>
      {/* News Cards / Skeletons */}
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
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-white">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages || loading}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsAndEventsCards;