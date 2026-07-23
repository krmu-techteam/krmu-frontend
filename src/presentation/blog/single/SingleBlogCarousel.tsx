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
            categoryName={
              blog?._embedded?.["wp:term"]?.[0]?.[0]?.name || "KRMU Blog"
            }
            authorName={blog?._embedded?.author?.[0]?.name}
            authorAvatarUrl={
              blog?._embedded?.author?.[0]?.avatar_urls?.["48"] ||
              blog?._embedded?.author?.[0]?.avatar_urls?.["24"]
            }
            authorImgId={blog?._embedded?.author?.[0]?.acf?.profile_image}
          />
        ))}
      </SingleBlogCarouselSlider>
    </section>
  );
};

export default SingleBlogCarousel;
