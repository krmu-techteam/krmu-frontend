import { getBlogService } from "@/features/blog";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import CommonBlogCard from "../components/CommonBlogCard";
import SingleBlogCarouselSlider from "./SingleBlogCarouselSlider";

type Props = {
  currentSlug?: string;
};

const SingleBlogCarousel = async ({ currentSlug }: Props) => {
  const { blogs } = await getBlogService().getAllBlogsByPerPageOrCategorySlug(11, 1);

  const filteredBlogs = (blogs as MainBlogs[])
    .filter((blog) => blog.slug !== currentSlug); // Filter out current blog

  if (!filteredBlogs.length) return null;

  return (
    <section className="w-full">
      <SingleBlogCarouselSlider>
        {filteredBlogs.map((blog) => (
          <CommonBlogCard
            key={blog.id}
            title={blog.title.rendered}
            excerpt={blog.excerpt.rendered}
            slug={blog.slug}
            imgId={blog.featured_media}
            date={blog.date}
          />
        ))}
      </SingleBlogCarouselSlider>
    </section>
  );
};

export default SingleBlogCarousel;
