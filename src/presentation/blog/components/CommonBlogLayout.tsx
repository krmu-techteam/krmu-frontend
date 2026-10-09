import { getBlogService } from "@/features/blog";
import CommonBlogContainer from "./CommonBlogContainer";

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

    // Single unified fetch for SSR initial state
    const { blogs, totalPages, totalBlogs } =
        await getBlogService().getAllBlogsByPerPageOrCategorySlug(
            blogsPerPage,
            currentPage,
            slug
        );

    return (
        <CommonBlogContainer
            initialBlogs={blogs || []}
            initialTotalPages={totalPages || 1}
            initialTotalBlogs={totalBlogs || 0}
            initialCurrentPage={currentPage}
            initialBlogsPerPage={blogsPerPage}
            slug={slug}
            mainBlogClass={mainBlogClass}
        />
    );
};

export default CommonBlogLayout;
