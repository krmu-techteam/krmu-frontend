import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import Pagination from "./Pagination";
import CommonBlogList from "./CommonBlogList";

type Props = {
  searchParams: Promise<{ page?: string }>;
  slug?: string;
  mainBlogClass: string;
};

const BLOGS_PER_PAGE = 6;

// Generates page numbers with ellipses, e.g. [1, "…", 4, 5, 6, "…", 12]
const getPageNumbers = (
  total: number,
  current: number,
  delta: number = 2,
): (number | string)[] => {
  const range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let last: number | undefined;

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
    if (last) {
      if (i - last === 2) {
        rangeWithDots.push(last + 1);
      } else if (i - last !== 1) {
        rangeWithDots.push("…");
      }
    }
    rangeWithDots.push(i);
    last = i;
  }

  return rangeWithDots;
};

const CommonBlogLayout = async ({
  searchParams,
  slug,
  mainBlogClass,
}: Props) => {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  // One WordPress request per page view (cached for 1 hour by fetch)
  const { blogs, totalPages, error } = await getAllBlogsByPerPageOrCategorySlug(
    BLOGS_PER_PAGE,
    currentPage,
    slug,
  );

  console.log('imageUrl', blogs);
  if (error) {
    return (
      <p className="py-10 text-center">
        We couldn&apos;t load the blogs right now. Please refresh in a moment.
      </p>
    );
  }
  console.log('blogs', blogs);

  return (
    <>
      <CommonBlogList blogs={blogs} mainBlogClass={mainBlogClass} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumbers={getPageNumbers(totalPages, currentPage)}
      />
    </>
  );
};

export default CommonBlogLayout;
