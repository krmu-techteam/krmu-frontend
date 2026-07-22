import { getBlogService } from "@/features/blog";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import SingleBlogCarouselSlider, { BlogSlide } from "./SingleBlogCarouselSlider";

type Props = {
  currentSlug?: string;
};

const SingleBlogCarousel = async ({ currentSlug }: Props) => {
  const { blogs } = await getBlogService().getAllBlogsByPerPageOrCategorySlug(11, 1);

  // Resolve all image URLs in parallel server-side
  const slides: BlogSlide[] = (
    await Promise.all(
      (blogs as MainBlogs[])
        .filter((blog) => blog.slug !== currentSlug) // Filter out current blog
        .map(async (blog) => {
          const imgUrl = await getBlogService().getBlogImageById(blog.featured_media);
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
    <section className="mt-6 mb-4 md:my-10 h-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#093475] mb-2">
        Latest Blogs
      </h2>
      <div className="h-auto">
        <SingleBlogCarouselSlider slides={slides} />
      </div>
    </section>
  );
};

export default SingleBlogCarousel;
