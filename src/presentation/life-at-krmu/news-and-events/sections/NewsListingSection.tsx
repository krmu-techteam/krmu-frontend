"use client";

import { useEffect, useState } from "react";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { NewsEventItem } from "@/lib/types/news-events";
import { NewsCard, NewsCardSkeleton } from "../components";
import { FeaturedBannerSkeleton } from "../components/NewsCardSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

import FeaturedBannerSection from "./FeaturedBannerSection";

const NewsListingSection = () => {
  const [news, setNews] = useState<NewsEventItem[]>([]);
  const [featuredItem, setFeaturedItem] = useState<NewsEventItem | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await getNewsEventsWP(1, 1);
        if (res.data && res.data.length > 0) {
          setFeaturedItem(res.data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch featured news:", err);
      }
    }
    fetchFeatured();
  }, []);

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
      <div className="max-w-[1530px] mx-auto px-4 md:px-10 w-full pt-4 md:pt-8 lg:pt-8 pb-8 md:pb-12">
        {/* Featured Banner (Permanently Visible) */}
        {!featuredItem ? (
          <FeaturedBannerSkeleton />
        ) : (
          <div className="mt-4 md:mt-6 mb-8 md:mb-12">
            <FeaturedBannerSection
              title={featuredItem.title.rendered}
              slug={featuredItem.slug}
              publishedAt={featuredItem.date}
              firstImage={featuredItem.featured_media}
            />
          </div>
        )}

        {/* News Cards or Skeleton Loaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: pageSize - (page === 1 ? 1 : 0) }).map(
                (_, i) => <NewsCardSkeleton key={i} />,
              )
            : (page === 1 && featuredItem
                ? news.filter((item) => item.slug !== featuredItem.slug)
                : news
              ).map((item, i) => (
                <NewsCard
                  key={i}
                  title={item.title.rendered}
                  slug={item.slug}
                  firstImage={item?.featured_media}
                  publishedAt={item.date}
                />
              ))}
        </div>

        {/* Page X of Y Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12 text-white font-poppins select-none">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              aria-label="Previous Page"
              className="text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors p-1 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-base sm:text-lg font-normal text-white tracking-wide">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || loading}
              aria-label="Next Page"
              className="text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors p-1 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsListingSection;
