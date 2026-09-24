import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "./main-blogs";
// import { MainBlogs } from "@/lib/types/blogs/main-blogs";

type Props = {
  blogs: MainBlogs[];
  mainBlogClass: string;
};

const CommonBlogList = ({ blogs, mainBlogClass }: Props) => {
  if (!blogs?.length) {
    return <p className="py-10 text-center">No posts found.</p>;
  }

  return (
    <div className={mainBlogClass || ""}>
      {blogs.map((blog) => (
        <CommonBlogCard
          key={blog.id}
          title={blog.title?.rendered ?? ""}
          excerpt={blog.excerpt?.rendered ?? ""}
          slug={blog.slug}
          imageUrl={blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
          date={blog.date_gmt}
        />
      ))}
    </div>
  );
};

export default CommonBlogList;
