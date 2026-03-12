"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";

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
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center py-10 text-white">
          Loading...
        </div>
      )}

      {/* News Cards */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {news.map((item, i) => (
            <NewsCard
              key={i}
              title={item.title.rendered}
              slug={item.slug}
              firstImage={item?.featured_media}
              publishedAt={item.date}
            />
          ))}
        </div>
      )}

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
