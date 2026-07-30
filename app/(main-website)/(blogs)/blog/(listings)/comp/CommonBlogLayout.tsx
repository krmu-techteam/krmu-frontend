import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import Pagination from "./Pagination";
import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";

type Props = {
  searchParams: Promise<{ page?: string }>;
  slug?: string;
  mainBlogClass: string;
};

const CommonBlogLayout = async ({
  searchParams,
  slug,
  mainBlogClass,
}: Props) => {
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams?.page);
  const currentPage =
    Number.isInteger(page) && page > 0 ? page : 1;

  const blogsPerPage = 6;

  const { blogs, totalPages } =
    await getAllBlogsByPerPageOrCategorySlug(
      blogsPerPage,
      currentPage,
      slug
    );

  const getPageNumbers = (
    total: number,
    current: number,
    delta = 2
  ) => {
    const range: number[] = [];
    const result: (number | string)[] = [];

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    let previous: number | undefined;

    for (const page of range) {
      if (previous !== undefined) {
        if (page - previous === 2) {
          result.push(previous + 1);
        } else if (page - previous > 2) {
          result.push("…");
        }
      }

      result.push(page);
      previous = page;
    }

    return result;
  };

  const pageNumbers = getPageNumbers(
    totalPages ?? 1,
    currentPage
  );

  return (
    <>
      <div className={mainBlogClass || ""}>
        {blogs?.map((blog: MainBlogs) => (
          <CommonBlogCard
            key={blog.id}
            title={blog?.title?.rendered ?? ""}
            excerpt={blog?.excerpt?.rendered ?? ""}
            slug={blog?.slug ?? ""}
            imgId={blog?.featured_media ?? 0}
            date={blog?.date_gmt ?? ""}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        />
      )}
    </>
  );
};

export default CommonBlogLayout;