import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
import { getBlogImageById } from "@/lib/api/blogs/single-blog";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import BlogCarouselSlider, { BlogSlide } from "./BlogCarouselSlider";

type Props = {
  currentSlug?: string;
};

const BlogCrousel = async ({ currentSlug }: Props) => {
  const { blogs } = await getAllBlogsByPerPageOrCategorySlug(11, 1);

  // Resolve all image URLs in parallel server-side
  const slides: BlogSlide[] = (
    await Promise.all(
      (blogs as MainBlogs[])
        .filter((blog) => blog.slug !== currentSlug) // Filter out current blog
        .map(async (blog) => {
          const imgUrl = await getBlogImageById(blog.featured_media);
          if (!imgUrl) return null;
          return {
            title: blog.title.rendered,
            slug: blog.slug,
            imgUrl,
            date: blog.date_gmt,
          } satisfies BlogSlide;
        }),
    )
  ).filter((s): s is BlogSlide => s !== null);

  if (!slides.length) return null;

  return (
    <section className="mt-5 md:mt-12 h-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#093475] mb-6">
        Latest Blogs
      </h2>
      <div className="h-auto">
        <BlogCarouselSlider slides={slides} />
      </div>
    </section>
  );
};

export default BlogCrousel;
