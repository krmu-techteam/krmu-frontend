import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";

type Props = {
  blogs: MainBlogs[];
  mainBlogClass: string;
};

const CommonBlogList = ({
  blogs,
  mainBlogClass,
}: Props) => {
  return (
    <div className={mainBlogClass}>
      {blogs?.map((blog: MainBlogs) => (
        <CommonBlogCard
          key={blog.id}
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