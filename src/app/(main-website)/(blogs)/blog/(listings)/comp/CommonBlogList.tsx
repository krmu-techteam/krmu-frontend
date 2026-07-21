import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";

type Props = {
  currentPage: number;
  slug?: string;
  mainBlogClass: string;
};

const CommonBlogList = async ({ currentPage, slug, mainBlogClass }: Props) => {
  const blogsPerPage = 12;

  const { blogs } = await getAllBlogsByPerPageOrCategorySlug(
    blogsPerPage,
    currentPage,
    slug
  );

  return (
    <div className={mainBlogClass || "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
      {blogs?.map((blog: MainBlogs, i: number) => (
        <CommonBlogCard
          key={blog?.id || i}
          title={blog?.title?.rendered}
          excerpt={blog?.excerpt?.rendered}
          slug={blog?.slug}
          imgId={blog?.featured_media}
          date={blog?.date_gmt}
          categoryName={
            blog?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Btech Design"
          }
        />
      ))}
    </div>
  );
};

export default CommonBlogList;
