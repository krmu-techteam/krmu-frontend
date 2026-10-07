import { getBlogService } from "@/features/blog";
import Pagination from "./Pagination";
import BlogListingInfoBar from "./BlogListingInfoBar";
import { Suspense } from "react";
import { BlogCardSkeleton } from "@/app/(main-website)/components/Skeleton/BlogCardSkeleton";
import CommonBlogList from "./CommonBlogList";

type Props = {
    searchParams: Promise<{ page?: string; per_page?: string }>;
    slug?: string;
    mainBlogClass: string;
};

const CommonBlogLayout = async ({
    searchParams,
    slug,
    mainBlogClass,
}: Props) => {
    const resolvedSearchParams = await searchParams;
    const currentPage = Number(resolvedSearchParams?.page) || 1;
    const blogsPerPage = Number(resolvedSearchParams?.per_page) || 12;

    // ⭐ Fetch only pagination meta here
    const { totalPages, totalBlogs } =
        await getBlogService().getAllBlogsByPerPageOrCategorySlug(
            blogsPerPage,
            currentPage,
            slug
        );

    // Helper to generate page numbers with ellipses
    const getPageNumbers = (
        total: number,
        current: number,
        delta: number = 2
    ) => {
        const range: (number | string)[] = [];
        const rangeWithDots: (number | string)[] = [];
        let l: number | undefined;

        for (let i = 1; i <= total; i++) {
            if (
                i === 1 ||
                i === total ||
                (i >= current - delta && i <= current + delta)
            ) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (Number(i) - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (Number(i) - l !== 1) {
                    rangeWithDots.push("…");
                }
            }
            rangeWithDots.push(i);
            l = Number(i);
        }

        return rangeWithDots;
    };

    const pageNumbers = getPageNumbers(totalPages, currentPage);

    return (
        <div className="flex flex-col gap-5">
            {/* Blog Count & Page Info Bar with Select Input */}
            <Suspense fallback={null}>
                <BlogListingInfoBar
                    totalBlogs={totalBlogs}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    blogsPerPage={blogsPerPage}
                />
            </Suspense>

            {/* ⭐ Suspense handles skeleton on pagination */}
            <Suspense
                key={`${currentPage}-${blogsPerPage}`}
                fallback={
                    <div className={mainBlogClass}>
                        {Array.from({ length: 9 }).map((_, i) => (
                            <BlogCardSkeleton key={i} />
                        ))}
                    </div>
                }
            >
                <CommonBlogList
                    currentPage={currentPage}
                    blogsPerPage={blogsPerPage}
                    slug={slug}
                    mainBlogClass={mainBlogClass}
                />
            </Suspense>

            {/* Pagination */}
            <Suspense fallback={null}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageNumbers={pageNumbers}
                />
            </Suspense>
        </div>
    );
};

export default CommonBlogLayout;
