import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";

type Props = {
  currentPage: number;
  slug?: string;
  mainBlogClass: string;
};

const CommonBlogList = async ({ currentPage, slug, mainBlogClass }: Props) => {
  const blogsPerPage = 6;

  const { blogs } = await getAllBlogsByPerPageOrCategorySlug(
    blogsPerPage,
    currentPage,
    slug
  );

  return (
    <div className={mainBlogClass || ""}>
      {blogs?.map((blog: MainBlogs, i: number) => (
        <CommonBlogCard
          key={i}
          title={blog?.title?.rendered}
          excerpt={blog?.excerpt?.rendered}
          slug={blog?.slug}
          imgId={blog?.featured_media}
          date={blog?.date_gmt}
        />
      ))}
    </div>
  );
};

export default CommonBlogList;
