"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { getBlogService } from "@/features/blog";
import AuthorPostsCard from "./AuthorPostsCard";
import { Skeleton } from "@/components/ui/skeleton";

type Post = {
    id: number;
    date: string;
    title: { rendered: string };
    featured_media: number;
    slug: string;
    _embedded?: {
        ["wp:featuredmedia"]?: Array<{ source_url: string }>;
    };
};

type Props = {
    authId: number;
    initialPosts?: Post[];
    initialTotalCount?: number;
};

/** Skeleton card matching CommonBlogCard shape */
const CardSkeleton = () => (
    <div className="flex flex-col border border-[#14283c] bg-[#061623] overflow-hidden">
        <Skeleton className="w-full aspect-[16/9] rounded-none bg-white/10" />
        <div className="p-4 flex flex-col gap-3">
            <Skeleton className="w-20 h-5 rounded-full bg-white/10" />
            <Skeleton className="w-full h-6 bg-white/10 rounded" />
            <Skeleton className="w-3/4 h-6 bg-white/10 rounded" />
            <Skeleton className="w-16 h-4 bg-white/10 rounded" />
            <div className="w-full h-[1px] bg-white/10 my-1" />
            <div className="flex gap-6">
                <Skeleton className="w-16 h-3 bg-white/10 rounded" />
                <Skeleton className="w-24 h-3 bg-white/10 rounded" />
            </div>
        </div>
    </div>
);

const AuthorPosts = ({
    authId,
    initialPosts = [],
    initialTotalCount,
}: Props) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [totalCount, setTotalCount] = useState<number | null>(
        initialTotalCount !== undefined
            ? initialTotalCount
            : initialPosts.length || null
    );
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(
        initialTotalCount !== undefined
            ? initialPosts.length < initialTotalCount
            : initialPosts.length >= 100
    );
    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const loadingRef = useRef(false);

    // Fetch total count if not provided initially
    useEffect(() => {
        if (initialTotalCount !== undefined) return;
        getBlogService()
            .getPostsCountByAuthId(authId)
            .then((count) => setTotalCount(count));
    }, [authId, initialTotalCount]);

    const fetchPosts = useCallback(
        async (pageNum: number) => {
            if (loadingRef.current) return;
            loadingRef.current = true;
            setLoading(true);
            try {
                const data = await getBlogService().getPostsByAuthId(
                    authId,
                    pageNum,
                    100
                );
                if (!data || data.length < 100) setHasMore(false);
                if (data && data.length > 0) {
                    setPosts((prev) => {
                        const map = new Map(prev.map((p) => [p.id, p]));
                        data.forEach((p) => map.set(p.id, p));
                        const updated = Array.from(map.values());
                        if (
                            totalCount !== null &&
                            updated.length >= totalCount
                        ) {
                            setHasMore(false);
                        }
                        return updated;
                    });
                }
            } catch {
                setHasMore(false);
            } finally {
                setLoading(false);
                loadingRef.current = false;
            }
        },
        [authId, totalCount]
    );

    // Only load if initialPosts was empty
    useEffect(() => {
        if (initialPosts.length > 0) return;
        setPosts([]);
        setPage(1);
        setHasMore(true);
        fetchPosts(1);
    }, [authId, initialPosts.length, fetchPosts]);

    // IntersectionObserver infinite scroll for remaining pages (if >100 posts)
    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    hasMore &&
                    !loadingRef.current
                ) {
                    setPage((prev) => {
                        const next = prev + 1;
                        fetchPosts(next);
                        return next;
                    });
                }
            },
            { rootMargin: "300px", threshold: 0 }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [hasMore, fetchPosts]);

    return (
        <div>
            {/* Section heading with total count */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[22px] font-semibold text-white font-poppins m-0">
                    Articles
                </h2>
                <span className="text-white/50 text-sm font-poppins">
                    {totalCount !== null ? (
                        <>
                            <span className="text-white font-semibold">
                                {totalCount}
                            </span>{" "}
                            post{totalCount !== 1 ? "s" : ""}
                        </>
                    ) : (
                        <Skeleton className="w-16 h-4 bg-white/10 rounded inline-block" />
                    )}
                </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {posts.map((post) => {
                    const thumbnail =
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                    return (
                        <AuthorPostsCard
                            key={post.id}
                            title={post.title?.rendered}
                            imgId={post.featured_media}
                            imageUrl={thumbnail}
                            date={post.date}
                            slug={post.slug}
                        />
                    );
                })}

                {/* Skeleton cards while loading next page */}
                {loading &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <CardSkeleton key={`sk-${page}-${i}`} />
                    ))}
            </div>

            {/* No posts fallback */}
            {!loading && posts.length === 0 && (
                <p className="text-center text-white/40 text-sm font-poppins py-12">
                    No articles found.
                </p>
            )}

            {/* End of feed */}
            {!hasMore && posts.length > 0 && (
                <p className="text-center text-white/30 text-xs font-poppins py-6 tracking-widest">
                    — All articles loaded —
                </p>
            )}

            {/* Invisible sentinel for IntersectionObserver */}
            <div ref={sentinelRef} className="h-1" />
        </div>
    );
};

export default AuthorPosts;
