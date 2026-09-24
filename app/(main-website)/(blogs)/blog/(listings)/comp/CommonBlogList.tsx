import CommonBlogCard from "./CommonBlogCard";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";

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
          imageUrl={blog.image_url}
          date={blog.date_gmt}
          imageId={blog.featured_media}
        />
      ))}
    </div>
  );
};

export default CommonBlogList;
