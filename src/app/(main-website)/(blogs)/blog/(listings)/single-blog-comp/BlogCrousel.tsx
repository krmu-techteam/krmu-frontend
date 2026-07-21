import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import BlogCarouselSlider from "./BlogCarouselSlider";

type Props = {
  currentSlug?: string;
};

const BlogCrousel = async ({ currentSlug }: Props) => {
  const { blogs } = await getAllBlogsByPerPageOrCategorySlug(11, 1);

  const filteredBlogs = (blogs as MainBlogs[]).filter(
    (blog) => blog.slug !== currentSlug,
  );

  if (!filteredBlogs.length) return null;

  return (
    <section className="mt-8 mb-6 md:my-12 h-auto">
      <BlogCarouselSlider blogs={filteredBlogs} />
    </section>
  );
};

export default BlogCrousel;
