import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import Pagination from "./Pagination";
import CommonBlogList from "./CommonBlogList";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;

  slug?: string;

  mainBlogClass: string;
};

const CommonBlogLayout = async ({
  searchParams,
  slug,
  mainBlogClass,
}: Props) => {
  // ------------------------------------
  // Resolve search params
  // ------------------------------------
  const resolvedSearchParams = await searchParams;

  // ------------------------------------
  // Current page
  // ------------------------------------
  const currentPage =
    Number(resolvedSearchParams?.page) || 1;

  const blogsPerPage = 6;

  // ------------------------------------
  // Fetch blogs + pagination together
  // ------------------------------------
  const { blogs, totalPages } =
    await getAllBlogsByPerPageOrCategorySlug(
      blogsPerPage,
      currentPage,
      slug
    );

  // ------------------------------------
  // Generate pagination numbers
  // ------------------------------------
  const getPageNumbers = (
    total: number,
    current: number,
    delta: number = 2
  ): (number | string)[] => {
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];

    let last: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta &&
          i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const item of range) {
      const numberItem = Number(item);

      if (last !== undefined) {
        if (numberItem - last === 2) {
          rangeWithDots.push(last + 1);
        } else if (numberItem - last !== 1) {
          rangeWithDots.push("…");
        }
      }

      rangeWithDots.push(item);

      last = numberItem;
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers(
    totalPages,
    currentPage
  );

  return (
    <>
      {/* --------------------------------
          Blog List
      -------------------------------- */}
      <CommonBlogList
        blogs={blogs}
        mainBlogClass={mainBlogClass}
      />

      {/* --------------------------------
          Pagination
      -------------------------------- */}
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