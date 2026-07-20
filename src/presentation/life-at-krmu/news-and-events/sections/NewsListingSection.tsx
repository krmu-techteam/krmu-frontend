"use client";

import { useEffect, useState } from "react";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";
import { NewsCard, NewsCardSkeleton } from "../components";
import Pagination from "@/components/common/Pagination";

const NewsListingSection = () => {
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
    <section>
      <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 w-full py-10">
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
        <Pagination
          page={page}
          totalPages={totalPages}
          loading={loading}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
};

export default NewsListingSection;
